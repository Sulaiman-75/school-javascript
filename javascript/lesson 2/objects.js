/*
In programming, everything is considered an object.
Objects are created using object literals. ex. let obj1 = {}
Objects are also created with a constructor. This is the preferred way. ex. 
let obj1 = new Object();
Populate with variables with . operator and the property.
*/
person1 = {}
person1.firstName = "Sulaiman";
person1.lastName = "Awan";
person1.age = 15
person1.isActive = true;
person1.dateOfBirth = new Date(2009, 11, 22);
person1.startDate = new Date(2025, 11, 1, 9, 30);
person1.vacationDays = 0;
person1.salary = 67.43;

//Populating an object on creation
let person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    isActive: true,
    dateOfBirth: new Date(1998, 5, 15),
    startDate: new Date(2023, 11, 1, 9, 30),
    vacationDays: 2,
    salary: 23.57

}

console.log(`Employee2's first name is ${person2.firstName} and last name is ${person2.lastName}`);
console.log(`Employee2's start date is ${person2.startDate}`);
console.log(`Employee2's salary is $${person2.salary}/hour`);

//deleting an object's property
delete person2.firstName;

console.log(`Employee2's first name is ${person2.firstName} and last name is ${person2.lastName}`);
console.log(`Employee2's start date is ${person2.startDate}`);
console.log(`Employee2's salary is $${person2.salary}/hour`);

let person3 = person2;
person3.firstName = "Jane";
person3.lastName = "Smith";
console.log(`Employee3's first name is ${person3.firstName} and last name is ${person3.lastName}`);
