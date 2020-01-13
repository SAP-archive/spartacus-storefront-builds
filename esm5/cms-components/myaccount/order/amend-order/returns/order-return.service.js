/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { GlobalMessageService, GlobalMessageType, OrderReturnRequestService, RoutingService, } from '@spartacus/core';
import { filter, first, map } from 'rxjs/operators';
import { OrderDetailsService } from '../../order-details/order-details.service';
import { AmendOrderType } from '../amend-order.model';
import { OrderAmendService } from '../amend-order.service';
import * as i0 from "@angular/core";
import * as i1 from "../../order-details/order-details.service";
import * as i2 from "@spartacus/core";
var OrderReturnService = /** @class */ (function (_super) {
    tslib_1.__extends(OrderReturnService, _super);
    function OrderReturnService(orderDetailsService, returnRequestService, routing, globalMessageService) {
        var _this = _super.call(this, orderDetailsService) || this;
        _this.orderDetailsService = orderDetailsService;
        _this.returnRequestService = returnRequestService;
        _this.routing = routing;
        _this.globalMessageService = globalMessageService;
        _this.amendType = AmendOrderType.RETURN;
        return _this;
    }
    /**
     * @return {?}
     */
    OrderReturnService.prototype.getEntries = /**
     * @return {?}
     */
    function () {
        return this.getOrder().pipe(filter((/**
         * @param {?} order
         * @return {?}
         */
        function (order) { return !!order.entries; })), map((/**
         * @param {?} order
         * @return {?}
         */
        function (order) {
            return order.entries.filter((/**
             * @param {?} entry
             * @return {?}
             */
            function (entry) { return entry.entryNumber !== -1 && entry.returnableQuantity > 0; }));
        })));
    };
    /**
     * @return {?}
     */
    OrderReturnService.prototype.save = /**
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
        this.returnRequestService.createOrderReturnRequest({
            orderCode: orderCode,
            returnRequestEntryInputs: inputs,
        });
        this.returnRequestService
            .getReturnRequestSuccess()
            .pipe(first(Boolean))
            .subscribe((/**
         * @return {?}
         */
        function () { return _this.afterSave(); }));
    };
    /**
     * @private
     * @return {?}
     */
    OrderReturnService.prototype.afterSave = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.returnRequestService
            .getOrderReturnRequest()
            .pipe(first((/**
         * @param {?} r
         * @return {?}
         */
        function (r) { return !!r; })))
            .subscribe((/**
         * @param {?} returnRequest
         * @return {?}
         */
        function (returnRequest) {
            /** @type {?} */
            var rma = returnRequest.rma;
            _this.globalMessageService.add({
                key: 'orderDetails.cancellationAndReturn.returnSuccess',
                params: { rma: rma },
            }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
            _this.routing.go({
                cxRoute: 'returnRequestDetails',
                params: { rma: rma },
            });
        }));
    };
    OrderReturnService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    OrderReturnService.ctorParameters = function () { return [
        { type: OrderDetailsService },
        { type: OrderReturnRequestService },
        { type: RoutingService },
        { type: GlobalMessageService }
    ]; };
    /** @nocollapse */ OrderReturnService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OrderReturnService_Factory() { return new OrderReturnService(i0.ɵɵinject(i1.OrderDetailsService), i0.ɵɵinject(i2.OrderReturnRequestService), i0.ɵɵinject(i2.RoutingService), i0.ɵɵinject(i2.GlobalMessageService)); }, token: OrderReturnService, providedIn: "root" });
    return OrderReturnService;
}(OrderAmendService));
export { OrderReturnService };
if (false) {
    /** @type {?} */
    OrderReturnService.prototype.amendType;
    /**
     * @type {?}
     * @protected
     */
    OrderReturnService.prototype.orderDetailsService;
    /**
     * @type {?}
     * @protected
     */
    OrderReturnService.prototype.returnRequestService;
    /**
     * @type {?}
     * @protected
     */
    OrderReturnService.prototype.routing;
    /**
     * @type {?}
     * @protected
     */
    OrderReturnService.prototype.globalMessageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcmV0dXJuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvYW1lbmQtb3JkZXIvcmV0dXJucy9vcmRlci1yZXR1cm4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUVMLG9CQUFvQixFQUNwQixpQkFBaUIsRUFFakIseUJBQXlCLEVBQ3pCLGNBQWMsR0FDZixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUUzRDtJQUd3Qyw4Q0FBaUI7SUFHdkQsNEJBQ1ksbUJBQXdDLEVBQ3hDLG9CQUErQyxFQUMvQyxPQUF1QixFQUN2QixvQkFBMEM7UUFKdEQsWUFNRSxrQkFBTSxtQkFBbUIsQ0FBQyxTQUMzQjtRQU5XLHlCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUEyQjtRQUMvQyxhQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QiwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBTnRELGVBQVMsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDOztJQVNsQyxDQUFDOzs7O0lBRUQsdUNBQVU7OztJQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUN6QixNQUFNOzs7O1FBQUMsVUFBQSxLQUFLLElB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bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ2FuY2VsT3JSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dCxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBPcmRlckVudHJ5LFxuICBPcmRlclJldHVyblJlcXVlc3RTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgZmlyc3QsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yZGVyRGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMuc2VydmljZSc7XG5pbXBvcnQgeyBBbWVuZE9yZGVyVHlwZSB9IGZyb20gJy4uL2FtZW5kLW9yZGVyLm1vZGVsJztcbmltcG9ydCB7IE9yZGVyQW1lbmRTZXJ2aWNlIH0gZnJvbSAnLi4vYW1lbmQtb3JkZXIuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBPcmRlclJldHVyblNlcnZpY2UgZXh0ZW5kcyBPcmRlckFtZW5kU2VydmljZSB7XG4gIGFtZW5kVHlwZSA9IEFtZW5kT3JkZXJUeXBlLlJFVFVSTjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgb3JkZXJEZXRhaWxzU2VydmljZTogT3JkZXJEZXRhaWxzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcmV0dXJuUmVxdWVzdFNlcnZpY2U6IE9yZGVyUmV0dXJuUmVxdWVzdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmc6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIob3JkZXJEZXRhaWxzU2VydmljZSk7XG4gIH1cblxuICBnZXRFbnRyaWVzKCk6IE9ic2VydmFibGU8T3JkZXJFbnRyeVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0T3JkZXIoKS5waXBlKFxuICAgICAgZmlsdGVyKG9yZGVyID0+ICEhb3JkZXIuZW50cmllcyksXG4gICAgICBtYXAob3JkZXIgPT5cbiAgICAgICAgb3JkZXIuZW50cmllcy5maWx0ZXIoXG4gICAgICAgICAgZW50cnkgPT4gZW50cnkuZW50cnlOdW1iZXIgIT09IC0xICYmIGVudHJ5LnJldHVybmFibGVRdWFudGl0eSA+IDBcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBzYXZlKCk6IHZvaWQge1xuICAgIGNvbnN0IG9yZGVyQ29kZSA9IHRoaXMuZm9ybS52YWx1ZS5vcmRlckNvZGU7XG4gICAgY29uc3QgZW50cmllcyA9IHRoaXMuZm9ybS52YWx1ZS5lbnRyaWVzO1xuICAgIGNvbnN0IGlucHV0czogQ2FuY2VsT3JSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dFtdID0gT2JqZWN0LmtleXMoZW50cmllcylcbiAgICAgIC5maWx0ZXIoZW50cnlOdW1iZXIgPT4gPG51bWJlcj5lbnRyaWVzW2VudHJ5TnVtYmVyXSA+IDApXG4gICAgICAubWFwKFxuICAgICAgICBlbnRyeU51bWJlciA9PlxuICAgICAgICAgICh7XG4gICAgICAgICAgICBvcmRlckVudHJ5TnVtYmVyOiBOdW1iZXIoZW50cnlOdW1iZXIpLFxuICAgICAgICAgICAgcXVhbnRpdHk6IDxudW1iZXI+ZW50cmllc1tlbnRyeU51bWJlcl0sXG4gICAgICAgICAgfSBhcyBDYW5jZWxPclJldHVyblJlcXVlc3RFbnRyeUlucHV0KVxuICAgICAgKTtcblxuICAgIHRoaXMuZm9ybS5yZXNldCgpO1xuXG4gICAgdGhpcy5yZXR1cm5SZXF1ZXN0U2VydmljZS5jcmVhdGVPcmRlclJldHVyblJlcXVlc3Qoe1xuICAgICAgb3JkZXJDb2RlLFxuICAgICAgcmV0dXJuUmVxdWVzdEVudHJ5SW5wdXRzOiBpbnB1dHMsXG4gICAgfSk7XG5cbiAgICB0aGlzLnJldHVyblJlcXVlc3RTZXJ2aWNlXG4gICAgICAuZ2V0UmV0dXJuUmVxdWVzdFN1Y2Nlc3MoKVxuICAgICAgLnBpcGUoZmlyc3QoQm9vbGVhbikpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuYWZ0ZXJTYXZlKCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZnRlclNhdmUoKTogdm9pZCB7XG4gICAgdGhpcy5yZXR1cm5SZXF1ZXN0U2VydmljZVxuICAgICAgLmdldE9yZGVyUmV0dXJuUmVxdWVzdCgpXG4gICAgICAucGlwZShmaXJzdChyID0+ICEhcikpXG4gICAgICAuc3Vic2NyaWJlKHJldHVyblJlcXVlc3QgPT4ge1xuICAgICAgICBjb25zdCBybWEgPSByZXR1cm5SZXF1ZXN0LnJtYTtcbiAgICAgICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiAnb3JkZXJEZXRhaWxzLmNhbmNlbGxhdGlvbkFuZFJldHVybi5yZXR1cm5TdWNjZXNzJyxcbiAgICAgICAgICAgIHBhcmFtczogeyBybWEgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICAgICApO1xuICAgICAgICB0aGlzLnJvdXRpbmcuZ28oe1xuICAgICAgICAgIGN4Um91dGU6ICdyZXR1cm5SZXF1ZXN0RGV0YWlscycsXG4gICAgICAgICAgcGFyYW1zOiB7IHJtYSB9LFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=