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

//# sourceMappingURL=login-form.component.d.ts.map