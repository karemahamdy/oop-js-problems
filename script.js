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
  man.withdraw(240)

  // Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.