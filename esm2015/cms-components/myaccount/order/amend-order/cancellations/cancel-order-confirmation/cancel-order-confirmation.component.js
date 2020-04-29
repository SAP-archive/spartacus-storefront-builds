import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { OrderAmendService } from '../../amend-order.service';
let CancelOrderConfirmationComponent = class CancelOrderConfirmationComponent {
    constructor(orderAmendService) {
        this.orderAmendService = orderAmendService;
        this.form$ = this.orderAmendService
            .getForm()
            .pipe(tap((form) => (this.orderCode = form.value.orderCode)));
        this.entries$ = this.orderAmendService.getAmendedEntries();
    }
    submit(form) {
        if (form.valid) {
            this.orderAmendService.save();
        }
        else {
            form.markAllAsTouched();
        }
    }
};
CancelOrderConfirmationComponent.ctorParameters = () => [
    { type: OrderAmendService }
];
CancelOrderConfirmationComponent = __decorate([
    Component({
        selector: 'cx-cancel-order-confirmation',
        template: "<form\n  *ngIf=\"form$ | async as form\"\n  [formGroup]=\"form\"\n  (ngSubmit)=\"submit(form)\"\n>\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <cx-amend-order-items\n    *ngIf=\"entries$ | async as entries\"\n    [entries]=\"entries\"\n    [isConfirmation]=\"true\"\n  >\n  </cx-amend-order-items>\n\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <ng-template #actions>\n    <cx-amend-order-actions\n      *ngIf=\"orderCode\"\n      [orderCode]=\"orderCode\"\n      [amendOrderForm]=\"form\"\n      backRoute=\"orderCancel\"\n    ></cx-amend-order-actions>\n  </ng-template>\n</form>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], CancelOrderConfirmationComponent);
export { CancelOrderConfirmationComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsLW9yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvYW1lbmQtb3JkZXIvY2FuY2VsbGF0aW9ucy9jYW5jZWwtb3JkZXItY29uZmlybWF0aW9uL2NhbmNlbC1vcmRlci1jb25maXJtYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSW5FLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQU85RCxJQUFhLGdDQUFnQyxHQUE3QyxNQUFhLGdDQUFnQztJQVczQyxZQUFzQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQVIxRCxVQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQjthQUMzQixPQUFPLEVBQUU7YUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFaEUsYUFBUSxHQUVKLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBRWMsQ0FBQztJQUU5RCxNQUFNLENBQUMsSUFBZTtRQUNwQixJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDL0I7YUFBTTtZQUNMLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBVDBDLGlCQUFpQjs7QUFYL0MsZ0NBQWdDO0lBTDVDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSw4QkFBOEI7UUFDeEMsa29CQUF5RDtRQUN6RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO0dBQ1csZ0NBQWdDLENBb0I1QztTQXBCWSxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPcmRlckVudHJ5IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yZGVyQW1lbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYW1lbmQtb3JkZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhbmNlbC1vcmRlci1jb25maXJtYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FuY2VsLW9yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDYW5jZWxPcmRlckNvbmZpcm1hdGlvbkNvbXBvbmVudCB7XG4gIG9yZGVyQ29kZTogc3RyaW5nO1xuXG4gIGZvcm0kID0gdGhpcy5vcmRlckFtZW5kU2VydmljZVxuICAgIC5nZXRGb3JtKClcbiAgICAucGlwZSh0YXAoKGZvcm0pID0+ICh0aGlzLm9yZGVyQ29kZSA9IGZvcm0udmFsdWUub3JkZXJDb2RlKSkpO1xuXG4gIGVudHJpZXMkOiBPYnNlcnZhYmxlPFxuICAgIE9yZGVyRW50cnlbXVxuICA+ID0gdGhpcy5vcmRlckFtZW5kU2VydmljZS5nZXRBbWVuZGVkRW50cmllcygpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBvcmRlckFtZW5kU2VydmljZTogT3JkZXJBbWVuZFNlcnZpY2UpIHt9XG5cbiAgc3VibWl0KGZvcm06IEZvcm1Hcm91cCkge1xuICAgIGlmIChmb3JtLnZhbGlkKSB7XG4gICAgICB0aGlzLm9yZGVyQW1lbmRTZXJ2aWNlLnNhdmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9ybS5tYXJrQWxsQXNUb3VjaGVkKCk7XG4gICAgfVxuICB9XG59XG4iXX0=