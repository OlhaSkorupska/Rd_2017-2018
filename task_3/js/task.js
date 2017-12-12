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

function checkNumber(form) {
    const number = form.elements.number.value;
    const arrayValidate = [true, true, true];

    if (Number(number)) {
        // the number is even
        if ((number % 2) !== 0) {
            arrayValidate[1] = false;
        }
        // the number is a multiple of 10
        if ((number % 10) !== 0) {
            arrayValidate[2] = false;
        }
        // the number is prime
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                arrayValidate[0] = false;
                showMessage(arrayValidate);
                return arrayValidate;
            }
        }
        showMessage(arrayValidate);
    } else {
        showError('the value is not a number');
    }
    return arrayValidate;
}
