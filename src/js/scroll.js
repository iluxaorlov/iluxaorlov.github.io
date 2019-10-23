'use strict';

const button = document.getElementById('header_about');
let progress = false;

button.addEventListener('click', (event) => {
    event.preventDefault();

    if (progress === false)
        progress = true;

        const interval =  setInterval(() => {
            window.scrollBy(0, Math.ceil(document.getElementById('about').getBoundingClientRect().y / 25));

            if (document.getElementById('about').getBoundingClientRect().y <= 0)
                clearInterval(interval);
                progress = false;
        });
});