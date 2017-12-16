function showCalculateMessage(calculateMessage) {
    const msgElem = document.getElementById('out');
    msgElem.style = 'color: green';
    msgElem.innerHTML = calculateMessage;
}

function cleaning() {
    document.getElementById('parsString').value = '';
    document.getElementById('out').value = '';
}

function countCharacters(parsString) {
    let obj = {};
    [...parsString].forEach(function (char) {
        if (obj[char]) {
            obj[char] = obj[char] + 1;
        } else {
            obj[char] = 1;
        }
    });
    let str = JSON.stringify(obj);
    showCalculateMessage(str);
    return obj;
}
