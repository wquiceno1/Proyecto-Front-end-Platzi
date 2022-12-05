const d = document;

const menuMail = d.querySelector('.navbar-email');
const desktopMenu = d.querySelector('.desktop-menu');

const menuHamIcon = d.querySelector('.menu');
const mobileMenu = d.querySelector('.mobile-menu');

const menuCartIcon = d.querySelector('.navbar-shopping-cart');
const productMenu = d.querySelector('.product-detail');

const cardContainer = d.querySelector('.cards-container');


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

const productList = [];

productList.push({
    name: "Red Controller",
    price: 120,
    image: 'https://images.pexels.com/photos/7487498/pexels-photo-7487498.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: "Black Controller",
    price: 120,
    image: 'https://images.pexels.com/photos/2520829/pexels-photo-2520829.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
});
productList.push({
    name: "White Controller",
    price: 120,
    image: 'https://images.pexels.com/photos/12719131/pexels-photo-12719131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
});

for(product of productList){

    // creamos cada elemento y le seteamos los atributos
    const productCard = d.createElement('div');
    productCard.classList.add('product-card');

    const productImg = d.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.setAttribute('alt', product.name);

    const productInfo = d.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = d.createElement('div');

    const productPrice = d.createElement('p');
    productPrice.innerText = '$' + product.price;

    const productName = d.createElement('p');
    productName.innerText = product.name;

    const productInfoFigure = d.createElement('figure');
    const productImgCart = d.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    productImgCart.setAttribute('alt', 'Add to cart');

    // ahora agregamos los elementos a sus padres
    productInfoFigure.appendChild(productImgCart);

    // Con Element.append() podemos agregar varios nodos y texto mientras que con Element.appendChild() solo podemos agregar un nodo.
    productInfoDiv.append(productPrice, productName);

    productInfo.append(productInfoDiv, productInfoFigure);

    productCard.append(productImg, productInfo);

    // agregamos el elemento padre(productCart) al DOM
    cardContainer.appendChild(productCard);

}