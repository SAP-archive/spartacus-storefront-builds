/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CartService } from '@spartacus/core';
import { filter } from 'rxjs/operators';
var CartDetailsComponent = /** @class */ (function () {
    function CartDetailsComponent(cartService) {
        this.cartService = cartService;
    }
    /**
     * @return {?}
     */
    CartDetailsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.cart$ = this.cartService.getActive();
        this.entries$ = this.cartService
            .getEntries()
            .pipe(filter(function (entries) { return entries.length > 0; }));
        this.cartLoaded$ = this.cartService.getLoaded();
    };
    /**
     * @param {?} cart
     * @return {?}
     */
    CartDetailsComponent.prototype.getAllPromotionsForCart = /**
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        /** @type {?} */
        var potentialPromotions = cart.potentialOrderPromotions || [];
        /** @type {?} */
        var appliedPromotions = cart.appliedOrderPromotions || [];
        return tslib_1.__spread(potentialPromotions, appliedPromotions);
    };
    CartDetailsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-cart-details',
                    template: "<ng-container *ngIf=\"(cart$ | async) as cart\">\n  <ng-container *ngIf=\"(entries$ | async) as entries\">\n    <div class=\"cart-details-wrapper\">\n      <h1>\n        {{ 'cartDetails.shoppingCart' | cxTranslate }} ({{\n          'cartDetails.id' | cxTranslate\n        }}\n        {{ cart?.code }})\n      </h1>\n      <div class=\"cx-total\">\n        {{\n          'cartItems.cartTotal'\n            | cxTranslate: { count: cart.deliveryItemsQuantity }\n        }}:\n        {{ cart.totalPrice?.formattedValue }}\n      </div>\n      <cx-promotions\n        [promotions]=\"getAllPromotionsForCart(cart)\"\n      ></cx-promotions>\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [potentialProductPromotions]=\"cart.potentialProductPromotions\"\n        [cartIsLoading]=\"!(cartLoaded$ | async)\"\n      ></cx-cart-item-list>\n      <!-- NOT FOR MVP  <cx-cart-coupon></cx-cart-coupon> -->\n    </div>\n  </ng-container>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/:host{display:block}.cart-details-wrapper{padding:2rem 1rem}.cx-total{font-size:var(--cx-font-size,1.125rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);margin:var(--cx-margin,0 0 1rem)}.cx-promotions{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222);color:var(--cx-color,var(--cx-g-color-success));padding:var(--cx-padding,.5rem 0)}"]
                }] }
    ];
    /** @nocollapse */
    CartDetailsComponent.ctorParameters = function () { return [
        { type: CartService }
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
    /**
     * @type {?}
     * @protected
     */
    CartDetailsComponent.prototype.cartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NoZWNrb3V0L2NhcnQvY2FydC1kZXRhaWxzL2NhcnQtZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRTNFLE9BQU8sRUFBRSxXQUFXLEVBQW9CLE1BQU0saUJBQWlCLENBQUM7QUFHaEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhDO0lBV0UsOEJBQXNCLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQzs7OztJQUVsRCx1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVzthQUM3QixVQUFVLEVBQUU7YUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVELHNEQUF1Qjs7OztJQUF2QixVQUF3QixJQUFVOztZQUMxQixtQkFBbUIsR0FBRyxJQUFJLENBQUMsd0JBQXdCLElBQUksRUFBRTs7WUFDekQsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixJQUFJLEVBQUU7UUFDM0Qsd0JBQVcsbUJBQW1CLEVBQUssaUJBQWlCLEVBQUU7SUFDeEQsQ0FBQzs7Z0JBekJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQix5OEJBQTRDO29CQUU1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQVZRLFdBQVc7O0lBK0JwQiwyQkFBQztDQUFBLEFBMUJELElBMEJDO1NBcEJZLG9CQUFvQjs7O0lBQy9CLHFDQUF3Qjs7SUFDeEIsd0NBQW1DOztJQUNuQywyQ0FBaUM7Ozs7O0lBRXJCLDJDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDYXJ0U2VydmljZSwgQ2FydCwgT3JkZXJFbnRyeSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2FydC1kZXRhaWxzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcnQtZGV0YWlscy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhcnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydERldGFpbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgZW50cmllcyQ6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPjtcbiAgY2FydExvYWRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNhcnQkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKTtcbiAgICB0aGlzLmVudHJpZXMkID0gdGhpcy5jYXJ0U2VydmljZVxuICAgICAgLmdldEVudHJpZXMoKVxuICAgICAgLnBpcGUoZmlsdGVyKGVudHJpZXMgPT4gZW50cmllcy5sZW5ndGggPiAwKSk7XG4gICAgdGhpcy5jYXJ0TG9hZGVkJCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0TG9hZGVkKCk7XG4gIH1cblxuICBnZXRBbGxQcm9tb3Rpb25zRm9yQ2FydChjYXJ0OiBDYXJ0KTogQ2FydFtdIHtcbiAgICBjb25zdCBwb3RlbnRpYWxQcm9tb3Rpb25zID0gY2FydC5wb3RlbnRpYWxPcmRlclByb21vdGlvbnMgfHwgW107XG4gICAgY29uc3QgYXBwbGllZFByb21vdGlvbnMgPSBjYXJ0LmFwcGxpZWRPcmRlclByb21vdGlvbnMgfHwgW107XG4gICAgcmV0dXJuIFsuLi5wb3RlbnRpYWxQcm9tb3Rpb25zLCAuLi5hcHBsaWVkUHJvbW90aW9uc107XG4gIH1cbn1cbiJdfQ==