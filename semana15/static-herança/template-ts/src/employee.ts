import {User} from './index'

export class Employee extends User {
   protected admissionDate: Date
   protected baseSalary:number
   static BENEFITS_VALUE:number = 400


   constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    admissdate:Date,
    baseSalary:number
   ){
       super(id, email, name, password)
       this.admissionDate = admissdate
       this.baseSalary = baseSalary
   }

   getAdmissionDate():Date {
       return this.admissionDate
   }

   getBaseSalary():number{
       return this.baseSalary
   }

   public calculateTotalSalary():number{
       const salary =this.getBaseSalary() 
       return salary + Employee.BENEFITS_VALUE

   }
}

const newEmloyee = new Employee("102030", "desespero@gmail.choro", "tristeza", "1234",new Date('25/02/19'), 1500)
console.log(newEmloyee)
console.log(newEmloyee.calculateTotalSalary())

// A) foi impressa uma vez

// // B)id: '102030',
//   email: 'desespero@gmail.choro',
//   name: 'tristeza',
//   password: '1234',
//   admissionDate: '10/20/2020',
//   baseSalary: 1500