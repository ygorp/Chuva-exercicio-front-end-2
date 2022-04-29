const btnMobile = document.getElementById('btn-mobile');

function  toggleMenu() {
  const menu = document.getElementById('menu-mobile');

  menu.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);