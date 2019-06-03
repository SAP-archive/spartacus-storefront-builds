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
export class CheckoutGuard {
    /**
     * @param {?} router
     * @param {?} config
     * @param {?} routingConfigService
     */
    constructor(router, config, routingConfigService) {
        this.router = router;
        this.config = config;
        this.routingConfigService = routingConfigService;
    }
    /**
     * @return {?}
     */
    canActivate() {
        return of(this.router.parseUrl(this.routingConfigService.getRouteConfig(this.config.checkout.steps[0].routeName).paths[0]));
    }
}
CheckoutGuard.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CheckoutGuard.ctorParameters = () => [
    { type: Router },
    { type: CheckoutConfig },
    { type: RoutingConfigService }
];
/** @nocollapse */ CheckoutGuard.ngInjectableDef = i0.defineInjectable({ factory: function CheckoutGuard_Factory() { return new CheckoutGuard(i0.inject(i1.Router), i0.inject(i2.CheckoutConfig), i0.inject(i3.RoutingConfigService)); }, token: CheckoutGuard, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9jaGVja291dC9ndWFyZHMvY2hlY2tvdXQuZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFlLE1BQU0sRUFBVyxNQUFNLGlCQUFpQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7OztBQUt2RCxNQUFNLE9BQU8sYUFBYTs7Ozs7O0lBQ3hCLFlBQ1UsTUFBYyxFQUNkLE1BQXNCLEVBQ3RCLG9CQUEwQztRQUYxQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtJQUNqRCxDQUFDOzs7O0lBRUosV0FBVztRQUNULE9BQU8sRUFBRSxDQUNQLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUNsQixJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUN4QyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDWCxDQUNGLENBQUM7SUFDSixDQUFDOzs7WUFsQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUnFCLE1BQU07WUFFbkIsY0FBYztZQUVkLG9CQUFvQjs7Ozs7Ozs7SUFPekIsK0JBQXNCOzs7OztJQUN0QiwrQkFBOEI7Ozs7O0lBQzlCLDZDQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBSb3V0ZXIsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBDaGVja291dENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jaGVja291dC1jb25maWcnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJvdXRpbmdDb25maWdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0R3VhcmQgaW1wbGVtZW50cyBDYW5BY3RpdmF0ZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSBjb25maWc6IENoZWNrb3V0Q29uZmlnLFxuICAgIHByaXZhdGUgcm91dGluZ0NvbmZpZ1NlcnZpY2U6IFJvdXRpbmdDb25maWdTZXJ2aWNlXG4gICkge31cblxuICBjYW5BY3RpdmF0ZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4gfCBVcmxUcmVlPiB7XG4gICAgcmV0dXJuIG9mKFxuICAgICAgdGhpcy5yb3V0ZXIucGFyc2VVcmwoXG4gICAgICAgIHRoaXMucm91dGluZ0NvbmZpZ1NlcnZpY2UuZ2V0Um91dGVDb25maWcoXG4gICAgICAgICAgdGhpcy5jb25maWcuY2hlY2tvdXQuc3RlcHNbMF0ucm91dGVOYW1lXG4gICAgICAgICkucGF0aHNbMF1cbiAgICAgIClcbiAgICApO1xuICB9XG59XG4iXX0=