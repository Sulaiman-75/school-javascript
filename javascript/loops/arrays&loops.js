//cars=["Toyota", "Honda", "Ford", "BMW", "Tesla"]
//years=[2010, 2012, 2015]
//
////for loop
//for (let i = 0; i < cars.length; i++) {
//    result = cars[i];
//
//    if (i === 3) {
//        break; //exits the loop when i is 3
//    }
//
//    for (let j = 0; j < years.length; j++) {
//        let result1 = result + " " + years[j];
//        console.log(result1);
//    }
//}
//
//
//function getDayOfWeek(num) {
//    let day;
//
//    switch(num) {
//        case 0:
//        day = "Sunday";
//        break;
//        case 1:
//            day = "Monday"; 
//            break; 
//        case 2:
//            day = "Tuesday";
//            break;
//        case 3:
//            day = "Wednesday";
//            break;
//        case 4:
//            day = "Thursday";  
//            break;
//        case 5:
//            day = "Friday";
//            break;
//        case 6:
//            day = "Saturday";
//            break;
//    }
//    return day;
//}
//for (let i = 0; i < 7; i++) {
//    let day = getDayOfWeek(i);
//    //skips wednesday
//    if (day === "Wednesday") {
//        continue; //skips the rest of the code in the loop when day is Wednesday
//    }
//    console.log(day);
//}

let numbers = [Math.round(Math.random() * 10), Math.round(Math.random() * 10), Math.round(Math.random() * 10), Math.round(Math.random() * 10), Math.round(Math.random() * 10)];
console.log(numbers);

function getLargestNumber(arr) {
    let result;
    let num = 0;
    for (let i = 0; i < 5; i++) {
        if (arr[i] > num) {
            num = arr[i];
        }
    }
    result = num;
    console.log(result);
}
getLargestNumber(numbers);