/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartService, SelectiveCartService, AuthService, RoutingService, FeatureConfigService, PromotionLocation, } from '@spartacus/core';
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
                    template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <ng-container *ngIf=\"entries$ | async as entries\">\n    <div *ngIf=\"cart.totalItems > 0\" class=\"cart-details-wrapper\">\n      <div class=\"cx-total\">\n        {{ 'cartDetails.cartName' | cxTranslate: { code: cart.code } }}\n      </div>\n\n      <ng-container *cxFeatureLevel=\"'!1.5'\">\n        <cx-promotions\n          [promotions]=\"getAllPromotionsForCart(cart)\"\n        ></cx-promotions>\n\n        <cx-cart-item-list\n          [items]=\"entries\"\n          [cartIsLoading]=\"!(cartLoaded$ | async)\"\n          [potentialProductPromotions]=\"cart.potentialProductPromotions\"\n        ></cx-cart-item-list>\n      </ng-container>\n\n      <ng-container *cxFeatureLevel=\"'1.5'\">\n        <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n          <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n        </ng-container>\n\n        <cx-cart-item-list\n          [items]=\"entries\"\n          [cartIsLoading]=\"!(cartLoaded$ | async)\"\n          [promotionLocation]=\"promotionLocation\"\n          [options]=\"{\n            isSaveForLater: false,\n            optionalBtn: isSaveForLaterEnabled() ? saveForLaterBtn : null\n          }\"\n        ></cx-cart-item-list>\n      </ng-container>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template let-ctx #saveForLaterBtn>\n  <div class=\"col-md-3 col-lg-3 col-xl-3 cx-sfl-btn\">\n    <button\n      class=\"link\"\n      [disabled]=\"ctx.loading\"\n      (click)=\"saveForLater(ctx.item)\"\n    >\n      {{ 'saveForLaterItems.saveForLater' | cxTranslate }}\n    </button>\n  </div>\n</ng-template>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NhcnQvY2FydC1kZXRhaWxzL2NhcnQtZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzNFLE9BQU8sRUFFTCxXQUFXLEVBRVgsb0JBQW9CLEVBQ3BCLFdBQVcsRUFDWCxjQUFjLEVBQ2Qsb0JBQW9CLEVBRXBCLGlCQUFpQixHQUNsQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0RBQXNELENBQUM7QUFFeEY7SUE4QkUsOEJBQ1ksV0FBd0IsRUFDeEIsZ0JBQW1DLEVBQ25DLG9CQUEyQyxFQUM3QyxXQUF5QixFQUN6QixjQUErQixFQUMvQixhQUFvQztRQUxsQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW1CO1FBQ25DLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBdUI7UUFDN0MsZ0JBQVcsR0FBWCxXQUFXLENBQWM7UUFDekIsbUJBQWMsR0FBZCxjQUFjLENBQWlCO1FBQy9CLGtCQUFhLEdBQWIsYUFBYSxDQUF1QjtRQTNCOUMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixzQkFBaUIsR0FBc0IsaUJBQWlCLENBQUMsVUFBVSxDQUFDO0lBMEJqRSxDQUFDOzs7O0lBRUosdUNBQVE7OztJQUFSO1FBQUEsaUJBNkJDO1FBNUJDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxD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QU07WUFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1NBQzlDO0lBQ0gsQ0FBQzs7Z0JBdkdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixncERBQTRDO29CQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBbEJDLFdBQVc7Z0JBWUosZ0JBQWdCO2dCQVZ2QixvQkFBb0I7Z0JBQ3BCLFdBQVc7Z0JBQ1gsY0FBYztnQkFDZCxvQkFBb0I7O0lBaUh0QiwyQkFBQztDQUFBLEFBeEdELElBd0dDO1NBbkdZLG9CQUFvQjs7O0lBQy9CLHFDQUF3Qjs7SUFDeEIsd0NBQW1DOztJQUNuQywyQ0FBaUM7O0lBQ2pDLHdDQUFpQjs7SUFDakIsZ0RBQWdEOztJQUNoRCxpREFBb0U7Ozs7O0lBb0JsRSwyQ0FBa0M7Ozs7O0lBQ2xDLGdEQUE2Qzs7Ozs7SUFDN0Msb0RBQXFEOzs7OztJQUNyRCwyQ0FBaUM7Ozs7O0lBQ2pDLDhDQUF1Qzs7Ozs7SUFDdkMsNkNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDYXJ0LFxuICBDYXJ0U2VydmljZSxcbiAgT3JkZXJFbnRyeSxcbiAgU2VsZWN0aXZlQ2FydFNlcnZpY2UsXG4gIEF1dGhTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgRmVhdHVyZUNvbmZpZ1NlcnZpY2UsXG4gIFByb21vdGlvblJlc3VsdCxcbiAgUHJvbW90aW9uTG9jYXRpb24sXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSXRlbSB9IGZyb20gJy4uL2NhcnQtc2hhcmVkL2NhcnQtaXRlbS9jYXJ0LWl0ZW0uY29tcG9uZW50JztcbmltcG9ydCB7IFByb21vdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvcHJvbW90aW9uL3Byb21vdGlvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2FydC1kZXRhaWxzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcnQtZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0RGV0YWlsc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICBlbnRyaWVzJDogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+O1xuICBjYXJ0TG9hZGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgbG9nZ2VkSW4gPSBmYWxzZTtcbiAgb3JkZXJQcm9tb3Rpb25zJDogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT47XG4gIHByb21vdGlvbkxvY2F0aW9uOiBQcm9tb3Rpb25Mb2NhdGlvbiA9IFByb21vdGlvbkxvY2F0aW9uLkFjdGl2ZUNhcnQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1bmlmaWVkLXNpZ25hdHVyZXNcbiAgICBwcm9tb3Rpb25TZXJ2aWNlOiBQcm9tb3Rpb25TZXJ2aWNlLFxuICAgIHNlbGVjdGl2ZUNhcnRTZXJ2aWNlOiBTZWxlY3RpdmVDYXJ0U2VydmljZSxcbiAgICBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIGZlYXR1cmVDb25maWc6IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuNVxuICAgKiBVc2UgcHJvbW90aW9uU2VydmljZSBpbnN0ZWFkIG9mIHRoZSBwcm9tb3Rpb24gaW5wdXRzLlxuICAgKiBSZW1vdmUgaXNzdWU6ICM1NjcwXG4gICAqL1xuICBjb25zdHJ1Y3RvcihjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb21vdGlvblNlcnZpY2U/OiBQcm9tb3Rpb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBzZWxlY3RpdmVDYXJ0U2VydmljZT86IFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U/OiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlPzogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBmZWF0dXJlQ29uZmlnPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2FydCQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpO1xuXG4gICAgdGhpcy5lbnRyaWVzJCA9IHRoaXMuY2FydFNlcnZpY2VcbiAgICAgIC5nZXRFbnRyaWVzKClcbiAgICAgIC5waXBlKGZpbHRlcihlbnRyaWVzID0+IGVudHJpZXMubGVuZ3RoID4gMCkpO1xuXG4gICAgaWYgKHRoaXMuaXNTYXZlRm9yTGF0ZXJFbmFibGVkKCkpIHtcbiAgICAgIHRoaXMuY2FydExvYWRlZCQgPSBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgdGhpcy5jYXJ0U2VydmljZS5nZXRMb2FkZWQoKSxcbiAgICAgICAgdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZS5nZXRMb2FkZWQoKSxcbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5pc1VzZXJMb2dnZWRJbigpLFxuICAgICAgXSkucGlwZShcbiAgICAgICAgdGFwKChbLCAsIGxvZ2dlZEluXSkgPT4gKHRoaXMubG9nZ2VkSW4gPSBsb2dnZWRJbikpLFxuICAgICAgICBtYXAoKFtjYXJ0TG9hZGVkLCBzZmxMb2FkZWQsIGxvZ2dlZEluXSkgPT5cbiAgICAgICAgICBsb2dnZWRJbiA/IGNhcnRMb2FkZWQgJiYgc2ZsTG9hZGVkIDogY2FydExvYWRlZFxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgICAvL1RPRE8gcmVtb3ZlIGZvciAjNTk1OFxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5jYXJ0TG9hZGVkJCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0TG9hZGVkKCk7XG4gICAgfVxuICAgIC8vVE9ETyAgcmVtb3ZlIGZvciAjNTk1OCBlbmRcbiAgICBpZiAodGhpcy5wcm9tb3Rpb25TZXJ2aWNlKSB7XG4gICAgICB0aGlzLm9yZGVyUHJvbW90aW9ucyQgPSB0aGlzLnByb21vdGlvblNlcnZpY2UuZ2V0T3JkZXJQcm9tb3Rpb25zKFxuICAgICAgICB0aGlzLnByb21vdGlvbkxvY2F0aW9uXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8vVE9ETyByZW1vdmUgZmVhdHVyZSBmbGFnIGZvciAjNTk1OFxuICBpc1NhdmVGb3JMYXRlckVuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuZmVhdHVyZUNvbmZpZykge1xuICAgICAgcmV0dXJuIHRoaXMuZmVhdHVyZUNvbmZpZy5pc0VuYWJsZWQoJ3NhdmVGb3JMYXRlcicpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy9UT0RPIHJlbW92ZSBmZWF0dXJlIGZsYWcgZm9yICM1OTU4IGVuZFxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjVcbiAgICogVXNlIHByb21vdGlvblNlcnZpY2UgaW5zdGVhZCBvZiB0aGUgcHJvbW90aW9uIGlucHV0cy5cbiAgICogUmVtb3ZlIGlzc3VlOiAjNTY3MFxuICAgKi9cbiAgZ2V0QWxsUHJvbW90aW9uc0ZvckNhcnQoY2FydDogQ2FydCk6IGFueVtdIHtcbiAgICBjb25zdCBwb3RlbnRpYWxQcm9tb3Rpb25zID0gW107XG4gICAgcG90ZW50aWFsUHJvbW90aW9ucy5wdXNoKC4uLihjYXJ0LnBvdGVudGlhbE9yZGVyUHJvbW90aW9ucyB8fCBbXSkpO1xuICAgIHBvdGVudGlhbFByb21vdGlvbnMucHVzaCguLi4oY2FydC5wb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9ucyB8fCBbXSkpO1xuXG4gICAgY29uc3QgYXBwbGllZFByb21vdGlvbnMgPSBbXTtcbiAgICBhcHBsaWVkUHJvbW90aW9ucy5wdXNoKC4uLihjYXJ0LmFwcGxpZWRPcmRlclByb21vdGlvbnMgfHwgW10pKTtcbiAgICBhcHBsaWVkUHJvbW90aW9ucy5wdXNoKC4uLihjYXJ0LmFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucyB8fCBbXSkpO1xuXG4gICAgcmV0dXJuIFsuLi5wb3RlbnRpYWxQcm9tb3Rpb25zLCAuLi5hcHBsaWVkUHJvbW90aW9uc107XG4gIH1cblxuICBzYXZlRm9yTGF0ZXIoaXRlbTogSXRlbSkge1xuICAgIGlmICh0aGlzLmxvZ2dlZEluKSB7XG4gICAgICB0aGlzLmNhcnRTZXJ2aWNlLnJlbW92ZUVudHJ5KGl0ZW0pO1xuICAgICAgdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZS5hZGRFbnRyeShpdGVtLnByb2R1Y3QuY29kZSwgaXRlbS5xdWFudGl0eSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnbG9naW4nIH0pO1xuICAgIH1cbiAgfVxufVxuIl19