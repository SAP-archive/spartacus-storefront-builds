import { OnDestroy, OnInit } from '@angular/core';
import { Address, CheckoutService, CostCenter, DeliveryMode, Order, PaymentDetails, TranslationService } from '@spartacus/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderConfirmationOverviewComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<OrderConfirmationOverviewComponent, "cx-order-confirmation-overview", never, {}, {}, never, never>;
}

//# sourceMappingURL=order-confirmation-overview.component.d.ts.map