// Seleciona os elementos
const bagIcon = document.getElementById("bag-filled");
const modal = document.getElementById("carrinho-modal");
const modalContent = document.getElementById("modal-content");
const closeModal = document.querySelector(".close");
const cartItems = document.getElementById("item-carrinho");
const cartCounter = document.querySelector(".icons span");
const addToCartButtons = document.querySelectorAll(".comprar");

// Objeto para armazenar itens e suas quantidades
let cart = {};

// Função para atualizar o contador total no ícone da sacola
function updateCartCounter() {
  const totalItems = Object.values(cart).reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  cartCounter.textContent = totalItems;

  if (totalItems > 0) {
    bagIcon.style.opacity = "1";
    bagIcon.style.visibility = "visible";
  } else {
    bagIcon.style.opacity = "0";
    bagIcon.style.visibility = "hidden";
  }
}

// Função para adicionar itens ao carrinho
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productName =
      button.previousElementSibling.previousElementSibling.textContent.trim();
    const productPrice = parseFloat(
      button.previousElementSibling.textContent
        .replace("R$", "")
        .replace(",", ".")
    );

    if (cart[productName]) {
      // Se o produto já estiver no carrinho, aumenta a quantidade
      cart[productName].quantity++;
    } else {
      // Caso contrário, adiciona um novo item ao carrinho
      cart[productName] = {
        price: productPrice,
        quantity: 1,
      };
    }

    updateCartCounter(); // Atualiza o contador de itens
  });
});

// Calcula o total do carrinho
function calculateTotal() {
  const total = Object.values(cart).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  return `Total: R$ ${total.toFixed(2).replace(".", ",")}`;
}

// Atualiza o conteúdo do carrinho no modal
function updateCartModal() {
  cartItems.innerHTML = ""; // Limpa os itens atuais
  Object.keys(cart).forEach((itemName) => {
    const item = cart[itemName];
    const li = document.createElement("li");
    li.textContent = `${itemName} (x${item.quantity})`; // Apenas o nome e a quantidade
    cartItems.appendChild(li);
  });

  // Adiciona o total no final do modal
  const totalLi = document.createElement("li");
  totalLi.classList.add("total"); // Classe para estilizar o total, se necessário
  totalLi.textContent = calculateTotal();
  cartItems.appendChild(totalLi);
}

// Abre o modal e atualiza o carrinho
bagIcon.addEventListener("click", (event) => {
  event.stopPropagation();
  modal.style.display = "block";
  updateCartModal(); // Atualiza a lista de itens e o total
});

// Fecha o modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Fecha o modal ao clicar fora dele
document.addEventListener("click", (event) => {
  if (modal.style.display === "block" && !modalContent.contains(event.target)) {
    modal.style.display = "none";
  }
});

function calculateTotal() {
  const total = Object.values(cart).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  document.getElementById("total").textContent = `Total: R$ ${total
    .toFixed(2)
    .replace(".", ",")}`;
}
