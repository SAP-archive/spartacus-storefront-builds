import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { OrderAmendService } from '../../amend-order.service';
var ReturnOrderConfirmationComponent = /** @class */ (function () {
    function ReturnOrderConfirmationComponent(orderAmendService) {
        var _this = this;
        this.orderAmendService = orderAmendService;
        this.form$ = this.orderAmendService
            .getForm()
            .pipe(tap(function (form) { return (_this.orderCode = form.value.orderCode); }));
        this.entries$ = this.orderAmendService.getAmendedEntries();
    }
    ReturnOrderConfirmationComponent.prototype.submit = function (form) {
        form.disable();
        this.orderAmendService.save();
    };
    ReturnOrderConfirmationComponent.ctorParameters = function () { return [
        { type: OrderAmendService }
    ]; };
    ReturnOrderConfirmationComponent = __decorate([
        Component({
            selector: 'cx-return-order-confirmation',
            template: "<form\n  *ngIf=\"form$ | async as form\"\n  [formGroup]=\"form\"\n  (ngSubmit)=\"submit(form)\"\n>\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <cx-amend-order-items\n    *ngIf=\"entries$ | async as entries\"\n    [entries]=\"entries\"\n    [isConfirmation]=\"true\"\n  >\n  </cx-amend-order-items>\n\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <ng-template #actions>\n    <cx-amend-order-actions\n      *ngIf=\"orderCode\"\n      [orderCode]=\"orderCode\"\n      [isValid]=\"form.valid\"\n      backRoute=\"orderReturn\"\n    ></cx-amend-order-actions>\n  </ng-template>\n</form>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ReturnOrderConfirmationComponent);
    return ReturnOrderConfirmationComponent;
}());
export { ReturnOrderConfirmationComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLW9yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvYW1lbmQtb3JkZXIvcmV0dXJucy9yZXR1cm4tb3JkZXItY29uZmlybWF0aW9uL3JldHVybi1vcmRlci1jb25maXJtYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSW5FLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQU85RDtJQVdFLDBDQUFzQixpQkFBb0M7UUFBMUQsaUJBQThEO1FBQXhDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFSMUQsVUFBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUI7YUFDM0IsT0FBTyxFQUFFO2FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUF2QyxDQUF1QyxDQUFDLENBQUMsQ0FBQztRQUU5RCxhQUFRLEdBRUosSUFBSSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFFYyxDQUFDO0lBRTlELGlEQUFNLEdBQU4sVUFBTyxJQUFlO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQyxDQUFDOztnQkFMd0MsaUJBQWlCOztJQVgvQyxnQ0FBZ0M7UUFMNUMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDhCQUE4QjtZQUN4Qyxpb0JBQXlEO1lBQ3pELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyxnQ0FBZ0MsQ0FpQjVDO0lBQUQsdUNBQUM7Q0FBQSxBQWpCRCxJQWlCQztTQWpCWSxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPcmRlckVudHJ5IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yZGVyQW1lbmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYW1lbmQtb3JkZXIuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXJldHVybi1vcmRlci1jb25maXJtYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcmV0dXJuLW9yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBSZXR1cm5PcmRlckNvbmZpcm1hdGlvbkNvbXBvbmVudCB7XG4gIG9yZGVyQ29kZTogc3RyaW5nO1xuXG4gIGZvcm0kID0gdGhpcy5vcmRlckFtZW5kU2VydmljZVxuICAgIC5nZXRGb3JtKClcbiAgICAucGlwZSh0YXAoZm9ybSA9PiAodGhpcy5vcmRlckNvZGUgPSBmb3JtLnZhbHVlLm9yZGVyQ29kZSkpKTtcblxuICBlbnRyaWVzJDogT2JzZXJ2YWJsZTxcbiAgICBPcmRlckVudHJ5W11cbiAgPiA9IHRoaXMub3JkZXJBbWVuZFNlcnZpY2UuZ2V0QW1lbmRlZEVudHJpZXMoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgb3JkZXJBbWVuZFNlcnZpY2U6IE9yZGVyQW1lbmRTZXJ2aWNlKSB7fVxuXG4gIHN1Ym1pdChmb3JtOiBGb3JtR3JvdXApOiB2b2lkIHtcbiAgICBmb3JtLmRpc2FibGUoKTtcbiAgICB0aGlzLm9yZGVyQW1lbmRTZXJ2aWNlLnNhdmUoKTtcbiAgfVxufVxuIl19