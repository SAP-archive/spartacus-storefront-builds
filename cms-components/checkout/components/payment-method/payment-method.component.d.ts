import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address, CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, GlobalMessageService, PaymentDetails, RoutingService, TranslationService, UserPaymentService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { Card } from '../../../../shared/components/card/card.component';
import { ICON_TYPE } from '../../../misc/icon';
import { CheckoutConfigService } from '../../checkout-config.service';
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
    iconTypes: typeof ICON_TYPE;
    newPaymentFormManuallyOpened: boolean;
    existingPaymentMethods$: Observable<PaymentDetails[]>;
    isLoading$: Observable<boolean>;
    selectedPayment: PaymentDetails;
    private getPaymentDetailsSub;
    private getDeliveryAddressSub;
    private deliveryAddress;
    private checkoutStepUrlNext;
    private checkoutStepUrlPrevious;
    constructor(userPaymentService: UserPaymentService, checkoutService: CheckoutService, checkoutDeliveryService: CheckoutDeliveryService, checkoutPaymentService: CheckoutPaymentService, globalMessageService: GlobalMessageService, routingService: RoutingService, checkoutConfigService: CheckoutConfigService, activatedRoute: ActivatedRoute, translation: TranslationService);
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
