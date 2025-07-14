const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let index = 0;

const updateCarousel = () => {
  carousel.style.transform = `translateX(${-index * 33.33}%)`;
};

prev.addEventListener("click", () => {
  index = (index - 1 + items.length) % items.length;
  updateCarousel();
});

next.addEventListener("click", () => {
  index = (index + 1) % items.length;
  updateCarousel();
});

