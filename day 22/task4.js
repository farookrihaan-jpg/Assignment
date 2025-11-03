// Create a class Employee with name and salary — add a method to display info.
class employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  display() {
    console.log(`Employee Name: ${this.name}`);
    console.log(`Employee Salary: ₹${this.salary}`);
  }
}
const emp1 = new employee("Mohammed Rihaan", 50000);
const emp2 = new employee("kishore kumar", 35000);
emp1.display();
emp2.display();