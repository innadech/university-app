const randId = () =>
  Math.trunc(Math.random() * 0xffffffff)
    .toString(16)
    .padStart(8, '0')

// console.log(0xffffffff === 4294967295)

console.log(randId())

console.log(initFaculty('Экономический'))

const university = {
  students: [{}],
  professors: [{}],
  faculties: [{}],

  addFaculty(caption) {
    this.faculties.push(initFaculty(caption))
  },

  get totalSalary() {
    return this.professors.reduce((acc, professor) => acc + professor.salary, 0)
  },
  get totalGrants() {
    return this.students.reduce((acc, student) => acc + student.grant, 0)
  },
  get countStudents() {
    return this.students.length
  },
  get countProfessors() {
    return this.professors.length
  },
  get countFaculties() {
    return this.faculties.length
  },
  get averageStudentAge() {
    const sumAge = this.students.reduce((acc, student) => acc + student.age, 0)
    return sumAge / this.students.length
  },
  get averateProfessorIq() {
    const sumAge = this.professors.reduce(
      (acc, professor) => acc + this.professors.iq,
      0
    )
    return sumIq / this.professors.length
  },
}

const addresses = []
const people = []

const address = {
  id: 1,
  country: '',
  area: '',
  city: '',
  district: '',
  street: '',
  house: '',
  apartment: 'NONE',
}

const person = {
  id: 1,
  firstName: '',
  lastName: '',
  fullName: '',
  birdthYear: '',
  age: '',
  addressId: 1,
}

const professor = {
  id: 1,
  personId: 1,
  facultiesIds: [1],
  salary: 42000,
  iq: 142,
}

const faculty = {
  id: 1,
  caption: '',
  studentsIds: [1],
  professorsIds: [1],
  countStudents: 0,
  countProfessors: 0,
}
