import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { OrderAmendService } from '../../amend-order.service';
var CancelOrderConfirmationComponent = /** @class */ (function () {
    function CancelOrderConfirmationComponent(orderAmendService) {
        var _this = this;
        this.orderAmendService = orderAmendService;
        this.form$ = this.orderAmendService
            .getForm()
            .pipe(tap(function (form) { return (_this.orderCode = form.value.orderCode); }));
        this.entries$ = this.orderAmendService.getAmendedEntries();
    }
    CancelOrderConfirmationComponent.prototype.submit = function (form) {
        form.disable();
        this.orderAmendService.save();
    };
    CancelOrderConfirmationComponent.ctorParameters = function () { return [
        { type: OrderAmendService }
    ]; };
    CancelOrderConfirmationComponent = __decorate([
        Component({
            selector: 'cx-cancel-order-confirmation',
            template: "<form\n  *ngIf=\"form$ | async as form\"\n  [formGroup]=\"form\"\n  (ngSubmit)=\"submit(form)\"\n>\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <cx-amend-order-items\n    *ngIf=\"entries$ | async as entries\"\n    [entries]=\"entries\"\n    [isConfirmation]=\"true\"\n  >\n  </cx-amend-order-items>\n\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <ng-template #actions>\n    <cx-amend-order-actions\n      *ngIf=\"orderCode\"\n      [orderCode]=\"orderCode\"\n      [isValid]=\"form.valid\"\n      backRoute=\"orderCancel\"\n    ></cx-amend-order-actions>\n  </ng-template>\n</form>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], CancelOrderConfirmationComponent);
    return CancelOrderConfirmationComponent;
}());
export { CancelOrderConfirmationComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsLW9yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvYW1lbmQtb3JkZXIvY2FuY2VsbGF0aW9ucy9jYW5jZWwtb3JkZXItY29uZmlybWF0aW9uL2NhbmNlbC1vcmRlci1jb25maXJtYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSW5FLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQU85RDtJQVdFLDBDQUFzQixpQkFBb0M7UUFBMUQsaUJBQThEO1FBQXhDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFSMUQsVUFBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUI7YUFDM0IsT0FBTyxFQUFFO2FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLENBQUMsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUF2QyxDQUF1QyxDQUFDLENBQUMsQ0FBQztRQUVoRSxhQUFRLEdBRUosSUFBSSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFFYyxDQUFDO0lBRTlELGlEQUFNLEdBQU4sVUFBTyxJQUFlO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQyxDQUFDOztnQkFMd0MsaUJBQWlCOztJQVgvQyxnQ0FBZ0M7UUFMNUMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDhCQUE4QjtZQUN4Qyxpb0JBQXlEO1lBQ3pELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyxnQ0FBZ0MsQ0FpQjVDO0lBQUQsdUNBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQWpCWSxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPcmRlckVudHJ5IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yZGVyQW1lbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYW1lbmQtb3JkZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhbmNlbC1vcmRlci1jb25maXJtYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FuY2VsLW9yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDYW5jZWxPcmRlckNvbmZpcm1hdGlvbkNvbXBvbmVudCB7XG4gIG9yZGVyQ29kZTogc3RyaW5nO1xuXG4gIGZvcm0kID0gdGhpcy5vcmRlckFtZW5kU2VydmljZVxuICAgIC5nZXRGb3JtKClcbiAgICAucGlwZSh0YXAoKGZvcm0pID0+ICh0aGlzLm9yZGVyQ29kZSA9IGZvcm0udmFsdWUub3JkZXJDb2RlKSkpO1xuXG4gIGVudHJpZXMkOiBPYnNlcnZhYmxlPFxuICAgIE9yZGVyRW50cnlbXVxuICA+ID0gdGhpcy5vcmRlckFtZW5kU2VydmljZS5nZXRBbWVuZGVkRW50cmllcygpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBvcmRlckFtZW5kU2VydmljZTogT3JkZXJBbWVuZFNlcnZpY2UpIHt9XG5cbiAgc3VibWl0KGZvcm06IEZvcm1Hcm91cCk6IHZvaWQge1xuICAgIGZvcm0uZGlzYWJsZSgpO1xuICAgIHRoaXMub3JkZXJBbWVuZFNlcnZpY2Uuc2F2ZSgpO1xuICB9XG59XG4iXX0=