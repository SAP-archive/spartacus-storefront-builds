import { EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UpdateEmailFormComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<UpdateEmailFormComponent, "cx-update-email-form", never, {}, {
    "saveEmail": "saveEmail";
    "cancelEmail": "cancelEmail";
}, never>;
}

//# sourceMappingURL=update-email-form.component.d.ts.map