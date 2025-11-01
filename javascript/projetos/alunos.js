alunos = [];

function cadastrarAluno(nome, idade, nota){
    aluno = {
        nome : nome,
        idade: idade,
        nota: nota
    }
    alunos.push(aluno);
}

cadastrarAluno("Hasan", 18, 8.5);
cadastrarAluno("Marcos", 19, 7.5);
cadastrarAluno("Paula", 21, 6.3);

for (let aluno of alunos) {
    console.log(`Nome: ${aluno.nome} \n Idade: ${aluno.idade} \n Nota: ${aluno.nota} \n ------------------`)
}
let soma = 0;
function calcularMedia(){
    for ( let aluno of alunos) {
        soma+= aluno.nota
    }
let media = (soma / alunos.length).toFixed(2)
return media
}
let media = calcularMedia();
console.log(`Média dos alunos ${media}`)