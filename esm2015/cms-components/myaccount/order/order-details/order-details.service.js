/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RoutingService, UserOrderService } from '@spartacus/core';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class OrderDetailsService {
    /**
     * @param {?} userOrderService
     * @param {?} routingService
     */
    constructor(userOrderService, routingService) {
        this.userOrderService = userOrderService;
        this.routingService = routingService;
        this.orderCode$ = this.routingService
            .getRouterState()
            .pipe(map((/**
         * @param {?} routingData
         * @return {?}
         */
        routingData => routingData.state.params.orderCode)));
        this.orderLoad$ = this.orderCode$.pipe(tap((/**
         * @param {?} orderCode
         * @return {?}
         */
        orderCode => {
            if (orderCode) {
                this.userOrderService.loadOrderDetails(orderCode);
            }
            else {
                this.userOrderService.clearOrderDetails();
            }
        })), shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * @return {?}
     */
    getOrderDetails() {
        return this.orderLoad$.pipe(switchMap((/**
         * @return {?}
         */
        () => this.userOrderService.getOrderDetails())));
    }
}
OrderDetailsService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
OrderDetailsService.ctorParameters = () => [
    { type: UserOrderService },
    { type: RoutingService }
];
/** @nocollapse */ OrderDetailsService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OrderDetailsService_Factory() { return new OrderDetailsService(i0.ɵɵinject(i1.UserOrderService), i0.ɵɵinject(i1.RoutingService)); }, token: OrderDetailsService, providedIn: "root" });
if (false) {
    /** @type {?} */
    OrderDetailsService.prototype.orderCode$;
    /** @type {?} */
    OrderDetailsService.prototype.orderLoad$;
    /**
     * @type {?}
     * @private
     */
    OrderDetailsService.prototype.userOrderService;
    /**
     * @type {?}
     * @private
     */
    OrderDetailsService.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBUyxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUxRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUtsRSxNQUFNLE9BQU8sbUJBQW1COzs7OztJQUk5QixZQUNVLGdCQUFrQyxFQUNsQyxjQUE4QjtRQUQ5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUV0QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjO2FBQ2xDLGNBQWMsRUFBRTthQUNoQixJQUFJLENBQUMsR0FBRzs7OztRQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztRQUVoRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUNwQyxHQUFHOzs7O1FBQUMsU0FBUyxDQUFDLEVBQUU7WUFDZCxJQUFJLFNBQVMsRUFBRTtnQkFDYixJQUFJLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDbkQ7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDM0M7UUFDSCxDQUFDLEVBQUMsRUFDRixXQUFXLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUMvQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUN6QixTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLEVBQUMsQ0FDekQsQ0FBQztJQUNKLENBQUM7OztZQS9CRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFOK0IsZ0JBQWdCO1lBQWhDLGNBQWM7Ozs7O0lBUTVCLHlDQUErQjs7SUFDL0IseUNBQTJCOzs7OztJQUd6QiwrQ0FBMEM7Ozs7O0lBQzFDLDZDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9yZGVyLCBSb3V0aW5nU2VydmljZSwgVXNlck9yZGVyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHNoYXJlUmVwbGF5LCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyRGV0YWlsc1NlcnZpY2Uge1xuICBvcmRlckNvZGUkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIG9yZGVyTG9hZCQ6IE9ic2VydmFibGU8e30+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdXNlck9yZGVyU2VydmljZTogVXNlck9yZGVyU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHtcbiAgICB0aGlzLm9yZGVyQ29kZSQgPSB0aGlzLnJvdXRpbmdTZXJ2aWNlXG4gICAgICAuZ2V0Um91dGVyU3RhdGUoKVxuICAgICAgLnBpcGUobWFwKHJvdXRpbmdEYXRhID0+IHJvdXRpbmdEYXRhLnN0YXRlLnBhcmFtcy5vcmRlckNvZGUpKTtcblxuICAgIHRoaXMub3JkZXJMb2FkJCA9IHRoaXMub3JkZXJDb2RlJC5waXBlKFxuICAgICAgdGFwKG9yZGVyQ29kZSA9PiB7XG4gICAgICAgIGlmIChvcmRlckNvZGUpIHtcbiAgICAgICAgICB0aGlzLnVzZXJPcmRlclNlcnZpY2UubG9hZE9yZGVyRGV0YWlscyhvcmRlckNvZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudXNlck9yZGVyU2VydmljZS5jbGVhck9yZGVyRGV0YWlscygpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWUgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0T3JkZXJEZXRhaWxzKCk6IE9ic2VydmFibGU8T3JkZXI+IHtcbiAgICByZXR1cm4gdGhpcy5vcmRlckxvYWQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy51c2VyT3JkZXJTZXJ2aWNlLmdldE9yZGVyRGV0YWlscygpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==