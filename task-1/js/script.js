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
            () => animationDone(elem, resolve),
            false);
        elem.style.width = '0';
    });
};

let animateSecond = function (elem, className) {
    return new Promise((resolve) => {
        elem.addEventListener('transitionend',
            () => animationDone(elem, resolve),
            false);
        handler(elem, className);
    });
};

let animate = function (elems, className) {
    const listeners = [];
    for (const elem of elems) {
        const listener = new Promise((resolve) => {
            elem.addEventListener('transitionend', () => {
                animationDone(elem, resolve);
            }, false);
            handler(elem, className);
        });
        listeners.push(listener);
    }
    return Promise.all(listeners);
};

let startFirst = function () {
    progress(bar)
        .then(function () {
            return animate(images, 'transition');
        })
        .then(function () {
            return animate(articles);
        })
        .then(function () {
            return animate(headers);
        })
        .then(function () {
            return animate(items);
        });
};

let startSecond = function () {
    progress(bar)
        .then(function () {
            return animateSecond(images[0], 'transition');
        })
        .then(function () {
            return animateSecond(articles[0]);
        })
        .then(function () {
            return animateSecond(headers[0]);
        })
        .then(function () {
            return animateSecond(items[0]);
        })
        .then(function () {
            return animateSecond(images[1], 'transition');
        })
        .then(function () {
            return animateSecond(articles[1]);
        })
        .then(function () {
            return animateSecond(headers[1]);
        })
        .then(function () {
            return animateSecond(items[1]);
        })
        .then(function () {
            return animateSecond(images[2], 'transition');
        })
        .then(function () {
            return animateSecond(articles[2]);
        })
        .then(function () {
            return animateSecond(headers[2]);
        })
        .then(function () {
            return animateSecond(items[2]);
        });
};
buttonFirst.addEventListener('click', startFirst, false);
buttonSecond.addEventListener('click', startSecond, false);

