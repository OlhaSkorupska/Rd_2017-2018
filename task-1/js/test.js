class Slider {
    constructor(root, options) {
      this.state = {
        classItem: options.classItem || 'slide',
        classItemActive: options.classItemActive || 'active',
        slideTimeout: options.slideTimeout || 5000,
        fadeDuration: options.fadeDuration || 1000,
        loop: options.loop || false,
        reverse: options.reverse || false
      }
      this.root = root;
      this.slides = this.root.querySelectorAll(`.${this.state.classItem}`);
      this.amount = this.slides.length;
      this.currentSlide = '';
      this.counter = 0;
    }
        
    activate(slide) {
      slide.classList.add(this.state.classItemActive);
    }
    
    deactivate(slide) {
      slide.classList.remove(this.state.classItemActive);
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
      this.deactivate(this.slides[currentSlideIndex]);
      setTimeout(() => (this.activate(this.slides[nextSlideIndex])), this.state.fadeDuration);
    }
      
    next() {
      this.change(this.state.reverse);
      if (this.state.reverse) {
        this.counter -= 1;
      } else {
        this.counter += 1;
      }      
    }
  
    prev() {
      this.change(!this.state.reverse);
      this.counter -= 1;
    }
    
    reset() {
      clearInterval(this.globalInterval);
      this.globalInterval = setInterval(() => this.next(), this.state.slideTimeout);
    }
    
    start() {
      for ( let index = 0; index < this.amount; index++) {
        if (this.slides[index].classList.contains(this.state.classItemActive)) {
          this.counter = index;
        }
      }
      this.globalInterval = setInterval(() => this.next(), this.state.slideTimeout);
    }
  }
  
  window.onload = init;
  let slider = new Slider(document.querySelector('.slider'), { loop: true, fadeDuration: 500, reverse: false});
  
  function init() { 
    slider.start();
  }
  function prev() {
    slider.prev();
    slider.reset();
  }
  
  function next() {
    slider.reset();
    slider.next();
  }