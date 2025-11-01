const Produtos = [];

function cadastrarProduto(nome, preco, categoria, quantidade) {
    const produto ={
        nome: nome,
        preco: preco,
        categoria: categoria,             
        quantidade: quantidade
    }
    Produtos.push(produto);
    return Produtos;
}

cadastrarProduto("Arroz", 20.00, "Alimentos", 10);
cadastrarProduto("Sabão em Pó", 15.50, "Limpeza", 5);
cadastrarProduto("Camiseta", 30.00, "Vestuário", 20);

for (let produto of Produtos) {
    console.log(`Nome: ${produto.nome}`);
    console.log(`Preço: ${produto.preco}`);
    console.log(`Categoria: ${produto.categoria}`);
    console.log(`Quantidade: ${produto.quantidade}`);
    console.log("----------------------")
}

let soma = 0

for(let produto of Produtos){
    console.log(`Produto ${produto.nome} por ${produto.preco}`)
    soma+= produto.preco 
}
console.log(`Soma de todos os produtos: ${soma}`)
