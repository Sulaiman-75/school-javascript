/*
    - Functions are reusable blocks of code designed for particular tasks.
    - Functions are executed when they are called, or invoked.
    - Functions are called by their name, followed by parentheses ().
    - If functions require input to do their job, those inputs are called parameters. 
    - A function can return a value back to the code that called it.
    - Parameters are the names listed in the function definition, while arguements are the values recieved by the function.
*/

//function declaration
function Multiply(x, y) {
    return x * y
}

console.log(Multiply(6,7));

function SayHi() {
    return "ℌ𝔦"
}
console.log(SayHi());

let list = [Math.round(Math.random() * 10), Math.round(Math.random() * 10), Math.round(Math.random() * 10), Math.round(Math.random() * 10), Math.round(Math.random() * 100)];

function SumAll(numbers)
{
    let result = 0

    for(let i = 0;i < numbers.length;i++)
    {
        result += numbers[i];
    }

    return result
}

console.log(SumAll(list))

//Function Expressions
const division = function(x, y){
    return x/y
}

console.log(division(10,2));

//Arrow Functions
const subtraction = (a,b) => a-b;