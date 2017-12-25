function slider() {
    let slides = document.querySelectorAll('.slides__item');
    let currentSlide = 0;
    let buttons = document.querySelectorAll('.list__button');
    let slidesWrapper = document.querySelector('.slides');
    let widthWrapperSlider = 0;
    let currentSlideWidth = slides[0].offsetWidth;
    let countSliderWidth = currentSlideWidth;

    for (let i = 0; i <= slides.length - 1; i++) {
        widthWrapperSlider = widthWrapperSlider + slides[i].offsetWidth;
    }
    slidesWrapper.style.width = widthWrapperSlider + 'px';

    function slideShow() {
        if (countSliderWidth > (widthWrapperSlider - 985)) {
            countSliderWidth = 0;
            slidesWrapper.style.transform = 'translate3d(' + countSliderWidth + 'px, 0px, 0px)';
            countSliderWidth = countSliderWidth + currentSlideWidth;
        } else {
            slidesWrapper.style.transform = 'translate3d(' + -countSliderWidth + 'px, 0px, 0px)';
            countSliderWidth = countSliderWidth + currentSlideWidth;
        }

        buttons[currentSlide].classList.remove('list__button--check');
        currentSlide = (currentSlide + 1) % slides.length;
        buttons[currentSlide].classList.add('list__button--check');
    }
    setInterval(slideShow, 2000);
}

slider();
