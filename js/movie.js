const line = document.querySelector('.container-carousel');
const movies = document.querySelectorAll('.movies');

const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');


// ? ----- ----- Event Listener para la left arrow. ----- -----
rightArrow.addEventListener('click', () => {
    line.scrollLeft += line.offsetWidth;

    const activeIndicator = document.querySelector('.indicators .active');
    if (activeIndicator.nextSibling) {
        activeIndicator.nextSibling.classList.add('active');
        activeIndicator.classList.remove('active');
    }
});

// ? ----- ----- Event Listener para la right arrow. ----- -----
leftArrow.addEventListener('click', () => {
    line.scrollLeft -= line.offsetWidth;

    const activeIndicator = document.querySelector('.indicators .active');
    if (activeIndicator.previousSibling) {
        activeIndicator.previousSibling.classList.add('active');
        activeIndicator.classList.remove('active');
    }
});
// ? ----- ----- icon button pages ----- -----
const pagesNum = Math.ceil(movies.length / 5);
for (let i = 0; i < pagesNum; i++) {
    const indicator = document.createElement('button');

    if (i === 0) {
        indicator.classList.add('active');
    }

    document.querySelector('.indicators').appendChild(indicator);
    indicator.addEventListener('click', (e) => {
        line.scrollLeft = i * line.offsetWidth;

        document.querySelector('.indicators .active').classList.remove('active');
        e.target.classList.add('active');
    });
}
// ? ----- ----- Hover ----- -----
movies.forEach((movie) => {
    movie.addEventListener('mouseenter', (e) => {
        const element = e.currentTarget;
        setTimeout(() => {
            movies.forEach(movie => movie.classList.remove('hover'));
            element.classList.add('hover');
        }, 300);
    });
});

line.addEventListener('mouseleave', () => {
    movies.forEach(movie => movie.classList.remove('hover'));
});