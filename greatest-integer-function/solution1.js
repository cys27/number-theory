// Solution without Math built-in object. And I didn't use any mathematical functions like parseInt(), Number()...
function greatestInteger(num){
    if(typeof num !== "number")
        return false;

    let isFloat;
    const numberString = num.toString().match(/\./g);

    isFloat = !(numberString === null);

    let result = "";
    if(isFloat){
        for(let i=0; i<num.toString().length; i++){
            if(num.toString()[i] === ".")
                break;

            result += num.toString()[i];
        }

        if(num < 0){
            result = result - 1;
        }
    }
    else{
        result = num;
    }

    return result;
}
