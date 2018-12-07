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

    return Math.sqrt(a);
};

const mcm = (a, b) => {
    
};

const mcd = (a, b) => {
    if (b == 0){
        return a;
    } else {
        return mcd(b, a % b);
    }
};

const prim = a => {

};

const coprim = (a, b) => {

};

module.exports = {
    sum,
    rest,
    mult,
    div,
    mod,
    exp,
    sqrt
};