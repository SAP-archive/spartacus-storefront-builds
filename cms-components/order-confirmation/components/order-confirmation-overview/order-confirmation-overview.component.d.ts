import { OnDestroy, OnInit } from '@angular/core';
import { Address, CheckoutService, DeliveryMode, Order, PaymentDetails, TranslationService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { Card } from '../../../../shared/components/card/card.component';
import * as ɵngcc0 from '@angular/core';
export declare class OrderConfirmationOverviewComponent implements OnInit, OnDestroy {
    protected checkoutService: CheckoutService;
    private translation;
    order$: Observable<Order>;
    constructor(checkoutService: CheckoutService, translation: TranslationService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getAddressCardContent(deliveryAddress: Address): Observable<Card>;
    getDeliveryModeCardContent(deliveryMode: DeliveryMode): Observable<Card>;
    getBillingAddressCardContent(billingAddress: Address): Observable<Card>;
    getPaymentInfoCardContent(payment: PaymentDetails): Observable<Card>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderConfirmationOverviewComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<OrderConfirmationOverviewComponent, "cx-order-confirmation-overview", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLW92ZXJ2aWV3LmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJvcmRlci1jb25maXJtYXRpb24tb3ZlcnZpZXcuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7QUFXQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBZGRyZXNzLCBDaGVja291dFNlcnZpY2UsIERlbGl2ZXJ5TW9kZSwgT3JkZXIsIFBheW1lbnREZXRhaWxzLCBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2NhcmQvY2FyZC5jb21wb25lbnQnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT3JkZXJDb25maXJtYXRpb25PdmVydmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2U7XG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvbjtcbiAgICBvcmRlciQ6IE9ic2VydmFibGU8T3JkZXI+O1xuICAgIGNvbnN0cnVjdG9yKGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlLCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgZ2V0QWRkcmVzc0NhcmRDb250ZW50KGRlbGl2ZXJ5QWRkcmVzczogQWRkcmVzcyk6IE9ic2VydmFibGU8Q2FyZD47XG4gICAgZ2V0RGVsaXZlcnlNb2RlQ2FyZENvbnRlbnQoZGVsaXZlcnlNb2RlOiBEZWxpdmVyeU1vZGUpOiBPYnNlcnZhYmxlPENhcmQ+O1xuICAgIGdldEJpbGxpbmdBZGRyZXNzQ2FyZENvbnRlbnQoYmlsbGluZ0FkZHJlc3M6IEFkZHJlc3MpOiBPYnNlcnZhYmxlPENhcmQ+O1xuICAgIGdldFBheW1lbnRJbmZvQ2FyZENvbnRlbnQocGF5bWVudDogUGF5bWVudERldGFpbHMpOiBPYnNlcnZhYmxlPENhcmQ+O1xufVxuIl19