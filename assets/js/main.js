// /*MENU SHOW Y HIDDEN*/ 

const navMenu = document.getElementById('nav-menu')
const toggleMenu = document.getElementById('nav-toggle')
const closeMenu = document.getElementById('nav-close')

/*SHOW*/
toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('show')
    navMenu.classList.remove('hidden')
})

/*HIDDEN*/
closeMenu.addEventListener('click', () => {
    navMenu.classList.toggle('hidden')
    navMenu.classList.remove('show')
})

//?? GSAP here
/* NAV, TITLE Y IMG y*/
gsap.from('.nav', {
    opacity: 0,
    duration: 1,
    delay: 1,
    y: -30
})
gsap.from('.home__title', {
    opacity: 0,
    duration: 1.2,
    delay: 1.2,
    y: -30
})
gsap.from('.home__img', {
    opacity: 0,
    duration: 1.3,
    delay: 1.3,
    y: -50
})

/*SOCIAL, SUBTITLE Y BUTTON*/
gsap.from('.home__social', {
    opacity: 0,
    duration: 1,
    delay: 1.5,
    y: 50
})
gsap.from('.home__subtitle', {
    opacity: 0,
    duration: 1,
    delay: 1.8,
    y: 50
})
gsap.from('.home__button', {
    opacity: 0,
    duration: 1,
    delay: 2,
    y: 50
})
