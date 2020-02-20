import { __decorate } from "tslib";
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
    OrderCancellationGuard.prototype.canActivate = function () {
        var _this = this;
        return this.orderAmendService.getForm().pipe(map(function (form) {
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
        }));
    };
    OrderCancellationGuard.ctorParameters = function () { return [
        { type: RoutingService },
        { type: OrderCancellationService }
    ]; };
    OrderCancellationGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function OrderCancellationGuard_Factory() { return new OrderCancellationGuard(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.OrderCancellationService)); }, token: OrderCancellationGuard, providedIn: "root" });
    OrderCancellationGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], OrderCancellationGuard);
    return OrderCancellationGuard;
}());
export { OrderCancellationGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY2FuY2VsbGF0aW9uLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL2FtZW5kLW9yZGVyL2NhbmNlbGxhdGlvbnMvb3JkZXItY2FuY2VsbGF0aW9uLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sOEJBQThCLENBQUM7Ozs7QUFLeEU7SUFDRSxnQ0FDWSxPQUF1QixFQUN2QixpQkFBMkM7UUFEM0MsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUEwQjtJQUNwRCxDQUFDO0lBRUosNENBQVcsR0FBWDtRQUFBLGlCQWNDO1FBYkMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUMxQyxHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2YsK0NBQStDO2dCQUMvQyxxREFBcUQ7Z0JBQ3JELDZCQUE2QjtnQkFDN0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDdkMsT0FBTyxLQUFLLENBQUM7YUFDZDtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQzthQUNiO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQWxCb0IsY0FBYztnQkFDSix3QkFBd0I7OztJQUg1QyxzQkFBc0I7UUFIbEMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLHNCQUFzQixDQXFCbEM7aUNBL0JEO0NBK0JDLEFBckJELElBcUJDO1NBckJZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yZGVyQ2FuY2VsbGF0aW9uU2VydmljZSB9IGZyb20gJy4vb3JkZXItY2FuY2VsbGF0aW9uLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJDYW5jZWxsYXRpb25HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJvdXRpbmc6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBvcmRlckFtZW5kU2VydmljZTogT3JkZXJDYW5jZWxsYXRpb25TZXJ2aWNlXG4gICkge31cblxuICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgcmV0dXJuIHRoaXMub3JkZXJBbWVuZFNlcnZpY2UuZ2V0Rm9ybSgpLnBpcGUoXG4gICAgICBtYXAoZm9ybSA9PiB7XG4gICAgICAgIGlmICghZm9ybS52YWxpZCkge1xuICAgICAgICAgIC8vIHRoZSBvcmRlciBjb2RlIGlzIG5vdCBhdmFpbGFibGUgaW4gdGhlIHJvdXRlXG4gICAgICAgICAgLy8gYXMgbG9uZyBhcyB3ZSdyZSBpbnNpZGUgYSBndWFyZCwgaGVuY2Ugd2UgcmVkaXJlY3RcbiAgICAgICAgICAvLyB0byB0aGUgY29tbW9uIG9yZGVycyBwYWdlLlxuICAgICAgICAgIHRoaXMucm91dGluZy5nbyh7IGN4Um91dGU6ICdvcmRlcnMnIH0pO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=