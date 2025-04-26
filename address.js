const randId = require('./randId.js')

const initAddress = (country, city, street, house) => ({
  id: randId(),
  country: country,
  city: city,
  street: street,
  house: house,
  fullAddress: '', // computed
})

let arr = []
arr.xxx = 42
console.log(arr.xxx)

const addresses = []
addresses.add = (...params) => addresses.push(initAddress(...params))

console.log(addresses)
addresses.add('Germany', 'Berlin', 'Main shtrasse', '14')
console.log(addresses)

// addresses.findById(42)

module.exports = initAddress
