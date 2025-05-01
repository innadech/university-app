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
    fullName: '', // computed
    age: '', // computed
    setAddressId(addressId) {
      this.addressId = addressId
    },
    addAddress() {
      //
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

const person = addPerson('James', 'Bond', '1970')

const address = addAddress('Germany', 'Berlin', 'Main shtrasse', '14')
person.setAddressId(address.id)

console.log(person)
console.log(person.address)
