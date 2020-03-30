import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RoutingService, UserService } from '@spartacus/core';
import { Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class ResetPasswordFormComponent implements OnInit, OnDestroy {
    private fb;
    private routingService;
    private userService;
    token: string;
    subscription: Subscription;
    submited: boolean;
    form: FormGroup;
    constructor(fb: FormBuilder, routingService: RoutingService, userService: UserService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    resetPassword(): void;
    private matchPassword;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ResetPasswordFormComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ResetPasswordFormComponent, "cx-reset-password-form", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzZXQtcGFzc3dvcmQtZm9ybS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsicmVzZXQtcGFzc3dvcmQtZm9ybS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7O0FBYUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlLCBVc2VyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFJlc2V0UGFzc3dvcmRGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgZmI7XG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTtcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlO1xuICAgIHRva2VuOiBzdHJpbmc7XG4gICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgc3VibWl0ZWQ6IGJvb2xlYW47XG4gICAgZm9ybTogRm9ybUdyb3VwO1xuICAgIGNvbnN0cnVjdG9yKGZiOiBGb3JtQnVpbGRlciwgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLCB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICByZXNldFBhc3N3b3JkKCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBtYXRjaFBhc3N3b3JkO1xufVxuIl19