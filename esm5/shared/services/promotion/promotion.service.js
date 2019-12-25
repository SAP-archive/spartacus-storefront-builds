/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { CartService, CheckoutService, PromotionLocation, } from '@spartacus/core';
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
    /**
     * @param {?} promotionLocation
     * @return {?}
     */
    PromotionService.prototype.getOrderPromotions = /**
     * @param {?} promotionLocation
     * @return {?}
     */
    function (promotionLocation) {
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
    /**
     * @return {?}
     */
    PromotionService.prototype.getOrderPromotionsFromCart = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.cartService
            .getActive()
            .pipe(map((/**
         * @param {?} cart
         * @return {?}
         */
        function (cart) { return _this.getOrderPromotionsFromCartHelper(cart); })));
    };
    /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    PromotionService.prototype.getOrderPromotionsFromCartHelper = /**
     * @private
     * @param {?} cart
     * @return {?}
     */
    function (cart) {
        /** @type {?} */
        var potentialPromotions = [];
        potentialPromotions.push.apply(potentialPromotions, tslib_1.__spread((cart.potentialOrderPromotions || [])));
        /** @type {?} */
        var appliedPromotions = [];
        appliedPromotions.push.apply(appliedPromotions, tslib_1.__spread((cart.appliedOrderPromotions || [])));
        return tslib_1.__spread(potentialPromotions, appliedPromotions);
    };
    /**
     * @return {?}
     */
    PromotionService.prototype.getOrderPromotionsFromCheckout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.checkoutService
            .getOrderDetails()
            .pipe(map((/**
         * @param {?} order
         * @return {?}
         */
        function (order) { return _this.getOrderPromotionsFromOrderHelper(order); })));
    };
    /**
     * @return {?}
     */
    PromotionService.prototype.getOrderPromotionsFromOrder = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.orderDetailsService
            .getOrderDetails()
            .pipe(map((/**
         * @param {?} order
         * @return {?}
         */
        function (order) { return _this.getOrderPromotionsFromOrderHelper(order); })));
    };
    /**
     * @private
     * @param {?} order
     * @return {?}
     */
    PromotionService.prototype.getOrderPromotionsFromOrderHelper = /**
     * @private
     * @param {?} order
     * @return {?}
     */
    function (order) {
        /** @type {?} */
        var appliedOrderPromotions = [];
        appliedOrderPromotions.push.apply(appliedOrderPromotions, tslib_1.__spread((order.appliedOrderPromotions || [])));
        return appliedOrderPromotions;
    };
    /**
     * @param {?} item
     * @param {?} promotionLocation
     * @return {?}
     */
    PromotionService.prototype.getProductPromotionForEntry = /**
     * @param {?} item
     * @param {?} promotionLocation
     * @return {?}
     */
    function (item, promotionLocation) {
        var _this = this;
        switch (promotionLocation) {
            case PromotionLocation.ActiveCart:
                return this.cartService
                    .getActive()
                    .pipe(map((/**
                 * @param {?} cart
                 * @return {?}
                 */
                function (cart) {
                    return _this.getProductPromotion(item, cart.appliedProductPromotions || []);
                })));
            case PromotionLocation.Checkout:
                return this.checkoutService
                    .getOrderDetails()
                    .pipe(map((/**
                 * @param {?} order
                 * @return {?}
                 */
                function (order) {
                    return _this.getProductPromotion(item, order.appliedProductPromotions || []);
                })));
            case PromotionLocation.Order:
                return this.orderDetailsService
                    .getOrderDetails()
                    .pipe(map((/**
                 * @param {?} order
                 * @return {?}
                 */
                function (order) {
                    return _this.getProductPromotion(item, order.appliedProductPromotions || []);
                })));
        }
    };
    /**
     * @private
     * @param {?} item
     * @param {?} promotions
     * @return {?}
     */
    PromotionService.prototype.getProductPromotion = /**
     * @private
     * @param {?} item
     * @param {?} promotions
     * @return {?}
     */
    function (item, promotions) {
        var e_1, _a, e_2, _b;
        /** @type {?} */
        var entryPromotions = [];
        if (promotions && promotions.length > 0) {
            try {
                for (var promotions_1 = tslib_1.__values(promotions), promotions_1_1 = promotions_1.next(); !promotions_1_1.done; promotions_1_1 = promotions_1.next()) {
                    var promotion = promotions_1_1.value;
                    if (promotion.description &&
                        promotion.consumedEntries &&
                        promotion.consumedEntries.length > 0) {
                        try {
                            for (var _c = (e_2 = void 0, tslib_1.__values(promotion.consumedEntries)), _d = _c.next(); !_d.done; _d = _c.next()) {
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
    /**
     * @private
     * @param {?} consumedEntry
     * @param {?} entry
     * @return {?}
     */
    PromotionService.prototype.isConsumedByEntry = /**
     * @private
     * @param {?} consumedEntry
     * @param {?} entry
     * @return {?}
     */
    function (consumedEntry, entry) {
        var e_3, _a;
        /** @type {?} */
        var consumedEntryNumber = consumedEntry.orderEntryNumber;
        if (entry.entries && entry.entries.length > 0) {
            try {
                for (var _b = tslib_1.__values(entry.entries), _c = _b.next(); !_c.done; _c = _b.next()) {
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
    PromotionService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    PromotionService.ctorParameters = function () { return [
        { type: CartService },
        { type: OrderDetailsService },
        { type: CheckoutService }
    ]; };
    /** @nocollapse */ PromotionService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PromotionService_Factory() { return new PromotionService(i0.ɵɵinject(i1.CartService), i0.ɵɵinject(i2.OrderDetailsService), i0.ɵɵinject(i1.CheckoutService)); }, token: PromotionService, providedIn: "root" });
    return PromotionService;
}());
export { PromotionService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbW90aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvc2VydmljZXMvcHJvbW90aW9uL3Byb21vdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBR0wsV0FBVyxFQUdYLGVBQWUsRUFDZixpQkFBaUIsR0FDbEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQzs7OztBQUVsSDtJQUlFLDBCQUNZLFdBQXdCLEVBQ3hCLG1CQUF3QyxFQUN4QyxlQUFnQztRQUZoQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUN6QyxDQUFDOzs7OztJQUVKLDZDQUFrQjs7OztJQUFsQixVQUNFLGlCQUFvQztRQUVwQyxRQUFRLGlCQUFpQixFQUFFO1lBQ3pCLEtBQUssaUJBQWlCLENBQUMsVUFBVTtnQkFDL0IsT0FBTyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztZQUMzQyxLQUFLLGlCQUFpQixDQUFDLFFBQVE7Z0JBQzdCLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixFQUFFLENBQUM7WUFDL0MsS0FBSyxpQkFBaUIsQ0FBQyxLQUFLO2dCQUMxQixPQUFPLElBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO1lBQzVDO2dCQUNFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2pCO0lBQ0gsQ0FBQzs7OztJQUVELHFEQUEwQjs7O0lBQTFC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LENBQUM7U0FDZDthQUFNO1lBQ0wsT0FBTyxtQkFBbUIsS0FBSyxLQUFLLENBQUMsV0FBVyxDQUFDO1NBQ2xEO0lBQ0gsQ0FBQzs7Z0JBeElGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBWkMsV0FBVztnQkFRSixtQkFBbUI7Z0JBTDFCLGVBQWU7OzsyQkFQakI7Q0F1SkMsQUF6SUQsSUF5SUM7U0F0SVksZ0JBQWdCOzs7Ozs7SUFFekIsdUNBQWtDOzs7OztJQUNsQywrQ0FBa0Q7Ozs7O0lBQ2xELDJDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE9yZGVyRW50cnksXG4gIFByb21vdGlvblJlc3VsdCxcbiAgQ2FydFNlcnZpY2UsXG4gIENhcnQsXG4gIE9yZGVyLFxuICBDaGVja291dFNlcnZpY2UsXG4gIFByb21vdGlvbkxvY2F0aW9uLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9yZGVyRGV0YWlsc1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9jbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvb3JkZXItZGV0YWlscy9vcmRlci1kZXRhaWxzLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvbW90aW9uU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIG9yZGVyRGV0YWlsc1NlcnZpY2U6IE9yZGVyRGV0YWlsc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNoZWNrb3V0U2VydmljZTogQ2hlY2tvdXRTZXJ2aWNlXG4gICkge31cblxuICBnZXRPcmRlclByb21vdGlvbnMoXG4gICAgcHJvbW90aW9uTG9jYXRpb246IFByb21vdGlvbkxvY2F0aW9uXG4gICk6IE9ic2VydmFibGU8UHJvbW90aW9uUmVzdWx0W10+IHtcbiAgICBzd2l0Y2ggKHByb21vdGlvbkxvY2F0aW9uKSB7XG4gICAgICBjYXNlIFByb21vdGlvbkxvY2F0aW9uLkFjdGl2ZUNhcnQ6XG4gICAgICAgIHJldHVybiB0aGlzLmdldE9yZGVyUHJvbW90aW9uc0Zyb21DYXJ0KCk7XG4gICAgICBjYXNlIFByb21vdGlvbkxvY2F0aW9uLkNoZWNrb3V0OlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRPcmRlclByb21vdGlvbnNGcm9tQ2hlY2tvdXQoKTtcbiAgICAgIGNhc2UgUHJvbW90aW9uTG9jYXRpb24uT3JkZXI6XG4gICAgICAgIHJldHVybiB0aGlzLmdldE9yZGVyUHJvbW90aW9uc0Zyb21PcmRlcigpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICB9XG4gIH1cblxuICBnZXRPcmRlclByb21vdGlvbnNGcm9tQ2FydCgpOiBPYnNlcnZhYmxlPFByb21vdGlvblJlc3VsdFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuY2FydFNlcnZpY2VcbiAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgLnBpcGUobWFwKGNhcnQgPT4gdGhpcy5nZXRPcmRlclByb21vdGlvbnNGcm9tQ2FydEhlbHBlcihjYXJ0KSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPcmRlclByb21vdGlvbnNGcm9tQ2FydEhlbHBlcihjYXJ0OiBDYXJ0KTogUHJvbW90aW9uUmVzdWx0W10ge1xuICAgIGNvbnN0IHBvdGVudGlhbFByb21vdGlvbnMgPSBbXTtcbiAgICBwb3RlbnRpYWxQcm9tb3Rpb25zLnB1c2goLi4uKGNhcnQucG90ZW50aWFsT3JkZXJQcm9tb3Rpb25zIHx8IFtdKSk7XG5cbiAgICBjb25zdCBhcHBsaWVkUHJvbW90aW9ucyA9IFtdO1xuICAgIGFwcGxpZWRQcm9tb3Rpb25zLnB1c2goLi4uKGNhcnQuYXBwbGllZE9yZGVyUHJvbW90aW9ucyB8fCBbXSkpO1xuXG4gICAgcmV0dXJuIFsuLi5wb3RlbnRpYWxQcm9tb3Rpb25zLCAuLi5hcHBsaWVkUHJvbW90aW9uc107XG4gIH1cblxuICBnZXRPcmRlclByb21vdGlvbnNGcm9tQ2hlY2tvdXQoKTogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT4ge1xuICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U2VydmljZVxuICAgICAgLmdldE9yZGVyRGV0YWlscygpXG4gICAgICAucGlwZShtYXAob3JkZXIgPT4gdGhpcy5nZXRPcmRlclByb21vdGlvbnNGcm9tT3JkZXJIZWxwZXIob3JkZXIpKSk7XG4gIH1cblxuICBnZXRPcmRlclByb21vdGlvbnNGcm9tT3JkZXIoKTogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT4ge1xuICAgIHJldHVybiB0aGlzLm9yZGVyRGV0YWlsc1NlcnZpY2VcbiAgICAgIC5nZXRPcmRlckRldGFpbHMoKVxuICAgICAgLnBpcGUobWFwKG9yZGVyID0+IHRoaXMuZ2V0T3JkZXJQcm9tb3Rpb25zRnJvbU9yZGVySGVscGVyKG9yZGVyKSkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPcmRlclByb21vdGlvbnNGcm9tT3JkZXJIZWxwZXIob3JkZXI6IE9yZGVyKTogUHJvbW90aW9uUmVzdWx0W10ge1xuICAgIGNvbnN0IGFwcGxpZWRPcmRlclByb21vdGlvbnMgPSBbXTtcbiAgICBhcHBsaWVkT3JkZXJQcm9tb3Rpb25zLnB1c2goLi4uKG9yZGVyLmFwcGxpZWRPcmRlclByb21vdGlvbnMgfHwgW10pKTtcblxuICAgIHJldHVybiBhcHBsaWVkT3JkZXJQcm9tb3Rpb25zO1xuICB9XG5cbiAgZ2V0UHJvZHVjdFByb21vdGlvbkZvckVudHJ5KFxuICAgIGl0ZW06IE9yZGVyRW50cnksXG4gICAgcHJvbW90aW9uTG9jYXRpb246IFByb21vdGlvbkxvY2F0aW9uXG4gICk6IE9ic2VydmFibGU8UHJvbW90aW9uUmVzdWx0W10+IHtcbiAgICBzd2l0Y2ggKHByb21vdGlvbkxvY2F0aW9uKSB7XG4gICAgICBjYXNlIFByb21vdGlvbkxvY2F0aW9uLkFjdGl2ZUNhcnQ6XG4gICAgICAgIHJldHVybiB0aGlzLmNhcnRTZXJ2aWNlXG4gICAgICAgICAgLmdldEFjdGl2ZSgpXG4gICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICBtYXAoY2FydCA9PlxuICAgICAgICAgICAgICB0aGlzLmdldFByb2R1Y3RQcm9tb3Rpb24oXG4gICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICBjYXJ0LmFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucyB8fCBbXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgIGNhc2UgUHJvbW90aW9uTG9jYXRpb24uQ2hlY2tvdXQ6XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrb3V0U2VydmljZVxuICAgICAgICAgIC5nZXRPcmRlckRldGFpbHMoKVxuICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgbWFwKG9yZGVyID0+XG4gICAgICAgICAgICAgIHRoaXMuZ2V0UHJvZHVjdFByb21vdGlvbihcbiAgICAgICAgICAgICAgICBpdGVtLFxuICAgICAgICAgICAgICAgIG9yZGVyLmFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucyB8fCBbXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgIGNhc2UgUHJvbW90aW9uTG9jYXRpb24uT3JkZXI6XG4gICAgICAgIHJldHVybiB0aGlzLm9yZGVyRGV0YWlsc1NlcnZpY2VcbiAgICAgICAgICAuZ2V0T3JkZXJEZXRhaWxzKClcbiAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgIG1hcChvcmRlciA9PlxuICAgICAgICAgICAgICB0aGlzLmdldFByb2R1Y3RQcm9tb3Rpb24oXG4gICAgICAgICAgICAgICAgaXRlbSxcbiAgICAgICAgICAgICAgICBvcmRlci5hcHBsaWVkUHJvZHVjdFByb21vdGlvbnMgfHwgW11cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRQcm9kdWN0UHJvbW90aW9uKFxuICAgIGl0ZW06IE9yZGVyRW50cnksXG4gICAgcHJvbW90aW9uczogUHJvbW90aW9uUmVzdWx0W11cbiAgKTogUHJvbW90aW9uUmVzdWx0W10ge1xuICAgIGNvbnN0IGVudHJ5UHJvbW90aW9uczogUHJvbW90aW9uUmVzdWx0W10gPSBbXTtcbiAgICBpZiAocHJvbW90aW9ucyAmJiBwcm9tb3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAoY29uc3QgcHJvbW90aW9uIG9mIHByb21vdGlvbnMpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb21vdGlvbi5kZXNjcmlwdGlvbiAmJlxuICAgICAgICAgIHByb21vdGlvbi5jb25zdW1lZEVudHJpZXMgJiZcbiAgICAgICAgICBwcm9tb3Rpb24uY29uc3VtZWRFbnRyaWVzLmxlbmd0aCA+IDBcbiAgICAgICAgKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBjb25zdW1lZEVudHJ5IG9mIHByb21vdGlvbi5jb25zdW1lZEVudHJpZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ29uc3VtZWRCeUVudHJ5KGNvbnN1bWVkRW50cnksIGl0ZW0pKSB7XG4gICAgICAgICAgICAgIGVudHJ5UHJvbW90aW9ucy5wdXNoKHByb21vdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbnRyeVByb21vdGlvbnM7XG4gIH1cblxuICBwcml2YXRlIGlzQ29uc3VtZWRCeUVudHJ5KGNvbnN1bWVkRW50cnk6IGFueSwgZW50cnk6IGFueSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGNvbnN1bWVkRW50cnlOdW1iZXIgPSBjb25zdW1lZEVudHJ5Lm9yZGVyRW50cnlOdW1iZXI7XG4gICAgaWYgKGVudHJ5LmVudHJpZXMgJiYgZW50cnkuZW50cmllcy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGNvbnN0IHN1YkVudHJ5IG9mIGVudHJ5LmVudHJpZXMpIHtcbiAgICAgICAgaWYgKHN1YkVudHJ5LmVudHJ5TnVtYmVyID09PSBjb25zdW1lZEVudHJ5TnVtYmVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbnN1bWVkRW50cnlOdW1iZXIgPT09IGVudHJ5LmVudHJ5TnVtYmVyO1xuICAgIH1cbiAgfVxufVxuIl19