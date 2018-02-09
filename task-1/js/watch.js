function checkvalue(category, firstDigit, secondDigit) {
    if (category < 10) {
        secondDigit.innerHTML = category;
    } else {
        if (String(category)[0] !== firstDigit.innerHTML) {
            firstDigit.innerHTML = String(category)[0];
        }
        secondDigit.innerHTML = String(category)[1];
    }
}

function digitalWatch() {
    let watchItems = document.getElementsByClassName('watch__item');
    let hours = Number(watchItems[0].innerHTML + watchItems[1].innerHTML);
    let minutes = Number(watchItems[2].innerHTML + watchItems[3].innerHTML);
    let seconds = Number(watchItems[4].innerHTML + watchItems[5].innerHTML);

    if (seconds === 59) {
        seconds = 0;
        watchItems[4].innerHTML = seconds;
        watchItems[5].innerHTML = seconds;
        if (minutes === 59) {
            minutes = 0;
            watchItems[2].innerHTML = minutes;
            watchItems[3].innerHTML = minutes;
            if (hours === 23) {
                hours = 0;
                watchItems[0].innerHTML = hours;
                watchItems[1].innerHTML = hours;
            } else {
                hours++;
                checkvalue(hours, watchItems[0], watchItems[1]);
            }
        } else {
            minutes++;
            checkvalue(minutes, watchItems[2], watchItems[3]);
        }
    } else {
        seconds++;
        checkvalue(seconds, watchItems[4], watchItems[5]);
    }
    setTimeout(digitalWatch, 1000);
}

digitalWatch();

