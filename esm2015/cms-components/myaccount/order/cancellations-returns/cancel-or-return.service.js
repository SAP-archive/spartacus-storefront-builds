/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { formatCurrency, getCurrencySymbol } from '@angular/common';
import { LanguageService, RoutingService, GlobalMessageService, GlobalMessageType, UserOrderService, OrderReturnRequestService, SemanticPathService, } from '@spartacus/core';
import { take } from 'rxjs/operators';
export class OrderCancelOrReturnService {
    /**
     * @param {?} languageService
     * @param {?} routing
     * @param {?} globalMessageService
     * @param {?} userOrderService
     * @param {?} returnRequestService
     * @param {?} semanticPathService
     */
    constructor(languageService, routing, globalMessageService, userOrderService, returnRequestService, semanticPathService) {
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
        value => (this.lang = value)));
        this.routing.getRouterState().subscribe((/**
         * @param {?} state
         * @return {?}
         */
        state => {
            /** @type {?} */
            const current = state.state;
            /** @type {?} */
            const next = state.nextState;
            if (next &&
                next.params['orderCode'] &&
                current &&
                current.params['orderCode']) {
                /** @type {?} */
                const orderCode = next.params['orderCode'];
                if (this.isConfirmationPath(current.url, orderCode) &&
                    this.isCancelOrReturnPath(next.url, orderCode)) {
                    this.keepRequestInputs = true;
                }
            }
        }));
    }
    /**
     * @return {?}
     */
    get isCancelling$() {
        return this.userOrderService.getCancelOrderLoading();
    }
    /**
     * @return {?}
     */
    get isCancelSuccess$() {
        return this.userOrderService.getCancelOrderSuccess();
    }
    /**
     * @return {?}
     */
    get isReturning$() {
        return this.returnRequestService.getReturnRequestLoading();
    }
    /**
     * @return {?}
     */
    get isReturnSuccess$() {
        return this.returnRequestService.getReturnRequestSuccess();
    }
    /**
     * @private
     * @param {?} url
     * @param {?} orderCode
     * @return {?}
     */
    isConfirmationPath(url, orderCode) {
        /** @type {?} */
        const cancelConfirm = this.getPath('orderCancelConfirmation', orderCode);
        /** @type {?} */
        const returnConfirm = this.getPath('orderReturnConfirmation', orderCode);
        return url.endsWith(cancelConfirm) || url.endsWith(returnConfirm);
    }
    /**
     * @private
     * @param {?} url
     * @param {?} orderCode
     * @return {?}
     */
    isCancelOrReturnPath(url, orderCode) {
        /** @type {?} */
        const orderCancel = this.getPath('orderCancel', orderCode);
        /** @type {?} */
        const orderReturn = this.getPath('orderReturn', orderCode);
        return url.endsWith(orderCancel) || url.endsWith(orderReturn);
    }
    /**
     * @private
     * @param {?} routeName
     * @param {?} orderCode
     * @return {?}
     */
    getPath(routeName, orderCode) {
        return this.semanticPathService
            .transform({
            cxRoute: routeName,
            params: { code: orderCode },
        })
            .join('/')
            .slice(1);
    }
    /**
     * @return {?}
     */
    get cancelOrReturnRequestInputs() {
        return this._cancelOrReturnRequestInputs;
    }
    /**
     * @param {?} values
     * @return {?}
     */
    set cancelOrReturnRequestInputs(values) {
        this._cancelOrReturnRequestInputs = values;
    }
    /**
     * @return {?}
     */
    clearCancelOrReturnRequestInputs() {
        if (!this.keepRequestInputs) {
            this._cancelOrReturnRequestInputs = [];
        }
        else {
            this.keepRequestInputs = false;
        }
    }
    /**
     * As discussed, this calculation is moved to SPA side.
     * The calculation and validation should be in backend facade layer.
     * @param {?} entry
     * @return {?}
     */
    getCancelledOrReturnedPrice(entry) {
        /** @type {?} */
        const qty = this.getEntryCancelledOrReturnedQty(entry);
        /** @type {?} */
        const returnedItemsPriceData = Object.assign({}, entry.basePrice);
        returnedItemsPriceData.value =
            Math.round(entry.basePrice.value * qty * 100) / 100;
        returnedItemsPriceData.formattedValue = formatCurrency(returnedItemsPriceData.value, this.lang, getCurrencySymbol(returnedItemsPriceData.currencyIso, 'narrow'), returnedItemsPriceData.currencyIso);
        return returnedItemsPriceData;
    }
    /**
     * @param {?} cxRoute
     * @param {?} orderCode
     * @return {?}
     */
    goToOrderCancelOrReturn(cxRoute, orderCode) {
        this.routing.go({
            cxRoute: cxRoute,
            params: { code: orderCode },
        });
    }
    /**
     * @param {?} orderCode
     * @return {?}
     */
    backToOrder(orderCode) {
        this.routing.go({
            cxRoute: 'orderDetails',
            params: { code: orderCode },
        });
    }
    /**
     * @param {?} entry
     * @return {?}
     */
    isEntryCancelledOrReturned(entry) {
        for (const input of this._cancelOrReturnRequestInputs) {
            if (input.orderEntryNumber === entry.entryNumber) {
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} entry
     * @return {?}
     */
    getEntryCancelledOrReturnedQty(entry) {
        for (const input of this._cancelOrReturnRequestInputs) {
            if (input.orderEntryNumber === entry.entryNumber) {
                return input.quantity;
            }
        }
        return 0;
    }
    /**
     * @param {?} orderCode
     * @return {?}
     */
    cancelOrder(orderCode) {
        this.userOrderService.cancelOrder(orderCode, {
            cancellationRequestEntryInputs: this.cancelOrReturnRequestInputs,
        });
    }
    /**
     * @param {?} orderCode
     * @return {?}
     */
    cancelSuccess(orderCode) {
        this.clearCancelOrReturnRequestInputs();
        this.userOrderService.resetCancelOrderProcessState();
        this.globalMessageService.add({
            key: 'orderDetails.cancellationAndReturn.cancelSuccess',
            params: { orderCode },
        }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        this.routing.go({
            cxRoute: 'orders',
        });
    }
    /**
     * @param {?} orderCode
     * @return {?}
     */
    returnOrder(orderCode) {
        this.returnRequestService.createOrderReturnRequest({
            orderCode,
            returnRequestEntryInputs: this.cancelOrReturnRequestInputs,
        });
    }
    /**
     * @return {?}
     */
    returnSuccess() {
        this.clearCancelOrReturnRequestInputs();
        /** @type {?} */
        let rma;
        this.returnRequestService
            .getOrderReturnRequest()
            .pipe(take(1))
            .subscribe((/**
         * @param {?} returnRequest
         * @return {?}
         */
        returnRequest => (rma = returnRequest.rma)));
        this.globalMessageService.add({
            key: 'orderDetails.cancellationAndReturn.returnSuccess',
            params: { rma },
        }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        this.routing.go({
            cxRoute: 'returnRequestDetails',
            params: { rma },
        });
    }
    /**
     * @return {?}
     */
    clearReturnRequest() {
        this.returnRequestService.clearOrderReturnRequestDetail();
    }
}
OrderCancelOrReturnService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OrderCancelOrReturnService.ctorParameters = () => [
    { type: LanguageService },
    { type: RoutingService },
    { type: GlobalMessageService },
    { type: UserOrderService },
    { type: OrderReturnRequestService },
    { type: SemanticPathService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsLW9yLXJldHVybi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL2NhbmNlbGxhdGlvbnMtcmV0dXJucy9jYW5jZWwtb3ItcmV0dXJuLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BFLE9BQU8sRUFHTCxlQUFlLEVBRWYsY0FBYyxFQUNkLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLHlCQUF5QixFQUN6QixtQkFBbUIsR0FDcEIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHdEMsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7Ozs7O0lBcUJyQyxZQUNZLGVBQWdDLEVBQ2hDLE9BQXVCLEVBQ3ZCLG9CQUEwQyxFQUMxQyxnQkFBa0MsRUFDbEMsb0JBQStDLEVBQy9DLG1CQUF3QztRQUx4QyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBMkI7UUFDL0Msd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQTFCNUMsaUNBQTRCLEdBQXNDLEVBQUUsQ0FBQztRQUNyRSxTQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBMEJoQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVM7Ozs7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LENBQUMsMkJBQTJCO1NBQzNELENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLGdDQUFnQyxFQUFFLENBQUM7O1lBRXBDLEdBQVc7UUFDZixJQUFJLENBQUMsb0JBQW9CO2FBQ3RCLHFCQUFxQixFQUFFO2FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDYixTQUFTOzs7O1FBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQztRQUV6RCxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQjtZQUNFLEdBQUcsRUFBRSxrREFBa0Q7WUFDdkQsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFO1NBQ2hCLEVBQ0QsaUJBQWlCLENBQUMscUJBQXFCLENBQ3hDLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNkLE9BQU8sRUFBRSxzQkFBc0I7WUFDL0IsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFO1NBQ2hCLENBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLDZCQUE2QixFQUFFLENBQUM7SUFDNUQsQ0FBQzs7O1lBdE1GLFVBQVU7Ozs7WUFaVCxlQUFlO1lBRWYsY0FBYztZQUNkLG9CQUFvQjtZQUVwQixnQkFBZ0I7WUFDaEIseUJBQXlCO1lBQ3pCLG1CQUFtQjs7Ozs7OztJQU9uQixrRUFBNkU7Ozs7O0lBQzdFLDBDQUFvQjs7Ozs7SUFDcEIsdURBQWtDOzs7OztJQW1CaEMscURBQTBDOzs7OztJQUMxQyw2Q0FBaUM7Ozs7O0lBQ2pDLDBEQUFvRDs7Ozs7SUFDcEQsc0RBQTRDOzs7OztJQUM1QywwREFBeUQ7Ozs7O0lBQ3pELHlEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5LCBnZXRDdXJyZW5jeVN5bWJvbCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDYW5jZWxPclJldHVyblJlcXVlc3RFbnRyeUlucHV0LFxuICBPcmRlckVudHJ5LFxuICBMYW5ndWFnZVNlcnZpY2UsXG4gIFByaWNlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxuICBVc2VyT3JkZXJTZXJ2aWNlLFxuICBPcmRlclJldHVyblJlcXVlc3RTZXJ2aWNlLFxuICBTZW1hbnRpY1BhdGhTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9yZGVyQ2FuY2VsT3JSZXR1cm5TZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfY2FuY2VsT3JSZXR1cm5SZXF1ZXN0SW5wdXRzOiBDYW5jZWxPclJldHVyblJlcXVlc3RFbnRyeUlucHV0W10gPSBbXTtcbiAgcHJpdmF0ZSBsYW5nID0gJ2VuJztcbiAgcHJpdmF0ZSBrZWVwUmVxdWVzdElucHV0cyA9IGZhbHNlO1xuXG4gIGdldCBpc0NhbmNlbGxpbmckKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnVzZXJPcmRlclNlcnZpY2UuZ2V0Q2FuY2VsT3JkZXJMb2FkaW5nKCk7XG4gIH1cblxuICBnZXQgaXNDYW5jZWxTdWNjZXNzJCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy51c2VyT3JkZXJTZXJ2aWNlLmdldENhbmNlbE9yZGVyU3VjY2VzcygpO1xuICB9XG5cbiAgZ2V0IGlzUmV0dXJuaW5nJCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5SZXF1ZXN0U2VydmljZS5nZXRSZXR1cm5SZXF1ZXN0TG9hZGluZygpO1xuICB9XG5cbiAgZ2V0IGlzUmV0dXJuU3VjY2VzcyQoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMucmV0dXJuUmVxdWVzdFNlcnZpY2UuZ2V0UmV0dXJuUmVxdWVzdFN1Y2Nlc3MoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZzogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgdXNlck9yZGVyU2VydmljZTogVXNlck9yZGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcmV0dXJuUmVxdWVzdFNlcnZpY2U6IE9yZGVyUmV0dXJuUmVxdWVzdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHNlbWFudGljUGF0aFNlcnZpY2U6IFNlbWFudGljUGF0aFNlcnZpY2VcbiAgKSB7XG4gICAgdGhpcy5sYW5ndWFnZVNlcnZpY2UuZ2V0QWN0aXZlKCkuc3Vic2NyaWJlKHZhbHVlID0+ICh0aGlzLmxhbmcgPSB2YWx1ZSkpO1xuXG4gICAgdGhpcy5yb3V0aW5nLmdldFJvdXRlclN0YXRlKCkuc3Vic2NyaWJlKHN0YXRlID0+IHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBzdGF0ZS5zdGF0ZTtcbiAgICAgIGNvbnN0IG5leHQgPSBzdGF0ZS5uZXh0U3RhdGU7XG4gICAgICBpZiAoXG4gICAgICAgIG5leHQgJiZcbiAgICAgICAgbmV4dC5wYXJhbXNbJ29yZGVyQ29kZSddICYmXG4gICAgICAgIGN1cnJlbnQgJiZcbiAgICAgICAgY3VycmVudC5wYXJhbXNbJ29yZGVyQ29kZSddXG4gICAgICApIHtcbiAgICAgICAgY29uc3Qgb3JkZXJDb2RlID0gbmV4dC5wYXJhbXNbJ29yZGVyQ29kZSddO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgdGhpcy5pc0NvbmZpcm1hdGlvblBhdGgoY3VycmVudC51cmwsIG9yZGVyQ29kZSkgJiZcbiAgICAgICAgICB0aGlzLmlzQ2FuY2VsT3JSZXR1cm5QYXRoKG5leHQudXJsLCBvcmRlckNvZGUpXG4gICAgICAgICkge1xuICAgICAgICAgIHRoaXMua2VlcFJlcXVlc3RJbnB1dHMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGlzQ29uZmlybWF0aW9uUGF0aCh1cmwsIG9yZGVyQ29kZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNhbmNlbENvbmZpcm0gPSB0aGlzLmdldFBhdGgoJ29yZGVyQ2FuY2VsQ29uZmlybWF0aW9uJywgb3JkZXJDb2RlKTtcbiAgICBjb25zdCByZXR1cm5Db25maXJtID0gdGhpcy5nZXRQYXRoKCdvcmRlclJldHVybkNvbmZpcm1hdGlvbicsIG9yZGVyQ29kZSk7XG5cbiAgICByZXR1cm4gdXJsLmVuZHNXaXRoKGNhbmNlbENvbmZpcm0pIHx8IHVybC5lbmRzV2l0aChyZXR1cm5Db25maXJtKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNDYW5jZWxPclJldHVyblBhdGgodXJsLCBvcmRlckNvZGUpOiBib29sZWFuIHtcbiAgICBjb25zdCBvcmRlckNhbmNlbCA9IHRoaXMuZ2V0UGF0aCgnb3JkZXJDYW5jZWwnLCBvcmRlckNvZGUpO1xuICAgIGNvbnN0IG9yZGVyUmV0dXJuID0gdGhpcy5nZXRQYXRoKCdvcmRlclJldHVybicsIG9yZGVyQ29kZSk7XG5cbiAgICByZXR1cm4gdXJsLmVuZHNXaXRoKG9yZGVyQ2FuY2VsKSB8fCB1cmwuZW5kc1dpdGgob3JkZXJSZXR1cm4pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYXRoKHJvdXRlTmFtZTogc3RyaW5nLCBvcmRlckNvZGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuc2VtYW50aWNQYXRoU2VydmljZVxuICAgICAgLnRyYW5zZm9ybSh7XG4gICAgICAgIGN4Um91dGU6IHJvdXRlTmFtZSxcbiAgICAgICAgcGFyYW1zOiB7IGNvZGU6IG9yZGVyQ29kZSB9LFxuICAgICAgfSlcbiAgICAgIC5qb2luKCcvJylcbiAgICAgIC5zbGljZSgxKTtcbiAgfVxuXG4gIGdldCBjYW5jZWxPclJldHVyblJlcXVlc3RJbnB1dHMoKTogQ2FuY2VsT3JSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dFtdIHtcbiAgICByZXR1cm4gdGhpcy5fY2FuY2VsT3JSZXR1cm5SZXF1ZXN0SW5wdXRzO1xuICB9XG5cbiAgc2V0IGNhbmNlbE9yUmV0dXJuUmVxdWVzdElucHV0cyh2YWx1ZXM6IENhbmNlbE9yUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXRbXSkge1xuICAgIHRoaXMuX2NhbmNlbE9yUmV0dXJuUmVxdWVzdElucHV0cyA9IHZhbHVlcztcbiAgfVxuXG4gIGNsZWFyQ2FuY2VsT3JSZXR1cm5SZXF1ZXN0SW5wdXRzKCkge1xuICAgIGlmICghdGhpcy5rZWVwUmVxdWVzdElucHV0cykge1xuICAgICAgdGhpcy5fY2FuY2VsT3JSZXR1cm5SZXF1ZXN0SW5wdXRzID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMua2VlcFJlcXVlc3RJbnB1dHMgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQXMgZGlzY3Vzc2VkLCB0aGlzIGNhbGN1bGF0aW9uIGlzIG1vdmVkIHRvIFNQQSBzaWRlLlxuICAgKiBUaGUgY2FsY3VsYXRpb24gYW5kIHZhbGlkYXRpb24gc2hvdWxkIGJlIGluIGJhY2tlbmQgZmFjYWRlIGxheWVyLlxuICAgKi9cbiAgZ2V0Q2FuY2VsbGVkT3JSZXR1cm5lZFByaWNlKGVudHJ5OiBPcmRlckVudHJ5KTogUHJpY2Uge1xuICAgIGNvbnN0IHF0eSA9IHRoaXMuZ2V0RW50cnlDYW5jZWxsZWRPclJldHVybmVkUXR5KGVudHJ5KTtcblxuICAgIGNvbnN0IHJldHVybmVkSXRlbXNQcmljZURhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBlbnRyeS5iYXNlUHJpY2UpO1xuXG4gICAgcmV0dXJuZWRJdGVtc1ByaWNlRGF0YS52YWx1ZSA9XG4gICAgICBNYXRoLnJvdW5kKGVudHJ5LmJhc2VQcmljZS52YWx1ZSAqIHF0eSAqIDEwMCkgLyAxMDA7XG5cbiAgICByZXR1cm5lZEl0ZW1zUHJpY2VEYXRhLmZvcm1hdHRlZFZhbHVlID0gZm9ybWF0Q3VycmVuY3koXG4gICAgICByZXR1cm5lZEl0ZW1zUHJpY2VEYXRhLnZhbHVlLFxuICAgICAgdGhpcy5sYW5nLFxuICAgICAgZ2V0Q3VycmVuY3lTeW1ib2wocmV0dXJuZWRJdGVtc1ByaWNlRGF0YS5jdXJyZW5jeUlzbywgJ25hcnJvdycpLFxuICAgICAgcmV0dXJuZWRJdGVtc1ByaWNlRGF0YS5jdXJyZW5jeUlzb1xuICAgICk7XG5cbiAgICByZXR1cm4gcmV0dXJuZWRJdGVtc1ByaWNlRGF0YTtcbiAgfVxuXG4gIGdvVG9PcmRlckNhbmNlbE9yUmV0dXJuKGN4Um91dGU6IHN0cmluZywgb3JkZXJDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmcuZ28oe1xuICAgICAgY3hSb3V0ZTogY3hSb3V0ZSxcbiAgICAgIHBhcmFtczogeyBjb2RlOiBvcmRlckNvZGUgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGJhY2tUb09yZGVyKG9yZGVyQ29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nLmdvKHtcbiAgICAgIGN4Um91dGU6ICdvcmRlckRldGFpbHMnLFxuICAgICAgcGFyYW1zOiB7IGNvZGU6IG9yZGVyQ29kZSB9LFxuICAgIH0pO1xuICB9XG5cbiAgaXNFbnRyeUNhbmNlbGxlZE9yUmV0dXJuZWQoZW50cnk6IE9yZGVyRW50cnkpOiBib29sZWFuIHtcbiAgICBmb3IgKGNvbnN0IGlucHV0IG9mIHRoaXMuX2NhbmNlbE9yUmV0dXJuUmVxdWVzdElucHV0cykge1xuICAgICAgaWYgKGlucHV0Lm9yZGVyRW50cnlOdW1iZXIgPT09IGVudHJ5LmVudHJ5TnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBnZXRFbnRyeUNhbmNlbGxlZE9yUmV0dXJuZWRRdHkoZW50cnk6IE9yZGVyRW50cnkpOiBudW1iZXIge1xuICAgIGZvciAoY29uc3QgaW5wdXQgb2YgdGhpcy5fY2FuY2VsT3JSZXR1cm5SZXF1ZXN0SW5wdXRzKSB7XG4gICAgICBpZiAoaW5wdXQub3JkZXJFbnRyeU51bWJlciA9PT0gZW50cnkuZW50cnlOdW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0LnF1YW50aXR5O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIGNhbmNlbE9yZGVyKG9yZGVyQ29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy51c2VyT3JkZXJTZXJ2aWNlLmNhbmNlbE9yZGVyKG9yZGVyQ29kZSwge1xuICAgICAgY2FuY2VsbGF0aW9uUmVxdWVzdEVudHJ5SW5wdXRzOiB0aGlzLmNhbmNlbE9yUmV0dXJuUmVxdWVzdElucHV0cyxcbiAgICB9KTtcbiAgfVxuXG4gIGNhbmNlbFN1Y2Nlc3Mob3JkZXJDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyQ2FuY2VsT3JSZXR1cm5SZXF1ZXN0SW5wdXRzKCk7XG4gICAgdGhpcy51c2VyT3JkZXJTZXJ2aWNlLnJlc2V0Q2FuY2VsT3JkZXJQcm9jZXNzU3RhdGUoKTtcbiAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgIHtcbiAgICAgICAga2V5OiAnb3JkZXJEZXRhaWxzLmNhbmNlbGxhdGlvbkFuZFJldHVybi5jYW5jZWxTdWNjZXNzJyxcbiAgICAgICAgcGFyYW1zOiB7IG9yZGVyQ29kZSB9LFxuICAgICAgfSxcbiAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICk7XG4gICAgdGhpcy5yb3V0aW5nLmdvKHtcbiAgICAgIGN4Um91dGU6ICdvcmRlcnMnLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuT3JkZXIob3JkZXJDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJldHVyblJlcXVlc3RTZXJ2aWNlLmNyZWF0ZU9yZGVyUmV0dXJuUmVxdWVzdCh7XG4gICAgICBvcmRlckNvZGUsXG4gICAgICByZXR1cm5SZXF1ZXN0RW50cnlJbnB1dHM6IHRoaXMuY2FuY2VsT3JSZXR1cm5SZXF1ZXN0SW5wdXRzLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuU3VjY2VzcygpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyQ2FuY2VsT3JSZXR1cm5SZXF1ZXN0SW5wdXRzKCk7XG5cbiAgICBsZXQgcm1hOiBzdHJpbmc7XG4gICAgdGhpcy5yZXR1cm5SZXF1ZXN0U2VydmljZVxuICAgICAgLmdldE9yZGVyUmV0dXJuUmVxdWVzdCgpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZShyZXR1cm5SZXF1ZXN0ID0+IChybWEgPSByZXR1cm5SZXF1ZXN0LnJtYSkpO1xuXG4gICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICB7XG4gICAgICAgIGtleTogJ29yZGVyRGV0YWlscy5jYW5jZWxsYXRpb25BbmRSZXR1cm4ucmV0dXJuU3VjY2VzcycsXG4gICAgICAgIHBhcmFtczogeyBybWEgfSxcbiAgICAgIH0sXG4gICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICApO1xuICAgIHRoaXMucm91dGluZy5nbyh7XG4gICAgICBjeFJvdXRlOiAncmV0dXJuUmVxdWVzdERldGFpbHMnLFxuICAgICAgcGFyYW1zOiB7IHJtYSB9LFxuICAgIH0pO1xuICB9XG5cbiAgY2xlYXJSZXR1cm5SZXF1ZXN0KCk6IHZvaWQge1xuICAgIHRoaXMucmV0dXJuUmVxdWVzdFNlcnZpY2UuY2xlYXJPcmRlclJldHVyblJlcXVlc3REZXRhaWwoKTtcbiAgfVxufVxuIl19