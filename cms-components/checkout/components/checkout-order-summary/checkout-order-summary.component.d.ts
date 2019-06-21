import { Observable } from 'rxjs';
import { CartService, Cart } from '@spartacus/core';
export declare class CheckoutOrderSummaryComponent {
    protected cartService: CartService;
    cart$: Observable<Cart>;
    constructor(cartService: CartService);
}
