const minhaSting = "10";
const meuNumber = 10;
const meuObjeto = {
    nome: 'felipe',
    idade: 20,
    corfavorita: "preto"
};
const teste01 = {
    nome: "felipe",
    idade: 20,
    corFavorita: "rosa"
};
const teste02 = {
    nome: "paulo",
    idade: 15,
    corFavorita: "branco"
};
const teste03 = {
    nome: "rodrigo",
    idade: 78,
    corFavorita: "ciano"
};
var corFavorita;
(function (corFavorita) {
    corFavorita["cor01"] = "vermelho";
    corFavorita["cor02"] = "laranja";
    corFavorita["cor03"] = "amarelo";
    corFavorita["cor04"] = "verde";
    corFavorita["cor05"] = "azul";
    corFavorita["cor06"] = "anil";
    corFavorita["cor07"] = "violeta";
})(corFavorita || (corFavorita = {}));
const teste04 = {
    nome: 'ASTROdEV',
    idade: 29,
    corFavorita: corFavorita.cor03
};
//# sourceMappingURL=ex01.js.map