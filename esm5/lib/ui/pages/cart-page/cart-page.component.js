/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { CartService } from '@spartacus/core';
var CartPageComponent = /** @class */ (function () {
    function CartPageComponent(cartService) {
        this.cartService = cartService;
    }
    /**
     * @return {?}
     */
    CartPageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.cart$ = this.cartService.getActive();
    };
    CartPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-cart-page',
                    template: "<cx-page-layout [class.empty]=\"!(cart$ | async).totalItems\"></cx-page-layout>\n"
                }] }
    ];
    /** @nocollapse */
    CartPageComponent.ctorParameters = function () { return [
        { type: CartService }
    ]; };
    return CartPageComponent;
}());
export { CartPageComponent };
if (false) {
    /** @type {?} */
    CartPageComponent.prototype.cart$;
    /**
     * @type {?}
     * @protected
     */
    CartPageComponent.prototype.cartService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi91aS9wYWdlcy9jYXJ0LXBhZ2UvY2FydC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQVUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFdEQ7SUFPRSwyQkFBc0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDOzs7O0lBRWxELG9DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM1QyxDQUFDOztnQkFYRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLDZGQUF5QztpQkFDMUM7Ozs7Z0JBTGdCLFdBQVc7O0lBYzVCLHdCQUFDO0NBQUEsQUFaRCxJQVlDO1NBUlksaUJBQWlCOzs7SUFDNUIsa0NBQTBCOzs7OztJQUVkLHdDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBVSUNhcnQsIENhcnRTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2FydC1wYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcnQtcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY2FydCQ6IE9ic2VydmFibGU8VUlDYXJ0PjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2FydCQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpO1xuICB9XG59XG4iXX0=