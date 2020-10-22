import { Injectable } from '@angular/core';
import { RoutingService, UserOrderService } from '@spartacus/core';
import { distinctUntilChanged, map, shareReplay, switchMap, tap, } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class OrderDetailsService {
    constructor(userOrderService, routingService) {
        this.userOrderService = userOrderService;
        this.routingService = routingService;
        this.orderCode$ = this.routingService.getRouterState().pipe(map((routingData) => routingData.state.params.orderCode), distinctUntilChanged());
        this.orderLoad$ = this.orderCode$.pipe(tap((orderCode) => {
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
}
OrderDetailsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OrderDetailsService_Factory() { return new OrderDetailsService(i0.ɵɵinject(i1.UserOrderService), i0.ɵɵinject(i1.RoutingService)); }, token: OrderDetailsService, providedIn: "root" });
OrderDetailsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
OrderDetailsService.ctorParameters = () => [
    { type: UserOrderService },
    { type: RoutingService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFTLGNBQWMsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTFFLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsR0FBRyxFQUNILFdBQVcsRUFDWCxTQUFTLEVBQ1QsR0FBRyxHQUNKLE1BQU0sZ0JBQWdCLENBQUM7OztBQUt4QixNQUFNLE9BQU8sbUJBQW1CO0lBSTlCLFlBQ1UsZ0JBQWtDLEVBQ2xDLGNBQThCO1FBRDlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRXRDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQ3pELEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQ3hELG9CQUFvQixFQUFFLENBQ3ZCLENBQUM7UUFFRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUNwQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUNoQixJQUFJLFNBQVMsRUFBRTtnQkFDYixJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDbkQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDM0M7UUFDSCxDQUFDLENBQUMsRUFDRixXQUFXLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUMvQyxDQUFDO0lBQ0osQ0FBQztJQUVELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUN6QixTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxDQUFDLENBQ3pELENBQUM7SUFDSixDQUFDOzs7O1lBaENGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBWitCLGdCQUFnQjtZQUFoQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3JkZXIsIFJvdXRpbmdTZXJ2aWNlLCBVc2VyT3JkZXJTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBtYXAsXG4gIHNoYXJlUmVwbGF5LFxuICBzd2l0Y2hNYXAsXG4gIHRhcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJEZXRhaWxzU2VydmljZSB7XG4gIG9yZGVyQ29kZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgb3JkZXJMb2FkJDogT2JzZXJ2YWJsZTx7fT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB1c2VyT3JkZXJTZXJ2aWNlOiBVc2VyT3JkZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMub3JkZXJDb2RlJCA9IHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKS5waXBlKFxuICAgICAgbWFwKChyb3V0aW5nRGF0YSkgPT4gcm91dGluZ0RhdGEuc3RhdGUucGFyYW1zLm9yZGVyQ29kZSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcblxuICAgIHRoaXMub3JkZXJMb2FkJCA9IHRoaXMub3JkZXJDb2RlJC5waXBlKFxuICAgICAgdGFwKChvcmRlckNvZGUpID0+IHtcbiAgICAgICAgaWYgKG9yZGVyQ29kZSkge1xuICAgICAgICAgIHRoaXMudXNlck9yZGVyU2VydmljZS5sb2FkT3JkZXJEZXRhaWxzKG9yZGVyQ29kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy51c2VyT3JkZXJTZXJ2aWNlLmNsZWFyT3JkZXJEZXRhaWxzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICAgICk7XG4gIH1cblxuICBnZXRPcmRlckRldGFpbHMoKTogT2JzZXJ2YWJsZTxPcmRlcj4ge1xuICAgIHJldHVybiB0aGlzLm9yZGVyTG9hZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLnVzZXJPcmRlclNlcnZpY2UuZ2V0T3JkZXJEZXRhaWxzKCkpXG4gICAgKTtcbiAgfVxufVxuIl19