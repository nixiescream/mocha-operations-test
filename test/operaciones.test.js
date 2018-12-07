const assert = require('assert');
const op = require('../operaciones');

let a = 0;
let b = 0;

before(() => {
    console.log('Before');
});

describe("Operaciones", () => {
    beforeEach(() => {
        a = getRandomInt(0, 1000);
        b = getRandomInt(1000, 2000);
    });

    afterEach(() => {
        a = 0;
        b = 0;
    });

    it("#sum()", () => {
        let res = op.sum(a, b);

        assert(res);
        assert.ok(res >= 0);
        assert.equal(res, a + b);
    });

    it("#rest()", () => {
        let res = op.rest(a, b);
        
        assert(res);
        assert.equal(res, a - b);
    });

    it('#mult()', () => {
        let res = op.mult(a, b);

        assert(res);
        assert.equal(res, a * b);
    });

    it('#div()', () => {
        let res = op.div(a, b);

        assert(res);
        assert.equal(res, a / b);
    })

    it('#div() by 0', () => {
        try {
            op.div(a, 0);
            assert(false);
        } catch(e) {
            assert(true);
        }
    });

    it('#mod()', () => {
        let res = op.mod(a, b);

        assert(res);
        assert.equal(res, a % b);
    });

    it('#exp()', () => {
        let res = op.exp(a, b);

        assert(res);
        assert.equal(res, a ^ b);
    });
});

after(() => {
    console.log('After');
});

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}