import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CheckoutDetailsService } from '../services/checkout-details.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/checkout-details.service";
var CheckoutDetailsLoadedGuard = /** @class */ (function () {
    function CheckoutDetailsLoadedGuard(checkoutDetailsService) {
        this.checkoutDetailsService = checkoutDetailsService;
    }
    CheckoutDetailsLoadedGuard.prototype.canActivate = function () {
        return this.checkoutDetailsService.getCheckoutDetailsLoaded$;
    };
    CheckoutDetailsLoadedGuard.ctorParameters = function () { return [
        { type: CheckoutDetailsService }
    ]; };
    CheckoutDetailsLoadedGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutDetailsLoadedGuard_Factory() { return new CheckoutDetailsLoadedGuard(i0.ɵɵinject(i1.CheckoutDetailsService)); }, token: CheckoutDetailsLoadedGuard, providedIn: "root" });
    CheckoutDetailsLoadedGuard = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CheckoutDetailsLoadedGuard);
    return CheckoutDetailsLoadedGuard;
}());
export { CheckoutDetailsLoadedGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQtZGV0YWlscy1sb2FkZWQuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9ndWFyZHMvY2hlY2tvdXQtZGV0YWlscy1sb2FkZWQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7OztBQUs5RTtJQUNFLG9DQUFvQixzQkFBOEM7UUFBOUMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtJQUFHLENBQUM7SUFFdEUsZ0RBQVcsR0FBWDtRQUNFLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLHlCQUF5QixDQUFDO0lBQy9ELENBQUM7O2dCQUoyQyxzQkFBc0I7OztJQUR2RCwwQkFBMEI7UUFIdEMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLDBCQUEwQixDQU10QztxQ0FmRDtDQWVDLEFBTkQsSUFNQztTQU5ZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ2hlY2tvdXREZXRhaWxzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NoZWNrb3V0LWRldGFpbHMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dERldGFpbHNMb2FkZWRHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGVja291dERldGFpbHNTZXJ2aWNlOiBDaGVja291dERldGFpbHNTZXJ2aWNlKSB7fVxuXG4gIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0RGV0YWlsc1NlcnZpY2UuZ2V0Q2hlY2tvdXREZXRhaWxzTG9hZGVkJDtcbiAgfVxufVxuIl19