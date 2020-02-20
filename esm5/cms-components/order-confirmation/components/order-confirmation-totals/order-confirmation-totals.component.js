import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { CheckoutService, Order } from '@spartacus/core';
var OrderConfirmationTotalsComponent = /** @class */ (function () {
    function OrderConfirmationTotalsComponent(checkoutService) {
        this.checkoutService = checkoutService;
    }
    OrderConfirmationTotalsComponent.prototype.ngOnInit = function () {
        this.order$ = this.checkoutService.getOrderDetails();
    };
    OrderConfirmationTotalsComponent.prototype.ngOnDestroy = function () {
        this.checkoutService.clearCheckoutData();
    };
    OrderConfirmationTotalsComponent.ctorParameters = function () { return [
        { type: CheckoutService }
    ]; };
    OrderConfirmationTotalsComponent = __decorate([
        Component({
            selector: 'cx-order-confirmation-totals',
            template: "<div class=\"cx-order-summary container\" *ngIf=\"order$ | async as order\">\n  <div class=\"row justify-content-end\">\n    <div class=\"col-sm-12 col-md-6 col-lg-5 col-xl-4\">\n      <cx-order-summary [cart]=\"order\"></cx-order-summary>\n    </div>\n  </div>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], OrderConfirmationTotalsComponent);
    return OrderConfirmationTotalsComponent;
}());
export { OrderConfirmationTotalsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLXRvdGFscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9vcmRlci1jb25maXJtYXRpb24vY29tcG9uZW50cy9vcmRlci1jb25maXJtYXRpb24tdG90YWxzL29yZGVyLWNvbmZpcm1hdGlvbi10b3RhbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUXpEO0lBR0UsMENBQXNCLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7SUFFMUQsbURBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBRUQsc0RBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxDQUFDOztnQkFSc0MsZUFBZTs7SUFIM0MsZ0NBQWdDO1FBTDVDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSw4QkFBOEI7WUFDeEMsMlJBQXlEO1lBQ3pELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyxnQ0FBZ0MsQ0FZNUM7SUFBRCx1Q0FBQztDQUFBLEFBWkQsSUFZQztTQVpZLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENoZWNrb3V0U2VydmljZSwgT3JkZXIgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1vcmRlci1jb25maXJtYXRpb24tdG90YWxzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL29yZGVyLWNvbmZpcm1hdGlvbi10b3RhbHMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJDb25maXJtYXRpb25Ub3RhbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIG9yZGVyJDogT2JzZXJ2YWJsZTxPcmRlcj47XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub3JkZXIkID0gdGhpcy5jaGVja291dFNlcnZpY2UuZ2V0T3JkZXJEZXRhaWxzKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmNoZWNrb3V0U2VydmljZS5jbGVhckNoZWNrb3V0RGF0YSgpO1xuICB9XG59XG4iXX0=