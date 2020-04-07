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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBkYXRlLXBhc3N3b3JkLWZvcm0uY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInVwZGF0ZS1wYXNzd29yZC1mb3JtLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7QUFZQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXBkYXRlUGFzc3dvcmRGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIGZiO1xuICAgIHVwZGF0ZVBhc3N3b3JkRm9ybTogRm9ybUdyb3VwO1xuICAgIHN1Ym1pdHRlZDogRXZlbnRFbWl0dGVyPHtcbiAgICAgICAgb2xkUGFzc3dvcmQ6IHN0cmluZztcbiAgICAgICAgbmV3UGFzc3dvcmQ6IHN0cmluZztcbiAgICB9PjtcbiAgICBjYW5jZWxsZWQ6IEV2ZW50RW1pdHRlcjx2b2lkPjtcbiAgICBjb25zdHJ1Y3RvcihmYjogRm9ybUJ1aWxkZXIpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgb25TdWJtaXQoKTogdm9pZDtcbiAgICBvbkNhbmNlbCgpOiB2b2lkO1xufVxuIl19