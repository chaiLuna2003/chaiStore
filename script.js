const openBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-menu');
const menu = document.getElementById('menu-mobile');
const overlay = document.getElementById('menu-overlay');
const header = document.querySelector('header');

function setHeaderBg() {
  if (window.scrollY > 10 && menu.classList.contains('-translate-x-full')) {
    header.classList.add('bg-gray-900', 'shadow-md', 'backdrop-blur-sm');
  } else if (menu.classList.contains('-translate-x-full')) {
    header.classList.remove('bg-gray-900', 'shadow-md', 'backdrop-blur-sm');
  }
}

// Abrir menú
openBtn.addEventListener('click', () => {
  menu.classList.remove('-translate-x-full');
  overlay.classList.remove('hidden');
  document.body.classList.add('no-scroll');
  header.classList.remove('bg-gray-900', 'shadow-md', 'backdrop-blur-sm'); // 👈 quita fondo si el menú se abre
  setTimeout(() => overlay.classList.add('opacity-100'), 10);
});

// Cerrar menú
function closeMenu() {
  menu.classList.add('-translate-x-full');
  overlay.classList.remove('opacity-100');
  document.body.classList.remove('no-scroll');
  setTimeout(() => overlay.classList.add('hidden'), 300);
  setTimeout(setHeaderBg, 350); // 👈 vuelve a evaluar si se debe mostrar fondo
}

closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);

// Cerrar menú al hacer clic en enlaces
document.querySelectorAll('#menu-mobile a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Activar fondo en scroll si el menú está cerrado
window.addEventListener('scroll', setHeaderBg);
