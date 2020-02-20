import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Title, User } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class UpdateProfileFormComponent implements OnInit {
    private fb;
    user: User;
    titles: Title[];
    submited: EventEmitter<{
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UpdateProfileFormComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<UpdateProfileFormComponent, "cx-update-profile-form", never, {
    "user": "user";
    "titles": "titles";
}, {
    "submited": "submited";
    "cancelled": "cancelled";
}, never>;
}

//# sourceMappingURL=update-profile-form.component.d.ts.map