// =============================
// ORIENTAÇÃO A PROTÓTIPO
// =============================

// Em JS, todo objeto pode "herdar" de outro objeto através do protótipo.
// Vamos criar um objeto "pai":
const animal = {
  tipo: "Desconhecido",
  fazerSom: function () {
    console.log("Som genérico...");
  }
};

// Criando um objeto que herda do animal usando Object.create:
const cachorro = Object.create(animal);
cachorro.tipo = "Cachorro";
cachorro.fazerSom = function () {
  console.log("Au Au!");
};

console.log(cachorro.tipo);      // "Cachorro"
cachorro.fazerSom();             // "Au Au!"
console.log(Object.getPrototypeOf(cachorro) === animal); // true


// =============================
// FUNÇÕES CONSTRUTORAS
// =============================

// Antes das classes, usava-se funções construtoras para criar objetos.
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

// Adicionando métodos no protótipo (assim não são recriados para cada instância)
Pessoa.prototype.apresentar = function () {
  console.log(`Oi, eu sou ${this.nome} e tenho ${this.idade} anos.`);
};

const p1 = new Pessoa("Hasan", 21);
const p2 = new Pessoa("Maria", 25);

p1.apresentar(); // "Oi, eu sou Hasan e tenho 21 anos."
p2.apresentar(); // "Oi, eu sou Maria e tenho 25 anos."


// =============================
// SOBRESCRITA E SHADOWING
// =============================

// Sobrescrita = quando redefinimos um método herdado
// Shadowing = quando um atributo local "esconde" o do protótipo

function Carro(marca) {
  this.marca = marca;
}
Carro.prototype.tipo = "Veículo";

const c1 = new Carro("Toyota");
console.log(c1.tipo); // "Veículo" -> herdado do protótipo

// Fazendo shadowing (criando a mesma propriedade diretamente na instância)
c1.tipo = "Carro de Passeio"; 
console.log(c1.tipo); // "Carro de Passeio" -> valor da instância "esconde" o do protótipo

// Sobrescrevendo método herdado
Carro.prototype.andar = function () {
  console.log("O carro está andando...");
};

c1.andar(); // "O carro está andando..."

c1.andar = function () {
  console.log("O carro esportivo está correndo!");
};

c1.andar(); // "O carro esportivo está correndo!"


// =============================
// FORMAS LITERAIS COM PROTÓTIPOS
// =============================

// Criação literal de objeto
const usuario = {
  nome: "João",
  falar() {
    console.log(`Meu nome é ${this.nome}`);
  }
};

usuario.falar(); // "Meu nome é João"

// Podemos alterar o protótipo depois da criação
const admin = {
  permissao: true
};

Object.setPrototypeOf(usuario, admin);

console.log(usuario.permissao); // true -> herdado de admin


// =============================
// OPERADOR NEW
// =============================

// O que o `new` faz por baixo dos panos:
// 1. Cria um objeto vazio {}
// 2. Define o protótipo do objeto para o prototype da função construtora
// 3. Executa a função construtora com o this apontando para o novo objeto
// 4. Retorna o objeto (a não ser que o construtor retorne outro objeto explicitamente)

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percent) {
  this.preco -= this.preco * (percent / 100);
};

const prod1 = new Produto("Notebook", 3000);
prod1.desconto(10);

console.log(prod1.nome);  // "Notebook"
console.log(prod1.preco); // 2700 (após desconto)
