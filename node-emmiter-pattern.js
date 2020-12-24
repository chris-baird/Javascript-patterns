const EventEmitter = require('events')
 class TodoEmitter extends EventEmitter {
 }

//  New todo emitter instance
const todoEmitter = new TodoEmitter(['Test Todo']);

// Todo List
const todoList = [];

// View todoList
todoEmitter.on('VIEWTODOS', () => {
  console.log(todoList) ;
})

// Add todo
todoEmitter.on('TODOADDED', (todo) => {
  todoList.push(todo);
})

// Remove todo
todoEmitter.on('TODODELETED', (todoIndex) => {
  todoList.forEach((todo, index) => {
    return todoIndex === todo.id ? todoList.splice(index,1) : null
  })
})

todoEmitter.emit('VIEWTODOS')
todoEmitter.emit('TODOADDED', {id:1,todo:'Test Todo'})
todoEmitter.emit('VIEWTODOS')
todoEmitter.emit('TODOADDED', {id:2,todo:'Test Todo 2'})
todoEmitter.emit('VIEWTODOS')

todoEmitter.emit('TODODELETED',1 )
todoEmitter.emit('VIEWTODOS')

