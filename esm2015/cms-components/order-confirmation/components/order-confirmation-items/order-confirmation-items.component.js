/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { CheckoutService, PromotionLocation, } from '@spartacus/core';
import { PromotionService } from '../../../../shared/services/promotion/promotion.service';
export class OrderConfirmationItemsComponent {
    /**
     * @param {?} checkoutService
     * @param {?=} promotionService
     */
    constructor(checkoutService, promotionService) {
        this.checkoutService = checkoutService;
        this.promotionService = promotionService;
        this.promotionLocation = PromotionLocation.Checkout;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.order$ = this.checkoutService.getOrderDetails();
        this.orderPromotions$ = this.promotionService.getOrderPromotions(this.promotionLocation);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.checkoutService.clearCheckoutData();
    }
}
OrderConfirmationItemsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-confirmation-items',
                template: "<div class=\"cx-order-items container\" *ngIf=\"order$ | async as order\">\n  <h4 class=\"cx-order-items-header\">\n    {{ 'checkoutOrderConfirmation.orderItems' | cxTranslate }}\n  </h4>\n\n  <ng-container *cxFeatureLevel=\"'1.5'\">\n    <ng-container *ngIf=\"orderPromotions$ | async as orderPromotions\">\n      <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n    </ng-container>\n  </ng-container>\n\n  <cx-cart-item-list\n    [items]=\"order.entries\"\n    [readonly]=\"true\"\n    [promotionLocation]=\"promotionLocation\"\n  ></cx-cart-item-list>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
OrderConfirmationItemsComponent.ctorParameters = () => [
    { type: CheckoutService },
    { type: PromotionService }
];
if (false) {
    /** @type {?} */
    OrderConfirmationItemsComponent.prototype.promotionLocation;
    /** @type {?} */
    OrderConfirmationItemsComponent.prototype.order$;
    /** @type {?} */
    OrderConfirmationItemsComponent.prototype.orderPromotions$;
    /**
     * @type {?}
     * @protected
     */
    OrderConfirmationItemsComponent.prototype.checkoutService;
    /**
     * @type {?}
     * @protected
     */
    OrderConfirmationItemsComponent.prototype.promotionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLWl0ZW1zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi9jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi1pdGVtcy9vcmRlci1jb25maXJtYXRpb24taXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsZUFBZSxFQUdmLGlCQUFpQixHQUNsQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBTzNGLE1BQU0sT0FBTywrQkFBK0I7Ozs7O0lBa0IxQyxZQUNZLGVBQWdDLEVBQ2hDLGdCQUFtQztRQURuQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtRQW5CL0Msc0JBQWlCLEdBQXNCLGlCQUFpQixDQUFDLFFBQVEsQ0FBQztJQW9CL0QsQ0FBQzs7OztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsQ0FDOUQsSUFBSSxDQUFDLGlCQUFpQixDQUN2QixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsQ0FBQzs7O1lBckNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxpbEJBQXdEO2dCQUN4RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQVpDLGVBQWU7WUFNUixnQkFBZ0I7Ozs7SUFRdkIsNERBQWtFOztJQUNsRSxpREFBMEI7O0lBQzFCLDJEQUFnRDs7Ozs7SUFnQjlDLDBEQUEwQzs7Ozs7SUFDMUMsMkRBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2hlY2tvdXRTZXJ2aWNlLFxuICBPcmRlcixcbiAgUHJvbW90aW9uUmVzdWx0LFxuICBQcm9tb3Rpb25Mb2NhdGlvbixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb21vdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvcHJvbW90aW9uL3Byb21vdGlvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtb3JkZXItY29uZmlybWF0aW9uLWl0ZW1zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29yZGVyLWNvbmZpcm1hdGlvbi1pdGVtcy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckNvbmZpcm1hdGlvbkl0ZW1zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcm9tb3Rpb25Mb2NhdGlvbjogUHJvbW90aW9uTG9jYXRpb24gPSBQcm9tb3Rpb25Mb2NhdGlvbi5DaGVja291dDtcbiAgb3JkZXIkOiBPYnNlcnZhYmxlPE9yZGVyPjtcbiAgb3JkZXJQcm9tb3Rpb25zJDogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVuaWZpZWQtc2lnbmF0dXJlc1xuICAgIHByb21vdGlvblNlcnZpY2U6IFByb21vdGlvblNlcnZpY2VcbiAgKTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS41XG4gICAqIFVzZSBwcm9tb3Rpb25TZXJ2aWNlIGluc3RlYWQgb2YgdGhlIHByb21vdGlvbiBpbnB1dHMuXG4gICAqIFJlbW92ZSBpc3N1ZTogIzU2NzBcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHByb21vdGlvblNlcnZpY2U/OiBQcm9tb3Rpb25TZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9yZGVyJCA9IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmdldE9yZGVyRGV0YWlscygpO1xuICAgIHRoaXMub3JkZXJQcm9tb3Rpb25zJCA9IHRoaXMucHJvbW90aW9uU2VydmljZS5nZXRPcmRlclByb21vdGlvbnMoXG4gICAgICB0aGlzLnByb21vdGlvbkxvY2F0aW9uXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQ2hlY2tvdXREYXRhKCk7XG4gIH1cbn1cbiJdfQ==