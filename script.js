'use strict';

// Write a JavaScript program to create a class called "Person" with properties for name, age and country.
//  Include a method to display the person's details. 
// Create two instances of the 'Person' class and display their details.
 class Person {
  constructor(name,age,country){
    this.name = name
    this.age= age 
    this.country = country
  }
   getDetails (){
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Country: ${this.country}`);
   }
 }

 const person1 = new Person("omar",20,"US")
 const person2 = new Person("mohamed",20,"EGY")

 console.log(person1)
 console.log(person2)

 person1.getDetails()
 person2.getDetails()

 // second method 
//  const Person = function(name,age,country){
//   this.name = name
//   this.age= age 
//   this.country = country

//   this.getDetails = function (){
//     console.log(`Name: ${this.name}`);
//     console.log(`Age: ${this.age}`);
//     console.log(`Country: ${this.country}`);
//    }
// }

// const person1 = new Person("omar",20,"US")
// const person2 = new Person("mohamed",20,"EGY")

// console.log(person1)
// console.log(person2)

//method 3
// const Person = {
  
//     getDetails(){
//       console.log(`Name: ${this.name}`);
//       console.log(`Age: ${this.age}`);
//       console.log(`Country: ${this.country}`);
//      },

//      init(name,age,country){
//       this.name = name
//       this.age= age 
//       this.country = country
//   }
// }
// const steven = Object.create(Person);
// steven.name = 'Steven';
// steven.age = 20;
// steven.country = "uk";
// steven.getDetails();
  


//  Write a JavaScript program to create a class called 'Rectangle' with properties for width and height.
//  Include two methods to calculate rectangle area and perimeter. 
// Create an instance of the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
  constructor(width,height){
    this.width = width
    this.height = height
  }
  getArea(){
   return this.width * this.height
  }
  getperimeter(){
  return 2 * (this.width + this.height);
  }
}

const calc1 = new Rectangle (12,15)
console.log(calc1.getArea())
console.log(calc1.getperimeter())

const calc2 = new Rectangle (2,5)
console.log(calc2.getArea())
console.log(calc2.getperimeter())

//  second method 
//  const Rectangle = function(width,height){
//   this.width = width
//   this.height= height 

// this.getArea =function() {
//   return this.width * this.height
//  }
//  this.getperimeter =function() {
//   return 2 * (this.width + this.height);
//  }
// }
//  const calc1 = new Rectangle (12,15)
//  console.log(calc1.getArea())
//  console.log(calc1.getperimeter())
 
//  const calc2 = new Rectangle (2,5)
//  console.log(calc2.getArea())
//  console.log(calc2.getperimeter())

//method 3
// const Rectangle = {
//   getArea(){
//     return this.width * this.height
//    },
//    getperimeter(){
//    return 2 * (this.width + this.height);
//    },

//     init(width,height){
//     this.width = width
//     this.height = height
//   }

// }
// const steven = Object.create(Rectangle);
// steven.width = 15;
// steven.height = 20;
// steven.getArea();
// steven.getperimeter();


// Write a JavaScript program that creates a class called 'Vehicle' with properties for make, model, and year. 
// Include a method to display vehicle details.
//  Create a subclass called 'Car' that inherits from the 'Vehicle' class and includes an additional property for the number of doors.
//  Override the display method to include the number of doors.

class Vehicle {
  constructor(make, model ,year ){
    this.make = make
    this.model = model
    this.year = year
  }
  displayDetails(){
    console.log(`make: ${this.make}`);
    console.log(`model: ${this.model}`);
    console.log(`year: ${this.year}`);
  }
}

const bm = new Vehicle("bm","2019",2002)
bm.displayDetails()

class Car extends Vehicle {
  constructor(make, model ,year , doors ){
   super(make, model ,year )
   this.doors =doors
}
displayDetails(){
  super.displayDetails()
  console.log(`doors: ${this.doors}`);
}
}

const jeep = new Car("jeep","209",2005,4)
console.log(jeep)
jeep.displayDetails()

// method object.create
// const vehiclePrototype = {
//   displayDetails: function() {
//     console.log(`make: ${this.make}`);
//     console.log(`model: ${this.model}`);
//     console.log(`year: ${this.year}`);
//   }
// };

// const vehicle2 = Object.create(vehiclePrototype);
// vehicle2.make = "bm";
// vehicle2.model = "2019";
// vehicle2.year = 2002;
// vehicle2.displayDetails();

// const carPrototype = Object.create(vehiclePrototype);
// carPrototype.displayDetails = function() {
//   vehiclePrototype.displayDetails.call(this);
//   console.log(`doors: ${this.doors}`);
// };

// const car2 = Object.create(carPrototype);
// car2.make = "jeep";
// car2.model = "209";
// car2.year = 2005;
// car2.doors = 4;

// console.log(car2);
// car2.displayDetails();


// Write a JavaScript program that creates a class called "BankAccount" with properties for account number and balance. 
// Include methods to deposit and withdraw money from the account. 
// Create some instances of the "BankAccount" class, deposit some money, and withdraw a portion of it.

class BankAccount {
  constructor(accNum , balance ){
    this.accNum = accNum
    this.balance = balance
  }
  deposit(amount){
    this.balance += amount
    console.log(`deposit: ${this.balance}`)
  }
  withdraw(amount){
    if (amount <= this.balance){
      this.balance -= amount
    console.log(`withdraw: ${this.balance}`)
  }
  else{
    console.log(`want this ${amount} to do witgdraw`)
  }
}
}
  const man = new BankAccount (10, 220,)
  console.log(man)
  man.deposit(20)
  man.withdraw(260)
  man.deposit(240)

  // Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area.
  //  Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. 
  // Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

  class Shape {
    calculateArea(){
    console.log("this method calc area");
  }
}
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rctangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(7);
const circleArea = circle.calculateArea();
console.log(`Circle Area: ${circleArea}`);

// Create an instance of the Rectangle class
const rectangle = new Rctangle(8, 9);
const rectangleArea = rectangle.calculateArea();
console.log(`Rectangle Area: ${rectangleArea}`);

// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary.
//  Include a method to calculate annual salary.
//  Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. 
// Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class
// and calculate their annual salary.

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
    console.log(`Name of the Employee: ${name}`);
    console.log(`Monthly Salary: $${salary}`);
  }

 calculateAnnualSalary() {
    return this.salary * 12;
  }
}
class Manager extends Employee {
  constructor(name, salary, department){
    super(name, salary)
    this.department = department
  }
  calculateAnnualSalary(){
    const baseSalary = super.calculateAnnualSalary();
    const bonus = 0.1; 
    console.log(`Bonus (10% of the base salary): ${bonus}`);
    return (bonus * baseSalary) + baseSalary;
  }
}

const manager1 = new Manager('Karema', 5000, 'Frontend');
const annualSalary1 = manager1.calculateAnnualSalary();

console.log(`Manager: ${manager1.name}`);
console.log(`Department: ${manager1.department}`);
console.log(`Annual Salary: $${annualSalary1}`);


// Write a JavaScript program that creates a class called University with properties for university name and departments.
//  Include methods to add a department, remove a department, and display all departments.
//  Create an instance of the University class and add and remove departments.

class University {
  constructor(name){
   this.name = name
   this.departments = [];
  }
  addDepartment(department){
    this.departments.push(department);
    console.log(  this.departments)
  }
  removeDepartment(department) {
    const index = this.departments.indexOf(department) 
    if (department !== -1) {
      this.departments.splice(index, 1);
      console.log(`Department "${department}" removed from ${this.name}.`);
    } else {
      console.log("nothing here")
    }
  }
  displayDepartments() {
    console.log(`Departments in ${this.name}:`);
    if (this.departments.length === 0) {
      console.log('No departments available.');
    } else {
      this.departments.forEach((department, index) => {
        console.log(`${index + 1}. ${department}`);
      });
    }
  }
}

const university = new University('ABC University');
university.displayDepartments(); 
university.addDepartment('Science');
university.addDepartment('Mathematics');
university.removeDepartment('Mathematics');
university.displayDepartments();

// write a program class that takes name and password and protect once and another private 
class User{
  constructor(name, password){
      this._name = name
      this._password = password
  }
}

const karema = new User("karema", 123456)
console.log(karema._password);


class User1{
  #name1
  constructor(name1, password){
      this.#name1 = name1
      this._password = password
  }
  
 
  #printName(){
    console.log(this.#name1);
}
PrintFromPrivateMethod(){
  this.#printName()
}
}

const kedar = new User1("kedar", 123456)
kedar.PrintFromPrivateMethod()