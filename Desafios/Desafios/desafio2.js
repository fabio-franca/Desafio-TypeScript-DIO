"use strict";
// Como podemos melhorar o esse código usando TS? 
var Profissao;
(function (Profissao) {
    Profissao[Profissao["ATRZ"] = 0] = "ATRZ";
    Profissao[Profissao["PADEIRO"] = 1] = "PADEIRO";
})(Profissao || (Profissao = {}));
let pessoa1 = {
    nome: "maria",
    idade: 29,
    profissao: Profissao.ATRZ
};
let pessoa2 = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.PADEIRO
};
let pessoa3 = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.ATRZ
};
let pessoa4 = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.PADEIRO
};
