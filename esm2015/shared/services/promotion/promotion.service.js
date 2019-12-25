/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CartService, CheckoutService, PromotionLocation, } from '@spartacus/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrderDetailsService } from '../../../cms-components/myaccount/order/order-details/order-details.service';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../../../cms-components/myaccount/order/order-details/order-details.service";
export class PromotionService {
    /**
     * @param {?} cartService
     * @param {?} orderDetailsService
     * @param {?} checkoutService
     */
    constructor(cartService, orderDetailsService, checkoutService) {
        this.cartService = cartService;
        this.orderDetailsService = orderDetailsService;
        this.checkoutService = checkoutService;
    }
    /**
     * @param {?} promotionLocation
     * @return {?}
     */
    getOrderPromotions(promotionLocation) {
        switch (promotionLocation) {
            case PromotionLocation.ActiveCart:
                return this.getOrderPromotionsFromCart();
            case PromotionLocation.Checkout:
                return this.getOrderPromotionsFromCheckout();
            case PromotionLocation.Order:
                return this.getOrderPromotionsFromOrder();
            default:
                return of([]);
        }
    }
    /**
     * @return {?}
     */
    getOrderPromotionsFromCart() {
        return this.cartService
            .getActive()
            .pipe(map((/**
         * @param {?} cart
         * @return {?}
         */
        cart => this.getOrderPromotionsFromCartHelper(cart))));
    }
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    getOrderPromotionsFromCartHelper(cart) {
        /** @type {?} */
        const potentialPromotions = [];
        potentialPromotions.push(...(cart.potentialOrderPromotions || []));
        /** @type {?} */
        const appliedPromotions = [];
        appliedPromotions.push(...(cart.appliedOrderPromotions || []));
        return [...potentialPromotions, ...appliedPromotions];
    }
    /**
     * @return {?}
     */
    getOrderPromotionsFromCheckout() {
        return this.checkoutService
            .getOrderDetails()
            .pipe(map((/**
         * @param {?} order
         * @return {?}
         */
        order => this.getOrderPromotionsFromOrderHelper(order))));
    }
    /**
     * @return {?}
     */
    getOrderPromotionsFromOrder() {
        return this.orderDetailsService
            .getOrderDetails()
            .pipe(map((/**
         * @param {?} order
         * @return {?}
         */
        order => this.getOrderPromotionsFromOrderHelper(order))));
    }
    /**
     * @private
     * @param {?} order
     * @return {?}
     */
    getOrderPromotionsFromOrderHelper(order) {
        /** @type {?} */
        const appliedOrderPromotions = [];
        appliedOrderPromotions.push(...(order.appliedOrderPromotions || []));
        return appliedOrderPromotions;
    }
    /**
     * @param {?} item
     * @param {?} promotionLocation
     * @return {?}
     */
    getProductPromotionForEntry(item, promotionLocation) {
        switch (promotionLocation) {
            case PromotionLocation.ActiveCart:
                return this.cartService
                    .getActive()
                    .pipe(map((/**
                 * @param {?} cart
                 * @return {?}
                 */
                cart => this.getProductPromotion(item, cart.appliedProductPromotions || []))));
            case PromotionLocation.Checkout:
                return this.checkoutService
                    .getOrderDetails()
                    .pipe(map((/**
                 * @param {?} order
                 * @return {?}
                 */
                order => this.getProductPromotion(item, order.appliedProductPromotions || []))));
            case PromotionLocation.Order:
                return this.orderDetailsService
                    .getOrderDetails()
                    .pipe(map((/**
                 * @param {?} order
                 * @return {?}
                 */
                order => this.getProductPromotion(item, order.appliedProductPromotions || []))));
        }
    }
    /**
     * @private
     * @param {?} item
     * @param {?} promotions
     * @return {?}
     */
    getProductPromotion(item, promotions) {
        /** @type {?} */
        const entryPromotions = [];
        if (promotions && promotions.length > 0) {
            for (const promotion of promotions) {
                if (promotion.description &&
                    promotion.consumedEntries &&
                    promotion.consumedEntries.length > 0) {
                    for (const consumedEntry of promotion.consumedEntries) {
                        if (this.isConsumedByEntry(consumedEntry, item)) {
                            entryPromotions.push(promotion);
                        }
                    }
                }
            }
        }
        return entryPromotions;
    }
    /**
     * @private
     * @param {?} consumedEntry
     * @param {?} entry
     * @return {?}
     */
    isConsumedByEntry(consumedEntry, entry) {
        /** @type {?} */
        const consumedEntryNumber = consumedEntry.orderEntryNumber;
        if (entry.entries && entry.entries.length > 0) {
            for (const subEntry of entry.entries) {
                if (subEntry.entryNumber === consumedEntryNumber) {
                    return true;
                }
            }
            return false;
        }
        else {
            return consumedEntryNumber === entry.entryNumber;
        }
    }
}
PromotionService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
PromotionService.ctorParameters = () => [
    { type: CartService },
    { type: OrderDetailsService },
    { type: CheckoutService }
];
/** @nocollapse */ PromotionService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PromotionService_Factory() { return new PromotionService(i0.ɵɵinject(i1.CartService), i0.ɵɵinject(i2.OrderDetailsService), i0.ɵɵinject(i1.CheckoutService)); }, token: PromotionService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    PromotionService.prototype.cartService;
    /**
     * @type {?}
     * @protected
     */
    PromotionService.prototype.orderDetailsService;
    /**
     * @type {?}
     * @protected
     */
    PromotionService.prototype.checkoutService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbW90aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvc2VydmljZXMvcHJvbW90aW9uL3Byb21vdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFHTCxXQUFXLEVBR1gsZUFBZSxFQUNmLGlCQUFpQixHQUNsQixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZFQUE2RSxDQUFDOzs7O0FBS2xILE1BQU0sT0FBTyxnQkFBZ0I7Ozs7OztJQUMzQixZQUNZLFdBQXdCLEVBQ3hCLG1CQUF3QyxFQUN4QyxlQUFnQztRQUZoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUN6QyxDQUFDOzs7OztJQUVKLGtCQUFrQixDQUNoQixpQkFBb0M7UUFFcEMsUUFBUSxpQkFBaUIsRUFBRTtZQUN6QixLQUFLLGlCQUFpQixDQUFDLFVBQVU7Z0JBQy9CLE9BQU8sSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7WUFDM0MsS0FBSyxpQkFBaUIsQ0FBQyxRQUFRO2dCQUM3QixPQUFPLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxDQUFDO1lBQy9DLEtBQUssaUJBQWlCLENBQUMsS0FBSztnQkFDMUIsT0FBTyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztZQUM1QztnQkFDRSxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNqQjtJQUNILENBQUM7Ozs7SUFFRCww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SUFDRSxTQUFTLENBQUMsV0FBVztvQkFDckIsU0FBUyxDQUFDLGVBQWU7b0JBQ3pCLFNBQVMsQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDcEM7b0JBQ0EsS0FBSyxNQUFNLGFBQWEsSUFBSSxTQUFTLENBQUMsZUFBZSxFQUFFO3dCQUNyRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEVBQUU7NEJBQy9DLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7eUJBQ2pDO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtRQUNELE9BQU8sZUFBZSxDQUFDO0lBQ3pCLENBQUM7Ozs7Ozs7SUFFTyxpQkFBaUIsQ0FBQyxhQUFrQixFQUFFLEtBQVU7O2NBQ2hELG1CQUFtQixHQUFHLGFBQWEsQ0FBQyxnQkFBZ0I7UUFDMUQsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3QyxLQUFLLE1BQU0sUUFBUSxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUU7Z0JBQ3BDLElBQUksUUFBUSxDQUFDLFdBQVcsS0FBSyxtQkFBbUIsRUFBRTtvQkFDaEQsT0FBTyxJQUFJLENBQUM7aUJBQ2I7YUFDRjtZQUNELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7YUFBTTtZQUNMLE9BQU8sbUJBQW1CLEtBQUssS0FBSyxDQUFDLFdBQVcsQ0FBQztTQUNsRDtJQUNILENBQUM7OztZQXhJRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFaQyxXQUFXO1lBUUosbUJBQW1CO1lBTDFCLGVBQWU7Ozs7Ozs7O0lBWWIsdUNBQWtDOzs7OztJQUNsQywrQ0FBa0Q7Ozs7O0lBQ2xELDJDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE9yZGVyRW50cnksXG4gIFByb21vdGlvblJlc3VsdCxcbiAgQ2FydFNlcnZpY2UsXG4gIENhcnQsXG4gIE9yZGVyLFxuICBDaGVja291dFNlcnZpY2UsXG4gIFByb21vdGlvbkxvY2F0aW9uLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yZGVyRGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvbW90aW9uU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIG9yZGVyRGV0YWlsc1NlcnZpY2U6IE9yZGVyRGV0YWlsc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlXG4gICkge31cblxuICBnZXRPcmRlclByb21vdGlvbnMoXG4gICAgcHJvbW90aW9uTG9jYXRpb246IFByb21vdGlvbkxvY2F0aW9uXG4gICk6IE9ic2VydmFibGU8UHJvbW90aW9uUmVzdWx0W10+IHtcbiAgICBzd2l0Y2ggKHByb21vdGlvbkxvY2F0aW9uKSB7XG4gICAgICBjYXNlIFByb21vdGlvbkxvY2F0aW9uLkFjdGl2ZUNhcnQ6XG4gICAgICAgIHJldHVybiB0aGlzLmdldE9yZGVyUHJvbW90aW9uc0Zyb21DYXJ0KCk7XG4gICAgICBjYXNlIFByb21vdGlvbkxvY2F0aW9uLkNoZWNrb3V0OlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRPcmRlclByb21vdGlvbnNGcm9tQ2hlY2tvdXQoKTtcbiAgICAgIGNhc2UgUHJvbW90aW9uTG9jYXRpb24uT3JkZXI6XG4gICAgICAgIHJldHVybiB0aGlzLmdldE9yZGVyUHJvbW90aW9uc0Zyb21PcmRlcigpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICB9XG4gIH1cblxuICBnZXRPcmRlclByb21vdGlvbnNGcm9tQ2FydCgpOiBPYnNlcnZhYmxlPFByb21vdGlvblJlc3VsdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuY2FydFNlcnZpY2VcbiAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgLnBpcGUobWFwKGNhcnQgPT4gdGhpcy5nZXRPcmRlclByb21vdGlvbnNGcm9tQ2FydEhlbHBlcihjYXJ0KSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPcmRlclByb21vdGlvbnNGcm9tQ2FydEhlbHBlcihjYXJ0OiBDYXJ0KTogUHJvbW90aW9uUmVzdWx0W10ge1xuICAgIGNvbnN0IHBvdGVudGlhbFByb21vdGlvbnMgPSBbXTtcbiAgICBwb3RlbnRpYWxQcm9tb3Rpb25zLnB1c2goLi4uKGNhcnQucG90ZW50aWFsT3JkZXJQcm9tb3Rpb25zIHx8IFtdKSk7XG5cbiAgICBjb25zdCBhcHBsaWVkUHJvbW90aW9ucyA9IFtdO1xuICAgIGFwcGxpZWRQcm9tb3Rpb25zLnB1c2goLi4uKGNhcnQuYXBwbGllZE9yZGVyUHJvbW90aW9ucyB8fCBbXSkpO1xuXG4gICAgcmV0dXJuIFsuLi5wb3RlbnRpYWxQcm9tb3Rpb25zLCAuLi5hcHBsaWVkUHJvbW90aW9uc107XG4gIH1cblxuICBnZXRPcmRlclByb21vdGlvbnNGcm9tQ2hlY2tvdXQoKTogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U2VydmljZVxuICAgICAgLmdldE9yZGVyRGV0YWlscygpXG4gICAgICAucGlwZShtYXAob3JkZXIgPT4gdGhpcy5nZXRPcmRlclByb21vdGlvbnNGcm9tT3JkZXJIZWxwZXIob3JkZXIpKSk7XG4gIH1cblxuICBnZXRPcmRlclByb21vdGlvbnNGcm9tT3JkZXIoKTogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT4ge1xuICAgIHJldHVybiB0aGlzLm9yZGVyRGV0YWlsc1NlcnZpY2VcbiAgICAgIC5nZXRPcmRlckRldGFpbHMoKVxuICAgICAgLnBpcGUobWFwKG9yZGVyID0+IHRoaXMuZ2V0T3JkZXJQcm9tb3Rpb25zRnJvbU9yZGVySGVscGVyKG9yZGVyKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPcmRlclByb21vdGlvbnNGcm9tT3JkZXJIZWxwZXIob3JkZXI6IE9yZGVyKTogUHJvbW90aW9uUmVzdWx0W10ge1xuICAgIGNvbnN0IGFwcGxpZWRPcmRlclByb21vdGlvbnMgPSBbXTtcbiAgICBhcHBsaWVkT3JkZXJQcm9tb3Rpb25zLnB1c2goLi4uKG9yZGVyLmFwcGxpZWRPcmRlclByb21vdGlvbnMgfHwgW10pKTtcblxuICAgIHJldHVybiBhcHBsaWVkT3JkZXJQcm9tb3Rpb25zO1xuICB9XG5cbiAgZ2V0UHJvZHVjdFByb21vdGlvbkZvckVudHJ5KFxuICAgIGl0ZW06IE9yZGVyRW50cnksXG4gICAgcHJvbW90aW9uTG9jYXRpb246IFByb21vdGlvbkxvY2F0aW9uXG4gICk6IE9ic2VydmFibGU8UHJvbW90aW9uUmVzdWx0W10+IHtcbiAgICBzd2l0Y2ggKHByb21vdGlvbkxvY2F0aW9uKSB7XG4gICAgICBjYXNlIFByb21vdGlvbkxvY2F0aW9uLkFjdGl2ZUNhcnQ6XG4gICAgICAgIHJldHVybiB0aGlzLmNhcnRTZXJ2aWNlXG4gICAgICAgICAgLmdldEFjdGl2ZSgpXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBtYXAoY2FydCA9PlxuICAgICAgICAgICAgICB0aGlzLmdldFByb2R1Y3RQcm9tb3Rpb24oXG4gICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICBjYXJ0LmFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucyB8fCBbXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgIGNhc2UgUHJvbW90aW9uTG9jYXRpb24uQ2hlY2tvdXQ6XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U2VydmljZVxuICAgICAgICAgIC5nZXRPcmRlckRldGFpbHMoKVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgbWFwKG9yZGVyID0+XG4gICAgICAgICAgICAgIHRoaXMuZ2V0UHJvZHVjdFByb21vdGlvbihcbiAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgIG9yZGVyLmFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucyB8fCBbXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgIGNhc2UgUHJvbW90aW9uTG9jYXRpb24uT3JkZXI6XG4gICAgICAgIHJldHVybiB0aGlzLm9yZGVyRGV0YWlsc1NlcnZpY2VcbiAgICAgICAgICAuZ2V0T3JkZXJEZXRhaWxzKClcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIG1hcChvcmRlciA9PlxuICAgICAgICAgICAgICB0aGlzLmdldFByb2R1Y3RQcm9tb3Rpb24oXG4gICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICBvcmRlci5hcHBsaWVkUHJvZHVjdFByb21vdGlvbnMgfHwgW11cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcm9kdWN0UHJvbW90aW9uKFxuICAgIGl0ZW06IE9yZGVyRW50cnksXG4gICAgcHJvbW90aW9uczogUHJvbW90aW9uUmVzdWx0W11cbiAgKTogUHJvbW90aW9uUmVzdWx0W10ge1xuICAgIGNvbnN0IGVudHJ5UHJvbW90aW9uczogUHJvbW90aW9uUmVzdWx0W10gPSBbXTtcbiAgICBpZiAocHJvbW90aW9ucyAmJiBwcm9tb3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAoY29uc3QgcHJvbW90aW9uIG9mIHByb21vdGlvbnMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb21vdGlvbi5kZXNjcmlwdGlvbiAmJlxuICAgICAgICAgIHByb21vdGlvbi5jb25zdW1lZEVudHJpZXMgJiZcbiAgICAgICAgICBwcm9tb3Rpb24uY29uc3VtZWRFbnRyaWVzLmxlbmd0aCA+IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBjb25zdW1lZEVudHJ5IG9mIHByb21vdGlvbi5jb25zdW1lZEVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ29uc3VtZWRCeUVudHJ5KGNvbnN1bWVkRW50cnksIGl0ZW0pKSB7XG4gICAgICAgICAgICAgIGVudHJ5UHJvbW90aW9ucy5wdXNoKHByb21vdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbnRyeVByb21vdGlvbnM7XG4gIH1cblxuICBwcml2YXRlIGlzQ29uc3VtZWRCeUVudHJ5KGNvbnN1bWVkRW50cnk6IGFueSwgZW50cnk6IGFueSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbnN1bWVkRW50cnlOdW1iZXIgPSBjb25zdW1lZEVudHJ5Lm9yZGVyRW50cnlOdW1iZXI7XG4gICAgaWYgKGVudHJ5LmVudHJpZXMgJiYgZW50cnkuZW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGNvbnN0IHN1YkVudHJ5IG9mIGVudHJ5LmVudHJpZXMpIHtcbiAgICAgICAgaWYgKHN1YkVudHJ5LmVudHJ5TnVtYmVyID09PSBjb25zdW1lZEVudHJ5TnVtYmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbnN1bWVkRW50cnlOdW1iZXIgPT09IGVudHJ5LmVudHJ5TnVtYmVyO1xuICAgIH1cbiAgfVxufVxuIl19