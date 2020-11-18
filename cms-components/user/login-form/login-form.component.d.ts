import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService, GlobalMessageService, WindowRef } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class LoginFormComponent implements OnInit {
    protected auth: AuthService;
    protected globalMessageService: GlobalMessageService;
    protected fb: FormBuilder;
    protected winRef: WindowRef;
    loginForm: FormGroup;
    constructor(auth: AuthService, globalMessageService: GlobalMessageService, fb: FormBuilder, winRef: WindowRef);
    ngOnInit(): void;
    submitForm(): void;
    protected loginUser(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LoginFormComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<LoginFormComponent, "cx-login-form", never, {}, {}, never, never>;
}

//# sourceMappingURL=login-form.component.d.ts.map