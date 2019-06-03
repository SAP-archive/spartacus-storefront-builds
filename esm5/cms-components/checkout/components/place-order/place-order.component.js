/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, } from '@angular/core';
import { CheckoutService, RoutingService } from '@spartacus/core';
import { filter } from 'rxjs/operators';
var PlaceOrderComponent = /** @class */ (function () {
    function PlaceOrderComponent(checkoutService, routingService) {
        this.checkoutService = checkoutService;
        this.routingService = routingService;
        this.tAndCToggler = false;
    }
    /**
     * @return {?}
     */
    PlaceOrderComponent.prototype.toggleTAndC = /**
     * @return {?}
     */
    function () {
        this.tAndCToggler = !this.tAndCToggler;
    };
    /**
     * @return {?}
     */
    PlaceOrderComponent.prototype.placeOrder = /**
     * @return {?}
     */
    function () {
        this.checkoutService.placeOrder();
    };
    /**
     * @return {?}
     */
    PlaceOrderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.placeOrderSubscription = this.checkoutService
            .getOrderDetails()
            .pipe(filter(function (order) { return Object.keys(order).length !== 0; }))
            .subscribe(function () {
            _this.routingService.go({ cxRoute: 'orderConfirmation' });
        });
    };
    /**
     * @return {?}
     */
    PlaceOrderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.placeOrderSubscription) {
            this.placeOrderSubscription.unsubscribe();
        }
    };
    PlaceOrderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-place-order',
                    template: "<div class=\"cx-place-order-form form-check\">\n  <label>\n    <input class=\"form-check-input\" type=\"checkbox\" (change)=\"toggleTAndC()\" />\n    <span class=\"form-check-label\">\n      {{ 'checkoutReview.confirmThatRead' | cxTranslate }}\n      <a\n        [routerLink]=\"{ cxRoute: 'termsAndConditions' } | cxUrl\"\n        class=\"cx-tc-link\"\n        target=\"_blank\"\n      >\n        {{ 'checkoutReview.termsAndConditions' | cxTranslate }}\n      </a>\n    </span>\n  </label>\n</div>\n<button\n  [disabled]=\"!tAndCToggler\"\n  (click)=\"placeOrder()\"\n  class=\"btn btn-primary btn-block\"\n>\n  {{ 'checkoutReview.placeOrder' | cxTranslate }}\n</button>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    PlaceOrderComponent.ctorParameters = function () { return [
        { type: CheckoutService },
        { type: RoutingService }
    ]; };
    return PlaceOrderComponent;
}());
export { PlaceOrderComponent };
if (false) {
    /** @type {?} */
    PlaceOrderComponent.prototype.tAndCToggler;
    /** @type {?} */
    PlaceOrderComponent.prototype.placeOrderSubscription;
    /**
     * @type {?}
     * @private
     */
    PlaceOrderComponent.prototype.checkoutService;
    /**
     * @type {?}
     * @private
     */
    PlaceOrderComponent.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Utb3JkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9wbGFjZS1vcmRlci9wbGFjZS1vcmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEdBR3hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3hDO0lBU0UsNkJBQ1UsZUFBZ0MsRUFDaEMsY0FBOEI7UUFEOUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUx4QyxpQkFBWSxHQUFHLEtBQUssQ0FBQztJQU1sQixDQUFDOzs7O0lBRUoseUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELHdDQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELHNDQUFROzs7SUFBUjtRQUFBLGlCQU9DO1FBTkMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxlQUFlO2FBQy9DLGVBQWUsRUFBRTthQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUEvQixDQUErQixDQUFDLENBQUM7YUFDdEQsU0FBUyxDQUFDO1lBQ1QsS0FBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUNFLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO1lBQy9CLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMzQztJQUNILENBQUM7O2dCQW5DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsNHFCQUEyQztvQkFDM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQVRRLGVBQWU7Z0JBQUUsY0FBYzs7SUF5Q3hDLDBCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7U0EvQlksbUJBQW1COzs7SUFDOUIsMkNBQXFCOztJQUNyQixxREFBcUM7Ozs7O0lBR25DLDhDQUF3Qzs7Ozs7SUFDeEMsNkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDaGVja291dFNlcnZpY2UsIFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBsYWNlLW9yZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BsYWNlLW9yZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFBsYWNlT3JkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHRBbmRDVG9nZ2xlciA9IGZhbHNlO1xuICBwbGFjZU9yZGVyU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgdG9nZ2xlVEFuZEMoKTogdm9pZCB7XG4gICAgdGhpcy50QW5kQ1RvZ2dsZXIgPSAhdGhpcy50QW5kQ1RvZ2dsZXI7XG4gIH1cblxuICBwbGFjZU9yZGVyKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLnBsYWNlT3JkZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucGxhY2VPcmRlclN1YnNjcmlwdGlvbiA9IHRoaXMuY2hlY2tvdXRTZXJ2aWNlXG4gICAgICAuZ2V0T3JkZXJEZXRhaWxzKClcbiAgICAgIC5waXBlKGZpbHRlcihvcmRlciA9PiBPYmplY3Qua2V5cyhvcmRlcikubGVuZ3RoICE9PSAwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ29yZGVyQ29uZmlybWF0aW9uJyB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGxhY2VPcmRlclN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5wbGFjZU9yZGVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=