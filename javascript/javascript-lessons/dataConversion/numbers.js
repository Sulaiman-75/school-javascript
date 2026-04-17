let num1 = 6.123456789;
console.log(`${num1} rounded to an integer is ${Math.round(num1)}`); // 7
console.log(`The ceiling of ${num1} is ${Math.ceil(num1)}`); // 7
console.log(`The floor of ${num1} is ${Math.floor(num1)}`); // 6

// Converts a a numbmer to a string with the number of decimal places specified
let fixed = num1.toFixed(3);
console.log(`${num1} rounded to 3 decimal places is ${fixed}`); // 6.123

// Local Formats
let num2 = 1_000_000;
console.log(`${num2} in US English format is ${num2.toLocaleString('en-US')}`); // 1,000,000
console.log(`${num2} in German format is ${num2.toLocaleString('de-DE')}`); // 1.000.000
console.log(`${num2} in Arabic (Egypt) format is ${num2.toLocaleString('ar-EG')}`); // 1,000,000
console.log(`${num2} in Hong Kong format is ${num2.toLocaleString('zh-HK')}`); // 1
console.log(`${num2} in British format is ${num2.toLocaleString('en-GB')}`); // 1
console.log(`${num2} in Indonesian format is ${num2.toLocaleString('id-ID')}`); // 1
console.log(`${num2} in Greek format is ${num2.toLocaleString('el-EL')}`); // 1

let salary = 89_344.89

let formatter1 = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
console.log(`Salary in US English format is ${formatter1.format(salary)}`); // $89,344.89
let formatter2 = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' });
console.log(`Salary in German format is ${formatter2.format(salary)}`);  
let formatter3 = new Intl.NumberFormat("ja-JP", { style: 'currency', currency: 'JPY'})
console.log(`Salary in Japanese format is ${formatter3.format(salary)}`);
let formatter4 = new Intl.NumberFormat("ZH-zh", { style: 'currency', currency: 'CNY'})
console.log(`Salary in Chinese format is ${formatter3.format(salary)}`);