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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLWZvcm0uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInVwZGF0ZS1wYXNzd29yZC1mb3JtLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXBkYXRlUGFzc3dvcmRGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIGZiO1xuICAgIHByaXZhdGUgc3VibWl0Q2xpY2tlZDtcbiAgICBmb3JtOiBGb3JtR3JvdXA7XG4gICAgc3VibWl0ZWQ6IEV2ZW50RW1pdHRlcjx7XG4gICAgICAgIG9sZFBhc3N3b3JkOiBzdHJpbmc7XG4gICAgICAgIG5ld1Bhc3N3b3JkOiBzdHJpbmc7XG4gICAgfT47XG4gICAgY2FuY2VsbGVkOiBFdmVudEVtaXR0ZXI8dm9pZD47XG4gICAgY29uc3RydWN0b3IoZmI6IEZvcm1CdWlsZGVyKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIGlzTm90VmFsaWQoZm9ybUNvbnRyb2xOYW1lOiBzdHJpbmcpOiBib29sZWFuO1xuICAgIGlzUGFzc3dvcmRDb25maXJtTm90VmFsaWQoKTogYm9vbGVhbjtcbiAgICBvblN1Ym1pdCgpOiB2b2lkO1xuICAgIG9uQ2FuY2VsKCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBtYXRjaFBhc3N3b3JkO1xufVxuIl19