// Exercicios de interpretação de codigo

/* 

 1- esse codigo faz a soma de duas variaveis até chegar em 105;


 2a- adiciona um item no array
 2b- 10,15,25,30
 2c- 12, 15, 18, 21, 27, 30
     12.
*/



// Desafio Interpretação de codigo

/**
  1- 0
     00
     000
     0000
 */









 // Exercicio Esrita de codigo

//1-

//  const original = [10,50,85,5,30,29,1];
//  let maior = original[0];
//  let menor = original[0];

//  for(let num of original) {
//      if( num > maior) {
//          maior = num
//      } else if( num < menor) {
//          menor = num
//      }

//  }
//    console.log(maior)
//    console.log(menor)
 


//1B-

// const original = [10,50,85,5,30,29,1];
// const novoOriginal = [0]

// for(num of original){
//    let divisao 
//    divisao = num/10
//    novoOriginal.push(divisao)
// }
// console.log(novoOriginal)




// 1C-

// const original = [10,50,85,5,30,29,1];
// novaArray = [0]

// for( num of original) {
//     if(num%2 ===0) {
//      novaArray.push(num)
//     }
    
// }
// console.log(novaArray);



//1D-

const arrayindex = [80, 30, 130, 40, 60, 70, 120, 90, 110] 
let novoArray = [0]

for(let i=0; i<arrayindex.length;i++) {
    novoArray.push("O elemento do índex"+ i+ "é:" + arrayindex[i])
}

console.log(novoArray)


