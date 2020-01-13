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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItcmV0dXJuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvYW1lbmQtb3JkZXIvcmV0dXJucy9vcmRlci1yZXR1cm4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBRUwsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUVqQix5QkFBeUIsRUFDekIsY0FBYyxHQUNmLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBSzNELE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxpQkFBaUI7Ozs7Ozs7SUFHdkQsWUFDWSxtQkFBd0MsRUFDeEMsb0JBQStDLEVBQy9DLE9BQXVCLEVBQ3ZCLG9CQUEwQztRQUVwRCxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUxqQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBMkI7UUFDL0MsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQU50RCxjQUFTLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQztJQVNsQyxDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FDekIsTUFBTTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUMsRUFDaEMsR0FBRzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQ1YsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O1FBQ2xCLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsS0FBSyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsa0JBQWtCLEdBQUcsQ0FBQyxFQUNsRSxFQUNGLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxJQUFJOztjQUNJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTOztjQUNyQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTzs7Y0FDakMsTUFBTSxHQUFzQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQzthQUNuRSxNQUFNOzs7O1FBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxtQkFBUSxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUEsR0FBRyxDQUFDLEVBQUM7YUFDdkQsR0FBRzs7OztRQUNGLFdBQVcsQ0FBQyxFQUFFLENBQ1osQ0FBQyxtQkFBQTtZQUNDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDckMsUUFBUSxFQUFFLG1CQUFRLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBQTtTQUN2QyxFQUFtQyxDQUFDLEVBQ3hDO1FBRUgsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVsQixJQUFJLENBQUMsb0JBQW9CLENBQUMsd0JBQXdCLENBQUM7WUFDakQsU0FBUztZQUNULHdCQUF3QixFQUFFLE1BQU07U0FDakMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLG9CQUFvQjthQUN0Qix1QkFBdUIsRUFBRTthQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3BCLFNBQVM7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBQyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBRU8sU0FBUztRQUNmLElBQUksQ0FBQyxvQkFBb0I7YUFDdEIscUJBQXFCLEVBQUU7YUFDdkIsSUFBSSxDQUFDLEtBQUs7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQzthQUNyQixTQUFTOzs7O1FBQUMsYUFBYSxDQUFDLEVBQUU7O2tCQUNuQixHQUFHLEdBQUcsYUFBYSxDQUFDLEdBQUc7WUFDN0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FDM0I7Z0JBQ0UsR0FBRyxFQUFFLGtEQUFrRDtnQkFDdkQsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFO2FBQ2hCLEVBQ0QsaUJBQWlCLENBQUMscUJBQXFCLENBQ3hDLENBQUM7WUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztnQkFDZCxPQUFPLEVBQUUsc0JBQXNCO2dCQUMvQixNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUU7YUFDaEIsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7WUF0RUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTlEsbUJBQW1CO1lBTDFCLHlCQUF5QjtZQUN6QixjQUFjO1lBSmQsb0JBQW9COzs7OztJQWdCcEIsdUNBQWtDOzs7OztJQUdoQyxpREFBa0Q7Ozs7O0lBQ2xELGtEQUF5RDs7Ozs7SUFDekQscUNBQWlDOzs7OztJQUNqQyxrREFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDYW5jZWxPclJldHVyblJlcXVlc3RFbnRyeUlucHV0LFxuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG4gIE9yZGVyRW50cnksXG4gIE9yZGVyUmV0dXJuUmVxdWVzdFNlcnZpY2UsXG4gIFJvdXRpbmdTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBmaXJzdCwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxzU2VydmljZSB9IGZyb20gJy4uLy4uL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5zZXJ2aWNlJztcbmltcG9ydCB7IEFtZW5kT3JkZXJUeXBlIH0gZnJvbSAnLi4vYW1lbmQtb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgT3JkZXJBbWVuZFNlcnZpY2UgfSBmcm9tICcuLi9hbWVuZC1vcmRlci5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIE9yZGVyUmV0dXJuU2VydmljZSBleHRlbmRzIE9yZGVyQW1lbmRTZXJ2aWNlIHtcbiAgYW1lbmRUeXBlID0gQW1lbmRPcmRlclR5cGUuUkVUVVJOO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByZXR1cm5SZXF1ZXN0U2VydmljZTogT3JkZXJSZXR1cm5SZXF1ZXN0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZzogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZVxuICApIHtcbiAgICBzdXBlcihvcmRlckRldGFpbHNTZXJ2aWNlKTtcbiAgfVxuXG4gIGdldEVudHJpZXMoKTogT2JzZXJ2YWJsZTxPcmRlckVudHJ5W10+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRPcmRlcigpLnBpcGUoXG4gICAgICBmaWx0ZXIob3JkZXIgPT4gISFvcmRlci5lbnRyaWVzKSxcbiAgICAgIG1hcChvcmRlciA9PlxuICAgICAgICBvcmRlci5lbnRyaWVzLmZpbHRlcihcbiAgICAgICAgICBlbnRyeSA9PiBlbnRyeS5lbnRyeU51bWJlciAhPT0gLTEgJiYgZW50cnkucmV0dXJuYWJsZVF1YW50aXR5ID4gMFxuICAgICAgICApXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHNhdmUoKTogdm9pZCB7XG4gICAgY29uc3Qgb3JkZXJDb2RlID0gdGhpcy5mb3JtLnZhbHVlLm9yZGVyQ29kZTtcbiAgICBjb25zdCBlbnRyaWVzID0gdGhpcy5mb3JtLnZhbHVlLmVudHJpZXM7XG4gICAgY29uc3QgaW5wdXRzOiBDYW5jZWxPclJldHVyblJlcXVlc3RFbnRyeUlucHV0W10gPSBPYmplY3Qua2V5cyhlbnRyaWVzKVxuICAgICAgLmZpbHRlcihlbnRyeU51bWJlciA9PiA8bnVtYmVyPmVudHJpZXNbZW50cnlOdW1iZXJdID4gMClcbiAgICAgIC5tYXAoXG4gICAgICAgIGVudHJ5TnVtYmVyID0+XG4gICAgICAgICAgKHtcbiAgICAgICAgICAgIG9yZGVyRW50cnlOdW1iZXI6IE51bWJlcihlbnRyeU51bWJlciksXG4gICAgICAgICAgICBxdWFudGl0eTogPG51bWJlcj5lbnRyaWVzW2VudHJ5TnVtYmVyXSxcbiAgICAgICAgICB9IGFzIENhbmNlbE9yUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXQpXG4gICAgICApO1xuXG4gICAgdGhpcy5mb3JtLnJlc2V0KCk7XG5cbiAgICB0aGlzLnJldHVyblJlcXVlc3RTZXJ2aWNlLmNyZWF0ZU9yZGVyUmV0dXJuUmVxdWVzdCh7XG4gICAgICBvcmRlckNvZGUsXG4gICAgICByZXR1cm5SZXF1ZXN0RW50cnlJbnB1dHM6IGlucHV0cyxcbiAgICB9KTtcblxuICAgIHRoaXMucmV0dXJuUmVxdWVzdFNlcnZpY2VcbiAgICAgIC5nZXRSZXR1cm5SZXF1ZXN0U3VjY2VzcygpXG4gICAgICAucGlwZShmaXJzdChCb29sZWFuKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5hZnRlclNhdmUoKSk7XG4gIH1cblxuICBwcml2YXRlIGFmdGVyU2F2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLnJldHVyblJlcXVlc3RTZXJ2aWNlXG4gICAgICAuZ2V0T3JkZXJSZXR1cm5SZXF1ZXN0KClcbiAgICAgIC5waXBlKGZpcnN0KHIgPT4gISFyKSlcbiAgICAgIC5zdWJzY3JpYmUocmV0dXJuUmVxdWVzdCA9PiB7XG4gICAgICAgIGNvbnN0IHJtYSA9IHJldHVyblJlcXVlc3Qucm1hO1xuICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6ICdvcmRlckRldGFpbHMuY2FuY2VsbGF0aW9uQW5kUmV0dXJuLnJldHVyblN1Y2Nlc3MnLFxuICAgICAgICAgICAgcGFyYW1zOiB7IHJtYSB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucm91dGluZy5nbyh7XG4gICAgICAgICAgY3hSb3V0ZTogJ3JldHVyblJlcXVlc3REZXRhaWxzJyxcbiAgICAgICAgICBwYXJhbXM6IHsgcm1hIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdfQ==