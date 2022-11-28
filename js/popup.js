const button = document.querySelector(".search-section-button");
const modal = document.querySelector(".overlay")
const closeButton = document.querySelector(".header-close-modal")
button.addEventListener('click', function () {
  modal.classList.toggle("hidden");
});
closeButton.addEventListener('click', function () {
  modal.classList.toggle("hidden");
});
