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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kZXRhaWxzLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJjYXJ0LWRldGFpbHMuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThCQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlLCBDYXJ0LCBDYXJ0U2VydmljZSwgRmVhdHVyZUNvbmZpZ1NlcnZpY2UsIE9yZGVyRW50cnksIFByb21vdGlvbkxvY2F0aW9uLCBQcm9tb3Rpb25SZXN1bHQsIFJvdXRpbmdTZXJ2aWNlLCBTZWxlY3RpdmVDYXJ0U2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9tb3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3Byb21vdGlvbi9wcm9tb3Rpb24uc2VydmljZSc7XG5pbXBvcnQgeyBJdGVtIH0gZnJvbSAnLi4vY2FydC1zaGFyZWQvY2FydC1pdGVtL2NhcnQtaXRlbS5jb21wb25lbnQnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2FydERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHByb21vdGlvblNlcnZpY2U/OiBQcm9tb3Rpb25TZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBzZWxlY3RpdmVDYXJ0U2VydmljZT86IFNlbGVjdGl2ZUNhcnRTZXJ2aWNlO1xuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U/O1xuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U/O1xuICAgIHByaXZhdGUgZmVhdHVyZUNvbmZpZz87XG4gICAgY2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG4gICAgZW50cmllcyQ6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPjtcbiAgICBjYXJ0TG9hZGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBsb2dnZWRJbjogYm9vbGVhbjtcbiAgICBvcmRlclByb21vdGlvbnMkOiBPYnNlcnZhYmxlPFByb21vdGlvblJlc3VsdFtdPjtcbiAgICBwcm9tb3Rpb25Mb2NhdGlvbjogUHJvbW90aW9uTG9jYXRpb247XG4gICAgcHJvbW90aW9ucyQ6IE9ic2VydmFibGU8UHJvbW90aW9uUmVzdWx0W10+O1xuICAgIGNvbnN0cnVjdG9yKGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSwgcHJvbW90aW9uU2VydmljZTogUHJvbW90aW9uU2VydmljZSwgc2VsZWN0aXZlQ2FydFNlcnZpY2U6IFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSwgZmVhdHVyZUNvbmZpZzogRmVhdHVyZUNvbmZpZ1NlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuNVxuICAgICAqIFVzZSBwcm9tb3Rpb25TZXJ2aWNlIGluc3RlYWQgb2YgdGhlIHByb21vdGlvbiBpbnB1dHMuXG4gICAgICogUmVtb3ZlIGlzc3VlOiAjNTY3MFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBpc1NhdmVGb3JMYXRlckVuYWJsZWQoKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjVcbiAgICAgKiBVc2UgcHJvbW90aW9uU2VydmljZSBpbnN0ZWFkIG9mIHRoZSBwcm9tb3Rpb24gaW5wdXRzLlxuICAgICAqIFJlbW92ZSBpc3N1ZTogIzU2NzBcbiAgICAgKi9cbiAgICBnZXRBbGxQcm9tb3Rpb25zRm9yQ2FydChjYXJ0OiBDYXJ0KTogYW55W107XG4gICAgc2F2ZUZvckxhdGVyKGl0ZW06IEl0ZW0pOiB2b2lkO1xufVxuIl19