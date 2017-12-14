function showError(validate, errorMessage) {
    var msgElem = document.getElementById('error');
    msgElem.style = 'color: red';
    msgElem.innerHTML = validate + ': ' + errorMessage;
}

function showValidMessage(validate, trueMessage) {
    const msgElem = document.getElementById('error');
    msgElem.style = 'color: green'
    msgElem.innerHTML = validate + ': ' + trueMessage;
}

function cleaning() {
    document.getElementById('error').value = "";
    document.getElementById('password').value = '';
}

function checkLengthPass(pass) {
    return pass.length >= 6 && pass.length <= 20;
}

function checkAlphaNumericAndCharacters(pass) {
    return !/[^a-zA-Z0-9]/.test(pass);
}

function checkCountLettersAndNumbers(numbers, chars) {
    return numbers !== 0 && chars !== 0;
}

function validatePass(password) {
    let validate = 'VALID';
    let countNumbers = 0;
    let countChars = 0;

    if (checkLengthPass(password)) {
        for (let i = 0; i < password.length; i++) {
            if (Number(password[i])) {
                countNumbers = countNumbers + 1;
            } else if (checkAlphaNumericAndCharacters(password[i])) {
                countChars = countChars + 1;
            } else {
                validate = 'INVALID';
                showError(validate, 'password must contain only alphanumeric characters');
                return validate;
            }
        }
        if (validate && checkCountLettersAndNumbers(countNumbers, countChars)) {
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
