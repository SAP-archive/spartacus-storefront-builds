import { __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { ActiveCartService, Cart, RoutingService } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var CartNotEmptyGuard = /** @class */ (function () {
    function CartNotEmptyGuard(routingService, activeCartService) {
        this.routingService = routingService;
        this.activeCartService = activeCartService;
    }
    CartNotEmptyGuard.prototype.canActivate = function () {
        var _this = this;
        return combineLatest([
            this.activeCartService.getActive(),
            this.activeCartService.getLoaded(),
        ]).pipe(filter(function (_a) {
            var _b = __read(_a, 2), _ = _b[0], loaded = _b[1];
            return loaded;
        }), map(function (_a) {
            var _b = __read(_a, 1), cart = _b[0];
            if (_this.isEmpty(cart)) {
                _this.routingService.go({ cxRoute: 'home' });
                return false;
            }
            return true;
        }));
    };
    CartNotEmptyGuard.prototype.isEmpty = function (cart) {
        return cart && !cart.totalItems;
    };
    CartNotEmptyGuard.ctorParameters = function () { return [
        { type: RoutingService },
        { type: ActiveCartService }
    ]; };
    CartNotEmptyGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function CartNotEmptyGuard_Factory() { return new CartNotEmptyGuard(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.ActiveCartService)); }, token: CartNotEmptyGuard, providedIn: "root" });
    CartNotEmptyGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CartNotEmptyGuard);
    return CartNotEmptyGuard;
}());
export { CartNotEmptyGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1ub3QtZW1wdHkuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jYXJ0L2NhcnQtbm90LWVtcHR5Lmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLN0M7SUFDRSwyQkFDWSxjQUE4QixFQUM5QixpQkFBb0M7UUFEcEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDN0MsQ0FBQztJQUVKLHVDQUFXLEdBQVg7UUFBQSxpQkFjQztRQWJDLE9BQU8sYUFBYSxDQUFDO1lBQ25CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUU7WUFDbEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRTtTQUNuQyxDQUFDLENBQUMsSUFBSSxDQUNMLE1BQU0sQ0FBQyxVQUFDLEVBQVc7Z0JBQVgsa0JBQVcsRUFBVixTQUFDLEVBQUUsY0FBTTtZQUFNLE9BQUEsTUFBTTtRQUFOLENBQU0sQ0FBQyxFQUMvQixHQUFHLENBQUMsVUFBQyxFQUFNO2dCQUFOLGtCQUFNLEVBQUwsWUFBSTtZQUNSLElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdEIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztnQkFDNUMsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFTyxtQ0FBTyxHQUFmLFVBQWdCLElBQVU7UUFDeEIsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ2xDLENBQUM7O2dCQXRCMkIsY0FBYztnQkFDWCxpQkFBaUI7OztJQUhyQyxpQkFBaUI7UUFIN0IsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGlCQUFpQixDQXlCN0I7NEJBbENEO0NBa0NDLEFBekJELElBeUJDO1NBekJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlLCBDYXJ0LCBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcnROb3RFbXB0eUd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2VcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0QWN0aXZlKCksXG4gICAgICB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmdldExvYWRlZCgpLFxuICAgIF0pLnBpcGUoXG4gICAgICBmaWx0ZXIoKFtfLCBsb2FkZWRdKSA9PiBsb2FkZWQpLFxuICAgICAgbWFwKChbY2FydF0pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbXB0eShjYXJ0KSkge1xuICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnaG9tZScgfSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0VtcHR5KGNhcnQ6IENhcnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY2FydCAmJiAhY2FydC50b3RhbEl0ZW1zO1xuICB9XG59XG4iXX0=