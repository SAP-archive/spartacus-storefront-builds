import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiveCartService, Address, CheckoutDeliveryService, CheckoutPaymentService, CheckoutService, GlobalMessageService, PaymentDetails, RoutingService, TranslationService, UserPaymentService } from '@spartacus/core';
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
    protected activeCartService: ActiveCartService;
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
    constructor(userPaymentService: UserPaymentService, checkoutService: CheckoutService, checkoutDeliveryService: CheckoutDeliveryService, checkoutPaymentService: CheckoutPaymentService, globalMessageService: GlobalMessageService, routingService: RoutingService, checkoutConfigService: CheckoutConfigService, activatedRoute: ActivatedRoute, translation: TranslationService, activeCartService: ActiveCartService);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2QuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInBheW1lbnQtbWV0aG9kLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtRUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlLCBBZGRyZXNzLCBDaGVja291dERlbGl2ZXJ5U2VydmljZSwgQ2hlY2tvdXRQYXltZW50U2VydmljZSwgQ2hlY2tvdXRTZXJ2aWNlLCBHbG9iYWxNZXNzYWdlU2VydmljZSwgUGF5bWVudERldGFpbHMsIFJvdXRpbmdTZXJ2aWNlLCBUcmFuc2xhdGlvblNlcnZpY2UsIFVzZXJQYXltZW50U2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9taXNjL2ljb24nO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUGF5bWVudE1ldGhvZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcm90ZWN0ZWQgdXNlclBheW1lbnRTZXJ2aWNlOiBVc2VyUGF5bWVudFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjaGVja291dERlbGl2ZXJ5U2VydmljZTogQ2hlY2tvdXREZWxpdmVyeVNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0UGF5bWVudFNlcnZpY2U6IENoZWNrb3V0UGF5bWVudFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlO1xuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2U7XG4gICAgaWNvblR5cGVzOiB0eXBlb2YgSUNPTl9UWVBFO1xuICAgIG5ld1BheW1lbnRGb3JtTWFudWFsbHlPcGVuZWQ6IGJvb2xlYW47XG4gICAgZXhpc3RpbmdQYXltZW50TWV0aG9kcyQ6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHNbXT47XG4gICAgaXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBzZWxlY3RlZFBheW1lbnQ6IFBheW1lbnREZXRhaWxzO1xuICAgIGFsbG93Um91dGluZzogYm9vbGVhbjtcbiAgICBpc0d1ZXN0Q2hlY2tvdXQ6IGJvb2xlYW47XG4gICAgcHJpdmF0ZSBnZXRQYXltZW50RGV0YWlsc1N1YjtcbiAgICBwcml2YXRlIGRlbGl2ZXJ5QWRkcmVzcztcbiAgICBwcml2YXRlIGNoZWNrb3V0U3RlcFVybE5leHQ7XG4gICAgcHJpdmF0ZSBjaGVja291dFN0ZXBVcmxQcmV2aW91cztcbiAgICBjb25zdHJ1Y3Rvcih1c2VyUGF5bWVudFNlcnZpY2U6IFVzZXJQYXltZW50U2VydmljZSwgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZSwgY2hlY2tvdXRQYXltZW50U2VydmljZTogQ2hlY2tvdXRQYXltZW50U2VydmljZSwgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsIGNoZWNrb3V0Q29uZmlnU2VydmljZTogQ2hlY2tvdXRDb25maWdTZXJ2aWNlLCBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBnZXRDYXJkQ29udGVudChwYXltZW50OiBQYXltZW50RGV0YWlscyk6IE9ic2VydmFibGU8Q2FyZD47XG4gICAgc2VsZWN0UGF5bWVudE1ldGhvZChwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHMpOiB2b2lkO1xuICAgIHNob3dOZXdQYXltZW50Rm9ybSgpOiB2b2lkO1xuICAgIGhpZGVOZXdQYXltZW50Rm9ybSgpOiB2b2lkO1xuICAgIHNldFBheW1lbnREZXRhaWxzKHsgcGF5bWVudERldGFpbHMsIGJpbGxpbmdBZGRyZXNzLCBpc05ld1BheW1lbnQsIH06IHtcbiAgICAgICAgcGF5bWVudERldGFpbHM6IFBheW1lbnREZXRhaWxzO1xuICAgICAgICBiaWxsaW5nQWRkcmVzcz86IEFkZHJlc3M7XG4gICAgICAgIGlzTmV3UGF5bWVudD86IGJvb2xlYW47XG4gICAgfSk6IHZvaWQ7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgZ2V0Q2FyZEljb24oY29kZTogc3RyaW5nKTogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBzZW5kUGF5bWVudE1ldGhvZEZhaWxHbG9iYWxNZXNzYWdlKG1zZzogc3RyaW5nKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgY3JlYXRlQ2FyZChwYXltZW50RGV0YWlsczogYW55LCBjYXJkTGFiZWxzOiBhbnkpOiB7XG4gICAgICAgIHRpdGxlOiBhbnk7XG4gICAgICAgIHRleHRCb2xkOiBhbnk7XG4gICAgICAgIHRleHQ6IGFueVtdO1xuICAgICAgICBpbWc6IHN0cmluZztcbiAgICAgICAgYWN0aW9uczoge1xuICAgICAgICAgICAgbmFtZTogYW55O1xuICAgICAgICAgICAgZXZlbnQ6IHN0cmluZztcbiAgICAgICAgfVtdO1xuICAgICAgICBoZWFkZXI6IGFueTtcbiAgICB9O1xuICAgIGdvTmV4dCgpOiB2b2lkO1xuICAgIGdvUHJldmlvdXMoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgICAqIFRoaXMgbWV0aG9kIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIGdvTmV4dCgpIGluc3RlYWQuXG4gICAgICogVE9ETyhpc3N1ZTojNDk5MikgZGVwcmVjYXRlZCBzaW5jZSAxLjNcbiAgICAgKi9cbiAgICBuZXh0KCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICAgKiBUaGlzIG1ldGhvZCB3aWxsIG5vIGxvbmdlciBiZSBpbiB1c2UuIFVzZSBnb1ByZXZpb3VzKCkgaW5zdGVhZC5cbiAgICAgKiBUT0RPKGlzc3VlOiM0OTkyKSBkZXByZWNhdGVkIHNpbmNlIDEuM1xuICAgICAqL1xuICAgIGJhY2soKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgICAqIFRoaXMgbWV0aG9kIHdpbGwgbm8gbG9uZ2VyIGJlIGluIHVzZS4gVXNlIHNlbGVjdFBheW1lbnRNZXRob2QoKSBpbnN0ZWFkLlxuICAgICAqIFRPRE8oaXNzdWU6IzQ5OTIpIGRlcHJlY2F0ZWQgc2luY2UgMS4zXG4gICAgICovXG4gICAgcGF5bWVudE1ldGhvZFNlbGVjdGVkKHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscyk6IHZvaWQ7XG59XG4iXX0=