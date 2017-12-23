let slides = document.querySelectorAll('.slides__item');
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
    slides[currentSlide].className = 'slides__item';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('slides__item--showing');
}