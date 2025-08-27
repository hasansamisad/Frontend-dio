// Este é um exemplo de código JavaScript que define uma função e a chama.
function nomeFuncao( param1, param2 ) {
  // Código da função
  //consol.log('Esta errado aqui');
  //return 'A função deve retornar algo';
}

nomeFuncao( valor1, valor2 ); // Chamada da função


// ======================================================
// 📌 FIRST-CLASS FUNCTIONS
// ======================================================

// Em JavaScript, funções são "first-class citizens".
// Isso significa que elas podem ser atribuídas a variáveis,
// passadas como argumento e retornadas de outras funções.

// ✅ Função atribuída a uma variável
const saudacao = function(nome) {
  return `Olá, ${nome}!`;
};

console.log(saudacao("Hasan")); 
// → "Olá, Hasan!"

// ✅ Função dentro de um objeto (como valor)
const usuario = {
  nome: "João",
  falar: function() {
    return `Meu nome é ${this.nome}`;
  }
};

console.log(usuario.falar()); 
// → "Meu nome é João"

// ✅ Função em um array
const operacoes = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b
];

console.log(operacoes[0](5, 3)); // → 8  (soma)
console.log(operacoes[1](5, 3)); // → 2  (subtração)
console.log(operacoes[2](5, 3)); // → 15 (multiplicação)


// ======================================================
// 📌 HIGHER-ORDER FUNCTIONS (HOF)
// ======================================================

// HOFs são funções que:
// 1. Recebem outras funções como parâmetros
// OU
// 2. Retornam funções

// ✅ Exemplo 1: Função que RECEBE outra função
function executarOperacao(a, b, operacao) {
  return operacao(a, b); // 'operacao' é uma função
}

const soma = (x, y) => x + y;
const multiplicar = (x, y) => x * y;

console.log(executarOperacao(4, 2, soma));       // → 6
console.log(executarOperacao(4, 2, multiplicar)); // → 8


// ✅ Exemplo 2: Função que RETORNA outra função
function saudacaoPersonalizada(mensagem) {
  return function(nome) {
    return `${mensagem}, ${nome}!`;
  };
}

const bomDia = saudacaoPersonalizada("Bom dia");
console.log(bomDia("Maria")); 
// → "Bom dia, Maria!"

const boaNoite = saudacaoPersonalizada("Boa noite");
console.log(boaNoite("Carlos"));
// → "Boa noite, Carlos"


// ARROW FUNCTIONS

// ======================================================
// 📌 FUNCTION DECLARATION (Função tradicional)
// ======================================================

// Forma clássica de criar funções em JavaScript
function somar(a, b) {
  return a + b;
}

console.log(somar(2, 3)); // → 5


// ======================================================
// 📌 FUNCTION EXPRESSION (Função atribuída a variável)
// ======================================================
const subtrair = function(a, b) {
  return a - b;
};

console.log(subtrair(5, 2)); // → 3


// ======================================================
// 📌 ARROW FUNCTION
// ======================================================

// Introduzida no ES6 (2015).
// Sintaxe mais curta, NÃO tem "this próprio" e NÃO tem "arguments".

// Forma completa
const multiplica = (a, b) => {
  return a * b;
};
console.log(multiplica(4, 3)); // → 12

// Forma reduzida (quando tem apenas 1 linha de retorno)
const dividir = (a, b) => a / b;
console.log(dividir(10, 2)); // → 5


// ======================================================
// 📌 DIFERENÇA PRINCIPAL: THIS
// ======================================================

// Function tradicional cria seu próprio "this"
const usuario1 = {
  nome: "Ana",
  falar: function() {
    return `Meu nome é ${this.nome}`;
  }
};
console.log(usuario1.falar()); 
// → "Meu nome é Ana"


// Arrow function NÃO tem seu próprio "this"
// Ela herda o "this" do contexto onde foi criada
const usuario2 = {
  nome: "Pedro",
  falar: () => {
    // aqui o "this" não é o objeto usuario2
    return `Meu nome é ${this.nome}`;
  }
};
console.log(usuario2.falar()); 
// → "Meu nome é undefined"


// ======================================================
// 📌 DIFERENÇA: arguments
// ======================================================

// Function tradicional possui o objeto "arguments"
function mostrarArguments() {
  return arguments; // contém todos os parâmetros passados
}
console.log(mostrarArguments(1, 2, 3));
// → [Arguments] { '0': 1, '1': 2, '2': 3 }


// Arrow function NÃO possui "arguments"
const mostrarArgumentsArrow = () => {
  return arguments; // erro!
};
// console.log(mostrarArgumentsArrow(1, 2, 3)); // ❌ ReferenceError
