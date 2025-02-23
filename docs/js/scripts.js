document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarNav = document.querySelector(".navbar-nav");

  navbarToggler.addEventListener("click", function () {
    navbarNav.classList.toggle("show");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const showMoreBtn = document.querySelector(".show-more");
  const showLessBtn = document.querySelector(".show-less");
  const fullText = document.querySelector(".full-text");
  const shortText = document.querySelector(".short-text");

  showMoreBtn.addEventListener("click", function () {
    fullText.style.display = "block"; // Muestra el texto completo
    shortText.style.display = "none"; // Oculta el texto corto
  });

  showLessBtn.addEventListener("click", function () {
    fullText.style.display = "none"; // Oculta el texto completo
    shortText.style.display = "block"; // Muestra el texto corto
  });
});
