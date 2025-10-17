let employee = {
    firstName: "John",
    lastName: "Doe",
    birthDate: new Date("January 15, 1993"),
    salary: 50000
}
console.log("Employee")

let jsonValue = JSON.stringify(employee);
console.log(`JSON Value: ${jsonValue}`);

// Converting back to object
let newEmployee = JSON.parse(jsonValue);
console.log(newEmployee.salary);