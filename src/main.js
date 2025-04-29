/** @format */

// ─── Import FontAwesome ────────────────────────────────────────────────
import "@fortawesome/fontawesome-free/css/all.min.css";

// ─── Import SCSS ───────────────────────────────────────────────────────
import "./style.scss";
import "./scss/hero.scss";
import "./scss/about.scss";
import "./scss/skills.scss";
import "./scss/project.scss";
import "./scss/footer.scss";

// ─── Scroll behavior uniquement sur desktop ────────────────────────────
if (window.innerWidth >= 768) {
  import("./scroll"); // Lazy import pour gagner en performance
}

// ─── Responsive project cards (mobile < 768px) ─────────────────────────
const mediaQuery = window.matchMedia("(max-width: 768px)");

function handleProjectCards(e) {
  const cards = document.querySelectorAll(".project-card");

  if (e.matches) {
    // Mobile view: add click event listeners
    cards.forEach((card) => {
      card.addEventListener("click", toggleActiveClass);
    });
  } else {
    // Desktop view: remove click event listeners and active classes
    cards.forEach((card) => {
      card.removeEventListener("click", toggleActiveClass);
      card.classList.remove("project-card--active");
    });
  }
}

function toggleActiveClass() {
  this.classList.toggle("project-card--active");
}

// Initial check
handleProjectCards(mediaQuery);

// Listen for changes in the viewport size
mediaQuery.addEventListener("change", handleProjectCards);
