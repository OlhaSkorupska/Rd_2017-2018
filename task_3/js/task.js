function showInteger(message) {
    const msgElem = document.getElementById('sorting__array');
    msgElem.style = 'color: green';
    msgElem.innerHTML = message;
}

let isEvenArray = function (value) {
    if (value % 2 === 0) {
        return true;
    }
    return false;
};

let isOddArray = function (value) {
    if (value % 2 === 0) {
        return false;
    }
    return true;
};

function getNumber(array) {
    let result = array.filter(isEvenArray);
    result = (result.length !== 1) ? array.filter(isOddArray) : result;
    showInteger(result);
    return result;
}

function start() {
    getNumber([1, 5, 7, 9, 15, 19, 777, -15, -11, 4, 9, 23, -17]);
    // getNumber([0, 2, 8, -4, 0, -122, 13, -4, 28, 12]);
}
