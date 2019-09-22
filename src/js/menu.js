'use strict';

const button = document.getElementById('menu');

button.addEventListener('click', () => {
    const menuLines = document.getElementsByClassName('menu_line');

    if (button.className === 'open') {
        button.className = 'close';
        menuLines[0].style.transform = 'translateY(11px) rotate(45deg)';
        menuLines[1].style.opacity = '0';
        menuLines[2].style.transform = 'translateY(-11px) rotate(-45deg)';
    } else {
        button.className = 'open';
        menuLines[0].style.transform = 'translateY(0px) rotate(0deg)';
        menuLines[1].style.opacity = '1';
        menuLines[2].style.transform = 'translateY(0px) rotate(0deg)';
    }
});