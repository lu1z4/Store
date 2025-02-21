const produtos = [
    { nome: "Vestido Grecia", preco: 179.90, imagem: "imagem/vestidoGrecia.jpg" },
    { nome: "Vestido Boho Estampa Planta Tropical", preco: 129.90, imagem: "imagem/vestidoBoho.jpg" },
    { nome: "Conjunto de Cropped e Saia Modern Grecia-Oasis", preco: 199.90, imagem: "imagem/conjuntoOasis.jpg" },
    { nome: "Vestido de Praia Estilo Boêmio", preco: 129.90, imagem: "imagem/vestidoBoemio.jpg" },
    { nome: "Vestido Esplendor Tropical Preto", preco: 99.90, imagem: "imagem/vestidoEsplendor.jpg" },
    { nome: "Vestido Midi Ravela", preco: 279.00, imagem: "imagem/vestidoRavenala.jpg" },
    { nome: "Vestido Farm Longo Estampado", preco: 99.90, imagem: "imagem/vestidoFarm.jpg" },
    { nome: "Vestido Karisma", preco: 119.90, imagem: "imagem/vestidoKarismina.jpg" },
    
];

const produtosDiv = document.getElementById("produtos");
const carrinhoLista = document.getElementById("carrinho");
const totalElement = document.getElementById("total");

let carrinho = [];

function exibirProdutos() {
    produtos.forEach(produto => {
        const produtoDiv = document.createElement("div");
        produtoDiv.classList.add("produto");
        produtoDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho('${produto.nome}', ${produto.preco})">
            Adicionar ao Carrinho</button>
        `;
        produtosDiv.appendChild(produtoDiv);
    });
}

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    atualizarCarrinho();
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    carrinhoLista.innerHTML = "";
    let total = 0;
    carrinho.forEach((item, index) => {
        const itemLista = document.createElement("li");
        itemLista.innerHTML = `${item.nome} - R$ ${item.preco.toFixed(2)} <button onclick="removerDoCarrinho(${index})">Remover</button>`;
        carrinhoLista.appendChild(itemLista);
        total += item.preco;
    });
    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

exibirProdutos();