class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
}

const s1 = new Student("Rihaan", 21, "A");
const s2 = new Student("kishore", 22, "C");
const s3 = new Student("aarthi", 23, "A+");
const s4 = new Student("dharshika", 21, "A+");

s1.display();
s2.display();
s3.display();
s4.display();