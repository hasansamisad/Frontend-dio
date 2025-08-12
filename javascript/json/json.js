/*
==========================================
📦 JSON (JavaScript Object Notation)
==========================================
- Formato de texto usado para armazenar e trocar dados entre sistemas.
- É independente de linguagem: qualquer linguagem consegue interpretar.
- No JavaScript, o objeto global `JSON` possui dois métodos principais:
    1. JSON.stringify() → Converte objeto JS em texto JSON.
    2. JSON.parse()     → Converte texto JSON em objeto JS.
==========================================
*/

// ---------------------------------------
// 1️⃣ Criando um objeto JavaScript
// ---------------------------------------
let usuario = {
    nome: "Ana",
    idade: 25,
    ativo: true,
    hobbies: ["leitura", "natação"],
    endereco: {
        cidade: "São Paulo",
        cep: "01000-000"
    }
};

// ---------------------------------------
// 2️⃣ Convertendo objeto JS → JSON (texto)
// ---------------------------------------
let jsonTexto = JSON.stringify(usuario); 
console.log("Objeto convertido para JSON (texto):");
console.log(jsonTexto);
/*
Saída:
{"nome":"Ana","idade":25,"ativo":true,"hobbies":["leitura","natação"],"endereco":{"cidade":"São Paulo","cep":"01000-000"}}
*/

// ---------------------------------------
// 3️⃣ Convertendo JSON (texto) → objeto JS
// ---------------------------------------
let jsonRecebido = '{"nome":"Carlos","idade":30,"ativo":false}'; // Texto JSON
let objetoConvertido = JSON.parse(jsonRecebido); // Agora é um objeto JS
console.log("Nome do objeto convertido:", objetoConvertido.nome); // Carlos

// ---------------------------------------
// 4️⃣ Usando replacer e space no stringify
// ---------------------------------------
// - replacer: filtra ou modifica os dados antes de virar texto JSON.
// - space: adiciona identação para leitura mais fácil.
let jsonFormatado = JSON.stringify(usuario, ["nome", "idade"], 4);
console.log("JSON filtrado e formatado:");
console.log(jsonFormatado);
/*
Saída (somente nome e idade, com indentação):
{
    "nome": "Ana",
    "idade": 25
}
*/

// ---------------------------------------
// 5️⃣ Manipulando dados após parse
// ---------------------------------------
objetoConvertido.idade += 1; // Alterando idade
console.log("Idade atualizada:", objetoConvertido.idade); // 31

// ---------------------------------------
// 6️⃣ Exemplo prático: simulando troca de dados
// ---------------------------------------

// Sistema 1: cria objeto
let produto = { nome: "Notebook", preco: 3500, estoque: 12 };

// Sistema 1: envia como JSON (texto)
let pacote = JSON.stringify(produto);

// --- (Dados viajam pela internet) ---

// Sistema 2: recebe JSON e converte para objeto
let produtoRecebido = JSON.parse(pacote);

// Sistema 2: usa os dados
console.log(`O produto ${produtoRecebido.nome} custa R$${produtoRecebido.preco}`);
