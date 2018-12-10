const sum = (a, b) => a + b;

const rest = (a, b) => a - b;

const mult = (a, b) => a * b;

const div = (a, b) =>{
    if(b === 0){
        throw new Error('div by 0');
    }

    return a / b;
};

const mod = (a, b) => a % b;

const exp = (a, b) => a ^ b;

const sqrt = a => {
    if(a < 0){
        throw new Error('negative square root');
    }

    let lastGuess, guess = a / 3;
 
    do {
        lastGuess = guess;
        guess = (a / guess + guess) / 2;
    } while(Math.abs(lastGuess - guess) > 5e-15);
    
    return guess;
};

const mcm = (a, b) => {
    return (!a || !b) ? 0 : Math.abs((a * b) / mcd(a, b));
    
};

const mcd = (a, b) => {
    return (b == 0) ? a : mcd(b, a % b);
};

const prim = a => {
    for(var i = 2; i < a; i++) {
        if(a % i === 0) {
            return false;
        }
    }
    return a > 1;
};

const coprim = (a, b) => {
    return mcd(a, b) === 1;
};

module.exports = {
    sum,
    rest,
    mult,
    div,
    mod,
    exp,
    sqrt,
    mcd,
    mcm,
    prim,
    coprim
};