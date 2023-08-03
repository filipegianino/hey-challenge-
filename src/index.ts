import { DateTime } from "luxon";
import { Gender, User } from "./User";
import { Student, Status, Turmas } from "./Student";
const dateOfBirth = DateTime.fromISO('1992-06-05')
const notas = [6,6,6,6]

const user = new User ('João', 'Noia', dateOfBirth, Gender.Male)
const student = new Student ('João', 'Noia', dateOfBirth, Gender.Male, Turmas.PrimeiroAno, 2020, notas)
console.log(student.GetStatus())