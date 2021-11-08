const hamburgerMenu = document.getElementById('hamburger-menu');
const headerList = document.getElementById('header-list');
const menuIcon = document.getElementById('menu-icon');
const itemsHeader = document.querySelectorAll('.header-item');

menuIcon.addEventListener('click', () => {
    toogleMenu()
})

itemsHeader.forEach(item => {
    item.addEventListener('click', () => {
        toogleMenu()
    })
})

function toogleMenu() {
    headerList.classList.toggle('header-list')
    hamburgerMenu.classList.toggle('hamburger-menu')
}