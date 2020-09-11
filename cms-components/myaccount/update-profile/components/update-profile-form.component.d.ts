import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title, User } from '@spartacus/core';
export declare class UpdateProfileFormComponent implements OnInit {
    private fb;
    user: User;
    titles: Title[];
    submitted: EventEmitter<{
        userUpdates: User;
    }>;
    cancelled: EventEmitter<void>;
    updateProfileForm: FormGroup;
    constructor(fb: FormBuilder);
    ngOnInit(): void;
    onSubmit(): void;
    onCancel(): void;
}
