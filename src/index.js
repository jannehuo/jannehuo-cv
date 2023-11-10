const menuButton = document.querySelector('#menu-button');

menuButton.addEventListener('click', () => {
  const menu = document.querySelector('#side-container');
  menu.classList.toggle('open');
});
