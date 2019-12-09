/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AsmAuthService, AuthService, RoutingService, WindowRef, } from '@spartacus/core';
import { of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { ASM_ENABLED_LOCAL_STORAGE_KEY } from '../asm-constants';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var AsmComponentService = /** @class */ (function () {
    function AsmComponentService(authService, asmAuthService, routingService, winRef) {
        this.authService = authService;
        this.asmAuthService = asmAuthService;
        this.routingService = routingService;
        this.winRef = winRef;
    }
    /**
     * @return {?}
     */
    AsmComponentService.prototype.logoutCustomerSupportAgentAndCustomer = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.authService
            .getUserToken()
            .pipe(take(1))
            .subscribe((/**
         * @param {?} token
         * @return {?}
         */
        function (token) {
            if (_this.asmAuthService.isCustomerEmulationToken(token)) {
                _this.logoutCustomer();
            }
            _this.asmAuthService.logoutCustomerSupportAgent();
        }));
    };
    /**
     * @return {?}
     */
    AsmComponentService.prototype.logoutCustomer = /**
     * @return {?}
     */
    function () {
        this.authService.logout();
        this.routingService.go({ cxRoute: 'home' });
    };
    /**
     * @return {?}
     */
    AsmComponentService.prototype.isCustomerEmulationSessionInProgress = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.authService
            .getUserToken()
            .pipe(mergeMap((/**
         * @param {?} userToken
         * @return {?}
         */
        function (userToken) {
            return of(_this.asmAuthService.isCustomerEmulationToken(userToken));
        })));
    };
    /**
     * We're currently only removing the persisted storage in the browser
     * to ensure the ASM experience isn't loaded on the next visit. There are a few
     * optimsiations we could think of:
     * - drop the `asm` parameter from the URL, in case it's still there
     * - remove the generated UI from the DOM (outlets currently do not support this)
     */
    /**
     * We're currently only removing the persisted storage in the browser
     * to ensure the ASM experience isn't loaded on the next visit. There are a few
     * optimsiations we could think of:
     * - drop the `asm` parameter from the URL, in case it's still there
     * - remove the generated UI from the DOM (outlets currently do not support this)
     * @return {?}
     */
    AsmComponentService.prototype.unload = /**
     * We're currently only removing the persisted storage in the browser
     * to ensure the ASM experience isn't loaded on the next visit. There are a few
     * optimsiations we could think of:
     * - drop the `asm` parameter from the URL, in case it's still there
     * - remove the generated UI from the DOM (outlets currently do not support this)
     * @return {?}
     */
    function () {
        if (this.winRef.localStorage) {
            this.winRef.localStorage.removeItem(ASM_ENABLED_LOCAL_STORAGE_KEY);
        }
    };
    AsmComponentService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    AsmComponentService.ctorParameters = function () { return [
        { type: AuthService },
        { type: AsmAuthService },
        { type: RoutingService },
        { type: WindowRef }
    ]; };
    /** @nocollapse */ AsmComponentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AsmComponentService_Factory() { return new AsmComponentService(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i1.AsmAuthService), i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.WindowRef)); }, token: AsmComponentService, providedIn: "root" });
    return AsmComponentService;
}());
export { AsmComponentService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    AsmComponentService.prototype.authService;
    /**
     * @type {?}
     * @protected
     */
    AsmComponentService.prototype.asmAuthService;
    /**
     * @type {?}
     * @protected
     */
    AsmComponentService.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    AsmComponentService.prototype.winRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYXNtL3NlcnZpY2VzL2FzbS1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsY0FBYyxFQUNkLFdBQVcsRUFDWCxjQUFjLEVBQ2QsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFFakU7SUFJRSw2QkFDWSxXQUF3QixFQUN4QixjQUE4QixFQUM5QixjQUE4QixFQUM5QixNQUFpQjtRQUhqQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFDMUIsQ0FBQzs7OztJQUVKLG1FQUFxQzs7O0lBQXJDO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsV0FBVzthQUNiLFlBQVksRUFBRTthQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDYixTQUFTOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ2QsSUFBSSxLQUFJLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUN2RCxLQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDdkI7WUFDRCxLQUFJLENBQUMsY0FBYyxDQUFDLDBCQUEwQixFQUFFLENBQUM7UUFDbkQsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBRUQsNENBQWM7OztJQUFkO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCxrRUFBb0M7OztJQUFwQztRQUFBLGlCQVFDO1FBUEMsT0FBTyxJQUFJLENBQUMsV0FBVzthQUNwQixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0gsUUFBUTs7OztRQUFDLFVBQUEsU0FBUztZQUNoQixPQUFBLEVBQUUsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQTNELENBQTJELEVBQzVELENBQ0YsQ0FBQztJQUNOLENBQUM7SUFFRDs7Ozs7O09BTUc7Ozs7Ozs7OztJQUNILG9DQUFNOzs7Ozs7OztJQUFOO1FBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsNkJBQTZCLENBQUMsQ0FBQztTQUNwRTtJQUNILENBQUM7O2dCQWpERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVZDLFdBQVc7Z0JBRFgsY0FBYztnQkFFZCxjQUFjO2dCQUNkLFNBQVM7Ozs4QkFMWDtDQTZEQyxBQWxERCxJQWtEQztTQS9DWSxtQkFBbUI7Ozs7OztJQUU1QiwwQ0FBa0M7Ozs7O0lBQ2xDLDZDQUF3Qzs7Ozs7SUFDeEMsNkNBQXdDOzs7OztJQUN4QyxxQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBc21BdXRoU2VydmljZSxcbiAgQXV0aFNlcnZpY2UsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBXaW5kb3dSZWYsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWVyZ2VNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBU01fRU5BQkxFRF9MT0NBTF9TVE9SQUdFX0tFWSB9IGZyb20gJy4uL2FzbS1jb25zdGFudHMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXNtQ29tcG9uZW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFzbUF1dGhTZXJ2aWNlOiBBc21BdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZlxuICApIHt9XG5cbiAgbG9nb3V0Q3VzdG9tZXJTdXBwb3J0QWdlbnRBbmRDdXN0b21lcigpOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAuZ2V0VXNlclRva2VuKClcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKHRva2VuID0+IHtcbiAgICAgICAgaWYgKHRoaXMuYXNtQXV0aFNlcnZpY2UuaXNDdXN0b21lckVtdWxhdGlvblRva2VuKHRva2VuKSkge1xuICAgICAgICAgIHRoaXMubG9nb3V0Q3VzdG9tZXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFzbUF1dGhTZXJ2aWNlLmxvZ291dEN1c3RvbWVyU3VwcG9ydEFnZW50KCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGxvZ291dEN1c3RvbWVyKCk6IHZvaWQge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdob21lJyB9KTtcbiAgfVxuXG4gIGlzQ3VzdG9tZXJFbXVsYXRpb25TZXNzaW9uSW5Qcm9ncmVzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZVxuICAgICAgLmdldFVzZXJUb2tlbigpXG4gICAgICAucGlwZShcbiAgICAgICAgbWVyZ2VNYXAodXNlclRva2VuID0+XG4gICAgICAgICAgb2YodGhpcy5hc21BdXRoU2VydmljZS5pc0N1c3RvbWVyRW11bGF0aW9uVG9rZW4odXNlclRva2VuKSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXZSdyZSBjdXJyZW50bHkgb25seSByZW1vdmluZyB0aGUgcGVyc2lzdGVkIHN0b3JhZ2UgaW4gdGhlIGJyb3dzZXJcbiAgICogdG8gZW5zdXJlIHRoZSBBU00gZXhwZXJpZW5jZSBpc24ndCBsb2FkZWQgb24gdGhlIG5leHQgdmlzaXQuIFRoZXJlIGFyZSBhIGZld1xuICAgKiBvcHRpbXNpYXRpb25zIHdlIGNvdWxkIHRoaW5rIG9mOlxuICAgKiAtIGRyb3AgdGhlIGBhc21gIHBhcmFtZXRlciBmcm9tIHRoZSBVUkwsIGluIGNhc2UgaXQncyBzdGlsbCB0aGVyZVxuICAgKiAtIHJlbW92ZSB0aGUgZ2VuZXJhdGVkIFVJIGZyb20gdGhlIERPTSAob3V0bGV0cyBjdXJyZW50bHkgZG8gbm90IHN1cHBvcnQgdGhpcylcbiAgICovXG4gIHVubG9hZCgpIHtcbiAgICBpZiAodGhpcy53aW5SZWYubG9jYWxTdG9yYWdlKSB7XG4gICAgICB0aGlzLndpblJlZi5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShBU01fRU5BQkxFRF9MT0NBTF9TVE9SQUdFX0tFWSk7XG4gICAgfVxuICB9XG59XG4iXX0=