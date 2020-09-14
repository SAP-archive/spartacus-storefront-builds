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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2QuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInBheW1lbnQtbWV0aG9kLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWN0aXZlQ2FydFNlcnZpY2UsIEFkZHJlc3MsIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLCBDaGVja291dFBheW1lbnRTZXJ2aWNlLCBDaGVja291dFNlcnZpY2UsIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLCBQYXltZW50RGV0YWlscywgVHJhbnNsYXRpb25TZXJ2aWNlLCBVc2VyUGF5bWVudFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vbWlzYy9pY29uJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaGVja291dC1zdGVwLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUGF5bWVudE1ldGhvZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcm90ZWN0ZWQgdXNlclBheW1lbnRTZXJ2aWNlOiBVc2VyUGF5bWVudFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjaGVja291dERlbGl2ZXJ5U2VydmljZTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0UGF5bWVudFNlcnZpY2U6IENoZWNrb3V0UGF5bWVudFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlO1xuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U3RlcFNlcnZpY2U6IENoZWNrb3V0U3RlcFNlcnZpY2U7XG4gICAgaWNvblR5cGVzOiB0eXBlb2YgSUNPTl9UWVBFO1xuICAgIGV4aXN0aW5nUGF5bWVudE1ldGhvZHMkOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzW10+O1xuICAgIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgY2FyZHMkOiBPYnNlcnZhYmxlPHtcbiAgICAgICAgY29udGVudDogQ2FyZDtcbiAgICAgICAgcGF5bWVudE1ldGhvZDogUGF5bWVudERldGFpbHM7XG4gICAgfVtdPjtcbiAgICBzZWxlY3RlZE1ldGhvZCQ6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHM+O1xuICAgIGlzR3Vlc3RDaGVja291dDogYm9vbGVhbjtcbiAgICBuZXdQYXltZW50Rm9ybU1hbnVhbGx5T3BlbmVkOiBib29sZWFuO1xuICAgIGJhY2tCdG5UZXh0OiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHNob3VsZFJlZGlyZWN0OiBib29sZWFuO1xuICAgIHByb3RlY3RlZCBkZWxpdmVyeUFkZHJlc3M6IEFkZHJlc3M7XG4gICAgY29uc3RydWN0b3IodXNlclBheW1lbnRTZXJ2aWNlOiBVc2VyUGF5bWVudFNlcnZpY2UsIGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlLCBjaGVja291dERlbGl2ZXJ5U2VydmljZTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsIGNoZWNrb3V0UGF5bWVudFNlcnZpY2U6IENoZWNrb3V0UGF5bWVudFNlcnZpY2UsIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSwgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UsIGNoZWNrb3V0U3RlcFNlcnZpY2U6IENoZWNrb3V0U3RlcFNlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgc2VsZWN0UGF5bWVudE1ldGhvZChwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHMpOiB2b2lkO1xuICAgIHNob3dOZXdQYXltZW50Rm9ybSgpOiB2b2lkO1xuICAgIGhpZGVOZXdQYXltZW50Rm9ybSgpOiB2b2lkO1xuICAgIHNldFBheW1lbnREZXRhaWxzKHsgcGF5bWVudERldGFpbHMsIGJpbGxpbmdBZGRyZXNzLCB9OiB7XG4gICAgICAgIHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscztcbiAgICAgICAgYmlsbGluZ0FkZHJlc3M/OiBBZGRyZXNzO1xuICAgIH0pOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIGdldENhcmRJY29uKGNvZGU6IHN0cmluZyk6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgc2VuZFBheW1lbnRNZXRob2RGYWlsR2xvYmFsTWVzc2FnZShmaWVsZDogc3RyaW5nKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ2FyZChwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHMsIGNhcmRMYWJlbHM6IHtcbiAgICAgICAgdGV4dERlZmF1bHRQYXltZW50TWV0aG9kOiBzdHJpbmc7XG4gICAgICAgIHRleHRFeHBpcmVzOiBzdHJpbmc7XG4gICAgICAgIHRleHRVc2VUaGlzUGF5bWVudDogc3RyaW5nO1xuICAgICAgICB0ZXh0U2VsZWN0ZWQ6IHN0cmluZztcbiAgICB9LCBzZWxlY3RlZDogUGF5bWVudERldGFpbHMpOiBDYXJkO1xuICAgIG5leHQoKTogdm9pZDtcbiAgICBiYWNrKCk6IHZvaWQ7XG59XG4iXX0=