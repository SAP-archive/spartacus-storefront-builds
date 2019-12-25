import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Address, Cart, CartService, CheckoutDeliveryService, CheckoutPaymentService, DeliveryMode, OrderEntry, PaymentDetails, TranslationService, UserAddressService, PromotionResult, PromotionLocation } from '@spartacus/core';
import { Card } from '../../../../shared/components/card/card.component';
import { CheckoutConfigService } from '../../services/index';
import { CheckoutStepType } from '../../model/index';
import { PromotionService } from '../../../../shared/services/promotion/promotion.service';
export declare class ReviewSubmitComponent implements OnInit {
    protected checkoutDeliveryService: CheckoutDeliveryService;
    protected checkoutPaymentService: CheckoutPaymentService;
    protected userAddressService: UserAddressService;
    protected cartService: CartService;
    protected translation: TranslationService;
    protected checkoutConfigService?: CheckoutConfigService;
    protected promotionService?: PromotionService;
    checkoutStepType: typeof CheckoutStepType;
    entries$: Observable<OrderEntry[]>;
    cart$: Observable<Cart>;
    deliveryMode$: Observable<DeliveryMode>;
    countryName$: Observable<string>;
    deliveryAddress$: Observable<Address>;
    paymentDetails$: Observable<PaymentDetails>;
    orderPromotions$: Observable<PromotionResult[]>;
    promotionLocation: PromotionLocation;
    constructor(checkoutDeliveryService: CheckoutDeliveryService, checkoutPaymentService: CheckoutPaymentService, userAddressService: UserAddressService, cartService: CartService, translation: TranslationService, checkoutConfigService: CheckoutConfigService, // tslint:disable-line
    promotionService: PromotionService);
    /**
     * @deprecated since 1.1.0
     * NOTE: check issue:#4121 for more info
     *
     * TODO(issue:#4121) Deprecated since 1.1.0
     */
    constructor(checkoutDeliveryService: CheckoutDeliveryService, checkoutPaymentService: CheckoutPaymentService, userAddressService: UserAddressService, cartService: CartService, translation: TranslationService);
    /**
     * @deprecated Since 1.4
     * Use promotionService instead of the promotion inputs.
     * Remove issue: #5670
     */
    constructor(checkoutDeliveryService: CheckoutDeliveryService, checkoutPaymentService: CheckoutPaymentService, userAddressService: UserAddressService, cartService: CartService, translation: TranslationService, checkoutConfigService: CheckoutConfigService);
    ngOnInit(): void;
    getShippingAddressCard(deliveryAddress: Address, countryName: string): Observable<Card>;
    getDeliveryModeCard(deliveryMode: DeliveryMode): Observable<Card>;
    getPaymentMethodCard(paymentDetails: PaymentDetails): Observable<Card>;
    getCheckoutStepUrl(stepType: CheckoutStepType): string;
}
