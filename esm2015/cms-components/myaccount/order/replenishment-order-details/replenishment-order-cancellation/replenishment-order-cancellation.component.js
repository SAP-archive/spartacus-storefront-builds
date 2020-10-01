import { Component, ViewChild, ViewContainerRef, } from '@angular/core';
import { UserReplenishmentOrderService, } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { ReplenishmentOrderCancellationLaunchDialogService } from './replenishment-order-cancellation-launch-dialog.service';
export class ReplenishmentOrderCancellationComponent {
    constructor(userReplenishmentOrderService, replenishmentOrderCancellationLaunchDialogService, vcr) {
        this.userReplenishmentOrderService = userReplenishmentOrderService;
        this.replenishmentOrderCancellationLaunchDialogService = replenishmentOrderCancellationLaunchDialogService;
        this.vcr = vcr;
        this.subscription = new Subscription();
        this.replenishmentOrder$ = this.userReplenishmentOrderService.getReplenishmentOrderDetails();
    }
    openDialog() {
        const dialog = this.replenishmentOrderCancellationLaunchDialogService.openDialog(this.element, this.vcr);
        if (dialog) {
            this.subscription.add(dialog.pipe(take(1)).subscribe());
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.userReplenishmentOrderService.clearReplenishmentOrderDetails();
    }
}
ReplenishmentOrderCancellationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-replenishment-order-cancellation',
                template: "<div class=\"cx-cancel-replenishment-btns row\">\n  <div class=\"col-xs-12 col-md-5 col-lg-4\">\n    <a\n      class=\"btn btn-block btn-action\"\n      [routerLink]=\"\n        {\n          cxRoute: 'replenishmentOrders'\n        } | cxUrl\n      \"\n    >\n      {{ 'common.back' | cxTranslate }}\n    </a>\n  </div>\n  <div\n    *ngIf=\"(replenishmentOrder$ | async).active\"\n    class=\"col-xs-12 col-md-5 col-lg-4\"\n  >\n    <button #element class=\"btn btn-block btn-action\" (click)=\"openDialog()\">\n      {{ 'orderDetails.cancelReplenishment.title' | cxTranslate }}\n    </button>\n  </div>\n</div>\n"
            },] }
];
ReplenishmentOrderCancellationComponent.ctorParameters = () => [
    { type: UserReplenishmentOrderService },
    { type: ReplenishmentOrderCancellationLaunchDialogService },
    { type: ViewContainerRef }
];
ReplenishmentOrderCancellationComponent.propDecorators = {
    element: [{ type: ViewChild, args: ['element',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGVuaXNobWVudC1vcmRlci1jYW5jZWxsYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL3JlcGxlbmlzaG1lbnQtb3JkZXItZGV0YWlscy9yZXBsZW5pc2htZW50LW9yZGVyLWNhbmNlbGxhdGlvbi9yZXBsZW5pc2htZW50LW9yZGVyLWNhbmNlbGxhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFHVCxTQUFTLEVBQ1QsZ0JBQWdCLEdBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFFTCw2QkFBNkIsR0FDOUIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN0QyxPQUFPLEVBQUUsaURBQWlELEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQU03SCxNQUFNLE9BQU8sdUNBQXVDO0lBU2xELFlBQ1ksNkJBQTRELEVBQzVELGlEQUFvRyxFQUNwRyxHQUFxQjtRQUZyQixrQ0FBNkIsR0FBN0IsNkJBQTZCLENBQStCO1FBQzVELHNEQUFpRCxHQUFqRCxpREFBaUQsQ0FBbUQ7UUFDcEcsUUFBRyxHQUFILEdBQUcsQ0FBa0I7UUFUekIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTFDLHdCQUFtQixHQUVmLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO0lBTW5FLENBQUM7SUFFSixVQUFVO1FBQ1IsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGlEQUFpRCxDQUFDLFVBQVUsQ0FDOUUsSUFBSSxDQUFDLE9BQU8sRUFDWixJQUFJLENBQUMsR0FBRyxDQUNULENBQUM7UUFFRixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztTQUN6RDtJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNoQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsOEJBQThCLEVBQUUsQ0FBQztJQUN0RSxDQUFDOzs7WUFqQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQ0FBcUM7Z0JBQy9DLGduQkFBZ0U7YUFDakU7OztZQVRDLDZCQUE2QjtZQUl0QixpREFBaUQ7WUFSeEQsZ0JBQWdCOzs7c0JBZWYsU0FBUyxTQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIE9uRGVzdHJveSxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFJlcGxlbmlzaG1lbnRPcmRlcixcbiAgVXNlclJlcGxlbmlzaG1lbnRPcmRlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSZXBsZW5pc2htZW50T3JkZXJDYW5jZWxsYXRpb25MYXVuY2hEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi9yZXBsZW5pc2htZW50LW9yZGVyLWNhbmNlbGxhdGlvbi1sYXVuY2gtZGlhbG9nLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1yZXBsZW5pc2htZW50LW9yZGVyLWNhbmNlbGxhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXBsZW5pc2htZW50LW9yZGVyLWNhbmNlbGxhdGlvbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFJlcGxlbmlzaG1lbnRPcmRlckNhbmNlbGxhdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoJ2VsZW1lbnQnKSBlbGVtZW50OiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIHJlcGxlbmlzaG1lbnRPcmRlciQ6IE9ic2VydmFibGU8XG4gICAgUmVwbGVuaXNobWVudE9yZGVyXG4gID4gPSB0aGlzLnVzZXJSZXBsZW5pc2htZW50T3JkZXJTZXJ2aWNlLmdldFJlcGxlbmlzaG1lbnRPcmRlckRldGFpbHMoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdXNlclJlcGxlbmlzaG1lbnRPcmRlclNlcnZpY2U6IFVzZXJSZXBsZW5pc2htZW50T3JkZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByZXBsZW5pc2htZW50T3JkZXJDYW5jZWxsYXRpb25MYXVuY2hEaWFsb2dTZXJ2aWNlOiBSZXBsZW5pc2htZW50T3JkZXJDYW5jZWxsYXRpb25MYXVuY2hEaWFsb2dTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB2Y3I6IFZpZXdDb250YWluZXJSZWZcbiAgKSB7fVxuXG4gIG9wZW5EaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nID0gdGhpcy5yZXBsZW5pc2htZW50T3JkZXJDYW5jZWxsYXRpb25MYXVuY2hEaWFsb2dTZXJ2aWNlLm9wZW5EaWFsb2coXG4gICAgICB0aGlzLmVsZW1lbnQsXG4gICAgICB0aGlzLnZjclxuICAgICk7XG5cbiAgICBpZiAoZGlhbG9nKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoZGlhbG9nLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKCkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy51c2VyUmVwbGVuaXNobWVudE9yZGVyU2VydmljZS5jbGVhclJlcGxlbmlzaG1lbnRPcmRlckRldGFpbHMoKTtcbiAgfVxufVxuIl19