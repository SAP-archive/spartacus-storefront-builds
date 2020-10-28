import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthConfigService, RoutingService, UserService } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class ForgotPasswordComponent implements OnInit {
    protected fb: FormBuilder;
    protected userService: UserService;
    protected routingService: RoutingService;
    protected authConfigService: AuthConfigService;
    forgotPasswordForm: FormGroup;
    constructor(fb: FormBuilder, userService: UserService, routingService: RoutingService, authConfigService: AuthConfigService);
    ngOnInit(): void;
    requestForgotPasswordEmail(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ForgotPasswordComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ForgotPasswordComponent, "cx-forgot-password", never, {}, {}, never, never>;
}

//# sourceMappingURL=forgot-password.component.d.ts.map