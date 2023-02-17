const navemail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const menuhamicon = document.querySelector('.menu')
const menucarritoicon = document.querySelector('.navbar-shopping-cart')
const mobilemenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')


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