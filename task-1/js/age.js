function getCurrentAge(date) {
    let message = document.getElementsByClassName('main__birthday')[0];
    let dateBegin = new Date();
    let dateEnd = new Date(date);
    let years = Math.abs(dateEnd.getFullYear() - dateBegin.getFullYear());
    let month = (dateEnd.getMonth() + (dateBegin.getYear() * 12)
        - dateEnd.getMonth() + (dateBegin.getYear() * 12)) + 1;
    let days = Math.round(Math.abs(dateEnd - dateBegin) / 86400000);
    let weeks = Math.floor(days / 7);
    message.innerHTML = years + ' year, ' + month + ' month, '
        + weeks + ' weeks, ' + days + ' days';
}

function getCookie(attr) {
    let matches = document.cookie.match(new RegExp('(?:^|; )'
        + attr.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

let currentUser = getCookie('user');
let currentStorage = localStorage.getItem(currentUser);
let objectStorage = JSON.parse(currentStorage);
let birthStorage = objectStorage.birth;

getCurrentAge(birthStorage);
