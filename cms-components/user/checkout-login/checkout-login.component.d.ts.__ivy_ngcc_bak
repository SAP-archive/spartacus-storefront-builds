import { OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActiveCartService, AuthRedirectService } from '@spartacus/core';
import { Subscription } from 'rxjs';
export declare class CheckoutLoginComponent implements OnDestroy {
    protected formBuilder: FormBuilder;
    protected authRedirectService: AuthRedirectService;
    protected activeCartService: ActiveCartService;
    checkoutLoginForm: FormGroup;
    sub: Subscription;
    constructor(formBuilder: FormBuilder, authRedirectService: AuthRedirectService, activeCartService: ActiveCartService);
    onSubmit(): void;
    ngOnDestroy(): void;
}
