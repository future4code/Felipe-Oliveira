const operacao:string =process.argv[2]
const primeiroNumero:number = Number(process.argv[3])
const segundoNumero:number = Number(process.argv[4])

switch(operacao){
    case "soma":
        console.log(primeiroNumero + segundoNumero)
        break;
    
    case "sub":
        console.log(primeiroNumero - segundoNumero)
        break;

    case "mult":
        console.log(primeiroNumero * segundoNumero)
        break;

    case "div":
        console.log(primeiroNumero / segundoNumero)
        break;
}