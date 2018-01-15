let buttonFirst = document.getElementsByClassName('button')[0];
let buttonSecond = document.getElementsByClassName('button')[1];

let images = document.getElementsByClassName('movies__img');
let articles = document.getElementsByClassName('movies__article');
let headers = document.getElementsByClassName('movies__header');
let items = document.getElementsByClassName('movies__item');
let bar = document.getElementsByClassName('progressBar__load')[0];

function handler(set, className) {
    let nameOfClass = className || 'transition-item';
    set.classList.add(nameOfClass);
}

function animationDone(elem, resolve) {
    elem.removeEventListener('transitionend', animationDone);
    resolve();
}

let progress = function (elem) {
    return new Promise((resolve) => {
        elem.addEventListener('transitionend',
            () => animationDone(elem, resolve));
        elem.style.width = '0';
    });
};

let animateSecond = function (elem, className) {
    return new Promise((resolve) => {
        handler(elem, className);
        elem.addEventListener('transitionend',
            () => animationDone(elem, resolve));
    });
};

let animate = function (elems, className) {
    const listeners = [];
    for (const elem of elems) {
        const listener = new Promise((resolve) => {
            elem.addEventListener('transitionend', () => {
                animationDone(elem, resolve);
            });
            handler(elem, className);
        });
        listeners.push(listener);
    }
    return Promise.all(listeners);
};

let startFirst = function () {
    progress(bar)
        .then(() => animate(images, 'transition'))
        .then(() => animate(articles))
        .then(() => animate(headers))
        .then(() => animate(items));
};

let startSecond = function () {
    let arrayElems = [];
    for (let i = 0; i < images.length; i++) {
        arrayElems.push(images[i]);
        arrayElems.push(articles[i]);
        arrayElems.push(headers[i]);
        arrayElems.push(items[i]);
    }

    progress(bar)
        .then(() => {
            let actionsChain = Promise.resolve();
            for (let i = 0; i < arrayElems.length; i++) {
                actionsChain = actionsChain.then(function () {
                    return animateSecond(arrayElems[i]);
                });
            }
        });
};

buttonFirst.addEventListener('click', startFirst, false);
buttonSecond.addEventListener('click', startSecond, false);

