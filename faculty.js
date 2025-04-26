const randId = require('./randId.js')

const initFaculty = caption => ({
  id: randId(),
  caption: caption,
  studentsIds: [],
  professorsIds: [],

  get countStudents() {
    return this.studentsIds.length
  },
  get countProfessors() {
    return this.professorsIds.lenght
  },
  addStudentsIds(student) {
    this.studentsIds.push(student)
  },
})

const economic = initFaculty('Экономический')

console.log(economic)
