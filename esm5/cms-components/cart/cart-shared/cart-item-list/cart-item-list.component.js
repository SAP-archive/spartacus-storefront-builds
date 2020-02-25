import { __decorate, __values } from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService, ConsignmentEntry, FeatureConfigService, PromotionLocation, PromotionResult, SelectiveCartService, } from '@spartacus/core';
import { map, startWith } from 'rxjs/operators';
var CartItemListComponent = /** @class */ (function () {
    function CartItemListComponent(cartService, selectiveCartService, featureConfig) {
        this.cartService = cartService;
        this.selectiveCartService = selectiveCartService;
        this.featureConfig = featureConfig;
        this.readonly = false;
        this.hasHeader = true;
        this.options = {
            isSaveForLater: false,
            optionalBtn: null,
        };
        this._items = [];
        this.potentialProductPromotions = [];
        this.promotionLocation = PromotionLocation.ActiveCart;
    }
    Object.defineProperty(CartItemListComponent.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (items) {
            this.resolveItems(items);
            this.createForm();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartItemListComponent.prototype, "setLoading", {
        set: function (value) {
            if (!this.readonly) {
                // Whenver the cart is loading, we disable the complete form
                // to avoid any user interaction with the cart.
                value
                    ? this.form.disable({ emitEvent: false })
                    : this.form.enable({ emitEvent: false });
            }
        },
        enumerable: true,
        configurable: true
    });
    //TODO remove feature flag for #5958
    CartItemListComponent.prototype.isSaveForLaterEnabled = function () {
        if (this.featureConfig) {
            return this.featureConfig.isEnabled('saveForLater');
        }
        return false;
    };
    //TODO remove feature flag for #5958
    /**
     * The items we're getting form the input do not have a consistent model.
     * In case of a `consignmentEntry`, we need to normalize the data from the orderEntry.
     */
    CartItemListComponent.prototype.resolveItems = function (items) {
        if (items.every(function (item) { return item.hasOwnProperty('orderEntry'); })) {
            this._items = items.map(function (consignmentEntry) {
                var entry = Object.assign({}, consignmentEntry.orderEntry);
                entry.quantity = consignmentEntry.quantity;
                return entry;
            });
        }
        else {
            this._items = items;
        }
    };
    CartItemListComponent.prototype.createForm = function () {
        var _this = this;
        this.form = new FormGroup({});
        this._items.forEach(function (item) {
            var code = item.product.code;
            var group = new FormGroup({
                entryNumber: new FormControl(item.entryNumber),
                quantity: new FormControl(item.quantity, { updateOn: 'blur' }),
            });
            if (!item.updateable || _this.readonly) {
                group.disable();
            }
            _this.form.addControl(code, group);
        });
    };
    CartItemListComponent.prototype.removeEntry = function (item) {
        if (this.selectiveCartService && this.options.isSaveForLater) {
            this.selectiveCartService.removeEntry(item);
        }
        else {
            this.cartService.removeEntry(item);
        }
        delete this.form.controls[item.product.code];
    };
    CartItemListComponent.prototype.getControl = function (item) {
        var _this = this;
        return this.form.get(item.product.code).valueChanges.pipe(
        // tslint:disable-next-line:deprecation
        startWith(null), map(function (value) {
            if (value && _this.selectiveCartService && _this.options.isSaveForLater) {
                _this.selectiveCartService.updateEntry(value.entryNumber, value.quantity);
            }
            else if (value) {
                _this.cartService.updateEntry(value.entryNumber, value.quantity);
            }
        }), map(function () { return _this.form.get(item.product.code); }));
    };
    CartItemListComponent.prototype.getPotentialProductPromotionsForItem = function (item) {
        var e_1, _a, e_2, _b;
        var entryPromotions = [];
        //don't show promotions in saveforlater
        if (this.options.isSaveForLater) {
            return entryPromotions;
        }
        if (this.potentialProductPromotions &&
            this.potentialProductPromotions.length > 0) {
            try {
                for (var _c = __values(this.potentialProductPromotions), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var promotion = _d.value;
                    if (promotion.description &&
                        promotion.consumedEntries &&
                        promotion.consumedEntries.length > 0) {
                        try {
                            for (var _e = (e_2 = void 0, __values(promotion.consumedEntries)), _f = _e.next(); !_f.done; _f = _e.next()) {
                                var consumedEntry = _f.value;
                                if (this.isConsumedByEntry(consumedEntry, item)) {
                                    entryPromotions.push(promotion);
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return entryPromotions;
    };
    CartItemListComponent.prototype.isConsumedByEntry = function (consumedEntry, entry) {
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
    CartItemListComponent.ctorParameters = function () { return [
        { type: CartService },
        { type: SelectiveCartService },
        { type: FeatureConfigService }
    ]; };
    __decorate([
        Input()
    ], CartItemListComponent.prototype, "readonly", void 0);
    __decorate([
        Input()
    ], CartItemListComponent.prototype, "hasHeader", void 0);
    __decorate([
        Input()
    ], CartItemListComponent.prototype, "options", void 0);
    __decorate([
        Input('items')
    ], CartItemListComponent.prototype, "items", null);
    __decorate([
        Input()
    ], CartItemListComponent.prototype, "potentialProductPromotions", void 0);
    __decorate([
        Input()
    ], CartItemListComponent.prototype, "promotionLocation", void 0);
    __decorate([
        Input('cartIsLoading')
    ], CartItemListComponent.prototype, "setLoading", null);
    CartItemListComponent = __decorate([
        Component({
            selector: 'cx-cart-item-list',
            template: "<div *ngIf=\"hasHeader\" class=\"d-none d-md-block d-lg-block d-xl-block\">\n  <div class=\"cx-item-list-header row\">\n    <div class=\"cx-item-list-desc col-md-5 col-lg-5 col-xl-6\">\n      {{ 'cartItems.description' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-price col-md-3 col-lg-2 col-xl-2\">\n      {{ 'cartItems.itemPrice' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-qty col-md-2 col-lg-3 col-xl-2\">\n      {{ 'cartItems.quantity' | cxTranslate }}\n    </div>\n\n    <ng-container\n      *ngIf=\"\n        isSaveForLaterEnabled() && options.isSaveForLater;\n        else totalHeader\n      \"\n    >\n      <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n        {{ 'saveForLaterItems.stock' | cxTranslate }}\n      </div>\n    </ng-container>\n  </div>\n</div>\n\n<div class=\"cx-item-list-row\" *ngFor=\"let item of items; let i = index\">\n  <div\n    class=\"cx-item-list-items\"\n    *ngIf=\"getControl(item) | async as control\"\n    [class.is-changed]=\"control.get('quantity').dirty\"\n  >\n    <cx-cart-item\n      [item]=\"item\"\n      [quantityControl]=\"control.get('quantity')\"\n      [readonly]=\"readonly\"\n      [potentialProductPromotions]=\"getPotentialProductPromotionsForItem(item)\"\n      [promotionLocation]=\"promotionLocation\"\n      [options]=\"options\"\n    >\n    </cx-cart-item>\n  </div>\n</div>\n\n<ng-template #totalHeader>\n  <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n    {{ 'cartItems.total' | cxTranslate }}\n  </div>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], CartItemListComponent);
    return CartItemListComponent;
}());
export { CartItemListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXNoYXJlZC9jYXJ0LWl0ZW0tbGlzdC9jYXJ0LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUNMLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixlQUFlLEVBQ2Ysb0JBQW9CLEdBQ3JCLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVdoRDtJQW1ERSwrQkFDWSxXQUF3QixFQUN4QixvQkFBMkMsRUFDN0MsYUFBb0M7UUFGbEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUF1QjtRQUM3QyxrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7UUFyRHJDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUVqQixZQUFPLEdBQTZCO1lBQzNDLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUM7UUFFTSxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBZW5CLCtCQUEwQixHQUFzQixFQUFFLENBQUM7UUFDbkQsc0JBQWlCLEdBQXNCLGlCQUFpQixDQUFDLFVBQVUsQ0FBQztJQTZCMUUsQ0FBQztJQXRDSixzQkFBSSx3Q0FBSzthQUlUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FB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QjtJQUVqQjtRQUFSLEtBQUssRUFBRTswREFHTjtJQVNGO1FBSkMsS0FBSyxDQUFDLE9BQU8sQ0FBQztzREFPZDtJQUtRO1FBQVIsS0FBSyxFQUFFOzZFQUFvRDtJQUNuRDtRQUFSLEtBQUssRUFBRTtvRUFBcUU7SUFFckQ7UUFBdkIsS0FBSyxDQUFDLGVBQWUsQ0FBQzsyREFRdEI7SUFwQ1UscUJBQXFCO1FBTGpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsNGhEQUE4QztZQUM5QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1cscUJBQXFCLENBdUtqQztJQUFELDRCQUFDO0NBQUEsQUF2S0QsSUF1S0M7U0F2S1kscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBDYXJ0U2VydmljZSxcbiAgQ29uc2lnbm1lbnRFbnRyeSxcbiAgRmVhdHVyZUNvbmZpZ1NlcnZpY2UsXG4gIFByb21vdGlvbkxvY2F0aW9uLFxuICBQcm9tb3Rpb25SZXN1bHQsXG4gIFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBDYXJ0SXRlbUNvbXBvbmVudE9wdGlvbnMsXG4gIEl0ZW0sXG59IGZyb20gJy4uL2NhcnQtaXRlbS9jYXJ0LWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2FydC1pdGVtLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FydC1pdGVtLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydEl0ZW1MaXN0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgcmVhZG9ubHkgPSBmYWxzZTtcblxuICBASW5wdXQoKSBoYXNIZWFkZXIgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIG9wdGlvbnM6IENhcnRJdGVtQ29tcG9uZW50T3B0aW9ucyA9IHtcbiAgICBpc1NhdmVGb3JMYXRlcjogZmFsc2UsXG4gICAgb3B0aW9uYWxCdG46IG51bGwsXG4gIH07XG5cbiAgcHJpdmF0ZSBfaXRlbXM6IEl0ZW1bXSA9IFtdO1xuICBmb3JtOiBGb3JtR3JvdXA7XG5cbiAgQElucHV0KCdpdGVtcycpXG4gIC8vIFRPRE86IGN1cnJlbnRseSB3ZSdyZSBnZXR0aW5nIGEgbmV3IGFycmF5IG9mIGl0ZW1zIGlmIHRoZSBjYXJ0IGNoYW5nZXMuXG4gIC8vIHByZXR0eSBhbm5veWluZyBhcyBpdCBmb3JjZXMgYSByZXBhaW50IG9uIHRoZSBzY3JlZW4sXG4gIC8vIHdoaWNoIGlzIG5vdGljYWJsZSBpbiB0aGUgVUkuXG4gIHNldCBpdGVtcyhpdGVtczogSXRlbVtdKSB7XG4gICAgdGhpcy5yZXNvbHZlSXRlbXMoaXRlbXMpO1xuICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICB9XG4gIGdldCBpdGVtcygpOiBJdGVtW10ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgfVxuXG4gIEBJbnB1dCgpIHBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zOiBQcm9tb3Rpb25SZXN1bHRbXSA9IFtdO1xuICBASW5wdXQoKSBwcm9tb3Rpb25Mb2NhdGlvbjogUHJvbW90aW9uTG9jYXRpb24gPSBQcm9tb3Rpb25Mb2NhdGlvbi5BY3RpdmVDYXJ0O1xuXG4gIEBJbnB1dCgnY2FydElzTG9hZGluZycpIHNldCBzZXRMb2FkaW5nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgaWYgKCF0aGlzLnJlYWRvbmx5KSB7XG4gICAgICAvLyBXaGVudmVyIHRoZSBjYXJ0IGlzIGxvYWRpbmcsIHdlIGRpc2FibGUgdGhlIGNvbXBsZXRlIGZvcm1cbiAgICAgIC8vIHRvIGF2b2lkIGFueSB1c2VyIGludGVyYWN0aW9uIHdpdGggdGhlIGNhcnQuXG4gICAgICB2YWx1ZVxuICAgICAgICA/IHRoaXMuZm9ybS5kaXNhYmxlKHsgZW1pdEV2ZW50OiBmYWxzZSB9KVxuICAgICAgICA6IHRoaXMuZm9ybS5lbmFibGUoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBzZWxlY3RpdmVDYXJ0U2VydmljZTogU2VsZWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgZmVhdHVyZUNvbmZpZzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKTtcblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS41XG4gICAqIEFkZCBzZWxlY3RpdmVDYXJ0U2VydmljZSBhdXRoU2VydmljZSByb3V0aW5nU2VydmljZSBhbmQgZmVhdHVyZUNvbmZpZyBmb3Igc2F2ZSBmb3IgbGF0ZXIuXG4gICAqIFJlbW92ZSBpc3N1ZTogIzU5NThcbiAgICovXG4gIGNvbnN0cnVjdG9yKGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgc2VsZWN0aXZlQ2FydFNlcnZpY2U/OiBTZWxlY3RpdmVDYXJ0U2VydmljZSxcbiAgICBwcml2YXRlIGZlYXR1cmVDb25maWc/OiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgLy9UT0RPIHJlbW92ZSBmZWF0dXJlIGZsYWcgZm9yICM1OTU4XG4gIGlzU2F2ZUZvckxhdGVyRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5mZWF0dXJlQ29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5mZWF0dXJlQ29uZmlnLmlzRW5hYmxlZCgnc2F2ZUZvckxhdGVyJyk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvL1RPRE8gcmVtb3ZlIGZlYXR1cmUgZmxhZyBmb3IgIzU5NThcblxuICAvKipcbiAgICogVGhlIGl0ZW1zIHdlJ3JlIGdldHRpbmcgZm9ybSB0aGUgaW5wdXQgZG8gbm90IGhhdmUgYSBjb25zaXN0ZW50IG1vZGVsLlxuICAgKiBJbiBjYXNlIG9mIGEgYGNvbnNpZ25tZW50RW50cnlgLCB3ZSBuZWVkIHRvIG5vcm1hbGl6ZSB0aGUgZGF0YSBmcm9tIHRoZSBvcmRlckVudHJ5LlxuICAgKi9cbiAgcHJpdmF0ZSByZXNvbHZlSXRlbXMoaXRlbXM6IEl0ZW1bXSk6IHZvaWQge1xuICAgIGlmIChpdGVtcy5ldmVyeShpdGVtID0+IGl0ZW0uaGFzT3duUHJvcGVydHkoJ29yZGVyRW50cnknKSkpIHtcbiAgICAgIHRoaXMuX2l0ZW1zID0gaXRlbXMubWFwKGNvbnNpZ25tZW50RW50cnkgPT4ge1xuICAgICAgICBjb25zdCBlbnRyeSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAge30sXG4gICAgICAgICAgKGNvbnNpZ25tZW50RW50cnkgYXMgQ29uc2lnbm1lbnRFbnRyeSkub3JkZXJFbnRyeVxuICAgICAgICApO1xuICAgICAgICBlbnRyeS5xdWFudGl0eSA9IGNvbnNpZ25tZW50RW50cnkucXVhbnRpdHk7XG4gICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRm9ybSgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHt9KTtcbiAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgeyBjb2RlIH0gPSBpdGVtLnByb2R1Y3Q7XG4gICAgICBjb25zdCBncm91cCA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgICBlbnRyeU51bWJlcjogbmV3IEZvcm1Db250cm9sKCg8YW55Pml0ZW0pLmVudHJ5TnVtYmVyKSxcbiAgICAgICAgcXVhbnRpdHk6IG5ldyBGb3JtQ29udHJvbChpdGVtLnF1YW50aXR5LCB7IHVwZGF0ZU9uOiAnYmx1cicgfSksXG4gICAgICB9KTtcbiAgICAgIGlmICghaXRlbS51cGRhdGVhYmxlIHx8IHRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgZ3JvdXAuZGlzYWJsZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5mb3JtLmFkZENvbnRyb2woY29kZSwgZ3JvdXApO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRW50cnkoaXRlbTogSXRlbSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlbGVjdGl2ZUNhcnRTZXJ2aWNlICYmIHRoaXMub3B0aW9ucy5pc1NhdmVGb3JMYXRlcikge1xuICAgICAgdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZS5yZW1vdmVFbnRyeShpdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYXJ0U2VydmljZS5yZW1vdmVFbnRyeShpdGVtKTtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuZm9ybS5jb250cm9sc1tpdGVtLnByb2R1Y3QuY29kZV07XG4gIH1cblxuICBnZXRDb250cm9sKGl0ZW06IEl0ZW0pOiBPYnNlcnZhYmxlPEZvcm1Hcm91cD4ge1xuICAgIHJldHVybiB0aGlzLmZvcm0uZ2V0KGl0ZW0ucHJvZHVjdC5jb2RlKS52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkZXByZWNhdGlvblxuICAgICAgc3RhcnRXaXRoKG51bGwpLFxuICAgICAgbWFwKHZhbHVlID0+IHtcbiAgICAgICAgaWYgKHZhbHVlICYmIHRoaXMuc2VsZWN0aXZlQ2FydFNlcnZpY2UgJiYgdGhpcy5vcHRpb25zLmlzU2F2ZUZvckxhdGVyKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZS51cGRhdGVFbnRyeShcbiAgICAgICAgICAgIHZhbHVlLmVudHJ5TnVtYmVyLFxuICAgICAgICAgICAgdmFsdWUucXVhbnRpdHlcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5jYXJ0U2VydmljZS51cGRhdGVFbnRyeSh2YWx1ZS5lbnRyeU51bWJlciwgdmFsdWUucXVhbnRpdHkpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoKSA9PiA8Rm9ybUdyb3VwPnRoaXMuZm9ybS5nZXQoaXRlbS5wcm9kdWN0LmNvZGUpKVxuICAgICk7XG4gIH1cblxuICBnZXRQb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9uc0Zvckl0ZW0oaXRlbTogSXRlbSk6IFByb21vdGlvblJlc3VsdFtdIHtcbiAgICBjb25zdCBlbnRyeVByb21vdGlvbnM6IFByb21vdGlvblJlc3VsdFtdID0gW107XG4gICAgLy9kb24ndCBzaG93IHByb21vdGlvbnMgaW4gc2F2ZWZvcmxhdGVyXG4gICAgaWYgKHRoaXMub3B0aW9ucy5pc1NhdmVGb3JMYXRlcikge1xuICAgICAgcmV0dXJuIGVudHJ5UHJvbW90aW9ucztcbiAgICB9XG4gICAgaWYgKFxuICAgICAgdGhpcy5wb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9ucyAmJlxuICAgICAgdGhpcy5wb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9ucy5sZW5ndGggPiAwXG4gICAgKSB7XG4gICAgICBmb3IgKGNvbnN0IHByb21vdGlvbiBvZiB0aGlzLnBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9tb3Rpb24uZGVzY3JpcHRpb24gJiZcbiAgICAgICAgICBwcm9tb3Rpb24uY29uc3VtZWRFbnRyaWVzICYmXG4gICAgICAgICAgcHJvbW90aW9uLmNvbnN1bWVkRW50cmllcy5sZW5ndGggPiAwXG4gICAgICAgICkge1xuICAgICAgICAgIGZvciAoY29uc3QgY29uc3VtZWRFbnRyeSBvZiBwcm9tb3Rpb24uY29uc3VtZWRFbnRyaWVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc0NvbnN1bWVkQnlFbnRyeShjb25zdW1lZEVudHJ5LCBpdGVtKSkge1xuICAgICAgICAgICAgICBlbnRyeVByb21vdGlvbnMucHVzaChwcm9tb3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZW50cnlQcm9tb3Rpb25zO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0NvbnN1bWVkQnlFbnRyeShjb25zdW1lZEVudHJ5OiBhbnksIGVudHJ5OiBhbnkpOiBib29sZWFuIHtcbiAgICBjb25zdCBjb25zdW1lZEVudHJ5TnVtYmVyID0gY29uc3VtZWRFbnRyeS5vcmRlckVudHJ5TnVtYmVyO1xuICAgIGlmIChlbnRyeS5lbnRyaWVzICYmIGVudHJ5LmVudHJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgZm9yIChjb25zdCBzdWJFbnRyeSBvZiBlbnRyeS5lbnRyaWVzKSB7XG4gICAgICAgIGlmIChzdWJFbnRyeS5lbnRyeU51bWJlciA9PT0gY29uc3VtZWRFbnRyeU51bWJlcikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjb25zdW1lZEVudHJ5TnVtYmVyID09PSBlbnRyeS5lbnRyeU51bWJlcjtcbiAgICB9XG4gIH1cbn1cbiJdfQ==