/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { formatCurrency, getCurrencySymbol } from '@angular/common';
import { LanguageService, RoutingService, GlobalMessageService, GlobalMessageType, UserOrderService, OrderReturnRequestService, SemanticPathService, } from '@spartacus/core';
import { take } from 'rxjs/operators';
var OrderCancelOrReturnService = /** @class */ (function () {
    function OrderCancelOrReturnService(languageService, routing, globalMessageService, userOrderService, returnRequestService, semanticPathService) {
        var _this = this;
        this.languageService = languageService;
        this.routing = routing;
        this.globalMessageService = globalMessageService;
        this.userOrderService = userOrderService;
        this.returnRequestService = returnRequestService;
        this.semanticPathService = semanticPathService;
        this._cancelOrReturnRequestInputs = [];
        this.lang = 'en';
        this.keepRequestInputs = false;
        this.languageService.getActive().subscribe((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return (_this.lang = value); }));
        this.routing.getRouterState().subscribe((/**
         * @param {?} state
         * @return {?}
         */
        function (state) {
            /** @type {?} */
            var current = state.state;
            /** @type {?} */
            var next = state.nextState;
            if (next &&
                next.params['orderCode'] &&
                current &&
                current.params['orderCode']) {
                /** @type {?} */
                var orderCode = next.params['orderCode'];
                if (_this.isConfirmationPath(current.url, orderCode) &&
                    _this.isCancelOrReturnPath(next.url, orderCode)) {
                    _this.keepRequestInputs = true;
                }
            }
        }));
    }
    Object.defineProperty(OrderCancelOrReturnService.prototype, "isCancelling$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.userOrderService.getCancelOrderLoading();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderCancelOrReturnService.prototype, "isCancelSuccess$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.userOrderService.getCancelOrderSuccess();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderCancelOrReturnService.prototype, "isReturning$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.returnRequestService.getReturnRequestLoading();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderCancelOrReturnService.prototype, "isReturnSuccess$", {
        get: /**
         * @return {?}
         */
        function () {
            return this.returnRequestService.getReturnRequestSuccess();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} url
     * @param {?} orderCode
     * @return {?}
     */
    OrderCancelOrReturnService.prototype.isConfirmationPath = /**
     * @private
     * @param {?} url
     * @param {?} orderCode
     * @return {?}
     */
    function (url, orderCode) {
        /** @type {?} */
        var cancelConfirm = this.getPath('orderCancelConfirmation', orderCode);
        /** @type {?} */
        var returnConfirm = this.getPath('orderReturnConfirmation', orderCode);
        return url.endsWith(cancelConfirm) || url.endsWith(returnConfirm);
    };
    /**
     * @private
     * @param {?} url
     * @param {?} orderCode
     * @return {?}
     */
    OrderCancelOrReturnService.prototype.isCancelOrReturnPath = /**
     * @private
     * @param {?} url
     * @param {?} orderCode
     * @return {?}
     */
    function (url, orderCode) {
        /** @type {?} */
        var orderCancel = this.getPath('orderCancel', orderCode);
        /** @type {?} */
        var orderReturn = this.getPath('orderReturn', orderCode);
        return url.endsWith(orderCancel) || url.endsWith(orderReturn);
    };
    /**
     * @private
     * @param {?} routeName
     * @param {?} orderCode
     * @return {?}
     */
    OrderCancelOrReturnService.prototype.getPath = /**
     * @private
     * @param {?} routeName
     * @param {?} orderCode
     * @return {?}
     */
    function (routeName, orderCode) {
        return this.semanticPathService
            .transform({
            cxRoute: routeName,
            params: { code: orderCode },
        })
            .join('/')
            .slice(1);
    };
    Object.defineProperty(OrderCancelOrReturnService.prototype, "cancelOrReturnRequestInputs", {
        get: /**
         * @return {?}
         */
        function () {
            return this._cancelOrReturnRequestInputs;
        },
        set: /**
         * @param {?} values
         * @return {?}
         */
        function (values) {
            this._cancelOrReturnRequestInputs = values;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OrderCancelOrReturnService.prototype.clearCancelOrReturnRequestInputs = /**
     * @return {?}
     */
    function () {
        if (!this.keepRequestInputs) {
            this._cancelOrReturnRequestInputs = [];
        }
        else {
            this.keepRequestInputs = false;
        }
    };
    /**
     * As discussed, this calculation is moved to SPA side.
     * The calculation and validation should be in backend facade layer.
     */
    /**
     * As discussed, this calculation is moved to SPA side.
     * The calculation and validation should be in backend facade layer.
     * @param {?} entry
     * @return {?}
     */
    OrderCancelOrReturnService.prototype.getCancelledOrReturnedPrice = /**
     * As discussed, this calculation is moved to SPA side.
     * The calculation and validation should be in backend facade layer.
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        /** @type {?} */
        var qty = this.getEntryCancelledOrReturnedQty(entry);
        /** @type {?} */
        var returnedItemsPriceData = Object.assign({}, entry.basePrice);
        returnedItemsPriceData.value =
            Math.round(entry.basePrice.value * qty * 100) / 100;
        returnedItemsPriceData.formattedValue = formatCurrency(returnedItemsPriceData.value, this.lang, getCurrencySymbol(returnedItemsPriceData.currencyIso, 'narrow'), returnedItemsPriceData.currencyIso);
        return returnedItemsPriceData;
    };
    /**
     * @param {?} cxRoute
     * @param {?} orderCode
     * @return {?}
     */
    OrderCancelOrReturnService.prototype.goToOrderCancelOrReturn = /**
     * @param {?} cxRoute
     * @param {?} orderCode
     * @return {?}
     */
    function (cxRoute, orderCode) {
        this.routing.go({
            cxRoute: cxRoute,
            params: { code: orderCode },
        });
    };
    /**
     * @param {?} orderCode
     * @return {?}
     */
    OrderCancelOrReturnService.prototype.backToOrder = /**
     * @param {?} orderCode
     * @return {?}
     */
    function (orderCode) {
        this.routing.go({
            cxRoute: 'orderDetails',
            params: { code: orderCode },
        });
    };
    /**
     * @param {?} entry
     * @return {?}
     */
    OrderCancelOrReturnService.prototype.isEntryCancelledOrReturned = /**
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        var e_1, _a;
        try {
            for (var _b = tslib_1.__values(this._cancelOrReturnRequestInputs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var input = _c.value;
                if (input.orderEntryNumber === entry.entryNumber) {
                    return true;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return false;
    };
    /**
     * @param {?} entry
     * @return {?}
     */
    OrderCancelOrReturnService.prototype.getEntryCancelledOrReturnedQty = /**
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        var e_2, _a;
        try {
            for (var _b = tslib_1.__values(this._cancelOrReturnRequestInputs), _c = _b.next(); !_c.done; _c = _b.next()) {
                var input = _c.value;
                if (input.orderEntryNumber === entry.entryNumber) {
                    return input.quantity;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return 0;
    };
    /**
     * @param {?} orderCode
     * @return {?}
     */
    OrderCancelOrReturnService.prototype.cancelOrder = /**
     * @param {?} orderCode
     * @return {?}
     */
    function (orderCode) {
        this.userOrderService.cancelOrder(orderCode, {
            cancellationRequestEntryInputs: this.cancelOrReturnRequestInputs,
        });
    };
    /**
     * @param {?} orderCode
     * @return {?}
     */
    OrderCancelOrReturnService.prototype.cancelSuccess = /**
     * @param {?} orderCode
     * @return {?}
     */
    function (orderCode) {
        this.clearCancelOrReturnRequestInputs();
        this.userOrderService.resetCancelOrderProcessState();
        this.globalMessageService.add({
            key: 'orderDetails.cancellationAndReturn.cancelSuccess',
            params: { orderCode: orderCode },
        }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        this.routing.go({
            cxRoute: 'orders',
        });
    };
    /**
     * @param {?} orderCode
     * @return {?}
     */
    OrderCancelOrReturnService.prototype.returnOrder = /**
     * @param {?} orderCode
     * @return {?}
     */
    function (orderCode) {
        this.returnRequestService.createOrderReturnRequest({
            orderCode: orderCode,
            returnRequestEntryInputs: this.cancelOrReturnRequestInputs,
        });
    };
    /**
     * @return {?}
     */
    OrderCancelOrReturnService.prototype.returnSuccess = /**
     * @return {?}
     */
    function () {
        this.clearCancelOrReturnRequestInputs();
        /** @type {?} */
        var rma;
        this.returnRequestService
            .getOrderReturnRequest()
            .pipe(take(1))
            .subscribe((/**
         * @param {?} returnRequest
         * @return {?}
         */
        function (returnRequest) { return (rma = returnRequest.rma); }));
        this.globalMessageService.add({
            key: 'orderDetails.cancellationAndReturn.returnSuccess',
            params: { rma: rma },
        }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        this.routing.go({
            cxRoute: 'returnRequestDetails',
            params: { rma: rma },
        });
    };
    /**
     * @return {?}
     */
    OrderCancelOrReturnService.prototype.clearReturnRequest = /**
     * @return {?}
     */
    function () {
        this.returnRequestService.clearOrderReturnRequestDetail();
    };
    OrderCancelOrReturnService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OrderCancelOrReturnService.ctorParameters = function () { return [
        { type: LanguageService },
        { type: RoutingService },
        { type: GlobalMessageService },
        { type: UserOrderService },
        { type: OrderReturnRequestService },
        { type: SemanticPathService }
    ]; };
    return OrderCancelOrReturnService;
}());
export { OrderCancelOrReturnService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OrderCancelOrReturnService.prototype._cancelOrReturnRequestInputs;
    /**
     * @type {?}
     * @private
     */
    OrderCancelOrReturnService.prototype.lang;
    /**
     * @type {?}
     * @private
     */
    OrderCancelOrReturnService.prototype.keepRequestInputs;
    /**
     * @type {?}
     * @protected
     */
    OrderCancelOrReturnService.prototype.languageService;
    /**
     * @type {?}
     * @protected
     */
    OrderCancelOrReturnService.prototype.routing;
    /**
     * @type {?}
     * @protected
     */
    OrderCancelOrReturnService.prototype.globalMessageService;
    /**
     * @type {?}
     * @protected
     */
    OrderCancelOrReturnService.prototype.userOrderService;
    /**
     * @type {?}
     * @protected
     */
    OrderCancelOrReturnService.prototype.returnRequestService;
    /**
     * @type {?}
     * @protected
     */
    OrderCancelOrReturnService.prototype.semanticPathService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsLW9yLXJldHVybi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL2NhbmNlbGxhdGlvbnMtcmV0dXJucy9jYW5jZWwtb3ItcmV0dXJuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRSxPQUFPLEVBR0wsZUFBZSxFQUVmLGNBQWMsRUFDZCxvQkFBb0IsRUFDcEIsaUJBQWlCLEVBQ2pCLGdCQUFnQixFQUNoQix5QkFBeUIsRUFDekIsbUJBQW1CLEdBQ3BCLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRDO0lBc0JFLG9DQUNZLGVBQWdDLEVBQ2hDLE9BQXVCLEVBQ3ZCLG9CQUEwQyxFQUMxQyxnQkFBa0MsRUFDbEMsb0JBQStDLEVBQy9DLG1CQUF3QztRQU5wRCxpQkE0QkM7UUEzQlcsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQTJCO1FBQy9DLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUExQjVDLGlDQUE0QixHQUFzQyxFQUFFLENBQUM7UUFDckUsU0FBSSxHQUFHLElBQUksQ0FBQztRQUNaLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQTBCaEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxL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RCxDQUFDOztnQkF0TUYsVUFBVTs7OztnQkFaVCxlQUFlO2dCQUVmLGNBQWM7Z0JBQ2Qsb0JBQW9CO2dCQUVwQixnQkFBZ0I7Z0JBQ2hCLHlCQUF5QjtnQkFDekIsbUJBQW1COztJQTRNckIsaUNBQUM7Q0FBQSxBQXZNRCxJQXVNQztTQXRNWSwwQkFBMEI7Ozs7OztJQUNyQyxrRUFBNkU7Ozs7O0lBQzdFLDBDQUFvQjs7Ozs7SUFDcEIsdURBQWtDOzs7OztJQW1CaEMscURBQTBDOzs7OztJQUMxQyw2Q0FBaUM7Ozs7O0lBQ2pDLDBEQUFvRDs7Ozs7SUFDcEQsc0RBQTRDOzs7OztJQUM1QywwREFBeUQ7Ozs7O0lBQ3pELHlEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5LCBnZXRDdXJyZW5jeVN5bWJvbCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDYW5jZWxPclJldHVyblJlcXVlc3RFbnRyeUlucHV0LFxuICBPcmRlckVudHJ5LFxuICBMYW5ndWFnZVNlcnZpY2UsXG4gIFByaWNlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBVc2VyT3JkZXJTZXJ2aWNlLFxuICBPcmRlclJldHVyblJlcXVlc3RTZXJ2aWNlLFxuICBTZW1hbnRpY1BhdGhTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9yZGVyQ2FuY2VsT3JSZXR1cm5TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfY2FuY2VsT3JSZXR1cm5SZXF1ZXN0SW5wdXRzOiBDYW5jZWxPclJldHVyblJlcXVlc3RFbnRyeUlucHV0W10gPSBbXTtcbiAgcHJpdmF0ZSBsYW5nID0gJ2VuJztcbiAgcHJpdmF0ZSBrZWVwUmVxdWVzdElucHV0cyA9IGZhbHNlO1xuXG4gIGdldCBpc0NhbmNlbGxpbmckKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnVzZXJPcmRlclNlcnZpY2UuZ2V0Q2FuY2VsT3JkZXJMb2FkaW5nKCk7XG4gIH1cblxuICBnZXQgaXNDYW5jZWxTdWNjZXNzJCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy51c2VyT3JkZXJTZXJ2aWNlLmdldENhbmNlbE9yZGVyU3VjY2VzcygpO1xuICB9XG5cbiAgZ2V0IGlzUmV0dXJuaW5nJCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5SZXF1ZXN0U2VydmljZS5nZXRSZXR1cm5SZXF1ZXN0TG9hZGluZygpO1xuICB9XG5cbiAgZ2V0IGlzUmV0dXJuU3VjY2VzcyQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMucmV0dXJuUmVxdWVzdFNlcnZpY2UuZ2V0UmV0dXJuUmVxdWVzdFN1Y2Nlc3MoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZzogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlck9yZGVyU2VydmljZTogVXNlck9yZGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcmV0dXJuUmVxdWVzdFNlcnZpY2U6IE9yZGVyUmV0dXJuUmVxdWVzdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5sYW5ndWFnZVNlcnZpY2UuZ2V0QWN0aXZlKCkuc3Vic2NyaWJlKHZhbHVlID0+ICh0aGlzLmxhbmcgPSB2YWx1ZSkpO1xuXG4gICAgdGhpcy5yb3V0aW5nLmdldFJvdXRlclN0YXRlKCkuc3Vic2NyaWJlKHN0YXRlID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBzdGF0ZS5zdGF0ZTtcbiAgICAgIGNvbnN0IG5leHQgPSBzdGF0ZS5uZXh0U3RhdGU7XG4gICAgICBpZiAoXG4gICAgICAgIG5leHQgJiZcbiAgICAgICAgbmV4dC5wYXJhbXNbJ29yZGVyQ29kZSddICYmXG4gICAgICAgIGN1cnJlbnQgJiZcbiAgICAgICAgY3VycmVudC5wYXJhbXNbJ29yZGVyQ29kZSddXG4gICAgICApIHtcbiAgICAgICAgY29uc3Qgb3JkZXJDb2RlID0gbmV4dC5wYXJhbXNbJ29yZGVyQ29kZSddO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5pc0NvbmZpcm1hdGlvblBhdGgoY3VycmVudC51cmwsIG9yZGVyQ29kZSkgJiZcbiAgICAgICAgICB0aGlzLmlzQ2FuY2VsT3JSZXR1cm5QYXRoKG5leHQudXJsLCBvcmRlckNvZGUpXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMua2VlcFJlcXVlc3RJbnB1dHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGlzQ29uZmlybWF0aW9uUGF0aCh1cmwsIG9yZGVyQ29kZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNhbmNlbENvbmZpcm0gPSB0aGlzLmdldFBhdGgoJ29yZGVyQ2FuY2VsQ29uZmlybWF0aW9uJywgb3JkZXJDb2RlKTtcbiAgICBjb25zdCByZXR1cm5Db25maXJtID0gdGhpcy5nZXRQYXRoKCdvcmRlclJldHVybkNvbmZpcm1hdGlvbicsIG9yZGVyQ29kZSk7XG5cbiAgICByZXR1cm4gdXJsLmVuZHNXaXRoKGNhbmNlbENvbmZpcm0pIHx8IHVybC5lbmRzV2l0aChyZXR1cm5Db25maXJtKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNDYW5jZWxPclJldHVyblBhdGgodXJsLCBvcmRlckNvZGUpOiBib29sZWFuIHtcbiAgICBjb25zdCBvcmRlckNhbmNlbCA9IHRoaXMuZ2V0UGF0aCgnb3JkZXJDYW5jZWwnLCBvcmRlckNvZGUpO1xuICAgIGNvbnN0IG9yZGVyUmV0dXJuID0gdGhpcy5nZXRQYXRoKCdvcmRlclJldHVybicsIG9yZGVyQ29kZSk7XG5cbiAgICByZXR1cm4gdXJsLmVuZHNXaXRoKG9yZGVyQ2FuY2VsKSB8fCB1cmwuZW5kc1dpdGgob3JkZXJSZXR1cm4pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYXRoKHJvdXRlTmFtZTogc3RyaW5nLCBvcmRlckNvZGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2VtYW50aWNQYXRoU2VydmljZVxuICAgICAgLnRyYW5zZm9ybSh7XG4gICAgICAgIGN4Um91dGU6IHJvdXRlTmFtZSxcbiAgICAgICAgcGFyYW1zOiB7IGNvZGU6IG9yZGVyQ29kZSB9LFxuICAgICAgfSlcbiAgICAgIC5qb2luKCcvJylcbiAgICAgIC5zbGljZSgxKTtcbiAgfVxuXG4gIGdldCBjYW5jZWxPclJldHVyblJlcXVlc3RJbnB1dHMoKTogQ2FuY2VsT3JSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dFtdIHtcbiAgICByZXR1cm4gdGhpcy5fY2FuY2VsT3JSZXR1cm5SZXF1ZXN0SW5wdXRzO1xuICB9XG5cbiAgc2V0IGNhbmNlbE9yUmV0dXJuUmVxdWVzdElucHV0cyh2YWx1ZXM6IENhbmNlbE9yUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXRbXSkge1xuICAgIHRoaXMuX2NhbmNlbE9yUmV0dXJuUmVxdWVzdElucHV0cyA9IHZhbHVlcztcbiAgfVxuXG4gIGNsZWFyQ2FuY2VsT3JSZXR1cm5SZXF1ZXN0SW5wdXRzKCkge1xuICAgIGlmICghdGhpcy5rZWVwUmVxdWVzdElucHV0cykge1xuICAgICAgdGhpcy5fY2FuY2VsT3JSZXR1cm5SZXF1ZXN0SW5wdXRzID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMua2VlcFJlcXVlc3RJbnB1dHMgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXMgZGlzY3Vzc2VkLCB0aGlzIGNhbGN1bGF0aW9uIGlzIG1vdmVkIHRvIFNQQSBzaWRlLlxuICAgKiBUaGUgY2FsY3VsYXRpb24gYW5kIHZhbGlkYXRpb24gc2hvdWxkIGJlIGluIGJhY2tlbmQgZmFjYWRlIGxheWVyLlxuICAgKi9cbiAgZ2V0Q2FuY2VsbGVkT3JSZXR1cm5lZFByaWNlKGVudHJ5OiBPcmRlckVudHJ5KTogUHJpY2Uge1xuICAgIGNvbnN0IHF0eSA9IHRoaXMuZ2V0RW50cnlDYW5jZWxsZWRPclJldHVybmVkUXR5KGVudHJ5KTtcblxuICAgIGNvbnN0IHJldHVybmVkSXRlbXNQcmljZURhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBlbnRyeS5iYXNlUHJpY2UpO1xuXG4gICAgcmV0dXJuZWRJdGVtc1ByaWNlRGF0YS52YWx1ZSA9XG4gICAgICBNYXRoLnJvdW5kKGVudHJ5LmJhc2VQcmljZS52YWx1ZSAqIHF0eSAqIDEwMCkgLyAxMDA7XG5cbiAgICByZXR1cm5lZEl0ZW1zUHJpY2VEYXRhLmZvcm1hdHRlZFZhbHVlID0gZm9ybWF0Q3VycmVuY3koXG4gICAgICByZXR1cm5lZEl0ZW1zUHJpY2VEYXRhLnZhbHVlLFxuICAgICAgdGhpcy5sYW5nLFxuICAgICAgZ2V0Q3VycmVuY3lTeW1ib2wocmV0dXJuZWRJdGVtc1ByaWNlRGF0YS5jdXJyZW5jeUlzbywgJ25hcnJvdycpLFxuICAgICAgcmV0dXJuZWRJdGVtc1ByaWNlRGF0YS5jdXJyZW5jeUlzb1xuICAgICk7XG5cbiAgICByZXR1cm4gcmV0dXJuZWRJdGVtc1ByaWNlRGF0YTtcbiAgfVxuXG4gIGdvVG9PcmRlckNhbmNlbE9yUmV0dXJuKGN4Um91dGU6IHN0cmluZywgb3JkZXJDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmcuZ28oe1xuICAgICAgY3hSb3V0ZTogY3hSb3V0ZSxcbiAgICAgIHBhcmFtczogeyBjb2RlOiBvcmRlckNvZGUgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGJhY2tUb09yZGVyKG9yZGVyQ29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nLmdvKHtcbiAgICAgIGN4Um91dGU6ICdvcmRlckRldGFpbHMnLFxuICAgICAgcGFyYW1zOiB7IGNvZGU6IG9yZGVyQ29kZSB9LFxuICAgIH0pO1xuICB9XG5cbiAgaXNFbnRyeUNhbmNlbGxlZE9yUmV0dXJuZWQoZW50cnk6IE9yZGVyRW50cnkpOiBib29sZWFuIHtcbiAgICBmb3IgKGNvbnN0IGlucHV0IG9mIHRoaXMuX2NhbmNlbE9yUmV0dXJuUmVxdWVzdElucHV0cykge1xuICAgICAgaWYgKGlucHV0Lm9yZGVyRW50cnlOdW1iZXIgPT09IGVudHJ5LmVudHJ5TnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRFbnRyeUNhbmNlbGxlZE9yUmV0dXJuZWRRdHkoZW50cnk6IE9yZGVyRW50cnkpOiBudW1iZXIge1xuICAgIGZvciAoY29uc3QgaW5wdXQgb2YgdGhpcy5fY2FuY2VsT3JSZXR1cm5SZXF1ZXN0SW5wdXRzKSB7XG4gICAgICBpZiAoaW5wdXQub3JkZXJFbnRyeU51bWJlciA9PT0gZW50cnkuZW50cnlOdW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0LnF1YW50aXR5O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGNhbmNlbE9yZGVyKG9yZGVyQ29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy51c2VyT3JkZXJTZXJ2aWNlLmNhbmNlbE9yZGVyKG9yZGVyQ29kZSwge1xuICAgICAgY2FuY2VsbGF0aW9uUmVxdWVzdEVudHJ5SW5wdXRzOiB0aGlzLmNhbmNlbE9yUmV0dXJuUmVxdWVzdElucHV0cyxcbiAgICB9KTtcbiAgfVxuXG4gIGNhbmNlbFN1Y2Nlc3Mob3JkZXJDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyQ2FuY2VsT3JSZXR1cm5SZXF1ZXN0SW5wdXRzKCk7XG4gICAgdGhpcy51c2VyT3JkZXJTZXJ2aWNlLnJlc2V0Q2FuY2VsT3JkZXJQcm9jZXNzU3RhdGUoKTtcbiAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgIHtcbiAgICAgICAga2V5OiAnb3JkZXJEZXRhaWxzLmNhbmNlbGxhdGlvbkFuZFJldHVybi5jYW5jZWxTdWNjZXNzJyxcbiAgICAgICAgcGFyYW1zOiB7IG9yZGVyQ29kZSB9LFxuICAgICAgfSxcbiAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICk7XG4gICAgdGhpcy5yb3V0aW5nLmdvKHtcbiAgICAgIGN4Um91dGU6ICdvcmRlcnMnLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuT3JkZXIob3JkZXJDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJldHVyblJlcXVlc3RTZXJ2aWNlLmNyZWF0ZU9yZGVyUmV0dXJuUmVxdWVzdCh7XG4gICAgICBvcmRlckNvZGUsXG4gICAgICByZXR1cm5SZXF1ZXN0RW50cnlJbnB1dHM6IHRoaXMuY2FuY2VsT3JSZXR1cm5SZXF1ZXN0SW5wdXRzLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuU3VjY2VzcygpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyQ2FuY2VsT3JSZXR1cm5SZXF1ZXN0SW5wdXRzKCk7XG5cbiAgICBsZXQgcm1hOiBzdHJpbmc7XG4gICAgdGhpcy5yZXR1cm5SZXF1ZXN0U2VydmljZVxuICAgICAgLmdldE9yZGVyUmV0dXJuUmVxdWVzdCgpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZShyZXR1cm5SZXF1ZXN0ID0+IChybWEgPSByZXR1cm5SZXF1ZXN0LnJtYSkpO1xuXG4gICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICB7XG4gICAgICAgIGtleTogJ29yZGVyRGV0YWlscy5jYW5jZWxsYXRpb25BbmRSZXR1cm4ucmV0dXJuU3VjY2VzcycsXG4gICAgICAgIHBhcmFtczogeyBybWEgfSxcbiAgICAgIH0sXG4gICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICApO1xuICAgIHRoaXMucm91dGluZy5nbyh7XG4gICAgICBjeFJvdXRlOiAncmV0dXJuUmVxdWVzdERldGFpbHMnLFxuICAgICAgcGFyYW1zOiB7IHJtYSB9LFxuICAgIH0pO1xuICB9XG5cbiAgY2xlYXJSZXR1cm5SZXF1ZXN0KCk6IHZvaWQge1xuICAgIHRoaXMucmV0dXJuUmVxdWVzdFNlcnZpY2UuY2xlYXJPcmRlclJldHVyblJlcXVlc3REZXRhaWwoKTtcbiAgfVxufVxuIl19