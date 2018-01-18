class Slider {
    constructor(root, options) {
        this.state = {
            classItem: options.classItem || 'slides__item',
            classButton: options.classButton || 'list__button',
            classItemActive: options.classItemActive || 'active',
            classItemActiveReverse: options.classItemActiveReverse || 'active--reverse',
            classButtonActive: options.classButtonActive || 'list__button--check',
            isReverse: true
        };
        this.root = root;
        this.slides = this.root.querySelectorAll(`.${this.state.classItem}`);
        this.buttons = this.root.querySelectorAll(`.${this.state.classButton}`);
        this.amount = this.slides.length;
        this.counter = 0;
        this.positionX = 0;
        this.wrapper = this.root;
        this.wrapper.addEventListener('mousedown', this.handlerDown, false);
        this.wrapper.addEventListener('mouseup', this.handlerUp, false);
    }

    activate(slide, button) {
        if (this.state.isReverse) {
            slide.classList.add(this.state.classItemActiveReverse);
        } else {
            slide.classList.add(this.state.classItemActive);
        }
        button.classList.add(this.state.classButtonActive);
    }

    deactivate(slide, button) {
        if (slide.classList.contains(this.state.classItemActiveReverse)) {
            slide.classList.remove(this.state.classItemActiveReverse);
        } else {
            slide.classList.remove(this.state.classItemActive);
        }
        button.classList.remove(this.state.classButtonActive);
    }

    next() {
        this.change(this.state.isReverse);
        this.counter = this.counter + 1;
    }

    prev() {
        this.change(this.state.isReverse);
        this.counter = this.counter - 1;
    }

    change(inverse) {
        const counter = this.counter;
        const amount = this.amount;
        const currentSlideIndex = (amount + counter % amount) % amount;
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
        const className = (this.state.isReverse)
            ? this.state.classItemActiveReverse
            : this.state.classItemActive;
        this.slides[0].classList.add(className);
        this.globalInterval = setInterval(() => this.next(), 2000);
    }

    handlerDown(e) {
        this.positionX = [e.pageX];
    }

    handlerUp(e) {
        this.positionX = this.positionX - e.pageX;
        if (this.positionX < 0) {
            this.isReverse = true;
        } else {
            this.isReverse = false;
        }
    }
}

class Slider1 extends Slider {
    constructor(root, options) {
        super(root, options);
        this.state.isControlNext = options.isControlNext || false;
        this.state.isControlPrev = options.isControlPrev || false;
    }

    nextButton() {
        clearInterval(this.globalInterval);
        if (!this.state.isReverse) {
            this.state.isReverse = !this.state.isReverse;
        }
        this.next();
    }

    prevButton() {
        clearInterval(this.globalInterval);
        if (this.state.isReverse) {
            this.state.isReverse = !this.state.isReverse;
        }
        this.prev();
    }

    start() {
        if (this.state.isControlNext) {
            const nextArrow = document.createElement('button');
            nextArrow.classList.add('main__nextArrow');
            this.root.appendChild(nextArrow);
            nextArrow.addEventListener('click', this.nextButton.bind(this), false);
        }

        if (this.state.isControlPrev) {
            const prevArrow = document.createElement('button');
            prevArrow.classList.add('main__prevArrow');
            this.root.appendChild(prevArrow);
            prevArrow.addEventListener('click', this.prevButton.bind(), false);
        }

        const className = (this.state.isReverse)
            ? this.state.classItemActiveReverse
            : this.state.classItemActive;
        this.slides[0].classList.add(className);
        this.next();
    }

    change(inverse) {
        const counter = this.counter;
        const amount = this.amount;
        const currentSlideIndex = (amount + counter % amount) % amount;
        let nextSlideIndex;
        if (inverse) {
            nextSlideIndex = (amount + currentSlideIndex - 1) % amount;
            this.counter = nextSlideIndex - 1;
        } else {
            nextSlideIndex = (amount + currentSlideIndex + 1) % amount;
            this.counter = nextSlideIndex + 1;
        }
        this.deactivate(this.slides[currentSlideIndex], this.buttons[currentSlideIndex]);
        this.activate(this.slides[nextSlideIndex], this.buttons[nextSlideIndex]);
    }
}

class Slider2 extends Slider {
    constructor(root, options) {
        super(root, options);
        this.state.isStopped = options.isStopped || false;
        this.state.slideTimeout = options.slideTimeout || 2000;
    }

    handlerOver() {
        clearInterval(this.globalInterval);
    }

    handlerOut() {
        this.globalInterval = setInterval(() => this.next(), this.state.slideTimeout);
    }

    start() {
        super.start();
        if (this.state.isStopped) {
            this.wrapper.addEventListener('mouseenter', this.handlerOver.bind(this), false);
            this.wrapper.addEventListener('mouseleave', this.handlerOut.bind(this), false);
        }
    }
}

window.onload = function () {
    const root1 = document.querySelector('.main__wrapper-slider');
    const slider1 = new Slider1(root1, {isControlNext: true, isControlPrev: true});
    slider1.start();

    const root2 = document.querySelector('.main__wrapper-slider2');
    const slider2 = new Slider2(root2, {isStopped: true, slideTimeout: 2000});
    slider2.start();
};
