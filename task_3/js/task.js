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
    number = Math.abs(number);
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            arrayValidate[0] = false;
            return arrayValidate;
        } else return arrayValidate;
    }
}


function checkNumber(number) {
    const arrayValidate = [true, true, true];

    if (parseInt(number)) {
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
