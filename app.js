// Seleção dos elementos
const modalCarrinho = document.getElementById("modal-carrinho");
const bagIcon = document.getElementById("bag");
const bagFilledIcon = document.getElementById("bag-filled");
const fecharCarrinho = document.getElementById("fechar-carrinho");

// Abrir o carrinho ao clicar na sacola
bagIcon.addEventListener("click", () => {
  modalCarrinho.style.display = "block";
});

// Fechar o carrinho ao clicar no "x"
fecharCarrinho.addEventListener("click", () => {
  modalCarrinho.style.display = "none";
});

// Fechar o carrinho ao clicar fora do modal
window.addEventListener("click", (event) => {
  if (event.target === modalCarrinho) {
    modalCarrinho.style.display = "none";
  }
});
