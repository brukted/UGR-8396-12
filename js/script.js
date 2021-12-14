let hamburger = document.getElementById('nav-hamburger');
let navList = document.getElementById('nav-list');

hamburger.addEventListener('click', () => {
    console.log('clicked');
    console.log(navList.classList);
    navList.classList.toggle('nav__list--show');
});