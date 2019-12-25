import { OnDestroy, OnInit } from '@angular/core';
import { CheckoutService, Order, PromotionResult, PromotionLocation } from '@spartacus/core';
import { Observable } from 'rxjs';
import { PromotionService } from '../../../../shared/services/promotion/promotion.service';
export declare class OrderConfirmationItemsComponent implements OnInit, OnDestroy {
    protected checkoutService: CheckoutService;
    protected promotionService?: PromotionService;
    promotionLocation: PromotionLocation;
    order$: Observable<Order>;
    orderPromotions$: Observable<PromotionResult[]>;
    constructor(checkoutService: CheckoutService, promotionService: PromotionService);
    /**
     * @deprecated Since 1.4
     * Use promotionService instead of the promotion inputs.
     * Remove issue: #5670
     */
    constructor(checkoutService: CheckoutService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
