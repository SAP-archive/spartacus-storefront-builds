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
        var inputs = Object.keys(entries)
            .filter((/**
         * @param {?} entryNumber
         * @return {?}
         */
        function (entryNumber) { return (/** @type {?} */ (entries[entryNumber])) > 0; }))
            .map((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY2FuY2VsbGF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvYW1lbmQtb3JkZXIvY2FuY2VsbGF0aW9ucy9vcmRlci1jYW5jZWxsYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUVMLG9CQUFvQixFQUNwQixpQkFBaUIsRUFFakIsY0FBYyxFQUNkLGdCQUFnQixHQUNqQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUUzRDtJQUc4QyxvREFBaUI7SUFHN0Qsa0NBQ1ksbUJBQXdDLEVBQ3hDLGdCQUFrQyxFQUNsQyxPQUF1QixFQUN2QixvQkFBMEM7UUFKdEQsWUFNRSxrQkFBTSxtQkFBbUIsQ0FBQyxTQUMzQjtRQU5XLHlCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsc0JBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxhQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QiwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBTnRELGVBQVMsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDOztJQVNsQyxDQUFDO0lBQ0Q7O09BRUc7Ozs7O0lBQ0gsNkNBQVU7Ozs7SUFBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FDekIsTUFBTTs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFkLENBQWMsRUFBQyxFQUMvQixHQUFHOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ1AsT0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU07Ozs7WUFDbEIsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLEVBQXpELENBQXlELEVBQ25FO1FBRkQsQ0FFQyxFQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCx1Q0FBSTs7O0lBQUo7UUFBQSxpQkF1QkM7O1lBdEJPLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTOztZQUNyQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzs7WUFDakMsTUFBTSxHQUFzQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNuRSxNQUFNOzs7O1FBQUMsVUFBQSxXQUFXLElBQUksT0FBQSxtQkFBUSxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUEsR0FBRyxDQUFDLEVBQWhDLENBQWdDLEVBQUM7YUFDdkQsR0FBRzs7OztRQUNGLFVBQUEsV0FBVztZQUNULE9BQUEsQ0FBQyxtQkFBQTtnQkFDQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDO2dCQUNyQyxRQUFRLEVBQUUsbUJBQVEsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFBO2FBQ3ZDLEVBQW1DLENBQUM7UUFIckMsQ0FHcUMsRUFDeEM7UUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWxCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO1lBQzNDLDhCQUE4QixFQUFFLE1BQU07U0FDdkMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGdCQUFnQjthQUNsQixxQkFBcUIsRUFBRTthQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3BCLFNBQVM7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUF6QixDQUF5QixFQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7O0lBRU8sNENBQVM7Ozs7O0lBQWpCLFVBQWtCLFNBQWlCO1FBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1FBQ3JELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCO1lBQ0UsR0FBRyxFQUFFLGtEQUFrRDtZQUN2RCxNQUFNLEVBQUUsRUFBRSxTQUFTLFdBQUEsRUFBRTtTQUN0QixFQUNELGlCQUFpQixDQUFDLHFCQUFxQixDQUN4QyxDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDZCxPQUFPLEVBQUUsUUFBUTtTQUNsQixDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFqRUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFOUSxtQkFBbUI7Z0JBSjFCLGdCQUFnQjtnQkFEaEIsY0FBYztnQkFIZCxvQkFBb0I7OzttQ0FIdEI7Q0FpRkMsQUFsRUQsQ0FHOEMsaUJBQWlCLEdBK0Q5RDtTQS9EWSx3QkFBd0I7OztJQUNuQyw2Q0FBa0M7Ozs7O0lBR2hDLHVEQUFrRDs7Ozs7SUFDbEQsb0RBQTRDOzs7OztJQUM1QywyQ0FBaUM7Ozs7O0lBQ2pDLHdEQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENhbmNlbE9yUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXQsXG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbiAgT3JkZXJFbnRyeSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFVzZXJPcmRlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIGZpcnN0LCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPcmRlckRldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQW1lbmRPcmRlclR5cGUgfSBmcm9tICcuLi9hbWVuZC1vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlckFtZW5kU2VydmljZSB9IGZyb20gJy4uL2FtZW5kLW9yZGVyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJDYW5jZWxsYXRpb25TZXJ2aWNlIGV4dGVuZHMgT3JkZXJBbWVuZFNlcnZpY2Uge1xuICBhbWVuZFR5cGUgPSBBbWVuZE9yZGVyVHlwZS5DQU5DRUw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIG9yZGVyRGV0YWlsc1NlcnZpY2U6IE9yZGVyRGV0YWlsc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHVzZXJPcmRlclNlcnZpY2U6IFVzZXJPcmRlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmc6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIob3JkZXJEZXRhaWxzU2VydmljZSk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiBjYW5jZWxsYWJsZSBvcmRlciBlbnRyaWVzLlxuICAgKi9cbiAgZ2V0RW50cmllcygpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT4ge1xuICAgIHJldHVybiB0aGlzLmdldE9yZGVyKCkucGlwZShcbiAgICAgIGZpbHRlcihvcmRlciA9PiBCb29sZWFuKG9yZGVyKSksXG4gICAgICBtYXAob3JkZXIgPT5cbiAgICAgICAgb3JkZXIuZW50cmllcy5maWx0ZXIoXG4gICAgICAgICAgZW50cnkgPT4gZW50cnkuZW50cnlOdW1iZXIgIT09IC0xICYmIGVudHJ5LmNhbmNlbGxhYmxlUXVhbnRpdHkgPiAwXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgc2F2ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBvcmRlckNvZGUgPSB0aGlzLmZvcm0udmFsdWUub3JkZXJDb2RlO1xuICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLmZvcm0udmFsdWUuZW50cmllcztcbiAgICBjb25zdCBpbnB1dHM6IENhbmNlbE9yUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXRbXSA9IE9iamVjdC5rZXlzKGVudHJpZXMpXG4gICAgICAuZmlsdGVyKGVudHJ5TnVtYmVyID0+IDxudW1iZXI+ZW50cmllc1tlbnRyeU51bWJlcl0gPiAwKVxuICAgICAgLm1hcChcbiAgICAgICAgZW50cnlOdW1iZXIgPT5cbiAgICAgICAgICAoe1xuICAgICAgICAgICAgb3JkZXJFbnRyeU51bWJlcjogTnVtYmVyKGVudHJ5TnVtYmVyKSxcbiAgICAgICAgICAgIHF1YW50aXR5OiA8bnVtYmVyPmVudHJpZXNbZW50cnlOdW1iZXJdLFxuICAgICAgICAgIH0gYXMgQ2FuY2VsT3JSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dClcbiAgICAgICk7XG5cbiAgICB0aGlzLmZvcm0ucmVzZXQoKTtcblxuICAgIHRoaXMudXNlck9yZGVyU2VydmljZS5jYW5jZWxPcmRlcihvcmRlckNvZGUsIHtcbiAgICAgIGNhbmNlbGxhdGlvblJlcXVlc3RFbnRyeUlucHV0czogaW5wdXRzLFxuICAgIH0pO1xuXG4gICAgdGhpcy51c2VyT3JkZXJTZXJ2aWNlXG4gICAgICAuZ2V0Q2FuY2VsT3JkZXJTdWNjZXNzKClcbiAgICAgIC5waXBlKGZpcnN0KEJvb2xlYW4pKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmFmdGVyU2F2ZShvcmRlckNvZGUpKTtcbiAgfVxuXG4gIHByaXZhdGUgYWZ0ZXJTYXZlKG9yZGVyQ29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy51c2VyT3JkZXJTZXJ2aWNlLnJlc2V0Q2FuY2VsT3JkZXJQcm9jZXNzU3RhdGUoKTtcbiAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgIHtcbiAgICAgICAga2V5OiAnb3JkZXJEZXRhaWxzLmNhbmNlbGxhdGlvbkFuZFJldHVybi5jYW5jZWxTdWNjZXNzJyxcbiAgICAgICAgcGFyYW1zOiB7IG9yZGVyQ29kZSB9LFxuICAgICAgfSxcbiAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICk7XG4gICAgdGhpcy5yb3V0aW5nLmdvKHtcbiAgICAgIGN4Um91dGU6ICdvcmRlcnMnLFxuICAgIH0pO1xuICB9XG59XG4iXX0=