var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.2,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 8000,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
