import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Address, CartService, CheckoutService, DeliveryMode, PaymentDetails, Cart, OrderEntry, UserService, TranslationService } from '@spartacus/core';
import { Card } from '../../../../../shared/components/card/card.component';
export declare class ReviewSubmitComponent implements OnInit {
    protected checkoutService: CheckoutService;
    protected userService: UserService;
    protected cartService: CartService;
    private translation;
    entries$: Observable<OrderEntry[]>;
    cart$: Observable<Cart>;
    deliveryMode$: Observable<DeliveryMode>;
    countryName$: Observable<string>;
    deliveryAddress$: Observable<Address>;
    paymentDetails$: Observable<PaymentDetails>;
    constructor(checkoutService: CheckoutService, userService: UserService, cartService: CartService, translation: TranslationService);
    ngOnInit(): void;
    getShippingAddressCard(deliveryAddress: Address, countryName: string): Observable<Card>;
    getDeliveryModeCard(deliveryMode: DeliveryMode): Observable<Card>;
    getPaymentMethodCard(paymentDetails: PaymentDetails): Observable<Card>;
}
