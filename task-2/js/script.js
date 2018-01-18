let buttonFirst = document.getElementsByClassName('button')[0];
let buttonSecond = document.getElementsByClassName('button')[1];

const images = document.getElementsByClassName('movies__img');
const articles = document.getElementsByClassName('movies__article');
const headers = document.getElementsByClassName('movies__header');
const items = document.getElementsByClassName('movies__item');
const bar = document.getElementsByClassName('progressBar__load')[0];

function Chain() {
}

Chain.prototype.progress = function (elem) {
    return new Promise((resolve) => {
        elem.addEventListener('transitionend',
            resolve, false);
        elem.classList.add('decrease-width');
    });
}

function SynchronousChain() {
    this.progress(bar)
        .then(() => this.animate(images, 'IMG', 'transition'))
        .then(() => this.animate(articles, 'ARTICLE', 'transition-item'))
        .then(() => this.animate(headers, 'H1', 'transition-item'))
        .then(() => this.animate(items, 'LI', 'transition-item'));
}

SynchronousChain.prototype = Object.create(Chain.prototype);
SynchronousChain.prototype.constructor = SynchronousChain;

SynchronousChain.prototype.animate = function (elems, tagName, className) {
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

function ConsistentChain() {
    let arrayElems = [];
    let self = this;
    for (let i = 0; i < images.length; i++) {
        arrayElems.push(images[i]);
        arrayElems.push(articles[i]);
        arrayElems.push(headers[i]);
        arrayElems.push(items[i]);
    }

    this.progress(bar)
        .then(() => {
            let actionsChain = Promise.resolve();
            for (let i = 0; i < arrayElems.length; i++) {
                actionsChain = actionsChain.then(function () {
                    let className = arrayElems[i].tagName === 'IMG'
                        ? 'transition'
                        : 'transition-item';
                    return self.animate(arrayElems[i], arrayElems[i].tagName, className);
                });
            }
        });
}

ConsistentChain.prototype = Object.create(Chain.prototype);
ConsistentChain.prototype.constructor = ConsistentChain;

ConsistentChain.prototype.animate = function (elem, tagName, className) {
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

let startFirst = function () {
    const chain = new SynchronousChain();
    chain();
};

let startSecond = function () {
    const chain = new ConsistentChain();
    chain();
};

buttonFirst.addEventListener('click', startFirst, false);
buttonSecond.addEventListener('click', startSecond, false);

