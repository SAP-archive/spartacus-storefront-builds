import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Title, User } from '@spartacus/core';
export declare class UpdateProfileFormComponent implements OnInit {
    private fb;
    user: User;
    titles: Title[];
    submited: EventEmitter<{
        uid: string;
        userUpdates: User;
    }>;
    cancelled: EventEmitter<void>;
    form: import("@angular/forms").FormGroup;
    private submitClicked;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    isNotValid(formControlName: string): boolean;
    onSubmit(): void;
    onCancel(): void;
}
