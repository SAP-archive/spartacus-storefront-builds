/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RoutingService } from '@spartacus/core';
import { map } from 'rxjs/operators';
import { OrderCancellationService } from './order-cancellation.service';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "./order-cancellation.service";
var OrderCancellationGuard = /** @class */ (function () {
    function OrderCancellationGuard(routing, orderAmendService) {
        this.routing = routing;
        this.orderAmendService = orderAmendService;
    }
    /**
     * @return {?}
     */
    OrderCancellationGuard.prototype.canActivate = /**
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
    OrderCancellationGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    OrderCancellationGuard.ctorParameters = function () { return [
        { type: RoutingService },
        { type: OrderCancellationService }
    ]; };
    /** @nocollapse */ OrderCancellationGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OrderCancellationGuard_Factory() { return new OrderCancellationGuard(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.OrderCancellationService)); }, token: OrderCancellationGuard, providedIn: "root" });
    return OrderCancellationGuard;
}());
export { OrderCancellationGuard };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OrderCancellationGuard.prototype.routing;
    /**
     * @type {?}
     * @protected
     */
    OrderCancellationGuard.prototype.orderAmendService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY2FuY2VsbGF0aW9uLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL2FtZW5kLW9yZGVyL2NhbmNlbGxhdGlvbnMvb3JkZXItY2FuY2VsbGF0aW9uLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFFeEU7SUFJRSxnQ0FDWSxPQUF1QixFQUN2QixpQkFBMkM7UUFEM0MsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUEwQjtJQUNwRCxDQUFDOzs7O0lBRUosNENBQVc7OztJQUFYO1FBQUEsaUJBY0M7UUFiQyxPQUFPLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQzFDLEdBQUc7Ozs7UUFBQyxVQUFBLElBQUk7WUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDZiwrQ0FBK0M7Z0JBQy9DLHFEQUFxRDtnQkFDckQsNkJBQTZCO2dCQUM3QixLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUN2QyxPQUFPLEtBQUssQ0FBQzthQUNkO2lCQUFNO2dCQUNMLE9BQU8sSUFBSSxDQUFDO2FBQ2I7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBdkJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUFEsY0FBYztnQkFHZCx3QkFBd0I7OztpQ0FMakM7Q0ErQkMsQUF4QkQsSUF3QkM7U0FyQlksc0JBQXNCOzs7Ozs7SUFFL0IseUNBQWlDOzs7OztJQUNqQyxtREFBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPcmRlckNhbmNlbGxhdGlvblNlcnZpY2UgfSBmcm9tICcuL29yZGVyLWNhbmNlbGxhdGlvbi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyQ2FuY2VsbGF0aW9uR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgb3JkZXJBbWVuZFNlcnZpY2U6IE9yZGVyQ2FuY2VsbGF0aW9uU2VydmljZVxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIHJldHVybiB0aGlzLm9yZGVyQW1lbmRTZXJ2aWNlLmdldEZvcm0oKS5waXBlKFxuICAgICAgbWFwKGZvcm0gPT4ge1xuICAgICAgICBpZiAoIWZvcm0udmFsaWQpIHtcbiAgICAgICAgICAvLyB0aGUgb3JkZXIgY29kZSBpcyBub3QgYXZhaWxhYmxlIGluIHRoZSByb3V0ZVxuICAgICAgICAgIC8vIGFzIGxvbmcgYXMgd2UncmUgaW5zaWRlIGEgZ3VhcmQsIGhlbmNlIHdlIHJlZGlyZWN0XG4gICAgICAgICAgLy8gdG8gdGhlIGNvbW1vbiBvcmRlcnMgcGFnZS5cbiAgICAgICAgICB0aGlzLnJvdXRpbmcuZ28oeyBjeFJvdXRlOiAnb3JkZXJzJyB9KTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19