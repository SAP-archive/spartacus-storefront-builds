import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { CartService, RoutingConfigService } from '@spartacus/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CheckoutConfig } from '../config/checkout-config';
import { CheckoutStepType } from '../model/checkout-step.model';
import { CheckoutConfigService } from '../services/checkout-config.service';
import { ExpressCheckoutService } from '../services/express-checkout.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../config/checkout-config";
import * as i3 from "@spartacus/core";
import * as i4 from "../services/checkout-config.service";
import * as i5 from "../services/express-checkout.service";
let CheckoutGuard = class CheckoutGuard {
    constructor(router, config, routingConfigService, checkoutConfigService, expressCheckoutService, cartService) {
        this.router = router;
        this.config = config;
        this.routingConfigService = routingConfigService;
        this.checkoutConfigService = checkoutConfigService;
        this.expressCheckoutService = expressCheckoutService;
        this.cartService = cartService;
        /**
         * TODO(issue:#4309) Deprecated since 1.2.0
         */
        if (this.checkoutConfigService) {
            this.firstStep$ = of(this.router.parseUrl(this.routingConfigService.getRouteConfig(this.checkoutConfigService.getFirstCheckoutStepRoute()).paths[0]));
        }
        else {
            this.firstStep$ = of(this.router.parseUrl(this.routingConfigService.getRouteConfig(this.config.checkout.steps[0].routeName).paths[0]));
        }
    }
    canActivate() {
        /**
         * TODO(issue:#4309) Deprecated since 1.2.0
         */
        if (this.checkoutConfigService &&
            this.expressCheckoutService &&
            this.cartService) {
            if (this.checkoutConfigService.isExpressCheckout() &&
                !this.cartService.isGuestCart()) {
                return this.expressCheckoutService.trySetDefaultCheckoutDetails().pipe(switchMap((expressCheckoutPossible) => {
                    return expressCheckoutPossible
                        ? of(this.router.parseUrl(this.routingConfigService.getRouteConfig(this.checkoutConfigService.getCheckoutStepRoute(CheckoutStepType.REVIEW_ORDER)).paths[0]))
                        : this.firstStep$;
                }));
            }
        }
        return this.firstStep$;
    }
};
CheckoutGuard.ctorParameters = () => [
    { type: Router },
    { type: CheckoutConfig },
    { type: RoutingConfigService },
    { type: CheckoutConfigService },
    { type: ExpressCheckoutService },
    { type: CartService }
];
CheckoutGuard.ɵprov = i0.ɵɵdefineInjectable({ factory: function CheckoutGuard_Factory() { return new CheckoutGuard(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.CheckoutConfig), i0.ɵɵinject(i3.RoutingConfigService), i0.ɵɵinject(i4.CheckoutConfigService), i0.ɵɵinject(i5.ExpressCheckoutService), i0.ɵɵinject(i3.CartService)); }, token: CheckoutGuard, providedIn: "root" });
CheckoutGuard = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CheckoutGuard);
export { CheckoutGuard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9ndWFyZHMvY2hlY2tvdXQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BFLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM1RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7Ozs7OztBQUs5RSxJQUFhLGFBQWEsR0FBMUIsTUFBYSxhQUFhO0lBMkJ4QixZQUNVLE1BQWMsRUFDZCxNQUFzQixFQUN0QixvQkFBMEMsRUFDeEMscUJBQTZDLEVBQzdDLHNCQUErQyxFQUMvQyxXQUF5QjtRQUwzQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUN4QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXdCO1FBQzdDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBeUI7UUFDL0MsZ0JBQVcsR0FBWCxXQUFXLENBQWM7UUFFbkM7O1dBRUc7UUFDSCxJQUFJLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FDbEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQ2xCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQ3RDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyx5QkFBeUIsRUFBRSxDQUN2RCxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDWCxDQUNGLENBQUM7U0FDSDthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNsQixJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUN4QyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDWCxDQUNGLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1Q7O1dBRUc7UUFDSCxJQUNFLElBQUksQ0FBQyxxQkFBcUI7WUFDMUIsSUFBSSxDQUFDLHNCQUFzQjtZQUMzQixJQUFJLENBQUMsV0FBVyxFQUNoQjtZQUNBLElBQ0UsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixFQUFFO2dCQUM5QyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLEVBQy9CO2dCQUNBLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLDRCQUE0QixFQUFFLENBQUMsSUFBSSxDQUNwRSxTQUFTLENBQUMsQ0FBQyx1QkFBZ0MsRUFBRSxFQUFFO29CQUM3QyxPQUFPLHVCQUF1Qjt3QkFDNUIsQ0FBQyxDQUFDLEVBQUUsQ0FDQSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDbEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FDdEMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLG9CQUFvQixDQUM3QyxnQkFBZ0IsQ0FBQyxZQUFZLENBQzlCLENBQ0YsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ1gsQ0FDRjt3QkFDSCxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztnQkFDdEIsQ0FBQyxDQUFDLENBQ0gsQ0FBQzthQUNIO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQztDQUNGLENBQUE7O1lBN0RtQixNQUFNO1lBQ04sY0FBYztZQUNBLG9CQUFvQjtZQUNoQixxQkFBcUI7WUFDcEIsc0JBQXNCO1lBQ2pDLFdBQVc7OztBQWpDMUIsYUFBYTtJQUh6QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csYUFBYSxDQXlGekI7U0F6RlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UsIFJvdXRpbmdDb25maWdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jaGVja291dC1jb25maWcnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdGVwVHlwZSB9IGZyb20gJy4uL21vZGVsL2NoZWNrb3V0LXN0ZXAubW9kZWwnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgRXhwcmVzc0NoZWNrb3V0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2V4cHJlc3MtY2hlY2tvdXQuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBwcml2YXRlIHJlYWRvbmx5IGZpcnN0U3RlcCQ6IE9ic2VydmFibGU8VXJsVHJlZT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcm91dGVyOiBSb3V0ZXIsXG4gICAgY29uZmlnOiBDaGVja291dENvbmZpZyxcbiAgICByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2UsXG4gICAgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2UsXG4gICAgZXhwcmVzc0NoZWNrb3V0U2VydmljZTogRXhwcmVzc0NoZWNrb3V0U2VydmljZSxcbiAgICBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2VcbiAgKTtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4yXG4gICAqICBVc2UgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIsXG4gICAqICBjb25maWc6IENoZWNrb3V0Q29uZmlnIC0gQGRlcHJlY2F0ZWQgc2luY2UgMi54LFxuICAgKiAgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlLFxuICAgKiAgY2hlY2tvdXRDb25maWdTZXJ2aWNlOiBDaGVja291dENvbmZpZ1NlcnZpY2UsXG4gICAqICBleHByZXNzQ2hlY2tvdXRTZXJ2aWNlOiBFeHByZXNzQ2hlY2tvdXRTZXJ2aWNlXG4gICAqICBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UpIGluc3RlYWRcbiAgICpcbiAgICogIFRPRE8oaXNzdWU6IzQzMDkpIERlcHJlY2F0ZWQgc2luY2UgMS4yLjBcbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHJvdXRlcjogUm91dGVyLFxuICAgIGNvbmZpZzogQ2hlY2tvdXRDb25maWcsXG4gICAgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlXG4gICk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBjb25maWc6IENoZWNrb3V0Q29uZmlnLFxuICAgIHByaXZhdGUgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dENvbmZpZ1NlcnZpY2U/OiBDaGVja291dENvbmZpZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGV4cHJlc3NDaGVja291dFNlcnZpY2U/OiBFeHByZXNzQ2hlY2tvdXRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZT86IENhcnRTZXJ2aWNlXG4gICkge1xuICAgIC8qKlxuICAgICAqIFRPRE8oaXNzdWU6IzQzMDkpIERlcHJlY2F0ZWQgc2luY2UgMS4yLjBcbiAgICAgKi9cbiAgICBpZiAodGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UpIHtcbiAgICAgIHRoaXMuZmlyc3RTdGVwJCA9IG9mKFxuICAgICAgICB0aGlzLnJvdXRlci5wYXJzZVVybChcbiAgICAgICAgICB0aGlzLnJvdXRpbmdDb25maWdTZXJ2aWNlLmdldFJvdXRlQ29uZmlnKFxuICAgICAgICAgICAgdGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UuZ2V0Rmlyc3RDaGVja291dFN0ZXBSb3V0ZSgpXG4gICAgICAgICAgKS5wYXRoc1swXVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpcnN0U3RlcCQgPSBvZihcbiAgICAgICAgdGhpcy5yb3V0ZXIucGFyc2VVcmwoXG4gICAgICAgICAgdGhpcy5yb3V0aW5nQ29uZmlnU2VydmljZS5nZXRSb3V0ZUNvbmZpZyhcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmNoZWNrb3V0LnN0ZXBzWzBdLnJvdXRlTmFtZVxuICAgICAgICAgICkucGF0aHNbMF1cbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgLyoqXG4gICAgICogVE9ETyhpc3N1ZTojNDMwOSkgRGVwcmVjYXRlZCBzaW5jZSAxLjIuMFxuICAgICAqL1xuICAgIGlmIChcbiAgICAgIHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlICYmXG4gICAgICB0aGlzLmV4cHJlc3NDaGVja291dFNlcnZpY2UgJiZcbiAgICAgIHRoaXMuY2FydFNlcnZpY2VcbiAgICApIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5jaGVja291dENvbmZpZ1NlcnZpY2UuaXNFeHByZXNzQ2hlY2tvdXQoKSAmJlxuICAgICAgICAhdGhpcy5jYXJ0U2VydmljZS5pc0d1ZXN0Q2FydCgpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhwcmVzc0NoZWNrb3V0U2VydmljZS50cnlTZXREZWZhdWx0Q2hlY2tvdXREZXRhaWxzKCkucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoKGV4cHJlc3NDaGVja291dFBvc3NpYmxlOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gZXhwcmVzc0NoZWNrb3V0UG9zc2libGVcbiAgICAgICAgICAgICAgPyBvZihcbiAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLnBhcnNlVXJsKFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRpbmdDb25maWdTZXJ2aWNlLmdldFJvdXRlQ29uZmlnKFxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tvdXRDb25maWdTZXJ2aWNlLmdldENoZWNrb3V0U3RlcFJvdXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hlY2tvdXRTdGVwVHlwZS5SRVZJRVdfT1JERVJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICkucGF0aHNbMF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogdGhpcy5maXJzdFN0ZXAkO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZpcnN0U3RlcCQ7XG4gIH1cbn1cbiJdfQ==