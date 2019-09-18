/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CartDataService, OCC_USER_ID_ANONYMOUS, RoutingService, UserOrderService, } from '@spartacus/core';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
export class OrderDetailsService {
    /**
     * @param {?} userOrderService
     * @param {?} routingService
     * @param {?=} cartDataService
     */
    constructor(userOrderService, routingService, cartDataService) {
        this.userOrderService = userOrderService;
        this.routingService = routingService;
        this.cartDataService = cartDataService;
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
                if (this.cartDataService.userId === OCC_USER_ID_ANONYMOUS) {
                    this.userOrderService.loadOrderDetails(orderCode, OCC_USER_ID_ANONYMOUS);
                }
                else {
                    this.userOrderService.loadOrderDetails(orderCode);
                }
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
    { type: RoutingService },
    { type: CartDataService }
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
    /**
     * @type {?}
     * @private
     */
    OrderDetailsService.prototype.cartDataService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxlQUFlLEVBQ2YscUJBQXFCLEVBRXJCLGNBQWMsRUFDZCxnQkFBZ0IsR0FDakIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHbEUsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBbUI5QixZQUNVLGdCQUFrQyxFQUNsQyxjQUE4QixFQUM5QixlQUFpQztRQUZqQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFFekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYzthQUNsQyxjQUFjLEVBQUU7YUFDaEIsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUM7UUFFaEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDcEMsR0FBRzs7OztRQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2QsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sS0FBSyxxQkFBcUIsRUFBRTtvQkFDekQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUNwQyxTQUFTLEVBQ1QscUJBQXFCLENBQ3RCLENBQUM7aUJBQ0g7cUJBQU07b0JBQ0wsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO2lCQUNuRDthQUNGO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQzNDO1FBQ0gsQ0FBQyxFQUFDLEVBQ0YsV0FBVyxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FDL0MsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDekIsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxFQUFDLENBQ3pELENBQUM7SUFDSixDQUFDOzs7WUFwREYsVUFBVTs7OztZQUxULGdCQUFnQjtZQURoQixjQUFjO1lBSGQsZUFBZTs7OztJQVdmLHlDQUErQjs7SUFDL0IseUNBQTJCOzs7OztJQWtCekIsK0NBQTBDOzs7OztJQUMxQyw2Q0FBc0M7Ozs7O0lBQ3RDLDhDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENhcnREYXRhU2VydmljZSxcbiAgT0NDX1VTRVJfSURfQU5PTllNT1VTLFxuICBPcmRlcixcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFVzZXJPcmRlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHNoYXJlUmVwbGF5LCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9yZGVyRGV0YWlsc1NlcnZpY2Uge1xuICBvcmRlckNvZGUkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIG9yZGVyTG9hZCQ6IE9ic2VydmFibGU8e30+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHVzZXJPcmRlclNlcnZpY2U6IFVzZXJPcmRlclNlcnZpY2UsXG4gICAgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIGNhcnREYXRhU2VydmljZTogQ2FydERhdGFTZXJ2aWNlIC8vIHRzbGludDpkaXNhYmxlLWxpbmVcbiAgKTtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIDEueFxuICAgKiBOT1RFOiBjaGVjayBpc3N1ZTojMTIyNSBmb3IgbW9yZSBpbmZvXG4gICAqXG4gICAqIFRPRE8oaXNzdWU6IzEyMjUpIERlcHJlY2F0ZWQgc2luY2UgMS54XG4gICAqL1xuICBjb25zdHJ1Y3RvcihcbiAgICB1c2VyT3JkZXJTZXJ2aWNlOiBVc2VyT3JkZXJTZXJ2aWNlLFxuICAgIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVzZXJPcmRlclNlcnZpY2U6IFVzZXJPcmRlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjYXJ0RGF0YVNlcnZpY2U/OiBDYXJ0RGF0YVNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5vcmRlckNvZGUkID0gdGhpcy5yb3V0aW5nU2VydmljZVxuICAgICAgLmdldFJvdXRlclN0YXRlKClcbiAgICAgIC5waXBlKG1hcChyb3V0aW5nRGF0YSA9PiByb3V0aW5nRGF0YS5zdGF0ZS5wYXJhbXMub3JkZXJDb2RlKSk7XG5cbiAgICB0aGlzLm9yZGVyTG9hZCQgPSB0aGlzLm9yZGVyQ29kZSQucGlwZShcbiAgICAgIHRhcChvcmRlckNvZGUgPT4ge1xuICAgICAgICBpZiAob3JkZXJDb2RlKSB7XG4gICAgICAgICAgaWYgKHRoaXMuY2FydERhdGFTZXJ2aWNlLnVzZXJJZCA9PT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB7XG4gICAgICAgICAgICB0aGlzLnVzZXJPcmRlclNlcnZpY2UubG9hZE9yZGVyRGV0YWlscyhcbiAgICAgICAgICAgICAgb3JkZXJDb2RlLFxuICAgICAgICAgICAgICBPQ0NfVVNFUl9JRF9BTk9OWU1PVVNcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXNlck9yZGVyU2VydmljZS5sb2FkT3JkZXJEZXRhaWxzKG9yZGVyQ29kZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudXNlck9yZGVyU2VydmljZS5jbGVhck9yZGVyRGV0YWlscygpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWUgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0T3JkZXJEZXRhaWxzKCk6IE9ic2VydmFibGU8T3JkZXI+IHtcbiAgICByZXR1cm4gdGhpcy5vcmRlckxvYWQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy51c2VyT3JkZXJTZXJ2aWNlLmdldE9yZGVyRGV0YWlscygpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==