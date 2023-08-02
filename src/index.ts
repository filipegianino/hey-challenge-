import { DateTime } from "luxon";
import { Gender, User } from "./User";
const dateOfBirth = DateTime.fromISO('1992-06-05')

const user = new User ('João', 'Noia', dateOfBirth, Gender.Male)
console.log(user.GetAge())