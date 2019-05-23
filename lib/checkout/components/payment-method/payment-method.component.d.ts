import { OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Address, CartDataService, CheckoutService, GlobalMessageService, RoutingService, PaymentDetails, UserService, TranslationService, RoutingConfigService } from '@spartacus/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../../../../shared/components/card/card.component';
import { CheckoutConfigService } from '../../checkout-config.service';
import { ICON_TYPE } from '../../../../cms-components/misc/icon';
export declare class PaymentMethodComponent implements OnInit, OnDestroy {
    protected cartData: CartDataService;
    protected userService: UserService;
    protected checkoutService: CheckoutService;
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
    constructor(cartData: CartDataService, userService: UserService, checkoutService: CheckoutService, globalMessageService: GlobalMessageService, routingConfigService: RoutingConfigService, routingService: RoutingService, checkoutConfigService: CheckoutConfigService, activatedRoute: ActivatedRoute, translation: TranslationService);
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
