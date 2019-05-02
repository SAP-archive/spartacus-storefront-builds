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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL215LWFjY291bnQvb3JkZXIvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sRUFDTCxXQUFXLEVBRVgsY0FBYyxFQUNkLFdBQVcsR0FDWixNQUFNLGlCQUFpQixDQUFDO0FBRXpCO0lBTUUsNkJBQ1UsV0FBd0IsRUFDeEIsV0FBd0IsRUFDeEIsY0FBOEI7UUFIeEMsaUJBdUJDO1FBdEJTLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUV0QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXO2FBQzVCLFlBQVksRUFBRTthQUNkLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxRQUFRLElBQUksT0FBQSxRQUFRLENBQUMsTUFBTSxFQUFmLENBQWUsQ0FBQyxDQUFDLENBQUM7UUFFMUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsY0FBYzthQUNsQyxjQUFjLEVBQUU7YUFDaEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLFdBQVcsSUFBSSxPQUFBLFdBQVcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBbEMsQ0FBa0MsQ0FBQyxDQUFDLENBQUM7UUFFaEUsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUNqRSxHQUFHLENBQUMsVUFBQyxFQUFtQjtnQkFBbkIsMEJBQW1CLEVBQWxCLGNBQU0sRUFBRSxpQkFBUztZQUNyQixJQUFJLE1BQU0sSUFBSSxTQUFTLEVBQUU7Z0JBQ3ZCLEtBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQ3REO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUN0QztRQUNILENBQUMsQ0FBQyxFQUNGLFdBQVcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQy9DLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsNkNBQWU7OztJQUFmO1FBQUEsaUJBSUM7UUFIQyxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUN6QixTQUFTLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxFQUFFLEVBQWxDLENBQWtDLENBQUMsQ0FDcEQsQ0FBQztJQUNKLENBQUM7O2dCQW5DRixVQUFVOzs7O2dCQU5ULFdBQVc7Z0JBR1gsV0FBVztnQkFEWCxjQUFjOztJQXdDaEIsMEJBQUM7Q0FBQSxBQXBDRCxJQW9DQztTQW5DWSxtQkFBbUI7OztJQUM5QixzQ0FBNEI7O0lBQzVCLHlDQUErQjs7SUFDL0IseUNBQTJCOzs7OztJQUd6QiwwQ0FBZ0M7Ozs7O0lBQ2hDLDBDQUFnQzs7Ozs7SUFDaEMsNkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzaGFyZVJlcGxheSwgc3dpdGNoTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIEF1dGhTZXJ2aWNlLFxuICBPcmRlcixcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFVzZXJTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT3JkZXJEZXRhaWxzU2VydmljZSB7XG4gIHVzZXJJZCQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgb3JkZXJDb2RlJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBvcmRlckxvYWQkOiBPYnNlcnZhYmxlPHt9PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHtcbiAgICB0aGlzLnVzZXJJZCQgPSB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAuZ2V0VXNlclRva2VuKClcbiAgICAgIC5waXBlKG1hcCh1c2VyRGF0YSA9PiB1c2VyRGF0YS51c2VySWQpKTtcblxuICAgIHRoaXMub3JkZXJDb2RlJCA9IHRoaXMucm91dGluZ1NlcnZpY2VcbiAgICAgIC5nZXRSb3V0ZXJTdGF0ZSgpXG4gICAgICAucGlwZShtYXAocm91dGluZ0RhdGEgPT4gcm91dGluZ0RhdGEuc3RhdGUucGFyYW1zLm9yZGVyQ29kZSkpO1xuXG4gICAgdGhpcy5vcmRlckxvYWQkID0gY29tYmluZUxhdGVzdCh0aGlzLnVzZXJJZCQsIHRoaXMub3JkZXJDb2RlJCkucGlwZShcbiAgICAgIHRhcCgoW3VzZXJJZCwgb3JkZXJDb2RlXSkgPT4ge1xuICAgICAgICBpZiAodXNlcklkICYmIG9yZGVyQ29kZSkge1xuICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UubG9hZE9yZGVyRGV0YWlscyh1c2VySWQsIG9yZGVyQ29kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy51c2VyU2VydmljZS5jbGVhck9yZGVyRGV0YWlscygpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWUgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0T3JkZXJEZXRhaWxzKCk6IE9ic2VydmFibGU8T3JkZXI+IHtcbiAgICByZXR1cm4gdGhpcy5vcmRlckxvYWQkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy51c2VyU2VydmljZS5nZXRPcmRlckRldGFpbHMoKSlcbiAgICApO1xuICB9XG59XG4iXX0=