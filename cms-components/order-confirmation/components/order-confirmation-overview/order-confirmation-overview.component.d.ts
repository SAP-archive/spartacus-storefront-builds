import { OnDestroy, OnInit } from '@angular/core';
import { Address, CheckoutService, DeliveryMode, Order, PaymentDetails, TranslationService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { Card } from '../../../../shared/components/card/card.component';
export declare class OrderConfirmationOverviewComponent implements OnInit, OnDestroy {
    protected checkoutService: CheckoutService;
    private translation;
    order$: Observable<Order>;
    constructor(checkoutService: CheckoutService, translation: TranslationService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getAddressCardContent(deliveryAddress: Address): Observable<Card>;
    getDeliveryModeCardContent(deliveryMode: DeliveryMode): Observable<Card>;
    getBillingAddressCardContent(billingAddress: Address): Observable<Card>;
    getPaymentInfoCardContent(payment: PaymentDetails): Observable<Card>;
}
