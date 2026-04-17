let Employee = {
    firstName: "John",
    lastName: "Doe",
    startDate: new Date("January 15, 2005"),
    numYearsWorked: 21,
    isActive: false,
    department: "Engineering",
    title: "VP of Engineering",
    bonus: 0,
};

let badgeColor;

if(Employee.numYearsWorked < 5) {
    badgeColor = "Blue";
} else if(Employee.numYearsWorked < 10) {
    badgeColor = "Yellow";
} else if(Employee.numYearsWorked < 20) {
    badgeColor = "Red";
}
else {
    badgeColor = "Silver";
}
console.log(`Years of Service: ${Employee.numYearsWorked}, Employee Badge Color: ${badgeColor}`);

if(Employee.numYearsWorked > 5 && Employee.department == "Engineering") {
    console.log(`${Employee.firstName} ${Employee.lastName} is eligible for a bonus!`);
}
if(Employee.title.startsWith("VP") || numYearsWorked > 10 ) {
    console.log("Employee is eligible for stock options.");
}
if(!Employee.isActive && Employee.numYearsWorked > 20) {
    console.log("Employee is eligible for retirement benefits.");
}

//Conditional (Ternary) Operator (SHORTHAND FOR IF-ELSE)

//if(Employee.numYearsWorked > 5) {
//    Employee.bonus = 1000;
//} else {
//    Employee.bonus = 500;
//}
Employee.bonus = (Employee.numYearsWorked > 5) ? 1000 : 500;

console.log(`Employee Bonus: $${Employee.bonus}`);