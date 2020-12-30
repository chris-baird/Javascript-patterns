// Sequential execution of functions
// =================================

// Array of task functions
const tasks = [task1, task2, task3];

// Asynchronous functon
function task1(err, cb) {
  // Error first approach
  if (err) return cb(err);
  console.log("Task 1 started");
  setTimeout(() => {
    process.nextTick(cb, "Task 1 complete");
    return;
  }, 5000);
}

// Synchronous function
function task2(err, cb) {
  if (err) return cb(err);
  console.log("Task 2 started");
  process.nextTick(cb, "Task 2 complete.");
  return;
}

function task3(err, cb) {
  if (err) return cb(err);
  console.log("Task 3 started");
  setTimeout(() => {
    process.nextTick(cb, "Task 3 complete");
    return;
  }, 2300);
}

// Task runner function
function runTasks(err, tasks, startIndex, cb) {
  if (err) return handleError(err);
  // Calls callback when the last task has completed.
  if (startIndex === tasks.length + 1) return cb(null, "All Tasks done.");
  // Calls each task recursively.
  tasks[startIndex - 1](null, (message) => {
    console.log(message);
    runTasks(null, tasks, startIndex + 1, cb);
  });
}
// Function that gets called when all the tasks  have been completed.
function onComplete(err, message, cb) {
  if (err) return cb(err);
  console.log(message);
  return;
}
// Throws error if any callbacks produce and error.
function handleError(err) {
  throw err;
}

// Bootstrapping runTasks with array starting index and callback function.
runTasks(null, tasks, 1, onComplete);
