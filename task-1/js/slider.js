function showSlider() {
    let slides = document.querySelectorAll('.slides__item');
    let currentSlide = 0;
    let buttons = document.querySelectorAll('.list__button');
    let slidesWrapper = document.querySelector('.slides');

    function slideShow() {
        // slidesWrapper.style.transform = 'translate3d(' + -985 + 'px, 0px, 0px)';

        buttons[currentSlide].classList.remove('list__button--check');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
        buttons[currentSlide].classList.add('list__button--check');
        let elem = document.querySelectorAll('.slides__item')[0];
        slidesWrapper.appendChild(elem);
        slides[currentSlide].classList.remove('active');
    }
    setInterval(slideShow, 2000);
    // let currentSlide = 2;
    /* function slideShow() {
        // slidesWrapper.style.transform = 'translate3d(' + -985 + 'px, 0px, 0px)';
        // buttons[currentSlide + 1].classList.remove('list__button--check');
        let elem = document.querySelectorAll('.slides__item')[2];
        slidesWrapper.insertBefore(elem, slidesWrapper.firstChild);

        buttons[currentSlide].classList.add('list__button--check');
        // buttons[currentSlide].classList.remove('list__button--check');
        currentSlide = (currentSlide - 1) % slides.length;
    }
    setInterval(slideShow, 2000); */
}

// showSlider();

class Slider {
    constructor(root, options) {
        this.state = {
            classItem: options.classItem || 'slides__item',
            classButton: options.classButton || 'list__button',
            classItemActive: options.classItemActive || 'active',
            classButtonActive: options.classButtonActive || 'list__button--check',
            slideTimeout: options.slideTimeout || 2000,
            reverse: options.reverse || false
        };

        this.root = root;
        this.slides = this.root.querySelectorAll(`.${this.state.classItem}`);
        this.buttons = this.root.querySelectorAll(`.${this.state.classButton}`);
        this.amount = this.slides.length;
        this.counter = 0;
    }

    activate(slide, button) {
        slide.classList.add(this.state.classItemActive);
        button.classList.add(this.state.classButtonActive);
    }

    deactivate(slide, button) {
        slide.classList.remove(this.state.classItemActive);
        button.classList.remove(this.state.classButtonActive);
    }

    next() {
        this.change(this.state.reverse);
        this.counter = this.counter + 1;
    }

    prev() {
        this.change(!this.state.reverse);
        this.counter = this.counter - 1;
    }

    reset() {
        clearInterval(this.globalInterval);
        this.globalInterval = setInterval(() => this.next(), this.state.slideTimeout);
    }

    change(inverse) {
        let counter = this.counter;
        let amount = this.amount;
        let currentSlideIndex = (amount + counter % amount) % amount;
        let nextSlideIndex;
        if (inverse) {
            nextSlideIndex = (amount + currentSlideIndex - 1) % amount;
        } else {
            nextSlideIndex = (amount + currentSlideIndex + 1) % amount;
        }
        this.deactivate(this.slides[currentSlideIndex], this.buttons[currentSlideIndex]);
        setTimeout(() => (this.activate(this.slides[nextSlideIndex], this.buttons[nextSlideIndex])));
    }

    start() {
        for (let index = 0; index < this.amount; index++) {
            if (this.slides[index].classList.contains(this.state.classItemActive)) {
                this.counter = index;
            }
        }
        this.globalInterval = setInterval(() => this.next(), this.state.slideTimeout);
    }
}

window.onload = function () {
    let slider = new Slider(document.querySelector('.main__wrapper-slider'),
        {reverse: false});
    slider.start();
};
