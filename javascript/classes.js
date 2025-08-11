// ===== DEFININDO UMA CLASSE =====
// Uma classe é um "molde" para criar objetos
class Pessoa {
    // O constructor é chamado automaticamente ao criar uma nova instância
    constructor(nome, idade) {
        this.nome = nome;   // Propriedade
        this.idade = idade; // Propriedade
    }

    // Método da classe (disponível para todas as instâncias)
    apresentar() {
        console.log(`Olá! Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

// ===== CRIANDO INSTÂNCIAS (objetos baseados na classe) =====
let joao = new Pessoa("João", 30);
let maria = new Pessoa("Maria", 25);

joao.apresentar(); // "Olá! Meu nome é João e tenho 30 anos."
maria.apresentar(); // "Olá! Meu nome é Maria e tenho 25 anos."

// ===== ADICIONANDO MÉTODOS ESTÁTICOS =====
// Métodos estáticos pertencem à classe, não às instâncias
class Matematica {
    static somar(a, b) {
        return a + b;
    }
}
console.log(Matematica.somar(5, 3)); // 8

// ===== HERANÇA (extends) =====
// Uma classe pode herdar propriedades e métodos de outra
class Funcionario extends Pessoa {
    constructor(nome, idade, cargo) {
        super(nome, idade); // chama o constructor da classe pai
        this.cargo = cargo;
    }

    trabalhar() {
        console.log(`${this.nome} está trabalhando como ${this.cargo}.`);
    }
}

let carlos = new Funcionario("Carlos", 40, "Engenheiro");
carlos.apresentar(); // vem da classe Pessoa
carlos.trabalhar();  // método da classe Funcionario

// ===== FUNÇÃO RECEBENDO OBJETO =====
function exibirInformacoes(pessoa) {
    // Desestruturação para pegar propriedades do objeto
    const { nome, idade } = pessoa;
    console.log(`Nome: ${nome}, Idade: ${idade}`);
}

exibirInformacoes(joao); // Nome: João, Idade: 30

// ===== FUNÇÃO QUE USA OBJETO COMO PARÂMETRO OPCIONAL =====
function criarUsuario({ nome = "Desconhecido", idade = 0 } = {}) {
    return new Pessoa(nome, idade);
}

let usuario1 = criarUsuario({ nome: "Ana", idade: 20 });
let usuario2 = criarUsuario(); // usa valores padrão
usuario1.apresentar(); // Olá! Meu nome é Ana...
usuario2.apresentar(); // Olá! Meu nome é Desconhecido...

// ===== GETTERS e SETTERS =====
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this._preco = preco; // convenção: "_" indica que é "privado"
    }

    get preco() {
        return this._preco;
    }

    set preco(valor) {
        if (valor < 0) {
            console.log("Preço inválido!");
        } else {
            this._preco = valor;
        }
    }
}

let p1 = new Produto("Notebook", 3000);
console.log(p1.preco); // 3000
p1.preco = -100;       // Preço inválido!
p1.preco = 3500;
console.log(p1.preco); // 3500

// ===== CONVERTENDO OBJETO PARA JSON =====
let json = JSON.stringify(joao);
console.log(json); // {"nome":"João","idade":30}

// ===== CONVERTENDO JSON PARA OBJETO =====
let obj = JSON.parse('{"nome":"Lucas","idade":22}');
console.log(obj.nome); // Lucas

console.log('Hello World');