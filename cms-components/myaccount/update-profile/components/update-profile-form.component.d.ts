import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title, User } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UpdateProfileFormComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<UpdateProfileFormComponent, "cx-update-profile-form", never, { "user": "user"; "titles": "titles"; }, { "submitted": "submitted"; "cancelled": "cancelled"; }, never, never>;
}

//# sourceMappingURL=update-profile-form.component.d.ts.map