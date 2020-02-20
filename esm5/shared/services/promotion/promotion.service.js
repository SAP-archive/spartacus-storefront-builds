import { __decorate, __read, __spread, __values } from "tslib";
import { Injectable } from '@angular/core';
import { OrderEntry, PromotionResult, CartService, Cart, Order, CheckoutService, PromotionLocation, } from '@spartacus/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrderDetailsService } from '../../../cms-components/myaccount/order/order-details/order-details.service';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "../../../cms-components/myaccount/order/order-details/order-details.service";
var PromotionService = /** @class */ (function () {
    function PromotionService(cartService, orderDetailsService, checkoutService) {
        this.cartService = cartService;
        this.orderDetailsService = orderDetailsService;
        this.checkoutService = checkoutService;
    }
    PromotionService.prototype.getOrderPromotions = function (promotionLocation) {
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
    };
    PromotionService.prototype.getOrderPromotionsFromCart = function () {
        var _this = this;
        return this.cartService
            .getActive()
            .pipe(map(function (cart) { return _this.getOrderPromotionsFromCartHelper(cart); }));
    };
    PromotionService.prototype.getOrderPromotionsFromCartHelper = function (cart) {
        var potentialPromotions = [];
        potentialPromotions.push.apply(potentialPromotions, __spread((cart.potentialOrderPromotions || [])));
        var appliedPromotions = [];
        appliedPromotions.push.apply(appliedPromotions, __spread((cart.appliedOrderPromotions || [])));
        return __spread(potentialPromotions, appliedPromotions);
    };
    PromotionService.prototype.getOrderPromotionsFromCheckout = function () {
        var _this = this;
        return this.checkoutService
            .getOrderDetails()
            .pipe(map(function (order) { return _this.getOrderPromotionsFromOrderHelper(order); }));
    };
    PromotionService.prototype.getOrderPromotionsFromOrder = function () {
        var _this = this;
        return this.orderDetailsService
            .getOrderDetails()
            .pipe(map(function (order) { return _this.getOrderPromotionsFromOrderHelper(order); }));
    };
    PromotionService.prototype.getOrderPromotionsFromOrderHelper = function (order) {
        var appliedOrderPromotions = [];
        appliedOrderPromotions.push.apply(appliedOrderPromotions, __spread((order.appliedOrderPromotions || [])));
        return appliedOrderPromotions;
    };
    PromotionService.prototype.getProductPromotionForEntry = function (item, promotionLocation) {
        var _this = this;
        switch (promotionLocation) {
            case PromotionLocation.ActiveCart:
                return this.cartService
                    .getActive()
                    .pipe(map(function (cart) {
                    return _this.getProductPromotion(item, cart.appliedProductPromotions || []);
                }));
            case PromotionLocation.Checkout:
                return this.checkoutService
                    .getOrderDetails()
                    .pipe(map(function (order) {
                    return _this.getProductPromotion(item, order.appliedProductPromotions || []);
                }));
            case PromotionLocation.Order:
                return this.orderDetailsService
                    .getOrderDetails()
                    .pipe(map(function (order) {
                    return _this.getProductPromotion(item, order.appliedProductPromotions || []);
                }));
        }
    };
    PromotionService.prototype.getProductPromotion = function (item, promotions) {
        var e_1, _a, e_2, _b;
        var entryPromotions = [];
        if (promotions && promotions.length > 0) {
            try {
                for (var promotions_1 = __values(promotions), promotions_1_1 = promotions_1.next(); !promotions_1_1.done; promotions_1_1 = promotions_1.next()) {
                    var promotion = promotions_1_1.value;
                    if (promotion.description &&
                        promotion.consumedEntries &&
                        promotion.consumedEntries.length > 0) {
                        try {
                            for (var _c = (e_2 = void 0, __values(promotion.consumedEntries)), _d = _c.next(); !_d.done; _d = _c.next()) {
                                var consumedEntry = _d.value;
                                if (this.isConsumedByEntry(consumedEntry, item)) {
                                    entryPromotions.push(promotion);
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (promotions_1_1 && !promotions_1_1.done && (_a = promotions_1.return)) _a.call(promotions_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return entryPromotions;
    };
    PromotionService.prototype.isConsumedByEntry = function (consumedEntry, entry) {
        var e_3, _a;
        var consumedEntryNumber = consumedEntry.orderEntryNumber;
        if (entry.entries && entry.entries.length > 0) {
            try {
                for (var _b = __values(entry.entries), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var subEntry = _c.value;
                    if (subEntry.entryNumber === consumedEntryNumber) {
                        return true;
                    }
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_3) throw e_3.error; }
            }
            return false;
        }
        else {
            return consumedEntryNumber === entry.entryNumber;
        }
    };
    PromotionService.ctorParameters = function () { return [
        { type: CartService },
        { type: OrderDetailsService },
        { type: CheckoutService }
    ]; };
    PromotionService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PromotionService_Factory() { return new PromotionService(i0.ɵɵinject(i1.CartService), i0.ɵɵinject(i2.OrderDetailsService), i0.ɵɵinject(i1.CheckoutService)); }, token: PromotionService, providedIn: "root" });
    PromotionService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], PromotionService);
    return PromotionService;
}());
export { PromotionService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbW90aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvc2VydmljZXMvcHJvbW90aW9uL3Byb21vdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxVQUFVLEVBQ1YsZUFBZSxFQUNmLFdBQVcsRUFDWCxJQUFJLEVBQ0osS0FBSyxFQUNMLGVBQWUsRUFDZixpQkFBaUIsR0FDbEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQzs7OztBQUtsSDtJQUNFLDBCQUNZLFdBQXdCLEVBQ3hCLG1CQUF3QyxFQUN4QyxlQUFnQztRQUZoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUN6QyxDQUFDO0lBRUosNkNBQWtCLEdBQWxCLFVBQ0UsaUJBQW9DO1FBRXBDLFFBQVEsaUJBQWlCLEVBQUU7WUFDekIsS0FBSyxpQkFBaUIsQ0FBQyxVQUFVO2dCQUMvQixPQUFPLElBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1lBQzNDLEtBQUssaUJBQWlCLENBQUMsUUFBUTtnQkFDN0IsT0FBTyxJQUFJLENBQUMsOEJBQThCLEVBQUUsQ0FBQztZQUMvQyxLQUFLLGlCQUFpQixDQUFDLEtBQUs7Z0JBQzFCLE9BQU8sSUFBSSxDQUFDLDJCQUEyQixFQUFFLENBQUM7WUFDNUM7Z0JBQ0UsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDakI7SUFD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QUNMLE9BQU8sbUJBQW1CLEtBQUssS0FBSyxDQUFDLFdBQVcsQ0FBQztTQUNsRDtJQUNILENBQUM7O2dCQW5Jd0IsV0FBVztnQkFDSCxtQkFBbUI7Z0JBQ3ZCLGVBQWU7OztJQUpqQyxnQkFBZ0I7UUFINUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGdCQUFnQixDQXNJNUI7MkJBdkpEO0NBdUpDLEFBdElELElBc0lDO1NBdElZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE9yZGVyRW50cnksXG4gIFByb21vdGlvblJlc3VsdCxcbiAgQ2FydFNlcnZpY2UsXG4gIENhcnQsXG4gIE9yZGVyLFxuICBDaGVja291dFNlcnZpY2UsXG4gIFByb21vdGlvbkxvY2F0aW9uLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yZGVyRGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvbW90aW9uU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIG9yZGVyRGV0YWlsc1NlcnZpY2U6IE9yZGVyRGV0YWlsc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlXG4gICkge31cblxuICBnZXRPcmRlclByb21vdGlvbnMoXG4gICAgcHJvbW90aW9uTG9jYXRpb246IFByb21vdGlvbkxvY2F0aW9uXG4gICk6IE9ic2VydmFibGU8UHJvbW90aW9uUmVzdWx0W10+IHtcbiAgICBzd2l0Y2ggKHByb21vdGlvbkxvY2F0aW9uKSB7XG4gICAgICBjYXNlIFByb21vdGlvbkxvY2F0aW9uLkFjdGl2ZUNhcnQ6XG4gICAgICAgIHJldHVybiB0aGlzLmdldE9yZGVyUHJvbW90aW9uc0Zyb21DYXJ0KCk7XG4gICAgICBjYXNlIFByb21vdGlvbkxvY2F0aW9uLkNoZWNrb3V0OlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRPcmRlclByb21vdGlvbnNGcm9tQ2hlY2tvdXQoKTtcbiAgICAgIGNhc2UgUHJvbW90aW9uTG9jYXRpb24uT3JkZXI6XG4gICAgICAgIHJldHVybiB0aGlzLmdldE9yZGVyUHJvbW90aW9uc0Zyb21PcmRlcigpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICB9XG4gIH1cblxuICBnZXRPcmRlclByb21vdGlvbnNGcm9tQ2FydCgpOiBPYnNlcnZhYmxlPFByb21vdGlvblJlc3VsdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuY2FydFNlcnZpY2VcbiAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgLnBpcGUobWFwKGNhcnQgPT4gdGhpcy5nZXRPcmRlclByb21vdGlvbnNGcm9tQ2FydEhlbHBlcihjYXJ0KSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPcmRlclByb21vdGlvbnNGcm9tQ2FydEhlbHBlcihjYXJ0OiBDYXJ0KTogUHJvbW90aW9uUmVzdWx0W10ge1xuICAgIGNvbnN0IHBvdGVudGlhbFByb21vdGlvbnMgPSBbXTtcbiAgICBwb3RlbnRpYWxQcm9tb3Rpb25zLnB1c2goLi4uKGNhcnQucG90ZW50aWFsT3JkZXJQcm9tb3Rpb25zIHx8IFtdKSk7XG5cbiAgICBjb25zdCBhcHBsaWVkUHJvbW90aW9ucyA9IFtdO1xuICAgIGFwcGxpZWRQcm9tb3Rpb25zLnB1c2goLi4uKGNhcnQuYXBwbGllZE9yZGVyUHJvbW90aW9ucyB8fCBbXSkpO1xuXG4gICAgcmV0dXJuIFsuLi5wb3RlbnRpYWxQcm9tb3Rpb25zLCAuLi5hcHBsaWVkUHJvbW90aW9uc107XG4gIH1cblxuICBnZXRPcmRlclByb21vdGlvbnNGcm9tQ2hlY2tvdXQoKTogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U2VydmljZVxuICAgICAgLmdldE9yZGVyRGV0YWlscygpXG4gICAgICAucGlwZShtYXAob3JkZXIgPT4gdGhpcy5nZXRPcmRlclByb21vdGlvbnNGcm9tT3JkZXJIZWxwZXIob3JkZXIpKSk7XG4gIH1cblxuICBnZXRPcmRlclByb21vdGlvbnNGcm9tT3JkZXIoKTogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT4ge1xuICAgIHJldHVybiB0aGlzLm9yZGVyRGV0YWlsc1NlcnZpY2VcbiAgICAgIC5nZXRPcmRlckRldGFpbHMoKVxuICAgICAgLnBpcGUobWFwKG9yZGVyID0+IHRoaXMuZ2V0T3JkZXJQcm9tb3Rpb25zRnJvbU9yZGVySGVscGVyKG9yZGVyKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPcmRlclByb21vdGlvbnNGcm9tT3JkZXJIZWxwZXIob3JkZXI6IE9yZGVyKTogUHJvbW90aW9uUmVzdWx0W10ge1xuICAgIGNvbnN0IGFwcGxpZWRPcmRlclByb21vdGlvbnMgPSBbXTtcbiAgICBhcHBsaWVkT3JkZXJQcm9tb3Rpb25zLnB1c2goLi4uKG9yZGVyLmFwcGxpZWRPcmRlclByb21vdGlvbnMgfHwgW10pKTtcblxuICAgIHJldHVybiBhcHBsaWVkT3JkZXJQcm9tb3Rpb25zO1xuICB9XG5cbiAgZ2V0UHJvZHVjdFByb21vdGlvbkZvckVudHJ5KFxuICAgIGl0ZW06IE9yZGVyRW50cnksXG4gICAgcHJvbW90aW9uTG9jYXRpb246IFByb21vdGlvbkxvY2F0aW9uXG4gICk6IE9ic2VydmFibGU8UHJvbW90aW9uUmVzdWx0W10+IHtcbiAgICBzd2l0Y2ggKHByb21vdGlvbkxvY2F0aW9uKSB7XG4gICAgICBjYXNlIFByb21vdGlvbkxvY2F0aW9uLkFjdGl2ZUNhcnQ6XG4gICAgICAgIHJldHVybiB0aGlzLmNhcnRTZXJ2aWNlXG4gICAgICAgICAgLmdldEFjdGl2ZSgpXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBtYXAoY2FydCA9PlxuICAgICAgICAgICAgICB0aGlzLmdldFByb2R1Y3RQcm9tb3Rpb24oXG4gICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICBjYXJ0LmFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucyB8fCBbXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgIGNhc2UgUHJvbW90aW9uTG9jYXRpb24uQ2hlY2tvdXQ6XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U2VydmljZVxuICAgICAgICAgIC5nZXRPcmRlckRldGFpbHMoKVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgbWFwKG9yZGVyID0+XG4gICAgICAgICAgICAgIHRoaXMuZ2V0UHJvZHVjdFByb21vdGlvbihcbiAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgIG9yZGVyLmFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucyB8fCBbXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgIGNhc2UgUHJvbW90aW9uTG9jYXRpb24uT3JkZXI6XG4gICAgICAgIHJldHVybiB0aGlzLm9yZGVyRGV0YWlsc1NlcnZpY2VcbiAgICAgICAgICAuZ2V0T3JkZXJEZXRhaWxzKClcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIG1hcChvcmRlciA9PlxuICAgICAgICAgICAgICB0aGlzLmdldFByb2R1Y3RQcm9tb3Rpb24oXG4gICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICBvcmRlci5hcHBsaWVkUHJvZHVjdFByb21vdGlvbnMgfHwgW11cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcm9kdWN0UHJvbW90aW9uKFxuICAgIGl0ZW06IE9yZGVyRW50cnksXG4gICAgcHJvbW90aW9uczogUHJvbW90aW9uUmVzdWx0W11cbiAgKTogUHJvbW90aW9uUmVzdWx0W10ge1xuICAgIGNvbnN0IGVudHJ5UHJvbW90aW9uczogUHJvbW90aW9uUmVzdWx0W10gPSBbXTtcbiAgICBpZiAocHJvbW90aW9ucyAmJiBwcm9tb3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAoY29uc3QgcHJvbW90aW9uIG9mIHByb21vdGlvbnMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb21vdGlvbi5kZXNjcmlwdGlvbiAmJlxuICAgICAgICAgIHByb21vdGlvbi5jb25zdW1lZEVudHJpZXMgJiZcbiAgICAgICAgICBwcm9tb3Rpb24uY29uc3VtZWRFbnRyaWVzLmxlbmd0aCA+IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBjb25zdW1lZEVudHJ5IG9mIHByb21vdGlvbi5jb25zdW1lZEVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ29uc3VtZWRCeUVudHJ5KGNvbnN1bWVkRW50cnksIGl0ZW0pKSB7XG4gICAgICAgICAgICAgIGVudHJ5UHJvbW90aW9ucy5wdXNoKHByb21vdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbnRyeVByb21vdGlvbnM7XG4gIH1cblxuICBwcml2YXRlIGlzQ29uc3VtZWRCeUVudHJ5KGNvbnN1bWVkRW50cnk6IGFueSwgZW50cnk6IGFueSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbnN1bWVkRW50cnlOdW1iZXIgPSBjb25zdW1lZEVudHJ5Lm9yZGVyRW50cnlOdW1iZXI7XG4gICAgaWYgKGVudHJ5LmVudHJpZXMgJiYgZW50cnkuZW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGNvbnN0IHN1YkVudHJ5IG9mIGVudHJ5LmVudHJpZXMpIHtcbiAgICAgICAgaWYgKHN1YkVudHJ5LmVudHJ5TnVtYmVyID09PSBjb25zdW1lZEVudHJ5TnVtYmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbnN1bWVkRW50cnlOdW1iZXIgPT09IGVudHJ5LmVudHJ5TnVtYmVyO1xuICAgIH1cbiAgfVxufVxuIl19