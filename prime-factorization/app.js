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
