/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { CheckoutService, SemanticPathService } from '@spartacus/core';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "@angular/router";
var OrderConfirmationGuard = /** @class */ (function () {
    function OrderConfirmationGuard(checkoutService, router, semanticPathService) {
        this.checkoutService = checkoutService;
        this.router = router;
        this.semanticPathService = semanticPathService;
    }
    /**
     * @return {?}
     */
    OrderConfirmationGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.checkoutService.getOrderDetails().pipe(map((/**
         * @param {?} orderDetails
         * @return {?}
         */
        function (orderDetails) {
            if (orderDetails && Object.keys(orderDetails).length !== 0) {
                return true;
            }
            else {
                return _this.router.parseUrl(_this.semanticPathService.get('orders'));
            }
        })));
    };
    OrderConfirmationGuard.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    OrderConfirmationGuard.ctorParameters = function () { return [
        { type: CheckoutService },
        { type: Router },
        { type: SemanticPathService }
    ]; };
    /** @nocollapse */ OrderConfirmationGuard.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OrderConfirmationGuard_Factory() { return new OrderConfirmationGuard(i0.ɵɵinject(i1.CheckoutService), i0.ɵɵinject(i2.Router), i0.ɵɵinject(i1.SemanticPathService)); }, token: OrderConfirmationGuard, providedIn: "root" });
    return OrderConfirmationGuard;
}());
export { OrderConfirmationGuard };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OrderConfirmationGuard.prototype.checkoutService;
    /**
     * @type {?}
     * @private
     */
    OrderConfirmationGuard.prototype.router;
    /**
     * @type {?}
     * @private
     */
    OrderConfirmationGuard.prototype.semanticPathService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLmd1YXJkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvb3JkZXItY29uZmlybWF0aW9uL2d1YXJkcy9vcmRlci1jb25maXJtYXRpb24uZ3VhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUF3QixNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUcvRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7O0FBRXZFO0lBSUUsZ0NBQ1UsZUFBZ0MsRUFDaEMsTUFBYyxFQUNkLG1CQUF3QztRQUZ4QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7SUFDL0MsQ0FBQzs7OztJQUVKLDRDQUFXOzs7SUFBWDtRQUFBLGlCQVVDO1FBVEMsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsRUFBRSxDQUFDLElBQUksQ0FDaEQsR0FBRzs7OztRQUFDLFVBQUEsWUFBWTtZQUNkLElBQUksWUFBWSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDMUQsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFBTTtnQkFDTCxPQUFPLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUNyRTtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkFwQkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFKUSxlQUFlO2dCQUxPLE1BQU07Z0JBS1gsbUJBQW1COzs7aUNBTjdDO0NBNkJDLEFBckJELElBcUJDO1NBbEJZLHNCQUFzQjs7Ozs7O0lBRS9CLGlEQUF3Qzs7Ozs7SUFDeEMsd0NBQXNCOzs7OztJQUN0QixxREFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSwgVXJsVHJlZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDaGVja291dFNlcnZpY2UsIFNlbWFudGljUGF0aFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJDb25maXJtYXRpb25HdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgc2VtYW50aWNQYXRoU2VydmljZTogU2VtYW50aWNQYXRoU2VydmljZVxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuIHwgVXJsVHJlZT4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRPcmRlckRldGFpbHMoKS5waXBlKFxuICAgICAgbWFwKG9yZGVyRGV0YWlscyA9PiB7XG4gICAgICAgIGlmIChvcmRlckRldGFpbHMgJiYgT2JqZWN0LmtleXMob3JkZXJEZXRhaWxzKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5yb3V0ZXIucGFyc2VVcmwodGhpcy5zZW1hbnRpY1BhdGhTZXJ2aWNlLmdldCgnb3JkZXJzJykpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==