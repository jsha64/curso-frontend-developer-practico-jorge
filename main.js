const navemail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const menuhamicon = document.querySelector('.menu')
const menucarritoicon = document.querySelector('.navbar-shopping-cart')
const mobilemenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')
const cardscontainer = document.querySelector('.cards-container')


navemail.addEventListener('click', toggleDesktopMenu);
menuhamicon.addEventListener('click', toggleMobileMenu);
menucarritoicon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    desktopmenu.classList.toggle('inactive')
    toggleMobileMenu()
}
function toggleMobileMenu() {
    const isasideclosed = aside.classList.toggle('inactive')

    if (!isasideclosed) {
        aside.classList.add('inactive')
    }
    mobilemenu.classList.toggle('inactive')
}
function toggleCarritoAside() {
    const ismobilemenuclosed = mobilemenu.classList.contains('inactive')

    if (!ismobilemenuclosed) {
        mobilemenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
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

    const productimg = document.createElement('img')
    productimg.setAttribute('src', product.image)

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
