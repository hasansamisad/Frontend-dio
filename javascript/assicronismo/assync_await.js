// Importa os módulos 'fs' (file system) e 'path' do Node.js
const fs = require('fs');
const path = require('path');

// Cria o caminho absoluto para o arquivo 'tarefas.csv'
const filePath = path.resolve(__dirname, 'tarefas.csv');

// Função assíncrona para ler e processar o CSV
async function lerTarefas() {
    try {
        // 1. Lê o arquivo (retorna um Buffer)
        const arquivo = await fs.promises.readFile(filePath);

        // 2. Converte o Buffer em texto (string)
        const textoDoArquivo = arquivo.toString('utf8');

        // 3. Quebra o texto em linhas e ignora o cabeçalho
        const linhasSemCabecalho = textoDoArquivo.split('\n').slice(1);

        // 4. Transforma cada linha em um objeto { nome, feito }
        const listaDeTarefas = linhasSemCabecalho.map((linha) => {
            const [nome, feito] = linha.split(',');
            return {
                nome,
                feito: feito.trim() === 'true'
            };
        });

        // 5. Exibe o resultado
        console.log(listaDeTarefas);

    } catch (error) {
        // Caso ocorra algum erro na leitura ou processamento
        console.error("Deu ruim!", error);
    }
}

// Chama a função assíncrona
lerTarefas();
