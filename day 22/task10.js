function student(name, age) {
  this.name = name;
  this.age = age;
}
student.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const s1 = new student("Rihaan", 18);
const s2 = new student("Kishore", 19);

s1.greet();
s2.greet();