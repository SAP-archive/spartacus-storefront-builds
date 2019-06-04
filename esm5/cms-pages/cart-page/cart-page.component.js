/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1wYWdlcy9jYXJ0LXBhZ2UvY2FydC1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQVEsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFcEQ7SUFPRSwyQkFBc0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDOzs7O0lBRWxELG9DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUM1QyxDQUFDOztnQkFYRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLDZGQUF5QztpQkFDMUM7Ozs7Z0JBTGMsV0FBVzs7SUFjMUIsd0JBQUM7Q0FBQSxBQVpELElBWUM7U0FSWSxpQkFBaUI7OztJQUM1QixrQ0FBd0I7Ozs7O0lBRVosd0NBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhcnQsIENhcnRTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2FydC1wYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcnQtcGFnZS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRQYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNhcnQkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKTtcbiAgfVxufVxuIl19