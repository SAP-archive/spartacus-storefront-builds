import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Address, CartService, CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, GlobalMessageService, PaymentDetails, RoutingService, TranslationService, UserPaymentService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { Card } from '../../../../shared/components/card/card.component';
import { ICON_TYPE } from '../../../misc/icon';
import { CheckoutConfigService } from '../../services/checkout-config.service';
import * as ɵngcc0 from '@angular/core';
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
    selectPaymentMethod(paymentDetails: PaymentDetails): void;
    showNewPaymentForm(): void;
    hideNewPaymentForm(): void;
    setPaymentDetails({ paymentDetails, billingAddress, isNewPayment, }: {
        paymentDetails: PaymentDetails;
        billingAddress?: Address;
        isNewPayment?: boolean;
    }): void;
    ngOnDestroy(): void;
    protected getCardIcon(code: string): string;
    protected sendPaymentMethodFailGlobalMessage(msg: string): void;
    protected createCard(paymentDetails: any, cardLabels: any): {
        title: any;
        textBold: any;
        text: any[];
        img: string;
        actions: {
            name: any;
            event: string;
        }[];
        header: any;
    };
    goNext(): void;
    goPrevious(): void;
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use goNext() instead.
     * TODO(issue:#4992) deprecated since 1.3
     */
    next(): void;
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use goPrevious() instead.
     * TODO(issue:#4992) deprecated since 1.3
     */
    back(): void;
    /**
     * @deprecated since version 1.3
     * This method will no longer be in use. Use selectPaymentMethod() instead.
     * TODO(issue:#4992) deprecated since 1.3
     */
    paymentMethodSelected(paymentDetails: PaymentDetails): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PaymentMethodComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PaymentMethodComponent, "cx-payment-method", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2QuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInBheW1lbnQtbWV0aG9kLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEVBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBZGRyZXNzLCBDYXJ0U2VydmljZSwgQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2UsIENoZWNrb3V0UGF5bWVudFNlcnZpY2UsIENoZWNrb3V0U2VydmljZSwgR2xvYmFsTWVzc2FnZVNlcnZpY2UsIFBheW1lbnREZXRhaWxzLCBSb3V0aW5nU2VydmljZSwgVHJhbnNsYXRpb25TZXJ2aWNlLCBVc2VyUGF5bWVudFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vbWlzYy9pY29uJztcbmltcG9ydCB7IENoZWNrb3V0Q29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NoZWNrb3V0LWNvbmZpZy5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFBheW1lbnRNZXRob2RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIHVzZXJQYXltZW50U2VydmljZTogVXNlclBheW1lbnRTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjaGVja291dFBheW1lbnRTZXJ2aWNlOiBDaGVja291dFBheW1lbnRTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZTtcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY2FydFNlcnZpY2U/OiBDYXJ0U2VydmljZTtcbiAgICBpY29uVHlwZXM6IHR5cGVvZiBJQ09OX1RZUEU7XG4gICAgbmV3UGF5bWVudEZvcm1NYW51YWxseU9wZW5lZDogYm9vbGVhbjtcbiAgICBleGlzdGluZ1BheW1lbnRNZXRob2RzJDogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlsc1tdPjtcbiAgICBpc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIHNlbGVjdGVkUGF5bWVudDogUGF5bWVudERldGFpbHM7XG4gICAgYWxsb3dSb3V0aW5nOiBib29sZWFuO1xuICAgIGlzR3Vlc3RDaGVja291dDogYm9vbGVhbjtcbiAgICBwcml2YXRlIGdldFBheW1lbnREZXRhaWxzU3ViO1xuICAgIHByaXZhdGUgZGVsaXZlcnlBZGRyZXNzO1xuICAgIHByaXZhdGUgY2hlY2tvdXRTdGVwVXJsTmV4dDtcbiAgICBwcml2YXRlIGNoZWNrb3V0U3RlcFVybFByZXZpb3VzO1xuICAgIGNvbnN0cnVjdG9yKHVzZXJQYXltZW50U2VydmljZTogVXNlclBheW1lbnRTZXJ2aWNlLCBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSwgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLCBjaGVja291dFBheW1lbnRTZXJ2aWNlOiBDaGVja291dFBheW1lbnRTZXJ2aWNlLCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSwgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2UsIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSwgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSAxLnhcbiAgICAgKiBOT1RFOiBjaGVjayBpc3N1ZTojMTE4MSBmb3IgbW9yZSBpbmZvXG4gICAgICpcbiAgICAgKiBUT0RPKGlzc3VlOiMxMTgxKSBEZXByZWNhdGVkIHNpbmNlIDEueFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHVzZXJQYXltZW50U2VydmljZTogVXNlclBheW1lbnRTZXJ2aWNlLCBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSwgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLCBjaGVja291dFBheW1lbnRTZXJ2aWNlOiBDaGVja291dFBheW1lbnRTZXJ2aWNlLCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSwgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2UsIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBnZXRDYXJkQ29udGVudChwYXltZW50OiBQYXltZW50RGV0YWlscyk6IE9ic2VydmFibGU8Q2FyZD47XG4gICAgc2VsZWN0UGF5bWVudE1ldGhvZChwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHMpOiB2b2lkO1xuICAgIHNob3dOZXdQYXltZW50Rm9ybSgpOiB2b2lkO1xuICAgIGhpZGVOZXdQYXltZW50Rm9ybSgpOiB2b2lkO1xuICAgIHNldFBheW1lbnREZXRhaWxzKHsgcGF5bWVudERldGFpbHMsIGJpbGxpbmdBZGRyZXNzLCBpc05ld1BheW1lbnQsIH06IHtcbiAgICAgICAgcGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzO1xuICAgICAgICBiaWxsaW5nQWRkcmVzcz86IEFkZHJlc3M7XG4gICAgICAgIGlzTmV3UGF5bWVudD86IGJvb2xlYW47XG4gICAgfSk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgZ2V0Q2FyZEljb24oY29kZTogc3RyaW5nKTogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBzZW5kUGF5bWVudE1ldGhvZEZhaWxHbG9iYWxNZXNzYWdlKG1zZzogc3RyaW5nKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ2FyZChwYXltZW50RGV0YWlsczogYW55LCBjYXJkTGFiZWxzOiBhbnkpOiB7XG4gICAgICAgIHRpdGxlOiBhbnk7XG4gICAgICAgIHRleHRCb2xkOiBhbnk7XG4gICAgICAgIHRleHQ6IGFueVtdO1xuICAgICAgICBpbWc6IHN0cmluZztcbiAgICAgICAgYWN0aW9uczoge1xuICAgICAgICAgICAgbmFtZTogYW55O1xuICAgICAgICAgICAgZXZlbnQ6IHN0cmluZztcbiAgICAgICAgfVtdO1xuICAgICAgICBoZWFkZXI6IGFueTtcbiAgICB9O1xuICAgIGdvTmV4dCgpOiB2b2lkO1xuICAgIGdvUHJldmlvdXMoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgICAqIFRoaXMgbWV0aG9kIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIGdvTmV4dCgpIGluc3RlYWQuXG4gICAgICogVE9ETyhpc3N1ZTojNDk5MikgZGVwcmVjYXRlZCBzaW5jZSAxLjNcbiAgICAgKi9cbiAgICBuZXh0KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIG5vIGxvbmdlciBiZSBpbiB1c2UuIFVzZSBnb1ByZXZpb3VzKCkgaW5zdGVhZC5cbiAgICAgKiBUT0RPKGlzc3VlOiM0OTkyKSBkZXByZWNhdGVkIHNpbmNlIDEuM1xuICAgICAqL1xuICAgIGJhY2soKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgICAqIFRoaXMgbWV0aG9kIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIHNlbGVjdFBheW1lbnRNZXRob2QoKSBpbnN0ZWFkLlxuICAgICAqIFRPRE8oaXNzdWU6IzQ5OTIpIGRlcHJlY2F0ZWQgc2luY2UgMS4zXG4gICAgICovXG4gICAgcGF5bWVudE1ldGhvZFNlbGVjdGVkKHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscyk6IHZvaWQ7XG59XG4iXX0=