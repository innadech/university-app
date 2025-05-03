let lib = require('./lib.js')
lib.push('yo')
console.log(lib)

let lib2 = require('./lib.js')
lib2.push('foo')
console.log(lib2)

let notMain = require('./not-main.js')
console.log(notMain)

// notMain
// console.log(notMain)
