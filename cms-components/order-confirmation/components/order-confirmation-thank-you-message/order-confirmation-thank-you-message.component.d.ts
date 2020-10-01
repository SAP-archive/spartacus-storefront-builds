import { OnDestroy, OnInit } from '@angular/core';
import { CheckoutService } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class OrderConfirmationThankYouMessageComponent implements OnInit, OnDestroy {
    protected checkoutService: CheckoutService;
    order$: Observable<any>;
    isReplenishmentOrderType$: Observable<boolean>;
    isGuestCustomer: boolean;
    orderGuid: string;
    constructor(checkoutService: CheckoutService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderConfirmationThankYouMessageComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<OrderConfirmationThankYouMessageComponent, "cx-order-confirmation-thank-you-message", never, {}, {}, never, never>;
}

//# sourceMappingURL=order-confirmation-thank-you-message.component.d.ts.map