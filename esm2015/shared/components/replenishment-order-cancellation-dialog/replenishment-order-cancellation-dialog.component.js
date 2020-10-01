import { Component, ElementRef, HostListener, } from '@angular/core';
import { GlobalMessageService, GlobalMessageType, UserReplenishmentOrderService, } from '@spartacus/core';
import { combineLatest, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { LaunchDialogService } from '../../../layout/launch-dialog/services/launch-dialog.service';
export class ReplenishmentOrderCancellationDialogComponent {
    constructor(userReplenishmentOrderService, globalMessageService, launchDialogService, el) {
        this.userReplenishmentOrderService = userReplenishmentOrderService;
        this.globalMessageService = globalMessageService;
        this.launchDialogService = launchDialogService;
        this.el = el;
        this.subscription = new Subscription();
        this.focusConfig = {
            trap: true,
            block: true,
            autofocus: 'button',
            focusOnEscape: true,
        };
    }
    handleClick(event) {
        // Close on click outside the dialog window
        if (event.target.tagName === this.el.nativeElement.tagName) {
            this.close('Cross click');
        }
    }
    ngOnInit() {
        this.subscription.add(combineLatest([
            this.userReplenishmentOrderService
                .getReplenishmentOrderDetails()
                .pipe(startWith(null)),
            this.launchDialogService.data$,
        ]).subscribe(([replenishmentOrder, code]) => {
            this.replenishmentOrderCode =
                code || replenishmentOrder.replenishmentOrderCode;
        }));
        this.subscription.add(this.userReplenishmentOrderService
            .getCancelReplenishmentOrderSuccess()
            .subscribe((value) => this.onSuccess(value)));
    }
    onSuccess(value) {
        if (value) {
            this.launchDialogService.closeDialog('Successffully cancelled replenishment');
            this.globalMessageService.add({
                key: 'orderDetails.cancelReplenishment.cancelSuccess',
                params: {
                    replenishmentOrderCode: this.replenishmentOrderCode,
                },
            }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        }
        this.userReplenishmentOrderService.clearCancelReplenishmentOrderProcessState();
    }
    close(reason) {
        this.launchDialogService.closeDialog(reason);
    }
    cancelReplenishment() {
        this.userReplenishmentOrderService.cancelReplenishmentOrder(this.replenishmentOrderCode);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
ReplenishmentOrderCancellationDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-replenishment-order-cancellation-dialog',
                template: "<div\n  [cxFocus]=\"focusConfig\"\n  (esc)=\"close('Escape clicked')\"\n  class=\"cx-cancel-replenishment-dialog-foreground\"\n>\n  <div class=\"cx-cancel-replenishment-dialog-content\">\n    <div class=\"cx-cancel-replenishment-dialog-header\">\n      <h3>\n        {{ 'orderDetails.cancelReplenishment.title' | cxTranslate }}\n      </h3>\n    </div>\n    <div class=\"cx-cancel-replenishment-dialog-description\">\n      {{ 'orderDetails.cancelReplenishment.description' | cxTranslate }}\n    </div>\n\n    <div class=\"cx-cancel-replenishment-dialog-body\">\n      <div class=\"cx-cancel-replenishment-btns row\">\n        <div class=\"col-md-6\">\n          <button\n            class=\"btn btn-block btn-action\"\n            (click)=\"close('Close Replenishment Dialog')\"\n          >\n            {{ 'orderDetails.cancelReplenishment.reject' | cxTranslate }}\n          </button>\n        </div>\n        <div class=\"col-md-6\">\n          <button\n            class=\"btn btn-block btn-primary\"\n            (click)=\"cancelReplenishment()\"\n          >\n            {{ 'orderDetails.cancelReplenishment.accept' | cxTranslate }}\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"
            },] }
];
ReplenishmentOrderCancellationDialogComponent.ctorParameters = () => [
    { type: UserReplenishmentOrderService },
    { type: GlobalMessageService },
    { type: LaunchDialogService },
    { type: ElementRef }
];
ReplenishmentOrderCancellationDialogComponent.propDecorators = {
    handleClick: [{ type: HostListener, args: ['click', ['$event'],] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGVuaXNobWVudC1vcmRlci1jYW5jZWxsYXRpb24tZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL3NoYXJlZC9jb21wb25lbnRzL3JlcGxlbmlzaG1lbnQtb3JkZXItY2FuY2VsbGF0aW9uLWRpYWxvZy9yZXBsZW5pc2htZW50LW9yZGVyLWNhbmNlbGxhdGlvbi1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksR0FHYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQiw2QkFBNkIsR0FDOUIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOERBQThELENBQUM7QUFNbkcsTUFBTSxPQUFPLDZDQUE2QztJQXFCeEQsWUFDWSw2QkFBNEQsRUFDNUQsb0JBQTBDLEVBQzFDLG1CQUF3QyxFQUN4QyxFQUFjO1FBSGQsa0NBQTZCLEdBQTdCLDZCQUE2QixDQUErQjtRQUM1RCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQXZCbEIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBSTFDLGdCQUFXLEdBQWdCO1lBQ3pCLElBQUksRUFBRSxJQUFJO1lBQ1YsS0FBSyxFQUFFLElBQUk7WUFDWCxTQUFTLEVBQUUsUUFBUTtZQUNuQixhQUFhLEVBQUUsSUFBSTtTQUNwQixDQUFDO0lBZUMsQ0FBQztJQVpKLFdBQVcsQ0FBQyxLQUFjO1FBQ3hCLDJDQUEyQztRQUMzQyxJQUFLLEtBQUssQ0FBQyxNQUFjLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRTtZQUNuRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQVNELFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsYUFBYSxDQUFDO1lBQ1osSUFBSSxDQUFDLDZCQUE2QjtpQkFDL0IsNEJBQTRCLEVBQUU7aUJBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUs7U0FDL0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUMxQyxJQUFJLENBQUMsc0JBQXNCO2dCQUN6QixJQUFJLElBQUksa0JBQWtCLENBQUMsc0JBQXNCLENBQUM7UUFDdEQsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUVGLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsNkJBQTZCO2FBQy9CLGtDQUFrQyxFQUFFO2FBQ3BDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUMvQyxDQUFDO0lBQ0osQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFjO1FBQ3RCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FDbEMsdUNBQXVDLENBQ3hDLENBQUM7WUFFRixJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQjtnQkFDRSxHQUFHLEVBQUUsZ0RBQWdEO2dCQUNyRCxNQUFNLEVBQUU7b0JBQ04sc0JBQXNCLEVBQUUsSUFBSSxDQUFDLHNCQUFzQjtpQkFDcEQ7YUFDRixFQUNELGlCQUFpQixDQUFDLHFCQUFxQixDQUN4QyxDQUFDO1NBQ0g7UUFDRCxJQUFJLENBQUMsNkJBQTZCLENBQUMseUNBQXlDLEVBQUUsQ0FBQztJQUNqRixDQUFDO0lBRUQsS0FBSyxDQUFDLE1BQWM7UUFDbEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyx3QkFBd0IsQ0FDekQsSUFBSSxDQUFDLHNCQUFzQixDQUM1QixDQUFDO0lBQ0osQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7OztZQW5GRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRDQUE0QztnQkFDdEQsb3RDQUF1RTthQUN4RTs7O1lBVkMsNkJBQTZCO1lBRjdCLG9CQUFvQjtZQU9iLG1CQUFtQjtZQWIxQixVQUFVOzs7MEJBZ0NULFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBVc2VyUmVwbGVuaXNobWVudE9yZGVyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRm9jdXNDb25maWcgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9rZXlib2FyZC1mb2N1cy5tb2RlbCc7XG5pbXBvcnQgeyBMYXVuY2hEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbGF5b3V0L2xhdW5jaC1kaWFsb2cvc2VydmljZXMvbGF1bmNoLWRpYWxvZy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcmVwbGVuaXNobWVudC1vcmRlci1jYW5jZWxsYXRpb24tZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JlcGxlbmlzaG1lbnQtb3JkZXItY2FuY2VsbGF0aW9uLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFJlcGxlbmlzaG1lbnRPcmRlckNhbmNlbGxhdGlvbkRpYWxvZ0NvbXBvbmVudFxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgcmVwbGVuaXNobWVudE9yZGVyQ29kZTogc3RyaW5nO1xuXG4gIGZvY3VzQ29uZmlnOiBGb2N1c0NvbmZpZyA9IHtcbiAgICB0cmFwOiB0cnVlLFxuICAgIGJsb2NrOiB0cnVlLFxuICAgIGF1dG9mb2N1czogJ2J1dHRvbicsXG4gICAgZm9jdXNPbkVzY2FwZTogdHJ1ZSxcbiAgfTtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXG4gIGhhbmRsZUNsaWNrKGV2ZW50OiBVSUV2ZW50KTogdm9pZCB7XG4gICAgLy8gQ2xvc2Ugb24gY2xpY2sgb3V0c2lkZSB0aGUgZGlhbG9nIHdpbmRvd1xuICAgIGlmICgoZXZlbnQudGFyZ2V0IGFzIGFueSkudGFnTmFtZSA9PT0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnRhZ05hbWUpIHtcbiAgICAgIHRoaXMuY2xvc2UoJ0Nyb3NzIGNsaWNrJyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHVzZXJSZXBsZW5pc2htZW50T3JkZXJTZXJ2aWNlOiBVc2VyUmVwbGVuaXNobWVudE9yZGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBsYXVuY2hEaWFsb2dTZXJ2aWNlOiBMYXVuY2hEaWFsb2dTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBlbDogRWxlbWVudFJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgY29tYmluZUxhdGVzdChbXG4gICAgICAgIHRoaXMudXNlclJlcGxlbmlzaG1lbnRPcmRlclNlcnZpY2VcbiAgICAgICAgICAuZ2V0UmVwbGVuaXNobWVudE9yZGVyRGV0YWlscygpXG4gICAgICAgICAgLnBpcGUoc3RhcnRXaXRoKG51bGwpKSxcbiAgICAgICAgdGhpcy5sYXVuY2hEaWFsb2dTZXJ2aWNlLmRhdGEkLFxuICAgICAgXSkuc3Vic2NyaWJlKChbcmVwbGVuaXNobWVudE9yZGVyLCBjb2RlXSkgPT4ge1xuICAgICAgICB0aGlzLnJlcGxlbmlzaG1lbnRPcmRlckNvZGUgPVxuICAgICAgICAgIGNvZGUgfHwgcmVwbGVuaXNobWVudE9yZGVyLnJlcGxlbmlzaG1lbnRPcmRlckNvZGU7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnVzZXJSZXBsZW5pc2htZW50T3JkZXJTZXJ2aWNlXG4gICAgICAgIC5nZXRDYW5jZWxSZXBsZW5pc2htZW50T3JkZXJTdWNjZXNzKClcbiAgICAgICAgLnN1YnNjcmliZSgodmFsdWUpID0+IHRoaXMub25TdWNjZXNzKHZhbHVlKSlcbiAgICApO1xuICB9XG5cbiAgb25TdWNjZXNzKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmxhdW5jaERpYWxvZ1NlcnZpY2UuY2xvc2VEaWFsb2coXG4gICAgICAgICdTdWNjZXNzZmZ1bGx5IGNhbmNlbGxlZCByZXBsZW5pc2htZW50J1xuICAgICAgKTtcblxuICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6ICdvcmRlckRldGFpbHMuY2FuY2VsUmVwbGVuaXNobWVudC5jYW5jZWxTdWNjZXNzJyxcbiAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHJlcGxlbmlzaG1lbnRPcmRlckNvZGU6IHRoaXMucmVwbGVuaXNobWVudE9yZGVyQ29kZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICAgICk7XG4gICAgfVxuICAgIHRoaXMudXNlclJlcGxlbmlzaG1lbnRPcmRlclNlcnZpY2UuY2xlYXJDYW5jZWxSZXBsZW5pc2htZW50T3JkZXJQcm9jZXNzU3RhdGUoKTtcbiAgfVxuXG4gIGNsb3NlKHJlYXNvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5sYXVuY2hEaWFsb2dTZXJ2aWNlLmNsb3NlRGlhbG9nKHJlYXNvbik7XG4gIH1cblxuICBjYW5jZWxSZXBsZW5pc2htZW50KCk6IHZvaWQge1xuICAgIHRoaXMudXNlclJlcGxlbmlzaG1lbnRPcmRlclNlcnZpY2UuY2FuY2VsUmVwbGVuaXNobWVudE9yZGVyKFxuICAgICAgdGhpcy5yZXBsZW5pc2htZW50T3JkZXJDb2RlXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==