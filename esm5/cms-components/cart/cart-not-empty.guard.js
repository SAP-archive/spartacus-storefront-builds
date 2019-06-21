/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { skipWhile, map, switchMap } from 'rxjs/operators';
import { CartService, RoutingService } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
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
        return this.cartService.getLoaded().pipe(skipWhile((/**
         * @param {?} loaded
         * @return {?}
         */
        function (loaded) { return !loaded; })), switchMap((/**
         * @return {?}
         */
        function () { return _this.cartService.getActive(); })), map((/**
         * @param {?} cart
         * @return {?}
         */
        function (cart) {
            if (_this.cartService.isEmpty(cart)) {
                _this.routingService.go({ cxRoute: 'home' });
                return false;
            }
            return true;
        })));
    };
    CartNotEmptyGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CartNotEmptyGuard.ctorParameters = function () { return [
        { type: CartService },
        { type: RoutingService }
    ]; };
    /** @nocollapse */ CartNotEmptyGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CartNotEmptyGuard_Factory() { return new CartNotEmptyGuard(i0.ɵɵinject(i1.CartService), i0.ɵɵinject(i1.RoutingService)); }, token: CartNotEmptyGuard, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1ub3QtZW1wdHkuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jYXJ0L2NhcnQtbm90LWVtcHR5Lmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNELE9BQU8sRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQUU5RDtJQUlFLDJCQUNVLFdBQXdCLEVBQ3hCLGNBQThCO1FBRDlCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNyQyxDQUFDOzs7O0lBRUosdUNBQVc7OztJQUFYO1FBQUEsaUJBWUM7UUFYQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUN0QyxTQUFTOzs7O1FBQUMsVUFBQSxNQUFNLElBQUksT0FBQSxDQUFDLE1BQU0sRUFBUCxDQUFPLEVBQUMsRUFDNUIsU0FBUzs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLEVBQTVCLENBQTRCLEVBQUMsRUFDN0MsR0FBRzs7OztRQUFDLFVBQUEsSUFBSTtZQUNOLElBQUksS0FBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2xDLEtBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7Z0JBQzVDLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxPQUFPLElBQUksQ0FBQztRQUNkLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkFyQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxXQUFXO2dCQUFFLGNBQWM7Ozs0QkFOcEM7Q0E4QkMsQUF0QkQsSUFzQkM7U0FuQlksaUJBQWlCOzs7Ozs7SUFFMUIsd0NBQWdDOzs7OztJQUNoQywyQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHNraXBXaGlsZSwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IENhcnRTZXJ2aWNlLCBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0Tm90RW1wdHlHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmNhcnRTZXJ2aWNlLmdldExvYWRlZCgpLnBpcGUoXG4gICAgICBza2lwV2hpbGUobG9hZGVkID0+ICFsb2FkZWQpLFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMuY2FydFNlcnZpY2UuZ2V0QWN0aXZlKCkpLFxuICAgICAgbWFwKGNhcnQgPT4ge1xuICAgICAgICBpZiAodGhpcy5jYXJ0U2VydmljZS5pc0VtcHR5KGNhcnQpKSB7XG4gICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdob21lJyB9KTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==