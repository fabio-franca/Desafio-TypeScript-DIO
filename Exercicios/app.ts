let anyEstaDeVolta: any;
anyEstaDeVolta = 3;
anyEstaDeVolta = 'tudoo';
anyEstaDeVolta = 5;

let stringTeste: string = 'Verificar';
stringTeste = anyEstaDeVolta;


let unknownValor: unknown;
unknownValor = 3;
unknownValor = 'opa';
unknownValor = true;
unknownValor = "vai sim!"

let stringTeste2: string = "Agora vai!";
stringTeste2 = unknownValor; //Não é possível, o unknown fica mais seguro com if e typeof

if(typeof unknownValor === 'string') {
    stringTeste2 = unknownValor;
}