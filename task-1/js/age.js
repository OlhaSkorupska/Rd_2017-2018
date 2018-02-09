function getCurrentAge(date) {
    let message = document.getElementsByClassName('main__birthday')[0];
    let dateBegin = new Date();
    let dateEnd = new Date(date);
    let years = Math.abs(dateEnd.getFullYear() - dateBegin.getFullYear());
    let month = (dateBegin.getMonth() - dateEnd.getMonth()) +
        ((dateBegin.getFullYear() - dateEnd.getFullYear()) * 12);
    let days = Math.round(Math.abs(dateEnd - dateBegin) / 86400000);
    let weeks = Math.floor(days / 7);
    message.innerHTML = years + ' year, ' + month + ' month, '
        + weeks + ' weeks, ' + days + ' days';
}

function getCookie(cname) {
    let name = cname + '=';
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}

let user = getCookie('user');
let storage = localStorage.getItem(user);
let objectStorage = JSON.parse(storage);
let birthStorage = objectStorage.birth;    
getCurrentAge(birthStorage);
