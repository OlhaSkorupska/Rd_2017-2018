function showError(errorMessage) {
    let msgElem = document.getElementById('error');
    msgElem.style = 'color: red';
    msgElem.innerHTML = errorMessage;
}

function showCalculateMessage(calculateMessage) {
    let msgElem = document.getElementById('error');
    msgElem.style = 'color: green';
    msgElem.innerHTML = calculateMessage;
}

function cleaning() {
    document.getElementById('error').value = '';
    document.getElementById('number').value = '';
}

function getSingleDigit(value) {
    let sum = 0;
    for (let i = 0; i < value.length; i++) {
        sum = sum + Number(value[i]);
    }
    return sum < 10 ? sum : getSingleDigit(String(sum));
}

function start(value) {
    let number = parseInt(value, 10);

    if (!Number.isInteger(number)) {
        showError('The value is not a number');
    } else {
        number = String(Math.abs(number));
        showCalculateMessage(getSingleDigit(number));
    }
}
