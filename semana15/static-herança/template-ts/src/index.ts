// 1) 
// A) não é possivel
// B) foi impresso apenas uma vez

import { SrvRecord } from "dns";

export class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(
		id: string,
		email: string,
		name: string,
    password: string,
	){
		console.log("Chamando o construtor da classe User")
		this.id = id
		this.email = email
		this.name = name 
    this.password = password
	}

	public getId(): string {
		return this.id
	}

	public getEmail(): string {
		return this.email
	}

	public getName(): string {
		return this.name
  }
  
  public IntroduceYourself():string{
    return `Olá, sou ${this.getName()}  bom dia`
  }
}

// const newUser = new User("101010", "banana@gmail.com", "rodrigo","54545")
// console.log(newUser)


// EXERCICIO 02
// A) Apenas uma vez

// B) Duas vezes, por que na primeira vez rodou pq elas estão no mesmo arquivoo, ja a
// segunda vez rodou por que  class pai (User) esta dentro class filha (Customer)


// EXERCICIO 03
// A) sim, por que a senha esta na class pai, então a class customer herdara ela.

//