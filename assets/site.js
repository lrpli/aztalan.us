document.querySelectorAll('[data-current-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const menuButton = document.getElementById('hamburger');
const menu = document.getElementById('nav-links');

if (menuButton && menu) {
  const closeMenu = () => {
    menu.classList.remove('open');
    menuButton.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  };

  new MutationObserver(() => {
    document.body.classList.toggle('menu-open', menu.classList.contains('open'));
  }).observe(menu, { attributes: true, attributeFilter: ['class'] });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('open')) {
      closeMenu();
      menuButton.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (menu.classList.contains('open') && !menu.contains(event.target) && !menuButton.contains(event.target)) {
      closeMenu();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 700) closeMenu();
  });
}
