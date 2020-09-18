import { OnInit } from '@angular/core';
import { Address, CostCenter, DeliveryMode, Order, PaymentDetails, TranslationService } from '@spartacus/core';
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
    getOrderCodeCardContent(orderCode: string): Observable<Card>;
    getOrderCurrentDateCardContent(isoDate: string): Observable<Card>;
    getOrderStatusCardContent(status: string): Observable<Card>;
    getPurchaseOrderNumber(poNumber: string): Observable<Card>;
    getMethodOfPaymentCardContent(hasPaymentInfo: PaymentDetails): Observable<Card>;
    getCostCenterCardContent(costCenter: CostCenter): Observable<Card>;
    getAddressCardContent(deliveryAddress: Address): Observable<Card>;
    getDeliveryModeCardContent(deliveryMode: DeliveryMode): Observable<Card>;
    getPaymentInfoCardContent(payment: PaymentDetails): Observable<Card>;
    getBillingAddressCardContent(billingAddress: Address): Observable<Card>;
    private getDate;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderDetailShippingComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<OrderDetailShippingComponent, "cx-order-details-shipping", never, {}, {}, never, never>;
}

//# sourceMappingURL=order-detail-shipping.component.d.ts.map