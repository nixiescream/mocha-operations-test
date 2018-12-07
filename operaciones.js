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

module.exports = {
    sum,
    rest,
    mult,
    div,
    mod,
    exp
};