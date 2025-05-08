const { addAddress } = require('../src/address.js')

const address = addAddress('Germany', 'Berlin', 'Romerweg', 3)
console.log(address)
console.log(address.country === 'Germany')
console.log(address.fullAddress === 'Germany Berlin Romerweg 3')
