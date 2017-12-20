function showCalculateMessage(calculateMessage) {
    let msgElem = document.getElementById('error');
    msgElem.style = 'color: #d8339c';
    msgElem.innerHTML = calculateMessage;
}

function isFindBill(arrayPurse, findBill) {
    return arrayPurse.indexOf(findBill);
}

function tickets(queue) {
    let arrayPurse = [];
    let ticketPrice = 25;
    let valid = 'NO';
    let deleteIndex = 0;

    for (let i = 0; i <= queue.length; i++) {
        if (queue[i] === ticketPrice) {
            arrayPurse.push(queue[i]);
        } else if (queue[i] === 50) {
            deleteIndex = arrayPurse.indexOf(25);
            if (deleteIndex !== -1) {
                arrayPurse.splice(deleteIndex, 1);
                valid = 'YES';
                arrayPurse.push(queue[i]);
            }
        } else if (queue[i] === 100) {
            deleteIndex = arrayPurse.indexOf(50);
            if (deleteIndex !== -1) {
                arrayPurse.splice(deleteIndex, 1);
                valid = 'NO';
                deleteIndex = arrayPurse.indexOf(25);
                if (deleteIndex !== -1) {
                    arrayPurse.splice(deleteIndex, 1);
                    valid = 'YES';
                    arrayPurse.push(queue[i]);
                }                
            } else {
                deleteIndex = arrayPurse.indexOf(25);
                if (deleteIndex !== -1) {
                    arrayPurse.splice(deleteIndex, 1);
                    valid = 'NO';
                    deleteIndex = arrayPurse.indexOf(25);
                    if (deleteIndex !== -1) {
                        arrayPurse.splice(deleteIndex, 1);
                        valid = 'NO';
                        deleteIndex = arrayPurse.indexOf(25);
                        if (deleteIndex !== -1) {
                            arrayPurse.splice(deleteIndex, 1);
                            valid = 'YES';
                            arrayPurse.push(queue[i])
                        }
                    }
                }
            }
        }
    }
    alert(valid);
    return valid;
}

function start() {
    tickets([25, 25, 50, 100]); // YES
    // tickets([25, 50, 25, 100]); // NO
    // tickets([25, 25, 50, 100]); // YES
    // tickets([25, 50, 100]); // NO
}
