const burgerBtn = document.querySelector('.burger_btn');
const menu = document.querySelector('.navigation');
const links = document.querySelectorAll('.nav_item');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('open');
    menu.classList.toggle('header_nav_active');
})


for (let link of links) {
    link.addEventListener('click', () => {
        menu.classList.toggle('header_nav_active');
        burgerBtn.classList.remove('open');
    })
}


