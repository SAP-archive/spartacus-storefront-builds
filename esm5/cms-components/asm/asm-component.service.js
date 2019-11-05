/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AuthService, RoutingService } from '@spartacus/core';
import { take } from 'rxjs/operators';
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
            if (Boolean(token) && token.access_token) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYXNtL2FzbS1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRXRDO0lBSUUsNkJBQ1UsV0FBd0IsRUFDeEIsY0FBOEI7UUFEOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3JDLENBQUM7Ozs7SUFFSixtRUFBcUM7OztJQUFyQztRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLFdBQVc7YUFDYixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2IsU0FBUzs7OztRQUFDLFVBQUEsS0FBSztZQUNkLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUU7Z0JBQ3hDLEtBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN2QjtZQUNELEtBQUksQ0FBQyxXQUFXLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztRQUNoRCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCw0Q0FBYzs7O0lBQWQ7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Z0JBeEJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTFEsV0FBVztnQkFBRSxjQUFjOzs7OEJBRHBDO0NBNkJDLEFBekJELElBeUJDO1NBdEJZLG1CQUFtQjs7Ozs7O0lBRTVCLDBDQUFnQzs7Ozs7SUFDaEMsNkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UsIFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBc21Db21wb25lbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIGxvZ291dEN1c3RvbWVyU3VwcG9ydEFnZW50QW5kQ3VzdG9tZXIoKTogdm9pZCB7XG4gICAgdGhpcy5hdXRoU2VydmljZVxuICAgICAgLmdldFVzZXJUb2tlbigpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZSh0b2tlbiA9PiB7XG4gICAgICAgIGlmIChCb29sZWFuKHRva2VuKSAmJiB0b2tlbi5hY2Nlc3NfdG9rZW4pIHtcbiAgICAgICAgICB0aGlzLmxvZ291dEN1c3RvbWVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXRDdXN0b21lclN1cHBvcnRBZ2VudCgpO1xuICAgICAgfSk7XG4gIH1cblxuICBsb2dvdXRDdXN0b21lcigpOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnaG9tZScgfSk7XG4gIH1cbn1cbiJdfQ==