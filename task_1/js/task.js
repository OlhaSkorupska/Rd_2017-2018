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
    let str = '';
    let val = parseInt(value, 10);

    if (!Number.isInteger(val)) {
        showError('The value is not a number');
    } else {
        val = String(Math.abs(val));
        str = val;
        while (String(val).length !== 1) {
            str = `${str} -> `;
            for (let i = 0; i < val.length; i++) {
                sum = sum + Number(val[i]);
                str = str + Number(val[i]);
                str = (val.length - 1 !== i) ? str + ' + ' : str + '=';
            }
            val = String(sum);
            sum = 0;
            str = `${str} ${val}`;
        }
        showCalculateMessage(str);
    }
}
