function isDividedByThree(form) {
    var dividend = form.elements.dividend.value;
    var validate = true;
    var remainder = 0;
    if (Number(dividend)) {
        remainder = dividend % 3;
        if (remainder !== 0) {
            validate = false;
            showError(validate, ': the number is not divisible by 3');            
            return validate;
        } else {
            validate = true;
            showValidMessage(validate, ': the number is not divisible by 3');
            return validate;
        }
    } else {
        validate = false;
        showError(validate, ': the value is not a number');        
        return validate;
    }
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