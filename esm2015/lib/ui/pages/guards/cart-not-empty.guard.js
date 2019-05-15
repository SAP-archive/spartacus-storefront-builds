/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { skipWhile, map, switchMap } from 'rxjs/operators';
import { CartService, RoutingService } from '@spartacus/core';
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
        return this.cartService.getLoaded().pipe(skipWhile(loaded => !loaded), switchMap(() => this.cartService.getActive()), map(cart => {
            if (this.cartService.isEmpty(cart)) {
                this.routingService.go({ cxRoute: 'home' });
                return false;
            }
            return true;
        }));
    }
}
CartNotEmptyGuard.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CartNotEmptyGuard.ctorParameters = () => [
    { type: CartService },
    { type: RoutingService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1ub3QtZW1wdHkuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvdWkvcGFnZXMvZ3VhcmRzL2NhcnQtbm90LWVtcHR5Lmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNELE9BQU8sRUFBRSxXQUFXLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHOUQsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFDNUIsWUFDVSxXQUF3QixFQUN4QixjQUE4QjtRQUQ5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFDckMsQ0FBQzs7OztJQUVKLFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUN0QyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUM1QixTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxFQUM3QyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNsQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2dCQUM1QyxPQUFPLEtBQUssQ0FBQzthQUNkO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7O1lBbkJGLFVBQVU7Ozs7WUFGRixXQUFXO1lBQUUsY0FBYzs7Ozs7OztJQUtoQyx3Q0FBZ0M7Ozs7O0lBQ2hDLDJDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc2tpcFdoaWxlLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ2FydFNlcnZpY2UsIFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENhcnROb3RFbXB0eUd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuY2FydFNlcnZpY2UuZ2V0TG9hZGVkKCkucGlwZShcbiAgICAgIHNraXBXaGlsZShsb2FkZWQgPT4gIWxvYWRlZCksXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKSksXG4gICAgICBtYXAoY2FydCA9PiB7XG4gICAgICAgIGlmICh0aGlzLmNhcnRTZXJ2aWNlLmlzRW1wdHkoY2FydCkpIHtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ2hvbWUnIH0pO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19