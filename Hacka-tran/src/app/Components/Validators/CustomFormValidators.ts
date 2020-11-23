import { AbstractControl } from '@angular/forms';

const INVALID: { [key: string]: boolean } = {valid: false};
const VALID: null = null;

export const ConfirmPasswordValidator = (control: AbstractControl): { [key: string]: boolean } | null => {
    if(!control || !control.parent || control.parent.get('passwordConfirmation') == null || control.parent.get('password') == null || control.parent.get('password').value != control.parent.get('passwordConfirmation').value){
        return INVALID;
    } else {
        return VALID;
    }
}