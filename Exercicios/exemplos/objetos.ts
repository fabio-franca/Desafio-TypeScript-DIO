const pessoa = {
    nome: 'Maria',
    idade: 28,
    profissao: 'Desenvolvedor(a)'
}

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'André',
    idade: 25,
    profissao: 'pintor'
}
const Julia: {nome: string, idade: number, profissao: string} = {
    nome: 'Julia',
    idade: 26,
    profissao: 'Designer'
}

//Serve para inferir tipos e evitar duplicidades
enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    Designer
}

interface Pessoa {
    nome: String,
    idade: Number,
    profissao?: Profissao
}

const Vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
}

interface Estudante extends Pessoa {
    Materias: string[] //Lista
}

const Jesus: Estudante = {
    nome: 'Jesus',
    idade: 33,
    profissao: Profissao.Designer,
    Materias: ['Matemática', 'Programação']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item);
    }
}

listar(Jesus.Materias);