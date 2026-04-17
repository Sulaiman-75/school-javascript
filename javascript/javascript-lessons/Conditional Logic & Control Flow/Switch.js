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

switch (Employee.department) {
    case "Engineering":
    case "Sales":
        console.log("Meet in building 1."); 
        break;
    case "Marketing":
        console.log("Meet in building 2.");
        break;
    default:
        console.log("Meet in building 3 ");
        break;
}