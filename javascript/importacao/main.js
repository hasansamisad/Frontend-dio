// ===== arquivo main.js =====

// Importamos funções específicas do arquivo utils.js
// O caminho './utils.js' significa que está na mesma pasta
import { gets, print } from './utils.js';

// Agora podemos usar essas funções
const nome1 = gets(); // Lê o primeiro nome
const nome2 = gets(); // Lê o segundo nome

// Exibe os nomes
print("Primeiro nome: " + nome1);
print("Segundo nome: " + nome2);


// Importa usando require (CommonJS)
const { gets, print } = require('./funcoes-auxiliares');

print(gets()); // Vai imprimir "10"


/*
====================================================
📦 SISTEMAS DE MÓDULOS EM JAVASCRIPT
====================================================

1️⃣ CommonJS (require / module.exports)
----------------------------------------------------
- Sistema de módulos usado nativamente no Node.js.
- Sintaxe:
    const modulo = require('./arquivo');
    module.exports = { funcao1, funcao2 };
- Carregamento síncrono.
- Funciona direto no Node.js sem configurações extras.
- Não é o padrão oficial do JavaScript.
- Não funciona no navegador sem ferramentas como Webpack ou Parcel.
- Muito usado em projetos antigos e scripts Node.js.

2️⃣ ES Modules (import / export)
----------------------------------------------------
- Padrão oficial do JavaScript desde ES6 (2015).
- Sintaxe:
    import { funcao1 } from './arquivo.js';
    export function funcao1() { ... }
- Carregamento assíncrono no navegador.
- Funciona no navegador com <script type="module">.
- Funciona no Node.js se ativar suporte:
    → No package.json: "type": "module"
    → Ou usar arquivos com extensão .mjs
- Melhor opção para novos projetos, especialmente front-end
  e aplicações que rodam tanto no navegador quanto no Node.js.

🏆 Resumo final:
- Se for código apenas para Node.js e quer simplicidade → CommonJS.
- Se for projeto moderno, compatível com navegador e Node.js → ES Modules.

====================================================
*/
