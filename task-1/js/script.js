let buttonFirst = document.getElementsByClassName('button')[0];
let buttonSecond = document.getElementsByClassName('button')[1];

let images = document.getElementsByClassName('movies__img');
let articles = document.getElementsByClassName('movies__article');
let headers = document.getElementsByClassName('movies__header');
let items = document.getElementsByClassName('movies__item');
let bar = document.getElementsByClassName('progressBar__load')[0];

let progress = function (elem) {
    return new Promise((resolve) => {
        elem.addEventListener('transitionend',
            resolve, false);
        elem.classList.add('decrease-width');
    });
};

let animateSecond = function (elem, tagName, className) {
    return new Promise((resolve) => {
        elem.classList.add(className);
        elem.addEventListener('transitionend',
            (e) => {
                if (e.target.tagName === tagName) {
                    resolve();
                }
            }, false);
    });
};

let animate = function (elems, tagName, className) {
    const listeners = [];
    for (const elem of elems) {
        const listener = new Promise((resolve) => {
            elem.addEventListener('transitionend',
                (e) => {
                    if (e.target.tagName === tagName) {
                        resolve();
                    }
                }, false);
        });
        elem.classList.add(className);
        listeners.push(listener);
    }
    return Promise.all(listeners);
};

let startFirst = function () {
    progress(bar)
        .then(() => animate(images, 'IMG', 'transition'))
        .then(() => animate(articles, 'ARTICLE', 'transition-item'))
        .then(() => animate(headers, 'H1', 'transition-item'))
        .then(() => animate(items, 'LI', 'transition-item'));
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
                    let className = arrayElems[i].tagName === 'IMG'
                        ? 'transition'
                        : 'transition-item';
                    return animateSecond(arrayElems[i], arrayElems[i].tagName, className);
                });
            }
        });
};

buttonFirst.addEventListener('click', startFirst, false);
buttonSecond.addEventListener('click', startSecond, false);

