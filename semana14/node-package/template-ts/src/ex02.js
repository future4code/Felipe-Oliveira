var operacao = process.argv[2];
var primeiroNumero = Number(process.argv[3]);
var segundoNumero = Number(process.argv[4]);
switch (operacao) {
    case "soma":
        primeiroNumero + segundoNumero;
        break;
    case "sub":
        primeiroNumero - segundoNumero;
        break;
    case "mult":
        primeiroNumero * segundoNumero;
        break;
    case "div":
        primeiroNumero / segundoNumero;
        break;
}
