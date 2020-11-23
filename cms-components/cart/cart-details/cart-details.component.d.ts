import { OnInit } from '@angular/core';
import { ActiveCartService, AuthService, Cart, OrderEntry, PromotionLocation, PromotionResult, RoutingService, SelectiveCartService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { PromotionService } from '../../../shared/services/promotion/promotion.service';
import * as ɵngcc0 from '@angular/core';
export declare class CartDetailsComponent implements OnInit {
    protected activeCartService: ActiveCartService;
    protected promotionService: PromotionService;
    protected selectiveCartService: SelectiveCartService;
    protected authService: AuthService;
    protected routingService: RoutingService;
    cart$: Observable<Cart>;
    entries$: Observable<OrderEntry[]>;
    cartLoaded$: Observable<boolean>;
    loggedIn: boolean;
    orderPromotions$: Observable<PromotionResult[]>;
    promotionLocation: PromotionLocation;
    promotions$: Observable<PromotionResult[]>;
    selectiveCartEnabled: boolean;
    constructor(activeCartService: ActiveCartService, promotionService: PromotionService, selectiveCartService: SelectiveCartService, authService: AuthService, routingService: RoutingService);
    ngOnInit(): void;
    saveForLater(item: OrderEntry): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartDetailsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CartDetailsComponent, "cx-cart-details", never, {}, {}, never, never>;
}

//# sourceMappingURL=cart-details.component.d.ts.map