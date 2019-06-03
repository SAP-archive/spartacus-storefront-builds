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
                    template: "<ng-container *ngIf=\"(cart$ | async) as cart\">\n  <ng-container *ngIf=\"(entries$ | async) as entries\">\n    <div class=\"cart-details-wrapper\">\n      <div class=\"cx-total\">\n        {{\n          'cartItems.cartTotal'\n            | cxTranslate: { count: cart.deliveryItemsQuantity }\n        }}:\n        {{ cart.totalPrice?.formattedValue }}\n      </div>\n      <cx-promotions\n        [promotions]=\"getAllPromotionsForCart(cart)\"\n      ></cx-promotions>\n      <cx-cart-item-list\n        [items]=\"entries\"\n        [potentialProductPromotions]=\"cart.potentialProductPromotions\"\n        [cartIsLoading]=\"!(cartLoaded$ | async)\"\n      ></cx-cart-item-list>\n      <!-- NOT FOR MVP  <cx-cart-coupon></cx-cart-coupon> -->\n    </div>\n  </ng-container>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1kZXRhaWxzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NhcnQvY2FydC1kZXRhaWxzL2NhcnQtZGV0YWlscy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBRTNFLE9BQU8sRUFBRSxXQUFXLEVBQW9CLE1BQU0saUJBQWlCLENBQUM7QUFHaEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhDO0lBVUUsOEJBQXNCLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQUcsQ0FBQzs7OztJQUVsRCx1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDMUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVzthQUM3QixVQUFVLEVBQUU7YUFDWixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUEsT0FBTyxJQUFJLE9BQUEsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQWxCLENBQWtCLENBQUMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVELHNEQUF1Qjs7OztJQUF2QixVQUF3QixJQUFVOztZQUMxQixtQkFBbUIsR0FBRyxJQUFJLENBQUMsd0JBQXdCLElBQUksRUFBRTs7WUFDekQsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixJQUFJLEVBQUU7UUFDM0Qsd0JBQVcsbUJBQW1CLEVBQUssaUJBQWlCLEVBQUU7SUFDeEQsQ0FBQzs7Z0JBeEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixteUJBQTRDO29CQUM1QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBVFEsV0FBVzs7SUE4QnBCLDJCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0FwQlksb0JBQW9COzs7SUFDL0IscUNBQXdCOztJQUN4Qix3Q0FBbUM7O0lBQ25DLDJDQUFpQzs7Ozs7SUFFckIsMkNBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENhcnRTZXJ2aWNlLCBDYXJ0LCBPcmRlckVudHJ5IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jYXJ0LWRldGFpbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FydC1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENhcnREZXRhaWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG4gIGVudHJpZXMkOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT47XG4gIGNhcnRMb2FkZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jYXJ0JCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0QWN0aXZlKCk7XG4gICAgdGhpcy5lbnRyaWVzJCA9IHRoaXMuY2FydFNlcnZpY2VcbiAgICAgIC5nZXRFbnRyaWVzKClcbiAgICAgIC5waXBlKGZpbHRlcihlbnRyaWVzID0+IGVudHJpZXMubGVuZ3RoID4gMCkpO1xuICAgIHRoaXMuY2FydExvYWRlZCQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldExvYWRlZCgpO1xuICB9XG5cbiAgZ2V0QWxsUHJvbW90aW9uc0ZvckNhcnQoY2FydDogQ2FydCk6IENhcnRbXSB7XG4gICAgY29uc3QgcG90ZW50aWFsUHJvbW90aW9ucyA9IGNhcnQucG90ZW50aWFsT3JkZXJQcm9tb3Rpb25zIHx8IFtdO1xuICAgIGNvbnN0IGFwcGxpZWRQcm9tb3Rpb25zID0gY2FydC5hcHBsaWVkT3JkZXJQcm9tb3Rpb25zIHx8IFtdO1xuICAgIHJldHVybiBbLi4ucG90ZW50aWFsUHJvbW90aW9ucywgLi4uYXBwbGllZFByb21vdGlvbnNdO1xuICB9XG59XG4iXX0=