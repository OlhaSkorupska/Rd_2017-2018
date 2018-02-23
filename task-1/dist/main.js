/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _avatarComponent = __webpack_require__(2);

var _wrapperComponent = __webpack_require__(3);

window.onload = function () {
    (0, _wrapperComponent.dynamicCreationElements)();
    _avatarComponent.controller.init();
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var view = {
    createElement: function createElement(tag, classOfTag, parent, child) {
        var element = document.createElement(tag);
        element.className = classOfTag;
        return parent.insertBefore(element, child) || parent.insertBefore(element);
    },
    init: function init() {
        var _this = this;

        var mainContent = document.getElementsByClassName('main__content')[0];
        var wrapperMediator = this.createElement('div', 'main__wrapper-mediator', mainContent);
        var wrapperListImg = this.createElement('div', 'main__wrapper-listImg', wrapperMediator);
        this.createElement('ul', 'main__wrapper-mediator languages-horizontal', wrapperListImg);
        var dashBoard = this.createElement('img', 'main__mediator', wrapperListImg);
        dashBoard.setAttribute('src', '../images/profile.jpg');
        this.createElement('ul', 'main__wrapper-mediator languages-vertical', wrapperMediator);

        this.horizont = document.getElementsByClassName('languages-horizontal')[0];
        this.vertical = document.getElementsByClassName('languages-vertical')[0];

        $(this.horizont).click(function (e) {
            return _this.handle(e);
        });
        $(this.vertical).click(function (e) {
            return _this.handle(e);
        });

        model.getListsOfLanguages();
        this.initMediator();
    },
    deleteSecondaryList: function deleteSecondaryList() {
        $('.names-item').remove();
    },
    setCoursive: function setCoursive(collection, element) {
        $.each(collection, function (index, value) {
            if (element === $(value).html()) {
                $(value).addClass('coursive');
            } else {
                $(value).removeClass('coursive');
            }
        });
    },
    handle: function handle(e) {
        var regexp = /^(.*?)</;
        if (e.target.tagName === 'LI') {
            if (e.target.className === 'names-item') {
                var parent = e.target.parentElement.innerHTML.match(regexp)[1];
                this.mediator.publish('getpicture', { elem: e.target, parent: parent });
                this.setCoursive($('.names-item'), e.target.innerHTML);
            } else {
                this.deleteSecondaryList();
                this.mediator.publish('getnames', e.target);
                this.setCoursive($('.languages-vertical__item'), e.target.innerHTML);
                this.setCoursive($('.languages-horizontal__item'), e.target.innerHTML);
            }
        }
    },
    initMediator: function initMediator() {
        this.mediator = function () {
            var subscribers = {};
            return {
                subscribe: function subscribe(event, callback) {
                    subscribers[event] = subscribers[event] || [];
                    subscribers[event].push(callback);
                },

                publish: function publish(event, data) {
                    if (subscribers[event]) {
                        subscribers[event].forEach(function (callback) {
                            callback(data);
                        });
                    }
                }
            };
        }();

        this.mediator.subscribe('getnames', model.getListsOfNames);
        this.mediator.subscribe('getpicture', model.getPicture);
    },
    showList: function showList(data, className) {
        $.each(data, function (index, value) {
            var elem = $('<li class="' + className + '__item \n            ' + className + '__' + value.language + '">' + value.language + '</li>');
            $('.' + className).append(elem);
        });
    },
    generateSecondList: function generateSecondList(data, language, className) {
        $.each(data, function (index, value) {
            var elem = $('<li class="names-item">' + value.name + '</li>');
            $('.' + className + '__' + language).append(elem);
        });
    },
    showSecondaryLists: function showSecondaryLists(data, language) {
        this.generateSecondList(data, language, 'languages-horizontal');
        this.generateSecondList(data, language, 'languages-vertical');
    },
    showImage: function showImage(url) {
        document.getElementsByTagName('img')[0].setAttribute('src', url);
    },
    generateList: function generateList(data) {
        this.showList(data, 'languages-vertical');
        this.showList(data, 'languages-horizontal');
    }
};

var model = {
    getListsOfLanguages: function getListsOfLanguages() {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:4010/api/v1/users/languages',
            crossDomain: true,
            success: function success(data) {
                view.generateList(data.payload);
            }
        });
    },
    getListsOfNames: function getListsOfNames(obj) {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:4010/api/v1/users/names?language=' + obj.innerHTML,
            crossDomain: true,
            success: function success(data) {
                view.showSecondaryLists(data.payload, obj.innerHTML);
            }
        });
    },
    getPicture: function getPicture(obj) {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:4010/api/v1/users/picture?language=' + obj.parent + '&name=' + obj.elem.innerHTML,
            crossDomain: true,
            success: function success(data) {
                view.showImage(data.payload[0].picture);
            }
        });
    }
};

var controller = exports.controller = {
    init: function init() {
        view.init();
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dynamicCreationElements = dynamicCreationElements;
function createElement(tag, classOfTag, parent, child) {
    var element = document.createElement(tag);
    element.className = classOfTag;
    return parent.insertBefore(element, child) || parent.insertBefore(element);
}

function createTextNode(text, parent) {
    var textElement = document.createTextNode(text);
    parent.appendChild(textElement);
}

function dynamicCreationElements() {
    var divMainWrapper = createElement('div', 'main-wrapper', document.body, document.body.firstChild);

    var nav = createElement('nav', 'navigation main-wrapper__navigation', divMainWrapper);
    createTextNode('Navigation', nav);

    var divWrapper = createElement('div', 'wrapper', divMainWrapper);

    createElement('header', 'header wrapper__header', divWrapper);

    var main = createElement('main', 'main', divWrapper);

    var footer = createElement('footer', 'footer wrapper__footer', divWrapper);
    createTextNode('Footer', footer);

    createElement('section', 'main__content', main);
}

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map