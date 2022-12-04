const d = document;

const menuMail = d.querySelector('.navbar-email');
const desktopMenu = d.querySelector('.desktop-menu');

menuMail.addEventListener('click', toggleDesktopMenu);


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}