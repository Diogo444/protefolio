/** @format */

const nav = document.querySelector("header");
let lastScrollTop = window.scrollY;

// Gérer l'affichage de la nav au scroll
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  // Ne rien faire si on est en haut de page
  if (scrollTop <= 50) {
    nav.classList.remove("active");
  } else {
    if (scrollTop > lastScrollTop) {
      // Scroll vers le bas
      nav.classList.add("active");
    } else if (scrollTop < lastScrollTop) {
      // Scroll vers le haut
      nav.classList.remove("active");
    }
  }

  lastScrollTop = scrollTop;
});

// Gérer l'affichage de la nav au mouvement de souris
window.addEventListener("mousemove", (e) => {
  const y = e.clientY;

  // Si la souris approche du haut de la fenêtre
  if (y < 50) {
    nav.classList.remove("active");
  }
});
