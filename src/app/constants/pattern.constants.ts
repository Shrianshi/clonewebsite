import { AbstractControl, ValidatorFn } from "@angular/forms";

export class PatternValidators {
    static nameValidator(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const pattern = /^[a-zA-Z]*$/;
            const isValid = pattern.test(control.value);
            return isValid ? null : { 'invalidName': true };
        };
    }

    static emailValidator(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const pattern = /^[a-zA-Z0-9.-]+@[a-zA-Z]+\.[a-zA-Z.]{1,6} *$/;
            const isValid = pattern.test(control.value);
            return isValid ? null : { 'invalidEmail': true };
        };
    }

    static dateValidator(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const date = new Date(control.value);
            const currentDate = new Date();
            return date <= currentDate ? null : { 'futureDate': true };
        };
    }

    static countryCodeValidator(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const num = /^[+0-9]*$/
          // \+\d{3}-\d{10}
            const isValid = num.test(control.value);
            return isValid ? null : { 'invalidCode': true };
        };
    }

    static numberValidator(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            const num = /^\+\d{2}\s\d{10}$/
            // \+(?:[0-9] ?){6,14}[0-9]
          // \+\d{3}-\d{10}
            const isValid = num.test(control.value);
            return isValid ? null : { 'invalidNumber': true };
        };
    }
    


}
