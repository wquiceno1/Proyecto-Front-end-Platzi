const d = document;

const menuMail = d.querySelector('.navbar-email');
const desktopMenu = d.querySelector('.desktop-menu');

const menuHamIcon = d.querySelector('.menu');
const mobileMenu = d.querySelector('.mobile-menu');

const menuCartIcon = d.querySelector('.navbar-shopping-cart');
const productMenu = d.querySelector('#shoppingCartContainer');
const productDetailContainer = d.querySelector('#productDetail');

const btnCloseProductDetail = d.querySelector('#closeProductDetail');
btnCloseProductDetail.addEventListener('click', closeAsideProductDetail);

const cardContainer = d.querySelector('.cards-container');


menuMail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCartIcon.addEventListener('click', toggleCartMenu);


function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    productMenu.classList.add('inactive');
    closeAsideProductDetail();
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    productMenu.classList.add('inactive');
    closeAsideProductDetail();
}
function toggleCartMenu(){
    productMenu.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    closeAsideProductDetail();
}
function openAsideProductDetail(){
    productDetailContainer.classList.remove('inactive');
    productMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
}
function closeAsideProductDetail(){
    productDetailContainer.classList.add('inactive');
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

// funcion que almacena el for que pinta los productos
function renderProducts(arr){
    for(product of arr){

        // creamos cada elemento y le seteamos los atributos
        const productCard = d.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = d.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.setAttribute('alt', product.name);
        // agregamos un listener a la imagen para abrir el aside product detail
        productImg.addEventListener('click', openAsideProductDetail)
    
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
}



// invocacion de la funcion render

renderProducts(productList);