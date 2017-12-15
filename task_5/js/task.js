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
    document.getElementById('string').value = '';
    document.getElementById('out').value = '';
}

function getNextPalindrome(form) {
    let palindromeInteger = form.elements.palindromeInteger.value;
    let nextPalindrome;
    if (Number(palindromeInteger)) {
        if (palindromeInteger.search(/(\9)\1+/g) === 0) {
            nextPalindrome = palindromeInteger;
            nextPalindrome[0] = 1;
            nextPalindrome[nextPalindrome.length + 1] = 1;
            console.log(palindromeInteger);
        }
    } else {
        showError('The value is not a number');
    }
}

