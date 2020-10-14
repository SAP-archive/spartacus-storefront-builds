import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthRedirectService, AuthService, GlobalMessageService, WindowRef } from '@spartacus/core';
import { Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class LoginFormComponent implements OnInit, OnDestroy {
    protected auth: AuthService;
    protected globalMessageService: GlobalMessageService;
    protected fb: FormBuilder;
    protected authRedirectService: AuthRedirectService;
    protected winRef: WindowRef;
    sub: Subscription;
    loginForm: FormGroup;
    constructor(auth: AuthService, globalMessageService: GlobalMessageService, fb: FormBuilder, authRedirectService: AuthRedirectService, winRef: WindowRef);
    ngOnInit(): void;
    submitForm(): void;
    ngOnDestroy(): void;
    protected loginUser(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LoginFormComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LoginFormComponent, "cx-login-form", never, {}, {}, never, never>;
}

//# sourceMappingURL=login-form.component.d.ts.map