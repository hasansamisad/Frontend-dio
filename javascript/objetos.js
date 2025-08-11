// ===== CRIANDO UM OBJETO =====
let pessoa = {
    nome: "João",       // Propriedade (chave: valor)
    idade: 30,
    profissao: "Desenvolvedor",
    
    // Método (função dentro do objeto)
    apresentar: function() {
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
};

// ===== ACESSANDO PROPRIEDADES =====
console.log(pessoa.nome);        // João (acesso via ponto)
console.log(pessoa["idade"]);    // 30 (acesso via colchetes)

// ===== CHAMANDO UM MÉTODO =====
pessoa.apresentar(); // "Olá, meu nome é João e tenho 30 anos."

// ===== ADICIONANDO PROPRIEDADES =====
pessoa.altura = 1.80;
console.log(pessoa.altura); // 1.8

// ===== MODIFICANDO PROPRIEDADES =====
pessoa.nome = "Carlos";
console.log(pessoa.nome); // Carlos

// ===== REMOVENDO PROPRIEDADES =====
delete pessoa.profissao;
console.log(pessoa.profissao); // undefined

// ===== PERCORRENDO TODAS AS PROPRIEDADES =====
for (let chave in pessoa) {
    console.log(`${chave}: ${pessoa[chave]}`);
}

// ===== LISTAR SOMENTE AS CHAVES E VALORES =====
console.log(Object.keys(pessoa));   // ["nome", "idade", "apresentar", "altura"]
console.log(Object.values(pessoa)); // ["Carlos", 30, ƒ, 1.8]

// ===== MÉTODO MAIS MODERNO: entries() =====
console.log(Object.entries(pessoa)); // [["nome", "Carlos"], ["idade", 30], ["apresentar", ƒ], ["altura", 1.8]]

// ===== OBJETO DENTRO DE OBJETO =====
let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    motor: {
        tipo: "Flex",
        potencia: "150cv"
    }
};
console.log(carro.motor.tipo); // Flex

// ===== FUNÇÃO CONSTRUTORA =====
// Permite criar múltiplos objetos com a mesma estrutura
function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.apresentar = function() {
        console.log(`Oi! Eu sou ${this.nome}`);
    };
}

let maria = new Pessoa("Maria", 28);
maria.apresentar(); // Oi! Eu sou Maria

// ===== CRIAR OBJETO A PARTIR DE UM MODELO EXISTENTE =====
let copiaPessoa = Object.assign({}, pessoa); // cópia rasa
console.log(copiaPessoa);

// ===== MODO MODERNO: CLASSES (syntactic sugar para função construtora) =====
class Animal {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }
    fazerSom() {
        console.log(`${this.nome} está fazendo um som!`);
    }
}

let cachorro = new Animal("Rex", "Cachorro");
cachorro.fazerSom(); // Rex está fazendo um som!

console.log("Hello World");