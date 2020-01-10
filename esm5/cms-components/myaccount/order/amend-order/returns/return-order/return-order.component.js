/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tap } from 'rxjs/operators';
import { OrderAmendService } from '../../amend-order.service';
var ReturnOrderComponent = /** @class */ (function () {
    function ReturnOrderComponent(orderAmendService) {
        var _this = this;
        this.orderAmendService = orderAmendService;
        this.form$ = this.orderAmendService
            .getForm()
            .pipe(tap((/**
         * @param {?} form
         * @return {?}
         */
        function (form) { return (_this.orderCode = form.value.orderCode); })));
        this.entries$ = this.orderAmendService.getEntries();
    }
    ReturnOrderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-return-order',
                    template: "<ng-container *ngIf=\"form$ | async as form\">\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <cx-amend-order-items *ngIf=\"entries$ | async as entries\" [entries]=\"entries\">\n  </cx-amend-order-items>\n\n  <ng-container *ngTemplateOutlet=\"actions\"></ng-container>\n\n  <ng-template #actions>\n    <cx-amend-order-actions\n      *ngIf=\"orderCode\"\n      [orderCode]=\"orderCode\"\n      [isValid]=\"form.valid\"\n      backRoute=\"orderDetails\"\n      forwardRoute=\"orderReturnConfirmation\"\n    ></cx-amend-order-actions>\n  </ng-template>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ReturnOrderComponent.ctorParameters = function () { return [
        { type: OrderAmendService }
    ]; };
    return ReturnOrderComponent;
}());
export { ReturnOrderComponent };
if (false) {
    /** @type {?} */
    ReturnOrderComponent.prototype.orderCode;
    /** @type {?} */
    ReturnOrderComponent.prototype.form$;
    /** @type {?} */
    ReturnOrderComponent.prototype.entries$;
    /**
     * @type {?}
     * @protected
     */
    ReturnOrderComponent.prototype.orderAmendService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLW9yZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9hbWVuZC1vcmRlci9yZXR1cm5zL3JldHVybi1vcmRlci9yZXR1cm4tb3JkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR25FLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU5RDtJQWNFLDhCQUFzQixpQkFBb0M7UUFBMUQsaUJBQThEO1FBQXhDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFOMUQsVUFBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUI7YUFDM0IsT0FBTyxFQUFFO2FBQ1QsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsS0FBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUF2QyxDQUF1QyxFQUFDLENBQUMsQ0FBQztRQUU5RCxhQUFRLEdBQTZCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUVaLENBQUM7O2dCQWQvRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IseWxCQUE0QztvQkFDNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQU5RLGlCQUFpQjs7SUFpQjFCLDJCQUFDO0NBQUEsQUFmRCxJQWVDO1NBVlksb0JBQW9COzs7SUFDL0IseUNBQWtCOztJQUVsQixxQ0FFOEQ7O0lBRTlELHdDQUF5RTs7Ozs7SUFFN0QsaURBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPcmRlckFtZW5kU2VydmljZSB9IGZyb20gJy4uLy4uL2FtZW5kLW9yZGVyLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1yZXR1cm4tb3JkZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcmV0dXJuLW9yZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFJldHVybk9yZGVyQ29tcG9uZW50IHtcbiAgb3JkZXJDb2RlOiBzdHJpbmc7XG5cbiAgZm9ybSQgPSB0aGlzLm9yZGVyQW1lbmRTZXJ2aWNlXG4gICAgLmdldEZvcm0oKVxuICAgIC5waXBlKHRhcChmb3JtID0+ICh0aGlzLm9yZGVyQ29kZSA9IGZvcm0udmFsdWUub3JkZXJDb2RlKSkpO1xuXG4gIGVudHJpZXMkOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT4gPSB0aGlzLm9yZGVyQW1lbmRTZXJ2aWNlLmdldEVudHJpZXMoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgb3JkZXJBbWVuZFNlcnZpY2U6IE9yZGVyQW1lbmRTZXJ2aWNlKSB7fVxufVxuIl19