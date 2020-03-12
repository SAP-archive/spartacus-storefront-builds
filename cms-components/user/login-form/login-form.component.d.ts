import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthRedirectService, AuthService, GlobalMessageService, WindowRef } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { CheckoutConfigService } from '../../checkout/services/checkout-config.service';
import * as ɵngcc0 from '@angular/core';
export declare class LoginFormComponent implements OnInit, OnDestroy {
    private auth;
    private globalMessageService;
    private fb;
    private authRedirectService;
    private winRef;
    private activatedRoute;
    private checkoutConfigService;
    sub: Subscription;
    form: FormGroup;
    loginAsGuest: boolean;
    constructor(auth: AuthService, globalMessageService: GlobalMessageService, fb: FormBuilder, authRedirectService: AuthRedirectService, winRef: WindowRef, activatedRoute: ActivatedRoute, checkoutConfigService: CheckoutConfigService);
    ngOnInit(): void;
    login(): void;
    private submitLogin;
    private markFormAsTouched;
    ngOnDestroy(): void;
    private prefillForm;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LoginFormComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LoginFormComponent, "cx-login-form", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tZm9ybS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibG9naW4tZm9ybS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aFJlZGlyZWN0U2VydmljZSwgQXV0aFNlcnZpY2UsIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLCBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jaGVja291dC9zZXJ2aWNlcy9jaGVja291dC1jb25maWcuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBMb2dpbkZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBhdXRoO1xuICAgIHByaXZhdGUgZ2xvYmFsTWVzc2FnZVNlcnZpY2U7XG4gICAgcHJpdmF0ZSBmYjtcbiAgICBwcml2YXRlIGF1dGhSZWRpcmVjdFNlcnZpY2U7XG4gICAgcHJpdmF0ZSB3aW5SZWY7XG4gICAgcHJpdmF0ZSBhY3RpdmF0ZWRSb3V0ZTtcbiAgICBwcml2YXRlIGNoZWNrb3V0Q29uZmlnU2VydmljZTtcbiAgICBzdWI6IFN1YnNjcmlwdGlvbjtcbiAgICBmb3JtOiBGb3JtR3JvdXA7XG4gICAgbG9naW5Bc0d1ZXN0OiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKGF1dGg6IEF1dGhTZXJ2aWNlLCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsIGZiOiBGb3JtQnVpbGRlciwgYXV0aFJlZGlyZWN0U2VydmljZTogQXV0aFJlZGlyZWN0U2VydmljZSwgd2luUmVmOiBXaW5kb3dSZWYsIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgbG9naW4oKTogdm9pZDtcbiAgICBwcml2YXRlIHN1Ym1pdExvZ2luO1xuICAgIHByaXZhdGUgbWFya0Zvcm1Bc1RvdWNoZWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICBwcml2YXRlIHByZWZpbGxGb3JtO1xufVxuIl19