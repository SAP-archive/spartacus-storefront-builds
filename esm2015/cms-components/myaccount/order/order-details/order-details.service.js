/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RoutingService, UserOrderService } from '@spartacus/core';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
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
    { type: Injectable }
];
/** @nocollapse */
OrderDetailsService.ctorParameters = () => [
    { type: UserOrderService },
    { type: RoutingService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBUyxjQUFjLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUxRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHbEUsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFJOUIsWUFDVSxnQkFBa0MsRUFDbEMsY0FBOEI7UUFEOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFFdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYzthQUNsQyxjQUFjLEVBQUU7YUFDaEIsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7UUFFaEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDcEMsR0FBRzs7OztRQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2QsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ25EO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQzNDO1FBQ0gsQ0FBQyxFQUFDLEVBQ0YsV0FBVyxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FDL0MsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDekIsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxFQUFDLENBQ3pELENBQUM7SUFDSixDQUFDOzs7WUE3QkYsVUFBVTs7OztZQUpxQixnQkFBZ0I7WUFBaEMsY0FBYzs7OztJQU01Qix5Q0FBK0I7O0lBQy9CLHlDQUEyQjs7Ozs7SUFHekIsK0NBQTBDOzs7OztJQUMxQyw2Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPcmRlciwgUm91dGluZ1NlcnZpY2UsIFVzZXJPcmRlclNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzaGFyZVJlcGxheSwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPcmRlckRldGFpbHNTZXJ2aWNlIHtcbiAgb3JkZXJDb2RlJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBvcmRlckxvYWQkOiBPYnNlcnZhYmxlPHt9PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVzZXJPcmRlclNlcnZpY2U6IFVzZXJPcmRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5vcmRlckNvZGUkID0gdGhpcy5yb3V0aW5nU2VydmljZVxuICAgICAgLmdldFJvdXRlclN0YXRlKClcbiAgICAgIC5waXBlKG1hcChyb3V0aW5nRGF0YSA9PiByb3V0aW5nRGF0YS5zdGF0ZS5wYXJhbXMub3JkZXJDb2RlKSk7XG5cbiAgICB0aGlzLm9yZGVyTG9hZCQgPSB0aGlzLm9yZGVyQ29kZSQucGlwZShcbiAgICAgIHRhcChvcmRlckNvZGUgPT4ge1xuICAgICAgICBpZiAob3JkZXJDb2RlKSB7XG4gICAgICAgICAgdGhpcy51c2VyT3JkZXJTZXJ2aWNlLmxvYWRPcmRlckRldGFpbHMob3JkZXJDb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnVzZXJPcmRlclNlcnZpY2UuY2xlYXJPcmRlckRldGFpbHMoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldE9yZGVyRGV0YWlscygpOiBPYnNlcnZhYmxlPE9yZGVyPiB7XG4gICAgcmV0dXJuIHRoaXMub3JkZXJMb2FkJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMudXNlck9yZGVyU2VydmljZS5nZXRPcmRlckRldGFpbHMoKSlcbiAgICApO1xuICB9XG59XG4iXX0=