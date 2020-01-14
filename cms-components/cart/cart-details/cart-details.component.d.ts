import { OnInit } from '@angular/core';
import { Cart, CartService, OrderEntry, SelectiveCartService, AuthService, RoutingService, FeatureConfigService, PromotionResult, PromotionLocation } from '@spartacus/core';
import { Observable } from 'rxjs';
import { Item } from '../cart-shared/cart-item/cart-item.component';
import { PromotionService } from '../../../shared/services/promotion/promotion.service';
export declare class CartDetailsComponent implements OnInit {
    protected cartService: CartService;
    protected promotionService?: PromotionService;
    protected selectiveCartService?: SelectiveCartService;
    private authService?;
    private routingService?;
    private featureConfig?;
    cart$: Observable<Cart>;
    entries$: Observable<OrderEntry[]>;
    cartLoaded$: Observable<boolean>;
    loggedIn: boolean;
    orderPromotions$: Observable<PromotionResult[]>;
    promotionLocation: PromotionLocation;
    constructor(cartService: CartService, promotionService: PromotionService, selectiveCartService: SelectiveCartService, authService: AuthService, routingService: RoutingService, featureConfig: FeatureConfigService);
    /**
     * @deprecated Since 1.5
     * Use promotionService instead of the promotion inputs.
     * Remove issue: #5670
     */
    constructor(cartService: CartService);
    ngOnInit(): void;
    isSaveForLaterEnabled(): boolean;
    /**
     * @deprecated Since 1.5
     * Use promotionService instead of the promotion inputs.
     * Remove issue: #5670
     */
    getAllPromotionsForCart(cart: Cart): any[];
    saveForLater(item: Item): void;
}
