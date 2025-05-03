const randId = require('./randId.js')

const initFaculty = caption => ({
  id: randId(),
  addressId: '',
  caption: caption,
  studentsIds: [],
  professorsIds: [],

  get countStudents() {
    return this.studentsIds.length
  },
  get countProfessors() {
    return this.professorsIds.length
  },
  addStudentId(studentId) {
    this.studentsIds.push(studentId)
  },
})

const economic = initFaculty('Экономический')

console.log(economic)
