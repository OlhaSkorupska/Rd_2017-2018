function showCalculateMessage(calculateMessage) {
    let msgElem = document.getElementById('error');
    msgElem.style = 'color: #d8339c';
    msgElem.innerHTML = calculateMessage;
}

function tickets(queue) {
    let arrayCredit = [];
    let arrayPurse = [];
    let ticketPrice = 25;

    for (let i = 0; i <= queue.length; i++) {
        if (queue[i] !== ticketPrice) {
            arrayCredit.push(queue[i]);
        } else {
            arrayPurse.push(queue[i]);
        }
        if (queue[i] === 50) {
            for (let j = 0; j <= arrayPurse; j++) {

            }
        } else if (queue[i] === 100) {
            for (let j = 0; j <= arrayPurse; j++) {
                
            }
        }
    }

    return arrayCredit;
}

function start() {
    tickets([25, 25, 50]); // YES
    // tickets([25, 100]); // NO
    // tickets([25, 25, 50, 100]); // YES
    // tickets([25, 50, 100]); // NO
}
