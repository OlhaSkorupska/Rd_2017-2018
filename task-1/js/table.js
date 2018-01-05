function getOperation(i, j, operation) {
    switch (operation) {
        case '+':
            return i + j;
        case '-':
            return i - j;
        case '*':
            return i * j;
        case '/':
            return i / j;
        default:
            return i + j;
    }
}

function dynamicCreationElements(rows = 2, colls = 2, operation = '+') {

    let fragment = document.createDocumentFragment();
    let table = document.createElement('table');
    table.classList.add('table');

    for (let i = 1; i <= rows; i++) {
        let row = document.createElement('tr');
        table.appendChild(row);

        for (let j = 1; j <= colls; j++) {
            let cell = document.createElement('td');
            cell.classList.add('table__cell');
            row.appendChild(cell);
            cell.innerHTML = getOperation(i, j, operation);
        }
    }

    return fragment.appendChild(table);
}

window.onload = function () {
    function handler() {
        let wrapper = document.getElementsByClassName('wrapper')[0];
        let rows = document.getElementsByClassName('form__rowsInput')[0].value;
        let colls = document.getElementsByClassName('form__collsInput')[0].value;
        let operation = document.getElementsByClassName('form__operationInput')[0].value;
        // validation();
        wrapper.appendChild(dynamicCreationElements(rows, colls, operation));
    }

    let buttonSend = document.getElementsByClassName('form__buttonSend')[0];
    buttonSend.addEventListener('click', handler, false);
};

