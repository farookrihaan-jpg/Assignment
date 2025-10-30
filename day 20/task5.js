function greet(name) {
  console.log("Hello " + name);
}

function userInput(callback) {
  let name = "Rihaan";
  callback(name);
}

userInput(greet);
