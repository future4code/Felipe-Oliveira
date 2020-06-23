//A)se colocar algum number nesta variavel ela irá estourar um erro, 
//pq a consta foi tipada para receber apenas string
const minhaSting: string ="10"

//B) ela nao dispara nemhum erro pq a const foi tipada para receber numeros
const meuNumber: number =10

//C)
const meuObjeto: {nome:string, idade:number, corfavorita:string} ={
    nome: 'felipe',
    idade:20,
    corfavorita:"preto"
}

//D)
type pessoa={nome:string, idade:number, corFavorita:string}

const teste01:pessoa ={
    nome:"felipe",
    idade:20,
    corFavorita:"rosa"
}

const teste02:pessoa ={
    nome:"paulo",
    idade:15,
    corFavorita:"branco"
}

const teste03:pessoa ={
    nome:"rodrigo",
    idade:78,
    corFavorita:"ciano"
}

//E)
enum corFavorita {
    cor01="vermelho",
    cor02="laranja",
    cor03="amarelo",
    cor04="verde",
    cor05="azul",
    cor06="anil",
    cor07="violeta"
}

const teste04:pessoa ={
    nome:'ASTROdEV',
    idade:29,
    corFavorita:corFavorita.cor03
}