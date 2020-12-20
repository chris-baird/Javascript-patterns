// Revealing Module Pattern
const myModule = () => {
  let name = null || "No Name";

  return {
    getName: () => {
      return name;
    },
    setName: (userName) => {
      name = userName;
    },
  };
};

// Creating a instance of myModule
const user = myModule();

user.getName(); // "No Name"

//Using exposed method to set name
user.setName("Chris");

user.getName(); // "Chris"
