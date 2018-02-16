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

    let language = document.getElementById('language');
    language.innerHTML = data.language;   

    document.getElementsByTagName('img')[0].setAttribute('src', data.picture);  
}

function error() {
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
    localStorage.getItem(currentUser);
    getUser(currentUser);
};
