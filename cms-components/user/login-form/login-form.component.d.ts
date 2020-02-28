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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4tZm9ybS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsibG9naW4tZm9ybS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEF1dGhSZWRpcmVjdFNlcnZpY2UsIEF1dGhTZXJ2aWNlLCBHbG9iYWxNZXNzYWdlU2VydmljZSwgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY2hlY2tvdXQvc2VydmljZXMvY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTG9naW5Gb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgYXV0aDtcbiAgICBwcml2YXRlIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlO1xuICAgIHByaXZhdGUgZmI7XG4gICAgcHJpdmF0ZSBhdXRoUmVkaXJlY3RTZXJ2aWNlO1xuICAgIHByaXZhdGUgd2luUmVmO1xuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU7XG4gICAgcHJpdmF0ZSBjaGVja291dENvbmZpZ1NlcnZpY2U7XG4gICAgc3ViOiBTdWJzY3JpcHRpb247XG4gICAgZm9ybTogRm9ybUdyb3VwO1xuICAgIGxvZ2luQXNHdWVzdDogYm9vbGVhbjtcbiAgICBjb25zdHJ1Y3RvcihhdXRoOiBBdXRoU2VydmljZSwgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLCBmYjogRm9ybUJ1aWxkZXIsIGF1dGhSZWRpcmVjdFNlcnZpY2U6IEF1dGhSZWRpcmVjdFNlcnZpY2UsIHdpblJlZjogV2luZG93UmVmLCBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsIGNoZWNrb3V0Q29uZmlnU2VydmljZTogQ2hlY2tvdXRDb25maWdTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIGxvZ2luKCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBzdWJtaXRMb2dpbjtcbiAgICBwcml2YXRlIG1hcmtGb3JtQXNUb3VjaGVkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBwcmVmaWxsRm9ybTtcbn1cbiJdfQ==