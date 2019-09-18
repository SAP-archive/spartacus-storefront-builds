/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CheckoutDetailsService } from '../services/checkout-details.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/checkout-details.service";
var CheckoutDetailsLoadedGuard = /** @class */ (function () {
    function CheckoutDetailsLoadedGuard(checkoutDetailsService) {
        this.checkoutDetailsService = checkoutDetailsService;
    }
    /**
     * @return {?}
     */
    CheckoutDetailsLoadedGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        return this.checkoutDetailsService.getCheckoutDetailsLoaded$;
    };
    CheckoutDetailsLoadedGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CheckoutDetailsLoadedGuard.ctorParameters = function () { return [
        { type: CheckoutDetailsService }
    ]; };
    /** @nocollapse */ CheckoutDetailsLoadedGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CheckoutDetailsLoadedGuard_Factory() { return new CheckoutDetailsLoadedGuard(i0.ɵɵinject(i1.CheckoutDetailsService)); }, token: CheckoutDetailsLoadedGuard, providedIn: "root" });
    return CheckoutDetailsLoadedGuard;
}());
export { CheckoutDetailsLoadedGuard };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CheckoutDetailsLoadedGuard.prototype.checkoutDetailsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGV0YWlscy1sb2FkZWQuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9ndWFyZHMvY2hlY2tvdXQtZGV0YWlscy1sb2FkZWQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7OztBQUU5RTtJQUlFLG9DQUFvQixzQkFBOEM7UUFBOUMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtJQUFHLENBQUM7Ozs7SUFFdEUsZ0RBQVc7OztJQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMseUJBQXlCLENBQUM7SUFDL0QsQ0FBQzs7Z0JBUkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxzQkFBc0I7OztxQ0FKL0I7Q0FlQyxBQVRELElBU0M7U0FOWSwwQkFBMEI7Ozs7OztJQUN6Qiw0REFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENoZWNrb3V0RGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jaGVja291dC1kZXRhaWxzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXREZXRhaWxzTG9hZGVkR3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hlY2tvdXREZXRhaWxzU2VydmljZTogQ2hlY2tvdXREZXRhaWxzU2VydmljZSkge31cblxuICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5jaGVja291dERldGFpbHNTZXJ2aWNlLmdldENoZWNrb3V0RGV0YWlsc0xvYWRlZCQ7XG4gIH1cbn1cbiJdfQ==