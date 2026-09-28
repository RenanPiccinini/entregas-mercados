document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menuBtn');
  const closeMenuBtn = document.getElementById('closeMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuOverlay = document.getElementById('menuOverlay');

  function openMenu() {
    mobileMenu.classList.add('open');
    menuOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    menuOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', openMenu);
  }

  if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', closeMenu);
  }

  if (menuOverlay) {
    menuOverlay.addEventListener('click', closeMenu);
  }
});
