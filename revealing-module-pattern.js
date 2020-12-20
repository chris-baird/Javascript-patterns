// Revealing Module Pattern
const myModule = (() => {
  let name = null || "No Name";

  return {
    getName: () => {
      return name;
    },
    setName: (userName) => {
      name = userName;
    },
  };
})();

myModule.getName(); // "No Name"

//Using exposed method to set name
myModule.setName("Chris");

myModule.getName(); // "Chris"
