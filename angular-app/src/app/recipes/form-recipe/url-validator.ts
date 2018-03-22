import { AbstractControl, ValidatorFn } from '@angular/forms';

let pattern = new RegExp('^(http|https)\://[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(:[a-zA-Z0-9]*)?/?([a-zA-Z0-9\-\._\?\,\'/\\\+&amp;%\$#\=~])*$');

export function urlValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: boolean} => {
        return !pattern.test(control.value) ? { 'isUrlInvalid': true } : null;
    };      
}
