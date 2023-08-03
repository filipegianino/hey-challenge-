import {DateTime} from 'luxon'

export enum Gender{
    Male = 'male',
    Female = 'female',
}

export class User { 
    private firstName: string;
    private lastName: string;
    private dateOfBirth: DateTime;
    private gender: Gender;

    constructor(
        firstName: string, 
        lastName: string, 
        dateOfBirth: DateTime, 
        gender: Gender,
        ){
            this.firstName = firstName 
            this.lastName =lastName
            this.dateOfBirth = dateOfBirth
            this.gender = gender
        }
    
    private isValidName (name: string) {
        return name.length <= 2 && name.length <=254
    }
        
    SetFirstName(firstName: string) {
        if(!this.isValidName(firstName)) throw new Error ('nome invalido')
        return this.firstName;
    }
         
    SetLastName(lastName: string) {
        if(!this.isValidName(lastName)) throw new Error ('nome invalido')
        return this.lastName;
    }
    
    GetAge (){const today = DateTime.local()
        const thisYearBirthDay = this.dateOfBirth.set({year: today.year})
        const age = today >= thisYearBirthDay? today.year - this.dateOfBirth.year
        :today.year - this.dateOfBirth.year -1
        return age 

    } 

    SetAge(dateOfBirth: DateTime) {
        if (this.isMinor(dateOfBirth)) throw new Error ('novinho')
        this.dateOfBirth = dateOfBirth
        
    }

    private isMinor (dateOfBirth: DateTime){
        const today = DateTime.local()
        const thisYearBirthDay = dateOfBirth.set({year: today.year})
        const age = today >= thisYearBirthDay? today.year - dateOfBirth.year
        :today.year - dateOfBirth.year -1
        return age < 18
        
    }

    
    SetGender(gender: Gender){
        this.gender = gender
    }
    
}

    
   


