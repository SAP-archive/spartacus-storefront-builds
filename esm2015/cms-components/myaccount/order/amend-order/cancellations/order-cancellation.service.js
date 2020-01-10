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
        const inputs = Object.keys(entries).map((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXItY2FuY2VsbGF0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvYW1lbmQtb3JkZXIvY2FuY2VsbGF0aW9ucy9vcmRlci1jYW5jZWxsYXRpb24uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBRUwsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUVqQixjQUFjLEVBQ2QsZ0JBQWdCLEdBQ2pCLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBSzNELE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxpQkFBaUI7Ozs7Ozs7SUFHN0QsWUFDWSxtQkFBd0MsRUFDeEMsZ0JBQWtDLEVBQ2xDLE9BQXVCLEVBQ3ZCLG9CQUEwQztRQUVwRCxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUxqQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQU50RCxjQUFTLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQztJQVNsQyxDQUFDOzs7OztJQUlELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQ3pCLE1BQU07Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBQyxFQUMvQixHQUFHOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FDVixLQUFLLENBQUMsT0FBTyxDQUFDLE1BQU07Ozs7UUFDbEIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLEVBQ25FLEVBQ0YsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELElBQUk7O2NBQ0ksU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7O2NBQ3JDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPOztjQUNqQyxNQUFNLEdBQXNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRzs7OztRQUN4RSxXQUFXLENBQUMsRUFBRSxDQUNaLENBQUMsbUJBQUE7WUFDQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDO1lBQ3JDLFFBQVEsRUFBRSxtQkFBUSxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUE7U0FDdkMsRUFBbUMsQ0FBQyxFQUN4QztRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFbEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7WUFDM0MsOEJBQThCLEVBQUUsTUFBTTtTQUN2QyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsZ0JBQWdCO2FBQ2xCLHFCQUFxQixFQUFFO2FBQ3ZCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDcEIsU0FBUzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDO0lBQ2hELENBQUM7Ozs7OztJQUVPLFNBQVMsQ0FBQyxTQUFpQjtRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztRQUNyRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQjtZQUNFLEdBQUcsRUFBRSxrREFBa0Q7WUFDdkQsTUFBTSxFQUFFLEVBQUUsU0FBUyxFQUFFO1NBQ3RCLEVBQ0QsaUJBQWlCLENBQUMscUJBQXFCLENBQ3hDLENBQUM7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNkLE9BQU8sRUFBRSxRQUFRO1NBQ2xCLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQS9ERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFOUSxtQkFBbUI7WUFKMUIsZ0JBQWdCO1lBRGhCLGNBQWM7WUFIZCxvQkFBb0I7Ozs7O0lBZ0JwQiw2Q0FBa0M7Ozs7O0lBR2hDLHVEQUFrRDs7Ozs7SUFDbEQsb0RBQTRDOzs7OztJQUM1QywyQ0FBaUM7Ozs7O0lBQ2pDLHdEQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENhbmNlbE9yUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXQsXG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbiAgT3JkZXJFbnRyeSxcbiAgUm91dGluZ1NlcnZpY2UsXG4gIFVzZXJPcmRlclNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIGZpcnN0LCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPcmRlckRldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQW1lbmRPcmRlclR5cGUgfSBmcm9tICcuLi9hbWVuZC1vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBPcmRlckFtZW5kU2VydmljZSB9IGZyb20gJy4uL2FtZW5kLW9yZGVyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJDYW5jZWxsYXRpb25TZXJ2aWNlIGV4dGVuZHMgT3JkZXJBbWVuZFNlcnZpY2Uge1xuICBhbWVuZFR5cGUgPSBBbWVuZE9yZGVyVHlwZS5DQU5DRUw7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIG9yZGVyRGV0YWlsc1NlcnZpY2U6IE9yZGVyRGV0YWlsc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHVzZXJPcmRlclNlcnZpY2U6IFVzZXJPcmRlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmc6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIob3JkZXJEZXRhaWxzU2VydmljZSk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybiBjYW5jZWxsYWJsZSBvcmRlciBlbnRyaWVzLlxuICAgKi9cbiAgZ2V0RW50cmllcygpOiBPYnNlcnZhYmxlPE9yZGVyRW50cnlbXT4ge1xuICAgIHJldHVybiB0aGlzLmdldE9yZGVyKCkucGlwZShcbiAgICAgIGZpbHRlcihvcmRlciA9PiBCb29sZWFuKG9yZGVyKSksXG4gICAgICBtYXAob3JkZXIgPT5cbiAgICAgICAgb3JkZXIuZW50cmllcy5maWx0ZXIoXG4gICAgICAgICAgZW50cnkgPT4gZW50cnkuZW50cnlOdW1iZXIgIT09IC0xICYmIGVudHJ5LmNhbmNlbGxhYmxlUXVhbnRpdHkgPiAwXG4gICAgICAgIClcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgc2F2ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBvcmRlckNvZGUgPSB0aGlzLmZvcm0udmFsdWUub3JkZXJDb2RlO1xuICAgIGNvbnN0IGVudHJpZXMgPSB0aGlzLmZvcm0udmFsdWUuZW50cmllcztcbiAgICBjb25zdCBpbnB1dHM6IENhbmNlbE9yUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXRbXSA9IE9iamVjdC5rZXlzKGVudHJpZXMpLm1hcChcbiAgICAgIGVudHJ5TnVtYmVyID0+XG4gICAgICAgICh7XG4gICAgICAgICAgb3JkZXJFbnRyeU51bWJlcjogTnVtYmVyKGVudHJ5TnVtYmVyKSxcbiAgICAgICAgICBxdWFudGl0eTogPG51bWJlcj5lbnRyaWVzW2VudHJ5TnVtYmVyXSxcbiAgICAgICAgfSBhcyBDYW5jZWxPclJldHVyblJlcXVlc3RFbnRyeUlucHV0KVxuICAgICk7XG5cbiAgICB0aGlzLmZvcm0ucmVzZXQoKTtcblxuICAgIHRoaXMudXNlck9yZGVyU2VydmljZS5jYW5jZWxPcmRlcihvcmRlckNvZGUsIHtcbiAgICAgIGNhbmNlbGxhdGlvblJlcXVlc3RFbnRyeUlucHV0czogaW5wdXRzLFxuICAgIH0pO1xuXG4gICAgdGhpcy51c2VyT3JkZXJTZXJ2aWNlXG4gICAgICAuZ2V0Q2FuY2VsT3JkZXJTdWNjZXNzKClcbiAgICAgIC5waXBlKGZpcnN0KEJvb2xlYW4pKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmFmdGVyU2F2ZShvcmRlckNvZGUpKTtcbiAgfVxuXG4gIHByaXZhdGUgYWZ0ZXJTYXZlKG9yZGVyQ29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy51c2VyT3JkZXJTZXJ2aWNlLnJlc2V0Q2FuY2VsT3JkZXJQcm9jZXNzU3RhdGUoKTtcbiAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgIHtcbiAgICAgICAga2V5OiAnb3JkZXJEZXRhaWxzLmNhbmNlbGxhdGlvbkFuZFJldHVybi5jYW5jZWxTdWNjZXNzJyxcbiAgICAgICAgcGFyYW1zOiB7IG9yZGVyQ29kZSB9LFxuICAgICAgfSxcbiAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICk7XG4gICAgdGhpcy5yb3V0aW5nLmdvKHtcbiAgICAgIGN4Um91dGU6ICdvcmRlcnMnLFxuICAgIH0pO1xuICB9XG59XG4iXX0=