function getOperation(i, j, operation) {
    switch (operation) {
        case '+':
            return i + j;
        case '-':
            return i - j;
        case '*':
            return i * j;
        case '/':
            return (i / j).toFixed(2);
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
            let result = getOperation(i, j, operation);
            cell.innerHTML = result;
            cell.setAttribute('data-tooltip', `${i} ${operation} ${j} = ${result}`);
        }
    }

    return fragment.appendChild(table);
}

function isOperationMark(mark) {
    return mark.match(/[+\-*/]{1}/g);
}

let selectedTd;

function showTooltip(target) {
    if (selectedTd) {
        selectedTd.classList.remove('tooltip');
    }
    selectedTd = target;
    selectedTd.classList.add('tooltip');
}

function handlerCell(e) {
    let target = e.target;
    if (target.tagName !== 'TD') {
        return;
    }
    showTooltip(target);
}

function handlerButton(e) {
    let wrapper = document.getElementsByClassName('wrapper')[0];
    let rows = document.getElementsByClassName('form__rowsInput')[0].value;
    let colls = document.getElementsByClassName('form__collsInput')[0].value;
    let operation = document.getElementsByClassName('form__operationInput')[0].value;
    isOperationMark(operation);
    if (!isOperationMark(operation)) {
        e.preventDefault();
        wrapper.innerHTML = 'Введите корректные данные';
    } else {            
        // validation();
        if (wrapper.hasChildNodes()) {
            let child = wrapper.children[0];
            child.remove();
        }
        wrapper.appendChild(dynamicCreationElements(rows, colls, operation));
        let table = document.getElementsByClassName('table')[0];
        table.addEventListener('mouseover', handlerCell, false);
    }
}

window.addEventListener('load', function () {
    let buttonSend = document.getElementsByClassName('form__buttonSend')[0];
    buttonSend.addEventListener('click', handlerButton, false);
}, false);

