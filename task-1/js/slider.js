function showSlider() {
    let slides = document.querySelectorAll('.slides__item');
    // let currentSlide = 0;
    let buttons = document.querySelectorAll('.list__button');
    let slidesWrapper = document.querySelector('.slides');

    /* function slideShow() {
        // slidesWrapper.style.transform = 'translate3d(' + -985 + 'px, 0px, 0px)';

        buttons[currentSlide].classList.remove('list__button--check');
        currentSlide = (currentSlide + 1) % slides.length;

        buttons[currentSlide].classList.add('list__button--check');
        let elem = document.querySelectorAll('.slides__item')[0];
        slidesWrapper.appendChild(elem);
    }
    setInterval(slideShow, 2000); */
    let currentSlide = 2;
    function slideShow() {
        // slidesWrapper.style.transform = 'translate3d(' + -985 + 'px, 0px, 0px)';
        // buttons[currentSlide + 1].classList.remove('list__button--check');
        let elem = document.querySelectorAll('.slides__item')[2];
        slidesWrapper.insertBefore(elem, slidesWrapper.firstChild);

        buttons[currentSlide].classList.add('list__button--check');
        // buttons[currentSlide].classList.remove('list__button--check');
        currentSlide = (currentSlide - 1) % slides.length;
    }
    setInterval(slideShow, 2000);
}

showSlider();
