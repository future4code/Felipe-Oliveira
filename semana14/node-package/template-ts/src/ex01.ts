export {}
//A) para pegar dados da linh de comando do Node usamos o process.argv[indece do array]

//B)
// const exercicio01Nome:string = process.argv[2]
// const exercicio01Idade:string =process.argv[3]

// console.log(`Olá, ${exercicio01Nome} !  voce tem  ${exercicio01Idade} anos!`)

//C)
 const exercicio01Nome:string = process.argv[2]
 const exercicio01Idade:number = Number(process.argv[3])
 const somaIdade:number =exercicio01Idade + 7
 console.log(`Olá, ${exercicio01Nome} !  voce tem  ${exercicio01Idade} anos, em sete anos você tera ${somaIdade} !`)