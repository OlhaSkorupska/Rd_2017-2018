function validatePass(form) {
    var password = form.elements.password.value;
    var validate = 'VALID';
    var countNumbers = 0;
    var countChars = 0;
    var errorMessage = '';

    if (6 <= password.length && password.length <= 20) {
        for (let i = 0; i < password.length; i++) {
            if (Number(password[i])) {
                countNumbers++;
            } else if (((65 <= password.charCodeAt(i) && password.charCodeAt(i) <= 90)) 
                || (97 <= password.charCodeAt(i) && password.charCodeAt(i) <= 122)) {
                    countChars++;                
            } else {
                validate = 'INVALID';
                showError(validate, 'password must contain only alphanumeric characters');                 
                return validate;
            }
        }
        if (validate && countNumbers !=0 && countChars !=0) {
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

function showError(validate, errorMessage) {
    var msgElem = document.getElementById('error');
    msgElem.style = 'color: red';    
    msgElem.innerHTML = validate + ": " + errorMessage;
}

function showValidMessage(validate, trueMessage) {
    var msgElem = document.getElementById('error');
    msgElem.style = 'color: green';
    msgElem.innerHTML = validate + ": " + trueMessage;
}

function cleaning(form) {
    document.getElementById('error').innerHTML = '';
    document.getElementById('password').value = '';    
};