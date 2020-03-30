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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PaymentMethodComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<PaymentMethodComponent, "cx-payment-method", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1tZXRob2QuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInBheW1lbnQtbWV0aG9kLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpREEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQWN0aXZlQ2FydFNlcnZpY2UsIEFkZHJlc3MsIENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLCBDaGVja291dFBheW1lbnRTZXJ2aWNlLCBDaGVja291dFNlcnZpY2UsIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLCBQYXltZW50RGV0YWlscywgUm91dGluZ1NlcnZpY2UsIFRyYW5zbGF0aW9uU2VydmljZSwgVXNlclBheW1lbnRTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhcmQgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL21pc2MvaWNvbic7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jaGVja291dC1jb25maWcuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQYXltZW50TWV0aG9kQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByb3RlY3RlZCB1c2VyUGF5bWVudFNlcnZpY2U6IFVzZXJQYXltZW50U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlOiBDaGVja291dERlbGl2ZXJ5U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRQYXltZW50U2VydmljZTogQ2hlY2tvdXRQYXltZW50U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0Q29uZmlnU2VydmljZTogQ2hlY2tvdXRDb25maWdTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGU7XG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZTtcbiAgICBpY29uVHlwZXM6IHR5cGVvZiBJQ09OX1RZUEU7XG4gICAgbmV3UGF5bWVudEZvcm1NYW51YWxseU9wZW5lZDogYm9vbGVhbjtcbiAgICBleGlzdGluZ1BheW1lbnRNZXRob2RzJDogT2JzZXJ2YWJsZTxQYXltZW50RGV0YWlsc1tdPjtcbiAgICBpc0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIHNlbGVjdGVkUGF5bWVudDogUGF5bWVudERldGFpbHM7XG4gICAgYWxsb3dSb3V0aW5nOiBib29sZWFuO1xuICAgIGlzR3Vlc3RDaGVja291dDogYm9vbGVhbjtcbiAgICBwcml2YXRlIGdldFBheW1lbnREZXRhaWxzU3ViO1xuICAgIHByaXZhdGUgZGVsaXZlcnlBZGRyZXNzO1xuICAgIHByaXZhdGUgY2hlY2tvdXRTdGVwVXJsTmV4dDtcbiAgICBwcml2YXRlIGNoZWNrb3V0U3RlcFVybFByZXZpb3VzO1xuICAgIGNvbnN0cnVjdG9yKHVzZXJQYXltZW50U2VydmljZTogVXNlclBheW1lbnRTZXJ2aWNlLCBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSwgY2hlY2tvdXREZWxpdmVyeVNlcnZpY2U6IENoZWNrb3V0RGVsaXZlcnlTZXJ2aWNlLCBjaGVja291dFBheW1lbnRTZXJ2aWNlOiBDaGVja291dFBheW1lbnRTZXJ2aWNlLCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2UsIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSwgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2UsIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSwgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIGdldENhcmRDb250ZW50KHBheW1lbnQ6IFBheW1lbnREZXRhaWxzKTogT2JzZXJ2YWJsZTxDYXJkPjtcbiAgICBzZWxlY3RQYXltZW50TWV0aG9kKHBheW1lbnREZXRhaWxzOiBQYXltZW50RGV0YWlscyk6IHZvaWQ7XG4gICAgc2hvd05ld1BheW1lbnRGb3JtKCk6IHZvaWQ7XG4gICAgaGlkZU5ld1BheW1lbnRGb3JtKCk6IHZvaWQ7XG4gICAgc2V0UGF5bWVudERldGFpbHMoeyBwYXltZW50RGV0YWlscywgYmlsbGluZ0FkZHJlc3MsIGlzTmV3UGF5bWVudCwgfToge1xuICAgICAgICBwYXltZW50RGV0YWlsczogUGF5bWVudERldGFpbHM7XG4gICAgICAgIGJpbGxpbmdBZGRyZXNzPzogQWRkcmVzcztcbiAgICAgICAgaXNOZXdQYXltZW50PzogYm9vbGVhbjtcbiAgICB9KTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xuICAgIHByb3RlY3RlZCBnZXRDYXJkSWNvbihjb2RlOiBzdHJpbmcpOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHNlbmRQYXltZW50TWV0aG9kRmFpbEdsb2JhbE1lc3NhZ2UobXNnOiBzdHJpbmcpOiB2b2lkO1xuICAgIHByb3RlY3RlZCBjcmVhdGVDYXJkKHBheW1lbnREZXRhaWxzOiBhbnksIGNhcmRMYWJlbHM6IGFueSk6IHtcbiAgICAgICAgdGl0bGU6IGFueTtcbiAgICAgICAgdGV4dEJvbGQ6IGFueTtcbiAgICAgICAgdGV4dDogYW55W107XG4gICAgICAgIGltZzogc3RyaW5nO1xuICAgICAgICBhY3Rpb25zOiB7XG4gICAgICAgICAgICBuYW1lOiBhbnk7XG4gICAgICAgICAgICBldmVudDogc3RyaW5nO1xuICAgICAgICB9W107XG4gICAgICAgIGhlYWRlcjogYW55O1xuICAgIH07XG4gICAgZ29OZXh0KCk6IHZvaWQ7XG4gICAgZ29QcmV2aW91cygpOiB2b2lkO1xufVxuIl19