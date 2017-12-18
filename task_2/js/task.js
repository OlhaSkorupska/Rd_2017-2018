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

function isNumberOrZero(dividend) {
    let number = parseInt(dividend, 10);
    return Number.isInteger(number);
}

function isDividedByThree(dividend) {
    let validate = true;
    let remainder = 0;
    let result = 0;
    if (isNumberOrZero(dividend)) {
        result = parseInt(dividend, 10) < 0
            ? dividend.slice(1)
            : dividend;
        result = Array.from(result).reduce(function (sum, current) {
            return parseInt(sum, 10) + parseInt(current, 10);
        });
        remainder = result % 3;
        if (remainder !== 0) {
            validate = false;
            showError(validate, 'the number is not divisible by 3');
        } else {
            validate = true;
            showValidMessage(validate, 'the number divisible by 3');
        }
    } else {
        validate = false;
        showError(validate, 'the value is not a number');
    }
    return validate;
}
