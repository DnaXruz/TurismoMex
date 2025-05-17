const toggleButton = document.querySelector('.menuToggle');
  const navMenu = document.querySelector('.navMenu');

  toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });