class Slider {
    constructor(root, options) {
        this.state = {
            classItem: options.classItem || 'slides__item',
            classButton: options.classButton || 'list__button',
            classItemActive: options.classItemActive || 'active',
            classItemActiveReverse: options.classItemActiveReverse || 'active--reverse',
            classButtonActive: options.classButtonActive || 'list__button--check',
            slideTimeout: options.slideTimeout || 2000,
            reverse: options.reverse || false
        };

        this.root = root;
        this.slides = this.root.querySelectorAll(`.${this.state.classItem}`);
        this.buttons = this.root.querySelectorAll(`.${this.state.classButton}`);
        this.amount = this.slides.length;
        this.counter = 0;
        this.positionX = 0;
        this.wrapper = document.getElementsByClassName('main__wrapper-slider')[0];
        this.wrapper.addEventListener('mousedown', this.handlerDown, false);
        this.wrapper.addEventListener('mouseup', this.handlerUp, false);
    }

    activate(slide, button) {
        if (this.state.reverse) {
            slide.classList.add(this.state.classItemActiveReverse);
        } else {
            slide.classList.add(this.state.classItemActive);
        }
        button.classList.add(this.state.classButtonActive);
    }

    deactivate(slide, button) {
        if (this.state.reverse) {
            slide.classList.remove(this.state.classItemActiveReverse);
        } else {
            slide.classList.remove(this.state.classItemActive);
        }
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
            this.counter = nextSlideIndex - 1;
        } else {
            nextSlideIndex = (amount + currentSlideIndex + 1) % amount;
        }
        this.deactivate(this.slides[currentSlideIndex], this.buttons[currentSlideIndex]);
        setTimeout(() => (this.activate(this.slides[nextSlideIndex],
            this.buttons[nextSlideIndex])));
    }

    start() {
        this.counter = 0;
        let className = (this.state.reverse)
            ? this.state.classItemActiveReverse
            : this.state.classItemActive;
        this.slides[0].classList.add(className);
        this.globalInterval = setInterval(() => this.next(), this.state.slideTimeout);
    }

    handlerDown(e) {
        this.positionX = [e.pageX];
    }

    handlerUp(e) {
        this.positionX = this.positionX - e.pageX;
        if (this.positionX < 0) {
            // TODO
            this.state.reverse = false;
        } else {
            // TODO
            this.state.reverse = true;
        }
    }
}

window.onload = function () {
    let slider = new Slider(document.querySelector('.main__wrapper-slider'),
        {reverse: false});
    slider.start();
};
