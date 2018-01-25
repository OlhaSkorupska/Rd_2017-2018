let form = document.forms.registration;
let email = form.elements.email;
let phone = form.elements.phone;
let pass = form.elements.pass;
let confirm = form.elements.confirm;
let birth = form.elements.birth;
let name = form.elements.name;
let submit = form.elements.submit;

let regexpEmail = /^[0-9a-z-.]+@[0-9a-z-]{1,}\.[a-z]{2,}$/i;
let regexpPhone = /^\([0-9]{2}\)[0-9]{3}-[0-9]{2}-[0-9]{2}/;
let regexpPass = /^(?=.*[0-9])(?=.*[a-zA-Z])[\da-zA-Z]{6,20}$/i;
let regexpName = /[A-Za-z]{10,50}/;

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
        formationErrorMessage(email, 'Enter correct email');
    }
    return true;
}

function phoneBlur() {
    if (phone.value === '') {
        return false;
    }
    if (!(phone.value.match(regexpPhone))) {
        formationErrorMessage(phone, 'Enter correct mobile phone');
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

function confirmBlur() {
    if (confirm.value === '') {
        return false;
    }
    if (!(confirm.value === pass.value)) {
        formationErrorMessage(confirm, 'Passwords do not match');
    }
    return true;
}

function birthBlur() {
    if (birth.value === '') {
        return false;
    }
    if (!(birth.value)) {
        formationErrorMessage(birth, 'Incorrect date format');
    }
    return true;
}

function nameBlur() {
    if (name.value === '') {
        return false;
    }
    if (!(name.value.match(regexpName))) {
        formationErrorMessage(name, 'The name should contain only the '
            + 'letters of the Latin alphabet');
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
    phone: function () {
        elementFocus(phone);
    },
    pass: function () {
        elementFocus(pass);
    },
    confirm: function () {
        elementFocus(confirm);
    },
    birth: function () {
        elementFocus(birth);
    },
    name: function () {
        elementFocus(name);
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
    phone: function () {
        phoneBlur();
    },
    pass: function () {
        passBlur();
    },
    confirm: function () {
        confirmBlur();
    },
    birth: function () {
        birthBlur();
    },
    name: function () {
        nameBlur();
    }
};

function handler(event) {
    let currentInput = event.target.id;
    let blurMethod = blurMethods[currentInput];
    blurMethod();
}

function handlerSubmit() {
    let result = true;
    if (!(email.value.match(regexpEmail))) {
        formationErrorMessage(email, 'Enter correct email');
        result = false;
    }
    if (!(phone.value.match(regexpPhone))) {
        formationErrorMessage(phone, 'Enter correct mobile phone');
        result = false;
    }
    if (!(pass.value.match(regexpPass))) {
        formationErrorMessage(pass, 'the password must contain at least one number '
            + 'and at least one letter. Password length is at least 6 characters');
        result = false;
    }
    if (!(confirm.value === pass.value)) {
        formationErrorMessage(confirm, 'Passwords do not match');
        result = false;
    }
    if (!(birth.value)) {
        formationErrorMessage(birth, 'Incorrect date format');
        result = false;
    }
    if (!(name.value.match(regexpName))) {
        formationErrorMessage(name, 'The name should contain only the '
            + 'letters of the Latin alphabet');
        result = false;
    }
    if (result) {
        localStorage.setItem(email.value,
            JSON.stringify({name: name.value, phone: phone.value,
                pass: pass.value, birth: birth.value}));
        /* name.value = 'wwwww eeeeeeeee rrrrrrrrr';
        email.value = 'wwww@i.ua';
        phone.value = '(98)876-67-67';
        birth.value = '2010-12-12';
        pass.value = '123qwe';
        localStorage.setItem(email.value, JSON.stringify({name: name.value, phone: phone.value, birth: birth.value, pass: pass.value})); */

        let date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        document.cookie = `user=${email.value}; path=/; expires=${date.toUTCString()};`;
        window.location.href = 'profile.html';
    }
}

form.addEventListener('blur', handler, true);
form.addEventListener('focus', handlerFocus, true);
submit.addEventListener('click', handlerSubmit, true);
