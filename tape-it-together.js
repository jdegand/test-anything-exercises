const test = require('tape')
const fancify = require(process.argv[2])

     test('fancify wraps the string', function (t) {
       t.strictEqual(fancify('Hello'), '~*~Hello~*~', 'Wraps a string in ~*~')
       t.strictEqual(fancify('Hello', true), '~*~HELLO~*~', 'Make string uppercase')
       t.strictEqual(fancify('Hello', false, '!'), '~!~Hello~!~', 'character changed')
       t.end()
     })
