class Pessoa {
  // Propriedades da classe
  nome;
  peso;
  altura;

  // Constructor para inicializar o objeto
  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  // Método para calcular o IMC
  calcularImc() {
    // IMC = peso / (altura * altura)
    return this.peso / (this.altura * this.altura);
  }

  // Método para classificar o IMC
  classificarImc() {
    const imc = this.calcularImc();

    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
      return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
      return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
      return 'Obeso';
    } else {
      return 'Obesidade grave';
    }
  }
}

// Exemplo de uso
const pessoa1 = new Pessoa("João", 70, 1.75);

console.log(`${pessoa1.nome} tem IMC de ${pessoa1.calcularImc().toFixed(2)}`);
console.log(`Classificação: ${pessoa1.classificarImc()}`);
