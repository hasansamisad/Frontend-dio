// Exemplo de ASSINCRONISMO com Promises em JavaScript

// Imagine uma função que simula buscar dados de um servidor (demora alguns segundos)
function buscarDadosDoServidor() {
    return new Promise((resolve, reject) => {
        console.log("⏳ Buscando dados...");

        // Simula um tempo de espera (ex: requisição a uma API)
        setTimeout(() => {
            const sucesso = true; // mude para false para ver o "reject"

            if (sucesso) {
                resolve("✅ Dados recebidos com sucesso!");
            } else {
                reject("❌ Erro ao buscar os dados!");
            }
        }, 2000); // 2 segundos
    });
}

// Usando a Promise com .then() e .catch()
buscarDadosDoServidor()
    .then((mensagem) => {
        console.log(mensagem); // executa se a promise for resolvida
    })
    .catch((erro) => {
        console.log(erro); // executa se a promise for rejeitada
    })
    .finally(() => {
        console.log("🔚 Operação finalizada (sucesso ou erro).");
    });


// Também podemos usar async/await para trabalhar com Promises
async function executar() {
    try {
        console.log("➡️ Iniciando operação com async/await...");
        const resposta = await buscarDadosDoServidor(); // espera a Promise
        console.log(resposta);
    } catch (erro) {
        console.log(erro);
    } finally {
        console.log("🔚 Finalizando operação com async/await.");
    }
}

// Chamando a função assíncrona
executar();
