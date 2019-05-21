/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, } from '@angular/core';
import { CheckoutService, RoutingService } from '@spartacus/core';
import { filter } from 'rxjs/operators';
export class PlaceOrderComponent {
    /**
     * @param {?} checkoutService
     * @param {?} routingService
     */
    constructor(checkoutService, routingService) {
        this.checkoutService = checkoutService;
        this.routingService = routingService;
        this.tAndCToggler = false;
    }
    /**
     * @return {?}
     */
    toggleTAndC() {
        this.tAndCToggler = !this.tAndCToggler;
    }
    /**
     * @return {?}
     */
    placeOrder() {
        this.checkoutService.placeOrder();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.placeOrderSubscription = this.checkoutService
            .getOrderDetails()
            .pipe(filter(order => Object.keys(order).length !== 0))
            .subscribe(() => {
            this.routingService.go({ cxRoute: 'orderConfirmation' });
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.placeOrderSubscription) {
            this.placeOrderSubscription.unsubscribe();
        }
    }
}
PlaceOrderComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-place-order',
                template: "<div class=\"cx-place-order-form form-check\">\n  <label>\n    <input class=\"form-check-input\" type=\"checkbox\" (change)=\"toggleTAndC()\" />\n    <span class=\"form-check-label\">\n      {{ 'checkoutReview.confirmThatRead' | cxTranslate }}\n      <a\n        [routerLink]=\"{ cxRoute: 'termsAndConditions' } | cxUrl\"\n        class=\"cx-tc-link\"\n        target=\"_blank\"\n      >\n        {{ 'checkoutReview.termsAndConditions' | cxTranslate }}\n      </a>\n    </span>\n  </label>\n</div>\n<button\n  [disabled]=\"!tAndCToggler\"\n  (click)=\"placeOrder()\"\n  class=\"btn btn-primary btn-block\"\n>\n  {{ 'checkoutReview.placeOrder' | cxTranslate }}\n</button>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
PlaceOrderComponent.ctorParameters = () => [
    { type: CheckoutService },
    { type: RoutingService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhY2Utb3JkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2NoZWNrb3V0L2NvbXBvbmVudHMvcGxhY2Utb3JkZXIvcGxhY2Utb3JkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULHVCQUF1QixHQUd4QixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVF4QyxNQUFNLE9BQU8sbUJBQW1COzs7OztJQUk5QixZQUNVLGVBQWdDLEVBQ2hDLGNBQThCO1FBRDlCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFMeEMsaUJBQVksR0FBRyxLQUFLLENBQUM7SUFNbEIsQ0FBQzs7OztJQUVKLFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUN6QyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEMsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLGVBQWU7YUFDL0MsZUFBZSxFQUFFO2FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQzthQUN0RCxTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO1FBQzNELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUMvQixJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDM0M7SUFDSCxDQUFDOzs7WUFuQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLDRxQkFBMkM7Z0JBQzNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBVFEsZUFBZTtZQUFFLGNBQWM7Ozs7SUFXdEMsMkNBQXFCOztJQUNyQixxREFBcUM7Ozs7O0lBR25DLDhDQUF3Qzs7Ozs7SUFDeEMsNkNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDaGVja291dFNlcnZpY2UsIFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBsYWNlLW9yZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BsYWNlLW9yZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFBsYWNlT3JkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHRBbmRDVG9nZ2xlciA9IGZhbHNlO1xuICBwbGFjZU9yZGVyU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgdG9nZ2xlVEFuZEMoKTogdm9pZCB7XG4gICAgdGhpcy50QW5kQ1RvZ2dsZXIgPSAhdGhpcy50QW5kQ1RvZ2dsZXI7XG4gIH1cblxuICBwbGFjZU9yZGVyKCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLnBsYWNlT3JkZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucGxhY2VPcmRlclN1YnNjcmlwdGlvbiA9IHRoaXMuY2hlY2tvdXRTZXJ2aWNlXG4gICAgICAuZ2V0T3JkZXJEZXRhaWxzKClcbiAgICAgIC5waXBlKGZpbHRlcihvcmRlciA9PiBPYmplY3Qua2V5cyhvcmRlcikubGVuZ3RoICE9PSAwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHsgY3hSb3V0ZTogJ29yZGVyQ29uZmlybWF0aW9uJyB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGxhY2VPcmRlclN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5wbGFjZU9yZGVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=