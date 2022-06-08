(function (){
    const burgerItem = document.querySelector('.burger')
    const menu = document.querySelector('.navigation')
    const menuCloseItem = document.querySelector('.nav_menu_closed')
    const links = document.querySelectorAll('.nav_item')

    burgerItem.addEventListener('click', ()=>{
        menu.classList.add('header_nav_active')
        menu.classList.add('nav_menu_closed')

    });

    menuCloseItem.addEventListener('click', ()=>{
        menu.classList.remove('header_nav_active')
    });


    for (let link of links) {
        link.addEventListener('click', ()=>{
            menu.classList.remove('header_nav_active')
        });
    }

}());