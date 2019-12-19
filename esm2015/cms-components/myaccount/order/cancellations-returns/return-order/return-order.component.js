/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { tap, filter, map } from 'rxjs/operators';
import { OrderCancelOrReturnService } from '../cancel-or-return.service';
import { OrderDetailsService } from '../../order-details/order-details.service';
export class ReturnOrderComponent {
    /**
     * @param {?} cancelOrReturnService
     * @param {?} orderDetailsService
     */
    constructor(cancelOrReturnService, orderDetailsService) {
        this.cancelOrReturnService = cancelOrReturnService;
        this.orderDetailsService = orderDetailsService;
        this.returnableEntries$ = this.orderDetailsService.getOrderDetails().pipe(filter((/**
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
            const returnableEntries = [];
            order.entries.forEach((/**
             * @param {?} entry
             * @return {?}
             */
            entry => {
                if (entry.entryNumber !== -1 && entry.returnableQuantity > 0) {
                    returnableEntries.push(entry);
                }
            }));
            return returnableEntries;
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
    confirmReturn(entryInputs) {
        this.cancelOrReturnService.cancelOrReturnRequestInputs = entryInputs;
        this.cancelOrReturnService.goToOrderCancelOrReturn('orderReturnConfirmation', this.orderCode);
    }
}
ReturnOrderComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-return-order',
                template: "<ng-container *ngIf=\"returnableEntries$ | async as returnableEntries\">\n  <cx-cancel-or-return-items\n    [entries]=\"returnableEntries\"\n    [cancelOrder]=\"false\"\n    [orderCode]=\"orderCode\"\n    (confirm)=\"confirmReturn($event)\"\n  >\n  </cx-cancel-or-return-items>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ReturnOrderComponent.ctorParameters = () => [
    { type: OrderCancelOrReturnService },
    { type: OrderDetailsService }
];
if (false) {
    /** @type {?} */
    ReturnOrderComponent.prototype.orderCode;
    /** @type {?} */
    ReturnOrderComponent.prototype.returnableEntries$;
    /**
     * @type {?}
     * @protected
     */
    ReturnOrderComponent.prototype.cancelOrReturnService;
    /**
     * @type {?}
     * @protected
     */
    ReturnOrderComponent.prototype.orderDetailsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLW9yZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9jYW5jZWxsYXRpb25zLXJldHVybnMvcmV0dXJuLW9yZGVyL3JldHVybi1vcmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFM0UsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFPaEYsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7SUFDL0IsWUFDWSxxQkFBaUQsRUFDakQsbUJBQXdDO1FBRHhDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBNEI7UUFDakQsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUtwRCx1QkFBa0IsR0FFZCxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxFQUFFLENBQUMsSUFBSSxDQUNqRCxNQUFNOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFDLEVBQ3ZDLEdBQUc7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsRUFDM0MsR0FBRzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFOztrQkFDSixpQkFBaUIsR0FBRyxFQUFFO1lBQzVCLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTzs7OztZQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUM1QixJQUFJLEtBQUssQ0FBQyxXQUFXLEtBQUssQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLGtCQUFrQixHQUFHLENBQUMsRUFBRTtvQkFDNUQsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUMvQjtZQUNILENBQUMsRUFBQyxDQUFDO1lBQ0gsT0FBTyxpQkFBaUIsQ0FBQztRQUMzQixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBbEJDLENBQUM7Ozs7SUFvQkosUUFBUTtRQUNOLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxnQ0FBZ0MsRUFBRSxDQUFDO0lBQ2hFLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLFdBQThDO1FBQzFELElBQUksQ0FBQyxxQkFBcUIsQ0FBQywyQkFBMkIsR0FBRyxXQUFXLENBQUM7UUFDckUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLHVCQUF1QixDQUNoRCx5QkFBeUIsRUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FDZixDQUFDO0lBQ0osQ0FBQzs7O1lBdkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixvVEFBNEM7Z0JBQzVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBUFEsMEJBQTBCO1lBQzFCLG1CQUFtQjs7OztJQWExQix5Q0FBa0I7O0lBRWxCLGtEQWNFOzs7OztJQXBCQSxxREFBMkQ7Ozs7O0lBQzNELG1EQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwLCBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yZGVyRW50cnksIENhbmNlbE9yUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT3JkZXJDYW5jZWxPclJldHVyblNlcnZpY2UgfSBmcm9tICcuLi9jYW5jZWwtb3ItcmV0dXJuLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxzU2VydmljZSB9IGZyb20gJy4uLy4uL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcmV0dXJuLW9yZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3JldHVybi1vcmRlci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBSZXR1cm5PcmRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjYW5jZWxPclJldHVyblNlcnZpY2U6IE9yZGVyQ2FuY2VsT3JSZXR1cm5TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlXG4gICkge31cblxuICBvcmRlckNvZGU6IHN0cmluZztcblxuICByZXR1cm5hYmxlRW50cmllcyQ6IE9ic2VydmFibGU8XG4gICAgT3JkZXJFbnRyeVtdXG4gID4gPSB0aGlzLm9yZGVyRGV0YWlsc1NlcnZpY2UuZ2V0T3JkZXJEZXRhaWxzKCkucGlwZShcbiAgICBmaWx0ZXIob3JkZXIgPT4gQm9vbGVhbihvcmRlci5lbnRyaWVzKSksXG4gICAgdGFwKG9yZGVyID0+ICh0aGlzLm9yZGVyQ29kZSA9IG9yZGVyLmNvZGUpKSxcbiAgICBtYXAob3JkZXIgPT4ge1xuICAgICAgY29uc3QgcmV0dXJuYWJsZUVudHJpZXMgPSBbXTtcbiAgICAgIG9yZGVyLmVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgIGlmIChlbnRyeS5lbnRyeU51bWJlciAhPT0gLTEgJiYgZW50cnkucmV0dXJuYWJsZVF1YW50aXR5ID4gMCkge1xuICAgICAgICAgIHJldHVybmFibGVFbnRyaWVzLnB1c2goZW50cnkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXR1cm5hYmxlRW50cmllcztcbiAgICB9KVxuICApO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2FuY2VsT3JSZXR1cm5TZXJ2aWNlLmNsZWFyQ2FuY2VsT3JSZXR1cm5SZXF1ZXN0SW5wdXRzKCk7XG4gIH1cblxuICBjb25maXJtUmV0dXJuKGVudHJ5SW5wdXRzOiBDYW5jZWxPclJldHVyblJlcXVlc3RFbnRyeUlucHV0W10pOiB2b2lkIHtcbiAgICB0aGlzLmNhbmNlbE9yUmV0dXJuU2VydmljZS5jYW5jZWxPclJldHVyblJlcXVlc3RJbnB1dHMgPSBlbnRyeUlucHV0cztcbiAgICB0aGlzLmNhbmNlbE9yUmV0dXJuU2VydmljZS5nb1RvT3JkZXJDYW5jZWxPclJldHVybihcbiAgICAgICdvcmRlclJldHVybkNvbmZpcm1hdGlvbicsXG4gICAgICB0aGlzLm9yZGVyQ29kZVxuICAgICk7XG4gIH1cbn1cbiJdfQ==