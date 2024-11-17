document.addEventListener("DOMContentLoaded", () => {
  const filterIcon = document.getElementById("filter-icon");
  const filterSection = document.getElementById("filter-section");

  if (!filterIcon || !filterSection) {
    console.error("Elementos não encontrados no DOM.");
    return;
  }

  filterIcon.addEventListener("click", () => {
    filterSection.classList.toggle("hidden");
  });

  document.addEventListener("click", (event) => {
    if (
      !filterSection.contains(event.target) &&
      !filterIcon.contains(event.target)
    ) {
      filterSection.classList.add("hidden");
    }
  });
});
