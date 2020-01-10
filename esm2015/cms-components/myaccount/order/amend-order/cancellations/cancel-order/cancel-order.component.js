/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { OrderAmendService } from '../../amend-order.service';
export class CancelOrderComponent {
    /**
     * @param {?} orderAmendService
     */
    constructor(orderAmendService) {
        this.orderAmendService = orderAmendService;
        this.form$ = this.orderAmendService
            .getForm()
            .pipe(tap((/**
         * @param {?} form
         * @return {?}
         */
        form => (this.orderCode = form.value.orderCode))));
        this.entries$ = this.orderAmendService.getEntries();
    }
}
CancelOrderComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-cancel-order',
                template: "<ng-container *ngIf=\"form$ | async as form\">\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <cx-amend-order-items *ngIf=\"entries$ | async as entries\" [entries]=\"entries\">\n  </cx-amend-order-items>\n\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <ng-template #actions>\n    <cx-amend-order-actions\n      *ngIf=\"orderCode\"\n      [orderCode]=\"orderCode\"\n      [isValid]=\"form.valid\"\n      backRoute=\"orderDetails\"\n      forwardRoute=\"orderCancelConfirmation\"\n    ></cx-amend-order-actions>\n  </ng-template>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CancelOrderComponent.ctorParameters = () => [
    { type: OrderAmendService }
];
if (false) {
    /** @type {?} */
    CancelOrderComponent.prototype.orderCode;
    /** @type {?} */
    CancelOrderComponent.prototype.form$;
    /** @type {?} */
    CancelOrderComponent.prototype.entries$;
    /**
     * @type {?}
     * @protected
     */
    CancelOrderComponent.prototype.orderAmendService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsLW9yZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9hbWVuZC1vcmRlci9jYW5jZWxsYXRpb25zL2NhbmNlbC1vcmRlci9jYW5jZWwtb3JkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR25FLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQU85RCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBUy9CLFlBQXNCLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBTjFELFVBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCO2FBQzNCLE9BQU8sRUFBRTthQUNULElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLENBQUM7UUFFOUQsYUFBUSxHQUE2QixJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLENBQUM7SUFFWixDQUFDOzs7WUFkL0QsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLHlsQkFBNEM7Z0JBQzVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBTlEsaUJBQWlCOzs7O0lBUXhCLHlDQUFrQjs7SUFFbEIscUNBRThEOztJQUU5RCx3Q0FBeUU7Ozs7O0lBRTdELGlEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9yZGVyRW50cnkgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT3JkZXJBbWVuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hbWVuZC1vcmRlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2FuY2VsLW9yZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbmNlbC1vcmRlci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDYW5jZWxPcmRlckNvbXBvbmVudCB7XG4gIG9yZGVyQ29kZTogc3RyaW5nO1xuXG4gIGZvcm0kID0gdGhpcy5vcmRlckFtZW5kU2VydmljZVxuICAgIC5nZXRGb3JtKClcbiAgICAucGlwZSh0YXAoZm9ybSA9PiAodGhpcy5vcmRlckNvZGUgPSBmb3JtLnZhbHVlLm9yZGVyQ29kZSkpKTtcblxuICBlbnRyaWVzJDogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+ID0gdGhpcy5vcmRlckFtZW5kU2VydmljZS5nZXRFbnRyaWVzKCk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG9yZGVyQW1lbmRTZXJ2aWNlOiBPcmRlckFtZW5kU2VydmljZSkge31cbn1cbiJdfQ==