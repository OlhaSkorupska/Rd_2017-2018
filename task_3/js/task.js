function showError( errorMessage) {
    const msgElem = document.getElementById('error');
    msgElem.style = 'color: red';
    msgElem.innerHTML = errorMessage;
}

function showMessage(array) {
    const msgElem = document.getElementById('error');
    msgElem.style = 'color: green';
    msgElem.innerHTML = array;
}

function cleaning() {
    document.getElementById('error').value = '';
    document.getElementById('number').value = '';
}

function isEven(number) {
    return number % 2 !== 0;
}

function isMultipleTen(number) {
    return number % 10 !== 0;
}

function isPrime(number, arrayValidate) {
    let num = Math.abs(number);
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            arrayValidate[0] = false;
            return arrayValidate;
        }
    }
    return arrayValidate;
}

function checkNumber(parameter) {
    const arrayValidate = [true, true, true];
    let number = parseInt(parameter, 10);

    if (Number.isInteger(number)) {
        if (isEven(number)) {
            arrayValidate[1] = false;
        }
        if (isMultipleTen(number)) {
            arrayValidate[2] = false;
        }
        isPrime(number, arrayValidate);
        showMessage(arrayValidate);
    } else {
        showError('the value is not a number');
    }
    return arrayValidate;
}
