var jsenv = require('../dist/index.js');


jsenv.jsonenv('./test.json', 'TEST');

console.log(process.env['TEST']);

