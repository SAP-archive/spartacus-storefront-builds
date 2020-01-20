import { OnInit } from '@angular/core';
import { Consignment, Order, OrderEntry, PromotionLocation, PromotionResult } from '@spartacus/core';
import { Observable } from 'rxjs';
import { PromotionService } from '../../../../../shared/services/promotion/promotion.service';
import { OrderDetailsService } from '../order-details.service';
export declare class OrderDetailItemsComponent implements OnInit {
    private orderDetailsService;
    protected promotionService?: PromotionService;
    constructor(orderDetailsService: OrderDetailsService, promotionService: PromotionService);
    /**
     * @deprecated Since 1.5
     * Use promotionService instead of the promotion inputs.
     * Remove issue: #5670
     */
    constructor(orderDetailsService: OrderDetailsService);
    promotionLocation: PromotionLocation;
    order$: Observable<Order>;
    orderPromotions$: Observable<PromotionResult[]>;
    others$: Observable<Consignment[]>;
    completed$: Observable<Consignment[]>;
    cancel$: Observable<Consignment[]>;
    ngOnInit(): void;
    private getExactStatus;
    private getOtherStatus;
    /**
     * @deprecated
     * NOTE: This function will be removed in version 2.0
     */
    getConsignmentProducts(consignment: Consignment): OrderEntry[];
}
