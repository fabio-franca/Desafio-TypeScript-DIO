"use strict";
function somarValores(input1, input2) {
    if (typeof input1 === "string" || typeof input2 === "string") {
        return input1.toString() + input2.toString();
    }
    return input1 + input2;
}
//Código tipado e melhorado
function somarValores2(input1, input2) {
    if (typeof input1 === "string" || typeof input2 === "string") {
        return input1.toString() + input2.toString();
    }
    return input1 + input2;
}
//Função para somar apenas valores. Return tipado com number
function somar(numero1, numero2) {
    return numero1 + numero2;
}
//Função sem retorno, VOID;
function semRetorno(numero1, numero2) {
    console.log(numero1 + numero2);
}
//Função com Callback
function callback(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado); //Realiza um passo a mais quando necessário
}
function aoQuadrado(numero) {
    return numero * numero;
}
console.log(callback(1, 2, aoQuadrado));
