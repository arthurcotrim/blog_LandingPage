const hamburger = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');

hamburger.onclick = () => {
    setTimeout(() => {
        hamburger.classList.toggle('open')
        menu.classList.toggle('visible')
    }, 100)
}