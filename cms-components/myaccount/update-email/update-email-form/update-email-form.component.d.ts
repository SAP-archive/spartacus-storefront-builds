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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWVtYWlsLWZvcm0uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInVwZGF0ZS1lbWFpbC1mb3JtLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7OztBQVdBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXBkYXRlRW1haWxGb3JtQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIGZiO1xuICAgIHNhdmVFbWFpbDogRXZlbnRFbWl0dGVyPHtcbiAgICAgICAgbmV3VWlkOiBzdHJpbmc7XG4gICAgICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gICAgfT47XG4gICAgY2FuY2VsRW1haWw6IEV2ZW50RW1pdHRlcjx2b2lkPjtcbiAgICB1cGRhdGVFbWFpbEZvcm06IEZvcm1Hcm91cDtcbiAgICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIpO1xuICAgIG9uU3VibWl0KCk6IHZvaWQ7XG4gICAgb25DYW5jZWwoKTogdm9pZDtcbn1cbiJdfQ==