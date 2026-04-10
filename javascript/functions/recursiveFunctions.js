//async function fetchData()
//{
//    let data = await fetch("https://format.jsonline.com/api/users");
//    return data.json();
//}
//
//fetchData().then((data) => console.log(data));
//
//A recursive function is a function that calls itself until it meets a condition.

function CountDown(n)
{
        if(n==0) {
            console.log("Blastoff");
            return;
        }
    console.log(n);
    CountDown(n-1);
}

CountDown(10);

function Fibonacci(n)
{
    if(n==0) {return 0;}
    if(n==1) {return 1;}
    if(n==2) {return 1;}
    return Fibonacci(n-1) + Fibonacci(n-2);
}

let number = Fibonacci(10);
console.log(number);

function Factorial(n)
{
    if(n == 0) {return 1};
    if(n == 1) {return 1};
    return n * Factorial(n-1);
}
console.log(Factorial(5));

