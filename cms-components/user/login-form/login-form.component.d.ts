import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthRedirectService, AuthService, GlobalMessageService, WindowRef } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { CheckoutConfigService } from '../../checkout/services/checkout-config.service';
import * as ɵngcc0 from '@angular/core';
export declare class LoginFormComponent implements OnInit, OnDestroy {
    protected auth: AuthService;
    protected globalMessageService: GlobalMessageService;
    protected fb: FormBuilder;
    protected authRedirectService: AuthRedirectService;
    protected winRef: WindowRef;
    protected activatedRoute: ActivatedRoute;
    protected checkoutConfigService: CheckoutConfigService;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tZm9ybS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibG9naW4tZm9ybS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXV0aFJlZGlyZWN0U2VydmljZSwgQXV0aFNlcnZpY2UsIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLCBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jaGVja291dC9zZXJ2aWNlcy9jaGVja291dC1jb25maWcuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBMb2dpbkZvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIGF1dGg6IEF1dGhTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGZiOiBGb3JtQnVpbGRlcjtcbiAgICBwcm90ZWN0ZWQgYXV0aFJlZGlyZWN0U2VydmljZTogQXV0aFJlZGlyZWN0U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWY7XG4gICAgcHJvdGVjdGVkIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZTtcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2U7XG4gICAgc3ViOiBTdWJzY3JpcHRpb247XG4gICAgZm9ybTogRm9ybUdyb3VwO1xuICAgIGxvZ2luQXNHdWVzdDogYm9vbGVhbjtcbiAgICBjb25zdHJ1Y3RvcihhdXRoOiBBdXRoU2VydmljZSwgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLCBmYjogRm9ybUJ1aWxkZXIsIGF1dGhSZWRpcmVjdFNlcnZpY2U6IEF1dGhSZWRpcmVjdFNlcnZpY2UsIHdpblJlZjogV2luZG93UmVmLCBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsIGNoZWNrb3V0Q29uZmlnU2VydmljZTogQ2hlY2tvdXRDb25maWdTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIGxvZ2luKCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBzdWJtaXRMb2dpbjtcbiAgICBwcml2YXRlIG1hcmtGb3JtQXNUb3VjaGVkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBwcmVmaWxsRm9ybTtcbn1cbiJdfQ==