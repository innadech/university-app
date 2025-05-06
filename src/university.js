'// console.log(0xffffffff === 4294967295)

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
    const sumIq = professors.reduce((acc, professor) => acc + professor.iq, 0)
    return sumIq / professors.length
  },
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
