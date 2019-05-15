/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { skipWhile, map, switchMap } from 'rxjs/operators';
import { CartService, RoutingService } from '@spartacus/core';
var CartNotEmptyGuard = /** @class */ (function () {
    function CartNotEmptyGuard(cartService, routingService) {
        this.cartService = cartService;
        this.routingService = routingService;
    }
    /**
     * @return {?}
     */
    CartNotEmptyGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.cartService.getLoaded().pipe(skipWhile(function (loaded) { return !loaded; }), switchMap(function () { return _this.cartService.getActive(); }), map(function (cart) {
            if (_this.cartService.isEmpty(cart)) {
                _this.routingService.go({ cxRoute: 'home' });
                return false;
            }
            return true;
        }));
    };
    CartNotEmptyGuard.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CartNotEmptyGuard.ctorParameters = function () { return [
        { type: CartService },
        { type: RoutingService }
    ]; };
    return CartNotEmptyGuard;
}());
export { CartNotEmptyGuard };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CartNotEmptyGuard.prototype.cartService;
    /**
     * @type {?}
     * @private
     */
    CartNotEmptyGuard.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1ub3QtZW1wdHkuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvdWkvcGFnZXMvZ3VhcmRzL2NhcnQtbm90LWVtcHR5Lmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNELE9BQU8sRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFOUQ7SUFFRSwyQkFDVSxXQUF3QixFQUN4QixjQUE4QjtRQUQ5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDckMsQ0FBQzs7OztJQUVKLHVDQUFXOzs7SUFBWDtRQUFBLGlCQVlDO1FBWEMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FDdEMsU0FBUyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsQ0FBQyxNQUFNLEVBQVAsQ0FBTyxDQUFDLEVBQzVCLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsRUFBNUIsQ0FBNEIsQ0FBQyxFQUM3QyxHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ04sSUFBSSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDbEMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztnQkFDNUMsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQW5CRixVQUFVOzs7O2dCQUZGLFdBQVc7Z0JBQUUsY0FBYzs7SUFzQnBDLHdCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FuQlksaUJBQWlCOzs7Ozs7SUFFMUIsd0NBQWdDOzs7OztJQUNoQywyQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHNraXBXaGlsZSwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IENhcnRTZXJ2aWNlLCBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJ0Tm90RW1wdHlHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmNhcnRTZXJ2aWNlLmdldExvYWRlZCgpLnBpcGUoXG4gICAgICBza2lwV2hpbGUobG9hZGVkID0+ICFsb2FkZWQpLFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuY2FydFNlcnZpY2UuZ2V0QWN0aXZlKCkpLFxuICAgICAgbWFwKGNhcnQgPT4ge1xuICAgICAgICBpZiAodGhpcy5jYXJ0U2VydmljZS5pc0VtcHR5KGNhcnQpKSB7XG4gICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdob21lJyB9KTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==