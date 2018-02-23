function createElement(tag, classOfTag, parent, child) {
    let element = document.createElement(tag);
    element.className = classOfTag;
    return parent.insertBefore(element, child) || parent.insertBefore(element);
}

function createTextNode(text, parent) {
    let textElement = document.createTextNode(text);
    parent.appendChild(textElement);
}

export function dynamicCreationElements() {
    let divMainWrapper = createElement('div', 'main-wrapper', document.body,
        document.body.firstChild);

    let nav = createElement('nav', 'navigation main-wrapper__navigation', divMainWrapper);
    createTextNode('Navigation', nav);

    let divWrapper = createElement('div', 'wrapper', divMainWrapper);

    createElement('header', 'header wrapper__header', divWrapper);

    let main = createElement('main', 'main', divWrapper);

    let footer = createElement('footer', 'footer wrapper__footer', divWrapper);
    createTextNode('Footer', footer);

    createElement('section', 'main__content', main);
}

