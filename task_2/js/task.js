function showError(validate, errorMessage) {
    const msgElem = document.getElementById('error');
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
    document.getElementById('dividend').value = '';
}

function isDividedByThree(form) {
    let dividend = form.elements.dividend.value;
    let validate = true;
    let remainder = 0;
    let sum = 0;

    if (Number(dividend)) {
        for (let i = 0; i < dividend.length; i ++) {
            sum = sum + Number(dividend[i]);
        }

        remainder = sum % 3;

        if (remainder !== 0) {
            validate = false;
            showError(validate, ': the number is not divisible by 3');
        } else {
            validate = true;
            showValidMessage(validate, ': the number divisible by 3');     
        }
    } else {
        validate = false;
        showError(validate, ': the value is not a number');
    }
    return validate;
}
