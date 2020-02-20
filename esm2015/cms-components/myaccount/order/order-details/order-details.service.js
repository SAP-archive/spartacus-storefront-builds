import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Order, RoutingService, UserOrderService } from '@spartacus/core';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
let OrderDetailsService = class OrderDetailsService {
    constructor(userOrderService, routingService) {
        this.userOrderService = userOrderService;
        this.routingService = routingService;
        this.orderCode$ = this.routingService
            .getRouterState()
            .pipe(map(routingData => routingData.state.params.orderCode));
        this.orderLoad$ = this.orderCode$.pipe(tap(orderCode => {
            if (orderCode) {
                this.userOrderService.loadOrderDetails(orderCode);
            }
            else {
                this.userOrderService.clearOrderDetails();
            }
        }), shareReplay({ bufferSize: 1, refCount: true }));
    }
    getOrderDetails() {
        return this.orderLoad$.pipe(switchMap(() => this.userOrderService.getOrderDetails()));
    }
};
OrderDetailsService.ctorParameters = () => [
    { type: UserOrderService },
    { type: RoutingService }
];
OrderDetailsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OrderDetailsService_Factory() { return new OrderDetailsService(i0.ɵɵinject(i1.UserOrderService), i0.ɵɵinject(i1.RoutingService)); }, token: OrderDetailsService, providedIn: "root" });
OrderDetailsService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], OrderDetailsService);
export { OrderDetailsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFMUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLbEUsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFJOUIsWUFDVSxnQkFBa0MsRUFDbEMsY0FBOEI7UUFEOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFFdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYzthQUNsQyxjQUFjLEVBQUU7YUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFFaEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDcEMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2QsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ25EO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQzNDO1FBQ0gsQ0FBQyxDQUFDLEVBQ0YsV0FBVyxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FDL0MsQ0FBQztJQUNKLENBQUM7SUFFRCxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDekIsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUN6RCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7O1lBeEI2QixnQkFBZ0I7WUFDbEIsY0FBYzs7O0FBTjdCLG1CQUFtQjtJQUgvQixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csbUJBQW1CLENBNkIvQjtTQTdCWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPcmRlciwgUm91dGluZ1NlcnZpY2UsIFVzZXJPcmRlclNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzaGFyZVJlcGxheSwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckRldGFpbHNTZXJ2aWNlIHtcbiAgb3JkZXJDb2RlJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBvcmRlckxvYWQkOiBPYnNlcnZhYmxlPHt9PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVzZXJPcmRlclNlcnZpY2U6IFVzZXJPcmRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5vcmRlckNvZGUkID0gdGhpcy5yb3V0aW5nU2VydmljZVxuICAgICAgLmdldFJvdXRlclN0YXRlKClcbiAgICAgIC5waXBlKG1hcChyb3V0aW5nRGF0YSA9PiByb3V0aW5nRGF0YS5zdGF0ZS5wYXJhbXMub3JkZXJDb2RlKSk7XG5cbiAgICB0aGlzLm9yZGVyTG9hZCQgPSB0aGlzLm9yZGVyQ29kZSQucGlwZShcbiAgICAgIHRhcChvcmRlckNvZGUgPT4ge1xuICAgICAgICBpZiAob3JkZXJDb2RlKSB7XG4gICAgICAgICAgdGhpcy51c2VyT3JkZXJTZXJ2aWNlLmxvYWRPcmRlckRldGFpbHMob3JkZXJDb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnVzZXJPcmRlclNlcnZpY2UuY2xlYXJPcmRlckRldGFpbHMoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldE9yZGVyRGV0YWlscygpOiBPYnNlcnZhYmxlPE9yZGVyPiB7XG4gICAgcmV0dXJuIHRoaXMub3JkZXJMb2FkJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMudXNlck9yZGVyU2VydmljZS5nZXRPcmRlckRldGFpbHMoKSlcbiAgICApO1xuICB9XG59XG4iXX0=