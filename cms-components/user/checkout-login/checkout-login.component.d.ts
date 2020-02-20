import { OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthRedirectService, CartService } from '@spartacus/core';
import { Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutLoginComponent implements OnDestroy {
    private formBuilder;
    private cartService;
    private authRedirectService;
    form: FormGroup;
    sub: Subscription;
    private submitClicked;
    constructor(formBuilder: FormBuilder, cartService: CartService, authRedirectService: AuthRedirectService);
    isNotValid(formControlName: string): boolean;
    isEmailConfirmInvalid(): boolean;
    onSubmit(): void;
    ngOnDestroy(): void;
    private emailsMatch;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutLoginComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CheckoutLoginComponent, "cx-checkout-login", never, {}, {}, never>;
}

//# sourceMappingURL=checkout-login.component.d.ts.map