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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLWZvcm0uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInVwZGF0ZS1wYXNzd29yZC1mb3JtLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVcGRhdGVQYXNzd29yZEZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgZmI7XG4gICAgcHJpdmF0ZSBzdWJtaXRDbGlja2VkO1xuICAgIGZvcm06IEZvcm1Hcm91cDtcbiAgICBzdWJtaXRlZDogRXZlbnRFbWl0dGVyPHtcbiAgICAgICAgb2xkUGFzc3dvcmQ6IHN0cmluZztcbiAgICAgICAgbmV3UGFzc3dvcmQ6IHN0cmluZztcbiAgICB9PjtcbiAgICBjYW5jZWxsZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPjtcbiAgICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgaXNOb3RWYWxpZChmb3JtQ29udHJvbE5hbWU6IHN0cmluZyk6IGJvb2xlYW47XG4gICAgaXNQYXNzd29yZENvbmZpcm1Ob3RWYWxpZCgpOiBib29sZWFuO1xuICAgIG9uU3VibWl0KCk6IHZvaWQ7XG4gICAgb25DYW5jZWwoKTogdm9pZDtcbiAgICBwcml2YXRlIG1hdGNoUGFzc3dvcmQ7XG59XG4iXX0=