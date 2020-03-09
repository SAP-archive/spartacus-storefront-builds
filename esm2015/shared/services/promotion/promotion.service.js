import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ActiveCartService, Cart, CheckoutService, Order, OrderEntry, PromotionLocation, PromotionResult, } from '@spartacus/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrderDetailsService } from '../../../cms-components/myaccount/order/order-details/order-details.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../cms-components/myaccount/order/order-details/order-details.service";
import * as i2 from "@spartacus/core";
let PromotionService = class PromotionService {
    constructor(orderDetailsService, checkoutService, activeCartService) {
        this.orderDetailsService = orderDetailsService;
        this.checkoutService = checkoutService;
        this.activeCartService = activeCartService;
    }
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
    getOrderPromotionsFromCart() {
        return this.activeCartService
            .getActive()
            .pipe(map(cart => this.getOrderPromotionsFromCartHelper(cart)));
    }
    getOrderPromotionsFromCartHelper(cart) {
        const potentialPromotions = [];
        potentialPromotions.push(...(cart.potentialOrderPromotions || []));
        const appliedPromotions = [];
        appliedPromotions.push(...(cart.appliedOrderPromotions || []));
        return [...potentialPromotions, ...appliedPromotions];
    }
    getOrderPromotionsFromCheckout() {
        return this.checkoutService
            .getOrderDetails()
            .pipe(map(order => this.getOrderPromotionsFromOrderHelper(order)));
    }
    getOrderPromotionsFromOrder() {
        return this.orderDetailsService
            .getOrderDetails()
            .pipe(map(order => this.getOrderPromotionsFromOrderHelper(order)));
    }
    getOrderPromotionsFromOrderHelper(order) {
        const appliedOrderPromotions = [];
        appliedOrderPromotions.push(...(order.appliedOrderPromotions || []));
        return appliedOrderPromotions;
    }
    getProductPromotionForEntry(item, promotionLocation) {
        switch (promotionLocation) {
            case PromotionLocation.ActiveCart:
                return this.activeCartService
                    .getActive()
                    .pipe(map(cart => this.getProductPromotion(item, cart.appliedProductPromotions || [])));
            case PromotionLocation.Checkout:
                return this.checkoutService
                    .getOrderDetails()
                    .pipe(map(order => this.getProductPromotion(item, order.appliedProductPromotions || [])));
            case PromotionLocation.Order:
                return this.orderDetailsService
                    .getOrderDetails()
                    .pipe(map(order => this.getProductPromotion(item, order.appliedProductPromotions || [])));
        }
    }
    getProductPromotion(item, promotions) {
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
    isConsumedByEntry(consumedEntry, entry) {
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
};
PromotionService.ctorParameters = () => [
    { type: OrderDetailsService },
    { type: CheckoutService },
    { type: ActiveCartService }
];
PromotionService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PromotionService_Factory() { return new PromotionService(i0.ɵɵinject(i1.OrderDetailsService), i0.ɵɵinject(i2.CheckoutService), i0.ɵɵinject(i2.ActiveCartService)); }, token: PromotionService, providedIn: "root" });
PromotionService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], PromotionService);
export { PromotionService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbW90aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvc2VydmljZXMvcHJvbW90aW9uL3Byb21vdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsSUFBSSxFQUNKLGVBQWUsRUFDZixLQUFLLEVBQ0wsVUFBVSxFQUNWLGlCQUFpQixFQUNqQixlQUFlLEdBQ2hCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkVBQTZFLENBQUM7Ozs7QUFLbEgsSUFBYSxnQkFBZ0IsR0FBN0IsTUFBYSxnQkFBZ0I7SUFDM0IsWUFDWSxtQkFBd0MsRUFDeEMsZUFBZ0MsRUFDaEMsaUJBQW9DO1FBRnBDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDN0MsQ0FBQztJQUVKLGtCQUFrQixDQUNoQixpQkFBb0M7UUFFcEMsUUFBUSxpQkFBaUIsRUFBRTtZQUN6QixLQUFLLGlCQUFpQixDQUFDLFVBQVU7Z0JBQy9CLE9BQU8sSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7WUFDM0MsS0FBSyxpQkFBaUIsQ0FBQyxRQUFRO2dCQUM3QixPQUFPLElBQUksQ0FBQyw4QkFBOEIsRUFBRSxDQUFDO1lBQy9DLEtBQUssaUJBQWlCLENBQUMsS0FBSztnQkFDMUIsT0FBTyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsQ0FBQztZQUM1QztnQkFDRSxPQUFP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JztcbmltcG9ydCB7XG4gIEFjdGl2ZUNhcnRTZXJ2aWNlLFxuICBDYXJ0LFxuICBDaGVja291dFNlcnZpY2UsXG4gIE9yZGVyLFxuICBPcmRlckVudHJ5LFxuICBQcm9tb3Rpb25Mb2NhdGlvbixcbiAgUHJvbW90aW9uUmVzdWx0LFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yZGVyRGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvbW90aW9uU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBvcmRlckRldGFpbHNTZXJ2aWNlOiBPcmRlckRldGFpbHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjaGVja291dFNlcnZpY2U6IENoZWNrb3V0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlXG4gICkge31cblxuICBnZXRPcmRlclByb21vdGlvbnMoXG4gICAgcHJvbW90aW9uTG9jYXRpb246IFByb21vdGlvbkxvY2F0aW9uXG4gICk6IE9ic2VydmFibGU8UHJvbW90aW9uUmVzdWx0W10+IHtcbiAgICBzd2l0Y2ggKHByb21vdGlvbkxvY2F0aW9uKSB7XG4gICAgICBjYXNlIFByb21vdGlvbkxvY2F0aW9uLkFjdGl2ZUNhcnQ6XG4gICAgICAgIHJldHVybiB0aGlzLmdldE9yZGVyUHJvbW90aW9uc0Zyb21DYXJ0KCk7XG4gICAgICBjYXNlIFByb21vdGlvbkxvY2F0aW9uLkNoZWNrb3V0OlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRPcmRlclByb21vdGlvbnNGcm9tQ2hlY2tvdXQoKTtcbiAgICAgIGNhc2UgUHJvbW90aW9uTG9jYXRpb24uT3JkZXI6XG4gICAgICAgIHJldHVybiB0aGlzLmdldE9yZGVyUHJvbW90aW9uc0Zyb21PcmRlcigpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICB9XG4gIH1cblxuICBnZXRPcmRlclByb21vdGlvbnNGcm9tQ2FydCgpOiBPYnNlcnZhYmxlPFByb21vdGlvblJlc3VsdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2VcbiAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgLnBpcGUobWFwKGNhcnQgPT4gdGhpcy5nZXRPcmRlclByb21vdGlvbnNGcm9tQ2FydEhlbHBlcihjYXJ0KSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPcmRlclByb21vdGlvbnNGcm9tQ2FydEhlbHBlcihjYXJ0OiBDYXJ0KTogUHJvbW90aW9uUmVzdWx0W10ge1xuICAgIGNvbnN0IHBvdGVudGlhbFByb21vdGlvbnMgPSBbXTtcbiAgICBwb3RlbnRpYWxQcm9tb3Rpb25zLnB1c2goLi4uKGNhcnQucG90ZW50aWFsT3JkZXJQcm9tb3Rpb25zIHx8IFtdKSk7XG5cbiAgICBjb25zdCBhcHBsaWVkUHJvbW90aW9ucyA9IFtdO1xuICAgIGFwcGxpZWRQcm9tb3Rpb25zLnB1c2goLi4uKGNhcnQuYXBwbGllZE9yZGVyUHJvbW90aW9ucyB8fCBbXSkpO1xuXG4gICAgcmV0dXJuIFsuLi5wb3RlbnRpYWxQcm9tb3Rpb25zLCAuLi5hcHBsaWVkUHJvbW90aW9uc107XG4gIH1cblxuICBnZXRPcmRlclByb21vdGlvbnNGcm9tQ2hlY2tvdXQoKTogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U2VydmljZVxuICAgICAgLmdldE9yZGVyRGV0YWlscygpXG4gICAgICAucGlwZShtYXAob3JkZXIgPT4gdGhpcy5nZXRPcmRlclByb21vdGlvbnNGcm9tT3JkZXJIZWxwZXIob3JkZXIpKSk7XG4gIH1cblxuICBnZXRPcmRlclByb21vdGlvbnNGcm9tT3JkZXIoKTogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT4ge1xuICAgIHJldHVybiB0aGlzLm9yZGVyRGV0YWlsc1NlcnZpY2VcbiAgICAgIC5nZXRPcmRlckRldGFpbHMoKVxuICAgICAgLnBpcGUobWFwKG9yZGVyID0+IHRoaXMuZ2V0T3JkZXJQcm9tb3Rpb25zRnJvbU9yZGVySGVscGVyKG9yZGVyKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPcmRlclByb21vdGlvbnNGcm9tT3JkZXJIZWxwZXIob3JkZXI6IE9yZGVyKTogUHJvbW90aW9uUmVzdWx0W10ge1xuICAgIGNvbnN0IGFwcGxpZWRPcmRlclByb21vdGlvbnMgPSBbXTtcbiAgICBhcHBsaWVkT3JkZXJQcm9tb3Rpb25zLnB1c2goLi4uKG9yZGVyLmFwcGxpZWRPcmRlclByb21vdGlvbnMgfHwgW10pKTtcblxuICAgIHJldHVybiBhcHBsaWVkT3JkZXJQcm9tb3Rpb25zO1xuICB9XG5cbiAgZ2V0UHJvZHVjdFByb21vdGlvbkZvckVudHJ5KFxuICAgIGl0ZW06IE9yZGVyRW50cnksXG4gICAgcHJvbW90aW9uTG9jYXRpb246IFByb21vdGlvbkxvY2F0aW9uXG4gICk6IE9ic2VydmFibGU8UHJvbW90aW9uUmVzdWx0W10+IHtcbiAgICBzd2l0Y2ggKHByb21vdGlvbkxvY2F0aW9uKSB7XG4gICAgICBjYXNlIFByb21vdGlvbkxvY2F0aW9uLkFjdGl2ZUNhcnQ6XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlXG4gICAgICAgICAgLmdldEFjdGl2ZSgpXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBtYXAoY2FydCA9PlxuICAgICAgICAgICAgICB0aGlzLmdldFByb2R1Y3RQcm9tb3Rpb24oXG4gICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICBjYXJ0LmFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucyB8fCBbXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgIGNhc2UgUHJvbW90aW9uTG9jYXRpb24uQ2hlY2tvdXQ6XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U2VydmljZVxuICAgICAgICAgIC5nZXRPcmRlckRldGFpbHMoKVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgbWFwKG9yZGVyID0+XG4gICAgICAgICAgICAgIHRoaXMuZ2V0UHJvZHVjdFByb21vdGlvbihcbiAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgIG9yZGVyLmFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucyB8fCBbXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgIGNhc2UgUHJvbW90aW9uTG9jYXRpb24uT3JkZXI6XG4gICAgICAgIHJldHVybiB0aGlzLm9yZGVyRGV0YWlsc1NlcnZpY2VcbiAgICAgICAgICAuZ2V0T3JkZXJEZXRhaWxzKClcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIG1hcChvcmRlciA9PlxuICAgICAgICAgICAgICB0aGlzLmdldFByb2R1Y3RQcm9tb3Rpb24oXG4gICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICBvcmRlci5hcHBsaWVkUHJvZHVjdFByb21vdGlvbnMgfHwgW11cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcm9kdWN0UHJvbW90aW9uKFxuICAgIGl0ZW06IE9yZGVyRW50cnksXG4gICAgcHJvbW90aW9uczogUHJvbW90aW9uUmVzdWx0W11cbiAgKTogUHJvbW90aW9uUmVzdWx0W10ge1xuICAgIGNvbnN0IGVudHJ5UHJvbW90aW9uczogUHJvbW90aW9uUmVzdWx0W10gPSBbXTtcbiAgICBpZiAocHJvbW90aW9ucyAmJiBwcm9tb3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAoY29uc3QgcHJvbW90aW9uIG9mIHByb21vdGlvbnMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb21vdGlvbi5kZXNjcmlwdGlvbiAmJlxuICAgICAgICAgIHByb21vdGlvbi5jb25zdW1lZEVudHJpZXMgJiZcbiAgICAgICAgICBwcm9tb3Rpb24uY29uc3VtZWRFbnRyaWVzLmxlbmd0aCA+IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBjb25zdW1lZEVudHJ5IG9mIHByb21vdGlvbi5jb25zdW1lZEVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ29uc3VtZWRCeUVudHJ5KGNvbnN1bWVkRW50cnksIGl0ZW0pKSB7XG4gICAgICAgICAgICAgIGVudHJ5UHJvbW90aW9ucy5wdXNoKHByb21vdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbnRyeVByb21vdGlvbnM7XG4gIH1cblxuICBwcml2YXRlIGlzQ29uc3VtZWRCeUVudHJ5KGNvbnN1bWVkRW50cnk6IGFueSwgZW50cnk6IGFueSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbnN1bWVkRW50cnlOdW1iZXIgPSBjb25zdW1lZEVudHJ5Lm9yZGVyRW50cnlOdW1iZXI7XG4gICAgaWYgKGVudHJ5LmVudHJpZXMgJiYgZW50cnkuZW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGNvbnN0IHN1YkVudHJ5IG9mIGVudHJ5LmVudHJpZXMpIHtcbiAgICAgICAgaWYgKHN1YkVudHJ5LmVudHJ5TnVtYmVyID09PSBjb25zdW1lZEVudHJ5TnVtYmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbnN1bWVkRW50cnlOdW1iZXIgPT09IGVudHJ5LmVudHJ5TnVtYmVyO1xuICAgIH1cbiAgfVxufVxuIl19