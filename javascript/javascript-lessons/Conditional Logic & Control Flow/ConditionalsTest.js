let int1 = '10';
let int2 = '12';
let result1;
let result2;
parseInt(int1);
parseInt(int2);

//shorthand
result1 = (int1 > int2) ? int1 : int2;
console.log(`${result1} is the largest number.`);

//longhand
if (int1 > int2) {
    result2 = int1;
}
else if (int2 > int1) {
    result2 = int2;
}
console.log(`${result2} is the largest number.`);