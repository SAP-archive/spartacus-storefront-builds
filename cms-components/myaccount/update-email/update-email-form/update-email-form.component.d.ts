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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWVtYWlsLWZvcm0uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInVwZGF0ZS1lbWFpbC1mb3JtLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVcGRhdGVFbWFpbEZvcm1Db21wb25lbnQge1xuICAgIHByaXZhdGUgZmI7XG4gICAgc3VibWl0ZWQ6IGJvb2xlYW47XG4gICAgc2F2ZUVtYWlsOiBFdmVudEVtaXR0ZXI8e1xuICAgICAgICBuZXdVaWQ6IHN0cmluZztcbiAgICAgICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgICB9PjtcbiAgICBjYW5jZWxFbWFpbDogRXZlbnRFbWl0dGVyPHZvaWQ+O1xuICAgIGZvcm06IEZvcm1Hcm91cDtcbiAgICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIpO1xuICAgIGlzRW1haWxDb25maXJtTm90VmFsaWQoZm9ybUNvbnRyb2xOYW1lOiBzdHJpbmcpOiBib29sZWFuO1xuICAgIGlzTm90VmFsaWQoZm9ybUNvbnRyb2xOYW1lOiBzdHJpbmcpOiBib29sZWFuO1xuICAgIG9uU3VibWl0KCk6IHZvaWQ7XG4gICAgb25DYW5jZWwoKTogdm9pZDtcbiAgICBwcml2YXRlIG1hdGNoRW1haWw7XG59XG4iXX0=