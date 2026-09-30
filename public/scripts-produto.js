document.addEventListener("DOMContentLoaded", () => {

    const containerCards = document.getElementById("container-cards");
    const URL_API = "http://localhost:3000/api/produto";

    async function carregarProduto() {
        try {
            const resposta = await fetch(URL_API);
            const produtos = await resposta.json();

            containerCards.innerHTML = "";

            produtos.forEach((produto) => {
                const card = document.createElement("article");
                card.classList.add("card");

                card.innerHTML = `
                    <img src="${produto.imagem}" alt="${produto.nome}"/>
                    <h3>${produto.nome}</h3>
                    <p>${produto.descricao}</p>
                    <h4 class = "preco">${produto.preco}</h4>
                    
                    <button>Pedir Agora</button>
                `;

                containerCards.appendChild(card);
            });

        } catch (erro) {
            console.error("Erro ao carregar o cardápio:", erro);
            containerCards.innerHTML =
                "<p>Não foi possível carregar o cardápio.</p>";
        }
    }

    carregarProduto();
});
