/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { GlobalMessageService, GlobalMessageType, RoutingService, UserOrderService, } from '@spartacus/core';
import { filter, first, map } from 'rxjs/operators';
import { OrderDetailsService } from '../../order-details/order-details.service';
import { AmendOrderType } from '../amend-order.model';
import { OrderAmendService } from '../amend-order.service';
import * as i0 from "@angular/core";
import * as i1 from "../../order-details/order-details.service";
import * as i2 from "@spartacus/core";
var OrderCancellationService = /** @class */ (function (_super) {
    tslib_1.__extends(OrderCancellationService, _super);
    function OrderCancellationService(orderDetailsService, userOrderService, routing, globalMessageService) {
        var _this = _super.call(this, orderDetailsService) || this;
        _this.orderDetailsService = orderDetailsService;
        _this.userOrderService = userOrderService;
        _this.routing = routing;
        _this.globalMessageService = globalMessageService;
        _this.amendType = AmendOrderType.CANCEL;
        return _this;
    }
    /**
     * Return cancellable order entries.
     */
    /**
     * Return cancellable order entries.
     * @return {?}
     */
    OrderCancellationService.prototype.getEntries = /**
     * Return cancellable order entries.
     * @return {?}
     */
    function () {
        return this.getOrder().pipe(filter((/**
         * @param {?} order
         * @return {?}
         */
        function (order) { return Boolean(order); })), map((/**
         * @param {?} order
         * @return {?}
         */
        function (order) {
            return order.entries.filter((/**
             * @param {?} entry
             * @return {?}
             */
            function (entry) { return entry.entryNumber !== -1 && entry.cancellableQuantity > 0; }));
        })));
    };
    /**
     * @return {?}
     */
    OrderCancellationService.prototype.save = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var orderCode = this.form.value.orderCode;
        /** @type {?} */
        var entries = this.form.value.entries;
        /** @type {?} */
        var inputs = Object.keys(entries).map((/**
         * @param {?} entryNumber
         * @return {?}
         */
        function (entryNumber) {
            return ((/** @type {?} */ ({
                orderEntryNumber: Number(entryNumber),
                quantity: (/** @type {?} */ (entries[entryNumber])),
            })));
        }));
        this.form.reset();
        this.userOrderService.cancelOrder(orderCode, {
            cancellationRequestEntryInputs: inputs,
        });
        this.userOrderService
            .getCancelOrderSuccess()
            .pipe(first(Boolean))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.afterSave(orderCode); }));
    };
    /**
     * @private
     * @param {?} orderCode
     * @return {?}
     */
    OrderCancellationService.prototype.afterSave = /**
     * @private
     * @param {?} orderCode
     * @return {?}
     */
    function (orderCode) {
        this.userOrderService.resetCancelOrderProcessState();
        this.globalMessageService.add({
            key: 'orderDetails.cancellationAndReturn.cancelSuccess',
            params: { orderCode: orderCode },
        }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        this.routing.go({
            cxRoute: 'orders',
        });
    };
    OrderCancellationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    OrderCancellationService.ctorParameters = function () { return [
        { type: OrderDetailsService },
        { type: UserOrderService },
        { type: RoutingService },
        { type: GlobalMessageService }
    ]; };
    /** @nocollapse */ OrderCancellationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OrderCancellationService_Factory() { return new OrderCancellationService(i0.ɵɵinject(i1.OrderDetailsService), i0.ɵɵinject(i2.UserOrderService), i0.ɵɵinject(i2.RoutingService), i0.ɵɵinject(i2.GlobalMessageService)); }, token: OrderCancellationService, providedIn: "root" });
    return OrderCancellationService;
}(OrderAmendService));
export { OrderCancellationService };
if (false) {
    /** @type {?} */
    OrderCancellationService.prototype.amendType;
    /**
     * @type {?}
     * @protected
     */
    OrderCancellationService.prototype.orderDetailsService;
    /**
     * @type {?}
     * @protected
     */
    OrderCancellationService.prototype.userOrderService;
    /**
     * @type {?}
     * @protected
     */
    OrderCancellationService.prototype.routing;
    /**
     * @type {?}
     * @protected
     */
    OrderCancellationService.prototype.globalMessageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY2FuY2VsbGF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvYW1lbmQtb3JkZXIvY2FuY2VsbGF0aW9ucy9vcmRlci1jYW5jZWxsYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUVMLG9CQUFvQixFQUNwQixpQkFBaUIsRUFFakIsY0FBYyxFQUNkLGdCQUFnQixHQUNqQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUUzRDtJQUc4QyxvREFBaUI7SUFHN0Qsa0NBQ1ksbUJBQXdDLEVBQ3hDLGdCQUFrQyxFQUNsQyxPQUF1QixFQUN2QixvQkFBMEM7UUFKdEQsWUFNRSxrQkFBTSxtQkFBbUIsQ0FBQyxTQUMzQjtRQU5XLHlCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsc0JBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxhQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QiwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBTnRELGVBQVMsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDOztJQVNsQyxDQUFDO0lBQ0Q7O09BRUc7Ozs7O0lBQ0gsNkNBQVU7Ozs7SUFBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FDekIsTUFBTTs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFkLENBQWMsRUFBQyxFQUMvQixHQUFHOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ1AsT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU07Ozs7WUFDbEIsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLEVBQXpELENBQXlELEVBQ25FO1FBRkQsQ0FFQyxFQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCx1Q0FBSTs7O0lBQUo7UUFBQSxpQkFxQkM7O1lBcEJPLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTOztZQUNyQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzs7WUFDakMsTUFBTSxHQUFzQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUc7Ozs7UUFDeEUsVUFBQSxXQUFXO1lBQ1QsT0FBQSxDQUFDLG1CQUFBO2dCQUNDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUM7Z0JBQ3JDLFFBQVEsRUFBRSxtQkFBUSxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUE7YUFDdkMsRUFBbUMsQ0FBQztRQUhyQyxDQUdxQyxFQUN4QztRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7WUFDM0MsOEJBQThCLEVBQUUsTUFBTTtTQUN2QyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZ0JBQWdCO2FBQ2xCLHFCQUFxQixFQUFFO2FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDcEIsU0FBUzs7O1FBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQXpCLENBQXlCLEVBQUMsQ0FBQztJQUNoRCxDQUFDOzs7Ozs7SUFFTyw0Q0FBUzs7Ozs7SUFBakIsVUFBa0IsU0FBaUI7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0I7WUFDRSxHQUFHLEVBQUUsa0RBQWtEO1lBQ3ZELE1BQU0sRUFBRSxFQUFFLFNBQVMsV0FBQSxFQUFFO1NBQ3RCLEVBQ0QsaUJBQWlCLENBQUMscUJBQXFCLENBQ3hDLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNkLE9BQU8sRUFBRSxRQUFRO1NBQ2xCLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQS9ERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQU5RLG1CQUFtQjtnQkFKMUIsZ0JBQWdCO2dCQURoQixjQUFjO2dCQUhkLG9CQUFvQjs7O21DQUh0QjtDQStFQyxBQWhFRCxDQUc4QyxpQkFBaUIsR0E2RDlEO1NBN0RZLHdCQUF3Qjs7O0lBQ25DLDZDQUFrQzs7Ozs7SUFHaEMsdURBQWtEOzs7OztJQUNsRCxvREFBNEM7Ozs7O0lBQzVDLDJDQUFpQzs7Ozs7SUFDakMsd0RBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FuY2VsT3JSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dCxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBPcmRlckVudHJ5LFxuICBSb3V0aW5nU2VydmljZSxcbiAgVXNlck9yZGVyU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgZmlyc3QsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yZGVyRGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMuc2VydmljZSc7XG5pbXBvcnQgeyBBbWVuZE9yZGVyVHlwZSB9IGZyb20gJy4uL2FtZW5kLW9yZGVyLm1vZGVsJztcbmltcG9ydCB7IE9yZGVyQW1lbmRTZXJ2aWNlIH0gZnJvbSAnLi4vYW1lbmQtb3JkZXIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlckNhbmNlbGxhdGlvblNlcnZpY2UgZXh0ZW5kcyBPcmRlckFtZW5kU2VydmljZSB7XG4gIGFtZW5kVHlwZSA9IEFtZW5kT3JkZXJUeXBlLkNBTkNFTDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgb3JkZXJEZXRhaWxzU2VydmljZTogT3JkZXJEZXRhaWxzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlck9yZGVyU2VydmljZTogVXNlck9yZGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZzogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZVxuICApIHtcbiAgICBzdXBlcihvcmRlckRldGFpbHNTZXJ2aWNlKTtcbiAgfVxuICAvKipcbiAgICogUmV0dXJuIGNhbmNlbGxhYmxlIG9yZGVyIGVudHJpZXMuXG4gICAqL1xuICBnZXRFbnRyaWVzKCk6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0T3JkZXIoKS5waXBlKFxuICAgICAgZmlsdGVyKG9yZGVyID0+IEJvb2xlYW4ob3JkZXIpKSxcbiAgICAgIG1hcChvcmRlciA9PlxuICAgICAgICBvcmRlci5lbnRyaWVzLmZpbHRlcihcbiAgICAgICAgICBlbnRyeSA9PiBlbnRyeS5lbnRyeU51bWJlciAhPT0gLTEgJiYgZW50cnkuY2FuY2VsbGFibGVRdWFudGl0eSA+IDBcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBzYXZlKCk6IHZvaWQge1xuICAgIGNvbnN0IG9yZGVyQ29kZSA9IHRoaXMuZm9ybS52YWx1ZS5vcmRlckNvZGU7XG4gICAgY29uc3QgZW50cmllcyA9IHRoaXMuZm9ybS52YWx1ZS5lbnRyaWVzO1xuICAgIGNvbnN0IGlucHV0czogQ2FuY2VsT3JSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dFtdID0gT2JqZWN0LmtleXMoZW50cmllcykubWFwKFxuICAgICAgZW50cnlOdW1iZXIgPT5cbiAgICAgICAgKHtcbiAgICAgICAgICBvcmRlckVudHJ5TnVtYmVyOiBOdW1iZXIoZW50cnlOdW1iZXIpLFxuICAgICAgICAgIHF1YW50aXR5OiA8bnVtYmVyPmVudHJpZXNbZW50cnlOdW1iZXJdLFxuICAgICAgICB9IGFzIENhbmNlbE9yUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXQpXG4gICAgKTtcblxuICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuXG4gICAgdGhpcy51c2VyT3JkZXJTZXJ2aWNlLmNhbmNlbE9yZGVyKG9yZGVyQ29kZSwge1xuICAgICAgY2FuY2VsbGF0aW9uUmVxdWVzdEVudHJ5SW5wdXRzOiBpbnB1dHMsXG4gICAgfSk7XG5cbiAgICB0aGlzLnVzZXJPcmRlclNlcnZpY2VcbiAgICAgIC5nZXRDYW5jZWxPcmRlclN1Y2Nlc3MoKVxuICAgICAgLnBpcGUoZmlyc3QoQm9vbGVhbikpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuYWZ0ZXJTYXZlKG9yZGVyQ29kZSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZnRlclNhdmUob3JkZXJDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnVzZXJPcmRlclNlcnZpY2UucmVzZXRDYW5jZWxPcmRlclByb2Nlc3NTdGF0ZSgpO1xuICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAge1xuICAgICAgICBrZXk6ICdvcmRlckRldGFpbHMuY2FuY2VsbGF0aW9uQW5kUmV0dXJuLmNhbmNlbFN1Y2Nlc3MnLFxuICAgICAgICBwYXJhbXM6IHsgb3JkZXJDb2RlIH0sXG4gICAgICB9LFxuICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgKTtcbiAgICB0aGlzLnJvdXRpbmcuZ28oe1xuICAgICAgY3hSb3V0ZTogJ29yZGVycycsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==