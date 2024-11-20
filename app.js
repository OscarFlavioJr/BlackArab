// Seleção de elementos
const sacola = document.querySelector("#bag-filled");
const sacolaVazia = document.querySelector("#bag");
const comprar = document.querySelectorAll(".comprar");
const contador = document.querySelector(".cart-count");
const modal = document.querySelector(".modal");
const lista = document.querySelector("#carrinho-itens");
const pagamento = document.querySelector("#total-valor");
const fecha = document.querySelector("#fechar-carrinho");

let numero = 0;
let total = 0;

const carrinho = {};

comprar.forEach((button) => {
  button.addEventListener("click", function () {
    numero++;

    contador.textContent = numero;

    if (numero === 0) {
      sacolaVazia.style.opacity = 1;
    } else {
      sacola.style.opacity = 1;
      sacolaVazia.style.opacity = 0;
    }

    const produto = button.closest(".produto");
    const nome = produto.querySelector("p").textContent.trim();
    const precoText = produto.querySelector(".preco").textContent.trim();

    const precoFormatado = precoText.startsWith("R$")
      ? precoText
      : `R$ ${precoText}`;
    const preco = parseFloat(
      precoFormatado.replace("R$", "").replace(",", ".")
    );

    total += preco;

    if (carrinho[nome]) {
      carrinho[nome].quantidade++;
    } else {
      carrinho[nome] = { preco, quantidade: 1 };
    }

    atualizarCarrinho();

    pagamento.textContent = `Total: R$ ${total.toFixed(2).replace(".", ",")}`;
  });
});

sacola.onclick = function () {
  modal.style.display = "block";
};

fecha.onclick = function () {
  modal.style.display = "none";
};

function atualizarCarrinho() {
  lista.innerHTML = "";

  for (const [nome, dados] of Object.entries(carrinho)) {
    const itemCarrinho = document.createElement("li");
    itemCarrinho.textContent = `${nome} (x${dados.quantidade}) - R$ ${(
      dados.preco * dados.quantidade
    )
      .toFixed(2)
      .replace(".", ",")}`;
    lista.appendChild(itemCarrinho);
  }
}
