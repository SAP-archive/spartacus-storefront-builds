/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AuthService, RoutingService } from '@spartacus/core';
import { of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var AsmComponentService = /** @class */ (function () {
    function AsmComponentService(authService, routingService) {
        this.authService = authService;
        this.routingService = routingService;
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
            if (_this.authService.isCustomerEmulationToken(token)) {
                _this.logoutCustomer();
            }
            _this.authService.logoutCustomerSupportAgent();
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
            return of(_this.authService.isCustomerEmulationToken(userToken));
        })));
    };
    AsmComponentService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    AsmComponentService.ctorParameters = function () { return [
        { type: AuthService },
        { type: RoutingService }
    ]; };
    /** @nocollapse */ AsmComponentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AsmComponentService_Factory() { return new AsmComponentService(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i1.RoutingService)); }, token: AsmComponentService, providedIn: "root" });
    return AsmComponentService;
}());
export { AsmComponentService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AsmComponentService.prototype.authService;
    /**
     * @type {?}
     * @private
     */
    AsmComponentService.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYXNtL3NlcnZpY2VzL2FzbS1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRWhEO0lBSUUsNkJBQ1UsV0FBd0IsRUFDeEIsY0FBOEI7UUFEOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3JDLENBQUM7Ozs7SUFFSixtRUFBcUM7OztJQUFyQztRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLFdBQVc7YUFDYixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2IsU0FBUzs7OztRQUFDLFVBQUEsS0FBSztZQUNkLElBQUksS0FBSSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDcEQsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3ZCO1lBQ0QsS0FBSSxDQUFDLFdBQVcsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ2hELENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELDRDQUFjOzs7SUFBZDtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7O0lBRUQsa0VBQW9DOzs7SUFBcEM7UUFBQSxpQkFRQztRQVBDLE9BQU8sSUFBSSxDQUFDLFdBQVc7YUFDcEIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNILFFBQVE7Ozs7UUFBQyxVQUFBLFNBQVM7WUFDaEIsT0FBQSxFQUFFLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUF4RCxDQUF3RCxFQUN6RCxDQUNGLENBQUM7SUFDTixDQUFDOztnQkFsQ0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFOUSxXQUFXO2dCQUFFLGNBQWM7Ozs4QkFEcEM7Q0F3Q0MsQUFuQ0QsSUFtQ0M7U0FoQ1ksbUJBQW1COzs7Ozs7SUFFNUIsMENBQWdDOzs7OztJQUNoQyw2Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSwgUm91dGluZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1lcmdlTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQXNtQ29tcG9uZW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cblxuICBsb2dvdXRDdXN0b21lclN1cHBvcnRBZ2VudEFuZEN1c3RvbWVyKCk6IHZvaWQge1xuICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgIC5nZXRVc2VyVG9rZW4oKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUodG9rZW4gPT4ge1xuICAgICAgICBpZiAodGhpcy5hdXRoU2VydmljZS5pc0N1c3RvbWVyRW11bGF0aW9uVG9rZW4odG9rZW4pKSB7XG4gICAgICAgICAgdGhpcy5sb2dvdXRDdXN0b21lcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nb3V0Q3VzdG9tZXJTdXBwb3J0QWdlbnQoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbG9nb3V0Q3VzdG9tZXIoKTogdm9pZCB7XG4gICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoKTtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ2hvbWUnIH0pO1xuICB9XG5cbiAgaXNDdXN0b21lckVtdWxhdGlvblNlc3Npb25JblByb2dyZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAuZ2V0VXNlclRva2VuKClcbiAgICAgIC5waXBlKFxuICAgICAgICBtZXJnZU1hcCh1c2VyVG9rZW4gPT5cbiAgICAgICAgICBvZih0aGlzLmF1dGhTZXJ2aWNlLmlzQ3VzdG9tZXJFbXVsYXRpb25Ub2tlbih1c2VyVG9rZW4pKVxuICAgICAgICApXG4gICAgICApO1xuICB9XG59XG4iXX0=