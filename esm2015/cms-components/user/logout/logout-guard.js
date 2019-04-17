/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AuthService, CmsService, PageType } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class LogoutGuard {
    /**
     * @param {?} auth
     * @param {?} cms
     */
    constructor(auth, cms) {
        this.auth = auth;
        this.cms = cms;
    }
    /**
     * @return {?}
     */
    canActivate() {
        this.logout();
        return this.cms.hasPage({
            id: '/logout',
            type: PageType.CONTENT_PAGE,
        });
    }
    /**
     * @protected
     * @return {?}
     */
    logout() {
        this.auth.logout();
    }
}
LogoutGuard.GUARD_NAME = 'LogoutGuard';
LogoutGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
LogoutGuard.ctorParameters = () => [
    { type: AuthService },
    { type: CmsService }
];
/** @nocollapse */ LogoutGuard.ngInjectableDef = i0.defineInjectable({ factory: function LogoutGuard_Factory() { return new LogoutGuard(i0.inject(i1.AuthService), i0.inject(i1.CmsService)); }, token: LogoutGuard, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9nb3V0LWd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvdXNlci9sb2dvdXQvbG9nb3V0LWd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFLcEUsTUFBTSxPQUFPLFdBQVc7Ozs7O0lBR3RCLFlBQXNCLElBQWlCLEVBQVksR0FBZTtRQUE1QyxTQUFJLEdBQUosSUFBSSxDQUFhO1FBQVksUUFBRyxHQUFILEdBQUcsQ0FBWTtJQUFHLENBQUM7Ozs7SUFFdEUsV0FBVztRQUNULElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUVkLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUM7WUFDdEIsRUFBRSxFQUFFLFNBQVM7WUFDYixJQUFJLEVBQUUsUUFBUSxDQUFDLFlBQVk7U0FDNUIsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFUyxNQUFNO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNyQixDQUFDOztBQWZNLHNCQUFVLEdBQUcsYUFBYSxDQUFDOztZQUpuQyxVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFKUSxXQUFXO1lBQUUsVUFBVTs7Ozs7SUFNOUIsdUJBQWtDOzs7OztJQUV0QiwyQkFBMkI7Ozs7O0lBQUUsMEJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UsIENtc1NlcnZpY2UsIFBhZ2VUeXBlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIExvZ291dEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBzdGF0aWMgR1VBUkRfTkFNRSA9ICdMb2dvdXRHdWFyZCc7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGF1dGg6IEF1dGhTZXJ2aWNlLCBwcm90ZWN0ZWQgY21zOiBDbXNTZXJ2aWNlKSB7fVxuXG4gIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHRoaXMubG9nb3V0KCk7XG5cbiAgICByZXR1cm4gdGhpcy5jbXMuaGFzUGFnZSh7XG4gICAgICBpZDogJy9sb2dvdXQnLFxuICAgICAgdHlwZTogUGFnZVR5cGUuQ09OVEVOVF9QQUdFLFxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGxvZ291dCgpOiB2b2lkIHtcbiAgICB0aGlzLmF1dGgubG9nb3V0KCk7XG4gIH1cbn1cbiJdfQ==