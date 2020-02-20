import { __decorate } from "tslib";
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
    OrderReturnGuard.prototype.canActivate = function () {
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
    OrderReturnGuard.ctorParameters = function () { return [
        { type: RoutingService },
        { type: OrderReturnService }
    ]; };
    OrderReturnGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function OrderReturnGuard_Factory() { return new OrderReturnGuard(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.OrderReturnService)); }, token: OrderReturnGuard, providedIn: "root" });
    OrderReturnGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], OrderReturnGuard);
    return OrderReturnGuard;
}());
export { OrderReturnGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcmV0dXJuLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL2FtZW5kLW9yZGVyL3JldHVybnMvb3JkZXItcmV0dXJuLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFLNUQ7SUFDRSwwQkFDWSxPQUF1QixFQUN2QixpQkFBcUM7UUFEckMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFvQjtJQUM5QyxDQUFDO0lBRUosc0NBQVcsR0FBWDtRQUFBLGlCQWNDO1FBYkMsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUMxQyxHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ2YsK0NBQStDO2dCQUMvQyxxREFBcUQ7Z0JBQ3JELDZCQUE2QjtnQkFDN0IsS0FBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztnQkFDdkMsT0FBTyxLQUFLLENBQUM7YUFDZDtpQkFBTTtnQkFDTCxPQUFPLElBQUksQ0FBQzthQUNiO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQWxCb0IsY0FBYztnQkFDSixrQkFBa0I7OztJQUh0QyxnQkFBZ0I7UUFINUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGdCQUFnQixDQXFCNUI7MkJBL0JEO0NBK0JDLEFBckJELElBcUJDO1NBckJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yZGVyUmV0dXJuU2VydmljZSB9IGZyb20gJy4vb3JkZXItcmV0dXJuLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJSZXR1cm5HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJvdXRpbmc6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBvcmRlckFtZW5kU2VydmljZTogT3JkZXJSZXR1cm5TZXJ2aWNlXG4gICkge31cblxuICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgcmV0dXJuIHRoaXMub3JkZXJBbWVuZFNlcnZpY2UuZ2V0Rm9ybSgpLnBpcGUoXG4gICAgICBtYXAoZm9ybSA9PiB7XG4gICAgICAgIGlmICghZm9ybS52YWxpZCkge1xuICAgICAgICAgIC8vIHRoZSBvcmRlciBjb2RlIGlzIG5vdCBhdmFpbGFibGUgaW4gdGhlIHJvdXRlXG4gICAgICAgICAgLy8gYXMgbG9uZyBhcyB3ZSdyZSBpbnNpZGUgYSBndWFyZCwgaGVuY2Ugd2UgcmVkaXJlY3RcbiAgICAgICAgICAvLyB0byB0aGUgY29tbW9uIG9yZGVycyBwYWdlLlxuICAgICAgICAgIHRoaXMucm91dGluZy5nbyh7IGN4Um91dGU6ICdvcmRlcnMnIH0pO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=