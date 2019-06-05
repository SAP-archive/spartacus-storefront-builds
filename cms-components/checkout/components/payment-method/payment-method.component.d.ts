import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address, CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, GlobalMessageService, PaymentDetails, RoutingConfigService, RoutingService, TranslationService, UserService } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { Card } from '../../../../shared/components/card/card.component';
import { ICON_TYPE } from '../../../misc/icon';
import { CheckoutConfigService } from '../../checkout-config.service';
export declare class PaymentMethodComponent implements OnInit, OnDestroy {
    protected userService: UserService;
    protected checkoutService: CheckoutService;
    protected checkoutDeliveryService: CheckoutDeliveryService;
    protected checkoutPaymentService: CheckoutPaymentService;
    protected globalMessageService: GlobalMessageService;
    protected routingConfigService: RoutingConfigService;
    private routingService;
    private checkoutConfigService;
    private activatedRoute;
    private translation;
    iconTypes: typeof ICON_TYPE;
    newPaymentFormManuallyOpened: boolean;
    existingPaymentMethods$: Observable<PaymentDetails[]>;
    isLoading$: Observable<boolean>;
    getPaymentDetailsSub: Subscription;
    getDeliveryAddressSub: Subscription;
    selectedPayment: PaymentDetails;
    deliveryAddress: Address;
    checkoutStepUrlNext: string;
    checkoutStepUrlPrevious: string;
    constructor(userService: UserService, checkoutService: CheckoutService, checkoutDeliveryService: CheckoutDeliveryService, checkoutPaymentService: CheckoutPaymentService, globalMessageService: GlobalMessageService, routingConfigService: RoutingConfigService, routingService: RoutingService, checkoutConfigService: CheckoutConfigService, activatedRoute: ActivatedRoute, translation: TranslationService);
    ngOnInit(): void;
    getCardContent(payment: PaymentDetails): Observable<Card>;
    paymentMethodSelected(paymentDetails: PaymentDetails): void;
    showNewPaymentForm(): void;
    hideNewPaymentForm(): void;
    next(): void;
    back(): void;
    addNewPaymentMethod({ paymentDetails, billingAddress, }: {
        paymentDetails: PaymentDetails;
        billingAddress: Address;
    }): void;
    addPaymentInfo({ newPayment, payment, billingAddress, }: {
        newPayment: boolean;
        payment: PaymentDetails;
        billingAddress?: Address;
    }): void;
    ngOnDestroy(): void;
    protected getCardIcon(code: string): string;
}
