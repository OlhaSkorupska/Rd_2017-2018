function showError(errorMessage) {
    let msgElem = document.getElementById('error');
    msgElem.style = 'color: red';
    msgElem.innerHTML = errorMessage;
}

function showCalculateMessage(calculateMessage) {
    const msgElem = document.getElementById('error');
    msgElem.style = 'color: green';
    msgElem.innerHTML = calculateMessage;
}

function cleaning() {
    document.getElementById('error').value = '';
    document.getElementById('eggs').value = '';
}

function getCookingTime(form) {
    const eggs = form.elements.eggs.value;
    const capacity = 5;
    let times = 0;

    if (Number(eggs)) {
        if (eggs % capacity === 0) {
            times = eggs / capacity;
        } else {
            times = Math.floor(eggs / capacity) + 1;
        }
        showCalculateMessage('For ' + eggs + ' egg preparation is required ' + times + ' times');
    } else {
        showError('The value is not a number');
    }
    return times;
}
