function getCookie(attr) {
    let matches = document.cookie.match(new RegExp('(?:^|; )'
        + attr.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

let currentUser = getCookie('user');
let currentStorage = localStorage.getItem(currentUser);

if (currentStorage) {
    let objectStorage = JSON.parse(currentStorage);

    let name = document.getElementById('name');
    let nameStorage = objectStorage.name;
    name.innerHTML = nameStorage;

    let email = document.getElementById('email');
    let emailStorage = currentUser;
    email.innerHTML = emailStorage;

    let phone = document.getElementById('phone');
    let phoneStorage = objectStorage.phone;
    phone.innerHTML = phoneStorage;

    let birth = document.getElementById('birth');
    let birthStorage = objectStorage.birth;
    birth.innerHTML = birthStorage;
} else {
    window.location.href = 'index.html';
}
