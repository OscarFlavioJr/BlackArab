// Elementos DOM
const filterSection = document.getElementById("filter-section");
const filterIcon = document.getElementById("filter-icon");
const nomeFilter = document.getElementById("nome");
const pesoFilter = document.getElementById("peso");
const torraFilter = document.getElementById("torra");
const products = document.querySelectorAll(".swiper-slide");

filterIcon.addEventListener("click", () => {
  const filterSection = document.getElementById("filter-section");
  const filterIcon = document.getElementById("filter-icon");

  filterIcon.addEventListener("click", () => {
    if (filterSection.classList.contains("hidden")) {
      filterSection.classList.remove("hidden");
    } else {
      filterSection.classList.add("hidden");
    }
  });
});

function applyFilters() {
  const nomeValue = nomeFilter.value.toLowerCase();
  const pesoValue = pesoFilter.value.toLowerCase();
  const torraValue = torraFilter.value.toLowerCase();

  products.forEach((product) => {
    const productNome = product.getAttribute("data-category").toLowerCase();
    const productPeso = product.getAttribute("data-peso").toLowerCase();
    const productTorra = product.getAttribute("data-torra").toLowerCase();

    const matchesNome =
      nomeValue === "todos" || productNome.includes(nomeValue);
    const matchesPeso =
      pesoValue === "todos" || productPeso.includes(pesoValue);
    const matchesTorra =
      torraValue === "todos" || productTorra.includes(torraValue);

    if (matchesNome && matchesPeso && matchesTorra) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

[nomeFilter, pesoFilter, torraFilter].forEach((filter) => {
  filter.addEventListener("change", applyFilters);
});
