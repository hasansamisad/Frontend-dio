// Importa os módulos 'fs' (file system) e 'path' do Node.js
const fs = require('fs');
const path = require('path');

// Cria o caminho absoluto para o arquivo 'tarefas.csv'
const filePath = path.resolve(__dirname, 'tarefas.csv');

// Lê o arquivo de forma assíncrona com Promises
// fs.promises.readFile() retorna uma Promise que, quando resolvida, entrega um Buffer
const promessaDaLeituraDoArquivo = fs.promises.readFile(filePath);

// Trabalhando com a Promise retornada
promessaDaLeituraDoArquivo
    // Primeiro passo: converter o conteúdo do arquivo (Buffer) em string
    .then((arquivo) => arquivo.toString('utf8'))

    // Segundo passo: separar o texto em linhas, ignorando a primeira (cabeçalho do CSV)
    .then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))

    // Terceiro passo: transformar cada linha em um objeto { nome, feito }
    .then((linhasSemCabecalho) => linhasSemCabecalho.map((linha) => {
        const [nome, feito] = linha.split(','); // separa pelos valores da linha (CSV)
        return {
            nome,
            feito: feito.trim() === 'true' // transforma string em boolean
        };
    }))

    // Quarto passo: mostrar a lista de tarefas processadas
    .then((listaDeTarefas) => console.log(listaDeTarefas))

    // Caso ocorra algum erro em qualquer etapa
    .catch((error) => console.log('Deu ruim!', error));
