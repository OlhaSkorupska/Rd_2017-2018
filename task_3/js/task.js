function showInteger(message) {
    const msgElem = document.getElementById('sorting__array');
    msgElem.style = 'color: green';
    msgElem.innerHTML = message;
}

function getNumber(array) {
    let evenArray = [];
    let oddArray = [];
    let returnValue;
    let message = '';

    array.forEach(function (name) {
        if (name % 2 === 0) {
            evenArray.push(name);
        } else {
            oddArray.push(name);
        }
    });

    if (evenArray.length === 1) {
        returnValue = evenArray[0];
        message = 'Odd array. Excess integer is ';
    } else if (oddArray.length === 1) {
        returnValue = oddArray[0];
        message = 'Even array. Excess integer is ';
    }
    showInteger(message + returnValue);
    return returnValue;
}

function start() {
    getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]);
    // getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12]);
}
