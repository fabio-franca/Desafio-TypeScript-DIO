// Como podemos melhorar o esse código usando TS? 
enum Profissao {
    ATRZ,
    PADEIRO
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

let pessoa1: Pessoa = {
    nome: "maria",
    idade: 29,
    profissao: Profissao.ATRZ
}

let pessoa2: Pessoa = {
    nome: "roberto",
    idade: 19,
    profissao: Profissao.PADEIRO
}

let pessoa3: Pessoa = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.ATRZ
}

let pessoa4: Pessoa = {
    nome: "carlos",
    idade: 19,
    profissao: Profissao.PADEIRO
};