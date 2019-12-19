/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { tap, filter, map } from 'rxjs/operators';
import { OrderCancelOrReturnService } from '../cancel-or-return.service';
import { OrderDetailsService } from '../../order-details/order-details.service';
var ReturnOrderComponent = /** @class */ (function () {
    function ReturnOrderComponent(cancelOrReturnService, orderDetailsService) {
        var _this = this;
        this.cancelOrReturnService = cancelOrReturnService;
        this.orderDetailsService = orderDetailsService;
        this.returnableEntries$ = this.orderDetailsService.getOrderDetails().pipe(filter((/**
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
            var returnableEntries = [];
            order.entries.forEach((/**
             * @param {?} entry
             * @return {?}
             */
            function (entry) {
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
    ReturnOrderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.cancelOrReturnService.clearCancelOrReturnRequestInputs();
    };
    /**
     * @param {?} entryInputs
     * @return {?}
     */
    ReturnOrderComponent.prototype.confirmReturn = /**
     * @param {?} entryInputs
     * @return {?}
     */
    function (entryInputs) {
        this.cancelOrReturnService.cancelOrReturnRequestInputs = entryInputs;
        this.cancelOrReturnService.goToOrderCancelOrReturn('orderReturnConfirmation', this.orderCode);
    };
    ReturnOrderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-return-order',
                    template: "<ng-container *ngIf=\"returnableEntries$ | async as returnableEntries\">\n  <cx-cancel-or-return-items\n    [entries]=\"returnableEntries\"\n    [cancelOrder]=\"false\"\n    [orderCode]=\"orderCode\"\n    (confirm)=\"confirmReturn($event)\"\n  >\n  </cx-cancel-or-return-items>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ReturnOrderComponent.ctorParameters = function () { return [
        { type: OrderCancelOrReturnService },
        { type: OrderDetailsService }
    ]; };
    return ReturnOrderComponent;
}());
export { ReturnOrderComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0dXJuLW9yZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9jYW5jZWxsYXRpb25zLXJldHVybnMvcmV0dXJuLW9yZGVyL3JldHVybi1vcmRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFM0UsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDekUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFFaEY7SUFNRSw4QkFDWSxxQkFBaUQsRUFDakQsbUJBQXdDO1FBRnBELGlCQUdJO1FBRlEsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUE0QjtRQUNqRCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBS3BELHVCQUFrQixHQUVkLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxJQUFJLENBQ2pELE1BQU07Ozs7UUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEVBQXRCLENBQXNCLEVBQUMsRUFDdkMsR0FBRzs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsQ0FBQyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBN0IsQ0FBNkIsRUFBQyxFQUMzQyxHQUFHOzs7O1FBQUMsVUFBQSxLQUFLOztnQkFDRCxpQkFBaUIsR0FBRyxFQUFFO1lBQzVCLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTzs7OztZQUFDLFVBQUEsS0FBSztnQkFDekIsSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxrQkFBa0IsR0FBRyxDQUFDLEVBQUU7b0JBQzVELGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDL0I7WUFDSCxDQUFDLEVBQUMsQ0FBQztZQUNILE9BQU8saUJBQWlCLENBQUM7UUFDM0IsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQWxCQyxDQUFDOzs7O0lBb0JKLHVDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxnQ0FBZ0MsRUFBRSxDQUFDO0lBQ2hFLENBQUM7Ozs7O0lBRUQsNENBQWE7Ozs7SUFBYixVQUFjLFdBQThDO1FBQzFELElBQUksQ0FBQyxxQkFBcUIsQ0FBQywyQkFBMkIsR0FBRyxXQUFXLENBQUM7UUFDckUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLHVCQUF1QixDQUNoRCx5QkFBeUIsRUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FDZixDQUFDO0lBQ0osQ0FBQzs7Z0JBdkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixvVEFBNEM7b0JBQzVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFQUSwwQkFBMEI7Z0JBQzFCLG1CQUFtQjs7SUEwQzVCLDJCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0FuQ1ksb0JBQW9COzs7SUFNL0IseUNBQWtCOztJQUVsQixrREFjRTs7Ozs7SUFwQkEscURBQTJEOzs7OztJQUMzRCxtREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCwgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPcmRlckVudHJ5LCBDYW5jZWxPclJldHVyblJlcXVlc3RFbnRyeUlucHV0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9yZGVyQ2FuY2VsT3JSZXR1cm5TZXJ2aWNlIH0gZnJvbSAnLi4vY2FuY2VsLW9yLXJldHVybi5zZXJ2aWNlJztcbmltcG9ydCB7IE9yZGVyRGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXJldHVybi1vcmRlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXR1cm4tb3JkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUmV0dXJuT3JkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2FuY2VsT3JSZXR1cm5TZXJ2aWNlOiBPcmRlckNhbmNlbE9yUmV0dXJuU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgb3JkZXJEZXRhaWxzU2VydmljZTogT3JkZXJEZXRhaWxzU2VydmljZVxuICApIHt9XG5cbiAgb3JkZXJDb2RlOiBzdHJpbmc7XG5cbiAgcmV0dXJuYWJsZUVudHJpZXMkOiBPYnNlcnZhYmxlPFxuICAgIE9yZGVyRW50cnlbXVxuICA+ID0gdGhpcy5vcmRlckRldGFpbHNTZXJ2aWNlLmdldE9yZGVyRGV0YWlscygpLnBpcGUoXG4gICAgZmlsdGVyKG9yZGVyID0+IEJvb2xlYW4ob3JkZXIuZW50cmllcykpLFxuICAgIHRhcChvcmRlciA9PiAodGhpcy5vcmRlckNvZGUgPSBvcmRlci5jb2RlKSksXG4gICAgbWFwKG9yZGVyID0+IHtcbiAgICAgIGNvbnN0IHJldHVybmFibGVFbnRyaWVzID0gW107XG4gICAgICBvcmRlci5lbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICBpZiAoZW50cnkuZW50cnlOdW1iZXIgIT09IC0xICYmIGVudHJ5LnJldHVybmFibGVRdWFudGl0eSA+IDApIHtcbiAgICAgICAgICByZXR1cm5hYmxlRW50cmllcy5wdXNoKGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmV0dXJuYWJsZUVudHJpZXM7XG4gICAgfSlcbiAgKTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhbmNlbE9yUmV0dXJuU2VydmljZS5jbGVhckNhbmNlbE9yUmV0dXJuUmVxdWVzdElucHV0cygpO1xuICB9XG5cbiAgY29uZmlybVJldHVybihlbnRyeUlucHV0czogQ2FuY2VsT3JSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dFtdKTogdm9pZCB7XG4gICAgdGhpcy5jYW5jZWxPclJldHVyblNlcnZpY2UuY2FuY2VsT3JSZXR1cm5SZXF1ZXN0SW5wdXRzID0gZW50cnlJbnB1dHM7XG4gICAgdGhpcy5jYW5jZWxPclJldHVyblNlcnZpY2UuZ29Ub09yZGVyQ2FuY2VsT3JSZXR1cm4oXG4gICAgICAnb3JkZXJSZXR1cm5Db25maXJtYXRpb24nLFxuICAgICAgdGhpcy5vcmRlckNvZGVcbiAgICApO1xuICB9XG59XG4iXX0=