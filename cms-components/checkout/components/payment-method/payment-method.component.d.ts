import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address, CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, GlobalMessageService, PaymentDetails, RoutingService, TranslationService, UserPaymentService, CartService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { Card } from '../../../../shared/components/card/card.component';
import { ICON_TYPE } from '../../../misc/icon';
import { CheckoutConfigService } from '../../services/checkout-config.service';
export declare class PaymentMethodComponent implements OnInit, OnDestroy {
    protected userPaymentService: UserPaymentService;
    protected checkoutService: CheckoutService;
    protected checkoutDeliveryService: CheckoutDeliveryService;
    protected checkoutPaymentService: CheckoutPaymentService;
    protected globalMessageService: GlobalMessageService;
    protected routingService: RoutingService;
    protected checkoutConfigService: CheckoutConfigService;
    protected activatedRoute: ActivatedRoute;
    protected translation: TranslationService;
    protected cartService?: CartService;
    iconTypes: typeof ICON_TYPE;
    newPaymentFormManuallyOpened: boolean;
    existingPaymentMethods$: Observable<PaymentDetails[]>;
    isLoading$: Observable<boolean>;
    selectedPayment: PaymentDetails;
    allowRouting: boolean;
    isGuestCheckout: boolean;
    private getPaymentDetailsSub;
    private deliveryAddress;
    private checkoutStepUrlNext;
    private checkoutStepUrlPrevious;
    constructor(userPaymentService: UserPaymentService, checkoutService: CheckoutService, checkoutDeliveryService: CheckoutDeliveryService, checkoutPaymentService: CheckoutPaymentService, globalMessageService: GlobalMessageService, routingService: RoutingService, checkoutConfigService: CheckoutConfigService, activatedRoute: ActivatedRoute, translation: TranslationService, cartService: CartService);
    /**
     * @deprecated since 1.x
     * NOTE: check issue:#1181 for more info
     *
     * TODO(issue:#1181) Deprecated since 1.x
     */
    constructor(userPaymentService: UserPaymentService, checkoutService: CheckoutService, checkoutDeliveryService: CheckoutDeliveryService, checkoutPaymentService: CheckoutPaymentService, globalMessageService: GlobalMessageService, routingService: RoutingService, checkoutConfigService: CheckoutConfigService, activatedRoute: ActivatedRoute, translation: TranslationService);
    ngOnInit(): void;
    getCardContent(payment: PaymentDetails): Observable<Card>;
    paymentMethodSelected(paymentDetails: PaymentDetails): void;
    showNewPaymentForm(): void;
    hideNewPaymentForm(): void;
    next(): void;
    back(): void;
    setPaymentDetails({ paymentDetails, billingAddress, isNewPayment, }: {
        paymentDetails: PaymentDetails;
        billingAddress?: Address;
        isNewPayment?: boolean;
    }): void;
    ngOnDestroy(): void;
    protected getCardIcon(code: string): string;
}
