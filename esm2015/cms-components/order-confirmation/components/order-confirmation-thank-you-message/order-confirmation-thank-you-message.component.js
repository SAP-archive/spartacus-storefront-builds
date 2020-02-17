/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { CheckoutService } from '@spartacus/core';
import { tap } from 'rxjs/operators';
export class OrderConfirmationThankYouMessageComponent {
    /**
     * @param {?} checkoutService
     */
    constructor(checkoutService) {
        this.checkoutService = checkoutService;
        this.isGuestCustomer = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.order$ = this.checkoutService.getOrderDetails().pipe(tap((/**
         * @param {?} order
         * @return {?}
         */
        order => {
            this.isGuestCustomer = order.guestCustomer;
            this.orderGuid = order.guid;
        })));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.checkoutService.clearCheckoutData();
    }
}
OrderConfirmationThankYouMessageComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-order-confirmation-thank-you-message',
                template: "<ng-container *ngIf=\"order$ | async as order\">\n  <div class=\"cx-page-header\">\n    <h1 class=\"cx-page-title\">\n      {{ 'checkoutOrderConfirmation.confirmationOfOrder' | cxTranslate }}\n      {{ order.code }}\n    </h1>\n  </div>\n\n  <div class=\"cx-order-confirmation-message\">\n    <h2>{{ 'checkoutOrderConfirmation.thankYou' | cxTranslate }}</h2>\n    <p>\n      {{ 'checkoutOrderConfirmation.invoiceHasBeenSentByEmail' | cxTranslate }}\n    </p>\n    <!-- <a href=\"#\" class=\"btn-link\">Print Page</a> -->\n  </div>\n\n  <div *ngIf=\"isGuestCustomer\">\n    <cx-guest-register-form\n      [guid]=\"orderGuid\"\n      [email]=\"order.paymentInfo.billingAddress.email\"\n    ></cx-guest-register-form>\n  </div>\n\n  <cx-add-to-home-screen-banner></cx-add-to-home-screen-banner>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
OrderConfirmationThankYouMessageComponent.ctorParameters = () => [
    { type: CheckoutService }
];
if (false) {
    /** @type {?} */
    OrderConfirmationThankYouMessageComponent.prototype.order$;
    /** @type {?} */
    OrderConfirmationThankYouMessageComponent.prototype.isGuestCustomer;
    /** @type {?} */
    OrderConfirmationThankYouMessageComponent.prototype.orderGuid;
    /**
     * @type {?}
     * @protected
     */
    OrderConfirmationThankYouMessageComponent.prototype.checkoutService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLXRoYW5rLXlvdS1tZXNzYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi9jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi10aGFuay15b3UtbWVzc2FnZS9vcmRlci1jb25maXJtYXRpb24tdGhhbmsteW91LW1lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFTLE1BQU0saUJBQWlCLENBQUM7QUFFekQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT3JDLE1BQU0sT0FBTyx5Q0FBeUM7Ozs7SUFNcEQsWUFBc0IsZUFBZ0M7UUFBaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBSHRELG9CQUFlLEdBQUcsS0FBSyxDQUFDO0lBR2lDLENBQUM7Ozs7SUFFMUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQ3ZELEdBQUc7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQztZQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7UUFDOUIsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNDLENBQUM7OztZQXhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlDQUF5QztnQkFDbkQsc3pCQUFvRTtnQkFDcEUsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFSUSxlQUFlOzs7O0lBV3RCLDJEQUEwQjs7SUFDMUIsb0VBQXdCOztJQUN4Qiw4REFBa0I7Ozs7O0lBRU4sb0VBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2hlY2tvdXRTZXJ2aWNlLCBPcmRlciB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW9yZGVyLWNvbmZpcm1hdGlvbi10aGFuay15b3UtbWVzc2FnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlci1jb25maXJtYXRpb24tdGhhbmsteW91LW1lc3NhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJDb25maXJtYXRpb25UaGFua1lvdU1lc3NhZ2VDb21wb25lbnRcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIG9yZGVyJDogT2JzZXJ2YWJsZTxPcmRlcj47XG4gIGlzR3Vlc3RDdXN0b21lciA9IGZhbHNlO1xuICBvcmRlckd1aWQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vcmRlciQgPSB0aGlzLmNoZWNrb3V0U2VydmljZS5nZXRPcmRlckRldGFpbHMoKS5waXBlKFxuICAgICAgdGFwKG9yZGVyID0+IHtcbiAgICAgICAgdGhpcy5pc0d1ZXN0Q3VzdG9tZXIgPSBvcmRlci5ndWVzdEN1c3RvbWVyO1xuICAgICAgICB0aGlzLm9yZGVyR3VpZCA9IG9yZGVyLmd1aWQ7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5jbGVhckNoZWNrb3V0RGF0YSgpO1xuICB9XG59XG4iXX0=