'use strict';

const header = document.getElementById('header');
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const about = document.getElementById('about');
const arrow = document.getElementById('arrow');

setTimeout(() => {
    window.scrollTo(0, 0);
    header.style.opacity = '1';
    title.style.opacity = '1';
    title.style.transform = 'translateX(0)';

    setTimeout(() => {
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';

        setTimeout(() => {
            about.style.opacity = '1';

            setTimeout(() => {
                arrow.style.bottom = 64 + 'px';
                arrow.style.opacity = '1';
            }, 1000);
        }, 250);
    }, 250);
}, 250);