const nav = document.querySelector('.navigation-wrap');
const headerTop = document.querySelector('.header-top');
const header = document.querySelector('.header');
window.addEventListener('scroll', ()=> {
    if(document.documentElement.scrollTop > 20) {
        header.classList.add('misol-uchun-header');
        nav.style.background = '#0a0a0a'
    } else {
        header.classList.remove('misol-uchun-header');
        nav.style.background = 'unset'
    }
})