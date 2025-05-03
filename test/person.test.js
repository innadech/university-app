const { addPerson } = require('../src/person.js')

const person = addPerson('James', 'Bond', 1970)
// console.log(person)

console.log(person.firstName === 'James')
console.log(person.lastName === 'Bond')
console.log(person.birdthYear === 1970)
console.log(person.fullName === 'James Bond')
console.log(person.age === 55)

person.setAddressId('12345678')
console.log(person.addressId === '12345678')

let address = person.addAddress('Germany', 'Berlin', 'Main shtrasse', '14')
// console.log(address)
// console.log(person)
// console.log(person.address)
console.log(address?.id === person?.address?.id)
