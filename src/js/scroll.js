'use strict';

const button = document.getElementById('header_about');

button.addEventListener('click', (event) => {
    event.preventDefault();

    const interval =  setInterval(() => {
        document.documentElement.scrollBy(0, Math.ceil(document.getElementById('about').getBoundingClientRect().y / 25));

        if (document.getElementById('about').getBoundingClientRect().y <= 0) {
            clearInterval(interval);
        }
    }, 1000 / 120);
});