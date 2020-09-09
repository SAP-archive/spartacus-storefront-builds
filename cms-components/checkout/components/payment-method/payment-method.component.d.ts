import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiveCartService, Address, CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, GlobalMessageService, PaymentDetails, RoutingService, TranslationService, UserPaymentService } from '@spartacus/core';
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
    protected activeCartService: ActiveCartService;
    iconTypes: typeof ICON_TYPE;
    existingPaymentMethods$: Observable<PaymentDetails[]>;
    isLoading$: Observable<boolean>;
    cards$: Observable<{
        content: Card;
        paymentMethod: PaymentDetails;
    }[]>;
    selectedMethod$: Observable<PaymentDetails>;
    isGuestCheckout: boolean;
    newPaymentFormManuallyOpened: boolean;
    protected shouldRedirect: boolean;
    protected deliveryAddress: Address;
    protected checkoutStepUrlNext: string;
    protected checkoutStepUrlPrevious: string;
    constructor(userPaymentService: UserPaymentService, checkoutService: CheckoutService, checkoutDeliveryService: CheckoutDeliveryService, checkoutPaymentService: CheckoutPaymentService, globalMessageService: GlobalMessageService, routingService: RoutingService, checkoutConfigService: CheckoutConfigService, activatedRoute: ActivatedRoute, translation: TranslationService, activeCartService: ActiveCartService);
    ngOnInit(): void;
    selectPaymentMethod(paymentDetails: PaymentDetails): void;
    showNewPaymentForm(): void;
    hideNewPaymentForm(): void;
    setPaymentDetails({ paymentDetails, billingAddress, }: {
        paymentDetails: PaymentDetails;
        billingAddress?: Address;
    }): void;
    ngOnDestroy(): void;
    protected getCardIcon(code: string): string;
    protected sendPaymentMethodFailGlobalMessage(field: string): void;
    protected createCard(paymentDetails: PaymentDetails, cardLabels: {
        textDefaultPaymentMethod: string;
        textExpires: string;
        textUseThisPayment: string;
        textSelected: string;
    }, selected: PaymentDetails): Card;
    goNext(): void;
    goPrevious(): void;
}
