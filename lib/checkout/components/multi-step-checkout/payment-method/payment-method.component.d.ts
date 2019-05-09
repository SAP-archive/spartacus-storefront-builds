import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { Address, CartDataService, CheckoutService, GlobalMessageService, PaymentDetails, UserService, TranslationService } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { Card } from '../../../../../shared/components/card/card.component';
export declare class PaymentMethodComponent implements OnInit, OnDestroy {
    protected cartData: CartDataService;
    protected userService: UserService;
    protected checkoutService: CheckoutService;
    protected globalMessageService: GlobalMessageService;
    private translation;
    newPaymentFormManuallyOpened: boolean;
    existingPaymentMethods$: Observable<PaymentDetails[]>;
    isLoading$: Observable<boolean>;
    getPaymentDetailsSub: Subscription;
    getDeliveryAddressSub: Subscription;
    selectedPayment: PaymentDetails;
    deliveryAddress: Address;
    goToStep: EventEmitter<any>;
    constructor(cartData: CartDataService, userService: UserService, checkoutService: CheckoutService, globalMessageService: GlobalMessageService, translation: TranslationService);
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
}
