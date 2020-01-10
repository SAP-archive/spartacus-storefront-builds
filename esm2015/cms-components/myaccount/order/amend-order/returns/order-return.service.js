/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { GlobalMessageService, GlobalMessageType, OrderReturnRequestService, RoutingService, } from '@spartacus/core';
import { filter, first, map } from 'rxjs/operators';
import { OrderDetailsService } from '../../order-details/order-details.service';
import { AmendOrderType } from '../amend-order.model';
import { OrderAmendService } from '../amend-order.service';
import * as i0 from "@angular/core";
import * as i1 from "../../order-details/order-details.service";
import * as i2 from "@spartacus/core";
export class OrderReturnService extends OrderAmendService {
    /**
     * @param {?} orderDetailsService
     * @param {?} returnRequestService
     * @param {?} routing
     * @param {?} globalMessageService
     */
    constructor(orderDetailsService, returnRequestService, routing, globalMessageService) {
        super(orderDetailsService);
        this.orderDetailsService = orderDetailsService;
        this.returnRequestService = returnRequestService;
        this.routing = routing;
        this.globalMessageService = globalMessageService;
        this.amendType = AmendOrderType.RETURN;
    }
    /**
     * @return {?}
     */
    getEntries() {
        return this.getOrder().pipe(filter((/**
         * @param {?} order
         * @return {?}
         */
        order => !!order.entries)), map((/**
         * @param {?} order
         * @return {?}
         */
        order => order.entries.filter((/**
         * @param {?} entry
         * @return {?}
         */
        entry => entry.entryNumber !== -1 && entry.returnableQuantity > 0)))));
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
        const inputs = Object.keys(entries).map((/**
         * @param {?} entryNumber
         * @return {?}
         */
        entryNumber => ((/** @type {?} */ ({
            orderEntryNumber: Number(entryNumber),
            quantity: (/** @type {?} */ (entries[entryNumber])),
        })))));
        this.form.reset();
        this.returnRequestService.createOrderReturnRequest({
            orderCode,
            returnRequestEntryInputs: inputs,
        });
        this.returnRequestService
            .getReturnRequestSuccess()
            .pipe(first(Boolean))
            .subscribe((/**
         * @return {?}
         */
        () => this.afterSave()));
    }
    /**
     * @private
     * @return {?}
     */
    afterSave() {
        this.returnRequestService
            .getOrderReturnRequest()
            .pipe(first((/**
         * @param {?} r
         * @return {?}
         */
        r => !!r)))
            .subscribe((/**
         * @param {?} returnRequest
         * @return {?}
         */
        returnRequest => {
            /** @type {?} */
            const rma = returnRequest.rma;
            this.globalMessageService.add({
                key: 'orderDetails.cancellationAndReturn.returnSuccess',
                params: { rma },
            }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
            this.routing.go({
                cxRoute: 'returnRequestDetails',
                params: { rma },
            });
        }));
    }
}
OrderReturnService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
OrderReturnService.ctorParameters = () => [
    { type: OrderDetailsService },
    { type: OrderReturnRequestService },
    { type: RoutingService },
    { type: GlobalMessageService }
];
/** @nocollapse */ OrderReturnService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OrderReturnService_Factory() { return new OrderReturnService(i0.ɵɵinject(i1.OrderDetailsService), i0.ɵɵinject(i2.OrderReturnRequestService), i0.ɵɵinject(i2.RoutingService), i0.ɵɵinject(i2.GlobalMessageService)); }, token: OrderReturnService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcmV0dXJuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvYW1lbmQtb3JkZXIvcmV0dXJucy9vcmRlci1yZXR1cm4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBRUwsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUVqQix5QkFBeUIsRUFDekIsY0FBYyxHQUNmLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBSzNELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxpQkFBaUI7Ozs7Ozs7SUFHdkQsWUFDWSxtQkFBd0MsRUFDeEMsb0JBQStDLEVBQy9DLE9BQXVCLEVBQ3ZCLG9CQUEwQztRQUVwRCxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUxqQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBMkI7UUFDL0MsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQU50RCxjQUFTLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQztJQVNsQyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FDekIsTUFBTTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUMsRUFDaEMsR0FBRzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQ1YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O1FBQ2xCLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxFQUNsRSxFQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxJQUFJOztjQUNJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTOztjQUNyQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzs7Y0FDakMsTUFBTSxHQUFzQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUc7Ozs7UUFDeEUsV0FBVyxDQUFDLEVBQUUsQ0FDWixDQUFDLG1CQUFBO1lBQ0MsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQztZQUNyQyxRQUFRLEVBQUUsbUJBQVEsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFBO1NBQ3ZDLEVBQW1DLENBQUMsRUFDeEM7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWxCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyx3QkFBd0IsQ0FBQztZQUNqRCxTQUFTO1lBQ1Qsd0JBQXdCLEVBQUUsTUFBTTtTQUNqQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsb0JBQW9CO2FBQ3RCLHVCQUF1QixFQUFFO2FBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDcEIsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFDLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFFTyxTQUFTO1FBQ2YsSUFBSSxDQUFDLG9CQUFvQjthQUN0QixxQkFBcUIsRUFBRTthQUN2QixJQUFJLENBQUMsS0FBSzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDO2FBQ3JCLFNBQVM7Ozs7UUFBQyxhQUFhLENBQUMsRUFBRTs7a0JBQ25CLEdBQUcsR0FBRyxhQUFhLENBQUMsR0FBRztZQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQjtnQkFDRSxHQUFHLEVBQUUsa0RBQWtEO2dCQUN2RCxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUU7YUFDaEIsRUFDRCxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FDeEMsQ0FBQztZQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2dCQUNkLE9BQU8sRUFBRSxzQkFBc0I7Z0JBQy9CLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRTthQUNoQixDQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7OztZQXBFRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFOUSxtQkFBbUI7WUFMMUIseUJBQXlCO1lBQ3pCLGNBQWM7WUFKZCxvQkFBb0I7Ozs7O0lBZ0JwQix1Q0FBa0M7Ozs7O0lBR2hDLGlEQUFrRDs7Ozs7SUFDbEQsa0RBQXlEOzs7OztJQUN6RCxxQ0FBaUM7Ozs7O0lBQ2pDLGtEQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENhbmNlbE9yUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXQsXG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbiAgT3JkZXJFbnRyeSxcbiAgT3JkZXJSZXR1cm5SZXF1ZXN0U2VydmljZSxcbiAgUm91dGluZ1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIGZpcnN0LCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPcmRlckRldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQW1lbmRPcmRlclR5cGUgfSBmcm9tICcuLi9hbWVuZC1vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlckFtZW5kU2VydmljZSB9IGZyb20gJy4uL2FtZW5kLW9yZGVyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJSZXR1cm5TZXJ2aWNlIGV4dGVuZHMgT3JkZXJBbWVuZFNlcnZpY2Uge1xuICBhbWVuZFR5cGUgPSBBbWVuZE9yZGVyVHlwZS5SRVRVUk47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIG9yZGVyRGV0YWlsc1NlcnZpY2U6IE9yZGVyRGV0YWlsc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJldHVyblJlcXVlc3RTZXJ2aWNlOiBPcmRlclJldHVyblJlcXVlc3RTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKG9yZGVyRGV0YWlsc1NlcnZpY2UpO1xuICB9XG5cbiAgZ2V0RW50cmllcygpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT4ge1xuICAgIHJldHVybiB0aGlzLmdldE9yZGVyKCkucGlwZShcbiAgICAgIGZpbHRlcihvcmRlciA9PiAhIW9yZGVyLmVudHJpZXMpLFxuICAgICAgbWFwKG9yZGVyID0+XG4gICAgICAgIG9yZGVyLmVudHJpZXMuZmlsdGVyKFxuICAgICAgICAgIGVudHJ5ID0+IGVudHJ5LmVudHJ5TnVtYmVyICE9PSAtMSAmJiBlbnRyeS5yZXR1cm5hYmxlUXVhbnRpdHkgPiAwXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgc2F2ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBvcmRlckNvZGUgPSB0aGlzLmZvcm0udmFsdWUub3JkZXJDb2RlO1xuICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLmZvcm0udmFsdWUuZW50cmllcztcbiAgICBjb25zdCBpbnB1dHM6IENhbmNlbE9yUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXRbXSA9IE9iamVjdC5rZXlzKGVudHJpZXMpLm1hcChcbiAgICAgIGVudHJ5TnVtYmVyID0+XG4gICAgICAgICh7XG4gICAgICAgICAgb3JkZXJFbnRyeU51bWJlcjogTnVtYmVyKGVudHJ5TnVtYmVyKSxcbiAgICAgICAgICBxdWFudGl0eTogPG51bWJlcj5lbnRyaWVzW2VudHJ5TnVtYmVyXSxcbiAgICAgICAgfSBhcyBDYW5jZWxPclJldHVyblJlcXVlc3RFbnRyeUlucHV0KVxuICAgICk7XG5cbiAgICB0aGlzLmZvcm0ucmVzZXQoKTtcblxuICAgIHRoaXMucmV0dXJuUmVxdWVzdFNlcnZpY2UuY3JlYXRlT3JkZXJSZXR1cm5SZXF1ZXN0KHtcbiAgICAgIG9yZGVyQ29kZSxcbiAgICAgIHJldHVyblJlcXVlc3RFbnRyeUlucHV0czogaW5wdXRzLFxuICAgIH0pO1xuXG4gICAgdGhpcy5yZXR1cm5SZXF1ZXN0U2VydmljZVxuICAgICAgLmdldFJldHVyblJlcXVlc3RTdWNjZXNzKClcbiAgICAgIC5waXBlKGZpcnN0KEJvb2xlYW4pKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmFmdGVyU2F2ZSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgYWZ0ZXJTYXZlKCk6IHZvaWQge1xuICAgIHRoaXMucmV0dXJuUmVxdWVzdFNlcnZpY2VcbiAgICAgIC5nZXRPcmRlclJldHVyblJlcXVlc3QoKVxuICAgICAgLnBpcGUoZmlyc3QociA9PiAhIXIpKVxuICAgICAgLnN1YnNjcmliZShyZXR1cm5SZXF1ZXN0ID0+IHtcbiAgICAgICAgY29uc3Qgcm1hID0gcmV0dXJuUmVxdWVzdC5ybWE7XG4gICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogJ29yZGVyRGV0YWlscy5jYW5jZWxsYXRpb25BbmRSZXR1cm4ucmV0dXJuU3VjY2VzcycsXG4gICAgICAgICAgICBwYXJhbXM6IHsgcm1hIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5yb3V0aW5nLmdvKHtcbiAgICAgICAgICBjeFJvdXRlOiAncmV0dXJuUmVxdWVzdERldGFpbHMnLFxuICAgICAgICAgIHBhcmFtczogeyBybWEgfSxcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxufVxuIl19