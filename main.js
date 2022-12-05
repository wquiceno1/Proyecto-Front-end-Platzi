const d = document;

const menuMail = d.querySelector('.navbar-email');
const desktopMenu = d.querySelector('.desktop-menu');

const menuHamIcon = d.querySelector('.menu');
const mobileMenu = d.querySelector('.mobile-menu');

const menuCartIcon = d.querySelector('.navbar-shopping-cart');
const productMenu = d.querySelector('.product-detail');


menuMail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartMenu);


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    productMenu.classList.add('inactive');
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    productMenu.classList.add('inactive');
}
function toggleCartMenu(){
    productMenu.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}