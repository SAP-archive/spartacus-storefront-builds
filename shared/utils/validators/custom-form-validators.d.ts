import { AbstractControl, ValidationErrors } from '@angular/forms';
export declare class CustomFormValidators {
    static emailDomainValidator(control: AbstractControl): ValidationErrors | null;
    static emailValidator(control: AbstractControl): ValidationErrors | null;
    static passwordValidator(control: AbstractControl): ValidationErrors | null;
    static matchPassword(control: AbstractControl): {
        NotEqual: boolean;
    };
}
