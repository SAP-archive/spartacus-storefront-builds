/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { RoutingService, CheckoutService } from '@spartacus/core';
var OrderConfirmationPageGuard = /** @class */ (function () {
    function OrderConfirmationPageGuard(checkoutService, routingService) {
        this.checkoutService = checkoutService;
        this.routingService = routingService;
    }
    /**
     * @return {?}
     */
    OrderConfirmationPageGuard.prototype.canActivate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.checkoutService.getOrderDetails().pipe(map(function (orderDetails) {
            if (orderDetails && Object.keys(orderDetails).length !== 0) {
                return true;
            }
            else {
                _this.routingService.go({ route: 'orders' });
                return false;
            }
        }));
    };
    OrderConfirmationPageGuard.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OrderConfirmationPageGuard.ctorParameters = function () { return [
        { type: CheckoutService },
        { type: RoutingService }
    ]; };
    return OrderConfirmationPageGuard;
}());
export { OrderConfirmationPageGuard };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OrderConfirmationPageGuard.prototype.checkoutService;
    /**
     * @type {?}
     * @private
     */
    OrderConfirmationPageGuard.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLXBhZ2UuZ3VhcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvY2hlY2tvdXQvZ3VhcmRzL29yZGVyLWNvbmZpcm1hdGlvbi1wYWdlLmd1YXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWxFO0lBRUUsb0NBQ1UsZUFBZ0MsRUFDaEMsY0FBOEI7UUFEOUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtJQUNyQyxDQUFDOzs7O0lBRUosZ0RBQVc7OztJQUFYO1FBQUEsaUJBV0M7UUFWQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUNoRCxHQUFHLENBQUMsVUFBQSxZQUFZO1lBQ2QsSUFBSSxZQUFZLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUMxRCxPQUFPLElBQUksQ0FBQzthQUNiO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7Z0JBQzVDLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBbEJGLFVBQVU7Ozs7Z0JBRmMsZUFBZTtnQkFBL0IsY0FBYzs7SUFxQnZCLGlDQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FsQlksMEJBQTBCOzs7Ozs7SUFFbkMscURBQXdDOzs7OztJQUN4QyxvREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYW5BY3RpdmF0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UsIENoZWNrb3V0U2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPcmRlckNvbmZpcm1hdGlvblBhZ2VHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgY2FuQWN0aXZhdGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmdldE9yZGVyRGV0YWlscygpLnBpcGUoXG4gICAgICBtYXAob3JkZXJEZXRhaWxzID0+IHtcbiAgICAgICAgaWYgKG9yZGVyRGV0YWlscyAmJiBPYmplY3Qua2V5cyhvcmRlckRldGFpbHMpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oeyByb3V0ZTogJ29yZGVycycgfSk7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==