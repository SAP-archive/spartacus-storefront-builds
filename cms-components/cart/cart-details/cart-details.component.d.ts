import { OnInit } from '@angular/core';
import { Cart, CartService, OrderEntry, PromotionResult, PromotionLocation } from '@spartacus/core';
import { Observable } from 'rxjs';
import { PromotionService } from '../../../shared/services/promotion/promotion.service';
export declare class CartDetailsComponent implements OnInit {
    protected cartService: CartService;
    protected promotionService?: PromotionService;
    cart$: Observable<Cart>;
    entries$: Observable<OrderEntry[]>;
    cartLoaded$: Observable<boolean>;
    orderPromotions$: Observable<PromotionResult[]>;
    promotionLocation: PromotionLocation;
    constructor(cartService: CartService, promotionService: PromotionService);
    /**
     * @deprecated Since 1.5
     * Use promotionService instead of the promotion inputs.
     * Remove issue: #5670
     */
    constructor(cartService: CartService);
    ngOnInit(): void;
    /**
     * @deprecated Since 1.5
     * Use promotionService instead of the promotion inputs.
     * Remove issue: #5670
     */
    getAllPromotionsForCart(cart: Cart): any[];
}
