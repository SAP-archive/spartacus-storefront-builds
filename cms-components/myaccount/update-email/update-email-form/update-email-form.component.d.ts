import { EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
export declare class UpdateEmailFormComponent {
    private fb;
    saveEmail: EventEmitter<{
        newUid: string;
        password: string;
    }>;
    cancelEmail: EventEmitter<void>;
    updateEmailForm: FormGroup;
    constructor(fb: FormBuilder);
    onSubmit(): void;
    onCancel(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UpdateEmailFormComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<UpdateEmailFormComponent, "cx-update-email-form", never, {}, { "saveEmail": "saveEmail"; "cancelEmail": "cancelEmail"; }, never, never>;
}

//# sourceMappingURL=update-email-form.component.d.ts.map