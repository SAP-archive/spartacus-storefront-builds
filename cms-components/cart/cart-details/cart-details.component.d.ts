import { OnInit } from '@angular/core';
import { ActiveCartService, AuthService, Cart, OrderEntry, PromotionLocation, PromotionResult, RoutingService, SelectiveCartService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { PromotionService } from '../../../shared/services/promotion/promotion.service';
import { Item } from '../cart-shared/cart-item/cart-item.component';
import * as ɵngcc0 from '@angular/core';
export declare class CartDetailsComponent implements OnInit {
    protected activeCartService: ActiveCartService;
    protected promotionService: PromotionService;
    protected selectiveCartService: SelectiveCartService;
    private authService;
    private routingService;
    cart$: Observable<Cart>;
    entries$: Observable<OrderEntry[]>;
    cartLoaded$: Observable<boolean>;
    loggedIn: boolean;
    orderPromotions$: Observable<PromotionResult[]>;
    promotionLocation: PromotionLocation;
    promotions$: Observable<PromotionResult[]>;
    constructor(activeCartService: ActiveCartService, promotionService: PromotionService, selectiveCartService: SelectiveCartService, authService: AuthService, routingService: RoutingService);
    ngOnInit(): void;
    saveForLater(item: Item): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartDetailsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CartDetailsComponent, "cx-cart-details", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kZXRhaWxzLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJjYXJ0LWRldGFpbHMuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlLCBBdXRoU2VydmljZSwgQ2FydCwgT3JkZXJFbnRyeSwgUHJvbW90aW9uTG9jYXRpb24sIFByb21vdGlvblJlc3VsdCwgUm91dGluZ1NlcnZpY2UsIFNlbGVjdGl2ZUNhcnRTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb21vdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvcHJvbW90aW9uL3Byb21vdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuLi9jYXJ0LXNoYXJlZC9jYXJ0LWl0ZW0vY2FydC1pdGVtLmNvbXBvbmVudCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDYXJ0RGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcHJvbW90aW9uU2VydmljZTogUHJvbW90aW9uU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgc2VsZWN0aXZlQ2FydFNlcnZpY2U6IFNlbGVjdGl2ZUNhcnRTZXJ2aWNlO1xuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U7XG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTtcbiAgICBjYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgICBlbnRyaWVzJDogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+O1xuICAgIGNhcnRMb2FkZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGxvZ2dlZEluOiBib29sZWFuO1xuICAgIG9yZGVyUHJvbW90aW9ucyQ6IE9ic2VydmFibGU8UHJvbW90aW9uUmVzdWx0W10+O1xuICAgIHByb21vdGlvbkxvY2F0aW9uOiBQcm9tb3Rpb25Mb2NhdGlvbjtcbiAgICBwcm9tb3Rpb25zJDogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT47XG4gICAgY29uc3RydWN0b3IoYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlLCBwcm9tb3Rpb25TZXJ2aWNlOiBQcm9tb3Rpb25TZXJ2aWNlLCBzZWxlY3RpdmVDYXJ0U2VydmljZTogU2VsZWN0aXZlQ2FydFNlcnZpY2UsIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIHNhdmVGb3JMYXRlcihpdGVtOiBJdGVtKTogdm9pZDtcbn1cbiJdfQ==