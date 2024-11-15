// Seleciona o ícone e a seção do filtro
const filterIcon = document.getElementById("filter-icon");
const filterSection = document.getElementById("filter-section");
const filterButtons = document.querySelectorAll(".filter-button"); // Botões de filtro
const productItems = document.querySelectorAll(".swiper-slide"); // Produtos

// Abre e fecha o filtro ao clicar no ícone
filterIcon.addEventListener("click", () => {
  filterSection.classList.toggle("open"); // Alterna a classe 'open'
});

// Adiciona o evento de clique a cada botão de filtro
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category; // Obtém a categoria do botão

    // Filtra os produtos com base na categoria
    productItems.forEach((item) => {
      if (category === "all" || item.dataset.category.includes(category)) {
        item.style.display = "block"; // Mostra o item se ele corresponder à categoria
      } else {
        item.style.display = "none"; // Esconde o item se ele não corresponder
      }
    });

    // Fecha o filtro automaticamente após a seleção
    filterSection.classList.remove("open");
  });
});
