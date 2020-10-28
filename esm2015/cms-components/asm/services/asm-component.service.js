import { Injectable } from '@angular/core';
import { AuthService, CsAgentAuthService, WindowRef } from '@spartacus/core';
import { ASM_ENABLED_LOCAL_STORAGE_KEY } from '../asm-constants';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class AsmComponentService {
    constructor(authService, csAgentAuthService, winRef) {
        this.authService = authService;
        this.csAgentAuthService = csAgentAuthService;
        this.winRef = winRef;
    }
    logoutCustomerSupportAgentAndCustomer() {
        this.csAgentAuthService.logoutCustomerSupportAgent();
    }
    logoutCustomer() {
        this.authService.initLogout();
    }
    isCustomerEmulationSessionInProgress() {
        return this.csAgentAuthService.isCustomerEmulated();
    }
    /**
     * We're currently only removing the persisted storage in the browser
     * to ensure the ASM experience isn't loaded on the next visit. There are a few
     * optimizations we could think of:
     * - drop the `asm` parameter from the URL, in case it's still there
     * - remove the generated UI from the DOM (outlets currently do not support this)
     */
    unload() {
        if (this.winRef.localStorage) {
            this.winRef.localStorage.removeItem(ASM_ENABLED_LOCAL_STORAGE_KEY);
        }
    }
}
AsmComponentService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AsmComponentService_Factory() { return new AsmComponentService(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i1.CsAgentAuthService), i0.ɵɵinject(i1.WindowRef)); }, token: AsmComponentService, providedIn: "root" });
AsmComponentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
AsmComponentService.ctorParameters = () => [
    { type: AuthService },
    { type: CsAgentAuthService },
    { type: WindowRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvYXNtL3NlcnZpY2VzL2FzbS1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFN0UsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUtqRSxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLFlBQ1ksV0FBd0IsRUFDeEIsa0JBQXNDLEVBQ3RDLE1BQWlCO1FBRmpCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUMxQixDQUFDO0lBRUoscUNBQXFDO1FBQ25DLElBQUksQ0FBQyxrQkFBa0IsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO0lBQ3ZELENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsb0NBQW9DO1FBQ2xDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDdEQsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILE1BQU07UUFDSixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1NBQ3BFO0lBQ0gsQ0FBQzs7OztZQWpDRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQU5RLFdBQVc7WUFBRSxrQkFBa0I7WUFBRSxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UsIENzQWdlbnRBdXRoU2VydmljZSwgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFTTV9FTkFCTEVEX0xPQ0FMX1NUT1JBR0VfS0VZIH0gZnJvbSAnLi4vYXNtLWNvbnN0YW50cyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBc21Db21wb25lbnRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY3NBZ2VudEF1dGhTZXJ2aWNlOiBDc0FnZW50QXV0aFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmXG4gICkge31cblxuICBsb2dvdXRDdXN0b21lclN1cHBvcnRBZ2VudEFuZEN1c3RvbWVyKCk6IHZvaWQge1xuICAgIHRoaXMuY3NBZ2VudEF1dGhTZXJ2aWNlLmxvZ291dEN1c3RvbWVyU3VwcG9ydEFnZW50KCk7XG4gIH1cblxuICBsb2dvdXRDdXN0b21lcigpOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmluaXRMb2dvdXQoKTtcbiAgfVxuXG4gIGlzQ3VzdG9tZXJFbXVsYXRpb25TZXNzaW9uSW5Qcm9ncmVzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5jc0FnZW50QXV0aFNlcnZpY2UuaXNDdXN0b21lckVtdWxhdGVkKCk7XG4gIH1cblxuICAvKipcbiAgICogV2UncmUgY3VycmVudGx5IG9ubHkgcmVtb3ZpbmcgdGhlIHBlcnNpc3RlZCBzdG9yYWdlIGluIHRoZSBicm93c2VyXG4gICAqIHRvIGVuc3VyZSB0aGUgQVNNIGV4cGVyaWVuY2UgaXNuJ3QgbG9hZGVkIG9uIHRoZSBuZXh0IHZpc2l0LiBUaGVyZSBhcmUgYSBmZXdcbiAgICogb3B0aW1pemF0aW9ucyB3ZSBjb3VsZCB0aGluayBvZjpcbiAgICogLSBkcm9wIHRoZSBgYXNtYCBwYXJhbWV0ZXIgZnJvbSB0aGUgVVJMLCBpbiBjYXNlIGl0J3Mgc3RpbGwgdGhlcmVcbiAgICogLSByZW1vdmUgdGhlIGdlbmVyYXRlZCBVSSBmcm9tIHRoZSBET00gKG91dGxldHMgY3VycmVudGx5IGRvIG5vdCBzdXBwb3J0IHRoaXMpXG4gICAqL1xuICB1bmxvYWQoKSB7XG4gICAgaWYgKHRoaXMud2luUmVmLmxvY2FsU3RvcmFnZSkge1xuICAgICAgdGhpcy53aW5SZWYubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oQVNNX0VOQUJMRURfTE9DQUxfU1RPUkFHRV9LRVkpO1xuICAgIH1cbiAgfVxufVxuIl19