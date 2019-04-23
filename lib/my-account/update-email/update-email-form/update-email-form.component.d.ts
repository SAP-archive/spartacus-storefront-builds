import { EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
export declare class UpdateEmailFormComponent {
    private fb;
    submited: boolean;
    saveEmail: EventEmitter<{
        newUid: string;
        password: string;
    }>;
    cancelEmail: EventEmitter<void>;
    form: FormGroup;
    constructor(fb: FormBuilder);
    isEmailConfirmNotValid(formControlName: string): boolean;
    isNotValid(formControlName: string): boolean;
    onSubmit(): void;
    onCancel(): void;
    private matchEmail;
}
