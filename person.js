const initAddress = require('./address.js')
const randId = require('./randId.js')

const currentYear = 2025

const initPerson = (firstName, lastName, birdthYear) => ({
  id: randId(),
  addressId: 0,
  get address() {
    return addresses.find(a => a.id === this.addressId)
  },
  firstName: firstName,
  lastName: lastName,
  birdthYear: birdthYear,
  fullName: '', // computed
  age: '', // computed
  setAddressId(addressId) {
    this.addressId = addressId
  },
})

const people = []

// const person = initPerson('James', 'Bond', '1970')
// const address = initAddress('Germany', 'Berlin', 'Main shtrasse', '14')

// person.setAddressId(address.id)

// console.log(person)
