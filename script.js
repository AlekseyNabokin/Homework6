const mobileMenu = document.querySelector('.mobile-menu');
const burger = document.querySelector('.header__check');

function toggleMenu() {
  mobileMenu.classList.toggle('hidden');
}

burger.addEventListener('click', toggleMenu);