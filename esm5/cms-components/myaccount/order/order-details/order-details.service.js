/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CartDataService, OCC_USER_ID_ANONYMOUS, RoutingService, UserOrderService, } from '@spartacus/core';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
var OrderDetailsService = /** @class */ (function () {
    function OrderDetailsService(userOrderService, routingService, cartDataService) {
        var _this = this;
        this.userOrderService = userOrderService;
        this.routingService = routingService;
        this.cartDataService = cartDataService;
        this.orderCode$ = this.routingService
            .getRouterState()
            .pipe(map((/**
         * @param {?} routingData
         * @return {?}
         */
        function (routingData) { return routingData.state.params.orderCode; })));
        this.orderLoad$ = this.orderCode$.pipe(tap((/**
         * @param {?} orderCode
         * @return {?}
         */
        function (orderCode) {
            if (orderCode) {
                if (_this.cartDataService.userId === OCC_USER_ID_ANONYMOUS) {
                    _this.userOrderService.loadOrderDetails(orderCode, OCC_USER_ID_ANONYMOUS);
                }
                else {
                    _this.userOrderService.loadOrderDetails(orderCode);
                }
            }
            else {
                _this.userOrderService.clearOrderDetails();
            }
        })), shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * @return {?}
     */
    OrderDetailsService.prototype.getOrderDetails = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.orderLoad$.pipe(switchMap((/**
         * @return {?}
         */
        function () { return _this.userOrderService.getOrderDetails(); })));
    };
    OrderDetailsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OrderDetailsService.ctorParameters = function () { return [
        { type: UserOrderService },
        { type: RoutingService },
        { type: CartDataService }
    ]; };
    return OrderDetailsService;
}());
export { OrderDetailsService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxlQUFlLEVBQ2YscUJBQXFCLEVBRXJCLGNBQWMsRUFDZCxnQkFBZ0IsR0FDakIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEU7SUFvQkUsNkJBQ1UsZ0JBQWtDLEVBQ2xDLGNBQThCLEVBQzlCLGVBQWlDO1FBSDNDLGlCQTBCQztRQXpCUyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7UUFFekMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYzthQUNsQyxjQUFjLEVBQUU7YUFDaEIsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLFdBQVcsSUFBSSxPQUFBLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBbEMsQ0FBa0MsRUFBQyxDQUFDLENBQUM7UUFFaEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDcEMsR0FBRzs7OztRQUFDLFVBQUEsU0FBUztZQUNYLElBQUksU0FBUyxFQUFFO2dCQUNiLElBQUksS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEtBQUsscUJBQXFCLEVBQUU7b0JBQ3pELEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FDcEMsU0FBUyxFQUNULHFCQUFxQixDQUN0QixDQUFDO2lCQUNIO3FCQUFNO29CQUNMLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDbkQ7YUFDRjtpQkFBTTtnQkFDTCxLQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUMzQztRQUNILENBQUMsRUFBQyxFQUNGLFdBQVcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQy9DLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsNkNBQWU7OztJQUFmO1FBQUEsaUJBSUM7UUFIQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUN6QixTQUFTOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxFQUF2QyxDQUF1QyxFQUFDLENBQ3pELENBQUM7SUFDSixDQUFDOztnQkFwREYsVUFBVTs7OztnQkFMVCxnQkFBZ0I7Z0JBRGhCLGNBQWM7Z0JBSGQsZUFBZTs7SUE4RGpCLDBCQUFDO0NBQUEsQUFyREQsSUFxREM7U0FwRFksbUJBQW1COzs7SUFDOUIseUNBQStCOztJQUMvQix5Q0FBMkI7Ozs7O0lBa0J6QiwrQ0FBMEM7Ozs7O0lBQzFDLDZDQUFzQzs7Ozs7SUFDdEMsOENBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FydERhdGFTZXJ2aWNlLFxuICBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMsXG4gIE9yZGVyLFxuICBSb3V0aW5nU2VydmljZSxcbiAgVXNlck9yZGVyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc2hhcmVSZXBsYXksIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3JkZXJEZXRhaWxzU2VydmljZSB7XG4gIG9yZGVyQ29kZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgb3JkZXJMb2FkJDogT2JzZXJ2YWJsZTx7fT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgdXNlck9yZGVyU2VydmljZTogVXNlck9yZGVyU2VydmljZSxcbiAgICByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgY2FydERhdGFTZXJ2aWNlOiBDYXJ0RGF0YVNlcnZpY2UgLy8gdHNsaW50OmRpc2FibGUtbGluZVxuICApO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgMS54XG4gICAqIE5PVEU6IGNoZWNrIGlzc3VlOiMxMjI1IGZvciBtb3JlIGluZm9cbiAgICpcbiAgICogVE9ETyhpc3N1ZTojMTIyNSkgRGVwcmVjYXRlZCBzaW5jZSAxLnhcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHVzZXJPcmRlclNlcnZpY2U6IFVzZXJPcmRlclNlcnZpY2UsXG4gICAgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdXNlck9yZGVyU2VydmljZTogVXNlck9yZGVyU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIGNhcnREYXRhU2VydmljZT86IENhcnREYXRhU2VydmljZVxuICApIHtcbiAgICB0aGlzLm9yZGVyQ29kZSQgPSB0aGlzLnJvdXRpbmdTZXJ2aWNlXG4gICAgICAuZ2V0Um91dGVyU3RhdGUoKVxuICAgICAgLnBpcGUobWFwKHJvdXRpbmdEYXRhID0+IHJvdXRpbmdEYXRhLnN0YXRlLnBhcmFtcy5vcmRlckNvZGUpKTtcblxuICAgIHRoaXMub3JkZXJMb2FkJCA9IHRoaXMub3JkZXJDb2RlJC5waXBlKFxuICAgICAgdGFwKG9yZGVyQ29kZSA9PiB7XG4gICAgICAgIGlmIChvcmRlckNvZGUpIHtcbiAgICAgICAgICBpZiAodGhpcy5jYXJ0RGF0YVNlcnZpY2UudXNlcklkID09PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpIHtcbiAgICAgICAgICAgIHRoaXMudXNlck9yZGVyU2VydmljZS5sb2FkT3JkZXJEZXRhaWxzKFxuICAgICAgICAgICAgICBvcmRlckNvZGUsXG4gICAgICAgICAgICAgIE9DQ19VU0VSX0lEX0FOT05ZTU9VU1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51c2VyT3JkZXJTZXJ2aWNlLmxvYWRPcmRlckRldGFpbHMob3JkZXJDb2RlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy51c2VyT3JkZXJTZXJ2aWNlLmNsZWFyT3JkZXJEZXRhaWxzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICAgICk7XG4gIH1cblxuICBnZXRPcmRlckRldGFpbHMoKTogT2JzZXJ2YWJsZTxPcmRlcj4ge1xuICAgIHJldHVybiB0aGlzLm9yZGVyTG9hZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLnVzZXJPcmRlclNlcnZpY2UuZ2V0T3JkZXJEZXRhaWxzKCkpXG4gICAgKTtcbiAgfVxufVxuIl19