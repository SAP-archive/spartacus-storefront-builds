import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CheckoutService, SemanticPathService } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "@angular/router";
var OrderConfirmationGuard = /** @class */ (function () {
    function OrderConfirmationGuard(checkoutService, router, semanticPathService) {
        this.checkoutService = checkoutService;
        this.router = router;
        this.semanticPathService = semanticPathService;
    }
    OrderConfirmationGuard.prototype.canActivate = function () {
        var _this = this;
        return this.checkoutService.getOrderDetails().pipe(map(function (orderDetails) {
            if (orderDetails && Object.keys(orderDetails).length !== 0) {
                return true;
            }
            else {
                return _this.router.parseUrl(_this.semanticPathService.get('orders'));
            }
        }));
    };
    OrderConfirmationGuard.ctorParameters = function () { return [
        { type: CheckoutService },
        { type: Router },
        { type: SemanticPathService }
    ]; };
    OrderConfirmationGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function OrderConfirmationGuard_Factory() { return new OrderConfirmationGuard(i0.ɵɵinject(i1.CheckoutService), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i1.SemanticPathService)); }, token: OrderConfirmationGuard, providedIn: "root" });
    OrderConfirmationGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], OrderConfirmationGuard);
    return OrderConfirmationGuard;
}());
export { OrderConfirmationGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvb3JkZXItY29uZmlybWF0aW9uL2d1YXJkcy9vcmRlci1jb25maXJtYXRpb24uZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHL0QsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7OztBQUt2RTtJQUNFLGdDQUNVLGVBQWdDLEVBQ2hDLE1BQWMsRUFDZCxtQkFBd0M7UUFGeEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO0lBQy9DLENBQUM7SUFFSiw0Q0FBVyxHQUFYO1FBQUEsaUJBVUM7UUFUQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUNoRCxHQUFHLENBQUMsVUFBQSxZQUFZO1lBQ2QsSUFBSSxZQUFZLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUMxRCxPQUFPLElBQUksQ0FBQzthQUNiO2lCQUFNO2dCQUNMLE9BQU8sS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQ3JFO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7O2dCQWYwQixlQUFlO2dCQUN4QixNQUFNO2dCQUNPLG1CQUFtQjs7O0lBSnZDLHNCQUFzQjtRQUhsQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csc0JBQXNCLENBa0JsQztpQ0E3QkQ7Q0E2QkMsQUFsQkQsSUFrQkM7U0FsQlksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFVybFRyZWUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ2hlY2tvdXRTZXJ2aWNlLCBTZW1hbnRpY1BhdGhTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyQ29uZmlybWF0aW9uR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0T3JkZXJEZXRhaWxzKCkucGlwZShcbiAgICAgIG1hcChvcmRlckRldGFpbHMgPT4ge1xuICAgICAgICBpZiAob3JkZXJEZXRhaWxzICYmIE9iamVjdC5rZXlzKG9yZGVyRGV0YWlscykubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucm91dGVyLnBhcnNlVXJsKHRoaXMuc2VtYW50aWNQYXRoU2VydmljZS5nZXQoJ29yZGVycycpKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=