import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { CheckoutService, Order } from '@spartacus/core';
import { tap } from 'rxjs/operators';
var OrderConfirmationThankYouMessageComponent = /** @class */ (function () {
    function OrderConfirmationThankYouMessageComponent(checkoutService) {
        this.checkoutService = checkoutService;
        this.isGuestCustomer = false;
    }
    OrderConfirmationThankYouMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.order$ = this.checkoutService.getOrderDetails().pipe(tap(function (order) {
            _this.isGuestCustomer = order.guestCustomer;
            _this.orderGuid = order.guid;
        }));
    };
    OrderConfirmationThankYouMessageComponent.prototype.ngOnDestroy = function () {
        this.checkoutService.clearCheckoutData();
    };
    OrderConfirmationThankYouMessageComponent.ctorParameters = function () { return [
        { type: CheckoutService }
    ]; };
    OrderConfirmationThankYouMessageComponent = __decorate([
        Component({
            selector: 'cx-order-confirmation-thank-you-message',
            template: "<ng-container *ngIf=\"order$ | async as order\">\n  <div class=\"cx-page-header\">\n    <h1 class=\"cx-page-title\">\n      {{ 'checkoutOrderConfirmation.confirmationOfOrder' | cxTranslate }}\n      {{ order.code }}\n    </h1>\n  </div>\n\n  <div class=\"cx-order-confirmation-message\">\n    <h2>{{ 'checkoutOrderConfirmation.thankYou' | cxTranslate }}</h2>\n    <p>\n      {{ 'checkoutOrderConfirmation.invoiceHasBeenSentByEmail' | cxTranslate }}\n    </p>\n    <!-- <a href=\"#\" class=\"btn-link\">Print Page</a> -->\n  </div>\n\n  <div *ngIf=\"isGuestCustomer\">\n    <cx-guest-register-form\n      [guid]=\"orderGuid\"\n      [email]=\"order.paymentInfo.billingAddress.email\"\n    ></cx-guest-register-form>\n  </div>\n\n  <cx-add-to-home-screen-banner></cx-add-to-home-screen-banner>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], OrderConfirmationThankYouMessageComponent);
    return OrderConfirmationThankYouMessageComponent;
}());
export { OrderConfirmationThankYouMessageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLXRoYW5rLXlvdS1tZXNzYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi9jb21wb25lbnRzL29yZGVyLWNvbmZpcm1hdGlvbi10aGFuay15b3UtbWVzc2FnZS9vcmRlci1jb25maXJtYXRpb24tdGhhbmsteW91LW1lc3NhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU9yQztJQU1FLG1EQUFzQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFIdEQsb0JBQWUsR0FBRyxLQUFLLENBQUM7SUFHaUMsQ0FBQztJQUUxRCw0REFBUSxHQUFSO1FBQUEsaUJBT0M7UUFOQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUN2RCxHQUFHLENBQUMsVUFBQSxLQUFLO1lBQ1AsS0FBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUMsYUFBYSxDQUFDO1lBQzNDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELCtEQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0MsQ0FBQzs7Z0JBYnNDLGVBQWU7O0lBTjNDLHlDQUF5QztRQUxyRCxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUseUNBQXlDO1lBQ25ELHN6QkFBb0U7WUFDcEUsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztPQUNXLHlDQUF5QyxDQW9CckQ7SUFBRCxnREFBQztDQUFBLEFBcEJELElBb0JDO1NBcEJZLHlDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoZWNrb3V0U2VydmljZSwgT3JkZXIgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1vcmRlci1jb25maXJtYXRpb24tdGhhbmsteW91LW1lc3NhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vb3JkZXItY29uZmlybWF0aW9uLXRoYW5rLXlvdS1tZXNzYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyQ29uZmlybWF0aW9uVGhhbmtZb3VNZXNzYWdlQ29tcG9uZW50XG4gIGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBvcmRlciQ6IE9ic2VydmFibGU8T3JkZXI+O1xuICBpc0d1ZXN0Q3VzdG9tZXIgPSBmYWxzZTtcbiAgb3JkZXJHdWlkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub3JkZXIkID0gdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0T3JkZXJEZXRhaWxzKCkucGlwZShcbiAgICAgIHRhcChvcmRlciA9PiB7XG4gICAgICAgIHRoaXMuaXNHdWVzdEN1c3RvbWVyID0gb3JkZXIuZ3Vlc3RDdXN0b21lcjtcbiAgICAgICAgdGhpcy5vcmRlckd1aWQgPSBvcmRlci5ndWlkO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jaGVja291dFNlcnZpY2UuY2xlYXJDaGVja291dERhdGEoKTtcbiAgfVxufVxuIl19