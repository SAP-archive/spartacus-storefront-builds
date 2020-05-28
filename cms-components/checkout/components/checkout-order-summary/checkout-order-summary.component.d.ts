import { ActiveCartService, Cart } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class CheckoutOrderSummaryComponent {
    protected activeCartService: ActiveCartService;
    cart$: Observable<Cart>;
    constructor(activeCartService: ActiveCartService);
}
