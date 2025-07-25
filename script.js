const openBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-menu");
const menu = document.getElementById("menu-mobile");
const overlay = document.getElementById("menu-overlay");
const header = document.querySelector("header");

function setHeaderBg() {
  const hasScrolled = window.scrollY > 10;
  const isMenuClosed = menu.classList.contains("-translate-x-full");

  // Si el menú está ABIERTO, siempre remueve el fondo del header
  if (!isMenuClosed) {
    header.classList.remove("bg-gray-900", "shadow-md", "backdrop-blur-sm");
  }
  // Si el menú está CERRADO, aplica el fondo solo al hacer scroll
  else if (hasScrolled) {
    header.classList.add("bg-gray-900", "shadow-md", "backdrop-blur-sm");
  } else {
    header.classList.remove("bg-gray-900", "shadow-md", "backdrop-blur-sm");
  }
}

openBtn.addEventListener("click", () => {
  menu.classList.remove("-translate-x-full");
  overlay.classList.remove("hidden", "opacity-0");
  document.body.classList.add("no-scroll");
  header.classList.remove("bg-gray-100", "shadow-md", "backdrop-blur-sm"); // Fuerza transparencia
});

// Cerrar menú
function closeMenu() {
  menu.classList.add("-translate-x-full");
  overlay.classList.remove("opacity-100");
  document.body.classList.remove("no-scroll");
  setTimeout(() => overlay.classList.add("hidden"), 300);
}

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

// Cerrar menú al hacer clic en enlaces
document.querySelectorAll("#menu-mobile a").forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// Activar fondo en scroll si el menú está cerrado
window.addEventListener("scroll", setHeaderBg);

// 🔥 Llamar al inicio para verificar si ya hay scroll
setHeaderBg();
