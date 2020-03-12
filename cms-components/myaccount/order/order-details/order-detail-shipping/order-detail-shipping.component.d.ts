import { OnInit } from '@angular/core';
import { Address, DeliveryMode, Order, PaymentDetails, TranslationService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { Card } from '../../../../../shared/components/card/card.component';
import { OrderDetailsService } from '../order-details.service';
import * as ɵngcc0 from '@angular/core';
export declare class OrderDetailShippingComponent implements OnInit {
    private orderDetailsService;
    private translation;
    constructor(orderDetailsService: OrderDetailsService, translation: TranslationService);
    order$: Observable<Order>;
    ngOnInit(): void;
    getAddressCardContent(address: Address): Observable<Card>;
    getBillingAddressCardContent(billingAddress: Address): Observable<Card>;
    getPaymentCardContent(payment: PaymentDetails): Observable<Card>;
    getShippingMethodCardContent(shipping: DeliveryMode): Observable<Card>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderDetailShippingComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<OrderDetailShippingComponent, "cx-order-details-shipping", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlsLXNoaXBwaW5nLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJvcmRlci1kZXRhaWwtc2hpcHBpbmcuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7QUFVQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWRkcmVzcywgRGVsaXZlcnlNb2RlLCBPcmRlciwgUGF5bWVudERldGFpbHMsIFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPcmRlckRldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vb3JkZXItZGV0YWlscy5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE9yZGVyRGV0YWlsU2hpcHBpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgb3JkZXJEZXRhaWxzU2VydmljZTtcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uO1xuICAgIGNvbnN0cnVjdG9yKG9yZGVyRGV0YWlsc1NlcnZpY2U6IE9yZGVyRGV0YWlsc1NlcnZpY2UsIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UpO1xuICAgIG9yZGVyJDogT2JzZXJ2YWJsZTxPcmRlcj47XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBnZXRBZGRyZXNzQ2FyZENvbnRlbnQoYWRkcmVzczogQWRkcmVzcyk6IE9ic2VydmFibGU8Q2FyZD47XG4gICAgZ2V0QmlsbGluZ0FkZHJlc3NDYXJkQ29udGVudChiaWxsaW5nQWRkcmVzczogQWRkcmVzcyk6IE9ic2VydmFibGU8Q2FyZD47XG4gICAgZ2V0UGF5bWVudENhcmRDb250ZW50KHBheW1lbnQ6IFBheW1lbnREZXRhaWxzKTogT2JzZXJ2YWJsZTxDYXJkPjtcbiAgICBnZXRTaGlwcGluZ01ldGhvZENhcmRDb250ZW50KHNoaXBwaW5nOiBEZWxpdmVyeU1vZGUpOiBPYnNlcnZhYmxlPENhcmQ+O1xufVxuIl19