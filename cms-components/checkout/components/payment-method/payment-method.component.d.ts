import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiveCartService, Address, CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, GlobalMessageService, PaymentDetails, TranslationService, UserPaymentService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { Card } from '../../../../shared/components/card/card.component';
import { ICON_TYPE } from '../../../misc/icon';
import { CheckoutStepService } from '../../services/checkout-step.service';
import * as ɵngcc0 from '@angular/core';
export declare class PaymentMethodComponent implements OnInit, OnDestroy {
    protected userPaymentService: UserPaymentService;
    protected checkoutService: CheckoutService;
    protected checkoutDeliveryService: CheckoutDeliveryService;
    protected checkoutPaymentService: CheckoutPaymentService;
    protected globalMessageService: GlobalMessageService;
    protected activatedRoute: ActivatedRoute;
    protected translation: TranslationService;
    protected activeCartService: ActiveCartService;
    protected checkoutStepService: CheckoutStepService;
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
    backBtnText: string;
    protected shouldRedirect: boolean;
    protected deliveryAddress: Address;
    constructor(userPaymentService: UserPaymentService, checkoutService: CheckoutService, checkoutDeliveryService: CheckoutDeliveryService, checkoutPaymentService: CheckoutPaymentService, globalMessageService: GlobalMessageService, activatedRoute: ActivatedRoute, translation: TranslationService, activeCartService: ActiveCartService, checkoutStepService: CheckoutStepService);
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
    next(): void;
    back(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PaymentMethodComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PaymentMethodComponent, "cx-payment-method", never, {}, {}, never, never>;
}

//# sourceMappingURL=payment-method.component.d.ts.map