function showCalculateMessage(calculateMessage) {
    const msgElem = document.getElementById('out');
    msgElem.style = 'color: green';
    msgElem.innerHTML = calculateMessage;
}

function cleaning() {
    document.getElementById('string').value = '';
    document.getElementById('out').value = '';
}

function countCharacters(parsString) {
    let obj = {};
    [...parsString].forEach(function (char) {
        obj[char] = (obj[char])
            ? obj[char] + 1
            : obj[char] = 1;
    });
    let leaderStr = JSON.stringify(obj);
    showCalculateMessage(leaderStr);
    return obj;
}
