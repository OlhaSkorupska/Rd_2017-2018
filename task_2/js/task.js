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

function isDividedByThree(dividend) {
    let validate = true;
    let remainder = 0;
    let result = 0;

    if (parseInt(dividend)) {
        result = Array.from(dividend).reduce(function(sum, current) {
            return parseInt(sum) + parseInt(current);
        });
        remainder = result % 3;
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
