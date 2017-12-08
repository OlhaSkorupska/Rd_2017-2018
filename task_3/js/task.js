function checkNumber(form) {
    var number = form.elements.number.value;
    var arrayValidate = [true, true, true];

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
        for (var i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                arrayValidate[0] = false;
                showMessage(arrayValidate);
                return arrayValidate;
            }
        }
        showMessage(arrayValidate);
        return arrayValidate;
    } else {
        showError('the value is not a number');        
    }
}

function showError( errorMessage) {
    var msgElem = document.getElementById('error');
    msgElem.style = 'color: red';    
    msgElem.innerHTML = errorMessage;
}

function showMessage(array) {
    var msgElem = document.getElementById('error');
    msgElem.style = 'color: green';
    msgElem.innerHTML = array;
}

function cleaning(form) {
    document.getElementById('error').innerHTML = '';
    document.getElementById('number').value = '';    
};