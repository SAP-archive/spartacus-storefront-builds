/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AuthService, CmsService, PageType, RoutingService, SemanticPathService, } from '@spartacus/core';
import { tap } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var LogoutGuard = /** @class */ (function () {
    function LogoutGuard(auth, cms, routing, semanticPathService) {
        this.auth = auth;
        this.cms = cms;
        this.routing = routing;
        this.semanticPathService = semanticPathService;
    }
    /**
     * @return {?}
     */
    LogoutGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.logout();
        return this.cms
            .hasPage({
            id: this.semanticPathService.get('logout'),
            type: PageType.CONTENT_PAGE,
        })
            .pipe(tap((/**
         * @param {?} hasPage
         * @return {?}
         */
        function (hasPage) {
            if (!hasPage) {
                _this.routing.go({ cxRoute: 'home' });
            }
        })));
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
    LogoutGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    LogoutGuard.ctorParameters = function () { return [
        { type: AuthService },
        { type: CmsService },
        { type: RoutingService },
        { type: SemanticPathService }
    ]; };
    /** @nocollapse */ LogoutGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function LogoutGuard_Factory() { return new LogoutGuard(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.SemanticPathService)); }, token: LogoutGuard, providedIn: "root" });
    return LogoutGuard;
}());
export { LogoutGuard };
if (false) {
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
    /**
     * @type {?}
     * @protected
     */
    LogoutGuard.prototype.routing;
    /**
     * @type {?}
     * @protected
     */
    LogoutGuard.prototype.semanticPathService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LWd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9sb2dvdXQvbG9nb3V0LWd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFDTCxXQUFXLEVBQ1gsVUFBVSxFQUNWLFFBQVEsRUFDUixjQUFjLEVBQ2QsbUJBQW1CLEdBQ3BCLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFFckM7SUFJRSxxQkFDWSxJQUFpQixFQUNqQixHQUFlLEVBQ2YsT0FBdUIsRUFDdkIsbUJBQXdDO1FBSHhDLFNBQUksR0FBSixJQUFJLENBQWE7UUFDakIsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDakQsQ0FBQzs7OztJQUVKLGlDQUFXOzs7SUFBWDtRQUFBLGlCQWVDO1FBZEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWQsT0FBTyxJQUFJLENBQUMsR0FBRzthQUNaLE9BQU8sQ0FBQztZQUNQLEVBQUUsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQztZQUMxQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFlBQVk7U0FDNUIsQ0FBQzthQUNELElBQUksQ0FDSCxHQUFHOzs7O1FBQUMsVUFBQSxPQUFPO1lBQ1QsSUFBSSxDQUFDLE9BQU8sRUFBRTtnQkFDWixLQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO2FBQ3RDO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNOLENBQUM7Ozs7O0lBRVMsNEJBQU07Ozs7SUFBaEI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3JCLENBQUM7O2dCQTlCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVhDLFdBQVc7Z0JBQ1gsVUFBVTtnQkFFVixjQUFjO2dCQUNkLG1CQUFtQjs7O3NCQVByQjtDQTJDQyxBQS9CRCxJQStCQztTQTVCWSxXQUFXOzs7Ozs7SUFFcEIsMkJBQTJCOzs7OztJQUMzQiwwQkFBeUI7Ozs7O0lBQ3pCLDhCQUFpQzs7Ozs7SUFDakMsMENBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQXV0aFNlcnZpY2UsXG4gIENtc1NlcnZpY2UsXG4gIFBhZ2VUeXBlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgU2VtYW50aWNQYXRoU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIExvZ291dEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNtczogQ21zU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZzogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2VcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgdGhpcy5sb2dvdXQoKTtcblxuICAgIHJldHVybiB0aGlzLmNtc1xuICAgICAgLmhhc1BhZ2Uoe1xuICAgICAgICBpZDogdGhpcy5zZW1hbnRpY1BhdGhTZXJ2aWNlLmdldCgnbG9nb3V0JyksXG4gICAgICAgIHR5cGU6IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRSxcbiAgICAgIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgdGFwKGhhc1BhZ2UgPT4ge1xuICAgICAgICAgIGlmICghaGFzUGFnZSkge1xuICAgICAgICAgICAgdGhpcy5yb3V0aW5nLmdvKHsgY3hSb3V0ZTogJ2hvbWUnIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgbG9nb3V0KCk6IHZvaWQge1xuICAgIHRoaXMuYXV0aC5sb2dvdXQoKTtcbiAgfVxufVxuIl19