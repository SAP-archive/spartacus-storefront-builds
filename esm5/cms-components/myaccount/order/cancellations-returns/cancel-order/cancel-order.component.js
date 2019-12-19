/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { tap, filter, map } from 'rxjs/operators';
import { OrderCancelOrReturnService } from '../cancel-or-return.service';
import { OrderDetailsService } from '../../order-details/order-details.service';
var CancelOrderComponent = /** @class */ (function () {
    function CancelOrderComponent(cancelOrReturnService, orderDetailsService) {
        var _this = this;
        this.cancelOrReturnService = cancelOrReturnService;
        this.orderDetailsService = orderDetailsService;
        this.cancellableEntries$ = this.orderDetailsService.getOrderDetails().pipe(filter((/**
         * @param {?} order
         * @return {?}
         */
        function (order) { return Boolean(order.entries); })), tap((/**
         * @param {?} order
         * @return {?}
         */
        function (order) { return (_this.orderCode = order.code); })), map((/**
         * @param {?} order
         * @return {?}
         */
        function (order) {
            /** @type {?} */
            var cancellableEntries = [];
            order.entries.forEach((/**
             * @param {?} entry
             * @return {?}
             */
            function (entry) {
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
    CancelOrderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.cancelOrReturnService.clearCancelOrReturnRequestInputs();
    };
    /**
     * @param {?} entryInputs
     * @return {?}
     */
    CancelOrderComponent.prototype.confirmCancel = /**
     * @param {?} entryInputs
     * @return {?}
     */
    function (entryInputs) {
        this.cancelOrReturnService.cancelOrReturnRequestInputs = entryInputs;
        this.cancelOrReturnService.goToOrderCancelOrReturn('orderCancelConfirmation', this.orderCode);
    };
    CancelOrderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-cancel-order',
                    template: "<ng-container *ngIf=\"cancellableEntries$ | async as cancellableEntries\">\n  <cx-cancel-or-return-items\n    [entries]=\"cancellableEntries\"\n    [cancelOrder]=\"true\"\n    [orderCode]=\"orderCode\"\n    (confirm)=\"confirmCancel($event)\"\n  >\n  </cx-cancel-or-return-items>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CancelOrderComponent.ctorParameters = function () { return [
        { type: OrderCancelOrReturnService },
        { type: OrderDetailsService }
    ]; };
    return CancelOrderComponent;
}());
export { CancelOrderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsLW9yZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9jYW5jZWxsYXRpb25zLXJldHVybnMvY2FuY2VsLW9yZGVyL2NhbmNlbC1vcmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFM0UsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFaEY7SUFNRSw4QkFDWSxxQkFBaUQsRUFDakQsbUJBQXdDO1FBRnBELGlCQUdJO1FBRlEsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUE0QjtRQUNqRCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBS3BELHdCQUFtQixHQUVmLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQ2pELE1BQU07Ozs7UUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQXRCLENBQXNCLEVBQUMsRUFDdkMsR0FBRzs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBN0IsQ0FBNkIsRUFBQyxFQUMzQyxHQUFHOzs7O1FBQUMsVUFBQSxLQUFLOztnQkFDRCxrQkFBa0IsR0FBRyxFQUFFO1lBQzdCLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsS0FBSztnQkFDekIsSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLEVBQUU7b0JBQzdELGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDaEM7WUFDSCxDQUFDLEVBQUMsQ0FBQztZQUNILE9BQU8sa0JBQWtCLENBQUM7UUFDNUIsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQWxCQyxDQUFDOzs7O0lBb0JKLHVDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxnQ0FBZ0MsRUFBRSxDQUFDO0lBQ2hFLENBQUM7Ozs7O0lBRUQsNENBQWE7Ozs7SUFBYixVQUFjLFdBQThDO1FBQzFELElBQUksQ0FBQyxxQkFBcUIsQ0FBQywyQkFBMkIsR0FBRyxXQUFXLENBQUM7UUFDckUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLHVCQUF1QixDQUNoRCx5QkFBeUIsRUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FDZixDQUFDO0lBQ0osQ0FBQzs7Z0JBdkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixzVEFBNEM7b0JBQzVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFQUSwwQkFBMEI7Z0JBQzFCLG1CQUFtQjs7SUEwQzVCLDJCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0FuQ1ksb0JBQW9COzs7SUFNL0IseUNBQWtCOztJQUVsQixtREFjRTs7Ozs7SUFwQkEscURBQTJEOzs7OztJQUMzRCxtREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCwgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPcmRlckVudHJ5LCBDYW5jZWxPclJldHVyblJlcXVlc3RFbnRyeUlucHV0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9yZGVyQ2FuY2VsT3JSZXR1cm5TZXJ2aWNlIH0gZnJvbSAnLi4vY2FuY2VsLW9yLXJldHVybi5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyRGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhbmNlbC1vcmRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYW5jZWwtb3JkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FuY2VsT3JkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2FuY2VsT3JSZXR1cm5TZXJ2aWNlOiBPcmRlckNhbmNlbE9yUmV0dXJuU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgb3JkZXJEZXRhaWxzU2VydmljZTogT3JkZXJEZXRhaWxzU2VydmljZVxuICApIHt9XG5cbiAgb3JkZXJDb2RlOiBzdHJpbmc7XG5cbiAgY2FuY2VsbGFibGVFbnRyaWVzJDogT2JzZXJ2YWJsZTxcbiAgICBPcmRlckVudHJ5W11cbiAgPiA9IHRoaXMub3JkZXJEZXRhaWxzU2VydmljZS5nZXRPcmRlckRldGFpbHMoKS5waXBlKFxuICAgIGZpbHRlcihvcmRlciA9PiBCb29sZWFuKG9yZGVyLmVudHJpZXMpKSxcbiAgICB0YXAob3JkZXIgPT4gKHRoaXMub3JkZXJDb2RlID0gb3JkZXIuY29kZSkpLFxuICAgIG1hcChvcmRlciA9PiB7XG4gICAgICBjb25zdCBjYW5jZWxsYWJsZUVudHJpZXMgPSBbXTtcbiAgICAgIG9yZGVyLmVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgIGlmIChlbnRyeS5lbnRyeU51bWJlciAhPT0gLTEgJiYgZW50cnkuY2FuY2VsbGFibGVRdWFudGl0eSA+IDApIHtcbiAgICAgICAgICBjYW5jZWxsYWJsZUVudHJpZXMucHVzaChlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNhbmNlbGxhYmxlRW50cmllcztcbiAgICB9KVxuICApO1xuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY2FuY2VsT3JSZXR1cm5TZXJ2aWNlLmNsZWFyQ2FuY2VsT3JSZXR1cm5SZXF1ZXN0SW5wdXRzKCk7XG4gIH1cblxuICBjb25maXJtQ2FuY2VsKGVudHJ5SW5wdXRzOiBDYW5jZWxPclJldHVyblJlcXVlc3RFbnRyeUlucHV0W10pOiB2b2lkIHtcbiAgICB0aGlzLmNhbmNlbE9yUmV0dXJuU2VydmljZS5jYW5jZWxPclJldHVyblJlcXVlc3RJbnB1dHMgPSBlbnRyeUlucHV0cztcbiAgICB0aGlzLmNhbmNlbE9yUmV0dXJuU2VydmljZS5nb1RvT3JkZXJDYW5jZWxPclJldHVybihcbiAgICAgICdvcmRlckNhbmNlbENvbmZpcm1hdGlvbicsXG4gICAgICB0aGlzLm9yZGVyQ29kZVxuICAgICk7XG4gIH1cbn1cbiJdfQ==