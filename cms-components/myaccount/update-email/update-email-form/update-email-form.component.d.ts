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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UpdateEmailFormComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<UpdateEmailFormComponent, "cx-update-email-form", never, {}, { "saveEmail": "saveEmail"; "cancelEmail": "cancelEmail"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLWVtYWlsLWZvcm0uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInVwZGF0ZS1lbWFpbC1mb3JtLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFVwZGF0ZUVtYWlsRm9ybUNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBmYjtcbiAgICBzdWJtaXRlZDogYm9vbGVhbjtcbiAgICBzYXZlRW1haWw6IEV2ZW50RW1pdHRlcjx7XG4gICAgICAgIG5ld1VpZDogc3RyaW5nO1xuICAgICAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgIH0+O1xuICAgIGNhbmNlbEVtYWlsOiBFdmVudEVtaXR0ZXI8dm9pZD47XG4gICAgZm9ybTogRm9ybUdyb3VwO1xuICAgIGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlcik7XG4gICAgaXNFbWFpbENvbmZpcm1Ob3RWYWxpZChmb3JtQ29udHJvbE5hbWU6IHN0cmluZyk6IGJvb2xlYW47XG4gICAgaXNOb3RWYWxpZChmb3JtQ29udHJvbE5hbWU6IHN0cmluZyk6IGJvb2xlYW47XG4gICAgb25TdWJtaXQoKTogdm9pZDtcbiAgICBvbkNhbmNlbCgpOiB2b2lkO1xuICAgIHByaXZhdGUgbWF0Y2hFbWFpbDtcbn1cbiJdfQ==