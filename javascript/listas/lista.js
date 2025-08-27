// ======================================================
// 📌 LISTAS EM JAVASCRIPT (ARRAYS)
// ======================================================
const numeros = [1, 2, 3, 4, 5];

// ------------------------------------------------------
// 📌 forEach → percorre cada elemento do array
// ------------------------------------------------------
// Não retorna um novo array, apenas executa algo para cada item
numeros.forEach((num, indice) => {
  console.log(`Índice: ${indice} | Valor: ${num}`);
});
// Saída:
// Índice: 0 | Valor: 1
// Índice: 1 | Valor: 2
// Índice: 2 | Valor: 3
// Índice: 3 | Valor: 4
// Índice: 4 | Valor: 5



// ------------------------------------------------------
// 📌 map → cria um NOVO array transformando os valores
// ------------------------------------------------------
// Retorna um novo array com a transformação aplicada
const dobrados = numeros.map(num => num * 2);
console.log(dobrados); 
// → [2, 4, 6, 8, 10]

const numero = [1, 2, 3, 4, 5];

// Multiplicando cada número por 2
const dobrado = numero.map((valor) => valor * 2);

console.log("Original:", numero); // → [1, 2, 3, 4, 5]
console.log("Dobrados:", dobrado); // → [2, 4, 6, 8, 10]




// ------------------------------------------------------
// 📌 filter → cria um NOVO array filtrando valores
// ------------------------------------------------------
// Retorna apenas os elementos que passarem na condição
const pares = numeros.filter(num => num % 2 === 0);
console.log(pares); 
// → [2, 4]



// ------------------------------------------------------
// 📌 reduce → reduz o array a um único valor
// ------------------------------------------------------
// Recebe um acumulador e o valor atual em cada iteração
const soma = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log(soma); 
// → 15 (1+2+3+4+5)

// Outro exemplo: transformar lista em objeto
const usuarios = ["Ana", "Pedro", "Maria"];
const usuariosObj = usuarios.reduce((acc, nome, index) => {
  acc[index] = nome;
  return acc;
}, {});

console.log(usuariosObj);
// → { 0: 'Ana', 1: 'Pedro', 2: 'Maria' }

//----------------------EXEMPLO DE REDUCE-------------------------------- VAi percorrendo a lista ate formar um unico valor

// Criamos uma lista (array) de números de 1 até 10
const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Usando reduce para somar todos os números da lista
const somaDeTodosOsNumeros = lista.reduce((previous, current) => {
  // previous → acumulador (valor acumulado até agora)
  // current → valor atual do array na iteração

  console.log(previous, current); 
  // Mostra no console o valor acumulado até o momento e o número atual

  // Retorna a soma do acumulador com o valor atual
  // Esse valor retornado se torna o "previous" da próxima iteração
  return previous + current;

}, 0); 
// O "0" no final é o valor inicial do acumulador (previous começa em 0)

// Exibindo o resultado final após todas as somas
console.log("Resultado final:", somaDeTodosOsNumeros);

