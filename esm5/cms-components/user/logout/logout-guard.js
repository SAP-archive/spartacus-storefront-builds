/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AuthService, CmsService, PageType } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var LogoutGuard = /** @class */ (function () {
    function LogoutGuard(auth, cms) {
        this.auth = auth;
        this.cms = cms;
    }
    /**
     * @return {?}
     */
    LogoutGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        this.logout();
        return this.cms.hasPage({
            id: '/logout',
            type: PageType.CONTENT_PAGE,
        });
    };
    /**
     * @protected
     * @return {?}
     */
    LogoutGuard.prototype.logout = /**
     * @protected
     * @return {?}
     */
    function () {
        this.auth.logout();
    };
    LogoutGuard.GUARD_NAME = 'LogoutGuard';
    LogoutGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    LogoutGuard.ctorParameters = function () { return [
        { type: AuthService },
        { type: CmsService }
    ]; };
    /** @nocollapse */ LogoutGuard.ngInjectableDef = i0.defineInjectable({ factory: function LogoutGuard_Factory() { return new LogoutGuard(i0.inject(i1.AuthService), i0.inject(i1.CmsService)); }, token: LogoutGuard, providedIn: "root" });
    return LogoutGuard;
}());
export { LogoutGuard };
if (false) {
    /** @type {?} */
    LogoutGuard.GUARD_NAME;
    /**
     * @type {?}
     * @protected
     */
    LogoutGuard.prototype.auth;
    /**
     * @type {?}
     * @protected
     */
    LogoutGuard.prototype.cms;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LWd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9sb2dvdXQvbG9nb3V0LWd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFFcEU7SUFNRSxxQkFBc0IsSUFBaUIsRUFBWSxHQUFlO1FBQTVDLFNBQUksR0FBSixJQUFJLENBQWE7UUFBWSxRQUFHLEdBQUgsR0FBRyxDQUFZO0lBQUcsQ0FBQzs7OztJQUV0RSxpQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFZCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDO1lBQ3RCLEVBQUUsRUFBRSxTQUFTO1lBQ2IsSUFBSSxFQUFFLFFBQVEsQ0FBQyxZQUFZO1NBQzVCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRVMsNEJBQU07Ozs7SUFBaEI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFmTSxzQkFBVSxHQUFHLGFBQWEsQ0FBQzs7Z0JBSm5DLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBSlEsV0FBVztnQkFBRSxVQUFVOzs7c0JBSGhDO0NBeUJDLEFBcEJELElBb0JDO1NBakJZLFdBQVc7OztJQUN0Qix1QkFBa0M7Ozs7O0lBRXRCLDJCQUEyQjs7Ozs7SUFBRSwwQkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSwgQ21zU2VydmljZSwgUGFnZVR5cGUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgTG9nb3V0R3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIHN0YXRpYyBHVUFSRF9OQU1FID0gJ0xvZ291dEd1YXJkJztcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYXV0aDogQXV0aFNlcnZpY2UsIHByb3RlY3RlZCBjbXM6IENtc1NlcnZpY2UpIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgdGhpcy5sb2dvdXQoKTtcblxuICAgIHJldHVybiB0aGlzLmNtcy5oYXNQYWdlKHtcbiAgICAgIGlkOiAnL2xvZ291dCcsXG4gICAgICB0eXBlOiBQYWdlVHlwZS5DT05URU5UX1BBR0UsXG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgbG9nb3V0KCk6IHZvaWQge1xuICAgIHRoaXMuYXV0aC5sb2dvdXQoKTtcbiAgfVxufVxuIl19