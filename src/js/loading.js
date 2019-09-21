'use strict';

const header = document.getElementById('header');
const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const about = document.getElementById('about');

window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
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
        }, 250);
    }, 250);
}, 250);