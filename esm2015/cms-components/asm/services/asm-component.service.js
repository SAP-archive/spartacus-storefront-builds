/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AuthService, RoutingService, WindowRef } from '@spartacus/core';
import { of } from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { ASM_ENABLED_LOCAL_STORAGE_KEY } from '../asm-constants';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class AsmComponentService {
    /**
     * @param {?} authService
     * @param {?} routingService
     * @param {?} winRef
     */
    constructor(authService, routingService, winRef) {
        this.authService = authService;
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
            if (this.authService.isCustomerEmulationToken(token)) {
                this.logoutCustomer();
            }
            this.authService.logoutCustomerSupportAgent();
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
        userToken => of(this.authService.isCustomerEmulationToken(userToken)))));
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
    { type: RoutingService },
    { type: WindowRef }
];
/** @nocollapse */ AsmComponentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AsmComponentService_Factory() { return new AsmComponentService(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.WindowRef)); }, token: AsmComponentService, providedIn: "root" });
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
    AsmComponentService.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    AsmComponentService.prototype.winRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYXNtL3NlcnZpY2VzL2FzbS1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RSxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUtqRSxNQUFNLE9BQU8sbUJBQW1COzs7Ozs7SUFDOUIsWUFDWSxXQUF3QixFQUN4QixjQUE4QixFQUM5QixNQUFpQjtRQUZqQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUMxQixDQUFDOzs7O0lBRUoscUNBQXFDO1FBQ25DLElBQUksQ0FBQyxXQUFXO2FBQ2IsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNiLFNBQVM7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUNqQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsd0JBQXdCLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3BELElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN2QjtZQUNELElBQUksQ0FBQyxXQUFXLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztRQUNoRCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCxvQ0FBb0M7UUFDbEMsT0FBTyxJQUFJLENBQUMsV0FBVzthQUNwQixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQ0gsUUFBUTs7OztRQUFDLFNBQVMsQ0FBQyxFQUFFLENBQ25CLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLHdCQUF3QixDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQ3pELENBQ0YsQ0FBQztJQUNOLENBQUM7Ozs7Ozs7OztJQVNELE1BQU07UUFDSixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1NBQ3BFO0lBQ0gsQ0FBQzs7O1lBaERGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVBRLFdBQVc7WUFBRSxjQUFjO1lBQUUsU0FBUzs7Ozs7Ozs7SUFVM0MsMENBQWtDOzs7OztJQUNsQyw2Q0FBd0M7Ozs7O0lBQ3hDLHFDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlLCBSb3V0aW5nU2VydmljZSwgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtZXJnZU1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEFTTV9FTkFCTEVEX0xPQ0FMX1NUT1JBR0VfS0VZIH0gZnJvbSAnLi4vYXNtLWNvbnN0YW50cyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBc21Db21wb25lbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZlxuICApIHt9XG5cbiAgbG9nb3V0Q3VzdG9tZXJTdXBwb3J0QWdlbnRBbmRDdXN0b21lcigpOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAuZ2V0VXNlclRva2VuKClcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKHRva2VuID0+IHtcbiAgICAgICAgaWYgKHRoaXMuYXV0aFNlcnZpY2UuaXNDdXN0b21lckVtdWxhdGlvblRva2VuKHRva2VuKSkge1xuICAgICAgICAgIHRoaXMubG9nb3V0Q3VzdG9tZXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dEN1c3RvbWVyU3VwcG9ydEFnZW50KCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGxvZ291dEN1c3RvbWVyKCk6IHZvaWQge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdob21lJyB9KTtcbiAgfVxuXG4gIGlzQ3VzdG9tZXJFbXVsYXRpb25TZXNzaW9uSW5Qcm9ncmVzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZVxuICAgICAgLmdldFVzZXJUb2tlbigpXG4gICAgICAucGlwZShcbiAgICAgICAgbWVyZ2VNYXAodXNlclRva2VuID0+XG4gICAgICAgICAgb2YodGhpcy5hdXRoU2VydmljZS5pc0N1c3RvbWVyRW11bGF0aW9uVG9rZW4odXNlclRva2VuKSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXZSdyZSBjdXJyZW50bHkgb25seSByZW1vdmluZyB0aGUgcGVyc2lzdGVkIHN0b3JhZ2UgaW4gdGhlIGJyb3dzZXJcbiAgICogdG8gZW5zdXJlIHRoZSBBU00gZXhwZXJpZW5jZSBpc24ndCBsb2FkZWQgb24gdGhlIG5leHQgdmlzaXQuIFRoZXJlIGFyZSBhIGZld1xuICAgKiBvcHRpbXNpYXRpb25zIHdlIGNvdWxkIHRoaW5rIG9mOlxuICAgKiAtIGRyb3AgdGhlIGBhc21gIHBhcmFtZXRlciBmcm9tIHRoZSBVUkwsIGluIGNhc2UgaXQncyBzdGlsbCB0aGVyZVxuICAgKiAtIHJlbW92ZSB0aGUgZ2VuZXJhdGVkIFVJIGZyb20gdGhlIERPTSAob3V0bGV0cyBjdXJyZW50bHkgZG8gbm90IHN1cHBvcnQgdGhpcylcbiAgICovXG4gIHVubG9hZCgpIHtcbiAgICBpZiAodGhpcy53aW5SZWYubG9jYWxTdG9yYWdlKSB7XG4gICAgICB0aGlzLndpblJlZi5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShBU01fRU5BQkxFRF9MT0NBTF9TVE9SQUdFX0tFWSk7XG4gICAgfVxuICB9XG59XG4iXX0=