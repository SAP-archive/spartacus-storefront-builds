import { OnDestroy, OnInit } from '@angular/core';
import { CheckoutService, Order } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class OrderConfirmationTotalsComponent implements OnInit, OnDestroy {
    protected checkoutService: CheckoutService;
    order$: Observable<Order>;
    constructor(checkoutService: CheckoutService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
