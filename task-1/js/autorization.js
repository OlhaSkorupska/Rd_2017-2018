let form = document.forms.autorization;
let email = form.elements.email;
let pass = form.elements.pass;
let submit = form.elements.submit;

let regexpEmail = /^[0-9a-z-.]+@[0-9a-z-]{1,}\.[a-z]{2,}$/i;
let regexpPass = /^(?=.*[0-9])(?=.*[a-zA-Z])[\da-zA-Z]{6,20}$/i;

function insertAfter(elem, refElem) {
    let parent = refElem.parentNode;
    let next = refElem.nextSibling;
    if (next) {
        return parent.insertBefore(elem, next);
    }
    return parent.appendChild(elem);
}

function formationErrorMessage(element, message) {
    element.classList.add('error');
    let msgElem = document.createElement('span');
    msgElem.classList.add('error-message');
    msgElem.innerHTML = message;
    insertAfter(msgElem, element);
}

function emailBlur() {
    if (email.value === '') {
        return false;
    }
    if (!(email.value.match(regexpEmail))) {
        return formationErrorMessage(email, 'Enter correct email');
    }
    return true;
}

function passBlur() {
    if (pass.value === '') {
        return false;
    }
    if (!(pass.value.match(regexpPass))) {
        formationErrorMessage(pass, 'the password must contain at least one number '
            + 'and at least one letter. Password length is at least 6 characters');
    }
    return true;
}

function elementFocus(element) {
    element.classList.remove('error');
    element.nextSibling.remove();
}

let focusMethods = {
    email: function () {
        elementFocus(email);
    },
    pass: function () {
        elementFocus(pass);
    },
    submit: function () {
        elementFocus(submit);
    }
};

function handlerFocus(event) {
    let currentInput = event.target.id;
    let focusMethod = focusMethods[currentInput];
    focusMethod();
}

let blurMethods = {
    email: function () {
        emailBlur();
    },
    pass: function () {
        passBlur();
    }
};

function handler(event) {
    let currentInput = event.target.id;
    let blurMethod = blurMethods[currentInput];
    blurMethod();
}

function handlerSubmit() {
    let currentStorage = JSON.parse(localStorage.getItem(email.value));
    if (currentStorage && pass.value === currentStorage.pass) {
        let date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        document.cookie = `user=${email.value}; path=/; expires=${date.toUTCString()};`;
        window.location.href = 'index.html';
    } else {
        formationErrorMessage(submit, 'There is no such user in the system');
    }
}

form.addEventListener('blur', handler, true);
form.addEventListener('focus', handlerFocus, true);
submit.addEventListener('click', handlerSubmit, true);
