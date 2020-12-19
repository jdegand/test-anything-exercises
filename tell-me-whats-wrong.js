const isCoolNumber = require(process.argv[2])
const assert = require('assert');

assert.strictEqual(isCoolNumber(42), true, 'isCoolNumber(42) should return true')
