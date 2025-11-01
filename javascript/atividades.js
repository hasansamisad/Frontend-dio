// Condicionais
let numero = 7;

if(numero %2 === 0) {
    console.log("Número Par");
}
else {
    console.log("Número Ímpar");
}

let idade = 20;

if(idade >12) {
    console.log("Adolescente ou Adulto");
}
else if (idade >19) {
    console.log("Adulto");
}
else {  
    console.log("Criança");
}   

let num = 3

//Loops
for(let i = 0; i <=10; i++){
    console.log(i + " vezes" + num + " é igual: " + num * i);
}


// Loop para registrar números pares em um array
numeros = [1,2,3,4,5,6,7,102,8,9,10,55];

numeroPares = [];

for (let i = 0; i <numeros.length; i++){
    if (numeros[i]%2 === 0) {
      console.log(numeros[i])
      numeroPares.push(numeros[i])
    }
  }
console.log(numeroPares.length + " números pares encontrados.");
let total = 0;
for (let i = 0; i < numeros.length; i++) { 
   total += numeros[i];

}
console.log("Total parcial: " + total);

let maior_num = numeros[0];
for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] > maior_num) {
        maior_num = numeros[i];
    }
}
console.log("O maior número é: " + maior_num);

for (let i = 1; i < numeros.length; i++) { 
    if (numeros[i] == 5) {
        console.log(`Número 5 encontrado na posição:${i + 1} + no indice ${i}`);
        break;
    }
}


notas = [6,3,8,9,7,3,4,5];

// \functions
function  calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
      soma += notas[i];
    }
    return soma / notas.length;
  } 

calcularMedia(notas);
let media = calcularMedia(notas);
console.log("A média das notas é: " + media);

numbers = [1,2,3,4,5,6,7,8,9,10];
function numerosPares(numbers){
    let pares = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            pares.push(numbers[i]);
        }
    }
    return pares;
}

console.log("Números pares encontrados: " + numerosPares(numbers));

nomes = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo"];
nome_buscar = "Dianas";
function encontrarNome(nome, nome_buscar){
    for (let i = 0; i < nome.length; i++) {
        if (nome[i] === nome_buscar) {
            return true;
        }
    }
}

if (encontrarNome(nomes, nome_buscar)) {
    console.log(nome_buscar + " foi encontrado na lista.");
} else {
    console.log(nome_buscar + " não foi encontrado na lista.");
}

string = "JavaScript é uma linguagem de programação poderosa.";

function converteMaiusculas(sring) {
    string_Upper = string.toUpperCase();
    return string_Upper;
}
console.log(converteMaiusculas(string));