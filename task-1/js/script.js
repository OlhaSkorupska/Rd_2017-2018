let interest = 100;
let elem = document.getElementsByClassName('progressBar')[0];
let positive = document.getElementsByClassName('positive')[0];

function go() {
    if (interest !== 0) {
        interest--;
        elem.innerHTML = interest + ' %';
        positive.style.width = interest + ' %';
    } else {
        elem.innerHTML = 'Загрузка завершена';
    }
}

let timer = setInterval(function () {
    go();
}, 10);

setTimeout(function () {
    clearInterval(timer);
}, 2000);
