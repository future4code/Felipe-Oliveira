// Exercicios de interpretação de 

// Exercicio 01

// 1A- O Resultado será 0.

// 1B- O resultado será um array com 6 itens que são [0,1,0,1,2,3]

// 1C- O resultado será um array com 12 itens que são [0,1,0,1,2,3,0,1,2,3,4,5]




// Exercicio 02

// 2A- as saidas do console são 0, 2, undefined

// 2B- sim funcionaria, a função iria retornar 0, 1, 2




// Exercicio 03



// 3- Essa função pega os valores do array e soma e multiplica os valores entre eles
//para chegar em um resultado.

// mudar os nomes: nome da funtion --> recebeArrayInicial
//let arrayfinal --> arrayComOsNumerosIniciais
// arrayFinal --> novoArray







// Execicio de escrita de codigo

// Exercicio 04

//4A-
/*const anosCachorro = (idadeCachorro) => {
    return idadeCachorro*7
}

const resultado = anosCachorro(4);
console.log(resultado)

resultado 28
*/


//4B-

/*const informacoes = (nome, idade, endereco, estudante) => {
    if(estudante !== false) {
        return console.log( "meu nome é", nome, "tenho", idade.toString(), "anos", "moro em", endereco, "eu sou estudante")
    } else{
        console.log("meu nome é", nome, "tenho", idade.toString(), "anos", "moro em", endereco, "não sou estudante")
    }

}

const resultado = informacoes("felipe",12 , "rua kuba", false)

resultado para nao estudante = meu nome é felipe tenho 12 anos moro em rua kuba não sou estudante
resultado para estudante = meu nome é felipe tenho 12 anos moro em rua kuba eu sou estudante
*/


// Exercicio 05 

const coversorDeSeculos = (numero) => {
    const letraDosSeculos
    letraDosSeculos = [I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII, XIII, XIV, XV, XVI, XVII, XVIII, XIX, XX, XXI,]
    let numeros
    numeros = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let valorConvertido
    valorConvertido = ""
    let i = 0

    while (numero > 0) {
        if (numero >= numeros[i]) {
            valorConvertido += letraDosSeculos[i]
            numero -= numeros[i]
        } else {
            
        }
    }
}