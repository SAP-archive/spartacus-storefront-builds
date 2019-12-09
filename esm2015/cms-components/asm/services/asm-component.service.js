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
export class AsmComponentService {
    /**
     * @param {?} authService
     * @param {?} asmAuthService
     * @param {?} routingService
     * @param {?} winRef
     */
    constructor(authService, asmAuthService, routingService, winRef) {
        this.authService = authService;
        this.asmAuthService = asmAuthService;
        this.routingService = routingService;
        this.winRef = winRef;
    }
    /**
     * @return {?}
     */
    logoutCustomerSupportAgentAndCustomer() {
        this.authService
            .getUserToken()
            .pipe(take(1))
            .subscribe((/**
         * @param {?} token
         * @return {?}
         */
        token => {
            if (this.asmAuthService.isCustomerEmulationToken(token)) {
                this.logoutCustomer();
            }
            this.asmAuthService.logoutCustomerSupportAgent();
        }));
    }
    /**
     * @return {?}
     */
    logoutCustomer() {
        this.authService.logout();
        this.routingService.go({ cxRoute: 'home' });
    }
    /**
     * @return {?}
     */
    isCustomerEmulationSessionInProgress() {
        return this.authService
            .getUserToken()
            .pipe(mergeMap((/**
         * @param {?} userToken
         * @return {?}
         */
        userToken => of(this.asmAuthService.isCustomerEmulationToken(userToken)))));
    }
    /**
     * We're currently only removing the persisted storage in the browser
     * to ensure the ASM experience isn't loaded on the next visit. There are a few
     * optimsiations we could think of:
     * - drop the `asm` parameter from the URL, in case it's still there
     * - remove the generated UI from the DOM (outlets currently do not support this)
     * @return {?}
     */
    unload() {
        if (this.winRef.localStorage) {
            this.winRef.localStorage.removeItem(ASM_ENABLED_LOCAL_STORAGE_KEY);
        }
    }
}
AsmComponentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
AsmComponentService.ctorParameters = () => [
    { type: AuthService },
    { type: AsmAuthService },
    { type: RoutingService },
    { type: WindowRef }
];
/** @nocollapse */ AsmComponentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AsmComponentService_Factory() { return new AsmComponentService(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i1.AsmAuthService), i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.WindowRef)); }, token: AsmComponentService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYXNtL3NlcnZpY2VzL2FzbS1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsY0FBYyxFQUNkLFdBQVcsRUFDWCxjQUFjLEVBQ2QsU0FBUyxHQUNWLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7QUFLakUsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7OztJQUM5QixZQUNZLFdBQXdCLEVBQ3hCLGNBQThCLEVBQzlCLGNBQThCLEVBQzlCLE1BQWlCO1FBSGpCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUMxQixDQUFDOzs7O0lBRUoscUNBQXFDO1FBQ25DLElBQUksQ0FBQyxXQUFXO2FBQ2IsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNiLFNBQVM7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUNqQixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3ZELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN2QjtZQUNELElBQUksQ0FBQyxjQUFjLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztRQUNuRCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCxvQ0FBb0M7UUFDbEMsT0FBTyxJQUFJLENBQUMsV0FBVzthQUNwQixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0gsUUFBUTs7OztRQUFDLFNBQVMsQ0FBQyxFQUFFLENBQ25CLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQzVELENBQ0YsQ0FBQztJQUNOLENBQUM7Ozs7Ozs7OztJQVNELE1BQU07UUFDSixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1NBQ3BFO0lBQ0gsQ0FBQzs7O1lBakRGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVZDLFdBQVc7WUFEWCxjQUFjO1lBRWQsY0FBYztZQUNkLFNBQVM7Ozs7Ozs7O0lBV1AsMENBQWtDOzs7OztJQUNsQyw2Q0FBd0M7Ozs7O0lBQ3hDLDZDQUF3Qzs7Ozs7SUFDeEMscUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQXNtQXV0aFNlcnZpY2UsXG4gIEF1dGhTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgV2luZG93UmVmLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1lcmdlTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQVNNX0VOQUJMRURfTE9DQUxfU1RPUkFHRV9LRVkgfSBmcm9tICcuLi9hc20tY29uc3RhbnRzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEFzbUNvbXBvbmVudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhc21BdXRoU2VydmljZTogQXNtQXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWZcbiAgKSB7fVxuXG4gIGxvZ291dEN1c3RvbWVyU3VwcG9ydEFnZW50QW5kQ3VzdG9tZXIoKTogdm9pZCB7XG4gICAgdGhpcy5hdXRoU2VydmljZVxuICAgICAgLmdldFVzZXJUb2tlbigpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZSh0b2tlbiA9PiB7XG4gICAgICAgIGlmICh0aGlzLmFzbUF1dGhTZXJ2aWNlLmlzQ3VzdG9tZXJFbXVsYXRpb25Ub2tlbih0b2tlbikpIHtcbiAgICAgICAgICB0aGlzLmxvZ291dEN1c3RvbWVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hc21BdXRoU2VydmljZS5sb2dvdXRDdXN0b21lclN1cHBvcnRBZ2VudCgpO1xuICAgICAgfSk7XG4gIH1cblxuICBsb2dvdXRDdXN0b21lcigpOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyBjeFJvdXRlOiAnaG9tZScgfSk7XG4gIH1cblxuICBpc0N1c3RvbWVyRW11bGF0aW9uU2Vzc2lvbkluUHJvZ3Jlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgIC5nZXRVc2VyVG9rZW4oKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1lcmdlTWFwKHVzZXJUb2tlbiA9PlxuICAgICAgICAgIG9mKHRoaXMuYXNtQXV0aFNlcnZpY2UuaXNDdXN0b21lckVtdWxhdGlvblRva2VuKHVzZXJUb2tlbikpXG4gICAgICAgIClcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogV2UncmUgY3VycmVudGx5IG9ubHkgcmVtb3ZpbmcgdGhlIHBlcnNpc3RlZCBzdG9yYWdlIGluIHRoZSBicm93c2VyXG4gICAqIHRvIGVuc3VyZSB0aGUgQVNNIGV4cGVyaWVuY2UgaXNuJ3QgbG9hZGVkIG9uIHRoZSBuZXh0IHZpc2l0LiBUaGVyZSBhcmUgYSBmZXdcbiAgICogb3B0aW1zaWF0aW9ucyB3ZSBjb3VsZCB0aGluayBvZjpcbiAgICogLSBkcm9wIHRoZSBgYXNtYCBwYXJhbWV0ZXIgZnJvbSB0aGUgVVJMLCBpbiBjYXNlIGl0J3Mgc3RpbGwgdGhlcmVcbiAgICogLSByZW1vdmUgdGhlIGdlbmVyYXRlZCBVSSBmcm9tIHRoZSBET00gKG91dGxldHMgY3VycmVudGx5IGRvIG5vdCBzdXBwb3J0IHRoaXMpXG4gICAqL1xuICB1bmxvYWQoKSB7XG4gICAgaWYgKHRoaXMud2luUmVmLmxvY2FsU3RvcmFnZSkge1xuICAgICAgdGhpcy53aW5SZWYubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oQVNNX0VOQUJMRURfTE9DQUxfU1RPUkFHRV9LRVkpO1xuICAgIH1cbiAgfVxufVxuIl19