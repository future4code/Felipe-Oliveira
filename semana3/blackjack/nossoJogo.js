/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


/*
  Montando o jogo
*/

console.log("Bem-Vindo ao jogo Blackjack!!") // mensagem de boas vindas
let número
numero = 21;

// soterio cartas usuario
let cartaUsuario1
cartaUsuario1 = comprarCarta();

let cartaUsuario2
cartaUsuario2 = comprarCarta();

let valorUsuario
valorUsuario = cartaUsuario1.valor + cartaUsuario2.valor;


//////////////////////////////////////////////////////
// sorteio cartas computador
let cartaComputador1
cartaComputador1 = comprarCarta();

let cartaComputador2
cartaComputador2 = comprarCarta();

let valorComputador
valorComputador = cartaComputador1.valor + cartaComputador2.valor;

// Mensagem de confirmação para começar a jogar
if (confirm("Quer inicia uma nova rodada?")) {
   
   // resposta com os numeros sorteados
   console.log("Usuario", "-", "Cartas:", cartaUsuario1.texto, cartaUsuario2.texto, "-", "Pontuação", valorUsuario);
   console.log("Computador", "-", "Cartas:", cartaComputador1.texto, cartaComputador2.texto, "-", "Pontuação", valorComputador);
   // condições de vitoria
} else if(valorUsuario > valorComputador) {
   console.log("O Usuario ganhou")
}





























// let carta1 = comprarCarta();// sorteio de cartas para o usuario
// let carta2 = comprarCarta();


// let carta3 = comprarCarta();// sorteio de cartas para computador
// let carta4 = comprarCarta();

// console.log( "Usuario", "-", " ", "Cartas" ,carta1, carta2)
// console.log(carta3, carta4)



