function showCalculateMessage(calculateMessage) {
    const msgElem = document.getElementById('out');
    msgElem.style = 'color: green';
    msgElem.innerHTML = calculateMessage;
}

function cleaning() {
    document.getElementById('string').value = '';
    document.getElementById('out').value = '';
}

function countCharacters(form) {
    let parsString = form.elements.parsString.value;
    let obj = {};

    [...parsString].forEach(function (char) {
        if (obj[char]) {
            obj[char] = obj[char] + 1;
        } else {
            obj[char] = 1;
        }
    });
    let leaderStr = JSON.stringify(obj);
    showCalculateMessage(leaderStr);
    return obj;
}