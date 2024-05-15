function isPerfect(number){
    if(typeof number !== "number")
        return false;

    if(number === 0)
        return false;

    else if(number === 1)
        return true;

    const divisors = [];
    for(let i=1; i<number; i++){
        if(number % i === 0)
            divisors.push(i);
    }

    const sumDivisors = divisors.reduce((a,b) => a+b, 0);

    return number === sumDivisors;
}

console.log(
    isPerfect(6)
    /*
        Divisors of Number 6

        divisors = { 1, 2, 3 }

        Sum of divisors = 1 + 2 + 3 = 6

        6 is an perfect number.
    */
)
