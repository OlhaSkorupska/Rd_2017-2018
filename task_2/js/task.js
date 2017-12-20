function showCalculateMessage(calculateMessage) {
    let msgElem = document.getElementById('error');
    msgElem.style = 'color: #d8339c';
    msgElem.innerHTML = calculateMessage;
}

function compareNumeric(a, b) {
    return (a > b) ? 1 : -1;
}

function isSubset(purse, array) {
    purse.sort(compareNumeric);
    array.sort(compareNumeric);
    for (let i = 0; i < array.length; i++) {
        if (purse[i] !== array[i]) {
            return false;
        }
    }
    return true;
}

function findValue(array, value) {
    let index = -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            index = i;
        }
    }
    return index;
}

function spliceValue(purse, array) {
    for (let i = 0; i < array.length; i++) {
        let index = findValue(purse, array[i]);
        if (index !== -1) {
            purse.splice(index, 1);
        }
    }
    return purse;
}

function tickets(queue) {
    let arrayPurse = [];
    let ticketPrice = 25;

    queue.sort(compareNumeric);

    for (let i = 0; i < queue.length; i++) {
        if (queue[i] === ticketPrice) {
            arrayPurse.push(queue[i]);
        } else if (queue[i] === 50) {
            if (isSubset(arrayPurse, [25])) {
                arrayPurse = spliceValue(arrayPurse, [25]);
                arrayPurse.push(queue[i]);
            }
        } else if (queue[i] === 100) {
            if (isSubset(arrayPurse, [25, 50])) {
                arrayPurse = spliceValue(arrayPurse, [25, 50]);
                arrayPurse.push(queue[i]);
            } else if (isSubset(arrayPurse, [25, 25, 25])) {
                arrayPurse = spliceValue(arrayPurse, [25, 25, 25]);
                arrayPurse.push(queue[i]);
            }
        }
    }
    let cashbox = arrayPurse.reduce(function (sum, current) {
        return sum + current;
    }, 0);

    let result = (cashbox / queue.length === ticketPrice)
        ? 'YES'
        : 'NO';
    showCalculateMessage(result);
    return result;
}

function start() {
    // tickets([25, 25, 50, 100]); // YES
    // tickets([25, 50, 25, 100]); // YES
    tickets([25, 25, 50, 100, 50]); // NO
    // tickets([25, 50, 100]); // NO
}
