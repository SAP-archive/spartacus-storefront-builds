import { OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService, RoutingService, UserService } from '@spartacus/core';
import { Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class GuestRegisterFormComponent implements OnDestroy {
    protected userService: UserService;
    protected routingService: RoutingService;
    protected authService: AuthService;
    protected fb: FormBuilder;
    guid: string;
    email: string;
    subscription: Subscription;
    guestRegisterForm: FormGroup;
    constructor(userService: UserService, routingService: RoutingService, authService: AuthService, fb: FormBuilder);
    submit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GuestRegisterFormComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<GuestRegisterFormComponent, "cx-guest-register-form", never, {
    "guid": "guid";
    "email": "email";
}, {}, never>;
}

//# sourceMappingURL=guest-register-form.component.d.ts.map