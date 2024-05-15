function primeFactorization(number){
    if(typeof number !== "number")
        return false;

    if(number === 0 || number === 1)
        return false;

    const primeNumbers = [];
    let divisor = 2;

    while(number >= 2){
        if(number % divisor !== 0)
            divisor++;
        else{
            primeNumbers.push(divisor);
            number = number / divisor;
        }
    }

    return primeNumbers;
}

function phi(a){
    if(typeof a !== "number")
        return false;

    if(a === 0)
        return 0;
      
    else if(a === 1)
        return 1;

    const primeFact = primeFactorization(a);
    // Different
    const diffPrimeNumbers = Array.from(new Set(primeFact));

    let result = 1;
    const divisorCount = {};
    
    if(diffPrimeNumbers.size === 1)
        result = n - n/diffPrimeNumbers[0];

    else{
        for(let i=0; i<diffPrimeNumbers.length; i++){
            result = result * (1 - 1/diffPrimeNumbers[i]);
        }

        result = parseInt(result * a);
    }

    return result;
}

console.log(
    phi(129371237198)
    // Result : 55256256000
)
