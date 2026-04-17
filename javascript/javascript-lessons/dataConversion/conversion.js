//using typeof function
let strValue = "Hello, World!";
console.log(`The type of strValue is: ${typeof strValue}`); // Output: string
let numValue = 42;
console.log(`The type of numValue is: ${typeof numValue}`); // Output: number
let boolValue = true;
console.log(`The type of boolValue is: ${typeof boolValue}`); // Output: boolean

//Joinng a nonstring value with a string

let name = "Alice";
let age = 30;
let description = `${name} is ${age} years old.`;
console.log(description); // Output: Alice is 30 years old

//Converting a string to a number

let stringNumber = "123.45";
let stringNumber2 = "5";
console.log(`${stringNumber} is of type: ${typeof stringNumber}`); // Output: string
console.log(stringNumber + stringNumber2); // Writes the strings together
let numFromString = Number(stringNumber);
let numFromString2 = Number(stringNumber2);
console.log(numFromString + numFromString2); // Output: 128.45

//Converting to a boolean
let bool1 = 0;
let bool2 = 14;
// 0 converts to false, any non-zero number converts to true
console.log(Boolean(bool1)); // Output: false
console.log(Boolean(bool2)); // Output: true