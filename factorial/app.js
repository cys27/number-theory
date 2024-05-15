function factorial(n){
    if(typeof n !== "number")
        return false;

    if(n < 0)
        return false;

    else if(n === 0 || n === 1)
        return 1;

    return n * factorial(n-1);
}
