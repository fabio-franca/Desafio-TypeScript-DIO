let valorAny: any;

valorAny = 3;

valorAny = 'Olá';

valorAny = true;

let valorString: string = 'teste';
valorString = valorAny;

function somarStrings(string1: string, string2: string) {
    console.log(string1 + string2);
}

let valorString2: string = "Textão";

somarStrings(valorString, valorString2);