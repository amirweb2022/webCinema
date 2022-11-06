const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const formRegister = document.getElementById("formRegister");
const formLogin = document.getElementById("formLogin");
const menuMobile = document.querySelector(".menuMobile");
const openMenu = document.getElementById("open-menu");
const slider = document.getElementsByClassName('slider')
const btnSliderRight = document.querySelector('.btn-slider-right');
const btnSliderLeft = document.querySelector('.btn-slider-left');
let i = 0;
let n;
// get mode
window.onload = () => {
    const getStatus = JSON.parse(localStorage.getItem('mode'));
    moon.classList.remove("activeMode");
    sun.classList.remove("activeMode");
    switch (getStatus) {
        case 'moon':
            document.body.classList.add('dark');
            moon.classList.add("activeMode");
            break;
        case 'sun':
            document.body.classList.remove('dark');
            sun.classList.add("activeMode");
            break;
        default:
            document.body.classList.add('dark');
            moon.classList.add("activeMode");
            break;
    }
}
// switch mode
function darkMode(element, mode) {
    for (let index = 0; index < element.parentNode.children.length; index++) {
        element.parentNode.children[index].classList.remove('activeMode');
    }
    element.classList.add('activeMode');
    if (mode === 'moon') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
    localStorage.setItem('mode', JSON.stringify(mode))
}
// change style form
function changeStatus(element, status) {
    for (let index = 0; index < element.parentNode.children.length; index++) {
        element.parentNode.children[index].classList.remove('activeStatus');
    }
    element.classList.add('activeStatus');
    if (status === 'login') {
        formRegister.classList.remove('formStatusActive');
        formLogin.classList.add('formStatusActive');
    } else if (status === 'register') {
        formRegister.classList.add('formStatusActive');
        formLogin.classList.remove('formStatusActive');
    }
}

// Burger menu

openMenu.addEventListener('click', (ev) => {
    menuMobile.classList.toggle('activeMobileMenu');
})

// start slider
function backSlidediNone() {
    for (n = 0; n < slider.length; n++) {
        slider[n].style.display = "none";
    }
}
btnSliderRight.addEventListener("click", function () {
    i++;
    if (i > slider.length - 1) {
        i = 0;
    }
    backSlidediNone();
    slider[i].style.display = "block";
});
btnSliderLeft.addEventListener("click", function () {
    i--;
    if (i < 0) {
        i = slider.length - 1;
    }
    backSlidediNone();
    slider[i].style.display = "block";
});
setInterval(() => {
    i++;
    if (i > slider.length - 1) {
        i = 0;
    }
    backSlidediNone();
    slider[i].style.display = "block";
}, 10000);