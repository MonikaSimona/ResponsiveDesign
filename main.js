let burger = document.querySelector('#burger');

let navList = document.querySelector('.nav__list');
let navMenu = document.querySelector('.nav__menu');
let navItem = document.querySelectorAll('.nav__item');


let show = true;

burger.addEventListener('click', () => {
    // if (show) {
    //     navList.style.display = 'none'
    //     navList.style.opacity = '0'
    //     show = false;
    // } else {
    //     navList.style.display = 'block'
    //     navList.style.opacity = '1'

    //     show = true;
    // }
    navList.classList.toggle('nav__list--show');
    console.log(navItem)
    navItem.forEach(item => {
        item.classList.toggle('nav__item--show');
    })
    

})