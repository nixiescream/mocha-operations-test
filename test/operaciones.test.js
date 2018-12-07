const assert = require('assert');
const op = require('../operaciones');

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
    
            assert(res);
            assert.ok(res >= 0);
            assert.equal(res, a + b);
        });

        it('Add two negative numbers', () => {
            a = getRandomInt(-2000, -1000);
            b = getRandomInt(-1000, -1);

            let res = op.sum(a, b);

            assert(res);
            assert.ok(res < 0);
            assert.equal(res, a + b);
        });

        it('Add a positive number with a negative number', () => {
            b = getRandomInt(-1000, -1);

            let res = op.sum(a, b);

            assert(res);
            assert.equal(res, a + b);
        });
    })

    describe('Substract tests', () => {
        it('Substract two positive values', () => {
            let res = op.rest(a, b);
            
            assert(res);
            assert.equal(res, a - b);
        });

        it('Substract two negative numbers', () => {
            a = getRandomInt(-2000, -1000);
            b = getRandomInt(-1000, -1);

            let res = op.rest(a, b);

            assert(res);
            assert.equal(res, a - b);
        });

        it('Substract a positive number with a negative number', () => {
            b = getRandomInt(-1000, -1);

            let res = op.rest(a, b);

            assert(res);
            assert.equal(res, a - b);
        });
    })

    describe('Multiply tests', () => {
        it('Multiply two positive numbers', () => {
            let res = op.mult(a, b);
    
            assert(res);
            assert.equal(res, a * b);
        });

        it('Multiply two negative numbers', () => {
            a = getRandomInt(-2000, -1000);
            b = getRandomInt(-1000, -1);
            let res = op.mult(a, b);
    
            assert(res);
            assert.equal(res, a * b);
        });

        it('Multiply a positive number with a negative number', () => {
            b = getRandomInt(-1000, -1);
            let res = op.mult(a, b);
    
            assert(res);
            assert.equal(res, a * b);
        });
    });

    describe('Division tests', () => {
        it('Divide two positive numbers (a > b)', () => {
            let res = op.div(a, b);
    
            assert(res);
            assert.equal(res, a / b);
        });

        it('Divide two positive numbers (a < b)', () => {
            let res = op.div(b, a);
    
            assert(res);
            assert.equal(res, b / a);
        });

        it('Divide two negative numbers (a > b)', () => {
            a = getRandomInt(-2000, -1000);
            b = getRandomInt(-1000, -1);
            let res = op.div(a, b);
    
            assert(res);
            assert.equal(res, a / b);
        });

        it('Divide two negative numbers (a < b)', () => {
            a = getRandomInt(-2000, -1000);
            b = getRandomInt(-1000, -1);
            let res = op.div(b, a);
    
            assert(res);
            assert.equal(res, b / a);
        });

        it('Divide two numbers (dividend: +a, divisor: -b)', () => {
            b = getRandomInt(-1000, -1);
            let res = op.div(a, b);
    
            assert(res);
            assert.equal(res, a / b);
        });

        it('Divide two numbers (dividend: -a divisor: +b)', () => {
            a = getRandomInt(-1000, -1);
            let res = op.div(a, b);
    
            assert(res);
            assert.equal(res, a / b);
        });

        it('Divide two numbers (dividend: +b, divisor: -a)', () => {
            a = getRandomInt(-1000, -1);
            let res = op.div(b, a);
    
            assert(res);
            assert.equal(res, b / a);
        });

        it('Divide two numbers (dividend: -b divisor: +a)', () => {
            b = getRandomInt(-1000, -1);
            let res = op.div(b, a);
    
            assert(res);
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
    
            assert(res);
            assert.equal(res, a % b);
        });

        it('Get the module of the division (dividend: -a, divisor: -b)', () => {
            a = getRandomInt(-2000, -1000);
            b = getRandomInt(-1000, -1);
            let res = op.mod(a, b);
    
            assert(res);
            assert.equal(res, a % b);
        });

        it('Get the module of the division (dividend: +a, divisor: -b)', () => {
            b = getRandomInt(-1000, -1);
            let res = op.mod(a, b);
    
            assert(res);
            assert.equal(res, a % b);
        });

        it('Get the module of the division (dividend: -a, divisor: +b)', () => {
            a = getRandomInt(-2000, -1000);
            let res = op.mod(a, b);
    
            assert(res);
            assert.equal(res, a % b);
        });
    });

    describe('Exponent and square roots test', () => {
        it('Get the base to the exponent power (both positives)', () => {
            let res = op.exp(a, b);
    
            assert(res);
            assert.equal(res, a ^ b);
        });

        it('Get the base to the exponent power (both negatives)', () => {
            a = getRandomInt(-2000, -1000);
            b = getRandomInt(-1000, -1);
            let res = op.exp(a, b);
    
            assert(res);
            assert.equal(res, a ^ b);
        });

        it('Get the base to the exponent power (positive base, negative exponent)', () => {
            b = getRandomInt(-1000, -1);
            let res = op.exp(a, b);
    
            assert(res);
            assert.equal(res, a ^ b);
        });

        it('Get the base to the exponent power (negative base, positive exponent)', () => {
            a = getRandomInt(-1000, -1);
            let res = op.exp(a, b);
    
            assert(res);
            assert.equal(res, a ^ b);
        });

        it('Positive square root', () => {
            let res = op.sqrt(a);

            assert(res);
            assert.equal(res, Math.sqrt(a));
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
    });
});

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}