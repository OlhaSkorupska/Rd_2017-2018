function createElement(tag, classOfTag, parent, child) {
    let element = document.createElement(tag);
    element.className = classOfTag;
    return parent.insertBefore(element, child) || parent.insertBefore(element);
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

function createTextNode(text, parent) {
    let textElement = document.createTextNode(text);
    parent.appendChild(textElement);
}

function dynamicCreationElements() {
    let divMainWrapper = createElement('div', 'main-wrapper', document.body,
        document.body.firstChild);

    let nav = createElement('nav', 'navigation main-wrapper__navigation', divMainWrapper);
    createTextNode('Navigation', nav);

    let linkNavigation = document.createElement('a');
    linkNavigation.classList.add('navigation__link');
    linkNavigation.setAttribute('href', 'table.html');

    let textLink = document.createTextNode('Task-5');
    linkNavigation.appendChild(textLink);
    nav.appendChild(linkNavigation);

    let loginLink = document.createElement('div');

    loginLink.innerHTML = '<button>Log Out</button>';
    loginLink.addEventListener('click', function () {
        document.cookie = `user=''; path=/; expires=${new Date(0)};`;
        window.location.href = './autorization.html';
    });
    nav.appendChild(loginLink);

    let userNavigation = document.createElement('a');
    userNavigation.classList.add('navigation__link');
    userNavigation.setAttribute('href', 'users.html');

    let usersLink = document.createTextNode('Users');
    userNavigation.appendChild(usersLink);
    nav.appendChild(userNavigation);

    let profileNavigation = document.createElement('a');
    profileNavigation.classList.add('navigation__link');
    profileNavigation.setAttribute('href', 'profile.html');

    let profileLink = document.createTextNode('My Profile');
    profileNavigation.appendChild(profileLink);
    nav.appendChild(profileNavigation);

    let divWrapper = createElement('div', 'wrapper', divMainWrapper);

    let header = createElement('header', 'header wrapper__header', divWrapper);
    // createTextNode('Header', header);

    let main = createElement('main', 'main', divWrapper);

    let footer = createElement('footer', 'footer wrapper__footer', divWrapper);
    createTextNode('Footer', footer);

    let section = createElement('section', 'main__content', main);

    // wrapper for mediator
    let wrapperMediator = createElement('div', 'main__wrapper-mediator', section);
    let wrapperListImg = createElement('div', 'main__wrapper-listImg', wrapperMediator);
    let languagesHorizontal = createElement('ul', 'main__wrapper-mediator languages-horizontal', 
        wrapperListImg);
    let dashBoard = createElement('img', 'main__mediator', wrapperListImg);
    dashBoard.setAttribute('src', '../images/profile.jpg');
    let languagesVertical = createElement('ul', 'main__wrapper-mediator languages-vertical', wrapperMediator);

    /* let wrapperSlider = createElement('div', 'main__wrapper-slider', section);

    let slides = createElement('ul', 'main__slides slides', wrapperSlider);

    for (let i = 0; i <= 2; i++) {
        createElement('li', 'slides__item', slides);
    }

    let list = createElement('ul', 'main__list list', wrapperSlider);

    for (let i = 0; i <= 2; i++) {
        let li = createElement('li', 'list__page', list);

        let button = document.createElement('button');
        button.className = 'list__button';
        if (i === 0) {
            button.classList.add('list__button--check');
        }
        if (i === 2) {
            button.classList.add('list__button--last');
        }
        li.appendChild(button);
    } */

    let footerWatch = createElement('div', 'footer__watch', footer);
    for (let i = 0; i <= 1; i++) {
        createElement('span', 'watch__item', footerWatch);
    }
    createTextNode(':', createElement('span', '', footerWatch));

    for (let i = 0; i <= 1; i++) {
        createElement('span', 'watch__item', footerWatch);
    }
    createTextNode(':', createElement('span', '', footerWatch));

    for (let i = 0; i <= 1; i++) {
        createElement('span', 'watch__item', footerWatch);
    }

    for (let i = 0; i <= 5; i++) {
        let span = document.getElementsByClassName('watch__item');
        span[i].innerHTML = '0';
    }

    let fragment = document.createDocumentFragment();

    let headerClock = document.createElement('div');
    headerClock.className = 'header__clock clock';

    let clockWrapper = createElement('div', 'clock__wrapper', headerClock);
    createElement('div', 'clock__hand--hour clock__hand', clockWrapper);
    createElement('div', 'clock__hand--minute clock__hand', clockWrapper);
    createElement('div', 'clock__hand--second clock__hand', clockWrapper);
    let graduations = createElement('div', 'clock__graduations', clockWrapper);
    for (let i = 0; i <= 59; i++) {
        createElement('div', 'clock__graduation', graduations);
    }

    fragment.appendChild(headerClock);
    header.insertBefore(fragment, header.firstChild);

    let wetherWrapper = document.createDocumentFragment();
    let map = document.getElementsByClassName('search-map');
    wetherWrapper.appendChild(map[0]);
    header.insertBefore(wetherWrapper, header.firstChild);

    let mainBirthday = document.createElement('div');
    mainBirthday.className = 'main__birthday';
    section.appendChild(mainBirthday);
}

let FORECAST_URL = 'https://api.darksky.net/forecast/';
let FORECAST_API = '51e1643a6cf0eeef3617129ad14d2516';
var PROXY = 'https://cors-anywhere.herokuapp.com/';

function round(number, points) {
    return number.toFixed(points);
}

function currentWeather(weatherData) {
    let skycons = new Skycons({color: 'white'});
    let icon = document.getElementsByClassName('icon')[0];
    switch (weatherData.currently.icon) {
        case 'clear-night':
            skycons.add(icon, Skycons.CLEAR_NIGHT);
            break;
        case 'clear-day':
            skycons.add(icon, Skycons.CLEAR_DAY);
            break;
        case 'partly-cloudy-day':
            skycons.add(icon, Skycons.PARTLY_CLOUDY_DAY);
            break;
        case 'partly-cloudy-night':
            skycons.add(icon, Skycons.PARTLY_CLOUDY_NIGHT);
            break;
        case 'cloudy':
            skycons.add(icon, Skycons.CLOUDY);
            break;
        case 'rain':
            skycons.add(icon, Skycons.RAIN);
            break;
        case 'sleet':
            skycons.add(icon, Skycons.SLEET);
            break;
        case 'snow':
            skycons.add(icon, Skycons.SNOW);
            break;
        case 'wind':
            skycons.add(icon, Skycons.WIND);
            break;
        case 'fog':
            skycons.add(icon, Skycons.FOG);
            break;
        default:
            break;
    }
    skycons.play();

    document.getElementsByClassName('temp')[0].innerHTML =
        round(weatherData.currently.temperature, 0);
    document.getElementsByClassName('sum')[0].innerHTML = weatherData.currently.summary;
    document.getElementsByClassName('unit')[0].innerHTML = '&#8451';
}

function setBackgroud(weatherData) {
    const tempArr = [32, 21, 0];
    const curTemp = round(weatherData.currently.temperature, 0);

    const widget = document.getElementsByClassName('widget')[0];
    if (curTemp >= tempArr[0]) {
        widget.style.backgroundImage = 'url(\'../images/pogod_spring.jpg\')';
    } else if (curTemp < tempArr[0] && curTemp >= tempArr[1]) {
        widget.style.backgroundImage = 'url(\'../images/pogoda_summer.jpg\')';
    } else if (curTemp < tempArr[1] && curTemp >= tempArr[2]) {
        widget.style.backgroundImage = 'url(\'../images/pogoda_autumn.png\')';
    } else if (curTemp < tempArr[2]) {
        widget.style.backgroundImage = 'url(\'../images/pogoda_winter.jpeg\')';
    }
}

function getWeather(latitude, longitude) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4 && xhttp.status === 200) {
            try {
                let data = JSON.parse(xhttp.responseText);
                currentWeather(data);
                setBackgroud(data);
            } catch (err) {
                console.log(err.message + ' in ' + xhttp.responseText);
                return;
            }
        }
    };
    const url = `${FORECAST_URL}${FORECAST_API}/${latitude},${longitude}?units=si`;
    xhttp.open('GET', PROXY + url, true);
    xhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
    xhttp.setRequestHeader('Content-type', 'application/ecmascript');
    xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');    
    xhttp.send();
}

function initMap() {
    const input = document.getElementById('pac-input');
    const autocomplete = new google.maps.places.Autocomplete(input);
    const infowindow = new google.maps.InfoWindow();
  
    autocomplete.addListener('place_changed', function () {
        infowindow.close();
        const place = autocomplete.getPlace();
        if (!place.geometry) {
            window.alert(`No details available for input: ${place.name}`);
            return;
        }

        let address = '';
        if (place.address_components) {
            address = [
                (place.address_components[0] && place.address_components[0].short_name || ''),
                (place.address_components[1] && place.address_components[1].short_name || ''),
                (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }
        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
        let latitude = place.geometry.viewport.f.b;
        let longitude = place.geometry.viewport.b.b;
        getWeather(latitude, longitude);
    });
}

function success(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude, longitude);
}

function getTime() {
    return new Date().getTime();
}

function error() {
    window.location.href = 'autorization.html';
}

function showModelWindow() {
    time = time + 1;
    if (time > 1) {
        $('.main-wrapper').modalWindow();
        // $('.main-wrapper').modalWindow({height: '380', width: '500',
        //    title: 'ajhsgdjhag', top: '50%', left: '10%'});
        clearInterval(interval);
    }
}
function error() {
    window.location.href = 'autorization.html';
}

let getUser = (email) => {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:4010/api/v1/users/search?email=' + email,
        error: error,
        dataType: 'json'
    });
};

let showList = function (data, className) {
    $.each(data, function (index, value) {
        let elem = $(`<li class="${className}__item 
            ${className}__${value.language}">${value.language}</li>`);
        $(`.${className}`).append(elem);
    });
};

function generateSecondList(data, language, className) {
    $.each(data, function (index, value) {
        let elem = $(`<li class="names-item">${value.name}</li>`);
        $(`.${className}__${language}`).append(elem);
    });
}

let showSecondaryLists = function (data, language) {
    generateSecondList(data, language, 'languages-horizontal');
    generateSecondList(data, language, 'languages-vertical');
}

function showImage(url) {
    document.getElementsByTagName('img')[0].setAttribute('src', url);
}

let generateList = function (data) {
    showList(data, 'languages-vertical');
    showList(data, 'languages-horizontal');
};

let getListsOfLanguages = () => {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:4010/api/v1/users/languages',
        crossDomain: true,
        success: function (data) {
            generateList(data.payload);
        }
    });
};

let getListsOfNames = (obj) => {
    $.ajax({
        type: 'GET',
        url: 'http://localhost:4010/api/v1/users/names?language=' + obj.innerHTML,
        crossDomain: true,
        success: function (data) {
            showSecondaryLists(data.payload, obj.innerHTML);
        }
    });
};

let getPicture = (obj) => {
    $.ajax({
        type: 'GET',
        url: `http://localhost:4010/api/v1/users/picture?language=${obj.parent}&name=${obj.elem.innerHTML}`,
        crossDomain: true,
        success: function (data) {
            showImage(data.payload[0].picture);
        }
    });
};

function initMediator() {

    let mediator = (function () {

        let subscribers = {};

        return {
            subscribe: function (event, callback) {
                subscribers[event] = subscribers[event] || [];
                subscribers[event].push(callback);
            },

            publish: function (event, data) {
                if (subscribers[event]) {
                    subscribers[event].forEach(function (callback) {
                        callback(data);
                    });
                }
            }
        };
    }());

    function deleteSecondaryList() {
        $('.names-item').remove();
    }

    let horizont = document.getElementsByClassName('languages-horizontal')[0];
    let vertical = document.getElementsByClassName('languages-vertical')[0];

    mediator.subscribe('getnames', getListsOfNames);
    mediator.subscribe('getpicture', getPicture);

    function setCoursive(collection, element) {
        $.each(collection, function (index, value) {
            if (element === $(value).html()) {
                $(value).addClass('coursive');
            } else {
                $(value).removeClass('coursive');
            }
        });
    }
    function handle(e) {
        let regexp = /^(.*?)</;
        if (e.target.tagName === 'LI') {
            if (e.target.className === 'names-item') {
                let parent = e.target.parentElement.innerHTML.match(regexp)[1];
                mediator.publish('getpicture', {elem: e.target, parent: parent});
                setCoursive($('.names-item'), e.target.innerHTML);
            } else {
                deleteSecondaryList();
                mediator.publish('getnames', e.target);
                setCoursive($('.languages-vertical__item'), e.target.innerHTML);
                setCoursive($('.languages-horizontal__item'), e.target.innerHTML);
            }
        }
    }

    $(horizont).click((e) => handle(e));
    $(vertical).click((e) => handle(e));
}

let showMediator = function () {
    getListsOfLanguages();
    initMediator();
};

let time = 0;
let interval;

function ready() {
    let currentUser = getCookie('user');
    localStorage.getItem(currentUser);
    getUser(currentUser);

    dynamicCreationElements();
    // interval = setInterval(showModelWindow, 5000);
    // 30000

    $(this).mousemove(function (e) {
        time = 0;
    });
    $(this).keypress(function (e) {
        time = 0;
    });

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
    } else {
        alert('Geolocation not supported');
    }
    showMediator();
}

document.addEventListener('DOMContentLoaded', ready);

/*
    http://localhost:4010/api/v1/users/languages
    http://localhost:4010/api/v1/users/names?language=javascript    
    http://localhost:4010/api/v1/users/picture?language=pascal&name=Lambert%20Howe
*/