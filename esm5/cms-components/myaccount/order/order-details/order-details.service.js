/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RoutingService, UserService } from '@spartacus/core';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
var OrderDetailsService = /** @class */ (function () {
    function OrderDetailsService(userService, routingService) {
        var _this = this;
        this.userService = userService;
        this.routingService = routingService;
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
                _this.userService.loadOrderDetails(orderCode);
            }
            else {
                _this.userService.clearOrderDetails();
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
        function () { return _this.userService.getOrderDetails(); })));
    };
    OrderDetailsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OrderDetailsService.ctorParameters = function () { return [
        { type: UserService },
        { type: RoutingService }
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
    OrderDetailsService.prototype.userService;
    /**
     * @type {?}
     * @private
     */
    OrderDetailsService.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBUyxjQUFjLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFckUsT0FBTyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFO0lBS0UsNkJBQ1UsV0FBd0IsRUFDeEIsY0FBOEI7UUFGeEMsaUJBa0JDO1FBakJTLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUV0QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjO2FBQ2xDLGNBQWMsRUFBRTthQUNoQixJQUFJLENBQUMsR0FBRzs7OztRQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFsQyxDQUFrQyxFQUFDLENBQUMsQ0FBQztRQUVoRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUNwQyxHQUFHOzs7O1FBQUMsVUFBQSxTQUFTO1lBQ1gsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsS0FBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM5QztpQkFBTTtnQkFDTCxLQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDdEM7UUFDSCxDQUFDLEVBQUMsRUFDRixXQUFXLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUMvQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELDZDQUFlOzs7SUFBZjtRQUFBLGlCQUlDO1FBSEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDekIsU0FBUzs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLEVBQWxDLENBQWtDLEVBQUMsQ0FDcEQsQ0FBQztJQUNKLENBQUM7O2dCQTdCRixVQUFVOzs7O2dCQUpxQixXQUFXO2dCQUEzQixjQUFjOztJQWtDOUIsMEJBQUM7Q0FBQSxBQTlCRCxJQThCQztTQTdCWSxtQkFBbUI7OztJQUM5Qix5Q0FBK0I7O0lBQy9CLHlDQUEyQjs7Ozs7SUFHekIsMENBQWdDOzs7OztJQUNoQyw2Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPcmRlciwgUm91dGluZ1NlcnZpY2UsIFVzZXJTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc2hhcmVSZXBsYXksIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3JkZXJEZXRhaWxzU2VydmljZSB7XG4gIG9yZGVyQ29kZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgb3JkZXJMb2FkJDogT2JzZXJ2YWJsZTx7fT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5vcmRlckNvZGUkID0gdGhpcy5yb3V0aW5nU2VydmljZVxuICAgICAgLmdldFJvdXRlclN0YXRlKClcbiAgICAgIC5waXBlKG1hcChyb3V0aW5nRGF0YSA9PiByb3V0aW5nRGF0YS5zdGF0ZS5wYXJhbXMub3JkZXJDb2RlKSk7XG5cbiAgICB0aGlzLm9yZGVyTG9hZCQgPSB0aGlzLm9yZGVyQ29kZSQucGlwZShcbiAgICAgIHRhcChvcmRlckNvZGUgPT4ge1xuICAgICAgICBpZiAob3JkZXJDb2RlKSB7XG4gICAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2FkT3JkZXJEZXRhaWxzKG9yZGVyQ29kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy51c2VyU2VydmljZS5jbGVhck9yZGVyRGV0YWlscygpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWUgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0T3JkZXJEZXRhaWxzKCk6IE9ic2VydmFibGU8T3JkZXI+IHtcbiAgICByZXR1cm4gdGhpcy5vcmRlckxvYWQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy51c2VyU2VydmljZS5nZXRPcmRlckRldGFpbHMoKSlcbiAgICApO1xuICB9XG59XG4iXX0=