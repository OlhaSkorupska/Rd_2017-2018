function showError(validate, errorMessage) {
    var msgElem = document.getElementById('error');
    msgElem.style = 'color: red';
    msgElem.innerHTML = validate + ': ' + errorMessage;
}

function showValidMessage(validate, trueMessage) {
    const msgElem = document.getElementById('error');
    msgElem.style = 'color: green';
    msgElem.innerHTML = validate + ': ' + trueMessage;
}

function cleaning() {
    document.getElementById('error').value = '';
    document.getElementById('password').value = '';
}

function validatePass(form) {
    const password = form.elements.password.value;
    let validate = 'VALID';
    let countNumbers = 0;
    let countChars = 0;

    if (password.length >= 6 && password.length <= 20) {
        for (let i = 0; i < password.length; i++) {
            if (Number(password[i])) {
                countNumbers = countNumbers + 1;
            } else if (((password.charCodeAt(i) <= 65 && password.charCodeAt(i) <= 90))
                || (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122)) {
                countChars = countChars + 1;
            } else {
                validate = 'INVALID';
                showError(validate, 'password must contain only alphanumeric characters');
                return validate;
            }
        }

        if (validate && countNumbers !== 0 && countChars !== 0) {
            showValidMessage(validate, 'this value is correct');
        } else {
            validate = 'INVALID';
            showError(validate, 'password must contain letters and numbers');
        }
    } else {
        validate = 'INVALID';
        showError(validate, 'password lenght must be more than 6 characters but less than 20');
    }
    return validate;
}
