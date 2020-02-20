import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { CheckoutService, Order } from '@spartacus/core';
let OrderConfirmationTotalsComponent = class OrderConfirmationTotalsComponent {
    constructor(checkoutService) {
        this.checkoutService = checkoutService;
    }
    ngOnInit() {
        this.order$ = this.checkoutService.getOrderDetails();
    }
    ngOnDestroy() {
        this.checkoutService.clearCheckoutData();
    }
};
OrderConfirmationTotalsComponent.ctorParameters = () => [
    { type: CheckoutService }
];
OrderConfirmationTotalsComponent = __decorate([
    Component({
        selector: 'cx-order-confirmation-totals',
        template: "<div class=\"cx-order-summary container\" *ngIf=\"order$ | async as order\">\n  <div class=\"row justify-content-end\">\n    <div class=\"col-sm-12 col-md-6 col-lg-5 col-xl-4\">\n      <cx-order-summary [cart]=\"order\"></cx-order-summary>\n    </div>\n  </div>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], OrderConfirmationTotalsComponent);
export { OrderConfirmationTotalsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY29uZmlybWF0aW9uLXRvdGFscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9vcmRlci1jb25maXJtYXRpb24vY29tcG9uZW50cy9vcmRlci1jb25maXJtYXRpb24tdG90YWxzL29yZGVyLWNvbmZpcm1hdGlvbi10b3RhbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBUXpELElBQWEsZ0NBQWdDLEdBQTdDLE1BQWEsZ0NBQWdDO0lBRzNDLFlBQXNCLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7SUFFMUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN2RCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0NBQ0YsQ0FBQTs7WUFUd0MsZUFBZTs7QUFIM0MsZ0NBQWdDO0lBTDVDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSw4QkFBOEI7UUFDeEMsMlJBQXlEO1FBQ3pELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7R0FDVyxnQ0FBZ0MsQ0FZNUM7U0FaWSxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDaGVja291dFNlcnZpY2UsIE9yZGVyIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtb3JkZXItY29uZmlybWF0aW9uLXRvdGFscycsXG4gIHRlbXBsYXRlVXJsOiAnLi9vcmRlci1jb25maXJtYXRpb24tdG90YWxzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyQ29uZmlybWF0aW9uVG90YWxzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBvcmRlciQ6IE9ic2VydmFibGU8T3JkZXI+O1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9yZGVyJCA9IHRoaXMuY2hlY2tvdXRTZXJ2aWNlLmdldE9yZGVyRGV0YWlscygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5jaGVja291dFNlcnZpY2UuY2xlYXJDaGVja291dERhdGEoKTtcbiAgfVxufVxuIl19