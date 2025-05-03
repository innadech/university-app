const { addAddress, findAddressById } = require('./address.js')
const randId = require('./randId.js')

const currentYear = 2025

// const initPerson = (firstName, lastName, birdthYear) => ({
//   id: randId(),
//   addressId: '',
//   get address() {
//     return findAddressById(this.addressId)
//   },
//   firstName,
//   lastName,
//   birdthYear,
//   fullName: '', // computed
//   age: '', // computed
//   setAddressId(addressId) {
//     this.addressId = addressId
//   },
// })

const people = []

function createPerson(firstName, lastName, birdthYear) {
  const person = {
    id: randId(),
    addressId: '',
    get address() {
      return findAddressById(this.addressId)
    },
    firstName,
    lastName,
    birdthYear,
    fullName: '', // computed get
    age: '', // computed get
    setAddressId(addressId) {
      this.addressId = addressId
    },
    addAddress(country, city, street, house) {
      const address = addAddress(country, city, street, house)
      person.setAddressId(address.id)
      return address
    },
  }
  return person
}

function addPerson(firstName, lastName, birdthYear) {
  const person = createPerson(firstName, lastName, birdthYear)
  people.push(person)
  return person
}

function findPersonById(id) {
  return people.find(person => person.id === id)
}

module.exports = { addPerson, findPersonById }
