function showError(errorMessage) {
    let msgElem = document.getElementById('out');
    msgElem.style = 'color: red';
    msgElem.innerHTML = errorMessage;
}

function showCalculateMessage(calculateMessage) {
    const msgElem = document.getElementById('out');
    msgElem.style = 'color: green';
    msgElem.innerHTML = calculateMessage;
}

function cleaning() {
    document.getElementById('palindromeInteger').value = '';
    document.getElementById('out').value = '';
}

function isNines(number) {
    return number.search(/9/g) === 0;
}

function isEven(number) {
    return number % 2 === 0;
}

function getMiddle(str) {
    return str.substr((Math.ceil(str.length / 2) - 1), (2 - str.length % 2));
}

function isOneDigitNumber(number) {
    return number.length !== 1;
}

function getNextPalindrome(palindromeInteger) {
    let nextPalindrome;
    let pal = parseInt(palindromeInteger, 10);
    let leftSide = '';
    let rightSide = '';
    let middle = '';
    let leftSideInverse = '';

    if (Number.isInteger(pal)) {
        pal = String(Math.abs(pal));
        if (pal.length === 1) {
            nextPalindrome = 11;
        } else if (isNines(pal)) {
            pal = parseInt(pal, 10) + 1 + '';
        }
        middle = getMiddle(pal);
        leftSideInverse = pal.substr(0, pal.length / 2).split('').reverse().join('');
        leftSide = pal.substr(0, pal.length / 2);        
        if (isEven(pal.length)) {
            rightSide = pal.substr(pal.length / 2);
            if (middle[0] >= middle[1] && leftSideInverse > rightSide) {
                nextPalindrome = leftSide + leftSideInverse;
            } else {
                leftSide = parseInt(leftSide, 10) + 1 + '';
                nextPalindrome = leftSide + leftSide.split('').reverse().join('');
            }
        } else if (isOneDigitNumber(pal)) {
            rightSide = pal.substr(pal.length / 2 + 1);
            if (middle === '9') {
                leftSide = parseInt(leftSide, 10) + 1 + '';
                middle = '0';
            } else if (leftSide <= rightSide) {
                middle = parseInt(middle, 10) + 1 + '';
            }
            nextPalindrome = leftSide + middle + leftSide.split('').reverse().join('');
        }
    } else {
        showError('The value is not a number');
    }
    showCalculateMessage(nextPalindrome);
}