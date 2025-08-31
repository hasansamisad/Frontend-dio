// ======================================================
// 📌 Exemplo de uso combinado de filter, map e join
// ======================================================

// Lista de objetos com nomes
const lista = [
    { nome: 'Renan' },
    { nome: 'Andresa' },
    { nome: 'Vitor' },
    { nome: 'Amanda' }
  ];
  
  // Criando elementos em HTML a partir da lista
  const elementosEmHtml = lista
    // 1) FILTER → filtra apenas os elementos cujo nome começa com "A"
    .filter((e) => e.nome.startsWith('A'))
  
    // 2) MAP → transforma cada item filtrado em uma string HTML <li>
    .map((e) => `<li>${e.nome}</li>`)
  
    // 3) JOIN → junta todos os elementos do array em uma única string
    // Por padrão, o join usa vírgula como separador (","),
    // mas aqui estamos passando uma string vazia '' para juntar sem vírgulas
    // Assim, teremos uma única string com todas as <li> coladas.
    .join('');
  
  // Exibindo o resultado final
  console.log(elementosEmHtml);
  
  // Saída esperada:
  // <li>Andresa</li><li>Amanda</li>
  