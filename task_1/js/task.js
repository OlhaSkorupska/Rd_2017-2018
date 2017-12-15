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

function getSingleDigit(form) {
    let value = form.elements.value.value;
    let sum = 0;
    let str = '';

    if (!Number(value)) {
        showError('The value is not a number');
    } else {
        if (value <= 0) {
            value = String(Math.abs(value));
            str = value;
        }
        while (String(value).length !== 1) {
            str = str + ' -> ';
            for (let i = 0; i < value.length; i++) {
                sum = sum + Number(value[i]);
                str = str + Number(value[i]);
                str = (value.length - 1 !== i) ? str + ' + ' : str + '=';
            }
            value = String(sum);
            sum = 0;
            str = `${str} ${value}`;
        }
        showCalculateMessage(str);
    }
}
