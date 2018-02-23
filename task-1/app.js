import './sass/style.scss';
import {controller} from './src/components/avatar/avatar.component.js';
import {dynamicCreationElements} from './src/components/wrapper/wrapper.component.js';

window.onload = function () {
    dynamicCreationElements();
    controller.init();
};
