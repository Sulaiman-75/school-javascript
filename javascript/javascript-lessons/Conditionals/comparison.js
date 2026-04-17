let value1 = 7 > 5;
console.log(value1); // true

let value2 = 5 <= 3;
console.log(value2); // false

// A single = is an assignment operator
// Double == is a loose equality operator. It only checks for value, not type.
// Triple === is a strict equality operator. It checks for both value and type.

let val3 = 3 === 3;
console.log(val3); // true

let val4 = 3 == "3";
console.log(val4); // true

let val5 = "Hi" != "hi";
console.log(val5); // true

let str1 = "Hello";
let str2 = "Hello";
let val6 = str1 === str2;
console.log(val6); // true

let obj1 = {};
let obj2 = {};
let val7 = obj1 === obj2;
console.log(val7); // false 

let obj3 = obj1;
let val8 = obj1 === obj3;
console.log(val8); // true

