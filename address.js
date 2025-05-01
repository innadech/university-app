const randId = require('./randId.js')

const addresses = []

function createAddress(country, city, street, house) {
  const address = {
    id: randId(),
    country: country,
    city: city,
    street: street,
    house: house,
    fullAddress: '', // computed
  }
  return address
}

// addresses.add = (...params) => addresses.push(createAddress(...params))
function addAddress(country, city, street, house) {
  const address = createAddress(country, city, street, house)
  addresses.push(address)
  return address
}

function findAddressById(id) {
  return addresses.find(address => address.id === id)
}

// console.log(addresses)
// addAddress('Germany', 'Berlin', 'Main shtrasse', '14')
// console.log(addresses)

// const findedAddress = findAddressById('0c6e2538')

module.exports = { addAddress, findAddressById }

// MVC
// MVVM
