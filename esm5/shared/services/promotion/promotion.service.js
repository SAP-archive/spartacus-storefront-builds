import { __decorate, __read, __spread, __values } from "tslib";
import { Injectable } from '@angular/core';
import { ActiveCartService, Cart, CheckoutService, Order, OrderEntry, PromotionLocation, PromotionResult, } from '@spartacus/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrderDetailsService } from '../../../cms-components/myaccount/order/order-details/order-details.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../cms-components/myaccount/order/order-details/order-details.service";
import * as i2 from "@spartacus/core";
var PromotionService = /** @class */ (function () {
    function PromotionService(orderDetailsService, checkoutService, activeCartService) {
        this.orderDetailsService = orderDetailsService;
        this.checkoutService = checkoutService;
        this.activeCartService = activeCartService;
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
        return this.activeCartService
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
                return this.activeCartService
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
        { type: OrderDetailsService },
        { type: CheckoutService },
        { type: ActiveCartService }
    ]; };
    PromotionService.ɵprov = i0.ɵɵdefineInjectable({ factory: function PromotionService_Factory() { return new PromotionService(i0.ɵɵinject(i1.OrderDetailsService), i0.ɵɵinject(i2.CheckoutService), i0.ɵɵinject(i2.ActiveCartService)); }, token: PromotionService, providedIn: "root" });
    PromotionService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], PromotionService);
    return PromotionService;
}());
export { PromotionService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbW90aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvc2VydmljZXMvcHJvbW90aW9uL3Byb21vdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxpQkFBaUIsRUFDakIsSUFBSSxFQUNKLGVBQWUsRUFDZixLQUFLLEVBQ0wsVUFBVSxFQUNWLGlCQUFpQixFQUNqQixlQUFlLEdBQ2hCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkVBQTZFLENBQUM7Ozs7QUFLbEg7SUFDRSwwQkFDWSxtQkFBd0MsRUFDeEMsZUFBZ0MsRUFDaEMsaUJBQW9DO1FBRnBDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7SUFDN0MsQ0FBQztJQUVKLDZDQUFrQixHQUFsQixVQUNFLGlCQUFvQztRQUVwQyxRQUFRLGlCQUFpQixFQUFFO1lBQ3pCLEtBQUssaUJBQWlCLENBQUMsVUFBVTtnQkFDL0IsT0FBTyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztZQUMzQyxLQUFLLGlCQUFpQixDQUFDLFFBQVE7Z0JBQzdCLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUM7WUFDL0MsS0FBSyxpQkFBaUIsQ0FBQyxLQUFLO2dCQUMxQixPQUFPLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1lBQzVDO2dCQUNFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFD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QUM7U0FDZDthQUFNO1lBQ0wsT0FBTyxtQkFBbUIsS0FBSyxLQUFLLENBQUMsV0FBVyxDQUFDO1NBQ2xEO0lBQ0gsQ0FBQzs7Z0JBbklnQyxtQkFBbUI7Z0JBQ3ZCLGVBQWU7Z0JBQ2IsaUJBQWlCOzs7SUFKckMsZ0JBQWdCO1FBSDVCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxnQkFBZ0IsQ0FzSTVCOzJCQXZKRDtDQXVKQyxBQXRJRCxJQXNJQztTQXRJWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBY3RpdmVDYXJ0U2VydmljZSxcbiAgQ2FydCxcbiAgQ2hlY2tvdXRTZXJ2aWNlLFxuICBPcmRlcixcbiAgT3JkZXJFbnRyeSxcbiAgUHJvbW90aW9uTG9jYXRpb24sXG4gIFByb21vdGlvblJlc3VsdCxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPcmRlckRldGFpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbXlhY2NvdW50L29yZGVyL29yZGVyLWRldGFpbHMvb3JkZXItZGV0YWlscy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb21vdGlvblNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgb3JkZXJEZXRhaWxzU2VydmljZTogT3JkZXJEZXRhaWxzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY2hlY2tvdXRTZXJ2aWNlOiBDaGVja291dFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZVxuICApIHt9XG5cbiAgZ2V0T3JkZXJQcm9tb3Rpb25zKFxuICAgIHByb21vdGlvbkxvY2F0aW9uOiBQcm9tb3Rpb25Mb2NhdGlvblxuICApOiBPYnNlcnZhYmxlPFByb21vdGlvblJlc3VsdFtdPiB7XG4gICAgc3dpdGNoIChwcm9tb3Rpb25Mb2NhdGlvbikge1xuICAgICAgY2FzZSBQcm9tb3Rpb25Mb2NhdGlvbi5BY3RpdmVDYXJ0OlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRPcmRlclByb21vdGlvbnNGcm9tQ2FydCgpO1xuICAgICAgY2FzZSBQcm9tb3Rpb25Mb2NhdGlvbi5DaGVja291dDpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T3JkZXJQcm9tb3Rpb25zRnJvbUNoZWNrb3V0KCk7XG4gICAgICBjYXNlIFByb21vdGlvbkxvY2F0aW9uLk9yZGVyOlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRPcmRlclByb21vdGlvbnNGcm9tT3JkZXIoKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBvZihbXSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0T3JkZXJQcm9tb3Rpb25zRnJvbUNhcnQoKTogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT4ge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlXG4gICAgICAuZ2V0QWN0aXZlKClcbiAgICAgIC5waXBlKG1hcCgoY2FydCkgPT4gdGhpcy5nZXRPcmRlclByb21vdGlvbnNGcm9tQ2FydEhlbHBlcihjYXJ0KSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPcmRlclByb21vdGlvbnNGcm9tQ2FydEhlbHBlcihjYXJ0OiBDYXJ0KTogUHJvbW90aW9uUmVzdWx0W10ge1xuICAgIGNvbnN0IHBvdGVudGlhbFByb21vdGlvbnMgPSBbXTtcbiAgICBwb3RlbnRpYWxQcm9tb3Rpb25zLnB1c2goLi4uKGNhcnQucG90ZW50aWFsT3JkZXJQcm9tb3Rpb25zIHx8IFtdKSk7XG5cbiAgICBjb25zdCBhcHBsaWVkUHJvbW90aW9ucyA9IFtdO1xuICAgIGFwcGxpZWRQcm9tb3Rpb25zLnB1c2goLi4uKGNhcnQuYXBwbGllZE9yZGVyUHJvbW90aW9ucyB8fCBbXSkpO1xuXG4gICAgcmV0dXJuIFsuLi5wb3RlbnRpYWxQcm9tb3Rpb25zLCAuLi5hcHBsaWVkUHJvbW90aW9uc107XG4gIH1cblxuICBnZXRPcmRlclByb21vdGlvbnNGcm9tQ2hlY2tvdXQoKTogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U2VydmljZVxuICAgICAgLmdldE9yZGVyRGV0YWlscygpXG4gICAgICAucGlwZShtYXAoKG9yZGVyKSA9PiB0aGlzLmdldE9yZGVyUHJvbW90aW9uc0Zyb21PcmRlckhlbHBlcihvcmRlcikpKTtcbiAgfVxuXG4gIGdldE9yZGVyUHJvbW90aW9uc0Zyb21PcmRlcigpOiBPYnNlcnZhYmxlPFByb21vdGlvblJlc3VsdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMub3JkZXJEZXRhaWxzU2VydmljZVxuICAgICAgLmdldE9yZGVyRGV0YWlscygpXG4gICAgICAucGlwZShtYXAoKG9yZGVyKSA9PiB0aGlzLmdldE9yZGVyUHJvbW90aW9uc0Zyb21PcmRlckhlbHBlcihvcmRlcikpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T3JkZXJQcm9tb3Rpb25zRnJvbU9yZGVySGVscGVyKG9yZGVyOiBPcmRlcik6IFByb21vdGlvblJlc3VsdFtdIHtcbiAgICBjb25zdCBhcHBsaWVkT3JkZXJQcm9tb3Rpb25zID0gW107XG4gICAgYXBwbGllZE9yZGVyUHJvbW90aW9ucy5wdXNoKC4uLihvcmRlci5hcHBsaWVkT3JkZXJQcm9tb3Rpb25zIHx8IFtdKSk7XG5cbiAgICByZXR1cm4gYXBwbGllZE9yZGVyUHJvbW90aW9ucztcbiAgfVxuXG4gIGdldFByb2R1Y3RQcm9tb3Rpb25Gb3JFbnRyeShcbiAgICBpdGVtOiBPcmRlckVudHJ5LFxuICAgIHByb21vdGlvbkxvY2F0aW9uOiBQcm9tb3Rpb25Mb2NhdGlvblxuICApOiBPYnNlcnZhYmxlPFByb21vdGlvblJlc3VsdFtdPiB7XG4gICAgc3dpdGNoIChwcm9tb3Rpb25Mb2NhdGlvbikge1xuICAgICAgY2FzZSBQcm9tb3Rpb25Mb2NhdGlvbi5BY3RpdmVDYXJ0OlxuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVDYXJ0U2VydmljZVxuICAgICAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgbWFwKChjYXJ0KSA9PlxuICAgICAgICAgICAgICB0aGlzLmdldFByb2R1Y3RQcm9tb3Rpb24oXG4gICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICBjYXJ0LmFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucyB8fCBbXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgIGNhc2UgUHJvbW90aW9uTG9jYXRpb24uQ2hlY2tvdXQ6XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U2VydmljZVxuICAgICAgICAgIC5nZXRPcmRlckRldGFpbHMoKVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgbWFwKChvcmRlcikgPT5cbiAgICAgICAgICAgICAgdGhpcy5nZXRQcm9kdWN0UHJvbW90aW9uKFxuICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgb3JkZXIuYXBwbGllZFByb2R1Y3RQcm9tb3Rpb25zIHx8IFtdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgICAgY2FzZSBQcm9tb3Rpb25Mb2NhdGlvbi5PcmRlcjpcbiAgICAgICAgcmV0dXJuIHRoaXMub3JkZXJEZXRhaWxzU2VydmljZVxuICAgICAgICAgIC5nZXRPcmRlckRldGFpbHMoKVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgbWFwKChvcmRlcikgPT5cbiAgICAgICAgICAgICAgdGhpcy5nZXRQcm9kdWN0UHJvbW90aW9uKFxuICAgICAgICAgICAgICAgIGl0ZW0sXG4gICAgICAgICAgICAgICAgb3JkZXIuYXBwbGllZFByb2R1Y3RQcm9tb3Rpb25zIHx8IFtdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0UHJvZHVjdFByb21vdGlvbihcbiAgICBpdGVtOiBPcmRlckVudHJ5LFxuICAgIHByb21vdGlvbnM6IFByb21vdGlvblJlc3VsdFtdXG4gICk6IFByb21vdGlvblJlc3VsdFtdIHtcbiAgICBjb25zdCBlbnRyeVByb21vdGlvbnM6IFByb21vdGlvblJlc3VsdFtdID0gW107XG4gICAgaWYgKHByb21vdGlvbnMgJiYgcHJvbW90aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGNvbnN0IHByb21vdGlvbiBvZiBwcm9tb3Rpb25zKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9tb3Rpb24uZGVzY3JpcHRpb24gJiZcbiAgICAgICAgICBwcm9tb3Rpb24uY29uc3VtZWRFbnRyaWVzICYmXG4gICAgICAgICAgcHJvbW90aW9uLmNvbnN1bWVkRW50cmllcy5sZW5ndGggPiAwXG4gICAgICAgICkge1xuICAgICAgICAgIGZvciAoY29uc3QgY29uc3VtZWRFbnRyeSBvZiBwcm9tb3Rpb24uY29uc3VtZWRFbnRyaWVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0NvbnN1bWVkQnlFbnRyeShjb25zdW1lZEVudHJ5LCBpdGVtKSkge1xuICAgICAgICAgICAgICBlbnRyeVByb21vdGlvbnMucHVzaChwcm9tb3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZW50cnlQcm9tb3Rpb25zO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0NvbnN1bWVkQnlFbnRyeShjb25zdW1lZEVudHJ5OiBhbnksIGVudHJ5OiBhbnkpOiBib29sZWFuIHtcbiAgICBjb25zdCBjb25zdW1lZEVudHJ5TnVtYmVyID0gY29uc3VtZWRFbnRyeS5vcmRlckVudHJ5TnVtYmVyO1xuICAgIGlmIChlbnRyeS5lbnRyaWVzICYmIGVudHJ5LmVudHJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChjb25zdCBzdWJFbnRyeSBvZiBlbnRyeS5lbnRyaWVzKSB7XG4gICAgICAgIGlmIChzdWJFbnRyeS5lbnRyeU51bWJlciA9PT0gY29uc3VtZWRFbnRyeU51bWJlcikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjb25zdW1lZEVudHJ5TnVtYmVyID09PSBlbnRyeS5lbnRyeU51bWJlcjtcbiAgICB9XG4gIH1cbn1cbiJdfQ==