/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return of(this.router.parseUrl(this.routingConfigService.getRouteConfig(this.config.checkout.steps[0].routeName).paths[0]));
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
    /** @nocollapse */ CheckoutGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CheckoutGuard_Factory() { return new CheckoutGuard(i0.ɵɵinject(i1.Router), i0.ɵɵinject(i2.CheckoutConfig), i0.ɵɵinject(i3.RoutingConfigService)); }, token: CheckoutGuard, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9ndWFyZHMvY2hlY2tvdXQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFlLE1BQU0sRUFBVyxNQUFNLGlCQUFpQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7OztBQUV2RDtJQUlFLHVCQUNVLE1BQWMsRUFDZCxNQUFzQixFQUN0QixvQkFBMEM7UUFGMUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFDakQsQ0FBQzs7OztJQUVKLG1DQUFXOzs7SUFBWDtRQUNFLE9BQU8sRUFBRSxDQUNQLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNsQixJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUN4QyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDWCxDQUNGLENBQUM7SUFDSixDQUFDOztnQkFsQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFScUIsTUFBTTtnQkFFbkIsY0FBYztnQkFFZCxvQkFBb0I7Ozt3QkFMN0I7Q0EwQkMsQUFuQkQsSUFtQkM7U0FoQlksYUFBYTs7Ozs7O0lBRXRCLCtCQUFzQjs7Ozs7SUFDdEIsK0JBQThCOzs7OztJQUM5Qiw2Q0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgUm91dGVyLCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQ2hlY2tvdXRDb25maWcgfSBmcm9tICcuLi9jb25maWcvY2hlY2tvdXQtY29uZmlnJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBSb3V0aW5nQ29uZmlnU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dEd1YXJkIGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgY29uZmlnOiBDaGVja291dENvbmZpZyxcbiAgICBwcml2YXRlIHJvdXRpbmdDb25maWdTZXJ2aWNlOiBSb3V0aW5nQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIHJldHVybiBvZihcbiAgICAgIHRoaXMucm91dGVyLnBhcnNlVXJsKFxuICAgICAgICB0aGlzLnJvdXRpbmdDb25maWdTZXJ2aWNlLmdldFJvdXRlQ29uZmlnKFxuICAgICAgICAgIHRoaXMuY29uZmlnLmNoZWNrb3V0LnN0ZXBzWzBdLnJvdXRlTmFtZVxuICAgICAgICApLnBhdGhzWzBdXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19