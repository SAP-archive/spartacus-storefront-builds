import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RoutingService, UserService } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class ForgotPasswordComponent implements OnInit {
    private fb;
    private userService;
    private routingService;
    form: FormGroup;
    submited: boolean;
    constructor(fb: FormBuilder, userService: UserService, routingService: RoutingService);
    ngOnInit(): void;
    requestForgotPasswordEmail(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ForgotPasswordComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ForgotPasswordComponent, "cx-forgot-password", never, {}, {}, never>;
}

//# sourceMappingURL=forgot-password.component.d.ts.map