import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthRedirectService, AuthService, GlobalMessageService, WindowRef } from '@spartacus/core';
import { Subscription } from 'rxjs';
export declare class LoginFormComponent implements OnInit, OnDestroy {
    private auth;
    private globalMessageService;
    private fb;
    private authRedirectService;
    private winRef?;
    sub: Subscription;
    form: FormGroup;
    constructor(auth: AuthService, globalMessageService: GlobalMessageService, fb: FormBuilder, authRedirectService: AuthRedirectService, winRef: WindowRef);
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
