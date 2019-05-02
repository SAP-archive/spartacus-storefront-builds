/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { AuthService, RoutingService, UserService, } from '@spartacus/core';
export class OrderDetailsService {
    /**
     * @param {?} authService
     * @param {?} userService
     * @param {?} routingService
     */
    constructor(authService, userService, routingService) {
        this.authService = authService;
        this.userService = userService;
        this.routingService = routingService;
        this.userId$ = this.authService
            .getUserToken()
            .pipe(map(userData => userData.userId));
        this.orderCode$ = this.routingService
            .getRouterState()
            .pipe(map(routingData => routingData.state.params.orderCode));
        this.orderLoad$ = combineLatest(this.userId$, this.orderCode$).pipe(tap(([userId, orderCode]) => {
            if (userId && orderCode) {
                this.userService.loadOrderDetails(userId, orderCode);
            }
            else {
                this.userService.clearOrderDetails();
            }
        }), shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * @return {?}
     */
    getOrderDetails() {
        return this.orderLoad$.pipe(switchMap(() => this.userService.getOrderDetails()));
    }
}
OrderDetailsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OrderDetailsService.ctorParameters = () => [
    { type: AuthService },
    { type: UserService },
    { type: RoutingService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL215LWFjY291bnQvb3JkZXIvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEUsT0FBTyxFQUNMLFdBQVcsRUFFWCxjQUFjLEVBQ2QsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7QUFHekIsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7O0lBSzlCLFlBQ1UsV0FBd0IsRUFDeEIsV0FBd0IsRUFDeEIsY0FBOEI7UUFGOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRXRDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVc7YUFDNUIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBRTFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWM7YUFDbEMsY0FBYyxFQUFFO2FBQ2hCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBRWhFLElBQUksQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FDakUsR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEVBQUUsRUFBRTtZQUMxQixJQUFJLE1BQU0sSUFBSSxTQUFTLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQ3REO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUN0QztRQUNILENBQUMsQ0FBQyxFQUNGLFdBQVcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQy9DLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsZUFBZTtRQUNiLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ3pCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQ3BELENBQUM7SUFDSixDQUFDOzs7WUFuQ0YsVUFBVTs7OztZQU5ULFdBQVc7WUFHWCxXQUFXO1lBRFgsY0FBYzs7OztJQU1kLHNDQUE0Qjs7SUFDNUIseUNBQStCOztJQUMvQix5Q0FBMkI7Ozs7O0lBR3pCLDBDQUFnQzs7Ozs7SUFDaEMsMENBQWdDOzs7OztJQUNoQyw2Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHNoYXJlUmVwbGF5LCBzd2l0Y2hNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgQXV0aFNlcnZpY2UsXG4gIE9yZGVyLFxuICBSb3V0aW5nU2VydmljZSxcbiAgVXNlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPcmRlckRldGFpbHNTZXJ2aWNlIHtcbiAgdXNlcklkJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBvcmRlckNvZGUkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIG9yZGVyTG9hZCQ6IE9ic2VydmFibGU8e30+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge1xuICAgIHRoaXMudXNlcklkJCA9IHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgIC5nZXRVc2VyVG9rZW4oKVxuICAgICAgLnBpcGUobWFwKHVzZXJEYXRhID0+IHVzZXJEYXRhLnVzZXJJZCkpO1xuXG4gICAgdGhpcy5vcmRlckNvZGUkID0gdGhpcy5yb3V0aW5nU2VydmljZVxuICAgICAgLmdldFJvdXRlclN0YXRlKClcbiAgICAgIC5waXBlKG1hcChyb3V0aW5nRGF0YSA9PiByb3V0aW5nRGF0YS5zdGF0ZS5wYXJhbXMub3JkZXJDb2RlKSk7XG5cbiAgICB0aGlzLm9yZGVyTG9hZCQgPSBjb21iaW5lTGF0ZXN0KHRoaXMudXNlcklkJCwgdGhpcy5vcmRlckNvZGUkKS5waXBlKFxuICAgICAgdGFwKChbdXNlcklkLCBvcmRlckNvZGVdKSA9PiB7XG4gICAgICAgIGlmICh1c2VySWQgJiYgb3JkZXJDb2RlKSB7XG4gICAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2FkT3JkZXJEZXRhaWxzKHVzZXJJZCwgb3JkZXJDb2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmNsZWFyT3JkZXJEZXRhaWxzKCk7XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICAgICk7XG4gIH1cblxuICBnZXRPcmRlckRldGFpbHMoKTogT2JzZXJ2YWJsZTxPcmRlcj4ge1xuICAgIHJldHVybiB0aGlzLm9yZGVyTG9hZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLnVzZXJTZXJ2aWNlLmdldE9yZGVyRGV0YWlscygpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==