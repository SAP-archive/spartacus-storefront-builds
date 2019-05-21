/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RoutingService, CheckoutService } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class OrderConfirmationPageGuard {
    /**
     * @param {?} checkoutService
     * @param {?} routingService
     */
    constructor(checkoutService, routingService) {
        this.checkoutService = checkoutService;
        this.routingService = routingService;
    }
    /**
     * @return {?}
     */
    canActivate() {
        return this.checkoutService.getOrderDetails().pipe(map(orderDetails => {
            if (orderDetails && Object.keys(orderDetails).length !== 0) {
                return true;
            }
            else {
                this.routingService.go({ cxRoute: 'orders' });
                return false;
            }
        }));
    }
}
OrderConfirmationPageGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
OrderConfirmationPageGuard.ctorParameters = () => [
    { type: CheckoutService },
    { type: RoutingService }
];
/** @nocollapse */ OrderConfirmationPageGuard.ngInjectableDef = i0.defineInjectable({ factory: function OrderConfirmationPageGuard_Factory() { return new OrderConfirmationPageGuard(i0.inject(i1.CheckoutService), i0.inject(i1.RoutingService)); }, token: OrderConfirmationPageGuard, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    OrderConfirmationPageGuard.prototype.checkoutService;
    /**
     * @type {?}
     * @private
     */
    OrderConfirmationPageGuard.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLXBhZ2UuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvZ3VhcmRzL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFLbEUsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7SUFDckMsWUFDVSxlQUFnQyxFQUNoQyxjQUE4QjtRQUQ5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3JDLENBQUM7Ozs7SUFFSixXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FDaEQsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ2pCLElBQUksWUFBWSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDMUQsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUM5QyxPQUFPLEtBQUssQ0FBQzthQUNkO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7OztZQXBCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKd0IsZUFBZTtZQUEvQixjQUFjOzs7Ozs7OztJQU9uQixxREFBd0M7Ozs7O0lBQ3hDLG9EQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSwgQ2hlY2tvdXRTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyQ29uZmlybWF0aW9uUGFnZUd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cblxuICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0T3JkZXJEZXRhaWxzKCkucGlwZShcbiAgICAgIG1hcChvcmRlckRldGFpbHMgPT4ge1xuICAgICAgICBpZiAob3JkZXJEZXRhaWxzICYmIE9iamVjdC5rZXlzKG9yZGVyRGV0YWlscykubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdvcmRlcnMnIH0pO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=