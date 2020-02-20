import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { RoutingService } from '@spartacus/core';
import { map } from 'rxjs/operators';
import { OrderCancellationService } from './order-cancellation.service';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "./order-cancellation.service";
let OrderCancellationGuard = class OrderCancellationGuard {
    constructor(routing, orderAmendService) {
        this.routing = routing;
        this.orderAmendService = orderAmendService;
    }
    canActivate() {
        return this.orderAmendService.getForm().pipe(map(form => {
            if (!form.valid) {
                // the order code is not available in the route
                // as long as we're inside a guard, hence we redirect
                // to the common orders page.
                this.routing.go({ cxRoute: 'orders' });
                return false;
            }
            else {
                return true;
            }
        }));
    }
};
OrderCancellationGuard.ctorParameters = () => [
    { type: RoutingService },
    { type: OrderCancellationService }
];
OrderCancellationGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function OrderCancellationGuard_Factory() { return new OrderCancellationGuard(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.OrderCancellationService)); }, token: OrderCancellationGuard, providedIn: "root" });
OrderCancellationGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], OrderCancellationGuard);
export { OrderCancellationGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY2FuY2VsbGF0aW9uLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL2FtZW5kLW9yZGVyL2NhbmNlbGxhdGlvbnMvb3JkZXItY2FuY2VsbGF0aW9uLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFLeEUsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFDakMsWUFDWSxPQUF1QixFQUN2QixpQkFBMkM7UUFEM0MsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUEwQjtJQUNwRCxDQUFDO0lBRUosV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FDMUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2YsK0NBQStDO2dCQUMvQyxxREFBcUQ7Z0JBQ3JELDZCQUE2QjtnQkFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDdkMsT0FBTyxLQUFLLENBQUM7YUFDZDtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQzthQUNiO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztZQW5Cc0IsY0FBYztZQUNKLHdCQUF3Qjs7O0FBSDVDLHNCQUFzQjtJQUhsQyxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csc0JBQXNCLENBcUJsQztTQXJCWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPcmRlckNhbmNlbGxhdGlvblNlcnZpY2UgfSBmcm9tICcuL29yZGVyLWNhbmNlbGxhdGlvbi5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyQ2FuY2VsbGF0aW9uR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCByb3V0aW5nOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgb3JkZXJBbWVuZFNlcnZpY2U6IE9yZGVyQ2FuY2VsbGF0aW9uU2VydmljZVxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIHJldHVybiB0aGlzLm9yZGVyQW1lbmRTZXJ2aWNlLmdldEZvcm0oKS5waXBlKFxuICAgICAgbWFwKGZvcm0gPT4ge1xuICAgICAgICBpZiAoIWZvcm0udmFsaWQpIHtcbiAgICAgICAgICAvLyB0aGUgb3JkZXIgY29kZSBpcyBub3QgYXZhaWxhYmxlIGluIHRoZSByb3V0ZVxuICAgICAgICAgIC8vIGFzIGxvbmcgYXMgd2UncmUgaW5zaWRlIGEgZ3VhcmQsIGhlbmNlIHdlIHJlZGlyZWN0XG4gICAgICAgICAgLy8gdG8gdGhlIGNvbW1vbiBvcmRlcnMgcGFnZS5cbiAgICAgICAgICB0aGlzLnJvdXRpbmcuZ28oeyBjeFJvdXRlOiAnb3JkZXJzJyB9KTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19