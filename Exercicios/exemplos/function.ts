function somarValores(input1: number | string, input2: number | string) {
   if(typeof input1 === "string" || typeof input2 === "string") {
    return input1.toString() + input2.toString();
   }

   return input1 + input2; 
}

//Possibilidade de criar tipos personalizados
type input = number | string;

//Código tipado e melhorado
function somarValores2(input1: input, input2: input) {
    if(typeof input1 === "string" || typeof input2 === "string") {
     return input1.toString() + input2.toString();
    }
 
    return input1 + input2; 
 }


 //Função para somar apenas valores. Return tipado com number
 function somar(numero1: number, numero2: number): number {
    return numero1 + numero2;
 }

 //Função sem retorno, VOID;
 function semRetorno(numero1: number, numero2: number): void {
    console.log(numero1 + numero2);
 }

 //Função com Callback
 function callback(numero1:number, numero2: number, callback: (numero: number) => number): number {
    let resultado = numero1 + numero2;
    return callback(resultado);  //Realiza um passo a mais quando necessário
 }

 function aoQuadrado(numero: number):number {
    return numero * numero;
 }

 console.log(callback(1,2, aoQuadrado));