import { OnInit } from '@angular/core';
import { Address, CartService, CheckoutService, DeliveryMode, PaymentDetails, UICart, UIOrderEntry, UserService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { Card } from '../../../../../shared/components/card/card.component';
export declare class ReviewSubmitComponent implements OnInit {
    protected checkoutService: CheckoutService;
    protected userService: UserService;
    protected cartService: CartService;
    entries$: Observable<UIOrderEntry[]>;
    cart$: Observable<UICart>;
    deliveryMode$: Observable<DeliveryMode>;
    countryName$: Observable<string>;
    deliveryAddress$: Observable<Address>;
    paymentDetails$: Observable<PaymentDetails>;
    constructor(checkoutService: CheckoutService, userService: UserService, cartService: CartService);
    ngOnInit(): void;
    getShippingAddressCard(deliveryAddress: Address, countryName: string): Card;
    getDeliveryModeCard(deliveryMode: DeliveryMode): Card;
    getPaymentMethodCard(paymentDetails: PaymentDetails): Card;
}
