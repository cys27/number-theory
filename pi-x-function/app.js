function pi(x){
    if(typeof x !== "number")
        return false;

    if(x === 0 || x === 1 || x < 0)
        return 0;

    const primeNumbers = [];
    
    function isPrime(n){
        for(let i=2; i<=Math.sqrt(n); i++){
            if(n%i === 0)
                return false;
        }

        return true;
    }
    
    let i=2;
    while(i<=x){
        if(isPrime(i))
            primeNumbers.push(i);

        i++;
    }

    return primeNumbers.length;
}

console.log(
    pi(123456)
    // Result : 11601
);
