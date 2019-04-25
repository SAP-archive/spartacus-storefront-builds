import { OnInit } from '@angular/core';
import { CheckoutService, Address, CartService, UserService, UIOrderEntry, UICart, DeliveryMode, Country, PaymentDetails } from '@spartacus/core';
import { Observable } from 'rxjs';
import { Card } from '../../../../ui/components/card/card.component';
export declare class ReviewSubmitComponent implements OnInit {
    protected checkoutService: CheckoutService;
    protected userService: UserService;
    protected cartService: CartService;
    deliveryAddress: Address;
    shippingMethod: string;
    paymentDetails: PaymentDetails;
    entries$: Observable<UIOrderEntry[]>;
    cart$: Observable<UICart>;
    deliveryMode$: Observable<DeliveryMode>;
    countryName$: Observable<Country>;
    constructor(checkoutService: CheckoutService, userService: UserService, cartService: CartService);
    ngOnInit(): void;
    getShippingAddressCard(countryName: string): Card;
    getShippingMethodCard(deliveryMode: DeliveryMode): Card;
    getPaymentMethodCard(): Card;
}
