import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CheckoutCostCenterService, CostCenter, PaymentTypeService, UserCostCenterService, } from '@spartacus/core';
import { filter, tap } from 'rxjs/operators';
var CostCenterComponent = /** @class */ (function () {
    function CostCenterComponent(userCostCenterService, checkoutCostCenterService, paymentTypeService) {
        var _this = this;
        this.userCostCenterService = userCostCenterService;
        this.checkoutCostCenterService = checkoutCostCenterService;
        this.paymentTypeService = paymentTypeService;
        this.cartCostCenter$ = this.checkoutCostCenterService.getCostCenter();
        this.isAccountPayment$ = this.paymentTypeService.isAccountPayment();
        this.costCenters$ = this.userCostCenterService.getActiveCostCenters().pipe(filter(function (costCenters) { return Boolean(costCenters); }), tap(function (costCenters) {
            if (!Boolean(_this.costCenterId)) {
                _this.setCostCenter(costCenters[0].code);
            }
        }));
    }
    CostCenterComponent.prototype.setCostCenter = function (selectCostCenter) {
        this.costCenterId = selectCostCenter;
        this.checkoutCostCenterService.setCostCenter(this.costCenterId);
    };
    CostCenterComponent.ctorParameters = function () { return [
        { type: UserCostCenterService },
        { type: CheckoutCostCenterService },
        { type: PaymentTypeService }
    ]; };
    CostCenterComponent = __decorate([
        Component({
            selector: 'cx-cost-center',
            template: "<ng-container *ngIf=\"isAccountPayment$ | async\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-xl-10\">\n      <ng-container *ngIf=\"costCenters$ | async as costCenters\">\n        <div *ngIf=\"costCenters.length !== 0\">\n          <label>\n            <span class=\"label-content required\">{{\n              'checkoutPO.costCenter' | cxTranslate\n            }}</span>\n            <select (change)=\"setCostCenter($event.target.value)\">\n              <option\n                *ngFor=\"let costCenter of costCenters\"\n                value=\"{{ costCenter.code }}\"\n                [selected]=\"(cartCostCenter$ | async) === costCenter.code\"\n                >{{ costCenter.name }}</option\n              >\n            </select>\n            <span class=\"label-content\">{{\n              'checkoutPO.availableLabel' | cxTranslate\n            }}</span>\n          </label>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], CostCenterComponent);
    return CostCenterComponent;
}());
export { CostCenterComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zdC1jZW50ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9jb3N0LWNlbnRlci9jb3N0LWNlbnRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUNMLHlCQUF5QixFQUN6QixVQUFVLEVBQ1Ysa0JBQWtCLEVBQ2xCLHFCQUFxQixHQUN0QixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPN0M7SUFvQkUsNkJBQ1kscUJBQTRDLEVBQzVDLHlCQUFvRCxFQUNwRCxrQkFBc0M7UUFIbEQsaUJBSUk7UUFIUSwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzVDLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDcEQsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQXBCbEQsb0JBQWUsR0FFWCxJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxFQUFFLENBQUM7UUFFbkQsc0JBQWlCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFL0QsaUJBQVksR0FFUixJQUFJLENBQUMscUJBQXFCLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxJQUFJLENBQ3hELE1BQU0sQ0FBQyxVQUFDLFdBQXlCLElBQUssT0FBQSxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQXBCLENBQW9CLENBQUMsRUFDM0QsR0FBRyxDQUFDLFVBQUMsV0FBeUI7WUFDNUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLEVBQUU7Z0JBQy9CLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3pDO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQU1DLENBQUM7SUFFSiwyQ0FBYSxHQUFiLFVBQWMsZ0JBQXdCO1FBQ3BDLElBQUksQ0FBQyxZQUFZLEdBQUcsZ0JBQWdCLENBQUM7UUFDckMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Z0JBUmtDLHFCQUFxQjtnQkFDakIseUJBQXlCO2dCQUNoQyxrQkFBa0I7O0lBdkJ2QyxtQkFBbUI7UUFML0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQiwwOUJBQXlDO1lBQ3pDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyxtQkFBbUIsQ0E4Qi9CO0lBQUQsMEJBQUM7Q0FBQSxBQTlCRCxJQThCQztTQTlCWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDaGVja291dENvc3RDZW50ZXJTZXJ2aWNlLFxuICBDb3N0Q2VudGVyLFxuICBQYXltZW50VHlwZVNlcnZpY2UsXG4gIFVzZXJDb3N0Q2VudGVyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jb3N0LWNlbnRlcicsXG4gIHRlbXBsYXRlVXJsOiAnY29zdC1jZW50ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ29zdENlbnRlckNvbXBvbmVudCB7XG4gIHByb3RlY3RlZCBjb3N0Q2VudGVySWQ6IHN0cmluZztcblxuICBjYXJ0Q29zdENlbnRlciQ6IE9ic2VydmFibGU8XG4gICAgc3RyaW5nXG4gID4gPSB0aGlzLmNoZWNrb3V0Q29zdENlbnRlclNlcnZpY2UuZ2V0Q29zdENlbnRlcigpO1xuXG4gIGlzQWNjb3VudFBheW1lbnQkID0gdGhpcy5wYXltZW50VHlwZVNlcnZpY2UuaXNBY2NvdW50UGF5bWVudCgpO1xuXG4gIGNvc3RDZW50ZXJzJDogT2JzZXJ2YWJsZTxcbiAgICBDb3N0Q2VudGVyW11cbiAgPiA9IHRoaXMudXNlckNvc3RDZW50ZXJTZXJ2aWNlLmdldEFjdGl2ZUNvc3RDZW50ZXJzKCkucGlwZShcbiAgICBmaWx0ZXIoKGNvc3RDZW50ZXJzOiBDb3N0Q2VudGVyW10pID0+IEJvb2xlYW4oY29zdENlbnRlcnMpKSxcbiAgICB0YXAoKGNvc3RDZW50ZXJzOiBDb3N0Q2VudGVyW10pID0+IHtcbiAgICAgIGlmICghQm9vbGVhbih0aGlzLmNvc3RDZW50ZXJJZCkpIHtcbiAgICAgICAgdGhpcy5zZXRDb3N0Q2VudGVyKGNvc3RDZW50ZXJzWzBdLmNvZGUpO1xuICAgICAgfVxuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHVzZXJDb3N0Q2VudGVyU2VydmljZTogVXNlckNvc3RDZW50ZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dENvc3RDZW50ZXJTZXJ2aWNlOiBDaGVja291dENvc3RDZW50ZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBwYXltZW50VHlwZVNlcnZpY2U6IFBheW1lbnRUeXBlU2VydmljZVxuICApIHt9XG5cbiAgc2V0Q29zdENlbnRlcihzZWxlY3RDb3N0Q2VudGVyOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNvc3RDZW50ZXJJZCA9IHNlbGVjdENvc3RDZW50ZXI7XG4gICAgdGhpcy5jaGVja291dENvc3RDZW50ZXJTZXJ2aWNlLnNldENvc3RDZW50ZXIodGhpcy5jb3N0Q2VudGVySWQpO1xuICB9XG59XG4iXX0=