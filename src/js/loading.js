'use strict';

const header = document.getElementById('header');
const title = document.getElementById('header_title');
const subtitle = document.getElementById('header_subtitle');
const about = document.getElementById('header_about');
const button = document.getElementById('menu_burger');

window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
    document.body.style.display = 'none';
    document.body.style.opacity = '0';
    document.body.style.visibility = 'hidden';
});

setTimeout(() => {
    header.style.opacity = '1';
    title.style.opacity = '1';
    title.style.transform = 'translateX(0)';

    setTimeout(() => {
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';

        setTimeout(() => {
            about.style.opacity = '1';
            document.body.style.overflowY = 'visible';
            button.style.opacity = '1';
            document.body.style.backgroundColor = '#000000';
        }, 250);
    }, 250);
}, 250);