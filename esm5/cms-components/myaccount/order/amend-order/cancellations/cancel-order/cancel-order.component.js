import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { OrderAmendService } from '../../amend-order.service';
var CancelOrderComponent = /** @class */ (function () {
    function CancelOrderComponent(orderAmendService) {
        var _this = this;
        this.orderAmendService = orderAmendService;
        this.form$ = this.orderAmendService
            .getForm()
            .pipe(tap(function (form) { return (_this.orderCode = form.value.orderCode); }));
        this.entries$ = this.orderAmendService.getEntries();
    }
    CancelOrderComponent.ctorParameters = function () { return [
        { type: OrderAmendService }
    ]; };
    CancelOrderComponent = __decorate([
        Component({
            selector: 'cx-cancel-order',
            template: "<ng-container *ngIf=\"form$ | async as form\">\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <cx-amend-order-items *ngIf=\"entries$ | async as entries\" [entries]=\"entries\">\n  </cx-amend-order-items>\n\n  <cx-form-errors [control]=\"form.get('entries')\"></cx-form-errors>\n\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <ng-template #actions>\n    <cx-amend-order-actions\n      *ngIf=\"orderCode\"\n      [orderCode]=\"orderCode\"\n      [amendOrderForm]=\"form\"\n      backRoute=\"orderDetails\"\n      forwardRoute=\"orderCancelConfirmation\"\n    ></cx-amend-order-actions>\n  </ng-template>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], CancelOrderComponent);
    return CancelOrderComponent;
}());
export { CancelOrderComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsLW9yZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9hbWVuZC1vcmRlci9jYW5jZWxsYXRpb25zL2NhbmNlbC1vcmRlci9jYW5jZWwtb3JkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSW5FLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQU85RDtJQVNFLDhCQUFzQixpQkFBb0M7UUFBMUQsaUJBQThEO1FBQXhDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFOMUQsVUFBSyxHQUEwQixJQUFJLENBQUMsaUJBQWlCO2FBQ2xELE9BQU8sRUFBRTthQUNULElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxDQUFDLEtBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBdkMsQ0FBdUMsQ0FBQyxDQUFDLENBQUM7UUFFaEUsYUFBUSxHQUE2QixJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLENBQUM7SUFFWixDQUFDOztnQkFBckIsaUJBQWlCOztJQVQvQyxvQkFBb0I7UUFMaEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixtcUJBQTRDO1lBQzVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyxvQkFBb0IsQ0FVaEM7SUFBRCwyQkFBQztDQUFBLEFBVkQsSUFVQztTQVZZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9yZGVyRW50cnkgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT3JkZXJBbWVuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hbWVuZC1vcmRlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2FuY2VsLW9yZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbmNlbC1vcmRlci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDYW5jZWxPcmRlckNvbXBvbmVudCB7XG4gIG9yZGVyQ29kZTogc3RyaW5nO1xuXG4gIGZvcm0kOiBPYnNlcnZhYmxlPEZvcm1Hcm91cD4gPSB0aGlzLm9yZGVyQW1lbmRTZXJ2aWNlXG4gICAgLmdldEZvcm0oKVxuICAgIC5waXBlKHRhcCgoZm9ybSkgPT4gKHRoaXMub3JkZXJDb2RlID0gZm9ybS52YWx1ZS5vcmRlckNvZGUpKSk7XG5cbiAgZW50cmllcyQ6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPiA9IHRoaXMub3JkZXJBbWVuZFNlcnZpY2UuZ2V0RW50cmllcygpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBvcmRlckFtZW5kU2VydmljZTogT3JkZXJBbWVuZFNlcnZpY2UpIHt9XG59XG4iXX0=