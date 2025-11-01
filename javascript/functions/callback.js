// ======================================================
// 📌 EXEMPLO 1 - Callback simples
// ======================================================

// Uma função que recebe outra função (callback)
function cumprimentar(nome, callback) {
    console.log("Processando o nome...");
    
    // Chama o callback e passa o nome como parâmetro
    callback(nome);
  }
  
  // Criamos um callback (função que será chamada depois)
  function mostrarMensagem(nome) {
    console.log(`Olá, ${nome}! Seja bem-vindo(a).`);
  }
  
  // Chamando a função principal com o callback
  cumprimentar("Hasan", mostrarMensagem);
  
  // Saída:
  // Processando o nome...
  // Olá, Hasan! Seja bem-vindo(a).
  // ------------------------------------------------------
  
  
  
  // ======================================================
  // 📌 EXEMPLO 2 - Callback com funções anônimas
  // ======================================================
  
  function calcular(a, b, operacao) {
    // "operacao" é o callback
    return operacao(a, b);
  }
  
  // Passando diferentes callbacks
  console.log(calcular(5, 3, (x, y) => x + y)); // → 8
  console.log(calcular(5, 3, (x, y) => x * y)); // → 15
  
  // Aqui a função "calcular" não sabe se vai somar ou multiplicar.
  // Quem decide é o callback passado.
  // ------------------------------------------------------
  
  
  
  // ======================================================
  // 📌 EXEMPLO 3 - Callback assíncrono (setTimeout)
  // ======================================================
  
  console.log("Início");
  
  setTimeout(() => {
    // Esta função é o callback
    console.log("Executado após 2 segundos!");
  }, 2000);
  
  console.log("Fim");
  
  // Saída:
  // Início
  // Fim
  // Executado após 2 segundos!
  // ------------------------------------------------------
  
  
  
  // ======================================================
  // 📌 EXEMPLO 4 - Callback com erro e sucesso
  // ======================================================
  
  function buscarUsuario(id, callbackSucesso, callbackErro) {
    if (id === 1) {
      // se o ID for válido, chama o callback de sucesso
      callbackSucesso({ id: 1, nome: "Maria" });
    } else {
      // se for inválido, chama o callback de erro
      callbackErro("Usuário não encontrado!");
    }
  }
  
  buscarUsuario(
    1,
    (usuario) => console.log("Usuário encontrado:", usuario), // sucesso
    (erro) => console.log("Erro:", erro)                      // erro
  );
  
  buscarUsuario(
    2,
    (usuario) => console.log("Usuário encontrado:", usuario),
    (erro) => console.log("Erro:", erro)
  );
  
  // Saída:
  // Usuário encontrado: { id: 1, nome: 'Maria' }
  // Erro: Usuário não encontrado!
  