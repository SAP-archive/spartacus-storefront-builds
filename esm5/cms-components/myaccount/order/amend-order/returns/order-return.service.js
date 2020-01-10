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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcmV0dXJuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvYW1lbmQtb3JkZXIvcmV0dXJucy9vcmRlci1yZXR1cm4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUVMLG9CQUFvQixFQUNwQixpQkFBaUIsRUFFakIseUJBQXlCLEVBQ3pCLGNBQWMsR0FDZixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUUzRDtJQUd3Qyw4Q0FBaUI7SUFHdkQsNEJBQ1ksbUJBQXdDLEVBQ3hDLG9CQUErQyxFQUMvQyxPQUF1QixFQUN2QixvQkFBMEM7UUFKdEQsWUFNRSxrQkFBTSxtQkFBbUIsQ0FBQyxTQUMzQjtRQU5XLHlCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUEyQjtRQUMvQyxhQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QiwwQkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBTnRELGVBQVMsR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDOztJQVNsQyxDQUFDOzs7O0lBRUQsdUNBQVU7OztJQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUN6QixNQUFNOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBZixDQUFlLEVBQUMsRUFDaEMsR0FBRzs7OztRQUFDLFVBQUEsS0FBSztZQUNQLE9BQUEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O1lBQ2xCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLFdBQVcsS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxFQUF4RCxDQUF3RCxFQUNsRTtRQUZELENBRUMsRUFDRixDQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsaUNBQUk7OztJQUFKO1FBQUEsaUJBc0JDOztZQXJCTyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUzs7WUFDckMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU87O1lBQ2pDLE1BQU0sR0FBc0MsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHOzs7O1FBQ3hFLFVBQUEsV0FBVztZQUNULE9BQUEsQ0FBQyxtQkFBQTtnQkFDQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDO2dCQUNyQyxRQUFRLEVBQUUsbUJBQVEsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFBO2FBQ3ZDLEVBQW1DLENBQUM7UUFIckMsQ0FHcUMsRUFDeEM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWxCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyx3QkFBd0IsQ0FBQztZQUNqRCxTQUFTLFdBQUE7WUFDVCx3QkFBd0IsRUFBRSxNQUFNO1NBQ2pDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxvQkFBb0I7YUFDdEIsdUJBQXVCLEVBQUU7YUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNwQixTQUFTOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLFNBQVMsRUFBRSxFQUFoQixDQUFnQixFQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFTyxzQ0FBUzs7OztJQUFqQjtRQUFBLGlCQWtCQztRQWpCQyxJQUFJLENBQUMsb0JBQW9CO2FBQ3RCLHFCQUFxQixFQUFFO2FBQ3ZCLElBQUksQ0FBQyxLQUFLOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsQ0FBQyxFQUFILENBQUcsRUFBQyxDQUFDO2FBQ3JCLFNBQVM7Ozs7UUFBQyxVQUFBLGFBQWE7O2dCQUNoQixHQUFHLEdBQUcsYUFBYSxDQUFDLEdBQUc7WUFDN0IsS0FBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0I7Z0JBQ0UsR0FBRyxFQUFFLGtEQUFrRDtnQkFDdkQsTUFBTSxFQUFFLEVBQUUsR0FBRyxLQUFBLEVBQUU7YUFDaEIsRUFDRCxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FDeEMsQ0FBQztZQUNGLEtBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUNkLE9BQU8sRUFBRSxzQkFBc0I7Z0JBQy9CLE1BQU0sRUFBRSxFQUFFLEdBQUcsS0FBQSxFQUFFO2FBQ2hCLENBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Z0JBcEVGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTlEsbUJBQW1CO2dCQUwxQix5QkFBeUI7Z0JBQ3pCLGNBQWM7Z0JBSmQsb0JBQW9COzs7NkJBSHRCO0NBb0ZDLEFBckVELENBR3dDLGlCQUFpQixHQWtFeEQ7U0FsRVksa0JBQWtCOzs7SUFDN0IsdUNBQWtDOzs7OztJQUdoQyxpREFBa0Q7Ozs7O0lBQ2xELGtEQUF5RDs7Ozs7SUFDekQscUNBQWlDOzs7OztJQUNqQyxrREFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDYW5jZWxPclJldHVyblJlcXVlc3RFbnRyeUlucHV0LFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIE9yZGVyRW50cnksXG4gIE9yZGVyUmV0dXJuUmVxdWVzdFNlcnZpY2UsXG4gIFJvdXRpbmdTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBmaXJzdCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxzU2VydmljZSB9IGZyb20gJy4uLy4uL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5zZXJ2aWNlJztcbmltcG9ydCB7IEFtZW5kT3JkZXJUeXBlIH0gZnJvbSAnLi4vYW1lbmQtb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJBbWVuZFNlcnZpY2UgfSBmcm9tICcuLi9hbWVuZC1vcmRlci5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyUmV0dXJuU2VydmljZSBleHRlbmRzIE9yZGVyQW1lbmRTZXJ2aWNlIHtcbiAgYW1lbmRUeXBlID0gQW1lbmRPcmRlclR5cGUuUkVUVVJOO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByZXR1cm5SZXF1ZXN0U2VydmljZTogT3JkZXJSZXR1cm5SZXF1ZXN0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZzogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZVxuICApIHtcbiAgICBzdXBlcihvcmRlckRldGFpbHNTZXJ2aWNlKTtcbiAgfVxuXG4gIGdldEVudHJpZXMoKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRPcmRlcigpLnBpcGUoXG4gICAgICBmaWx0ZXIob3JkZXIgPT4gISFvcmRlci5lbnRyaWVzKSxcbiAgICAgIG1hcChvcmRlciA9PlxuICAgICAgICBvcmRlci5lbnRyaWVzLmZpbHRlcihcbiAgICAgICAgICBlbnRyeSA9PiBlbnRyeS5lbnRyeU51bWJlciAhPT0gLTEgJiYgZW50cnkucmV0dXJuYWJsZVF1YW50aXR5ID4gMFxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHNhdmUoKTogdm9pZCB7XG4gICAgY29uc3Qgb3JkZXJDb2RlID0gdGhpcy5mb3JtLnZhbHVlLm9yZGVyQ29kZTtcbiAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5mb3JtLnZhbHVlLmVudHJpZXM7XG4gICAgY29uc3QgaW5wdXRzOiBDYW5jZWxPclJldHVyblJlcXVlc3RFbnRyeUlucHV0W10gPSBPYmplY3Qua2V5cyhlbnRyaWVzKS5tYXAoXG4gICAgICBlbnRyeU51bWJlciA9PlxuICAgICAgICAoe1xuICAgICAgICAgIG9yZGVyRW50cnlOdW1iZXI6IE51bWJlcihlbnRyeU51bWJlciksXG4gICAgICAgICAgcXVhbnRpdHk6IDxudW1iZXI+ZW50cmllc1tlbnRyeU51bWJlcl0sXG4gICAgICAgIH0gYXMgQ2FuY2VsT3JSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dClcbiAgICApO1xuXG4gICAgdGhpcy5mb3JtLnJlc2V0KCk7XG5cbiAgICB0aGlzLnJldHVyblJlcXVlc3RTZXJ2aWNlLmNyZWF0ZU9yZGVyUmV0dXJuUmVxdWVzdCh7XG4gICAgICBvcmRlckNvZGUsXG4gICAgICByZXR1cm5SZXF1ZXN0RW50cnlJbnB1dHM6IGlucHV0cyxcbiAgICB9KTtcblxuICAgIHRoaXMucmV0dXJuUmVxdWVzdFNlcnZpY2VcbiAgICAgIC5nZXRSZXR1cm5SZXF1ZXN0U3VjY2VzcygpXG4gICAgICAucGlwZShmaXJzdChCb29sZWFuKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5hZnRlclNhdmUoKSk7XG4gIH1cblxuICBwcml2YXRlIGFmdGVyU2F2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnJldHVyblJlcXVlc3RTZXJ2aWNlXG4gICAgICAuZ2V0T3JkZXJSZXR1cm5SZXF1ZXN0KClcbiAgICAgIC5waXBlKGZpcnN0KHIgPT4gISFyKSlcbiAgICAgIC5zdWJzY3JpYmUocmV0dXJuUmVxdWVzdCA9PiB7XG4gICAgICAgIGNvbnN0IHJtYSA9IHJldHVyblJlcXVlc3Qucm1hO1xuICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6ICdvcmRlckRldGFpbHMuY2FuY2VsbGF0aW9uQW5kUmV0dXJuLnJldHVyblN1Y2Nlc3MnLFxuICAgICAgICAgICAgcGFyYW1zOiB7IHJtYSB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucm91dGluZy5nbyh7XG4gICAgICAgICAgY3hSb3V0ZTogJ3JldHVyblJlcXVlc3REZXRhaWxzJyxcbiAgICAgICAgICBwYXJhbXM6IHsgcm1hIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==