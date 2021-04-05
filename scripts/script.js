const hamburger = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
let done = false

hamburger.onclick = () => {
    setTimeout(() => {
        hamburger.classList.toggle('open')
        menu.classList.toggle('visible')
    }, 100)
}

const img = document.querySelector('.last-arrow');
const subMenu = document.querySelector('.sub-menu');

img.onclick = () => {
    if(!done === true) {
        setTimeout(() => {
            img.style.transform = 'rotate(180deg)';
            subMenu.style.display = 'block';
            subMenu.style.visibility = 'visible';
        }, 100)
        done = true;
    }else{
        setTimeout(() => {
            img.style.transform = 'rotate(-180deg)';
            subMenu.style.display = 'none';
            subMenu.style.visibility = 'hidden';
        }, 100)

        done = false;
    }
}