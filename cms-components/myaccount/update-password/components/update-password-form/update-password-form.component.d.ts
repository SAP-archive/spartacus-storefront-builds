import { EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UpdatePasswordFormComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<UpdatePasswordFormComponent, "cx-update-password-form", never, {}, { "submitted": "submitted"; "cancelled": "cancelled"; }, never, never>;
}

//# sourceMappingURL=update-password-form.component.d.ts.map