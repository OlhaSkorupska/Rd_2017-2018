function createElement(tag, classOfTag, parent, child) {
    let element = document.createElement(tag);
    element.className = classOfTag;
    return parent.insertBefore(element, child) || parent.insertBefore(element);
}

function createTextNode(text, parent) {
    let textElement = document.createTextNode(text);
    parent.appendChild(textElement);
}

function dynamicCreationElements() {
    let divMainWrapper = createElement('div', 'main-wrapper', document.body,
        document.body.firstChild);

    let nav = createElement('nav', 'navigation main-wrapper__navigation', divMainWrapper);
    createTextNode('Navigation', nav);

    let linkNavigation = document.createElement('a');
    linkNavigation.classList.add('navigation__link');
    linkNavigation.setAttribute('href', 'table.html');

    let textLink = document.createTextNode('Task-5');
    linkNavigation.appendChild(textLink);
    nav.appendChild(linkNavigation);

    let divWrapper = createElement('div', 'wrapper', divMainWrapper);

    let header = createElement('header', 'header wrapper__header', divWrapper);
    createTextNode('Header', header);

    let main = createElement('main', 'main', divWrapper);

    let footer = createElement('footer', 'footer wrapper__footer', divWrapper);
    createTextNode('Footer', footer);

    let section = createElement('section', 'main__content', main);

    let wrapperSlider = createElement('div', 'main__wrapper-slider', section);

    let slides = createElement('ul', 'main__slides slides', wrapperSlider);

    for (let i = 0; i <= 2; i++) {
        switch (i) {
            case 0:
                createElement('li', 'slides__item slides__item--first', slides);
                break;
            case 1:
                createElement('li', 'slides__item slides__item--second', slides);
                break;
            case 2:
                createElement('li', 'slides__item slides__item--third', slides);
                break;
            default:
                createElement('li', 'slides__item slides__item--first', slides);
                break;
        }
    }

    let list = createElement('ul', 'main__list list', wrapperSlider);

    for (let i = 0; i <= 2; i++) {
        let li = createElement('li', 'list__page', list);

        let button = document.createElement('button');
        button.className = 'list__button';
        /* if (i === 0) {
            button.classList.add('list__button--check');
        }
        if (i === 2) {
            button.classList.add('list__button--last');
        } */
        li.appendChild(button);
    }

    let footerWatch = createElement('div', 'footer__watch', footer);
    for (let i = 0; i <= 1; i++) {
        createElement('span', 'watch__item', footerWatch);
    }
    createTextNode(':', createElement('span', '', footerWatch));

    for (let i = 0; i <= 1; i++) {
        createElement('span', 'watch__item', footerWatch);
    }
    createTextNode(':', createElement('span', '', footerWatch));

    for (let i = 0; i <= 1; i++) {
        createElement('span', 'watch__item', footerWatch);
    }

    for (let i = 0; i <= 5; i++) {
        let span = document.getElementsByClassName('watch__item');
        span[i].innerHTML = '0';
    }

    let fragment = document.createDocumentFragment();

    let headerClock = document.createElement('div');
    headerClock.className = 'header__clock clock';

    let clockWrapper = createElement('div', 'clock__wrapper', headerClock);
    createElement('div', 'clock__hand--hour clock__hand', clockWrapper);
    createElement('div', 'clock__hand--minute clock__hand', clockWrapper);
    createElement('div', 'clock__hand--second clock__hand', clockWrapper);
    let graduations = createElement('div', 'clock__graduations', clockWrapper);
    for (let i = 0; i <= 59; i++) {
        createElement('div', 'clock__graduation', graduations);
    }

    fragment.appendChild(headerClock);
    header.insertBefore(fragment, header.firstChild);

    let mainBirthday = document.createElement('div');
    mainBirthday.className = 'main__birthday';
    section.appendChild(mainBirthday);
}

dynamicCreationElements();

