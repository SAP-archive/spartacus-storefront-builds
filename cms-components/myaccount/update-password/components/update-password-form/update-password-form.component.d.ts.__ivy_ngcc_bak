import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
export declare class UpdatePasswordFormComponent implements OnInit {
    private fb;
    updatePasswordForm: FormGroup;
    submitted: EventEmitter<{
        oldPassword: string;
        newPassword: string;
    }>;
    cancelled: EventEmitter<void>;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    onSubmit(): void;
    onCancel(): void;
}
