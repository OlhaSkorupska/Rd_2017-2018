let form = document.forms.registration;
let email = form.elements.email;
let phone = form.elements.phone;
let pass = form.elements.pass;
let confirm = form.elements.confirm;
let birth = form.elements.birth;
let name = form.elements.name;
let submit = form.elements.submit;
let obj = {email, phone, pass, confirm, birth, name};

let regexpEmail = /^[0-9a-z-.]+@[0-9a-z-]{1,}\.[a-z]{2,}$/i;
let regexpPhone = /^\([0-9]{2}\)[0-9]{3}-[0-9]{2}-[0-9]{2}/;
let regexpPass = /^(?=.*[0-9])(?=.*[a-zA-Z])[\da-zA-Z]{6,20}$/i;
let regexpName = /[A-z].*$/;

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
    return localStorage.setItem('email', email.value);
}

function phoneMask(input) {
    let value = input.replace(/\D/g, '');

    value = value.substring(0, 9);
    let size = value.length;
    if (size === 0) {
        return value;
    } else if (size < 3) {
        value = `(${value}`;
    } else if (size < 6) {
        value = `(${value.substring(0, 2)})${value.substring(2, 5)}`;
    } else if (size < 8) {
        value = `(${value.substring(0, 2)})${value.substring(2, 5)}-${value.substring(5, 7)}`;
    } else {
        value = `(${value.substring(0, 2)})${value.substring(2, 5)}-${value.substring(5, 7)}`
        + `-${value.substring(7, 9)}`;
    }
    return value;
}

function phoneBlur() {
    if (phone.value === '') {
        return false;
    }
    if (!(phone.value.match(regexpPhone))) {
        formationErrorMessage(phone, 'Enter correct mobile phone');
    }
    return localStorage.setItem('phone', phone.value);
}

function handlerMask() {
    phone.value = phoneMask(phone.value);
}

function confirmBlur() {
    if (confirm.value === '') {
        return false;
    }
    if (!(confirm.value.match(regexpPass))) {
        return formationErrorMessage(pass, 'the password must contain at least one number '
            + 'and at least one letter. Password length is at least 6 characters');
    }
    if (pass.value) {
        if (!(confirm.value === pass.value)) {
            return formationErrorMessage(confirm, 'Passwords do not match');
        }
    }
    return localStorage.setItem('confirm', confirm.value);
}
function passBlur() {
    if (pass.value === '') {
        return false;
    }
    if (!(pass.value.match(regexpPass))) {
        return formationErrorMessage(pass, 'the password must contain at least one number '
            + 'and at least one letter. Password length is at least 6 characters');
    }
    if (confirm.value) {
        if (!(confirm.value === pass.value)) {
            return formationErrorMessage(confirm, 'Passwords do not match');
        }
    }
    return localStorage.setItem('pass', pass.value);
}

function birthBlur() {
    if (birth.value === '') {
        return false;
    }
    if (!(birth.value)) {
        formationErrorMessage(birth, 'Incorrect date format');
    }
    return localStorage.setItem('birth', birth.value);
}

function nameBlur() {
    if (name.value === '') {
        return false;
    }
    if (!(name.value.match(regexpName))) {
        formationErrorMessage(name, 'The name should contain only the '
            + 'letters of the Latin alphabet');
    }
    return localStorage.setItem('name', name.value);
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
        elementFocus(confirm);
    },
    confirm: function () {
        elementFocus(pass);
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
        let date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        document.cookie = `user=${email.value}; path=/; expires=${date.toUTCString()};`;
        for (let key in obj) {
            if (key) {
                localStorage.removeItem(key);
            }
        }
        window.location.href = 'profile.html';
    }
}

form.addEventListener('blur', handler, true);
phone.addEventListener('keyup', handlerMask, true);
form.addEventListener('focus', handlerFocus, true);
submit.addEventListener('click', handlerSubmit, true);

function init() {
    email.value = localStorage.getItem('email') || '';
    phone.value = localStorage.getItem('phone') || '';
    pass.value = localStorage.getItem('pass') || '';
    confirm.value = localStorage.getItem('confirm') || '';
    birth.value = localStorage.getItem('birth') || '';
    name.value = localStorage.getItem('name') || '';
}

window.onload = function () {
    init();
};
