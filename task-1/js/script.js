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

function dynamicCreationElements() {
    // added main-wrapper
    let divMainWrapper = document.createElement('div');
    divMainWrapper.className = 'main-wrapper';
    document.body.insertBefore(divMainWrapper, document.body.firstChild);

    // added <nav class="navigation main-wrapper__navigation">
    let nav = document.createElement('nav');
    nav.className = 'navigation main-wrapper__navigation';
    divMainWrapper.appendChild(nav);

    // added text Navigation
    let textNavigation = document.createTextNode('Navigation');
    nav.appendChild(textNavigation);

    // added <div class="wrapper">
    let divWrapper = document.createElement('div');
    divWrapper.className = 'wrapper';
    divMainWrapper.appendChild(divWrapper);

    // added <header class="header wrapper__header">
    let header = document.createElement('header');
    header.className = 'header wrapper__header';
    divWrapper.appendChild(header);

    // added text Header
    let textHeader = document.createTextNode('Header');
    header.appendChild(textHeader);

    // added <main class="main">
    let main = document.createElement('main');
    main.className = 'main';
    divWrapper.appendChild(main);

    // added <footer class="footer wrapper__footer">
    let footer = document.createElement('footer');
    footer.className = 'footer wrapper__footer';
    divWrapper.appendChild(footer);

    // added text Footer
    let textFooter = document.createTextNode('Footer');
    footer.appendChild(textFooter);

    // added <section class="main__content">
    let section = document.createElement('section');
    section.className = 'main__content';
    main.appendChild(section);

    // added <div class="main__wrapper-slider">
    let wrapperSlider = document.createElement('div');
    wrapperSlider.className = 'main__wrapper-slider';
    section.appendChild(wrapperSlider);

    // added <ul class="main__slides slides">
    let slides = document.createElement('ul');
    slides.className = 'main__slides slides';
    wrapperSlider.appendChild(slides);

    // added li slides
    for (let i = 0; i <= 2; i++) {
        let li = document.createElement('li');
        li.className = 'slides__item';
        slides.appendChild(li);
    }

    // added ul list <ul class="main__list list">
    let list = document.createElement('ul');
    list.className = 'main__list list';
    wrapperSlider.appendChild(list);

    // added li list
    for (let i = 0; i <= 2; i++) {
        let li = document.createElement('li');
        li.className = 'list__page';
        list.appendChild(li);

        let button = document.createElement('button');
        button.className = 'list__button';
        if (i === 0) {
            button.classList.add('list__button--check');
        }
        if (i === 2) {
            button.classList.add('list__button--last');
        }
        li.appendChild(button);
    }
}

dynamicCreationElements();
slider();

