import { OnInit } from '@angular/core';
import { Consignment, Order, PromotionLocation, PromotionResult } from '@spartacus/core';
import { Observable } from 'rxjs';
import { PromotionService } from '../../../../../shared/services/promotion/promotion.service';
import { OrderDetailsService } from '../order-details.service';
import * as ɵngcc0 from '@angular/core';
export declare class OrderDetailItemsComponent implements OnInit {
    protected orderDetailsService: OrderDetailsService;
    protected promotionService: PromotionService;
    constructor(orderDetailsService: OrderDetailsService, promotionService: PromotionService);
    promotionLocation: PromotionLocation;
    order$: Observable<Order>;
    orderPromotions$: Observable<PromotionResult[]>;
    others$: Observable<Consignment[]>;
    completed$: Observable<Consignment[]>;
    cancel$: Observable<Consignment[]>;
    ngOnInit(): void;
    private getExactStatus;
    private getOtherStatus;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OrderDetailItemsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<OrderDetailItemsComponent, "cx-order-details-items", never, {}, {}, never, never>;
}

//# sourceMappingURL=order-detail-items.component.d.ts.map