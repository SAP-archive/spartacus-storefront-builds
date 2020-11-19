import { OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActiveCartService, AuthRedirectService } from '@spartacus/core';
import { Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutLoginComponent implements OnDestroy {
    protected formBuilder: FormBuilder;
    protected authRedirectService: AuthRedirectService;
    protected activeCartService: ActiveCartService;
    checkoutLoginForm: FormGroup;
    sub: Subscription;
    constructor(formBuilder: FormBuilder, authRedirectService: AuthRedirectService, activeCartService: ActiveCartService);
    onSubmit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutLoginComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CheckoutLoginComponent, "cx-checkout-login", never, {}, {}, never, never>;
}

//# sourceMappingURL=checkout-login.component.d.ts.map