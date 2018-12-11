const E = require('./e');

const sum = (a, b) => a + b;

const rest = (a, b) => a - b;

const mult = (a, b) => a * b;

const div = (a, b) =>{
    if(b === 0){
        throw new Error('Can\'t divide by 0');
    }

    return a / b;
};

const mod = (a, b) => a % b;

const pow = (a, b) => a ** b;

const exp = a => E ** a;

const sqrt = a => {
    if(a < 0){
        throw new Error('Negative square root of a number is not a real number');
    }

    let guess = a / 3;
 
    do {
        lastGuess = guess;
        guess = (a / guess + guess) / 2;
    } while(lastGuess - guess > 5e-20);
    
    return guess;
};

const mcm = (a, b) => (!a || !b) ? 0 : (a * b) / mcd(a, b);

const mcd = (a, b) => (b == 0) ? a : mcd(b, a % b);

const prim = a => {
    for(var i = 2; i < sqrt(a); i++) {
        if(a % i === 0) {
            return false;
        }
    }
    return a > 1;
};

const coprim = (a, b) =>  mcd(a, b) === 1;

const ln = a => {
    const n = 100000000.0
    return n * ((a ** (1/n)) - 1);
}

const log10 = a => {
    if(a === 0){
        throw new Error('Logarithm of 0 is not a real number');
    }

    if(a < 0){
        throw new Error('Logarithm of a negative number is not a real number');
    }

    return ln(a) / ln(10);
}

module.exports = {
    sum,
    rest,
    mult,
    div,
    mod,
    pow,
    exp,
    sqrt,
    mcd,
    mcm,
    prim,
    coprim,
    log10
};