const hamburger = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const welcome = document.querySelector('.welcome');
const img = document.querySelector('.last-arrow');
const subMenu = document.querySelector('.sub-menu');
const header = document.querySelector('header');

let done = false

hamburger.onclick = () => {
    setTimeout(() => {
        hamburger.classList.toggle('open');
        menu.classList.toggle('visible');
        welcome.classList.toggle('invisible');
        img.style.transform = 'rotate(0deg)';
        subMenu.style.display = 'none';
        subMenu.style.visibility = 'hidden';
    }, 100)
}

img.onclick = () => {
    if (!done === true) {
        setTimeout(() => {
            img.style.transform = 'rotate(180deg)';
            subMenu.style.display = 'block';
            subMenu.style.visibility = 'visible';
            header.style.marginBottom = '15rem';
        }, 100)
        done = true;
    } else {
        setTimeout(() => {
            img.style.transform = 'rotate(0deg)';
            subMenu.style.display = 'none';
            subMenu.style.visibility = 'hidden';
            header.style.marginBottom = '5rem';
        }, 100)

        done = false;
    }
}
