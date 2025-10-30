function task(callback) {
  console.log("wait for few sec...");
  setTimeout(() => {callback();}, 5000);
}
function message() {
  console.log("task complete");
}
task(message);
