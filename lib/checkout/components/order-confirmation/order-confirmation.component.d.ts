import { OnInit, OnDestroy } from '@angular/core';
import { Order, CheckoutService, Address, PaymentDetails, DeliveryMode } from '@spartacus/core';
import { Observable } from 'rxjs';
import { Card } from '../../../ui/components/card/card.component';
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
