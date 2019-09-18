import { OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthRedirectService, CartService } from '@spartacus/core';
import { Subscription } from 'rxjs';
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
}
