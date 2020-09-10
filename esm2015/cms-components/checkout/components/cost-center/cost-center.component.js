import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CheckoutCostCenterService, CostCenter, PaymentTypeService, UserCostCenterService, } from '@spartacus/core';
import { filter, tap } from 'rxjs/operators';
let CostCenterComponent = class CostCenterComponent {
    constructor(userCostCenterService, checkoutCostCenterService, paymentTypeService) {
        this.userCostCenterService = userCostCenterService;
        this.checkoutCostCenterService = checkoutCostCenterService;
        this.paymentTypeService = paymentTypeService;
        this.cartCostCenter$ = this.checkoutCostCenterService.getCostCenter();
        this.isAccountPayment$ = this.paymentTypeService.isAccountPayment();
        this.costCenters$ = this.userCostCenterService.getActiveCostCenters().pipe(filter((costCenters) => Boolean(costCenters)), tap((costCenters) => {
            if (!Boolean(this.costCenterId)) {
                this.setCostCenter(costCenters[0].code);
            }
        }));
    }
    setCostCenter(selectCostCenter) {
        this.costCenterId = selectCostCenter;
        this.checkoutCostCenterService.setCostCenter(this.costCenterId);
    }
};
CostCenterComponent.ctorParameters = () => [
    { type: UserCostCenterService },
    { type: CheckoutCostCenterService },
    { type: PaymentTypeService }
];
CostCenterComponent = __decorate([
    Component({
        selector: 'cx-cost-center',
        template: "<ng-container *ngIf=\"isAccountPayment$ | async\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-xl-10\">\n      <ng-container *ngIf=\"costCenters$ | async as costCenters\">\n        <div *ngIf=\"costCenters.length !== 0\">\n          <label>\n            <span class=\"label-content required\">{{\n              'checkoutPO.costCenter' | cxTranslate\n            }}</span>\n            <select (change)=\"setCostCenter($event.target.value)\">\n              <option\n                *ngFor=\"let costCenter of costCenters\"\n                value=\"{{ costCenter.code }}\"\n                [selected]=\"(cartCostCenter$ | async) === costCenter.code\"\n                >{{ costCenter.name }}</option\n              >\n            </select>\n            <span class=\"label-content\">{{\n              'checkoutPO.availableLabel' | cxTranslate\n            }}</span>\n          </label>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], CostCenterComponent);
export { CostCenterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zdC1jZW50ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9jb3N0LWNlbnRlci9jb3N0LWNlbnRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUNMLHlCQUF5QixFQUN6QixVQUFVLEVBQ1Ysa0JBQWtCLEVBQ2xCLHFCQUFxQixHQUN0QixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPN0MsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFvQjlCLFlBQ1kscUJBQTRDLEVBQzVDLHlCQUFvRCxFQUNwRCxrQkFBc0M7UUFGdEMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM1Qyw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQ3BELHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFwQmxELG9CQUFlLEdBRVgsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRW5ELHNCQUFpQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRS9ELGlCQUFZLEdBRVIsSUFBSSxDQUFDLHFCQUFxQixDQUFDLG9CQUFvQixFQUFFLENBQUMsSUFBSSxDQUN4RCxNQUFNLENBQUMsQ0FBQyxXQUF5QixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFDM0QsR0FBRyxDQUFDLENBQUMsV0FBeUIsRUFBRSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFO2dCQUMvQixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN6QztRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFNQyxDQUFDO0lBRUosYUFBYSxDQUFDLGdCQUF3QjtRQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLGdCQUFnQixDQUFDO1FBQ3JDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xFLENBQUM7Q0FDRixDQUFBOztZQVRvQyxxQkFBcUI7WUFDakIseUJBQXlCO1lBQ2hDLGtCQUFrQjs7QUF2QnZDLG1CQUFtQjtJQUwvQixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCLDA5QkFBeUM7UUFDekMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLG1CQUFtQixDQThCL0I7U0E5QlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2hlY2tvdXRDb3N0Q2VudGVyU2VydmljZSxcbiAgQ29zdENlbnRlcixcbiAgUGF5bWVudFR5cGVTZXJ2aWNlLFxuICBVc2VyQ29zdENlbnRlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY29zdC1jZW50ZXInLFxuICB0ZW1wbGF0ZVVybDogJ2Nvc3QtY2VudGVyLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENvc3RDZW50ZXJDb21wb25lbnQge1xuICBwcm90ZWN0ZWQgY29zdENlbnRlcklkOiBzdHJpbmc7XG5cbiAgY2FydENvc3RDZW50ZXIkOiBPYnNlcnZhYmxlPFxuICAgIHN0cmluZ1xuICA+ID0gdGhpcy5jaGVja291dENvc3RDZW50ZXJTZXJ2aWNlLmdldENvc3RDZW50ZXIoKTtcblxuICBpc0FjY291bnRQYXltZW50JCA9IHRoaXMucGF5bWVudFR5cGVTZXJ2aWNlLmlzQWNjb3VudFBheW1lbnQoKTtcblxuICBjb3N0Q2VudGVycyQ6IE9ic2VydmFibGU8XG4gICAgQ29zdENlbnRlcltdXG4gID4gPSB0aGlzLnVzZXJDb3N0Q2VudGVyU2VydmljZS5nZXRBY3RpdmVDb3N0Q2VudGVycygpLnBpcGUoXG4gICAgZmlsdGVyKChjb3N0Q2VudGVyczogQ29zdENlbnRlcltdKSA9PiBCb29sZWFuKGNvc3RDZW50ZXJzKSksXG4gICAgdGFwKChjb3N0Q2VudGVyczogQ29zdENlbnRlcltdKSA9PiB7XG4gICAgICBpZiAoIUJvb2xlYW4odGhpcy5jb3N0Q2VudGVySWQpKSB7XG4gICAgICAgIHRoaXMuc2V0Q29zdENlbnRlcihjb3N0Q2VudGVyc1swXS5jb2RlKTtcbiAgICAgIH1cbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB1c2VyQ29zdENlbnRlclNlcnZpY2U6IFVzZXJDb3N0Q2VudGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRDb3N0Q2VudGVyU2VydmljZTogQ2hlY2tvdXRDb3N0Q2VudGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcGF5bWVudFR5cGVTZXJ2aWNlOiBQYXltZW50VHlwZVNlcnZpY2VcbiAgKSB7fVxuXG4gIHNldENvc3RDZW50ZXIoc2VsZWN0Q29zdENlbnRlcjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jb3N0Q2VudGVySWQgPSBzZWxlY3RDb3N0Q2VudGVyO1xuICAgIHRoaXMuY2hlY2tvdXRDb3N0Q2VudGVyU2VydmljZS5zZXRDb3N0Q2VudGVyKHRoaXMuY29zdENlbnRlcklkKTtcbiAgfVxufVxuIl19