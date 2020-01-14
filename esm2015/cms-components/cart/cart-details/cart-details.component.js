/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartService, SelectiveCartService, AuthService, RoutingService, FeatureConfigService, PromotionLocation, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { PromotionService } from '../../../shared/services/promotion/promotion.service';
export class CartDetailsComponent {
    /**
     * @param {?} cartService
     * @param {?=} promotionService
     * @param {?=} selectiveCartService
     * @param {?=} authService
     * @param {?=} routingService
     * @param {?=} featureConfig
     */
    constructor(cartService, promotionService, selectiveCartService, authService, routingService, featureConfig) {
        this.cartService = cartService;
        this.promotionService = promotionService;
        this.selectiveCartService = selectiveCartService;
        this.authService = authService;
        this.routingService = routingService;
        this.featureConfig = featureConfig;
        this.loggedIn = false;
        this.promotionLocation = PromotionLocation.ActiveCart;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.cart$ = this.cartService.getActive();
        this.entries$ = this.cartService
            .getEntries()
            .pipe(filter((/**
         * @param {?} entries
         * @return {?}
         */
        entries => entries.length > 0)));
        if (this.isSaveForLaterEnabled()) {
            this.cartLoaded$ = combineLatest([
                this.cartService.getLoaded(),
                this.selectiveCartService.getLoaded(),
                this.authService.isUserLoggedIn(),
            ]).pipe(tap((/**
             * @param {?} __0
             * @return {?}
             */
            ([, , loggedIn]) => (this.loggedIn = loggedIn))), map((/**
             * @param {?} __0
             * @return {?}
             */
            ([cartLoaded, sflLoaded, loggedIn]) => loggedIn ? cartLoaded && sflLoaded : cartLoaded)));
        }
        //TODO remove for #5958
        else {
            this.cartLoaded$ = this.cartService.getLoaded();
        }
        //TODO  remove for #5958 end
        if (this.promotionService) {
            this.orderPromotions$ = this.promotionService.getOrderPromotions(this.promotionLocation);
        }
    }
    //TODO remove feature flag for #5958
    /**
     * @return {?}
     */
    isSaveForLaterEnabled() {
        if (this.featureConfig) {
            return this.featureConfig.isEnabled('saveForLater');
        }
        return false;
    }
    //TODO remove feature flag for #5958 end
    /**
     * @deprecated Since 1.5
     * Use promotionService instead of the promotion inputs.
     * Remove issue: #5670
     * @param {?} cart
     * @return {?}
     */
    getAllPromotionsForCart(cart) {
        /** @type {?} */
        const potentialPromotions = [];
        potentialPromotions.push(...(cart.potentialOrderPromotions || []));
        potentialPromotions.push(...(cart.potentialProductPromotions || []));
        /** @type {?} */
        const appliedPromotions = [];
        appliedPromotions.push(...(cart.appliedOrderPromotions || []));
        appliedPromotions.push(...(cart.appliedProductPromotions || []));
        return [...potentialPromotions, ...appliedPromotions];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    saveForLater(item) {
        if (this.loggedIn) {
            this.cartService.removeEntry(item);
            this.selectiveCartService.addEntry(item.product.code, item.quantity);
        }
        else {
            this.routingService.go({ cxRoute: 'login' });
        }
    }
}
CartDetailsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-cart-details',
                template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <ng-container *ngIf=\"entries$ | async as entries\">\n    <div *ngIf=\"cart.totalItems > 0\" class=\"cart-details-wrapper\">\n      <div class=\"cx-total\">\n        {{ 'cartDetails.cartName' | cxTranslate: { code: cart.code } }}\n      </div>\n\n      <ng-container *cxFeatureLevel=\"'!1.5'\">\n        <cx-promotions\n          [promotions]=\"getAllPromotionsForCart(cart)\"\n        ></cx-promotions>\n\n        <cx-cart-item-list\n          [items]=\"entries\"\n          [cartIsLoading]=\"!(cartLoaded$ | async)\"\n          [potentialProductPromotions]=\"cart.potentialProductPromotions\"\n        ></cx-cart-item-list>\n      </ng-container>\n\n      <ng-container *cxFeatureLevel=\"'1.5'\">\n        <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n          <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n        </ng-container>\n\n        <cx-cart-item-list\n          [items]=\"entries\"\n          [cartIsLoading]=\"!(cartLoaded$ | async)\"\n          [promotionLocation]=\"promotionLocation\"\n          [options]=\"{\n            isSaveForLater: false,\n            optionalBtn: isSaveForLaterEnabled() ? saveForLaterBtn : null\n          }\"\n        ></cx-cart-item-list>\n      </ng-container>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template let-ctx #saveForLaterBtn>\n  <div class=\"col-md-3 col-lg-3 col-xl-3 cx-sfl-btn\">\n    <button\n      class=\"link\"\n      [disabled]=\"ctx.loading\"\n      (click)=\"saveForLater(ctx.item)\"\n    >\n      {{ 'saveForLaterItems.saveForLater' | cxTranslate }}\n    </button>\n  </div>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CartDetailsComponent.ctorParameters = () => [
    { type: CartService },
    { type: PromotionService },
    { type: SelectiveCartService },
    { type: AuthService },
    { type: RoutingService },
    { type: FeatureConfigService }
];
if (false) {
    /** @type {?} */
    CartDetailsComponent.prototype.cart$;
    /** @type {?} */
    CartDetailsComponent.prototype.entries$;
    /** @type {?} */
    CartDetailsComponent.prototype.cartLoaded$;
    /** @type {?} */
    CartDetailsComponent.prototype.loggedIn;
    /** @type {?} */
    CartDetailsComponent.prototype.orderPromotions$;
    /** @type {?} */
    CartDetailsComponent.prototype.promotionLocation;
    /**
     * @type {?}
     * @protected
     */
    CartDetailsComponent.prototype.cartService;
    /**
     * @type {?}
     * @protected
     */
    CartDetailsComponent.prototype.promotionService;
    /**
     * @type {?}
     * @protected
     */
    CartDetailsComponent.prototype.selectiveCartService;
    /**
     * @type {?}
     * @private
     */
    CartDetailsComponent.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    CartDetailsComponent.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    CartDetailsComponent.prototype.featureConfig;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NhcnQvY2FydC1kZXRhaWxzL2NhcnQtZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUVMLFdBQVcsRUFFWCxvQkFBb0IsRUFDcEIsV0FBVyxFQUNYLGNBQWMsRUFDZCxvQkFBb0IsRUFFcEIsaUJBQWlCLEdBQ2xCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQU94RixNQUFNLE9BQU8sb0JBQW9COzs7Ozs7Ozs7SUF5Qi9CLFlBQ1ksV0FBd0IsRUFDeEIsZ0JBQW1DLEVBQ25DLG9CQUEyQyxFQUM3QyxXQUF5QixFQUN6QixjQUErQixFQUMvQixhQUFvQztRQUxsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW1CO1FBQ25DLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBdUI7UUFDN0MsZ0JBQVcsR0FBWCxXQUFXLENBQWM7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWlCO1FBQy9CLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtRQTNCOUMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixzQkFBaUIsR0FBc0IsaUJBQWlCLENBQUMsVUFBVSxDQUFDO0lBMEJqRSxDQUFDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFB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VCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixncERBQTRDO2dCQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQWxCQyxXQUFXO1lBWUosZ0JBQWdCO1lBVnZCLG9CQUFvQjtZQUNwQixXQUFXO1lBQ1gsY0FBYztZQUNkLG9CQUFvQjs7OztJQWVwQixxQ0FBd0I7O0lBQ3hCLHdDQUFtQzs7SUFDbkMsMkNBQWlDOztJQUNqQyx3Q0FBaUI7O0lBQ2pCLGdEQUFnRDs7SUFDaEQsaURBQW9FOzs7OztJQW9CbEUsMkNBQWtDOzs7OztJQUNsQyxnREFBNkM7Ozs7O0lBQzdDLG9EQUFxRDs7Ozs7SUFDckQsMkNBQWlDOzs7OztJQUNqQyw4Q0FBdUM7Ozs7O0lBQ3ZDLDZDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FydCxcbiAgQ2FydFNlcnZpY2UsXG4gIE9yZGVyRW50cnksXG4gIFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLFxuICBBdXRoU2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIEZlYXR1cmVDb25maWdTZXJ2aWNlLFxuICBQcm9tb3Rpb25SZXN1bHQsXG4gIFByb21vdGlvbkxvY2F0aW9uLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuLi9jYXJ0LXNoYXJlZC9jYXJ0LWl0ZW0vY2FydC1pdGVtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQcm9tb3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3Byb21vdGlvbi9wcm9tb3Rpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhcnQtZGV0YWlscycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJ0LWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgZW50cmllcyQ6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPjtcbiAgY2FydExvYWRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGxvZ2dlZEluID0gZmFsc2U7XG4gIG9yZGVyUHJvbW90aW9ucyQ6IE9ic2VydmFibGU8UHJvbW90aW9uUmVzdWx0W10+O1xuICBwcm9tb3Rpb25Mb2NhdGlvbjogUHJvbW90aW9uTG9jYXRpb24gPSBQcm9tb3Rpb25Mb2NhdGlvbi5BY3RpdmVDYXJ0O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dW5pZmllZC1zaWduYXR1cmVzXG4gICAgcHJvbW90aW9uU2VydmljZTogUHJvbW90aW9uU2VydmljZSxcbiAgICBzZWxlY3RpdmVDYXJ0U2VydmljZTogU2VsZWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBmZWF0dXJlQ29uZmlnOiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjVcbiAgICogVXNlIHByb21vdGlvblNlcnZpY2UgaW5zdGVhZCBvZiB0aGUgcHJvbW90aW9uIGlucHV0cy5cbiAgICogUmVtb3ZlIGlzc3VlOiAjNTY3MFxuICAgKi9cbiAgY29uc3RydWN0b3IoY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBwcm9tb3Rpb25TZXJ2aWNlPzogUHJvbW90aW9uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgc2VsZWN0aXZlQ2FydFNlcnZpY2U/OiBTZWxlY3RpdmVDYXJ0U2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlPzogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZT86IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByaXZhdGUgZmVhdHVyZUNvbmZpZz86IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNhcnQkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKTtcblxuICAgIHRoaXMuZW50cmllcyQgPSB0aGlzLmNhcnRTZXJ2aWNlXG4gICAgICAuZ2V0RW50cmllcygpXG4gICAgICAucGlwZShmaWx0ZXIoZW50cmllcyA9PiBlbnRyaWVzLmxlbmd0aCA+IDApKTtcblxuICAgIGlmICh0aGlzLmlzU2F2ZUZvckxhdGVyRW5hYmxlZCgpKSB7XG4gICAgICB0aGlzLmNhcnRMb2FkZWQkID0gY29tYmluZUxhdGVzdChbXG4gICAgICAgIHRoaXMuY2FydFNlcnZpY2UuZ2V0TG9hZGVkKCksXG4gICAgICAgIHRoaXMuc2VsZWN0aXZlQ2FydFNlcnZpY2UuZ2V0TG9hZGVkKCksXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKSxcbiAgICAgIF0pLnBpcGUoXG4gICAgICAgIHRhcCgoWywgLCBsb2dnZWRJbl0pID0+ICh0aGlzLmxvZ2dlZEluID0gbG9nZ2VkSW4pKSxcbiAgICAgICAgbWFwKChbY2FydExvYWRlZCwgc2ZsTG9hZGVkLCBsb2dnZWRJbl0pID0+XG4gICAgICAgICAgbG9nZ2VkSW4gPyBjYXJ0TG9hZGVkICYmIHNmbExvYWRlZCA6IGNhcnRMb2FkZWRcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gICAgLy9UT0RPIHJlbW92ZSBmb3IgIzU5NThcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY2FydExvYWRlZCQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldExvYWRlZCgpO1xuICAgIH1cbiAgICAvL1RPRE8gIHJlbW92ZSBmb3IgIzU5NTggZW5kXG4gICAgaWYgKHRoaXMucHJvbW90aW9uU2VydmljZSkge1xuICAgICAgdGhpcy5vcmRlclByb21vdGlvbnMkID0gdGhpcy5wcm9tb3Rpb25TZXJ2aWNlLmdldE9yZGVyUHJvbW90aW9ucyhcbiAgICAgICAgdGhpcy5wcm9tb3Rpb25Mb2NhdGlvblxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvL1RPRE8gcmVtb3ZlIGZlYXR1cmUgZmxhZyBmb3IgIzU5NThcbiAgaXNTYXZlRm9yTGF0ZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmZlYXR1cmVDb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmZlYXR1cmVDb25maWcuaXNFbmFibGVkKCdzYXZlRm9yTGF0ZXInKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vVE9ETyByZW1vdmUgZmVhdHVyZSBmbGFnIGZvciAjNTk1OCBlbmRcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS41XG4gICAqIFVzZSBwcm9tb3Rpb25TZXJ2aWNlIGluc3RlYWQgb2YgdGhlIHByb21vdGlvbiBpbnB1dHMuXG4gICAqIFJlbW92ZSBpc3N1ZTogIzU2NzBcbiAgICovXG4gIGdldEFsbFByb21vdGlvbnNGb3JDYXJ0KGNhcnQ6IENhcnQpOiBhbnlbXSB7XG4gICAgY29uc3QgcG90ZW50aWFsUHJvbW90aW9ucyA9IFtdO1xuICAgIHBvdGVudGlhbFByb21vdGlvbnMucHVzaCguLi4oY2FydC5wb3RlbnRpYWxPcmRlclByb21vdGlvbnMgfHwgW10pKTtcbiAgICBwb3RlbnRpYWxQcm9tb3Rpb25zLnB1c2goLi4uKGNhcnQucG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnMgfHwgW10pKTtcblxuICAgIGNvbnN0IGFwcGxpZWRQcm9tb3Rpb25zID0gW107XG4gICAgYXBwbGllZFByb21vdGlvbnMucHVzaCguLi4oY2FydC5hcHBsaWVkT3JkZXJQcm9tb3Rpb25zIHx8IFtdKSk7XG4gICAgYXBwbGllZFByb21vdGlvbnMucHVzaCguLi4oY2FydC5hcHBsaWVkUHJvZHVjdFByb21vdGlvbnMgfHwgW10pKTtcblxuICAgIHJldHVybiBbLi4ucG90ZW50aWFsUHJvbW90aW9ucywgLi4uYXBwbGllZFByb21vdGlvbnNdO1xuICB9XG5cbiAgc2F2ZUZvckxhdGVyKGl0ZW06IEl0ZW0pIHtcbiAgICBpZiAodGhpcy5sb2dnZWRJbikge1xuICAgICAgdGhpcy5jYXJ0U2VydmljZS5yZW1vdmVFbnRyeShpdGVtKTtcbiAgICAgIHRoaXMuc2VsZWN0aXZlQ2FydFNlcnZpY2UuYWRkRW50cnkoaXRlbS5wcm9kdWN0LmNvZGUsIGl0ZW0ucXVhbnRpdHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ2xvZ2luJyB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==