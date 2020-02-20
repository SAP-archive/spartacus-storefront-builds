import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UpdatePasswordFormComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<UpdatePasswordFormComponent, "cx-update-password-form", never, {}, {
    "submited": "submited";
    "cancelled": "cancelled";
}, never>;
}

//# sourceMappingURL=update-password-form.component.d.ts.map