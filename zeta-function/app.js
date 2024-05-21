function zeta(s){
    if(typeof s !== "number") return false;

    if(s < -1) return false;

    else if(s === -1) return -1/12;

    const n = 100000000;
    let result = 0;
    for(let i=1; i<=n; i++){
        result += 1/Math.pow(i, s);
    }

    return result;
}

console.log(zeta(12));
// Result: 1.0002460865533078
// Wolfram zeta(12): 1.0002460865533080

console.log(zeta(1));
// Result: 18.997896413852555
// Wolfram zeta(1): Complex Infinity

console.log(zeta(-1));
// Result: -1/12
// Wolfram zeta(-1): -1/12