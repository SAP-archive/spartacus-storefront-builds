/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { CheckoutService } from '@spartacus/core';
var OrderConfirmationThankYouMessageComponent = /** @class */ (function () {
    function OrderConfirmationThankYouMessageComponent(checkoutService) {
        this.checkoutService = checkoutService;
    }
    /**
     * @return {?}
     */
    OrderConfirmationThankYouMessageComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.order$ = this.checkoutService.getOrderDetails();
    };
    /**
     * @return {?}
     */
    OrderConfirmationThankYouMessageComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.checkoutService.clearCheckoutData();
    };
    OrderConfirmationThankYouMessageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-order-confirmation-thank-you-message',
                    template: "<header class=\"cx-page-header\" *ngIf=\"order$ | async as order\">\n  <h1 class=\"cx-page-title\">\n    {{ 'checkoutOrderConfirmation.confirmationOfOrder' | cxTranslate }}\n    {{ order.code }}\n  </h1>\n</header>\n\n<div class=\"cx-order-confirmation-message\">\n  <h2>{{ 'checkoutOrderConfirmation.thankYou' | cxTranslate }}</h2>\n  <p>\n    {{ 'checkoutOrderConfirmation.invoiceHasBeenSentByEmail' | cxTranslate }}\n  </p>\n  <!-- <a href=\"#\" class=\"btn-link\">Print Page</a> -->\n</div>\n\n<cx-add-to-home-screen-banner></cx-add-to-home-screen-banner>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    OrderConfirmationThankYouMessageComponent.ctorParameters = function () { return [
        { type: CheckoutService }
    ]; };
    return OrderConfirmationThankYouMessageComponent;
}());
export { OrderConfirmationThankYouMessageComponent };
if (false) {
    /** @type {?} */
    OrderConfirmationThankYouMessageComponent.prototype.order$;
    /**
     * @type {?}
     * @protected
     */
    OrderConfirmationThankYouMessageComponent.prototype.checkoutService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLXRoYW5rLXlvdS1tZXNzYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi9jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi10aGFuay15b3UtbWVzc2FnZS9vcmRlci1jb25maXJtYXRpb24tdGhhbmsteW91LW1lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFTLE1BQU0saUJBQWlCLENBQUM7QUFHekQ7SUFTRSxtREFBc0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO0lBQUcsQ0FBQzs7OztJQUUxRCw0REFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVELCtEQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxDQUFDOztnQkFqQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSx5Q0FBeUM7b0JBQ25ELDZqQkFBb0U7b0JBQ3BFLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFQUSxlQUFlOztJQXFCeEIsZ0RBQUM7Q0FBQSxBQWxCRCxJQWtCQztTQWJZLHlDQUF5Qzs7O0lBRXBELDJEQUEwQjs7Ozs7SUFFZCxvRUFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGVja291dFNlcnZpY2UsIE9yZGVyIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtb3JkZXItY29uZmlybWF0aW9uLXRoYW5rLXlvdS1tZXNzYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29yZGVyLWNvbmZpcm1hdGlvbi10aGFuay15b3UtbWVzc2FnZS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckNvbmZpcm1hdGlvblRoYW5rWW91TWVzc2FnZUNvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgb3JkZXIkOiBPYnNlcnZhYmxlPE9yZGVyPjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vcmRlciQgPSB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRPcmRlckRldGFpbHMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmNsZWFyQ2hlY2tvdXREYXRhKCk7XG4gIH1cbn1cbiJdfQ==