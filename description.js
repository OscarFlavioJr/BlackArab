document.addEventListener("DOMContentLoaded", () => {
  const infoBlocks = document.querySelectorAll(".info-block");

  infoBlocks.forEach((block) => {
    block.addEventListener("click", () => {
      block.classList.toggle("active");
    });
  });
});
