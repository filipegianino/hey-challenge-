import { DateTime } from "luxon";
import { Gender, User } from "./User";

export enum Turmas{
    PrimeiroAno = '1º ano',
    SegundoAno = '2º ano',
    TerceiroAno = '3º ano',
}
export enum Status{
    Aprovado = 'aprovado',
    Reprovado = 'reprovado'
}

export class Student extends User {
    private turma: Turmas;
    private ano: number;
    private notas?: number[];
    private status?: Status;

    constructor(
        firstName: string, 
        lastName: string, 
        dateOfBirth: DateTime, 
        gender: Gender, 
        turma: Turmas,
        ano: number,
        notas: number [],
        ) {
            super(
                firstName, 
                lastName, 
                dateOfBirth, 
                gender,
                )
            this.turma = turma
            this.ano = ano
            if(this.IsValidScore(notas)){
                this.notas = notas
            }

        }

    GetTurma(){
        return this.turma;
    }  

    GetAno(){
        return this.ano;
    }  

    private IsValidScore(notas: number[]) {
        const minimumLength = 4
        if(notas.length !== minimumLength) throw new Error ('quantidade de notas inválidas')
        notas.forEach(nota => {
            if(nota < 0 || nota > 10) throw new Error ('nota invalida')
        })
        return true 
    }

    SetNota(notas: number[]) {
        if(this.IsValidScore(notas)){
            this.notas = notas;
        }
    }
    
    private GetAverage(){
        const somaNotas = this.notas?.reduce((acc, notas) => acc + notas, 0);
        return somaNotas! / this.notas?.length!
    }

    GetStatus(){
        const average = this.GetAverage()
        average >= 6? this.status = Status.Aprovado: this.status = Status.Reprovado
        return this.status
        
    }
}
        


    
    

// const aluno1 = new Student ('João', 'Noia', dateOfBirth, Gender.Male, '1º ano', 2019, [2,10,7,5],)


