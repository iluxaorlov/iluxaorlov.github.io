'use strict';

const button = document.getElementById('menu_burger');
const buttonLines = document.getElementsByClassName('menu_burger_line');
const menu = document.getElementById('menu');

button.addEventListener('click', () => {
    if (button.className === 'open') {
        open();
    } else {
        close();
    }
});

menu.addEventListener('click', (event) => {
    if (event.target.className === 'menu_link') {
        close();
    }
});

function open() {
    button.className = 'close';
    menu.style.top = '0';
    buttonLines[0].style.transform = 'translateY(11px) rotate(45deg)';
    buttonLines[1].style.opacity = '0';
    buttonLines[2].style.transform = 'translateY(-11px) rotate(-45deg)';
}

function close() {
    button.className = 'open';
    menu.style.top = '-100vh';
    buttonLines[0].style.transform = 'translateY(0px) rotate(0deg)';
    buttonLines[1].style.opacity = '1';
    buttonLines[2].style.transform = 'translateY(0px) rotate(0deg)';
}