/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            .pipe(map(function (routingData) { return routingData.state.params.orderCode; }));
        this.orderLoad$ = this.orderCode$.pipe(tap(function (orderCode) {
            if (orderCode) {
                _this.userService.loadOrderDetails(orderCode);
            }
            else {
                _this.userService.clearOrderDetails();
            }
        }), shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * @return {?}
     */
    OrderDetailsService.prototype.getOrderDetails = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.orderLoad$.pipe(switchMap(function () { return _this.userService.getOrderDetails(); }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBUyxjQUFjLEVBQUUsV0FBVyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFckUsT0FBTyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFO0lBS0UsNkJBQ1UsV0FBd0IsRUFDeEIsY0FBOEI7UUFGeEMsaUJBa0JDO1FBakJTLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUV0QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjO2FBQ2xDLGNBQWMsRUFBRTthQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFsQyxDQUFrQyxDQUFDLENBQUMsQ0FBQztRQUVoRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUNwQyxHQUFHLENBQUMsVUFBQSxTQUFTO1lBQ1gsSUFBSSxTQUFTLEVBQUU7Z0JBQ2IsS0FBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM5QztpQkFBTTtnQkFDTCxLQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDdEM7UUFDSCxDQUFDLENBQUMsRUFDRixXQUFXLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUMvQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELDZDQUFlOzs7SUFBZjtRQUFBLGlCQUlDO1FBSEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDekIsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxFQUFsQyxDQUFrQyxDQUFDLENBQ3BELENBQUM7SUFDSixDQUFDOztnQkE3QkYsVUFBVTs7OztnQkFKcUIsV0FBVztnQkFBM0IsY0FBYzs7SUFrQzlCLDBCQUFDO0NBQUEsQUE5QkQsSUE4QkM7U0E3QlksbUJBQW1COzs7SUFDOUIseUNBQStCOztJQUMvQix5Q0FBMkI7Ozs7O0lBR3pCLDBDQUFnQzs7Ozs7SUFDaEMsNkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3JkZXIsIFJvdXRpbmdTZXJ2aWNlLCBVc2VyU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHNoYXJlUmVwbGF5LCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9yZGVyRGV0YWlsc1NlcnZpY2Uge1xuICBvcmRlckNvZGUkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIG9yZGVyTG9hZCQ6IE9ic2VydmFibGU8e30+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMub3JkZXJDb2RlJCA9IHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAgIC5nZXRSb3V0ZXJTdGF0ZSgpXG4gICAgICAucGlwZShtYXAocm91dGluZ0RhdGEgPT4gcm91dGluZ0RhdGEuc3RhdGUucGFyYW1zLm9yZGVyQ29kZSkpO1xuXG4gICAgdGhpcy5vcmRlckxvYWQkID0gdGhpcy5vcmRlckNvZGUkLnBpcGUoXG4gICAgICB0YXAob3JkZXJDb2RlID0+IHtcbiAgICAgICAgaWYgKG9yZGVyQ29kZSkge1xuICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9hZE9yZGVyRGV0YWlscyhvcmRlckNvZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UuY2xlYXJPcmRlckRldGFpbHMoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldE9yZGVyRGV0YWlscygpOiBPYnNlcnZhYmxlPE9yZGVyPiB7XG4gICAgcmV0dXJuIHRoaXMub3JkZXJMb2FkJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMudXNlclNlcnZpY2UuZ2V0T3JkZXJEZXRhaWxzKCkpXG4gICAgKTtcbiAgfVxufVxuIl19