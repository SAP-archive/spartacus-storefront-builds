/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CartService, RoutingService } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class CartNotEmptyGuard {
    /**
     * @param {?} cartService
     * @param {?} routingService
     */
    constructor(cartService, routingService) {
        this.cartService = cartService;
        this.routingService = routingService;
    }
    /**
     * @return {?}
     */
    canActivate() {
        return combineLatest([
            this.cartService.getActive(),
            this.cartService.getLoaded(),
        ]).pipe(filter((/**
         * @param {?} __0
         * @return {?}
         */
        ([_, loaded]) => loaded)), map((/**
         * @param {?} __0
         * @return {?}
         */
        ([cart]) => {
            if (this.isEmpty(cart)) {
                this.routingService.go({ cxRoute: 'home' });
                return false;
            }
            return true;
        })));
    }
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    isEmpty(cart) {
        return cart && !cart.totalItems;
    }
}
CartNotEmptyGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CartNotEmptyGuard.ctorParameters = () => [
    { type: CartService },
    { type: RoutingService }
];
/** @nocollapse */ CartNotEmptyGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CartNotEmptyGuard_Factory() { return new CartNotEmptyGuard(i0.ɵɵinject(i1.CartService), i0.ɵɵinject(i1.RoutingService)); }, token: CartNotEmptyGuard, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1ub3QtZW1wdHkuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jYXJ0L2NhcnQtbm90LWVtcHR5Lmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBUSxXQUFXLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLN0MsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFDNUIsWUFDVSxXQUF3QixFQUN4QixjQUE4QjtRQUQ5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDckMsQ0FBQzs7OztJQUVKLFdBQVc7UUFDVCxPQUFPLGFBQWEsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtZQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtTQUM3QixDQUFDLENBQUMsSUFBSSxDQUNMLE1BQU07Ozs7UUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUMsRUFDL0IsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ2IsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUM1QyxPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sT0FBTyxDQUFDLElBQVU7UUFDeEIsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ2xDLENBQUM7OztZQTNCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFOYyxXQUFXO1lBQUUsY0FBYzs7Ozs7Ozs7SUFTdEMsd0NBQWdDOzs7OztJQUNoQywyQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDYXJ0LCBDYXJ0U2VydmljZSwgUm91dGluZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0Tm90RW1wdHlHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuY2FydFNlcnZpY2UuZ2V0QWN0aXZlKCksXG4gICAgICB0aGlzLmNhcnRTZXJ2aWNlLmdldExvYWRlZCgpLFxuICAgIF0pLnBpcGUoXG4gICAgICBmaWx0ZXIoKFtfLCBsb2FkZWRdKSA9PiBsb2FkZWQpLFxuICAgICAgbWFwKChbY2FydF0pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbXB0eShjYXJ0KSkge1xuICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnaG9tZScgfSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0VtcHR5KGNhcnQ6IENhcnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY2FydCAmJiAhY2FydC50b3RhbEl0ZW1zO1xuICB9XG59XG4iXX0=