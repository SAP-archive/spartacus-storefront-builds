import { CanActivate, Router, UrlTree } from '@angular/router';
import { CartService, RoutingConfigService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { CheckoutConfig } from '../config/checkout-config';
import { CheckoutConfigService } from '../services/checkout-config.service';
import { ExpressCheckoutService } from '../services/express-checkout.service';
import * as ɵngcc0 from '@angular/core';
export declare class CheckoutGuard implements CanActivate {
    private router;
    private config;
    private routingConfigService;
    protected checkoutConfigService?: CheckoutConfigService;
    protected expressCheckoutService?: ExpressCheckoutService;
    protected cartService?: CartService;
    private readonly firstStep$;
    constructor(router: Router, config: CheckoutConfig, routingConfigService: RoutingConfigService, checkoutConfigService: CheckoutConfigService, expressCheckoutService: ExpressCheckoutService, cartService: CartService);
    /**
     * @deprecated since version 1.2
     *  Use constructor(router: Router,
     *  config: CheckoutConfig - @deprecated since 2.x,
     *  routingConfigService: RoutingConfigService,
     *  checkoutConfigService: CheckoutConfigService,
     *  expressCheckoutService: ExpressCheckoutService
     *  cartService: CartService) instead
     *
     *  TODO(issue:#4309) Deprecated since 1.2.0
     */
    constructor(router: Router, config: CheckoutConfig, routingConfigService: RoutingConfigService);
    canActivate(): Observable<boolean | UrlTree>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CheckoutGuard>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuZ3VhcmQuZC50cyIsInNvdXJjZXMiOlsiY2hlY2tvdXQuZ3VhcmQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyLCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IENhcnRTZXJ2aWNlLCBSb3V0aW5nQ29uZmlnU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDaGVja291dENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jaGVja291dC1jb25maWcnO1xuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2hlY2tvdXQtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgRXhwcmVzc0NoZWNrb3V0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2V4cHJlc3MtY2hlY2tvdXQuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDaGVja291dEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICAgIHByaXZhdGUgcm91dGVyO1xuICAgIHByaXZhdGUgY29uZmlnO1xuICAgIHByaXZhdGUgcm91dGluZ0NvbmZpZ1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0Q29uZmlnU2VydmljZT86IENoZWNrb3V0Q29uZmlnU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgZXhwcmVzc0NoZWNrb3V0U2VydmljZT86IEV4cHJlc3NDaGVja291dFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlPzogQ2FydFNlcnZpY2U7XG4gICAgcHJpdmF0ZSByZWFkb25seSBmaXJzdFN0ZXAkO1xuICAgIGNvbnN0cnVjdG9yKHJvdXRlcjogUm91dGVyLCBjb25maWc6IENoZWNrb3V0Q29uZmlnLCByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2UsIGNoZWNrb3V0Q29uZmlnU2VydmljZTogQ2hlY2tvdXRDb25maWdTZXJ2aWNlLCBleHByZXNzQ2hlY2tvdXRTZXJ2aWNlOiBFeHByZXNzQ2hlY2tvdXRTZXJ2aWNlLCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4yXG4gICAgICogIFVzZSBjb25zdHJ1Y3Rvcihyb3V0ZXI6IFJvdXRlcixcbiAgICAgKiAgY29uZmlnOiBDaGVja291dENvbmZpZyAtIEBkZXByZWNhdGVkIHNpbmNlIDIueCxcbiAgICAgKiAgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlLFxuICAgICAqICBjaGVja291dENvbmZpZ1NlcnZpY2U6IENoZWNrb3V0Q29uZmlnU2VydmljZSxcbiAgICAgKiAgZXhwcmVzc0NoZWNrb3V0U2VydmljZTogRXhwcmVzc0NoZWNrb3V0U2VydmljZVxuICAgICAqICBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UpIGluc3RlYWRcbiAgICAgKlxuICAgICAqICBUT0RPKGlzc3VlOiM0MzA5KSBEZXByZWNhdGVkIHNpbmNlIDEuMi4wXG4gICAgICovXG4gICAgY29uc3RydWN0b3Iocm91dGVyOiBSb3V0ZXIsIGNvbmZpZzogQ2hlY2tvdXRDb25maWcsIHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZSk7XG4gICAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT47XG59XG4iXX0=