/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutConfig } from '../config/checkout-config';
import { of } from 'rxjs';
import { RoutingConfigService } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../config/checkout-config";
import * as i3 from "@spartacus/core";
var CheckoutGuard = /** @class */ (function () {
    function CheckoutGuard(router, config, routingConfigService) {
        this.router = router;
        this.config = config;
        this.routingConfigService = routingConfigService;
    }
    /**
     * @return {?}
     */
    CheckoutGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        return of(this.router.parseUrl(this.routingConfigService.getRouteConfig(this.config.checkout.steps[0].route).paths[0]));
    };
    CheckoutGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CheckoutGuard.ctorParameters = function () { return [
        { type: Router },
        { type: CheckoutConfig },
        { type: RoutingConfigService }
    ]; };
    /** @nocollapse */ CheckoutGuard.ngInjectableDef = i0.defineInjectable({ factory: function CheckoutGuard_Factory() { return new CheckoutGuard(i0.inject(i1.Router), i0.inject(i2.CheckoutConfig), i0.inject(i3.RoutingConfigService)); }, token: CheckoutGuard, providedIn: "root" });
    return CheckoutGuard;
}());
export { CheckoutGuard };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CheckoutGuard.prototype.router;
    /**
     * @type {?}
     * @private
     */
    CheckoutGuard.prototype.config;
    /**
     * @type {?}
     * @private
     */
    CheckoutGuard.prototype.routingConfigService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvZ3VhcmRzL2NoZWNrb3V0Lmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBZSxNQUFNLEVBQVcsTUFBTSxpQkFBaUIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7QUFFdkQ7SUFJRSx1QkFDVSxNQUFjLEVBQ2QsTUFBc0IsRUFDdEIsb0JBQTBDO1FBRjFDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQ2pELENBQUM7Ozs7SUFFSixtQ0FBVzs7O0lBQVg7UUFDRSxPQUFPLEVBQUUsQ0FDUCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDbEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGNBQWMsQ0FDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FDcEMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQ1gsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBbEJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUnFCLE1BQU07Z0JBRW5CLGNBQWM7Z0JBRWQsb0JBQW9COzs7d0JBTDdCO0NBMEJDLEFBbkJELElBbUJDO1NBaEJZLGFBQWE7Ozs7OztJQUV0QiwrQkFBc0I7Ozs7O0lBQ3RCLCtCQUE4Qjs7Ozs7SUFDOUIsNkNBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIFJvdXRlciwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IENoZWNrb3V0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NoZWNrb3V0LWNvbmZpZyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUm91dGluZ0NvbmZpZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIGNvbmZpZzogQ2hlY2tvdXRDb25maWcsXG4gICAgcHJpdmF0ZSByb3V0aW5nQ29uZmlnU2VydmljZTogUm91dGluZ0NvbmZpZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIGNhbkFjdGl2YXRlKCk6IE9ic2VydmFibGU8Ym9vbGVhbiB8IFVybFRyZWU+IHtcbiAgICByZXR1cm4gb2YoXG4gICAgICB0aGlzLnJvdXRlci5wYXJzZVVybChcbiAgICAgICAgdGhpcy5yb3V0aW5nQ29uZmlnU2VydmljZS5nZXRSb3V0ZUNvbmZpZyhcbiAgICAgICAgICB0aGlzLmNvbmZpZy5jaGVja291dC5zdGVwc1swXS5yb3V0ZVxuICAgICAgICApLnBhdGhzWzBdXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19