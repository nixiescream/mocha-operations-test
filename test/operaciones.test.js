const assert = require('assert');
const op = require('../operaciones');
const gcd = require('compute-gcd');
const lcm = require('compute-lcm');
const isPrime = require('is-prime');
const isCoprime = require('is-coprime');

let a = 0;
let b = 0;

describe('Operations', () => {
    beforeEach(() => {
        a = getRandomInt(0, 1000);
        b = getRandomInt(1000, 2000);
    });

    afterEach(() => {
        a = 0;
        b = 0;
    });

    describe('Add tests', () => {
        it('Add two positive numbers', () => {
            let res = op.sum(a, b);
    
            assert.ok(res >= 0);
            assert.equal(res, a + b);
        });

        it('Add two negative numbers', () => {
            a = getRandomInt(-2000, -1000);
            b = getRandomInt(-1000, -1);

            let res = op.sum(a, b);

            assert.ok(res < 0);
            assert.equal(res, a + b);
        });

        it('Add a positive number with a negative number', () => {
            b = getRandomInt(-1000, -1);

            let res = op.sum(a, b);

            assert.equal(res, a + b);
        });
    })

    describe('Substract tests', () => {
        it('Substract two positive values', () => {
            let res = op.rest(a, b);
            
            assert.equal(res, a - b);
        });

        it('Substract two negative numbers', () => {
            a = getRandomInt(-2000, -1000);
            b = getRandomInt(-1000, -1);

            let res = op.rest(a, b);

            assert.equal(res, a - b);
        });

        it('Substract a positive number with a negative number', () => {
            b = getRandomInt(-1000, -1);

            let res = op.rest(a, b);

            assert.equal(res, a - b);
        });
    })

    describe('Multiply tests', () => {
        it('Multiply two positive numbers', () => {
            let res = op.mult(a, b);
    
            assert.equal(res, a * b);
        });

        it('Multiply two negative numbers', () => {
            a = getRandomInt(-2000, -1000);
            b = getRandomInt(-1000, -1);
            let res = op.mult(a, b);
    
            assert.equal(res, a * b);
        });

        it('Multiply a positive number with a negative number', () => {
            b = getRandomInt(-1000, -1);
            let res = op.mult(a, b);
    
            assert.equal(res, a * b);
        });
    });

    describe('Division tests', () => {
        it('Divide two positive numbers (a > b)', () => {
            let res = op.div(a, b);
    
            assert.equal(res, a / b);
        });

        it('Divide two positive numbers (a < b)', () => {
            let res = op.div(b, a);
    
            assert.equal(res, b / a);
        });

        it('Divide two negative numbers (a > b)', () => {
            a = getRandomInt(-2000, -1000);
            b = getRandomInt(-1000, -1);
            let res = op.div(a, b);
    
            assert.equal(res, a / b);
        });

        it('Divide two negative numbers (a < b)', () => {
            a = getRandomInt(-2000, -1000);
            b = getRandomInt(-1000, -1);
            let res = op.div(b, a);
    
            assert.equal(res, b / a);
        });

        it('Divide two numbers (dividend: +a, divisor: -b)', () => {
            b = getRandomInt(-1000, -1);
            let res = op.div(a, b);
    
            assert.equal(res, a / b);
        });

        it('Divide two numbers (dividend: -a divisor: +b)', () => {
            a = getRandomInt(-1000, -1);
            let res = op.div(a, b);
    
            assert.equal(res, a / b);
        });

        it('Divide two numbers (dividend: +b, divisor: -a)', () => {
            a = getRandomInt(-1000, -1);
            let res = op.div(b, a);
    
            assert.equal(res, b / a);
        });

        it('Divide two numbers (dividend: -b divisor: +a)', () => {
            b = getRandomInt(-1000, -1);
            let res = op.div(b, a);
    
            assert.equal(res, b / a);
        });
    
        it('Divide by 0', () => {
            try {
                op.div(a, 0);
                assert(false);
            } catch(e) {
                assert(true);
            }
        });

        it('Get the module of the division (dividend: +a, divisor: +b)', () => {
            let res = op.mod(a, b);
    
            assert.equal(res, a % b);
        });

        it('Get the module of the division (dividend: -a, divisor: -b)', () => {
            a = getRandomInt(-2000, -1000);
            b = getRandomInt(-1000, -1);
            let res = op.mod(a, b);
    
            assert.equal(res, a % b);
        });

        it('Get the module of the division (dividend: +a, divisor: -b)', () => {
            b = getRandomInt(-1000, -1);
            let res = op.mod(a, b);
    
            assert.equal(res, a % b);
        });

        it('Get the module of the division (dividend: -a, divisor: +b)', () => {
            a = getRandomInt(-2000, -1000);
            let res = op.mod(a, b);
    
            assert.equal(res, a % b);
        });
    });

    describe('Exponent, square roots and logarithms tests', () => {
        it('Get the base to the exponent power (both positives)', () => {
            let res = op.pow(a, b);
    
            assert.equal(res, Math.pow(a,b));
        });

        it('Get the base to the exponent power (both negatives)', () => {
            a = getRandomInt(-2000, -1000);
            b = getRandomInt(-1000, -1);
            let res = op.pow(a, b);

            assert.equal(res, Math.pow(a,b));
        });

        it('Get the base to the exponent power (positive base, negative exponent)', () => {
            b = getRandomInt(-1000, -1);
            let res = op.pow(a, b);
    
            assert.equal(res, Math.pow(a,b));
        });

        it('Get the base to the exponent power (negative base, positive exponent)', () => {
            a = getRandomInt(-1000, -1);
            let res = op.pow(a, b);
    
            assert.equal(res, Math.pow(a,b));
        });

        it('Get the base to the exponent power (E base, positive exponent)', () => {
            let res = op.exp(a);

            assert.equal(res.toPrecision(12), Math.exp(a).toPrecision(12));
        });

        it('Get the base to the exponent power (E base, negative exponent)', () => {
            a = getRandomInt(-1000, -1);
            let res = op.exp(a);
    
            assert.equal(res.toPrecision(12), Math.exp(a).toPrecision(12));
        });

        it('Positive square root', () => {
            let res = op.sqrt(a);

            assert.equal(res.toPrecision(14), Math.sqrt(a).toPrecision(14));
        });

        it('Negative square root', () => {
            a = getRandomInt(-1000, -1);
            try {
                op.sqrt(a);
                assert(false);
            } catch(e) {
                assert(true);
            }
        });

        it('Base 10 logarithm', () => {
            let res = op.log10(a);
            
            assert.equal(res.toFixed(5), Math.log10(a).toFixed(5));
        });

        it('Base 10 logarithm of 0', () => {
            try {
                a = 0;
                op.log10(a);
                assert(false);
            } catch(e) {
                assert(true);
            }
        });

        it('Base 10 logarithm of a negative number', () => {
            try {
                a = getRandomInt(-1000, -1);
                op.log10(a);
                assert(false);
            } catch(e) {
                assert(true);
            }
        });

        it('Add two logarithms', () => {
            let res = op.log10(a * b).toFixed(5);
            
            assert.equal(res, (Math.log10(a) + Math.log10(b)).toFixed(5));
        });

        it('Logarithm of a square root', () => {
            let res = op.log10(op.sqrt(a)).toFixed(5);
            
            assert.equal(res, (1/2 * (Math.log10(a))).toFixed(5));
        });
    });

    describe('Common factors tests', () => {
        it('Get the least common multiple', () =>  {
            let res = op.mcm(a, b);

            assert.equal(res, lcm(a, b));
        });

        it('Get the greatest common divisor', () => {
            let res = op.mcd(a, b);

            assert.equal(res, gcd(a, b));
        });
    });

    describe('Prime tests', () => {
        it('Is a number prime?', () => {
            let res = op.prim(a);

            assert.equal(res, isPrime(a));
        });

        it('Are the numbers coprimes?', () => {
            let res = op.coprim(a, b);

            assert.equal(res, isCoprime(a, b));
        })
    });

    describe('Decimals tests', () => {
        it('Get the number of decimals', () => {
            a = getRandomFloat(1, 1000);
            b = getRandomInt(0, 10);
            let res = op.numberOfDecimals(a, b);

            assert.equal(res, (Math.round(a * (10 ** b))/(10 ** b)));
        });
    });
});

const getRandomFloat = (min, max) =>  {
    return Math.random() * (max - min + 1);
}

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}