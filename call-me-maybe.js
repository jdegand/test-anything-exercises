const repeatCallback = require(process.argv[2]);
const test = require('tape');

     test('callback called exactly 3 times', function (t) {
       t.plan(3)
       repeatCallback(3, function() {
         t.pass('callback called')
       })
     })
