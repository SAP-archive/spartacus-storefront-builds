import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { OrderAmendService } from '../../amend-order.service';
let ReturnOrderConfirmationComponent = class ReturnOrderConfirmationComponent {
    constructor(orderAmendService) {
        this.orderAmendService = orderAmendService;
        this.form$ = this.orderAmendService
            .getForm()
            .pipe(tap(form => (this.orderCode = form.value.orderCode)));
        this.entries$ = this.orderAmendService.getAmendedEntries();
    }
    submit(form) {
        form.disable();
        this.orderAmendService.save();
    }
};
ReturnOrderConfirmationComponent.ctorParameters = () => [
    { type: OrderAmendService }
];
ReturnOrderConfirmationComponent = __decorate([
    Component({
        selector: 'cx-return-order-confirmation',
        template: "<form\n  *ngIf=\"form$ | async as form\"\n  [formGroup]=\"form\"\n  (ngSubmit)=\"submit(form)\"\n>\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <cx-amend-order-items\n    *ngIf=\"entries$ | async as entries\"\n    [entries]=\"entries\"\n    [isConfirmation]=\"true\"\n  >\n  </cx-amend-order-items>\n\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <ng-template #actions>\n    <cx-amend-order-actions\n      *ngIf=\"orderCode\"\n      [orderCode]=\"orderCode\"\n      [isValid]=\"form.valid\"\n      backRoute=\"orderReturn\"\n    ></cx-amend-order-actions>\n  </ng-template>\n</form>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ReturnOrderConfirmationComponent);
export { ReturnOrderConfirmationComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLW9yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvYW1lbmQtb3JkZXIvcmV0dXJucy9yZXR1cm4tb3JkZXItY29uZmlybWF0aW9uL3JldHVybi1vcmRlci1jb25maXJtYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSW5FLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQU85RCxJQUFhLGdDQUFnQyxHQUE3QyxNQUFhLGdDQUFnQztJQVczQyxZQUFzQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVIxRCxVQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQjthQUMzQixPQUFPLEVBQUU7YUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTlELGFBQVEsR0FFSixJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUVjLENBQUM7SUFFOUQsTUFBTSxDQUFDLElBQWU7UUFDcEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7Q0FDRixDQUFBOztZQU4wQyxpQkFBaUI7O0FBWC9DLGdDQUFnQztJQUw1QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsOEJBQThCO1FBQ3hDLGlvQkFBeUQ7UUFDekQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLGdDQUFnQyxDQWlCNUM7U0FqQlksZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPcmRlckFtZW5kU2VydmljZSB9IGZyb20gJy4uLy4uL2FtZW5kLW9yZGVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1yZXR1cm4tb3JkZXItY29uZmlybWF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JldHVybi1vcmRlci1jb25maXJtYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUmV0dXJuT3JkZXJDb25maXJtYXRpb25Db21wb25lbnQge1xuICBvcmRlckNvZGU6IHN0cmluZztcblxuICBmb3JtJCA9IHRoaXMub3JkZXJBbWVuZFNlcnZpY2VcbiAgICAuZ2V0Rm9ybSgpXG4gICAgLnBpcGUodGFwKGZvcm0gPT4gKHRoaXMub3JkZXJDb2RlID0gZm9ybS52YWx1ZS5vcmRlckNvZGUpKSk7XG5cbiAgZW50cmllcyQ6IE9ic2VydmFibGU8XG4gICAgT3JkZXJFbnRyeVtdXG4gID4gPSB0aGlzLm9yZGVyQW1lbmRTZXJ2aWNlLmdldEFtZW5kZWRFbnRyaWVzKCk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG9yZGVyQW1lbmRTZXJ2aWNlOiBPcmRlckFtZW5kU2VydmljZSkge31cblxuICBzdWJtaXQoZm9ybTogRm9ybUdyb3VwKTogdm9pZCB7XG4gICAgZm9ybS5kaXNhYmxlKCk7XG4gICAgdGhpcy5vcmRlckFtZW5kU2VydmljZS5zYXZlKCk7XG4gIH1cbn1cbiJdfQ==