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

function getCookingTime(eggs) {
    const CAPACITY = 5;
    let times = 0;
    let countEggs = parseInt(eggs, 10);

    if (Number.isInteger(countEggs) && countEggs >= 0) {
        times = (eggs % CAPACITY === 0)
            ? eggs / CAPACITY
            : Math.floor(eggs / CAPACITY) + 1;
        showCalculateMessage(`For ${eggs} egg preparation is required ${times} times`);
    } else {
        showError('The value is not a number');
    }
    return times;
}
