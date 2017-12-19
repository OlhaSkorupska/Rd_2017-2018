function showCalculateMessage(calculateMessage) {
    let msgElem = document.getElementById('error');
    msgElem.style = 'color: #d8339c';
    msgElem.innerHTML = calculateMessage;
}

function showError(validate, errorMessage) {
    let msgElem = document.getElementById('error');
    msgElem.style = 'color: red';
    msgElem.innerHTML = validate + ': ' + errorMessage;
}

function fillZeroes(n) {
    return new Array(n + 1).join('0');
}

function add(firstStr, secondStr) {
    let resultStr = [];
    let result;
    let carry = 0;
    for (let i = firstStr.length - 1; i >= 0; i--) {
        firstStr[i] = firstStr[i];
        secondStr[i] = secondStr[i];
        result = carry + parseInt(firstStr[i], 10) + parseInt(secondStr[i], 10);
        if (result > 9) {
            carry = 1;
            result = ('' + result)[1];
        } else {
            carry = 0;
        }
        resultStr = result + resultStr;
    }
    return resultStr;
}

function start() {
    let firstStr = '8239874626423846872647282343243243242432423424242424242424242426';
    let secondStr = '28728083424239874973284293479237482734293749327427';
    if (/^[0-9]+$/i.exec(firstStr) && /^[0-9]+$/i.exec(secondStr)) {
        if (firstStr.length > secondStr.length) {
            secondStr = fillZeroes(firstStr.length - secondStr.length) + secondStr;
        } else if (firstStr.length < secondStr.length) {
            firstStr = fillZeroes(secondStr.length - firstStr.length) + firstStr;
        }
        let result = add(firstStr, secondStr);
        showCalculateMessage(result);
    } else {
        showError('The strings are not a numbers');
    }
}
