import { OnDestroy, OnInit } from '@angular/core';
import { Address, CheckoutService, DeliveryMode, Order, PaymentDetails } from '@spartacus/core';
import { Observable } from 'rxjs';
import { Card } from '../../../../shared/components/card/card.component';
export declare class OrderConfirmationComponent implements OnInit, OnDestroy {
    protected checkoutService: CheckoutService;
    order$: Observable<Order>;
    constructor(checkoutService: CheckoutService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getAddressCardContent(deliveryAddress: Address): Card;
    getDeliveryModeCardContent(deliveryMode: DeliveryMode): Card;
    getBillingAddressCardContent(billingAddress: Address): Card;
    getPaymentInfoCardContent(paymentInfo: PaymentDetails): Card;
}
