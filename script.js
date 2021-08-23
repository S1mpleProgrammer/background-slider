const body = document.querySelector('body');
const slides = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');

let activeSlide = 0;
const setBg = () => {
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    slides[activeSlide].classList.add('active');
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

leftBtn.addEventListener('click', () => {
    if (activeSlide != 0) {
        activeSlide--;
        setBg();
    } else {
        activeSlide = slides.length - 1;
        setBg();
    }
});

rightBtn.addEventListener('click', () => {
    if (activeSlide != slides.length - 1) {
        activeSlide++;
        setBg();
    } else {
        activeSlide = 0;
        setBg();
    }
});

setBg();