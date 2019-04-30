import { OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { GlobalMessageService, CartService, UICart } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CheckoutNavBarItem } from './checkout-navigation-bar';
import { CheckoutDetailsService } from '../../../checkout-details.service';
export declare class MultiStepCheckoutComponent implements OnInit, OnDestroy {
    checkoutDetailsService: CheckoutDetailsService;
    protected cartService: CartService;
    protected globalMessageService: GlobalMessageService;
    protected cd: ChangeDetectorRef;
    step: number;
    cart$: Observable<UICart>;
    navs: CheckoutNavBarItem[];
    constructor(checkoutDetailsService: CheckoutDetailsService, cartService: CartService, globalMessageService: GlobalMessageService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    nextStep(step: number): void;
    initializeCheckoutNavBar(): CheckoutNavBarItem[];
    clearCheckoutNavBar(): void;
    ngOnDestroy(): void;
}
