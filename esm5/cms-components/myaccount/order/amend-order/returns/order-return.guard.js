/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RoutingService } from '@spartacus/core';
import { map } from 'rxjs/operators';
import { OrderReturnService } from './order-return.service';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "./order-return.service";
var OrderReturnGuard = /** @class */ (function () {
    function OrderReturnGuard(routing, orderAmendService) {
        this.routing = routing;
        this.orderAmendService = orderAmendService;
    }
    /**
     * @return {?}
     */
    OrderReturnGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.orderAmendService.getForm().pipe(map((/**
         * @param {?} form
         * @return {?}
         */
        function (form) {
            if (!form.valid) {
                // the order code is not available in the route
                // as long as we're inside a guard, hence we redirect
                // to the common orders page.
                _this.routing.go({ cxRoute: 'orders' });
                return false;
            }
            else {
                return true;
            }
        })));
    };
    OrderReturnGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    OrderReturnGuard.ctorParameters = function () { return [
        { type: RoutingService },
        { type: OrderReturnService }
    ]; };
    /** @nocollapse */ OrderReturnGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OrderReturnGuard_Factory() { return new OrderReturnGuard(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.OrderReturnService)); }, token: OrderReturnGuard, providedIn: "root" });
    return OrderReturnGuard;
}());
export { OrderReturnGuard };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OrderReturnGuard.prototype.routing;
    /**
     * @type {?}
     * @protected
     */
    OrderReturnGuard.prototype.orderAmendService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcmV0dXJuLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL2FtZW5kLW9yZGVyL3JldHVybnMvb3JkZXItcmV0dXJuLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFNUQ7SUFJRSwwQkFDWSxPQUF1QixFQUN2QixpQkFBcUM7UUFEckMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFvQjtJQUM5QyxDQUFDOzs7O0lBRUosc0NBQVc7OztJQUFYO1FBQUEsaUJBY0M7UUFiQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQzFDLEdBQUc7Ozs7UUFBQyxVQUFBLElBQUk7WUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDZiwrQ0FBK0M7Z0JBQy9DLHFEQUFxRDtnQkFDckQsNkJBQTZCO2dCQUM3QixLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUN2QyxPQUFPLEtBQUssQ0FBQzthQUNkO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDO2FBQ2I7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBdkJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUFEsY0FBYztnQkFHZCxrQkFBa0I7OzsyQkFMM0I7Q0ErQkMsQUF4QkQsSUF3QkM7U0FyQlksZ0JBQWdCOzs7Ozs7SUFFekIsbUNBQWlDOzs7OztJQUNqQyw2Q0FBK0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPcmRlclJldHVyblNlcnZpY2UgfSBmcm9tICcuL29yZGVyLXJldHVybi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyUmV0dXJuR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgb3JkZXJBbWVuZFNlcnZpY2U6IE9yZGVyUmV0dXJuU2VydmljZVxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIHJldHVybiB0aGlzLm9yZGVyQW1lbmRTZXJ2aWNlLmdldEZvcm0oKS5waXBlKFxuICAgICAgbWFwKGZvcm0gPT4ge1xuICAgICAgICBpZiAoIWZvcm0udmFsaWQpIHtcbiAgICAgICAgICAvLyB0aGUgb3JkZXIgY29kZSBpcyBub3QgYXZhaWxhYmxlIGluIHRoZSByb3V0ZVxuICAgICAgICAgIC8vIGFzIGxvbmcgYXMgd2UncmUgaW5zaWRlIGEgZ3VhcmQsIGhlbmNlIHdlIHJlZGlyZWN0XG4gICAgICAgICAgLy8gdG8gdGhlIGNvbW1vbiBvcmRlcnMgcGFnZS5cbiAgICAgICAgICB0aGlzLnJvdXRpbmcuZ28oeyBjeFJvdXRlOiAnb3JkZXJzJyB9KTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19