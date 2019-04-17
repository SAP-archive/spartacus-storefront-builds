/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { combineLatest, ReplaySubject } from 'rxjs';
import { map, multicast, refCount, switchMap, tap } from 'rxjs/operators';
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
        }), 
        // TODO: Replace next two lines with shareReplay(1, undefined, true) when RxJS 6.4 will be in use
        multicast(function () { return new ReplaySubject(1); }), refCount());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItZGV0YWlscy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL215LWFjY291bnQvb3JkZXIvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQWMsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUUsT0FBTyxFQUNMLFdBQVcsRUFFWCxjQUFjLEVBQ2QsV0FBVyxHQUNaLE1BQU0saUJBQWlCLENBQUM7QUFFekI7SUFNRSw2QkFDVSxXQUF3QixFQUN4QixXQUF3QixFQUN4QixjQUE4QjtRQUh4QyxpQkF5QkM7UUF4QlMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRXRDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVc7YUFDNUIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLFFBQVEsQ0FBQyxNQUFNLEVBQWYsQ0FBZSxDQUFDLENBQUMsQ0FBQztRQUUxQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxjQUFjO2FBQ2xDLGNBQWMsRUFBRTthQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsV0FBVyxJQUFJLE9BQUEsV0FBVyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFsQyxDQUFrQyxDQUFDLENBQUMsQ0FBQztRQUVoRSxJQUFJLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQ2pFLEdBQUcsQ0FBQyxVQUFDLEVBQW1CO2dCQUFuQiwwQkFBbUIsRUFBbEIsY0FBTSxFQUFFLGlCQUFTO1lBQ3JCLElBQUksTUFBTSxJQUFJLFNBQVMsRUFBRTtnQkFDdkIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDdEQ7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQ3RDO1FBQ0gsQ0FBQyxDQUFDO1FBQ0YsaUdBQWlHO1FBQ2pHLFNBQVMsQ0FBQyxjQUFNLE9BQUEsSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQXBCLENBQW9CLENBQUMsRUFDckMsUUFBUSxFQUFFLENBQ1gsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCw2Q0FBZTs7O0lBQWY7UUFBQSxpQkFJQztRQUhDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQ3pCLFNBQVMsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLEVBQUUsRUFBbEMsQ0FBa0MsQ0FBQyxDQUNwRCxDQUFDO0lBQ0osQ0FBQzs7Z0JBckNGLFVBQVU7Ozs7Z0JBTlQsV0FBVztnQkFHWCxXQUFXO2dCQURYLGNBQWM7O0lBMENoQiwwQkFBQztDQUFBLEFBdENELElBc0NDO1NBckNZLG1CQUFtQjs7O0lBQzlCLHNDQUE0Qjs7SUFDNUIseUNBQStCOztJQUMvQix5Q0FBMkI7Ozs7O0lBR3pCLDBDQUFnQzs7Ozs7SUFDaEMsMENBQWdDOzs7OztJQUNoQyw2Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBSZXBsYXlTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIG11bHRpY2FzdCwgcmVmQ291bnQsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1xuICBBdXRoU2VydmljZSxcbiAgT3JkZXIsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBVc2VyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9yZGVyRGV0YWlsc1NlcnZpY2Uge1xuICB1c2VySWQkOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIG9yZGVyQ29kZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgb3JkZXJMb2FkJDogT2JzZXJ2YWJsZTx7fT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy51c2VySWQkID0gdGhpcy5hdXRoU2VydmljZVxuICAgICAgLmdldFVzZXJUb2tlbigpXG4gICAgICAucGlwZShtYXAodXNlckRhdGEgPT4gdXNlckRhdGEudXNlcklkKSk7XG5cbiAgICB0aGlzLm9yZGVyQ29kZSQgPSB0aGlzLnJvdXRpbmdTZXJ2aWNlXG4gICAgICAuZ2V0Um91dGVyU3RhdGUoKVxuICAgICAgLnBpcGUobWFwKHJvdXRpbmdEYXRhID0+IHJvdXRpbmdEYXRhLnN0YXRlLnBhcmFtcy5vcmRlckNvZGUpKTtcblxuICAgIHRoaXMub3JkZXJMb2FkJCA9IGNvbWJpbmVMYXRlc3QodGhpcy51c2VySWQkLCB0aGlzLm9yZGVyQ29kZSQpLnBpcGUoXG4gICAgICB0YXAoKFt1c2VySWQsIG9yZGVyQ29kZV0pID0+IHtcbiAgICAgICAgaWYgKHVzZXJJZCAmJiBvcmRlckNvZGUpIHtcbiAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWRPcmRlckRldGFpbHModXNlcklkLCBvcmRlckNvZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudXNlclNlcnZpY2UuY2xlYXJPcmRlckRldGFpbHMoKTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICAvLyBUT0RPOiBSZXBsYWNlIG5leHQgdHdvIGxpbmVzIHdpdGggc2hhcmVSZXBsYXkoMSwgdW5kZWZpbmVkLCB0cnVlKSB3aGVuIFJ4SlMgNi40IHdpbGwgYmUgaW4gdXNlXG4gICAgICBtdWx0aWNhc3QoKCkgPT4gbmV3IFJlcGxheVN1YmplY3QoMSkpLFxuICAgICAgcmVmQ291bnQoKVxuICAgICk7XG4gIH1cblxuICBnZXRPcmRlckRldGFpbHMoKTogT2JzZXJ2YWJsZTxPcmRlcj4ge1xuICAgIHJldHVybiB0aGlzLm9yZGVyTG9hZCQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoKSA9PiB0aGlzLnVzZXJTZXJ2aWNlLmdldE9yZGVyRGV0YWlscygpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==