import { __decorate, __read, __spread } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthService, Cart, CartService, FeatureConfigService, OrderEntry, PromotionLocation, PromotionResult, RoutingService, SelectiveCartService, } from '@spartacus/core';
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
    CartDetailsComponent.prototype.ngOnInit = function () {
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
            .pipe(filter(function (entries) { return entries.length > 0; }));
        if (this.isSaveForLaterEnabled()) {
            this.cartLoaded$ = combineLatest([
                this.cartService.getLoaded(),
                this.selectiveCartService.getLoaded(),
                this.authService.isUserLoggedIn(),
            ]).pipe(tap(function (_a) {
                var _b = __read(_a, 3), loggedIn = _b[2];
                return (_this.loggedIn = loggedIn);
            }), map(function (_a) {
                var _b = __read(_a, 3), cartLoaded = _b[0], sflLoaded = _b[1], loggedIn = _b[2];
                return loggedIn ? cartLoaded && sflLoaded : cartLoaded;
            }));
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
    CartDetailsComponent.prototype.isSaveForLaterEnabled = function () {
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
    CartDetailsComponent.prototype.getAllPromotionsForCart = function (cart) {
        var potentialPromotions = [];
        potentialPromotions.push.apply(potentialPromotions, __spread((cart.potentialOrderPromotions || [])));
        potentialPromotions.push.apply(potentialPromotions, __spread((cart.potentialProductPromotions || [])));
        var appliedPromotions = [];
        appliedPromotions.push.apply(appliedPromotions, __spread((cart.appliedOrderPromotions || [])));
        appliedPromotions.push.apply(appliedPromotions, __spread((cart.appliedProductPromotions || [])));
        return __spread(potentialPromotions, appliedPromotions);
    };
    CartDetailsComponent.prototype.saveForLater = function (item) {
        if (this.loggedIn) {
            this.cartService.removeEntry(item);
            this.selectiveCartService.addEntry(item.product.code, item.quantity);
        }
        else {
            this.routingService.go({ cxRoute: 'login' });
        }
    };
    CartDetailsComponent.ctorParameters = function () { return [
        { type: CartService },
        { type: PromotionService },
        { type: SelectiveCartService },
        { type: AuthService },
        { type: RoutingService },
        { type: FeatureConfigService }
    ]; };
    CartDetailsComponent = __decorate([
        Component({
            selector: 'cx-cart-details',
            template: "<ng-container *ngIf=\"cart$ | async as cart\">\n  <ng-container *ngIf=\"entries$ | async as entries\">\n    <div *ngIf=\"cart.totalItems > 0\" class=\"cart-details-wrapper\">\n      <div class=\"cx-total\">\n        {{ 'cartDetails.cartName' | cxTranslate: { code: cart.code } }}\n      </div>\n\n      <ng-container *cxFeatureLevel=\"'!1.5'\">\n        <cx-promotions [promotions]=\"promotions$ | async\"></cx-promotions>\n\n        <cx-cart-item-list\n          [items]=\"entries\"\n          [cartIsLoading]=\"!(cartLoaded$ | async)\"\n          [potentialProductPromotions]=\"cart.potentialProductPromotions\"\n        ></cx-cart-item-list>\n      </ng-container>\n\n      <ng-container *cxFeatureLevel=\"'1.5'\">\n        <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n          <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n        </ng-container>\n\n        <cx-cart-item-list\n          [items]=\"entries\"\n          [cartIsLoading]=\"!(cartLoaded$ | async)\"\n          [promotionLocation]=\"promotionLocation\"\n          [options]=\"{\n            isSaveForLater: false,\n            optionalBtn: isSaveForLaterEnabled() ? saveForLaterBtn : null\n          }\"\n        ></cx-cart-item-list>\n      </ng-container>\n    </div>\n  </ng-container>\n</ng-container>\n\n<ng-template let-ctx #saveForLaterBtn>\n  <div class=\"col-md-3 col-lg-3 col-xl-3 cx-sfl-btn\">\n    <button\n      class=\"link\"\n      [disabled]=\"ctx.loading\"\n      (click)=\"saveForLater(ctx.item)\"\n      type=\"button\"\n    >\n      {{ 'saveForLaterItems.saveForLater' | cxTranslate }}\n    </button>\n  </div>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], CartDetailsComponent);
    return CartDetailsComponent;
}());
export { CartDetailsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NhcnQvY2FydC1kZXRhaWxzL2NhcnQtZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUNMLFdBQVcsRUFDWCxJQUFJLEVBQ0osV0FBVyxFQUNYLG9CQUFvQixFQUNwQixVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDZixjQUFjLEVBQ2Qsb0JBQW9CLEdBQ3JCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQVF4RjtJQTBCRSw4QkFDWSxXQUF3QixFQUN4QixnQkFBbUMsRUFDbkMsb0JBQTJDLEVBQzdDLFdBQXlCLEVBQ3pCLGNBQStCLEVBQy9CLGFBQW9DO1FBTGxDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBbUI7UUFDbkMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUF1QjtRQUM3QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYztRQUN6QixtQkFBYyxHQUFkLGNBQWMsQ0FBaUI7UUFDL0Isa0JBQWEsR0FBYixhQUFhLENBQXVCO1FBNUI5QyxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLHNCQUFpQixHQUFzQixpQkFBaUIsQ0FBQyxVQUFVLENBQUM7SUEyQmpFLENBQUM7SUFFSix1Q0FBUSxHQUFSO1FBQUEsaUJBcUNDO1FBcENDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUUxQzs7O1dBR0c7UUFDSCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1NBQ3ZFO1FBRUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVzthQUM3QixVQUFVLEVBQUU7YUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQyxDQUFDO1FBRS9DLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUM7Z0JBQy9CLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO2dCQUM1QixJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsRUFBRTthQUNsQyxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUcsQ0FBQyxVQUFDLEVBQWM7b0JBQWQsa0JBQWMsRUFBVCxnQkFBUTtnQkFBTSxPQUFBLENBQUMsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFBMUIsQ0FBMEIsQ0FBQyxFQUNuRCxHQUFHLENBQUMsVUFBQyxFQUFpQztvQkFBakMsa0JBQWlDLEVBQWhDLGtCQUFVLEVBQUUsaUJBQVMsRUFBRSxnQkFBUTtnQkFDbkMsT0FBQSxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVU7WUFBL0MsQ0FBK0MsQ0FDaEQsQ0FDRixDQUFDO1NBQ0g7UUFDRCx1QkFBdUI7YUFDbEI7WUFDSCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDakQ7UUFDRCw0QkFBNEI7UUFDNUIsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FDOUQsSUFBSSxDQUFDLGlCQUFpQixDQUN2QixDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQsb0NBQW9DO0lBQ3BDLG9EQUFxQixHQUFyQjtRQUNFLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0Qsd0NBQXdDO0lBRXhDOzs7O09BSUc7SUFDSCxzREFBdUIsR0FBdkIsVUFBd0IsSUFBVTtRQUNoQyxJQUFNLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztRQUMvQixtQkFBbUIsQ0FBQyxJQUFJLE9BQXhCLG1CQUFtQixXQUFTLENBQUMsSUFBSSxDQUFDLHdCQUF3QixJQUFJLEVBQUUsQ0FBQyxHQUFFO1FBQ25FLG1CQUFtQixDQUFDLElBQUksT0FBeEIsbUJBQW1CLFdBQVMsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLElBQUksRUFBRSxDQUFDLEdBQUU7UUFFckUsSUFBTSxpQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDN0IsaUJBQWlCLENBQUMsSUFBSSxPQUF0QixpQkFBaUIsV0FBUyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsSUFBSSxFQUFFLENBQUMsR0FBRTtRQUMvRCxpQkFBaUIsQ0FBQyxJQUFJLE9BQXRCLGlCQUFpQixXQUFTLENBQUMsSUFBSSxDQUFDLHdCQUF3QixJQUFJLEVBQUUsQ0FBQyxHQUFFO1FBRWpFLGdCQUFXLG1CQUFtQixFQUFLLGlCQUFpQixFQUFFO0lBQ3hELENBQUM7SUFFRCwyQ0FBWSxHQUFaLFVBQWEsSUFBVTtRQUNyQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEU7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDOztnQkFoRndCLFdBQVc7Z0JBQ0wsZ0JBQWdCO2dCQUNaLG9CQUFvQjtnQkFDL0IsV0FBVztnQkFDUixjQUFjO2dCQUNmLG9CQUFvQjs7SUFoQ25DLG9CQUFvQjtRQUxoQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLHdvREFBNEM7WUFDNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztPQUNXLG9CQUFvQixDQTRHaEM7SUFBRCwyQkFBQztDQUFBLEFBNUdELElBNEdDO1NBNUdZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQXV0aFNlcnZpY2UsXG4gIENhcnQsXG4gIENhcnRTZXJ2aWNlLFxuICBGZWF0dXJlQ29uZmlnU2VydmljZSxcbiAgT3JkZXJFbnRyeSxcbiAgUHJvbW90aW9uTG9jYXRpb24sXG4gIFByb21vdGlvblJlc3VsdCxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFByb21vdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvcHJvbW90aW9uL3Byb21vdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEl0ZW0gfSBmcm9tICcuLi9jYXJ0LXNoYXJlZC9jYXJ0LWl0ZW0vY2FydC1pdGVtLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhcnQtZGV0YWlscycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJ0LWRldGFpbHMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgZW50cmllcyQ6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPjtcbiAgY2FydExvYWRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGxvZ2dlZEluID0gZmFsc2U7XG4gIG9yZGVyUHJvbW90aW9ucyQ6IE9ic2VydmFibGU8UHJvbW90aW9uUmVzdWx0W10+O1xuICBwcm9tb3Rpb25Mb2NhdGlvbjogUHJvbW90aW9uTG9jYXRpb24gPSBQcm9tb3Rpb25Mb2NhdGlvbi5BY3RpdmVDYXJ0O1xuICBwcm9tb3Rpb25zJDogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1bmlmaWVkLXNpZ25hdHVyZXNcbiAgICBwcm9tb3Rpb25TZXJ2aWNlOiBQcm9tb3Rpb25TZXJ2aWNlLFxuICAgIHNlbGVjdGl2ZUNhcnRTZXJ2aWNlOiBTZWxlY3RpdmVDYXJ0U2VydmljZSxcbiAgICBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIGZlYXR1cmVDb25maWc6IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuNVxuICAgKiBVc2UgcHJvbW90aW9uU2VydmljZSBpbnN0ZWFkIG9mIHRoZSBwcm9tb3Rpb24gaW5wdXRzLlxuICAgKiBSZW1vdmUgaXNzdWU6ICM1NjcwXG4gICAqL1xuICBjb25zdHJ1Y3RvcihjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb21vdGlvblNlcnZpY2U/OiBQcm9tb3Rpb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBzZWxlY3RpdmVDYXJ0U2VydmljZT86IFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U/OiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlPzogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBmZWF0dXJlQ29uZmlnPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2FydCQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpO1xuXG4gICAgLyoqXG4gICAgICogVE9ETyBSZW1vdmUgdGhlIGNoZWNrIGZvciBwcm9tb3Rpb24gc2VydmljZVxuICAgICAqIElzc3VlOiBHSC01NjcwXG4gICAgICovXG4gICAgaWYgKHRoaXMucHJvbW90aW9uU2VydmljZSkge1xuICAgICAgdGhpcy5wcm9tb3Rpb25zJCA9IHRoaXMucHJvbW90aW9uU2VydmljZS5nZXRPcmRlclByb21vdGlvbnNGcm9tQ2FydCgpO1xuICAgIH1cblxuICAgIHRoaXMuZW50cmllcyQgPSB0aGlzLmNhcnRTZXJ2aWNlXG4gICAgICAuZ2V0RW50cmllcygpXG4gICAgICAucGlwZShmaWx0ZXIoZW50cmllcyA9PiBlbnRyaWVzLmxlbmd0aCA+IDApKTtcblxuICAgIGlmICh0aGlzLmlzU2F2ZUZvckxhdGVyRW5hYmxlZCgpKSB7XG4gICAgICB0aGlzLmNhcnRMb2FkZWQkID0gY29tYmluZUxhdGVzdChbXG4gICAgICAgIHRoaXMuY2FydFNlcnZpY2UuZ2V0TG9hZGVkKCksXG4gICAgICAgIHRoaXMuc2VsZWN0aXZlQ2FydFNlcnZpY2UuZ2V0TG9hZGVkKCksXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKSxcbiAgICAgIF0pLnBpcGUoXG4gICAgICAgIHRhcCgoWywgLCBsb2dnZWRJbl0pID0+ICh0aGlzLmxvZ2dlZEluID0gbG9nZ2VkSW4pKSxcbiAgICAgICAgbWFwKChbY2FydExvYWRlZCwgc2ZsTG9hZGVkLCBsb2dnZWRJbl0pID0+XG4gICAgICAgICAgbG9nZ2VkSW4gPyBjYXJ0TG9hZGVkICYmIHNmbExvYWRlZCA6IGNhcnRMb2FkZWRcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gICAgLy9UT0RPIHJlbW92ZSBmb3IgIzU5NThcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuY2FydExvYWRlZCQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldExvYWRlZCgpO1xuICAgIH1cbiAgICAvL1RPRE8gIHJlbW92ZSBmb3IgIzU5NTggZW5kXG4gICAgaWYgKHRoaXMucHJvbW90aW9uU2VydmljZSkge1xuICAgICAgdGhpcy5vcmRlclByb21vdGlvbnMkID0gdGhpcy5wcm9tb3Rpb25TZXJ2aWNlLmdldE9yZGVyUHJvbW90aW9ucyhcbiAgICAgICAgdGhpcy5wcm9tb3Rpb25Mb2NhdGlvblxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvL1RPRE8gcmVtb3ZlIGZlYXR1cmUgZmxhZyBmb3IgIzU5NThcbiAgaXNTYXZlRm9yTGF0ZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmZlYXR1cmVDb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmZlYXR1cmVDb25maWcuaXNFbmFibGVkKCdzYXZlRm9yTGF0ZXInKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vVE9ETyByZW1vdmUgZmVhdHVyZSBmbGFnIGZvciAjNTk1OCBlbmRcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS41XG4gICAqIFVzZSBwcm9tb3Rpb25TZXJ2aWNlIGluc3RlYWQgb2YgdGhlIHByb21vdGlvbiBpbnB1dHMuXG4gICAqIFJlbW92ZSBpc3N1ZTogIzU2NzBcbiAgICovXG4gIGdldEFsbFByb21vdGlvbnNGb3JDYXJ0KGNhcnQ6IENhcnQpOiBhbnlbXSB7XG4gICAgY29uc3QgcG90ZW50aWFsUHJvbW90aW9ucyA9IFtdO1xuICAgIHBvdGVudGlhbFByb21vdGlvbnMucHVzaCguLi4oY2FydC5wb3RlbnRpYWxPcmRlclByb21vdGlvbnMgfHwgW10pKTtcbiAgICBwb3RlbnRpYWxQcm9tb3Rpb25zLnB1c2goLi4uKGNhcnQucG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnMgfHwgW10pKTtcblxuICAgIGNvbnN0IGFwcGxpZWRQcm9tb3Rpb25zID0gW107XG4gICAgYXBwbGllZFByb21vdGlvbnMucHVzaCguLi4oY2FydC5hcHBsaWVkT3JkZXJQcm9tb3Rpb25zIHx8IFtdKSk7XG4gICAgYXBwbGllZFByb21vdGlvbnMucHVzaCguLi4oY2FydC5hcHBsaWVkUHJvZHVjdFByb21vdGlvbnMgfHwgW10pKTtcblxuICAgIHJldHVybiBbLi4ucG90ZW50aWFsUHJvbW90aW9ucywgLi4uYXBwbGllZFByb21vdGlvbnNdO1xuICB9XG5cbiAgc2F2ZUZvckxhdGVyKGl0ZW06IEl0ZW0pIHtcbiAgICBpZiAodGhpcy5sb2dnZWRJbikge1xuICAgICAgdGhpcy5jYXJ0U2VydmljZS5yZW1vdmVFbnRyeShpdGVtKTtcbiAgICAgIHRoaXMuc2VsZWN0aXZlQ2FydFNlcnZpY2UuYWRkRW50cnkoaXRlbS5wcm9kdWN0LmNvZGUsIGl0ZW0ucXVhbnRpdHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ2xvZ2luJyB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==