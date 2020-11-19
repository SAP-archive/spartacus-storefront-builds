import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActiveCartService, RoutingConfigService } from '@spartacus/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CheckoutStepType } from '../model/checkout-step.model';
import { CheckoutConfigService } from '../services/checkout-config.service';
import { CheckoutStepService } from '../services/checkout-step.service';
import { ExpressCheckoutService } from '../services/express-checkout.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "@spartacus/core";
import * as i3 from "../services/checkout-config.service";
import * as i4 from "../services/express-checkout.service";
import * as i5 from "../services/checkout-step.service";
export class CheckoutGuard {
    constructor(router, routingConfigService, checkoutConfigService, expressCheckoutService, activeCartService, checkoutStepService) {
        this.router = router;
        this.routingConfigService = routingConfigService;
        this.checkoutConfigService = checkoutConfigService;
        this.expressCheckoutService = expressCheckoutService;
        this.activeCartService = activeCartService;
        this.checkoutStepService = checkoutStepService;
        this.firstStep$ = of(this.router.parseUrl(this.routingConfigService.getRouteConfig(this.checkoutStepService.getFirstCheckoutStepRoute()).paths[0]));
    }
    canActivate() {
        if (this.checkoutConfigService.isExpressCheckout() &&
            !this.activeCartService.isGuestCart()) {
            return this.expressCheckoutService.trySetDefaultCheckoutDetails().pipe(switchMap((expressCheckoutPossible) => {
                return expressCheckoutPossible
                    ? of(this.router.parseUrl(this.routingConfigService.getRouteConfig(this.checkoutStepService.getCheckoutStepRoute(CheckoutStepType.REVIEW_ORDER)).paths[0]))
                    : this.firstStep$;
            }));
        }
        return this.firstStep$;
    }
}
CheckoutGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutGuard_Factory() { return new CheckoutGuard(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.RoutingConfigService), i0.ɵɵinject(i3.CheckoutConfigService), i0.ɵɵinject(i4.ExpressCheckoutService), i0.ɵɵinject(i2.ActiveCartService), i0.ɵɵinject(i5.CheckoutStepService)); }, token: CheckoutGuard, providedIn: "root" });
CheckoutGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CheckoutGuard.ctorParameters = () => [
    { type: Router },
    { type: RoutingConfigService },
    { type: CheckoutConfigService },
    { type: ExpressCheckoutService },
    { type: ActiveCartService },
    { type: CheckoutStepService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuZ3VhcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9jaGVja291dC9ndWFyZHMvY2hlY2tvdXQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWUsTUFBTSxFQUFXLE1BQU0saUJBQWlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUUsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDNUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDeEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7Ozs7QUFLOUUsTUFBTSxPQUFPLGFBQWE7SUFHeEIsWUFDWSxNQUFjLEVBQ2Qsb0JBQTBDLEVBQzFDLHFCQUE0QyxFQUM1QyxzQkFBOEMsRUFDOUMsaUJBQW9DLEVBQ3BDLG1CQUF3QztRQUx4QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBRWxELElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUNsQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDbEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FDdEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLHlCQUF5QixFQUFFLENBQ3JELENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUNYLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFDRSxJQUFJLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLEVBQUU7WUFDOUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLEVBQ3JDO1lBQ0EsT0FBTyxJQUFJLENBQUMsc0JBQXNCLENBQUMsNEJBQTRCLEVBQUUsQ0FBQyxJQUFJLENBQ3BFLFNBQVMsQ0FBQyxDQUFDLHVCQUFnQyxFQUFFLEVBQUU7Z0JBQzdDLE9BQU8sdUJBQXVCO29CQUM1QixDQUFDLENBQUMsRUFBRSxDQUNBLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNsQixJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUN0QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsb0JBQW9CLENBQzNDLGdCQUFnQixDQUFDLFlBQVksQ0FDOUIsQ0FDRixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDWCxDQUNGO29CQUNILENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUNILENBQUM7U0FDSDtRQUNELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN6QixDQUFDOzs7O1lBN0NGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBWHFCLE1BQU07WUFDQSxvQkFBb0I7WUFJdkMscUJBQXFCO1lBRXJCLHNCQUFzQjtZQU50QixpQkFBaUI7WUFLakIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlciwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBY3RpdmVDYXJ0U2VydmljZSwgUm91dGluZ0NvbmZpZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcFR5cGUgfSBmcm9tICcuLi9tb2RlbC9jaGVja291dC1zdGVwLm1vZGVsJztcbmltcG9ydCB7IENoZWNrb3V0Q29uZmlnU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2NoZWNrb3V0LWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IENoZWNrb3V0U3RlcFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9jaGVja291dC1zdGVwLnNlcnZpY2UnO1xuaW1wb3J0IHsgRXhwcmVzc0NoZWNrb3V0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2V4cHJlc3MtY2hlY2tvdXQuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBwcml2YXRlIHJlYWRvbmx5IGZpcnN0U3RlcCQ6IE9ic2VydmFibGU8VXJsVHJlZT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyLFxuICAgIHByb3RlY3RlZCByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0Q29uZmlnU2VydmljZTogQ2hlY2tvdXRDb25maWdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBleHByZXNzQ2hlY2tvdXRTZXJ2aWNlOiBFeHByZXNzQ2hlY2tvdXRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U3RlcFNlcnZpY2U6IENoZWNrb3V0U3RlcFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5maXJzdFN0ZXAkID0gb2YoXG4gICAgICB0aGlzLnJvdXRlci5wYXJzZVVybChcbiAgICAgICAgdGhpcy5yb3V0aW5nQ29uZmlnU2VydmljZS5nZXRSb3V0ZUNvbmZpZyhcbiAgICAgICAgICB0aGlzLmNoZWNrb3V0U3RlcFNlcnZpY2UuZ2V0Rmlyc3RDaGVja291dFN0ZXBSb3V0ZSgpXG4gICAgICAgICkucGF0aHNbMF1cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIGlmIChcbiAgICAgIHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmlzRXhwcmVzc0NoZWNrb3V0KCkgJiZcbiAgICAgICF0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLmlzR3Vlc3RDYXJ0KClcbiAgICApIHtcbiAgICAgIHJldHVybiB0aGlzLmV4cHJlc3NDaGVja291dFNlcnZpY2UudHJ5U2V0RGVmYXVsdENoZWNrb3V0RGV0YWlscygpLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcCgoZXhwcmVzc0NoZWNrb3V0UG9zc2libGU6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICByZXR1cm4gZXhwcmVzc0NoZWNrb3V0UG9zc2libGVcbiAgICAgICAgICAgID8gb2YoXG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIucGFyc2VVcmwoXG4gICAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdDb25maWdTZXJ2aWNlLmdldFJvdXRlQ29uZmlnKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrb3V0U3RlcFNlcnZpY2UuZ2V0Q2hlY2tvdXRTdGVwUm91dGUoXG4gICAgICAgICAgICAgICAgICAgICAgQ2hlY2tvdXRTdGVwVHlwZS5SRVZJRVdfT1JERVJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKS5wYXRoc1swXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiB0aGlzLmZpcnN0U3RlcCQ7XG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5maXJzdFN0ZXAkO1xuICB9XG59XG4iXX0=