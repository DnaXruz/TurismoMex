document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.menuToggle');
  const navMenu = document.querySelector('.navMenu');

  toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
});