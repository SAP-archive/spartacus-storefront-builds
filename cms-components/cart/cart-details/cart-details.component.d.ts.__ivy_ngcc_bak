import { OnInit } from '@angular/core';
import { ActiveCartService, AuthService, Cart, OrderEntry, PromotionLocation, PromotionResult, RoutingService, SelectiveCartService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { PromotionService } from '../../../shared/services/promotion/promotion.service';
import { Item } from '../cart-shared/cart-item/cart-item.component';
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
    saveForLater(item: Item): void;
}
