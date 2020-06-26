"use strict";
exports.__esModule = true;
//A) para pegar dados da linh de comando do Node usamos o process.argv[indece do array]
//B)
// const exercicio01Nome:string = process.argv[2]
// const exercicio01Idade:string =process.argv[3]
// console.log(`Olá, ${exercicio01Nome} !  voce tem  ${exercicio01Idade} anos!`)
//C)
var exercicio01Nome = process.argv[2];
var exercicio01Idade = Number(process.argv[3]);
var somaIdade = exercicio01Idade + 7;
console.log("Ol\u00E1, " + exercicio01Nome + " !  voce tem  " + exercicio01Idade + " anos, em sete anos voc\u00EA tera " + somaIdade + " !");
