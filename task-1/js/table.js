www.addEventListener('click', handler, false);

function handler() {
    let qqq = document.getElementById("qqq");      
    document.body.appendChild(dynamicCreationElements(2, 2, '+'));
}

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

    fragment.appendChild(table);
    document.body.appendChild(fragment);
}

function inputData() {

    let rows = prompt('Введите количество строк: ', 20);
    let colls = prompt('Введите количество столбцов: ', 20);
    let operation = prompt('Введите арифметическую операцию: ', '+');
    dynamicCreationElements(rows, colls, operation);
}

inputData();
