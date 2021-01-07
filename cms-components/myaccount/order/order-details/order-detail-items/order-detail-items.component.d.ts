import { OnInit } from '@angular/core';
import { Consignment, PromotionLocation, PromotionResult } from '@spartacus/core';
import { Observable } from 'rxjs';
import { PromotionService } from '../../../../../shared/services/promotion/promotion.service';
import { OrderDetailsService } from '../order-details.service';
export declare class OrderDetailItemsComponent implements OnInit {
    protected orderDetailsService: OrderDetailsService;
    protected promotionService: PromotionService;
    constructor(orderDetailsService: OrderDetailsService, promotionService: PromotionService);
    promotionLocation: PromotionLocation;
    order$: Observable<any>;
    orderPromotions$: Observable<PromotionResult[]>;
    others$: Observable<Consignment[]>;
    completed$: Observable<Consignment[]>;
    cancel$: Observable<Consignment[]>;
    ngOnInit(): void;
    private getExactStatus;
    private getOtherStatus;
}
