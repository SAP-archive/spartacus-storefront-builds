import { OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RoutingService, UserService } from '@spartacus/core';
import { Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class ResetPasswordFormComponent implements OnInit, OnDestroy {
    private fb;
    private routingService;
    private userService;
    token: string;
    subscription: Subscription;
    submited: boolean;
    form: FormGroup;
    constructor(fb: FormBuilder, routingService: RoutingService, userService: UserService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    resetPassword(): void;
    private matchPassword;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ResetPasswordFormComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<ResetPasswordFormComponent, "cx-reset-password-form", never, {}, {}, never>;
}

//# sourceMappingURL=reset-password-form.component.d.ts.map