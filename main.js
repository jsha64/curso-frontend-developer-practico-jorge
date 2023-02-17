const navemail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
const menuhamicon = document.querySelector('.menu')
const mobilemenu = document.querySelector('.mobile-menu')


navemail.addEventListener('click', toggleDesktopMenu);
menuhamicon.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu() {
    desktopmenu.classList.toggle('inactive')
}
function toggleMobileMenu() {
    mobilemenu.classList.toggle('inactive')
}