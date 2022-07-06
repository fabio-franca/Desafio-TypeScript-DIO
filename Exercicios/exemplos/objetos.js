"use strict";
const pessoa = {
    nome: 'Maria',
    idade: 28,
    profissao: 'Desenvolvedor(a)'
};
const andre = {
    nome: 'André',
    idade: 25,
    profissao: 'pintor'
};
const Julia = {
    nome: 'Julia',
    idade: 26,
    profissao: 'Designer'
};
//Serve para inferir tipos e evitar duplicidades
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["Designer"] = 3] = "Designer";
})(Profissao || (Profissao = {}));
const Vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
const Jesus = {
    nome: 'Jesus',
    idade: 33,
    profissao: Profissao.Designer,
    Materias: ['Matemática', 'Programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(Jesus.Materias);
