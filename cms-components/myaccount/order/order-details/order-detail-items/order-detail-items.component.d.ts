import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Order, Consignment, OrderEntry, PromotionResult, PromotionLocation } from '@spartacus/core';
import { OrderDetailsService } from '../order-details.service';
import { PromotionService } from '../../../../../shared/services/promotion/promotion.service';
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
    ngOnInit(): void;
    getConsignmentProducts(consignment: Consignment): OrderEntry[];
}
