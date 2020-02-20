import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { OrderEntry, PromotionResult, CartService, Cart, Order, CheckoutService, PromotionLocation, } from '@spartacus/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrderDetailsService } from '../../../cms-components/myaccount/order/order-details/order-details.service';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../../../cms-components/myaccount/order/order-details/order-details.service";
let PromotionService = class PromotionService {
    constructor(cartService, orderDetailsService, checkoutService) {
        this.cartService = cartService;
        this.orderDetailsService = orderDetailsService;
        this.checkoutService = checkoutService;
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
        return this.cartService
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
                return this.cartService
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
    { type: CartService },
    { type: OrderDetailsService },
    { type: CheckoutService }
];
PromotionService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PromotionService_Factory() { return new PromotionService(i0.ɵɵinject(i1.CartService), i0.ɵɵinject(i2.OrderDetailsService), i0.ɵɵinject(i1.CheckoutService)); }, token: PromotionService, providedIn: "root" });
PromotionService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], PromotionService);
export { PromotionService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbW90aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvc2VydmljZXMvcHJvbW90aW9uL3Byb21vdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxVQUFVLEVBQ1YsZUFBZSxFQUNmLFdBQVcsRUFDWCxJQUFJLEVBQ0osS0FBSyxFQUNMLGVBQWUsRUFDZixpQkFBaUIsR0FDbEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQzs7OztBQUtsSCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQUMzQixZQUNZLFdBQXdCLEVBQ3hCLG1CQUF3QyxFQUN4QyxlQUFnQztRQUZoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUN6QyxDQUFDO0lBRUosa0JBQWtCLENBQ2hCLGlCQUFvQztRQUVwQyxRQUFRLGlCQUFpQixFQUFFO1lBQ3pCLEtBQUssaUJBQWlCLENBQUMsVUFBVTtnQkFDL0IsT0FBTyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztZQUMzQyxLQUFLLGlCQUFpQixDQUFDLFFBQVE7Z0JBQzdCLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUM7WUFDL0MsS0FBSyxpQkFBaUIsQ0FBQyxLQUFLO2dCQUMxQixPQUFPLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1lBQzVDO2dCQUNFLE9BQU8sRUFBRSxDQUFD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QUFTLElBQUksVUFBVSxFQUFFO2dCQUNsQyxJQUNFLFNBQVMsQ0FBQyxXQUFXO29CQUNyQixTQUFTLENBQUMsZUFBZTtvQkFDekIsU0FBUyxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNwQztvQkFDQSxLQUFLLE1BQU0sYUFBYSxJQUFJLFNBQVMsQ0FBQyxlQUFlLEVBQUU7d0JBQ3JELElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsRUFBRTs0QkFDL0MsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzt5QkFDakM7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGO1FBQ0QsT0FBTyxlQUFlLENBQUM7SUFDekIsQ0FBQztJQUVPLGlCQUFpQixDQUFDLGFBQWtCLEVBQUUsS0FBVTtRQUN0RCxNQUFNLG1CQUFtQixHQUFHLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztRQUMzRCxJQUFJLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzdDLEtBQUssTUFBTSxRQUFRLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtnQkFDcEMsSUFBSSxRQUFRLENBQUMsV0FBVyxLQUFLLG1CQUFtQixFQUFFO29CQUNoRCxPQUFPLElBQUksQ0FBQztpQkFDYjthQUNGO1lBQ0QsT0FBTyxLQUFLLENBQUM7U0FDZDthQUFNO1lBQ0wsT0FBTyxtQkFBbUIsS0FBSyxLQUFLLENBQUMsV0FBVyxDQUFDO1NBQ2xEO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBcEkwQixXQUFXO1lBQ0gsbUJBQW1CO1lBQ3ZCLGVBQWU7OztBQUpqQyxnQkFBZ0I7SUFINUIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGdCQUFnQixDQXNJNUI7U0F0SVksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgT3JkZXJFbnRyeSxcbiAgUHJvbW90aW9uUmVzdWx0LFxuICBDYXJ0U2VydmljZSxcbiAgQ2FydCxcbiAgT3JkZXIsXG4gIENoZWNrb3V0U2VydmljZSxcbiAgUHJvbW90aW9uTG9jYXRpb24sXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT3JkZXJEZXRhaWxzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL215YWNjb3VudC9vcmRlci9vcmRlci1kZXRhaWxzL29yZGVyLWRldGFpbHMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9tb3Rpb25TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgb3JkZXJEZXRhaWxzU2VydmljZTogT3JkZXJEZXRhaWxzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2VcbiAgKSB7fVxuXG4gIGdldE9yZGVyUHJvbW90aW9ucyhcbiAgICBwcm9tb3Rpb25Mb2NhdGlvbjogUHJvbW90aW9uTG9jYXRpb25cbiAgKTogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT4ge1xuICAgIHN3aXRjaCAocHJvbW90aW9uTG9jYXRpb24pIHtcbiAgICAgIGNhc2UgUHJvbW90aW9uTG9jYXRpb24uQWN0aXZlQ2FydDpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T3JkZXJQcm9tb3Rpb25zRnJvbUNhcnQoKTtcbiAgICAgIGNhc2UgUHJvbW90aW9uTG9jYXRpb24uQ2hlY2tvdXQ6XG4gICAgICAgIHJldHVybiB0aGlzLmdldE9yZGVyUHJvbW90aW9uc0Zyb21DaGVja291dCgpO1xuICAgICAgY2FzZSBQcm9tb3Rpb25Mb2NhdGlvbi5PcmRlcjpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T3JkZXJQcm9tb3Rpb25zRnJvbU9yZGVyKCk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gb2YoW10pO1xuICAgIH1cbiAgfVxuXG4gIGdldE9yZGVyUHJvbW90aW9uc0Zyb21DYXJ0KCk6IE9ic2VydmFibGU8UHJvbW90aW9uUmVzdWx0W10+IHtcbiAgICByZXR1cm4gdGhpcy5jYXJ0U2VydmljZVxuICAgICAgLmdldEFjdGl2ZSgpXG4gICAgICAucGlwZShtYXAoY2FydCA9PiB0aGlzLmdldE9yZGVyUHJvbW90aW9uc0Zyb21DYXJ0SGVscGVyKGNhcnQpKSk7XG4gIH1cblxuICBwcml2YXRlIGdldE9yZGVyUHJvbW90aW9uc0Zyb21DYXJ0SGVscGVyKGNhcnQ6IENhcnQpOiBQcm9tb3Rpb25SZXN1bHRbXSB7XG4gICAgY29uc3QgcG90ZW50aWFsUHJvbW90aW9ucyA9IFtdO1xuICAgIHBvdGVudGlhbFByb21vdGlvbnMucHVzaCguLi4oY2FydC5wb3RlbnRpYWxPcmRlclByb21vdGlvbnMgfHwgW10pKTtcblxuICAgIGNvbnN0IGFwcGxpZWRQcm9tb3Rpb25zID0gW107XG4gICAgYXBwbGllZFByb21vdGlvbnMucHVzaCguLi4oY2FydC5hcHBsaWVkT3JkZXJQcm9tb3Rpb25zIHx8IFtdKSk7XG5cbiAgICByZXR1cm4gWy4uLnBvdGVudGlhbFByb21vdGlvbnMsIC4uLmFwcGxpZWRQcm9tb3Rpb25zXTtcbiAgfVxuXG4gIGdldE9yZGVyUHJvbW90aW9uc0Zyb21DaGVja291dCgpOiBPYnNlcnZhYmxlPFByb21vdGlvblJlc3VsdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTZXJ2aWNlXG4gICAgICAuZ2V0T3JkZXJEZXRhaWxzKClcbiAgICAgIC5waXBlKG1hcChvcmRlciA9PiB0aGlzLmdldE9yZGVyUHJvbW90aW9uc0Zyb21PcmRlckhlbHBlcihvcmRlcikpKTtcbiAgfVxuXG4gIGdldE9yZGVyUHJvbW90aW9uc0Zyb21PcmRlcigpOiBPYnNlcnZhYmxlPFByb21vdGlvblJlc3VsdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMub3JkZXJEZXRhaWxzU2VydmljZVxuICAgICAgLmdldE9yZGVyRGV0YWlscygpXG4gICAgICAucGlwZShtYXAob3JkZXIgPT4gdGhpcy5nZXRPcmRlclByb21vdGlvbnNGcm9tT3JkZXJIZWxwZXIob3JkZXIpKSk7XG4gIH1cblxuICBwcml2YXRlIGdldE9yZGVyUHJvbW90aW9uc0Zyb21PcmRlckhlbHBlcihvcmRlcjogT3JkZXIpOiBQcm9tb3Rpb25SZXN1bHRbXSB7XG4gICAgY29uc3QgYXBwbGllZE9yZGVyUHJvbW90aW9ucyA9IFtdO1xuICAgIGFwcGxpZWRPcmRlclByb21vdGlvbnMucHVzaCguLi4ob3JkZXIuYXBwbGllZE9yZGVyUHJvbW90aW9ucyB8fCBbXSkpO1xuXG4gICAgcmV0dXJuIGFwcGxpZWRPcmRlclByb21vdGlvbnM7XG4gIH1cblxuICBnZXRQcm9kdWN0UHJvbW90aW9uRm9yRW50cnkoXG4gICAgaXRlbTogT3JkZXJFbnRyeSxcbiAgICBwcm9tb3Rpb25Mb2NhdGlvbjogUHJvbW90aW9uTG9jYXRpb25cbiAgKTogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT4ge1xuICAgIHN3aXRjaCAocHJvbW90aW9uTG9jYXRpb24pIHtcbiAgICAgIGNhc2UgUHJvbW90aW9uTG9jYXRpb24uQWN0aXZlQ2FydDpcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FydFNlcnZpY2VcbiAgICAgICAgICAuZ2V0QWN0aXZlKClcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIG1hcChjYXJ0ID0+XG4gICAgICAgICAgICAgIHRoaXMuZ2V0UHJvZHVjdFByb21vdGlvbihcbiAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgIGNhcnQuYXBwbGllZFByb2R1Y3RQcm9tb3Rpb25zIHx8IFtdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgY2FzZSBQcm9tb3Rpb25Mb2NhdGlvbi5DaGVja291dDpcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tvdXRTZXJ2aWNlXG4gICAgICAgICAgLmdldE9yZGVyRGV0YWlscygpXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBtYXAob3JkZXIgPT5cbiAgICAgICAgICAgICAgdGhpcy5nZXRQcm9kdWN0UHJvbW90aW9uKFxuICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgb3JkZXIuYXBwbGllZFByb2R1Y3RQcm9tb3Rpb25zIHx8IFtdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgY2FzZSBQcm9tb3Rpb25Mb2NhdGlvbi5PcmRlcjpcbiAgICAgICAgcmV0dXJuIHRoaXMub3JkZXJEZXRhaWxzU2VydmljZVxuICAgICAgICAgIC5nZXRPcmRlckRldGFpbHMoKVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgbWFwKG9yZGVyID0+XG4gICAgICAgICAgICAgIHRoaXMuZ2V0UHJvZHVjdFByb21vdGlvbihcbiAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgIG9yZGVyLmFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucyB8fCBbXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldFByb2R1Y3RQcm9tb3Rpb24oXG4gICAgaXRlbTogT3JkZXJFbnRyeSxcbiAgICBwcm9tb3Rpb25zOiBQcm9tb3Rpb25SZXN1bHRbXVxuICApOiBQcm9tb3Rpb25SZXN1bHRbXSB7XG4gICAgY29uc3QgZW50cnlQcm9tb3Rpb25zOiBQcm9tb3Rpb25SZXN1bHRbXSA9IFtdO1xuICAgIGlmIChwcm9tb3Rpb25zICYmIHByb21vdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChjb25zdCBwcm9tb3Rpb24gb2YgcHJvbW90aW9ucykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvbW90aW9uLmRlc2NyaXB0aW9uICYmXG4gICAgICAgICAgcHJvbW90aW9uLmNvbnN1bWVkRW50cmllcyAmJlxuICAgICAgICAgIHByb21vdGlvbi5jb25zdW1lZEVudHJpZXMubGVuZ3RoID4gMFxuICAgICAgICApIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGNvbnN1bWVkRW50cnkgb2YgcHJvbW90aW9uLmNvbnN1bWVkRW50cmllcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNDb25zdW1lZEJ5RW50cnkoY29uc3VtZWRFbnRyeSwgaXRlbSkpIHtcbiAgICAgICAgICAgICAgZW50cnlQcm9tb3Rpb25zLnB1c2gocHJvbW90aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVudHJ5UHJvbW90aW9ucztcbiAgfVxuXG4gIHByaXZhdGUgaXNDb25zdW1lZEJ5RW50cnkoY29uc3VtZWRFbnRyeTogYW55LCBlbnRyeTogYW55KTogYm9vbGVhbiB7XG4gICAgY29uc3QgY29uc3VtZWRFbnRyeU51bWJlciA9IGNvbnN1bWVkRW50cnkub3JkZXJFbnRyeU51bWJlcjtcbiAgICBpZiAoZW50cnkuZW50cmllcyAmJiBlbnRyeS5lbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAoY29uc3Qgc3ViRW50cnkgb2YgZW50cnkuZW50cmllcykge1xuICAgICAgICBpZiAoc3ViRW50cnkuZW50cnlOdW1iZXIgPT09IGNvbnN1bWVkRW50cnlOdW1iZXIpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY29uc3VtZWRFbnRyeU51bWJlciA9PT0gZW50cnkuZW50cnlOdW1iZXI7XG4gICAgfVxuICB9XG59XG4iXX0=