/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { GlobalMessageService, GlobalMessageType, RoutingService, UserOrderService, } from '@spartacus/core';
import { filter, first, map } from 'rxjs/operators';
import { OrderDetailsService } from '../../order-details/order-details.service';
import { AmendOrderType } from '../amend-order.model';
import { OrderAmendService } from '../amend-order.service';
import * as i0 from "@angular/core";
import * as i1 from "../../order-details/order-details.service";
import * as i2 from "@spartacus/core";
export class OrderCancellationService extends OrderAmendService {
    /**
     * @param {?} orderDetailsService
     * @param {?} userOrderService
     * @param {?} routing
     * @param {?} globalMessageService
     */
    constructor(orderDetailsService, userOrderService, routing, globalMessageService) {
        super(orderDetailsService);
        this.orderDetailsService = orderDetailsService;
        this.userOrderService = userOrderService;
        this.routing = routing;
        this.globalMessageService = globalMessageService;
        this.amendType = AmendOrderType.CANCEL;
    }
    /**
     * Return cancellable order entries.
     * @return {?}
     */
    getEntries() {
        return this.getOrder().pipe(filter((/**
         * @param {?} order
         * @return {?}
         */
        order => Boolean(order))), map((/**
         * @param {?} order
         * @return {?}
         */
        order => order.entries.filter((/**
         * @param {?} entry
         * @return {?}
         */
        entry => entry.entryNumber !== -1 && entry.cancellableQuantity > 0)))));
    }
    /**
     * @return {?}
     */
    save() {
        /** @type {?} */
        const orderCode = this.form.value.orderCode;
        /** @type {?} */
        const entries = this.form.value.entries;
        /** @type {?} */
        const inputs = Object.keys(entries)
            .filter((/**
         * @param {?} entryNumber
         * @return {?}
         */
        entryNumber => (/** @type {?} */ (entries[entryNumber])) > 0))
            .map((/**
         * @param {?} entryNumber
         * @return {?}
         */
        entryNumber => ((/** @type {?} */ ({
            orderEntryNumber: Number(entryNumber),
            quantity: (/** @type {?} */ (entries[entryNumber])),
        })))));
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
        () => this.afterSave(orderCode)));
    }
    /**
     * @private
     * @param {?} orderCode
     * @return {?}
     */
    afterSave(orderCode) {
        this.userOrderService.resetCancelOrderProcessState();
        this.globalMessageService.add({
            key: 'orderDetails.cancellationAndReturn.cancelSuccess',
            params: { orderCode },
        }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
        this.routing.go({
            cxRoute: 'orders',
        });
    }
}
OrderCancellationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
OrderCancellationService.ctorParameters = () => [
    { type: OrderDetailsService },
    { type: UserOrderService },
    { type: RoutingService },
    { type: GlobalMessageService }
];
/** @nocollapse */ OrderCancellationService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OrderCancellationService_Factory() { return new OrderCancellationService(i0.ɵɵinject(i1.OrderDetailsService), i0.ɵɵinject(i2.UserOrderService), i0.ɵɵinject(i2.RoutingService), i0.ɵɵinject(i2.GlobalMessageService)); }, token: OrderCancellationService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY2FuY2VsbGF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvYW1lbmQtb3JkZXIvY2FuY2VsbGF0aW9ucy9vcmRlci1jYW5jZWxsYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBRUwsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUVqQixjQUFjLEVBQ2QsZ0JBQWdCLEdBQ2pCLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBSzNELE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxpQkFBaUI7Ozs7Ozs7SUFHN0QsWUFDWSxtQkFBd0MsRUFDeEMsZ0JBQWtDLEVBQ2xDLE9BQXVCLEVBQ3ZCLG9CQUEwQztRQUVwRCxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUxqQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQU50RCxjQUFTLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQztJQVNsQyxDQUFDOzs7OztJQUlELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQ3pCLE1BQU07Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBQyxFQUMvQixHQUFHOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDVixLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU07Ozs7UUFDbEIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLEVBQ25FLEVBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELElBQUk7O2NBQ0ksU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7O2NBQ3JDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOztjQUNqQyxNQUFNLEdBQXNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO2FBQ25FLE1BQU07Ozs7UUFBQyxXQUFXLENBQUMsRUFBRSxDQUFDLG1CQUFRLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBQSxHQUFHLENBQUMsRUFBQzthQUN2RCxHQUFHOzs7O1FBQ0YsV0FBVyxDQUFDLEVBQUUsQ0FDWixDQUFDLG1CQUFBO1lBQ0MsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQztZQUNyQyxRQUFRLEVBQUUsbUJBQVEsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFBO1NBQ3ZDLEVBQW1DLENBQUMsRUFDeEM7UUFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWxCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO1lBQzNDLDhCQUE4QixFQUFFLE1BQU07U0FDdkMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGdCQUFnQjthQUNsQixxQkFBcUIsRUFBRTthQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3BCLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQztJQUNoRCxDQUFDOzs7Ozs7SUFFTyxTQUFTLENBQUMsU0FBaUI7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLDRCQUE0QixFQUFFLENBQUM7UUFDckQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0I7WUFDRSxHQUFHLEVBQUUsa0RBQWtEO1lBQ3ZELE1BQU0sRUFBRSxFQUFFLFNBQVMsRUFBRTtTQUN0QixFQUNELGlCQUFpQixDQUFDLHFCQUFxQixDQUN4QyxDQUFDO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDZCxPQUFPLEVBQUUsUUFBUTtTQUNsQixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFqRUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTlEsbUJBQW1CO1lBSjFCLGdCQUFnQjtZQURoQixjQUFjO1lBSGQsb0JBQW9COzs7OztJQWdCcEIsNkNBQWtDOzs7OztJQUdoQyx1REFBa0Q7Ozs7O0lBQ2xELG9EQUE0Qzs7Ozs7SUFDNUMsMkNBQWlDOzs7OztJQUNqQyx3REFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDYW5jZWxPclJldHVyblJlcXVlc3RFbnRyeUlucHV0LFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIE9yZGVyRW50cnksXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBVc2VyT3JkZXJTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBmaXJzdCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxzU2VydmljZSB9IGZyb20gJy4uLy4uL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5zZXJ2aWNlJztcbmltcG9ydCB7IEFtZW5kT3JkZXJUeXBlIH0gZnJvbSAnLi4vYW1lbmQtb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJBbWVuZFNlcnZpY2UgfSBmcm9tICcuLi9hbWVuZC1vcmRlci5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyQ2FuY2VsbGF0aW9uU2VydmljZSBleHRlbmRzIE9yZGVyQW1lbmRTZXJ2aWNlIHtcbiAgYW1lbmRUeXBlID0gQW1lbmRPcmRlclR5cGUuQ0FOQ0VMO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB1c2VyT3JkZXJTZXJ2aWNlOiBVc2VyT3JkZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKG9yZGVyRGV0YWlsc1NlcnZpY2UpO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm4gY2FuY2VsbGFibGUgb3JkZXIgZW50cmllcy5cbiAgICovXG4gIGdldEVudHJpZXMoKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRPcmRlcigpLnBpcGUoXG4gICAgICBmaWx0ZXIob3JkZXIgPT4gQm9vbGVhbihvcmRlcikpLFxuICAgICAgbWFwKG9yZGVyID0+XG4gICAgICAgIG9yZGVyLmVudHJpZXMuZmlsdGVyKFxuICAgICAgICAgIGVudHJ5ID0+IGVudHJ5LmVudHJ5TnVtYmVyICE9PSAtMSAmJiBlbnRyeS5jYW5jZWxsYWJsZVF1YW50aXR5ID4gMFxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHNhdmUoKTogdm9pZCB7XG4gICAgY29uc3Qgb3JkZXJDb2RlID0gdGhpcy5mb3JtLnZhbHVlLm9yZGVyQ29kZTtcbiAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5mb3JtLnZhbHVlLmVudHJpZXM7XG4gICAgY29uc3QgaW5wdXRzOiBDYW5jZWxPclJldHVyblJlcXVlc3RFbnRyeUlucHV0W10gPSBPYmplY3Qua2V5cyhlbnRyaWVzKVxuICAgICAgLmZpbHRlcihlbnRyeU51bWJlciA9PiA8bnVtYmVyPmVudHJpZXNbZW50cnlOdW1iZXJdID4gMClcbiAgICAgIC5tYXAoXG4gICAgICAgIGVudHJ5TnVtYmVyID0+XG4gICAgICAgICAgKHtcbiAgICAgICAgICAgIG9yZGVyRW50cnlOdW1iZXI6IE51bWJlcihlbnRyeU51bWJlciksXG4gICAgICAgICAgICBxdWFudGl0eTogPG51bWJlcj5lbnRyaWVzW2VudHJ5TnVtYmVyXSxcbiAgICAgICAgICB9IGFzIENhbmNlbE9yUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXQpXG4gICAgICApO1xuXG4gICAgdGhpcy5mb3JtLnJlc2V0KCk7XG5cbiAgICB0aGlzLnVzZXJPcmRlclNlcnZpY2UuY2FuY2VsT3JkZXIob3JkZXJDb2RlLCB7XG4gICAgICBjYW5jZWxsYXRpb25SZXF1ZXN0RW50cnlJbnB1dHM6IGlucHV0cyxcbiAgICB9KTtcblxuICAgIHRoaXMudXNlck9yZGVyU2VydmljZVxuICAgICAgLmdldENhbmNlbE9yZGVyU3VjY2VzcygpXG4gICAgICAucGlwZShmaXJzdChCb29sZWFuKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5hZnRlclNhdmUob3JkZXJDb2RlKSk7XG4gIH1cblxuICBwcml2YXRlIGFmdGVyU2F2ZShvcmRlckNvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMudXNlck9yZGVyU2VydmljZS5yZXNldENhbmNlbE9yZGVyUHJvY2Vzc1N0YXRlKCk7XG4gICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICB7XG4gICAgICAgIGtleTogJ29yZGVyRGV0YWlscy5jYW5jZWxsYXRpb25BbmRSZXR1cm4uY2FuY2VsU3VjY2VzcycsXG4gICAgICAgIHBhcmFtczogeyBvcmRlckNvZGUgfSxcbiAgICAgIH0sXG4gICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICApO1xuICAgIHRoaXMucm91dGluZy5nbyh7XG4gICAgICBjeFJvdXRlOiAnb3JkZXJzJyxcbiAgICB9KTtcbiAgfVxufVxuIl19