/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { AuthService, RoutingService } from '@spartacus/core';
import { take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class AsmComponentService {
    /**
     * @param {?} authService
     * @param {?} routingService
     */
    constructor(authService, routingService) {
        this.authService = authService;
        this.routingService = routingService;
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
            if (Boolean(token) && token.access_token) {
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
}
AsmComponentService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
AsmComponentService.ctorParameters = () => [
    { type: AuthService },
    { type: RoutingService }
];
/** @nocollapse */ AsmComponentService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AsmComponentService_Factory() { return new AsmComponentService(i0.ɵɵinject(i1.AuthService), i0.ɵɵinject(i1.RoutingService)); }, token: AsmComponentService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYXNtL2FzbS1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBS3RDLE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBQzlCLFlBQ1UsV0FBd0IsRUFDeEIsY0FBOEI7UUFEOUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3JDLENBQUM7Ozs7SUFFSixxQ0FBcUM7UUFDbkMsSUFBSSxDQUFDLFdBQVc7YUFDYixZQUFZLEVBQUU7YUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2IsU0FBUzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUU7Z0JBQ3hDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUN2QjtZQUNELElBQUksQ0FBQyxXQUFXLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztRQUNoRCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7OztZQXhCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFMUSxXQUFXO1lBQUUsY0FBYzs7Ozs7Ozs7SUFRaEMsMENBQWdDOzs7OztJQUNoQyw2Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSwgUm91dGluZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEFzbUNvbXBvbmVudFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgbG9nb3V0Q3VzdG9tZXJTdXBwb3J0QWdlbnRBbmRDdXN0b21lcigpOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlXG4gICAgICAuZ2V0VXNlclRva2VuKClcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKHRva2VuID0+IHtcbiAgICAgICAgaWYgKEJvb2xlYW4odG9rZW4pICYmIHRva2VuLmFjY2Vzc190b2tlbikge1xuICAgICAgICAgIHRoaXMubG9nb3V0Q3VzdG9tZXIoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF1dGhTZXJ2aWNlLmxvZ291dEN1c3RvbWVyU3VwcG9ydEFnZW50KCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIGxvZ291dEN1c3RvbWVyKCk6IHZvaWQge1xuICAgIHRoaXMuYXV0aFNlcnZpY2UubG9nb3V0KCk7XG4gICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7IGN4Um91dGU6ICdob21lJyB9KTtcbiAgfVxufVxuIl19