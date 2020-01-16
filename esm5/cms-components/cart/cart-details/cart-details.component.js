/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService, CartService, FeatureConfigService, PromotionLocation, RoutingService, SelectiveCartService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { PromotionService } from '../../../shared/services/promotion/promotion.service';
var CartDetailsComponent = /** @class */ (function () {
    function CartDetailsComponent(cartService, promotionService, selectiveCartService, authService, routingService, featureConfig) {
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
    CartDetailsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.cart$ = this.cartService.getActive();
        /**
         * TODO Remove the check for promotion service
         * Issue: GH-5670
         */
        if (this.promotionService) {
            this.promotions$ = this.promotionService.getOrderPromotionsFromCart();
        }
        this.entries$ = this.cartService
            .getEntries()
            .pipe(filter((/**
         * @param {?} entries
         * @return {?}
         */
        function (entries) { return entries.length > 0; })));
        if (this.isSaveForLaterEnabled()) {
            this.cartLoaded$ = combineLatest([
                this.cartService.getLoaded(),
                this.selectiveCartService.getLoaded(),
                this.authService.isUserLoggedIn(),
            ]).pipe(tap((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 3), loggedIn = _b[2];
                return (_this.loggedIn = loggedIn);
            })), map((/**
             * @param {?} __0
             * @return {?}
             */
            function (_a) {
                var _b = tslib_1.__read(_a, 3), cartLoaded = _b[0], sflLoaded = _b[1], loggedIn = _b[2];
                return loggedIn ? cartLoaded && sflLoaded : cartLoaded;
            })));
        }
        //TODO remove for #5958
        else {
            this.cartLoaded$ = this.cartService.getLoaded();
        }
        //TODO  remove for #5958 end
        if (this.promotionService) {
            this.orderPromotions$ = this.promotionService.getOrderPromotions(this.promotionLocation);
        }
    };
    //TODO remove feature flag for #5958
    //TODO remove feature flag for #5958
    /**
     * @return {?}
     */
    CartDetailsComponent.prototype.isSaveForLaterEnabled = 
    //TODO remove feature flag for #5958
    /**
     * @return {?}
     */
    function () {
        if (this.featureConfig) {
            return this.featureConfig.isEnabled('saveForLater');
        }
        return false;
    };
    //TODO remove feature flag for #5958 end
    /**
     * @deprecated Since 1.5
     * Use promotionService instead of the promotion inputs.
     * Remove issue: #5670
     */
    //TODO remove feature flag for #5958 end
    /**
     * @deprecated Since 1.5
     * Use promotionService instead of the promotion inputs.
     * Remove issue: #5670
     * @param {?} cart
     * @return {?}
     */
    CartDetailsComponent.prototype.getAllPromotionsForCart = 
    //TODO remove feature flag for #5958 end
    /**
     * @deprecated Since 1.5
     * Use promotionService instead of the promotion inputs.
     * Remove issue: #5670
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        /** @type {?} */
        var potentialPromotions = [];
        potentialPromotions.push.apply(potentialPromotions, tslib_1.__spread((cart.potentialOrderPromotions || [])));
        potentialPromotions.push.apply(potentialPromotions, tslib_1.__spread((cart.potentialProductPromotions || [])));
        /** @type {?} */
        var appliedPromotions = [];
        appliedPromotions.push.apply(appliedPromotions, tslib_1.__spread((cart.appliedOrderPromotions || [])));
        appliedPromotions.push.apply(appliedPromotions, tslib_1.__spread((cart.appliedProductPromotions || [])));
        return tslib_1.__spread(potentialPromotions, appliedPromotions);
    };
    /**
     * @param {?} item
     * @return {?}
     */
    CartDetailsComponent.prototype.saveForLater = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this.loggedIn) {
            this.cartService.removeEntry(item);
            this.selectiveCartService.addEntry(item.product.code, item.quantity);
        }
        else {
            this.routingService.go({ cxRoute: 'login' });
        }
    };
    CartDetailsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-cart-details',
                    template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <ng-container *ngIf=\"entries$ | async as entries\">\n    <div *ngIf=\"cart.totalItems > 0\" class=\"cart-details-wrapper\">\n      <div class=\"cx-total\">\n        {{ 'cartDetails.cartName' | cxTranslate: { code: cart.code } }}\n      </div>\n\n      <ng-container *cxFeatureLevel=\"'!1.5'\">\n        <cx-promotions [promotions]=\"promotions$ | async\"></cx-promotions>\n\n        <cx-cart-item-list\n          [items]=\"entries\"\n          [cartIsLoading]=\"!(cartLoaded$ | async)\"\n          [potentialProductPromotions]=\"cart.potentialProductPromotions\"\n        ></cx-cart-item-list>\n      </ng-container>\n\n      <ng-container *cxFeatureLevel=\"'1.5'\">\n        <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n          <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n        </ng-container>\n\n        <cx-cart-item-list\n          [items]=\"entries\"\n          [cartIsLoading]=\"!(cartLoaded$ | async)\"\n          [promotionLocation]=\"promotionLocation\"\n          [options]=\"{\n            isSaveForLater: false,\n            optionalBtn: isSaveForLaterEnabled() ? saveForLaterBtn : null\n          }\"\n        ></cx-cart-item-list>\n      </ng-container>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template let-ctx #saveForLaterBtn>\n  <div class=\"col-md-3 col-lg-3 col-xl-3 cx-sfl-btn\">\n    <button\n      class=\"link\"\n      [disabled]=\"ctx.loading\"\n      (click)=\"saveForLater(ctx.item)\"\n    >\n      {{ 'saveForLaterItems.saveForLater' | cxTranslate }}\n    </button>\n  </div>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CartDetailsComponent.ctorParameters = function () { return [
        { type: CartService },
        { type: PromotionService },
        { type: SelectiveCartService },
        { type: AuthService },
        { type: RoutingService },
        { type: FeatureConfigService }
    ]; };
    return CartDetailsComponent;
}());
export { CartDetailsComponent };
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
    /** @type {?} */
    CartDetailsComponent.prototype.promotions$;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NhcnQvY2FydC1kZXRhaWxzL2NhcnQtZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFDTCxXQUFXLEVBRVgsV0FBVyxFQUNYLG9CQUFvQixFQUVwQixpQkFBaUIsRUFFakIsY0FBYyxFQUNkLG9CQUFvQixHQUNyQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFHeEY7SUErQkUsOEJBQ1ksV0FBd0IsRUFDeEIsZ0JBQW1DLEVBQ25DLG9CQUEyQyxFQUM3QyxXQUF5QixFQUN6QixjQUErQixFQUMvQixhQUFvQztRQUxsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW1CO1FBQ25DLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBdUI7UUFDN0MsZ0JBQVcsR0FBWCxXQUFXLENBQWM7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWlCO1FBQy9CLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtRQTVCOUMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixzQkFBaUIsR0FBc0IsaUJBQWlCLENBQUMsVUFBVSxDQUFDO0lBMkJqRSxDQUFDOzs7O0lBRUosdUNBQVE7OztJQUFSO1FBQUEsaUJBcUNDO1FBcENDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxD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QUFJLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN0RTthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztTQUM5QztJQUNILENBQUM7O2dCQWhIRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsaW5EQUE0QztvQkFDNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQWpCQyxXQUFXO2dCQVVKLGdCQUFnQjtnQkFKdkIsb0JBQW9CO2dCQVJwQixXQUFXO2dCQU9YLGNBQWM7Z0JBSmQsb0JBQW9COztJQTZIdEIsMkJBQUM7Q0FBQSxBQWpIRCxJQWlIQztTQTVHWSxvQkFBb0I7OztJQUMvQixxQ0FBd0I7O0lBQ3hCLHdDQUFtQzs7SUFDbkMsMkNBQWlDOztJQUNqQyx3Q0FBaUI7O0lBQ2pCLGdEQUFnRDs7SUFDaEQsaURBQW9FOztJQUNwRSwyQ0FBMkM7Ozs7O0lBb0J6QywyQ0FBa0M7Ozs7O0lBQ2xDLGdEQUE2Qzs7Ozs7SUFDN0Msb0RBQXFEOzs7OztJQUNyRCwyQ0FBaUM7Ozs7O0lBQ2pDLDhDQUF1Qzs7Ozs7SUFDdkMsNkNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBdXRoU2VydmljZSxcbiAgQ2FydCxcbiAgQ2FydFNlcnZpY2UsXG4gIEZlYXR1cmVDb25maWdTZXJ2aWNlLFxuICBPcmRlckVudHJ5LFxuICBQcm9tb3Rpb25Mb2NhdGlvbixcbiAgUHJvbW90aW9uUmVzdWx0LFxuICBSb3V0aW5nU2VydmljZSxcbiAgU2VsZWN0aXZlQ2FydFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJvbW90aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9wcm9tb3Rpb24vcHJvbW90aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4uL2NhcnQtc2hhcmVkL2NhcnQtaXRlbS9jYXJ0LWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2FydC1kZXRhaWxzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcnQtZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0RGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICBlbnRyaWVzJDogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+O1xuICBjYXJ0TG9hZGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgbG9nZ2VkSW4gPSBmYWxzZTtcbiAgb3JkZXJQcm9tb3Rpb25zJDogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT47XG4gIHByb21vdGlvbkxvY2F0aW9uOiBQcm9tb3Rpb25Mb2NhdGlvbiA9IFByb21vdGlvbkxvY2F0aW9uLkFjdGl2ZUNhcnQ7XG4gIHByb21vdGlvbnMkOiBPYnNlcnZhYmxlPFByb21vdGlvblJlc3VsdFtdPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVuaWZpZWQtc2lnbmF0dXJlc1xuICAgIHByb21vdGlvblNlcnZpY2U6IFByb21vdGlvblNlcnZpY2UsXG4gICAgc2VsZWN0aXZlQ2FydFNlcnZpY2U6IFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLFxuICAgIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgZmVhdHVyZUNvbmZpZzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS41XG4gICAqIFVzZSBwcm9tb3Rpb25TZXJ2aWNlIGluc3RlYWQgb2YgdGhlIHByb21vdGlvbiBpbnB1dHMuXG4gICAqIFJlbW92ZSBpc3N1ZTogIzU2NzBcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvbW90aW9uU2VydmljZT86IFByb21vdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHNlbGVjdGl2ZUNhcnRTZXJ2aWNlPzogU2VsZWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZT86IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U/OiBSb3V0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIGZlYXR1cmVDb25maWc/OiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jYXJ0JCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0QWN0aXZlKCk7XG5cbiAgICAvKipcbiAgICAgKiBUT0RPIFJlbW92ZSB0aGUgY2hlY2sgZm9yIHByb21vdGlvbiBzZXJ2aWNlXG4gICAgICogSXNzdWU6IEdILTU2NzBcbiAgICAgKi9cbiAgICBpZiAodGhpcy5wcm9tb3Rpb25TZXJ2aWNlKSB7XG4gICAgICB0aGlzLnByb21vdGlvbnMkID0gdGhpcy5wcm9tb3Rpb25TZXJ2aWNlLmdldE9yZGVyUHJvbW90aW9uc0Zyb21DYXJ0KCk7XG4gICAgfVxuXG4gICAgdGhpcy5lbnRyaWVzJCA9IHRoaXMuY2FydFNlcnZpY2VcbiAgICAgIC5nZXRFbnRyaWVzKClcbiAgICAgIC5waXBlKGZpbHRlcihlbnRyaWVzID0+IGVudHJpZXMubGVuZ3RoID4gMCkpO1xuXG4gICAgaWYgKHRoaXMuaXNTYXZlRm9yTGF0ZXJFbmFibGVkKCkpIHtcbiAgICAgIHRoaXMuY2FydExvYWRlZCQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgdGhpcy5jYXJ0U2VydmljZS5nZXRMb2FkZWQoKSxcbiAgICAgICAgdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZS5nZXRMb2FkZWQoKSxcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5pc1VzZXJMb2dnZWRJbigpLFxuICAgICAgXSkucGlwZShcbiAgICAgICAgdGFwKChbLCAsIGxvZ2dlZEluXSkgPT4gKHRoaXMubG9nZ2VkSW4gPSBsb2dnZWRJbikpLFxuICAgICAgICBtYXAoKFtjYXJ0TG9hZGVkLCBzZmxMb2FkZWQsIGxvZ2dlZEluXSkgPT5cbiAgICAgICAgICBsb2dnZWRJbiA/IGNhcnRMb2FkZWQgJiYgc2ZsTG9hZGVkIDogY2FydExvYWRlZFxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgICAvL1RPRE8gcmVtb3ZlIGZvciAjNTk1OFxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jYXJ0TG9hZGVkJCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0TG9hZGVkKCk7XG4gICAgfVxuICAgIC8vVE9ETyAgcmVtb3ZlIGZvciAjNTk1OCBlbmRcbiAgICBpZiAodGhpcy5wcm9tb3Rpb25TZXJ2aWNlKSB7XG4gICAgICB0aGlzLm9yZGVyUHJvbW90aW9ucyQgPSB0aGlzLnByb21vdGlvblNlcnZpY2UuZ2V0T3JkZXJQcm9tb3Rpb25zKFxuICAgICAgICB0aGlzLnByb21vdGlvbkxvY2F0aW9uXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8vVE9ETyByZW1vdmUgZmVhdHVyZSBmbGFnIGZvciAjNTk1OFxuICBpc1NhdmVGb3JMYXRlckVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZmVhdHVyZUNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZmVhdHVyZUNvbmZpZy5pc0VuYWJsZWQoJ3NhdmVGb3JMYXRlcicpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy9UT0RPIHJlbW92ZSBmZWF0dXJlIGZsYWcgZm9yICM1OTU4IGVuZFxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjVcbiAgICogVXNlIHByb21vdGlvblNlcnZpY2UgaW5zdGVhZCBvZiB0aGUgcHJvbW90aW9uIGlucHV0cy5cbiAgICogUmVtb3ZlIGlzc3VlOiAjNTY3MFxuICAgKi9cbiAgZ2V0QWxsUHJvbW90aW9uc0ZvckNhcnQoY2FydDogQ2FydCk6IGFueVtdIHtcbiAgICBjb25zdCBwb3RlbnRpYWxQcm9tb3Rpb25zID0gW107XG4gICAgcG90ZW50aWFsUHJvbW90aW9ucy5wdXNoKC4uLihjYXJ0LnBvdGVudGlhbE9yZGVyUHJvbW90aW9ucyB8fCBbXSkpO1xuICAgIHBvdGVudGlhbFByb21vdGlvbnMucHVzaCguLi4oY2FydC5wb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9ucyB8fCBbXSkpO1xuXG4gICAgY29uc3QgYXBwbGllZFByb21vdGlvbnMgPSBbXTtcbiAgICBhcHBsaWVkUHJvbW90aW9ucy5wdXNoKC4uLihjYXJ0LmFwcGxpZWRPcmRlclByb21vdGlvbnMgfHwgW10pKTtcbiAgICBhcHBsaWVkUHJvbW90aW9ucy5wdXNoKC4uLihjYXJ0LmFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucyB8fCBbXSkpO1xuXG4gICAgcmV0dXJuIFsuLi5wb3RlbnRpYWxQcm9tb3Rpb25zLCAuLi5hcHBsaWVkUHJvbW90aW9uc107XG4gIH1cblxuICBzYXZlRm9yTGF0ZXIoaXRlbTogSXRlbSkge1xuICAgIGlmICh0aGlzLmxvZ2dlZEluKSB7XG4gICAgICB0aGlzLmNhcnRTZXJ2aWNlLnJlbW92ZUVudHJ5KGl0ZW0pO1xuICAgICAgdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZS5hZGRFbnRyeShpdGVtLnByb2R1Y3QuY29kZSwgaXRlbS5xdWFudGl0eSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnbG9naW4nIH0pO1xuICAgIH1cbiAgfVxufVxuIl19