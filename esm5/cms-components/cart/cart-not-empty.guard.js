import { __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { Cart, CartService, RoutingService } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var CartNotEmptyGuard = /** @class */ (function () {
    function CartNotEmptyGuard(cartService, routingService) {
        this.cartService = cartService;
        this.routingService = routingService;
    }
    CartNotEmptyGuard.prototype.canActivate = function () {
        var _this = this;
        return combineLatest([
            this.cartService.getActive(),
            this.cartService.getLoaded(),
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
        { type: CartService },
        { type: RoutingService }
    ]; };
    CartNotEmptyGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function CartNotEmptyGuard_Factory() { return new CartNotEmptyGuard(i0.ɵɵinject(i1.CartService), i0.ɵɵinject(i1.RoutingService)); }, token: CartNotEmptyGuard, providedIn: "root" });
    CartNotEmptyGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CartNotEmptyGuard);
    return CartNotEmptyGuard;
}());
export { CartNotEmptyGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1ub3QtZW1wdHkuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jYXJ0L2NhcnQtbm90LWVtcHR5Lmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBSzdDO0lBQ0UsMkJBQ1UsV0FBd0IsRUFDeEIsY0FBOEI7UUFEOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3JDLENBQUM7SUFFSix1Q0FBVyxHQUFYO1FBQUEsaUJBY0M7UUFiQyxPQUFPLGFBQWEsQ0FBQztZQUNuQixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtZQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtTQUM3QixDQUFDLENBQUMsSUFBSSxDQUNMLE1BQU0sQ0FBQyxVQUFDLEVBQVc7Z0JBQVgsa0JBQVcsRUFBVixTQUFDLEVBQUUsY0FBTTtZQUFNLE9BQUEsTUFBTTtRQUFOLENBQU0sQ0FBQyxFQUMvQixHQUFHLENBQUMsVUFBQyxFQUFNO2dCQUFOLGtCQUFNLEVBQUwsWUFBSTtZQUNSLElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdEIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztnQkFDNUMsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFTyxtQ0FBTyxHQUFmLFVBQWdCLElBQVU7UUFDeEIsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ2xDLENBQUM7O2dCQXRCc0IsV0FBVztnQkFDUixjQUFjOzs7SUFIN0IsaUJBQWlCO1FBSDdCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxpQkFBaUIsQ0F5QjdCOzRCQWxDRDtDQWtDQyxBQXpCRCxJQXlCQztTQXpCWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBDYXJ0LCBDYXJ0U2VydmljZSwgUm91dGluZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0Tm90RW1wdHlHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuY2FydFNlcnZpY2UuZ2V0QWN0aXZlKCksXG4gICAgICB0aGlzLmNhcnRTZXJ2aWNlLmdldExvYWRlZCgpLFxuICAgIF0pLnBpcGUoXG4gICAgICBmaWx0ZXIoKFtfLCBsb2FkZWRdKSA9PiBsb2FkZWQpLFxuICAgICAgbWFwKChbY2FydF0pID0+IHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbXB0eShjYXJ0KSkge1xuICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnaG9tZScgfSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0VtcHR5KGNhcnQ6IENhcnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY2FydCAmJiAhY2FydC50b3RhbEl0ZW1zO1xuICB9XG59XG4iXX0=