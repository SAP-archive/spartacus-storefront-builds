import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CheckoutCostCenterService, PaymentTypeService, UserCostCenterService, } from '@spartacus/core';
import { filter, map, tap, withLatestFrom } from 'rxjs/operators';
export class CostCenterComponent {
    constructor(userCostCenterService, checkoutCostCenterService, paymentTypeService) {
        this.userCostCenterService = userCostCenterService;
        this.checkoutCostCenterService = checkoutCostCenterService;
        this.paymentTypeService = paymentTypeService;
    }
    get isAccountPayment$() {
        return this.paymentTypeService.isAccountPayment();
    }
    get costCenters$() {
        return this.userCostCenterService.getActiveCostCenters().pipe(withLatestFrom(this.checkoutCostCenterService.getCostCenter()), filter(([costCenters]) => Boolean(costCenters)), tap(([costCenters, cartCostCenter]) => {
            if (!Boolean(cartCostCenter)) {
                this.setCostCenter(costCenters[0].code);
            }
            else {
                this.costCenterId = cartCostCenter;
            }
        }), map(([costCenters]) => costCenters));
    }
    setCostCenter(selectCostCenter) {
        this.costCenterId = selectCostCenter;
        this.checkoutCostCenterService.setCostCenter(this.costCenterId);
    }
}
CostCenterComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-cost-center',
                template: "<ng-container *ngIf=\"isAccountPayment$ | async\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-xl-10\">\n      <ng-container *ngIf=\"costCenters$ | async as costCenters\">\n        <div *ngIf=\"costCenters.length !== 0\">\n          <label>\n            <span class=\"label-content required\">{{\n              'checkoutPO.costCenter' | cxTranslate\n            }}</span>\n            <select (change)=\"setCostCenter($event.target.value)\">\n              <option\n                *ngFor=\"let costCenter of costCenters\"\n                value=\"{{ costCenter.code }}\"\n                [selected]=\"costCenterId === costCenter.code\"\n              >\n                {{ costCenter.name }}\n              </option>\n            </select>\n            <span class=\"label-content\">{{\n              'checkoutPO.availableLabel' | cxTranslate\n            }}</span>\n          </label>\n        </div>\n      </ng-container>\n    </div>\n  </div>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
CostCenterComponent.ctorParameters = () => [
    { type: UserCostCenterService },
    { type: CheckoutCostCenterService },
    { type: PaymentTypeService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zdC1jZW50ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9jb3N0LWNlbnRlci9jb3N0LWNlbnRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBQ0wseUJBQXlCLEVBRXpCLGtCQUFrQixFQUNsQixxQkFBcUIsR0FDdEIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPbEUsTUFBTSxPQUFPLG1CQUFtQjtJQUc5QixZQUNZLHFCQUE0QyxFQUM1Qyx5QkFBb0QsRUFDcEQsa0JBQXNDO1FBRnRDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUNwRCx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO0lBQy9DLENBQUM7SUFFSixJQUFJLGlCQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFFRCxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLElBQUksQ0FDM0QsY0FBYyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxFQUM5RCxNQUFNLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsRUFDL0MsR0FBRyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDLEVBQUUsRUFBRTtZQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN6QztpQkFBTTtnQkFDTCxJQUFJLENBQUMsWUFBWSxHQUFHLGNBQWMsQ0FBQzthQUNwQztRQUNILENBQUMsQ0FBQyxFQUNGLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUNwQyxDQUFDO0lBQ0osQ0FBQztJQUVELGFBQWEsQ0FBQyxnQkFBd0I7UUFDcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQztRQUNyQyxJQUFJLENBQUMseUJBQXlCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7WUFwQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLDY5QkFBeUM7Z0JBQ3pDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUFUQyxxQkFBcUI7WUFIckIseUJBQXlCO1lBRXpCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENoZWNrb3V0Q29zdENlbnRlclNlcnZpY2UsXG4gIENvc3RDZW50ZXIsXG4gIFBheW1lbnRUeXBlU2VydmljZSxcbiAgVXNlckNvc3RDZW50ZXJTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRhcCwgd2l0aExhdGVzdEZyb20gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNvc3QtY2VudGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdjb3N0LWNlbnRlci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDb3N0Q2VudGVyQ29tcG9uZW50IHtcbiAgY29zdENlbnRlcklkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHVzZXJDb3N0Q2VudGVyU2VydmljZTogVXNlckNvc3RDZW50ZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dENvc3RDZW50ZXJTZXJ2aWNlOiBDaGVja291dENvc3RDZW50ZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBwYXltZW50VHlwZVNlcnZpY2U6IFBheW1lbnRUeXBlU2VydmljZVxuICApIHt9XG5cbiAgZ2V0IGlzQWNjb3VudFBheW1lbnQkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnBheW1lbnRUeXBlU2VydmljZS5pc0FjY291bnRQYXltZW50KCk7XG4gIH1cblxuICBnZXQgY29zdENlbnRlcnMkKCk6IE9ic2VydmFibGU8Q29zdENlbnRlcltdPiB7XG4gICAgcmV0dXJuIHRoaXMudXNlckNvc3RDZW50ZXJTZXJ2aWNlLmdldEFjdGl2ZUNvc3RDZW50ZXJzKCkucGlwZShcbiAgICAgIHdpdGhMYXRlc3RGcm9tKHRoaXMuY2hlY2tvdXRDb3N0Q2VudGVyU2VydmljZS5nZXRDb3N0Q2VudGVyKCkpLFxuICAgICAgZmlsdGVyKChbY29zdENlbnRlcnNdKSA9PiBCb29sZWFuKGNvc3RDZW50ZXJzKSksXG4gICAgICB0YXAoKFtjb3N0Q2VudGVycywgY2FydENvc3RDZW50ZXJdKSA9PiB7XG4gICAgICAgIGlmICghQm9vbGVhbihjYXJ0Q29zdENlbnRlcikpIHtcbiAgICAgICAgICB0aGlzLnNldENvc3RDZW50ZXIoY29zdENlbnRlcnNbMF0uY29kZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jb3N0Q2VudGVySWQgPSBjYXJ0Q29zdENlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKFtjb3N0Q2VudGVyc10pID0+IGNvc3RDZW50ZXJzKVxuICAgICk7XG4gIH1cblxuICBzZXRDb3N0Q2VudGVyKHNlbGVjdENvc3RDZW50ZXI6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY29zdENlbnRlcklkID0gc2VsZWN0Q29zdENlbnRlcjtcbiAgICB0aGlzLmNoZWNrb3V0Q29zdENlbnRlclNlcnZpY2Uuc2V0Q29zdENlbnRlcih0aGlzLmNvc3RDZW50ZXJJZCk7XG4gIH1cbn1cbiJdfQ==