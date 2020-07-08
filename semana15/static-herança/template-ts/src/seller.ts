import {Employee} from './employee'

class Seller extends Employee {
   private salesQuantity:number=0
   static SELLING_COMMISSION:number = 5

   setSalesQuantity(quantity:number):number{
       return this.salesQuantity = quantity
   }

   public calculateTotalSalary():number{
      const salary =this.getBaseSalary() 
      return salary + Employee.BENEFITS_VALUE + Seller.BENEFITS_VALUE * this.salesQuantity
  }
}

const newSeller = new Seller("5020","felipe@.com", "gomes", "1414",new Date("20/20/10"), 1500)
console.log(newSeller)
newSeller.setSalesQuantity(20)
console.log(newSeller.calculateTotalSalary())





// A) eu tive que passar os parametros do construtor do pai

// B) eu não consegui imprimir em linhas individuais, por que é necessario imprimir todos os dados


// EXERCICIO 09 
// A) sim foi possivel imprimir o valor no terminal, por que foi possivel atualizar este metodo usando 
// newSeller.setSalesQuantity(numero desejado)
