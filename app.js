const addToCartButtons = document.querySelectorAll(".comprar");
const bagIcon = document.getElementById("bag");
const bagFilledIcon = document.getElementById("bag-filled");
const cartCounter = document.querySelector(".icons span");

let itemCount = 0;

addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    itemCount++;
    cartCounter.textContent = itemCount;

    if (bagIcon && bagFilledIcon) {
      bagIcon.style.opacity = "0";
      bagIcon.style.visibility = "hidden";

      bagFilledIcon.style.opacity = "1";
      bagFilledIcon.style.visibility = "visible";
    }
  });
});
