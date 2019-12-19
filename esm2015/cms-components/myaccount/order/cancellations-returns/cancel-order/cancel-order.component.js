/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { tap, filter, map } from 'rxjs/operators';
import { OrderCancelOrReturnService } from '../cancel-or-return.service';
import { OrderDetailsService } from '../../order-details/order-details.service';
export class CancelOrderComponent {
    /**
     * @param {?} cancelOrReturnService
     * @param {?} orderDetailsService
     */
    constructor(cancelOrReturnService, orderDetailsService) {
        this.cancelOrReturnService = cancelOrReturnService;
        this.orderDetailsService = orderDetailsService;
        this.cancellableEntries$ = this.orderDetailsService.getOrderDetails().pipe(filter((/**
         * @param {?} order
         * @return {?}
         */
        order => Boolean(order.entries))), tap((/**
         * @param {?} order
         * @return {?}
         */
        order => (this.orderCode = order.code))), map((/**
         * @param {?} order
         * @return {?}
         */
        order => {
            /** @type {?} */
            const cancellableEntries = [];
            order.entries.forEach((/**
             * @param {?} entry
             * @return {?}
             */
            entry => {
                if (entry.entryNumber !== -1 && entry.cancellableQuantity > 0) {
                    cancellableEntries.push(entry);
                }
            }));
            return cancellableEntries;
        })));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.cancelOrReturnService.clearCancelOrReturnRequestInputs();
    }
    /**
     * @param {?} entryInputs
     * @return {?}
     */
    confirmCancel(entryInputs) {
        this.cancelOrReturnService.cancelOrReturnRequestInputs = entryInputs;
        this.cancelOrReturnService.goToOrderCancelOrReturn('orderCancelConfirmation', this.orderCode);
    }
}
CancelOrderComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-cancel-order',
                template: "<ng-container *ngIf=\"cancellableEntries$ | async as cancellableEntries\">\n  <cx-cancel-or-return-items\n    [entries]=\"cancellableEntries\"\n    [cancelOrder]=\"true\"\n    [orderCode]=\"orderCode\"\n    (confirm)=\"confirmCancel($event)\"\n  >\n  </cx-cancel-or-return-items>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CancelOrderComponent.ctorParameters = () => [
    { type: OrderCancelOrReturnService },
    { type: OrderDetailsService }
];
if (false) {
    /** @type {?} */
    CancelOrderComponent.prototype.orderCode;
    /** @type {?} */
    CancelOrderComponent.prototype.cancellableEntries$;
    /**
     * @type {?}
     * @protected
     */
    CancelOrderComponent.prototype.cancelOrReturnService;
    /**
     * @type {?}
     * @protected
     */
    CancelOrderComponent.prototype.orderDetailsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsLW9yZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9jYW5jZWxsYXRpb25zLXJldHVybnMvY2FuY2VsLW9yZGVyL2NhbmNlbC1vcmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFM0UsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFPaEYsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7SUFDL0IsWUFDWSxxQkFBaUQsRUFDakQsbUJBQXdDO1FBRHhDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBNEI7UUFDakQsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUtwRCx3QkFBbUIsR0FFZixJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUNqRCxNQUFNOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFDLEVBQ3ZDLEdBQUc7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFDM0MsR0FBRzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFOztrQkFDSixrQkFBa0IsR0FBRyxFQUFFO1lBQzdCLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTzs7OztZQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUM1QixJQUFJLEtBQUssQ0FBQyxXQUFXLEtBQUssQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLG1CQUFtQixHQUFHLENBQUMsRUFBRTtvQkFDN0Qsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUNoQztZQUNILENBQUMsRUFBQyxDQUFDO1lBQ0gsT0FBTyxrQkFBa0IsQ0FBQztRQUM1QixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBbEJDLENBQUM7Ozs7SUFvQkosUUFBUTtRQUNOLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxnQ0FBZ0MsRUFBRSxDQUFDO0lBQ2hFLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLFdBQThDO1FBQzFELElBQUksQ0FBQyxxQkFBcUIsQ0FBQywyQkFBMkIsR0FBRyxXQUFXLENBQUM7UUFDckUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLHVCQUF1QixDQUNoRCx5QkFBeUIsRUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FDZixDQUFDO0lBQ0osQ0FBQzs7O1lBdkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixzVEFBNEM7Z0JBQzVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBUFEsMEJBQTBCO1lBQzFCLG1CQUFtQjs7OztJQWExQix5Q0FBa0I7O0lBRWxCLG1EQWNFOzs7OztJQXBCQSxxREFBMkQ7Ozs7O0lBQzNELG1EQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwLCBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yZGVyRW50cnksIENhbmNlbE9yUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT3JkZXJDYW5jZWxPclJldHVyblNlcnZpY2UgfSBmcm9tICcuLi9jYW5jZWwtb3ItcmV0dXJuLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxzU2VydmljZSB9IGZyb20gJy4uLy4uL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2FuY2VsLW9yZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbmNlbC1vcmRlci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDYW5jZWxPcmRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjYW5jZWxPclJldHVyblNlcnZpY2U6IE9yZGVyQ2FuY2VsT3JSZXR1cm5TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlXG4gICkge31cblxuICBvcmRlckNvZGU6IHN0cmluZztcblxuICBjYW5jZWxsYWJsZUVudHJpZXMkOiBPYnNlcnZhYmxlPFxuICAgIE9yZGVyRW50cnlbXVxuICA+ID0gdGhpcy5vcmRlckRldGFpbHNTZXJ2aWNlLmdldE9yZGVyRGV0YWlscygpLnBpcGUoXG4gICAgZmlsdGVyKG9yZGVyID0+IEJvb2xlYW4ob3JkZXIuZW50cmllcykpLFxuICAgIHRhcChvcmRlciA9PiAodGhpcy5vcmRlckNvZGUgPSBvcmRlci5jb2RlKSksXG4gICAgbWFwKG9yZGVyID0+IHtcbiAgICAgIGNvbnN0IGNhbmNlbGxhYmxlRW50cmllcyA9IFtdO1xuICAgICAgb3JkZXIuZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgaWYgKGVudHJ5LmVudHJ5TnVtYmVyICE9PSAtMSAmJiBlbnRyeS5jYW5jZWxsYWJsZVF1YW50aXR5ID4gMCkge1xuICAgICAgICAgIGNhbmNlbGxhYmxlRW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gY2FuY2VsbGFibGVFbnRyaWVzO1xuICAgIH0pXG4gICk7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jYW5jZWxPclJldHVyblNlcnZpY2UuY2xlYXJDYW5jZWxPclJldHVyblJlcXVlc3RJbnB1dHMoKTtcbiAgfVxuXG4gIGNvbmZpcm1DYW5jZWwoZW50cnlJbnB1dHM6IENhbmNlbE9yUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXRbXSk6IHZvaWQge1xuICAgIHRoaXMuY2FuY2VsT3JSZXR1cm5TZXJ2aWNlLmNhbmNlbE9yUmV0dXJuUmVxdWVzdElucHV0cyA9IGVudHJ5SW5wdXRzO1xuICAgIHRoaXMuY2FuY2VsT3JSZXR1cm5TZXJ2aWNlLmdvVG9PcmRlckNhbmNlbE9yUmV0dXJuKFxuICAgICAgJ29yZGVyQ2FuY2VsQ29uZmlybWF0aW9uJyxcbiAgICAgIHRoaXMub3JkZXJDb2RlXG4gICAgKTtcbiAgfVxufVxuIl19