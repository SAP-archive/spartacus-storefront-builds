/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { OrderAmendService } from '../../amend-order.service';
export class CancelOrderConfirmationComponent {
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
        this.entries$ = this.orderAmendService.getAmendedEntries();
    }
    /**
     * @param {?} form
     * @return {?}
     */
    submit(form) {
        form.disable();
        this.orderAmendService.save();
    }
}
CancelOrderConfirmationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-cancel-order-confirmation',
                template: "<form\n  *ngIf=\"form$ | async as form\"\n  [formGroup]=\"form\"\n  (ngSubmit)=\"submit(form)\"\n>\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <cx-amend-order-items\n    *ngIf=\"entries$ | async as entries\"\n    [entries]=\"entries\"\n    [isConfirmation]=\"true\"\n  >\n  </cx-amend-order-items>\n\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <ng-template #actions>\n    <cx-amend-order-actions\n      *ngIf=\"orderCode\"\n      [orderCode]=\"orderCode\"\n      [isValid]=\"form.valid\"\n      backRoute=\"orderCancel\"\n    ></cx-amend-order-actions>\n  </ng-template>\n</form>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CancelOrderConfirmationComponent.ctorParameters = () => [
    { type: OrderAmendService }
];
if (false) {
    /** @type {?} */
    CancelOrderConfirmationComponent.prototype.orderCode;
    /** @type {?} */
    CancelOrderConfirmationComponent.prototype.form$;
    /** @type {?} */
    CancelOrderConfirmationComponent.prototype.entries$;
    /**
     * @type {?}
     * @protected
     */
    CancelOrderConfirmationComponent.prototype.orderAmendService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsLW9yZGVyLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvYW1lbmQtb3JkZXIvY2FuY2VsbGF0aW9ucy9jYW5jZWwtb3JkZXItY29uZmlybWF0aW9uL2NhbmNlbC1vcmRlci1jb25maXJtYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSW5FLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQU85RCxNQUFNLE9BQU8sZ0NBQWdDOzs7O0lBVzNDLFlBQXNCLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBUjFELFVBQUssR0FBRyxJQUFJLENBQUMsaUJBQWlCO2FBQzNCLE9BQU8sRUFBRTthQUNULElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDLENBQUM7UUFFOUQsYUFBUSxHQUVKLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBRWMsQ0FBQzs7Ozs7SUFFOUQsTUFBTSxDQUFDLElBQWU7UUFDcEIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hDLENBQUM7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsaW9CQUF5RDtnQkFDekQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFOUSxpQkFBaUI7Ozs7SUFReEIscURBQWtCOztJQUVsQixpREFFOEQ7O0lBRTlELG9EQUUrQzs7Ozs7SUFFbkMsNkRBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPcmRlckFtZW5kU2VydmljZSB9IGZyb20gJy4uLy4uL2FtZW5kLW9yZGVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jYW5jZWwtb3JkZXItY29uZmlybWF0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbmNlbC1vcmRlci1jb25maXJtYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FuY2VsT3JkZXJDb25maXJtYXRpb25Db21wb25lbnQge1xuICBvcmRlckNvZGU6IHN0cmluZztcblxuICBmb3JtJCA9IHRoaXMub3JkZXJBbWVuZFNlcnZpY2VcbiAgICAuZ2V0Rm9ybSgpXG4gICAgLnBpcGUodGFwKGZvcm0gPT4gKHRoaXMub3JkZXJDb2RlID0gZm9ybS52YWx1ZS5vcmRlckNvZGUpKSk7XG5cbiAgZW50cmllcyQ6IE9ic2VydmFibGU8XG4gICAgT3JkZXJFbnRyeVtdXG4gID4gPSB0aGlzLm9yZGVyQW1lbmRTZXJ2aWNlLmdldEFtZW5kZWRFbnRyaWVzKCk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG9yZGVyQW1lbmRTZXJ2aWNlOiBPcmRlckFtZW5kU2VydmljZSkge31cblxuICBzdWJtaXQoZm9ybTogRm9ybUdyb3VwKTogdm9pZCB7XG4gICAgZm9ybS5kaXNhYmxlKCk7XG4gICAgdGhpcy5vcmRlckFtZW5kU2VydmljZS5zYXZlKCk7XG4gIH1cbn1cbiJdfQ==