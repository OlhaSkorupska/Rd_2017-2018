let view = {
    createElement(tag, classOfTag, parent, child) {
        let element = document.createElement(tag);
        element.className = classOfTag;
        return parent.insertBefore(element, child) || parent.insertBefore(element);
    },

    init() {
        let mainContent = document.getElementsByClassName('main__content')[0];
        let wrapperMediator = this.createElement('div', 'main__wrapper-mediator', mainContent);
        let wrapperListImg = this.createElement('div', 'main__wrapper-listImg', wrapperMediator);
        this.createElement('ul', 'main__wrapper-mediator languages-horizontal',
            wrapperListImg);
        let dashBoard = this.createElement('img', 'main__mediator', wrapperListImg);
        dashBoard.setAttribute('src', '../images/profile.jpg');
        this. createElement('ul', 'main__wrapper-mediator languages-vertical', wrapperMediator);

        this.horizont = document.getElementsByClassName('languages-horizontal')[0];
        this.vertical = document.getElementsByClassName('languages-vertical')[0];

        $(this.horizont).click((e) => this.handle(e));
        $(this.vertical).click((e) => this.handle(e));

        model.getListsOfLanguages();
        this.initMediator();
    },

    deleteSecondaryList() {
        $('.names-item').remove();
    },

    setCoursive(collection, element) {
        $.each(collection, function (index, value) {
            if (element === $(value).html()) {
                $(value).addClass('coursive');
            } else {
                $(value).removeClass('coursive');
            }
        });
    },

    handle(e) {
        let regexp = /^(.*?)</;
        if (e.target.tagName === 'LI') {
            if (e.target.className === 'names-item') {
                let parent = e.target.parentElement.innerHTML.match(regexp)[1];
                this.mediator.publish('getpicture', {elem: e.target, parent: parent});
                this.setCoursive($('.names-item'), e.target.innerHTML);
            } else {
                this.deleteSecondaryList();
                this.mediator.publish('getnames', e.target);
                this.setCoursive($('.languages-vertical__item'), e.target.innerHTML);
                this.setCoursive($('.languages-horizontal__item'), e.target.innerHTML);
            }
        }
    },

    initMediator() {
        this.mediator = (function () {
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

        this.mediator.subscribe('getnames', model.getListsOfNames);
        this.mediator.subscribe('getpicture', model.getPicture);
    },

    showList(data, className) {
        $.each(data, function (index, value) {
            let elem = $(`<li class="${className}__item 
            ${className}__${value.language}">${value.language}</li>`);
            $(`.${className}`).append(elem);
        });
    },

    generateSecondList(data, language, className) {
        $.each(data, function (index, value) {
            let elem = $(`<li class="names-item">${value.name}</li>`);
            $(`.${className}__${language}`).append(elem);
        });
    },

    showSecondaryLists(data, language) {
        this.generateSecondList(data, language, 'languages-horizontal');
        this.generateSecondList(data, language, 'languages-vertical');
    },

    showImage(url) {
        document.getElementsByTagName('img')[0].setAttribute('src', url);
    },

    generateList(data) {
        this.showList(data, 'languages-vertical');
        this.showList(data, 'languages-horizontal');
    }
};

let model = {
    getListsOfLanguages() {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:4010/api/v1/users/languages',
            crossDomain: true,
            success: function (data) {
                view.generateList(data.payload);
            }
        });
    },

    getListsOfNames(obj) {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:4010/api/v1/users/names?language=' + obj.innerHTML,
            crossDomain: true,
            success: function (data) {
                view.showSecondaryLists(data.payload, obj.innerHTML);
            }
        });
    },

    getPicture(obj) {
        $.ajax({
            type: 'GET',
            url: `http://localhost:4010/api/v1/users/picture?language=${obj.parent}&name=${obj.elem.innerHTML}`,
            crossDomain: true,
            success: function (data) {
                view.showImage(data.payload[0].picture);
            }
        });
    }
};

export let controller = {

    init() {
        view.init();
    }
};