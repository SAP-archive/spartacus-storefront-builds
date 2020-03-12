import { OnInit } from '@angular/core';
import { AuthService, Cart, CartService, FeatureConfigService, OrderEntry, PromotionLocation, PromotionResult, RoutingService, SelectiveCartService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { PromotionService } from '../../../shared/services/promotion/promotion.service';
import { Item } from '../cart-shared/cart-item/cart-item.component';
import * as ɵngcc0 from '@angular/core';
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
    promotions$: Observable<PromotionResult[]>;
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartDetailsComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<CartDetailsComponent, "cx-cart-details", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kZXRhaWxzLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJjYXJ0LWRldGFpbHMuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UsIENhcnQsIENhcnRTZXJ2aWNlLCBGZWF0dXJlQ29uZmlnU2VydmljZSwgT3JkZXJFbnRyeSwgUHJvbW90aW9uTG9jYXRpb24sIFByb21vdGlvblJlc3VsdCwgUm91dGluZ1NlcnZpY2UsIFNlbGVjdGl2ZUNhcnRTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb21vdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvcHJvbW90aW9uL3Byb21vdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuLi9jYXJ0LXNoYXJlZC9jYXJ0LWl0ZW0vY2FydC1pdGVtLmNvbXBvbmVudCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDYXJ0RGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcHJvbW90aW9uU2VydmljZT86IFByb21vdGlvblNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHNlbGVjdGl2ZUNhcnRTZXJ2aWNlPzogU2VsZWN0aXZlQ2FydFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZT87XG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZT87XG4gICAgcHJpdmF0ZSBmZWF0dXJlQ29uZmlnPztcbiAgICBjYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgICBlbnRyaWVzJDogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+O1xuICAgIGNhcnRMb2FkZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGxvZ2dlZEluOiBib29sZWFuO1xuICAgIG9yZGVyUHJvbW90aW9ucyQ6IE9ic2VydmFibGU8UHJvbW90aW9uUmVzdWx0W10+O1xuICAgIHByb21vdGlvbkxvY2F0aW9uOiBQcm9tb3Rpb25Mb2NhdGlvbjtcbiAgICBwcm9tb3Rpb25zJDogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT47XG4gICAgY29uc3RydWN0b3IoY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLCBwcm9tb3Rpb25TZXJ2aWNlOiBQcm9tb3Rpb25TZXJ2aWNlLCBzZWxlY3RpdmVDYXJ0U2VydmljZTogU2VsZWN0aXZlQ2FydFNlcnZpY2UsIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLCBmZWF0dXJlQ29uZmlnOiBGZWF0dXJlQ29uZmlnU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS41XG4gICAgICogVXNlIHByb21vdGlvblNlcnZpY2UgaW5zdGVhZCBvZiB0aGUgcHJvbW90aW9uIGlucHV0cy5cbiAgICAgKiBSZW1vdmUgaXNzdWU6ICM1NjcwXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIGlzU2F2ZUZvckxhdGVyRW5hYmxlZCgpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuNVxuICAgICAqIFVzZSBwcm9tb3Rpb25TZXJ2aWNlIGluc3RlYWQgb2YgdGhlIHByb21vdGlvbiBpbnB1dHMuXG4gICAgICogUmVtb3ZlIGlzc3VlOiAjNTY3MFxuICAgICAqL1xuICAgIGdldEFsbFByb21vdGlvbnNGb3JDYXJ0KGNhcnQ6IENhcnQpOiBhbnlbXTtcbiAgICBzYXZlRm9yTGF0ZXIoaXRlbTogSXRlbSk6IHZvaWQ7XG59XG4iXX0=