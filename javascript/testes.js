// ============================================
// 1. Declaração de Variáveis
// ============================================

// Usando 'var' (não recomendado atualmente por causa do escopo de função)
var nome = "João"; // Pode ser redeclarado e redefinido

// Usando 'let' (recomendado para variáveis que mudam)
let idade = 25;

// Usando 'const' (constante, não pode ser reatribuída)
const PI = 3.14;

// ============================================
// 2. Estruturas de Decisão (Condicionais)
// ============================================

if (idade >= 18) {
  console.log("Maior de idade");
} else if (idade >= 13) {
  console.log("Adolescente");
} else {
  console.log("Criança");
}

// ============================================
// 3. Switch Case
// ============================================

let diaSemana = 3;

switch (diaSemana) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido");
    break;
}

// ============================================
// 4. Laços de Repetição
// ============================================

// For (laço com contador)
for (let i = 1; i <= 5; i++) {
  console.log("Contando: " + i);
}

// While (repete enquanto a condição for verdadeira)
let contador = 0;
while (contador < 3) {
  console.log("While: " + contador);
  contador++;
}

// Do...while (executa ao menos uma vez)
let x = 0;
do {
  console.log("Do...while: " + x);
  x++;
} while (x < 2);

// ============================================
// 5. Sintaxe Básica de Função
// ============================================

function saudacao(nome) {
  return "Olá, " + nome + "!";
}

console.log(saudacao("Maria"));

// Função com arrow function (mais moderna)
const somar = (a, b) => {
  return a + b;
};

console.log("Soma: ", somar(5, 3));

// ============================================
// 6. Objetos e Arrays (Extras úteis)
// ============================================

// Objeto
const pessoa = {
  nome: "Carlos",
  idade: 30,
  falar: function () {
    console.log("Olá, meu nome é " + this.nome);
  }
};

pessoa.falar();

// Array
let frutass = ["Maçã", "Banana", "Uva"];

for (let fruta of frutass) {
  console.log("Fruta: " + fruta);
}

// ============================================
// 7. Vetores (Arrays Simples)
// ============================================

let frutas = ["Maçã", "Banana", "Uva"]; // Índices: 0, 1, 2

console.log("Primeira fruta:", frutas[0]); // Acessando elemento
frutas[1] = "Laranja"; // Modificando elemento
console.log("Frutas atualizadas:", frutas);

// Percorrendo com for
for (let i = 0; i < frutas.length; i++) {
  console.log("Fruta " + i + ": " + frutas[i]);
}

// ============================================
// 8. Matrizes (Arrays Bidimensionais)
// ============================================

let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// Acessar elemento da linha 1, coluna 2
console.log("Elemento [1][2]:", matriz[1][2]); // Saída: 6

// Percorrer toda a matriz
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    console.log("Elemento [" + i + "][" + j + "]:", matriz[i][j]);
  }
}

// ============================================
// 9. Listas (Manipulação de Arrays)
// ============================================

let lista = []; // Lista vazia

// Adicionar elementos
lista.push("Item 1");
lista.push("Item 2");
lista.unshift("Item 0"); // Adiciona no início

console.log("Lista:", lista); // ["Item 0", "Item 1", "Item 2"]

// Remover elementos
lista.pop(); // Remove do fim
lista.shift(); // Remove do início

console.log("Lista após remoções:", lista);

// Verificar se um item existe
if (lista.includes("Item 1")) {
  console.log("Item 1 está na lista");
}

// Percorrer com for...of
for (let item of lista) {
  console.log("Item da lista:", item);
}

// ============================================
// 10. Métodos úteis de Arrays (Extras)
// ============================================

let numeros = [1, 2, 3, 4, 5];

// map: aplica função a cada item e retorna novo array
let dobrados = numeros.map(n => n * 2); // [2, 4, 6, 8, 10]

// filter: retorna somente itens que passam em uma condição
let pares = numeros.filter(n => n % 2 === 0); // [2, 4]

// reduce: reduz o array a um único valor (ex: soma)
let soma = numeros.reduce((acum, n) => acum + n, 0); // 15

console.log("Dobrado:", dobrados);
console.log("Pares:", pares);
console.log("Soma:", soma);
