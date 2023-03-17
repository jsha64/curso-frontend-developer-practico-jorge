const navemail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const menuhamicon = document.querySelector('.menu');
const menucarritoicon = document.querySelector('.navbar-shopping-cart');
const productdetailcloseicon = document.querySelector('.product-detail-close');
const mobilemenu = document.querySelector('.mobile-menu');
const shoppingcartcontainer = document.querySelector('#shoppingCartContainer');
const productdetailcontainer = document.querySelector('#productDetail');
const cardscontainer = document.querySelector('.cards-container');


navemail.addEventListener('click', toggleDesktopMenu);
menuhamicon.addEventListener('click', toggleMobileMenu);
menucarritoicon.addEventListener('click', toggleCarritoAside);
productdetailcloseicon.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    desktopmenu.classList.toggle('inactive');
    toggleMobileMenu();
}
function toggleMobileMenu() {
    const isasideclosed = shoppingcartcontainer.classList.toggle('inactive');

    if (!isasideclosed) {
        shoppingcartcontainer.classList.add('inactive');
    }

    closeProductDetailAside();
    
    mobilemenu.classList.toggle('inactive');
}
function toggleCarritoAside() {
    const ismobilemenuclosed = mobilemenu.classList.contains('inactive');

    if (!ismobilemenuclosed) {
        mobilemenu.classList.add('inactive');
    }

    const isproductdetailclosed = productdetailcontainer.classList.contains('inactive');

    if (!isproductdetailclosed) {
        productdetailcontainer.classList.add('inactive');
    }

    shoppingcartcontainer.classList.toggle('inactive');

    const ismenucarritoiconclosed = menucarritoicon.classList.contains('inactive');

    if (!ismenucarritoiconclosed) {
        desktopmenu.classList.add('inactive')
    }
}

function openProductDetailAside() {
    shoppingcartcontainer.classList.add('inactive');
    productdetailcontainer.classList.remove('inactive');
}

function closeProductDetailAside() {
    productdetailcontainer.classList.add('inactive');
}

const productlist = [];

productlist.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productlist.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productlist.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

function renderProducts(arr) {
    for(product of productlist) {
    const productcard = document.createElement('div')
    productcard.classList.add('product-card')
    // product = {name, price, image} -> product.image
    const productimg = document.createElement('img')
    productimg.setAttribute('src', product.image)
    productimg.addEventListener('click' , openProductDetailAside)

    const productinfo = document.createElement('div')
    productinfo.classList.add('product-info')

    const productinfodiv = document.createElement('div')

    const productprice = document.createElement('p')
    productprice.innerText = "$" + product.price
    const productname = document.createElement('p')
    productname.innerText = product.name
    
    productinfodiv.appendChild(productprice)
    productinfodiv.appendChild(productname)

    const productinfofigure = document.createElement('figure')
    const productimgcard = document.createElement('img')
    productimgcard.setAttribute('src', './icons/bt_add_to_cart.svg')

    productinfofigure.appendChild(productimgcard)

    productinfo.appendChild(productinfodiv)
    productinfo.appendChild(productinfofigure)

    productcard.appendChild(productimg)
    productcard.appendChild(productinfo)

    cardscontainer.appendChild(productcard)
}
}

renderProducts(productlist)
