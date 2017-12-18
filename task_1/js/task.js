function showError(validate, errorMessage) {
    let msgElem = document.getElementById('error');
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

function validatePass(password) {
    let validate = 'VALID';
    let matches = /^(?=.*[0-9])(?=.*[a-zA-Z])[\da-zA-Z]{6,20}$/i.exec(password);
    if (matches === null) {
        validate = 'INVALID';
    }
    return validate;
}
