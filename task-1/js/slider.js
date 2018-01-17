function Slider(root, options) {
    let self = this;
    this.classItem = options.classItem || 'slides__item';
    this.classButton = options.classButton || 'list__button';
    this.classItemActive = options.classItemActive || 'active';
    this.classItemActiveReverse = options.classItemActiveReverse || 'active--reverse';
    this.classButtonActive = options.classButtonActive || 'list__button--check';
    self.isReverse = true;

    this.root = root;
    this.slides = this.root.querySelectorAll(`.${this.classItem}`);
    this.buttons = this.root.querySelectorAll(`.${this.classButton}`);
    this.amount = this.slides.length;
    this.counter = 0;
    this.positionX = 0;
    this.wrapper = this.root;
   
    this.activate = function(slide, button) {
        if (self.isReverse) {
            slide.classList.add(this.classItemActiveReverse);
        } else {
            slide.classList.add(this.classItemActive);
        }
        button.classList.add(this.classButtonActive);
    }

    this.deactivate = function(slide, button) {
        if (slide.classList.contains(this.classItemActiveReverse)) {
            slide.classList.remove(this.classItemActiveReverse);
        } else {
            slide.classList.remove(this.classItemActive);
        }
        button.classList.remove(this.classButtonActive);
    }

    self.next = function() {
        self.change(self.isReverse);
        self.counter = self.counter + 1;
    }

    self.prev = function() {
        self.change(self.isReverse);
        self.counter = self.counter - 1;
    }

    this.change = function(inverse) {
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

    this.start = function() {
        let className = (this.isReverse)
            ? this.classItemActiveReverse
            : this.classItemActive;
        this.slides[0].classList.add(className);
        this.globalInterval = setInterval(() => this.next(), 2000);
    } 
    
    self.handlerDown = function(e) {
        self.positionX = [e.pageX];
    }

    self.handlerUp = function(e) {
        self.positionX = self.positionX - e.pageX;
        if (self.positionX < 0) {
            self.isReverse = true;                
        } else {
            self.isReverse = false;                
        }
    }
    
    this.wrapper.addEventListener('mousedown', self.handlerDown, false);
    this.wrapper.addEventListener('mouseup', self.handlerUp, false);         
}

function Slider1(root, options) {
    Slider.call(this, root, options);
    let self = this;

    this.isControlNext = options.isControlNext || false;
    this.isControlPrev = options.isControlPrev || false;

    self.nextButton = function(e) {
        clearInterval(self.globalInterval);
        if (!self.isReverse) {
            self.isReverse = !self.isReverse;
        }        
        self.next();
    }

    self.prevButton = function(e) {
        clearInterval(self.globalInterval);
        if (self.isReverse) {
            self.isReverse = !self.isReverse;
        }        
        self.prev();
    }

    this.start = function() {
        let className = (this.isReverse)
            ? this.classItemActiveReverse
            : this.classItemActive;
        this.slides[0].classList.add(className);
        this.next();
    } 

    this.change = function(inverse) {
        let counter = this.counter;
        let amount = this.amount;
        let currentSlideIndex = (amount + counter % amount) % amount;
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

    if (this.isControlNext) {
        let nextArrow = document.createElement('button');
        nextArrow.classList.add('main__nextArrow');
        root.appendChild(nextArrow);    
        
        nextArrow.addEventListener('click', self.nextButton, false);
    } 
    
    if (this.isControlPrev) {
        let prevArrow = document.createElement('button');
        prevArrow.classList.add('main__prevArrow');
        root.appendChild(prevArrow);    
        
        prevArrow.addEventListener('click', self.prevButton, false);
    }     
}

function Slider2(root, options) {
    Slider.call(this, root, options);

    this.isStopped = options.isStopped || false;
    this.slideTimeout = options.slideTimeout || 2000;

    this.handlerOver = function() {
        clearInterval(this.globalInterval);
    }

    this.handlerOut = function() {
        this.globalInterval = setInterval(() => this.next(), this.slideTimeout);
    }

    if (this.isStopped) {
        this.wrapper.addEventListener('mouseenter', this.handlerOver.bind(this), false);
        this.wrapper.addEventListener('mouseleave', this.handlerOut.bind(this), false);    
    }
}

window.onload = function () {
    let root1 = document.querySelector('.main__wrapper-slider');  
    let slider1 = new Slider1(root1, {isControlNext: true, isControlPrev: true});
    slider1.start();  

    let root2 = document.querySelector('.main__wrapper-slider2'); 
    let slider2 = new Slider2(root2,  {isStopped: true, slideTimeout: 2000});    
    slider2.start();  
};
