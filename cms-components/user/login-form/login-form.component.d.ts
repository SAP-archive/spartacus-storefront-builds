import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthRedirectService, AuthService, GlobalMessageService, WindowRef, FeatureConfigService } from '@spartacus/core';
import { Subscription } from 'rxjs';
export declare class LoginFormComponent implements OnInit, OnDestroy {
    private auth;
    private globalMessageService;
    private fb;
    private authRedirectService;
    private winRef?;
    private activatedRoute?;
    private featureConfig?;
    sub: Subscription;
    form: FormGroup;
    loginAsGuest: boolean;
    constructor(auth: AuthService, globalMessageService: GlobalMessageService, fb: FormBuilder, authRedirectService: AuthRedirectService, winRef: WindowRef, // tslint:disable-line,
    activatedRoute: ActivatedRoute, featureConfig: FeatureConfigService);
    /**
     * @deprecated since 1.1.0
     * NOTE: check issue:#4055 for more info
     *
     * TODO(issue:#4055) Deprecated since 1.1.0
     */
    constructor(auth: AuthService, globalMessageService: GlobalMessageService, fb: FormBuilder, authRedirectService: AuthRedirectService);
    ngOnInit(): void;
    login(): void;
    ngOnDestroy(): void;
    private prefillForm;
}
