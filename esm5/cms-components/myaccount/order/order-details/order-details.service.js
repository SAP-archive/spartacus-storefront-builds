/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { AuthService, RoutingService, UserService, } from '@spartacus/core';
var OrderDetailsService = /** @class */ (function () {
    function OrderDetailsService(authService, userService, routingService) {
        var _this = this;
        this.authService = authService;
        this.userService = userService;
        this.routingService = routingService;
        this.userId$ = this.authService
            .getUserToken()
            .pipe(map(function (userData) { return userData.userId; }));
        this.orderCode$ = this.routingService
            .getRouterState()
            .pipe(map(function (routingData) { return routingData.state.params.orderCode; }));
        this.orderLoad$ = combineLatest(this.userId$, this.orderCode$).pipe(tap(function (_a) {
            var _b = tslib_1.__read(_a, 2), userId = _b[0], orderCode = _b[1];
            if (userId && orderCode) {
                _this.userService.loadOrderDetails(userId, orderCode);
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
        { type: AuthService },
        { type: UserService },
        { type: RoutingService }
    ]; };
    return OrderDetailsService;
}());
export { OrderDetailsService };
if (false) {
    /** @type {?} */
    OrderDetailsService.prototype.userId$;
    /** @type {?} */
    OrderDetailsService.prototype.orderCode$;
    /** @type {?} */
    OrderDetailsService.prototype.orderLoad$;
    /**
     * @type {?}
     * @private
     */
    OrderDetailsService.prototype.authService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVsRSxPQUFPLEVBQ0wsV0FBVyxFQUVYLGNBQWMsRUFDZCxXQUFXLEdBQ1osTUFBTSxpQkFBaUIsQ0FBQztBQUV6QjtJQU1FLDZCQUNVLFdBQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLGNBQThCO1FBSHhDLGlCQXVCQztRQXRCUyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFFdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVzthQUM1QixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLE1BQU0sRUFBZixDQUFlLENBQUMsQ0FBQyxDQUFDO1FBRTFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWM7YUFDbEMsY0FBYyxFQUFFO2FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxXQUFXLElBQUksT0FBQSxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQWxDLENBQWtDLENBQUMsQ0FBQyxDQUFDO1FBRWhFLElBQUksQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FDakUsR0FBRyxDQUFDLFVBQUMsRUFBbUI7Z0JBQW5CLDBCQUFtQixFQUFsQixjQUFNLEVBQUUsaUJBQVM7WUFDckIsSUFBSSxNQUFNLElBQUksU0FBUyxFQUFFO2dCQUN2QixLQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQzthQUN0RDtpQkFBTTtnQkFDTCxLQUFJLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDdEM7UUFDSCxDQUFDLENBQUMsRUFDRixXQUFXLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUMvQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELDZDQUFlOzs7SUFBZjtRQUFBLGlCQUlDO1FBSEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDekIsU0FBUyxDQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxFQUFsQyxDQUFrQyxDQUFDLENBQ3BELENBQUM7SUFDSixDQUFDOztnQkFuQ0YsVUFBVTs7OztnQkFOVCxXQUFXO2dCQUdYLFdBQVc7Z0JBRFgsY0FBYzs7SUF3Q2hCLDBCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7U0FuQ1ksbUJBQW1COzs7SUFDOUIsc0NBQTRCOztJQUM1Qix5Q0FBK0I7O0lBQy9CLHlDQUEyQjs7Ozs7SUFHekIsMENBQWdDOzs7OztJQUNoQywwQ0FBZ0M7Ozs7O0lBQ2hDLDZDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc2hhcmVSZXBsYXksIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBBdXRoU2VydmljZSxcbiAgT3JkZXIsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBVc2VyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9yZGVyRGV0YWlsc1NlcnZpY2Uge1xuICB1c2VySWQkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIG9yZGVyQ29kZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgb3JkZXJMb2FkJDogT2JzZXJ2YWJsZTx7fT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy51c2VySWQkID0gdGhpcy5hdXRoU2VydmljZVxuICAgICAgLmdldFVzZXJUb2tlbigpXG4gICAgICAucGlwZShtYXAodXNlckRhdGEgPT4gdXNlckRhdGEudXNlcklkKSk7XG5cbiAgICB0aGlzLm9yZGVyQ29kZSQgPSB0aGlzLnJvdXRpbmdTZXJ2aWNlXG4gICAgICAuZ2V0Um91dGVyU3RhdGUoKVxuICAgICAgLnBpcGUobWFwKHJvdXRpbmdEYXRhID0+IHJvdXRpbmdEYXRhLnN0YXRlLnBhcmFtcy5vcmRlckNvZGUpKTtcblxuICAgIHRoaXMub3JkZXJMb2FkJCA9IGNvbWJpbmVMYXRlc3QodGhpcy51c2VySWQkLCB0aGlzLm9yZGVyQ29kZSQpLnBpcGUoXG4gICAgICB0YXAoKFt1c2VySWQsIG9yZGVyQ29kZV0pID0+IHtcbiAgICAgICAgaWYgKHVzZXJJZCAmJiBvcmRlckNvZGUpIHtcbiAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWRPcmRlckRldGFpbHModXNlcklkLCBvcmRlckNvZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UuY2xlYXJPcmRlckRldGFpbHMoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldE9yZGVyRGV0YWlscygpOiBPYnNlcnZhYmxlPE9yZGVyPiB7XG4gICAgcmV0dXJuIHRoaXMub3JkZXJMb2FkJC5waXBlKFxuICAgICAgc3dpdGNoTWFwKCgpID0+IHRoaXMudXNlclNlcnZpY2UuZ2V0T3JkZXJEZXRhaWxzKCkpXG4gICAgKTtcbiAgfVxufVxuIl19