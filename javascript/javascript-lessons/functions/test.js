function Factorial(n)
{
    if(n==1){return 1;}
    if(n==0){return 1;}
    if(n==2){return 2;}

    return n * Factorial(n-1);
}

let result = Factorial(5);
console.log(result);