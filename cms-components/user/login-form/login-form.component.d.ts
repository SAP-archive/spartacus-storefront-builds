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
    private winRef?;
    private activatedRoute?;
    private checkoutConfigService?;
    sub: Subscription;
    form: FormGroup;
    loginAsGuest: boolean;
    constructor(auth: AuthService, globalMessageService: GlobalMessageService, fb: FormBuilder, authRedirectService: AuthRedirectService, winRef: WindowRef, // tslint:disable-line,
    activatedRoute: ActivatedRoute, checkoutConfigService: CheckoutConfigService);
    /**
     * @deprecated since 1.1.0
     * Use constructor(
     * auth: AuthService,
     * globalMessageService: GlobalMessageService,
     * fb: FormBuilder,
     * authRedirectService: AuthRedirectService,
     *  winRef: WindowRef,
     * activatedRoute: ActivatedRoute,
     * checkoutConfigService: CheckoutConfigService) instead
     *
     * TODO(issue:#4055) Deprecated since 1.1.0
     */
    constructor(auth: AuthService, globalMessageService: GlobalMessageService, fb: FormBuilder, authRedirectService: AuthRedirectService);
    ngOnInit(): void;
    login(): void;
    ngOnDestroy(): void;
    private prefillForm;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LoginFormComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LoginFormComponent, "cx-login-form", never, {}, {}, never>;
}

//# sourceMappingURL=login-form.component.d.ts.map