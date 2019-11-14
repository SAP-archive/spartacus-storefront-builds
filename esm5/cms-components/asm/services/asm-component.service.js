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
var AsmComponentService = /** @class */ (function () {
    function AsmComponentService(authService, routingService, winRef) {
        this.authService = authService;
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
        { type: RoutingService },
        { type: WindowRef }
    ]; };
    /** @nocollapse */ AsmComponentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AsmComponentService_Factory() { return new AsmComponentService(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i1.WindowRef)); }, token: AsmComponentService, providedIn: "root" });
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
    AsmComponentService.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    AsmComponentService.prototype.winRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYXNtL3NlcnZpY2VzL2FzbS1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RSxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7OztBQUVqRTtJQUlFLDZCQUNZLFdBQXdCLEVBQ3hCLGNBQThCLEVBQzlCLE1BQWlCO1FBRmpCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQzFCLENBQUM7Ozs7SUFFSixtRUFBcUM7OztJQUFyQztRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLFdBQVc7YUFDYixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2IsU0FBUzs7OztRQUFDLFVBQUEsS0FBSztZQUNkLElBQUksS0FBSSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDcEQsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ3ZCO1lBQ0QsS0FBSSxDQUFDLFdBQVcsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ2hELENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELDRDQUFjOzs7SUFBZDtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUM5QyxDQUFDOzs7O0lBRUQsa0VBQW9DOzs7SUFBcEM7UUFBQSxpQkFRQztRQVBDLE9BQU8sSUFBSSxDQUFDLFdBQVc7YUFDcEIsWUFBWSxFQUFFO2FBQ2QsSUFBSSxDQUNILFFBQVE7Ozs7UUFBQyxVQUFBLFNBQVM7WUFDaEIsT0FBQSxFQUFFLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUF4RCxDQUF3RCxFQUN6RCxDQUNGLENBQUM7SUFDTixDQUFDO0lBRUQ7Ozs7OztPQU1HOzs7Ozs7Ozs7SUFDSCxvQ0FBTTs7Ozs7Ozs7SUFBTjtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLDZCQUE2QixDQUFDLENBQUM7U0FDcEU7SUFDSCxDQUFDOztnQkFoREYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFQUSxXQUFXO2dCQUFFLGNBQWM7Z0JBQUUsU0FBUzs7OzhCQUQvQztDQXVEQyxBQWpERCxJQWlEQztTQTlDWSxtQkFBbUI7Ozs7OztJQUU1QiwwQ0FBa0M7Ozs7O0lBQ2xDLDZDQUF3Qzs7Ozs7SUFDeEMscUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UsIFJvdXRpbmdTZXJ2aWNlLCBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1lcmdlTWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQVNNX0VOQUJMRURfTE9DQUxfU1RPUkFHRV9LRVkgfSBmcm9tICcuLi9hc20tY29uc3RhbnRzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEFzbUNvbXBvbmVudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmXG4gICkge31cblxuICBsb2dvdXRDdXN0b21lclN1cHBvcnRBZ2VudEFuZEN1c3RvbWVyKCk6IHZvaWQge1xuICAgIHRoaXMuYXV0aFNlcnZpY2VcbiAgICAgIC5nZXRVc2VyVG9rZW4oKVxuICAgICAgLnBpcGUodGFrZSgxKSlcbiAgICAgIC5zdWJzY3JpYmUodG9rZW4gPT4ge1xuICAgICAgICBpZiAodGhpcy5hdXRoU2VydmljZS5pc0N1c3RvbWVyRW11bGF0aW9uVG9rZW4odG9rZW4pKSB7XG4gICAgICAgICAgdGhpcy5sb2dvdXRDdXN0b21lcigpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nb3V0Q3VzdG9tZXJTdXBwb3J0QWdlbnQoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbG9nb3V0Q3VzdG9tZXIoKTogdm9pZCB7XG4gICAgdGhpcy5hdXRoU2VydmljZS5sb2dvdXQoKTtcbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ2hvbWUnIH0pO1xuICB9XG5cbiAgaXNDdXN0b21lckVtdWxhdGlvblNlc3Npb25JblByb2dyZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAuZ2V0VXNlclRva2VuKClcbiAgICAgIC5waXBlKFxuICAgICAgICBtZXJnZU1hcCh1c2VyVG9rZW4gPT5cbiAgICAgICAgICBvZih0aGlzLmF1dGhTZXJ2aWNlLmlzQ3VzdG9tZXJFbXVsYXRpb25Ub2tlbih1c2VyVG9rZW4pKVxuICAgICAgICApXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFdlJ3JlIGN1cnJlbnRseSBvbmx5IHJlbW92aW5nIHRoZSBwZXJzaXN0ZWQgc3RvcmFnZSBpbiB0aGUgYnJvd3NlclxuICAgKiB0byBlbnN1cmUgdGhlIEFTTSBleHBlcmllbmNlIGlzbid0IGxvYWRlZCBvbiB0aGUgbmV4dCB2aXNpdC4gVGhlcmUgYXJlIGEgZmV3XG4gICAqIG9wdGltc2lhdGlvbnMgd2UgY291bGQgdGhpbmsgb2Y6XG4gICAqIC0gZHJvcCB0aGUgYGFzbWAgcGFyYW1ldGVyIGZyb20gdGhlIFVSTCwgaW4gY2FzZSBpdCdzIHN0aWxsIHRoZXJlXG4gICAqIC0gcmVtb3ZlIHRoZSBnZW5lcmF0ZWQgVUkgZnJvbSB0aGUgRE9NIChvdXRsZXRzIGN1cnJlbnRseSBkbyBub3Qgc3VwcG9ydCB0aGlzKVxuICAgKi9cbiAgdW5sb2FkKCkge1xuICAgIGlmICh0aGlzLndpblJlZi5sb2NhbFN0b3JhZ2UpIHtcbiAgICAgIHRoaXMud2luUmVmLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKEFTTV9FTkFCTEVEX0xPQ0FMX1NUT1JBR0VfS0VZKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==