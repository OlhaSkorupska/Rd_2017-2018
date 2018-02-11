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

window.onload = function () {
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
};
