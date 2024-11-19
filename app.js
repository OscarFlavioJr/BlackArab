const sacola = document.querySelector("#bag-filled");
const sacolaVazia = document.querySelector("#bag");
const comprar = document.querySelectorAll(".comprar");
const contador = document.querySelector(".cart-count");
const modal = document.querySelector(".modal");
const moodal = document.querySelector("#modal-content");
const fecha = document.querySelector("#fechar-carrinho");
const produtos = document.querySelectorAll("#produtos");
const lista = document.querySelector("#carrinho-itens");
const pagamento = document.querySelector("#total-valor");

let numero = 0;
let total = 0;

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
    const nome = produto.querySelector("p").textContent;
    const peso = nome.match(/\d+g/) || ["Sem peso"];
    const precoText = produto.querySelector(".preco").textContent;
    const preco = parseFloat(precoText.replace("R$", "").replace(",", "."));

    total += preco;

    const itemCarrinho = document.createElement("li");
    itemCarrinho.textContent = `${nome}`;

    pagamento.textContent = total;
    lista.appendChild(itemCarrinho);
  });
});

sacola.onclick = function () {
  modal.style.display = "block";
};

fecha.onclick = function () {
  modal.style.display = "none";
};
