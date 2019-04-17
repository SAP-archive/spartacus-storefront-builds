import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
export declare class UpdatePasswordFormComponent implements OnInit {
    private fb;
    private submitClicked;
    form: FormGroup;
    submited: EventEmitter<{
        oldPassword: string;
        newPassword: string;
    }>;
    cancelled: EventEmitter<void>;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    isNotValid(formControlName: string): boolean;
    isPasswordConfirmNotValid(): boolean;
    onSubmit(): void;
    onCancel(): void;
    private matchPassword;
}
