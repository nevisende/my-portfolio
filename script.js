/*  eslint-disable linebreak-style  */
const hamburgerMenu = document.getElementById('hamburger-menu');
const headerList = document.getElementById('header-list');
const menuIcon = document.getElementById('menu-icon');
const itemsHeader = document.querySelectorAll('.header-item');
const projectButtons = document.querySelectorAll('.project-button');
const popupContainer = document.querySelector('.popup-container');
const closePopup = document.getElementById('close-popup');

function toogleMenu() {
  headerList.classList.toggle('header-list');
  hamburgerMenu.classList.toggle('hamburger-menu');
  if (menuIcon.classList.contains('fa-bars')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
  } else {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  }
}

menuIcon.addEventListener('click', () => {
  toogleMenu();
});

itemsHeader.forEach((item) => {
  item.addEventListener('click', () => {
    if (window.outerWidth <= 980) toogleMenu();
  });
});

projectButtons.forEach((projectButton) => {
  projectButton.addEventListener('click', () => {
    popupContainer.style.display = 'flex';
  });
});

closePopup.addEventListener('click',  () => {
  popupContainer.style.display = 'none';
});
