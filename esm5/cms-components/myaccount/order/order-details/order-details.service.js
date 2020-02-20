import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Order, RoutingService, UserOrderService } from '@spartacus/core';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var OrderDetailsService = /** @class */ (function () {
    function OrderDetailsService(userOrderService, routingService) {
        var _this = this;
        this.userOrderService = userOrderService;
        this.routingService = routingService;
        this.orderCode$ = this.routingService
            .getRouterState()
            .pipe(map(function (routingData) { return routingData.state.params.orderCode; }));
        this.orderLoad$ = this.orderCode$.pipe(tap(function (orderCode) {
            if (orderCode) {
                _this.userOrderService.loadOrderDetails(orderCode);
            }
            else {
                _this.userOrderService.clearOrderDetails();
            }
        }), shareReplay({ bufferSize: 1, refCount: true }));
    }
    OrderDetailsService.prototype.getOrderDetails = function () {
        var _this = this;
        return this.orderLoad$.pipe(switchMap(function () { return _this.userOrderService.getOrderDetails(); }));
    };
    OrderDetailsService.ctorParameters = function () { return [
        { type: UserOrderService },
        { type: RoutingService }
    ]; };
    OrderDetailsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OrderDetailsService_Factory() { return new OrderDetailsService(i0.ɵɵinject(i1.UserOrderService), i0.ɵɵinject(i1.RoutingService)); }, token: OrderDetailsService, providedIn: "root" });
    OrderDetailsService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], OrderDetailsService);
    return OrderDetailsService;
}());
export { OrderDetailsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFMUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLbEU7SUFJRSw2QkFDVSxnQkFBa0MsRUFDbEMsY0FBOEI7UUFGeEMsaUJBa0JDO1FBakJTLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRXRDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWM7YUFDbEMsY0FBYyxFQUFFO2FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxXQUFXLElBQUksT0FBQSxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQWxDLENBQWtDLENBQUMsQ0FBQyxDQUFDO1FBRWhFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ3BDLEdBQUcsQ0FBQyxVQUFBLFNBQVM7WUFDWCxJQUFJLFNBQVMsRUFBRTtnQkFDYixLQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDbkQ7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDM0M7UUFDSCxDQUFDLENBQUMsRUFDRixXQUFXLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUMvQyxDQUFDO0lBQ0osQ0FBQztJQUVELDZDQUFlLEdBQWY7UUFBQSxpQkFJQztRQUhDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ3pCLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxFQUF2QyxDQUF1QyxDQUFDLENBQ3pELENBQUM7SUFDSixDQUFDOztnQkF2QjJCLGdCQUFnQjtnQkFDbEIsY0FBYzs7O0lBTjdCLG1CQUFtQjtRQUgvQixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csbUJBQW1CLENBNkIvQjs4QkFyQ0Q7Q0FxQ0MsQUE3QkQsSUE2QkM7U0E3QlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3JkZXIsIFJvdXRpbmdTZXJ2aWNlLCBVc2VyT3JkZXJTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc2hhcmVSZXBsYXksIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJEZXRhaWxzU2VydmljZSB7XG4gIG9yZGVyQ29kZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgb3JkZXJMb2FkJDogT2JzZXJ2YWJsZTx7fT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB1c2VyT3JkZXJTZXJ2aWNlOiBVc2VyT3JkZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMub3JkZXJDb2RlJCA9IHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAgIC5nZXRSb3V0ZXJTdGF0ZSgpXG4gICAgICAucGlwZShtYXAocm91dGluZ0RhdGEgPT4gcm91dGluZ0RhdGEuc3RhdGUucGFyYW1zLm9yZGVyQ29kZSkpO1xuXG4gICAgdGhpcy5vcmRlckxvYWQkID0gdGhpcy5vcmRlckNvZGUkLnBpcGUoXG4gICAgICB0YXAob3JkZXJDb2RlID0+IHtcbiAgICAgICAgaWYgKG9yZGVyQ29kZSkge1xuICAgICAgICAgIHRoaXMudXNlck9yZGVyU2VydmljZS5sb2FkT3JkZXJEZXRhaWxzKG9yZGVyQ29kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy51c2VyT3JkZXJTZXJ2aWNlLmNsZWFyT3JkZXJEZXRhaWxzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICAgICk7XG4gIH1cblxuICBnZXRPcmRlckRldGFpbHMoKTogT2JzZXJ2YWJsZTxPcmRlcj4ge1xuICAgIHJldHVybiB0aGlzLm9yZGVyTG9hZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLnVzZXJPcmRlclNlcnZpY2UuZ2V0T3JkZXJEZXRhaWxzKCkpXG4gICAgKTtcbiAgfVxufVxuIl19