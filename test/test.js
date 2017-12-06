var jsenv = require('../dist/index.js');
jsenv.jsonenv('./test.json', 'TEST');

console.log(process.env['TEST']);

var test = jsenv.read('TEST')['test'];
console.log(test);