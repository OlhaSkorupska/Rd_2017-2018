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

function dataToForm(data) {
    let name = document.getElementById('name');
    name.innerHTML = data.name;

    let email = document.getElementById('email');
    email.innerHTML = data.email;

    let phone = document.getElementById('phone');
    phone.innerHTML = data.phone;

    let birth = document.getElementById('birth');
    birth.innerHTML = data.birth;

    let picture = document.getElementById('picture');
    picture.innerHTML = data.picture;

    let language = document.getElementById('language');
    language.innerHTML = data.language;    
}

function error(email) {
    alert('error');
    window.location.href = 'autorization.html';    
}

let getUser = (email) => {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:4010/api/v1/users/search?email=' + email,
        success: function (data) {
            dataToForm(data.payload[0]);
        },
        error: error,
        dataType: 'json'
    });
};

window.onload = function () {
    let currentUser = getCookie('user');
    let currentStorage = localStorage.getItem(currentUser);
    getUser(currentUser);
    /* if (currentStorage) {
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
    } */
};
