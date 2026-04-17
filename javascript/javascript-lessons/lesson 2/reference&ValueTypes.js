let a = 5;
let b = a;
b = 10;
console.log(a);

let str1 = "Hello";
let str2 = str1;
str2 = "World";
console.log(str1)

let isTrue = true;
let isFalse = isTrue;
isFalse = false;
console.log(isTrue);
console.log(isFalse);

let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1);
console.log(arr2);

let person1 = { name: "Shameel", age: 29};
let person2 = person1;
person2.name = "Sam";
console.log(person1);
console.log(person2);

function modifyNumber(num) {
    num = 42;
}

let originalNum = 10;
modifyNumber(originalNum);
console.log(originalNum);

function modifyArray(arr) {
    arr.push(42);
}

let myArray = [1, 2, 3];
modifyArray(myArray);
console.log(myArray);