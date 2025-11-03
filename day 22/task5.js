class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  display() {
    console.log(`Employee Name: ${this.name}`);
    console.log(`Employee Salary: ₹${this.salary}`);
  }
}
class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary); 
    this.department = department;
  }
  display() {
    super.display();
    console.log(`Department: ${this.department}`);
  }
}
const mgr1 = new Manager("Aisha Khan", 80000, "Human Resources");
mgr1.display();
