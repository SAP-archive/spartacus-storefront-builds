import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActiveCartService, ConsignmentEntry, FeatureConfigService, PromotionLocation, SelectiveCartService, } from '@spartacus/core';
import { map, startWith } from 'rxjs/operators';
var CartItemListComponent = /** @class */ (function () {
    function CartItemListComponent(activeCartService, selectiveCartService, featureConfig) {
        this.activeCartService = activeCartService;
        this.selectiveCartService = selectiveCartService;
        this.featureConfig = featureConfig;
        this.readonly = false;
        this.hasHeader = true;
        this.options = {
            isSaveForLater: false,
            optionalBtn: null,
        };
        this._items = [];
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
            this.activeCartService.removeEntry(item);
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
                _this.activeCartService.updateEntry(value.entryNumber, value.quantity);
            }
        }), map(function () { return _this.form.get(item.product.code); }));
    };
    CartItemListComponent.ctorParameters = function () { return [
        { type: ActiveCartService },
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
    ], CartItemListComponent.prototype, "promotionLocation", void 0);
    __decorate([
        Input('cartIsLoading')
    ], CartItemListComponent.prototype, "setLoading", null);
    CartItemListComponent = __decorate([
        Component({
            selector: 'cx-cart-item-list',
            template: "<div *ngIf=\"hasHeader\" class=\"d-none d-md-block d-lg-block d-xl-block\">\n  <div class=\"cx-item-list-header row\">\n    <div class=\"cx-item-list-desc col-md-5 col-lg-5 col-xl-6\">\n      {{ 'cartItems.description' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-price col-md-3 col-lg-2 col-xl-2\">\n      {{ 'cartItems.itemPrice' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-qty col-md-2 col-lg-3 col-xl-2\">\n      {{ 'cartItems.quantity' | cxTranslate }}\n    </div>\n\n    <ng-container\n      *ngIf=\"\n        isSaveForLaterEnabled() && options.isSaveForLater;\n        else totalHeader\n      \"\n    >\n      <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n        {{ 'saveForLaterItems.stock' | cxTranslate }}\n      </div>\n    </ng-container>\n  </div>\n</div>\n\n<div class=\"cx-item-list-row\" *ngFor=\"let item of items; let i = index\">\n  <div\n    class=\"cx-item-list-items\"\n    *ngIf=\"getControl(item) | async as control\"\n    [class.is-changed]=\"control.get('quantity').dirty\"\n  >\n    <cx-cart-item\n      [item]=\"item\"\n      [quantityControl]=\"control.get('quantity')\"\n      [readonly]=\"readonly\"\n      [promotionLocation]=\"promotionLocation\"\n      [options]=\"options\"\n    >\n    </cx-cart-item>\n  </div>\n</div>\n\n<ng-template #totalHeader>\n  <div class=\"cx-item-list-total col-md-2 col-lg-2 col-xl-2\">\n    {{ 'cartItems.total' | cxTranslate }}\n  </div>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], CartItemListComponent);
    return CartItemListComponent;
}());
export { CartItemListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXNoYXJlZC9jYXJ0LWl0ZW0tbGlzdC9jYXJ0LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixnQkFBZ0IsRUFDaEIsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBV2hEO0lBcUNFLCtCQUNZLGlCQUFvQyxFQUNwQyxvQkFBMEMsRUFDMUMsYUFBbUM7UUFGbkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQXZDdEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLFlBQU8sR0FBNkI7WUFDM0MsY0FBYyxFQUFFLEtBQUs7WUFDckIsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQztRQUVNLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFlbkIsc0JBQWlCLEdBQXNCLGlCQUFpQixDQUFDLFVBQVUsQ0FBQztJQWdCMUUsQ0FBQztJQXhCSixzQkFBSSx3Q0FBSzthQUlUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3JCLENBQUM7YUFORCxVQUFVLEtBQWE7WUFDckIs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ZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztPQUNXLHFCQUFxQixDQWdIakM7SUFBRCw0QkFBQztDQUFBLEFBaEhELElBZ0hDO1NBaEhZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQWN0aXZlQ2FydFNlcnZpY2UsXG4gIENvbnNpZ25tZW50RW50cnksXG4gIEZlYXR1cmVDb25maWdTZXJ2aWNlLFxuICBQcm9tb3Rpb25Mb2NhdGlvbixcbiAgU2VsZWN0aXZlQ2FydFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN0YXJ0V2l0aCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIENhcnRJdGVtQ29tcG9uZW50T3B0aW9ucyxcbiAgSXRlbSxcbn0gZnJvbSAnLi4vY2FydC1pdGVtL2NhcnQtaXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jYXJ0LWl0ZW0tbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJ0LWl0ZW0tbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0SXRlbUxpc3RDb21wb25lbnQge1xuICBASW5wdXQoKSByZWFkb25seSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGhhc0hlYWRlciA9IHRydWU7XG5cbiAgQElucHV0KCkgb3B0aW9uczogQ2FydEl0ZW1Db21wb25lbnRPcHRpb25zID0ge1xuICAgIGlzU2F2ZUZvckxhdGVyOiBmYWxzZSxcbiAgICBvcHRpb25hbEJ0bjogbnVsbCxcbiAgfTtcblxuICBwcml2YXRlIF9pdGVtczogSXRlbVtdID0gW107XG4gIGZvcm06IEZvcm1Hcm91cDtcblxuICBASW5wdXQoJ2l0ZW1zJylcbiAgLy8gVE9ETzogY3VycmVudGx5IHdlJ3JlIGdldHRpbmcgYSBuZXcgYXJyYXkgb2YgaXRlbXMgaWYgdGhlIGNhcnQgY2hhbmdlcy5cbiAgLy8gcHJldHR5IGFubm95aW5nIGFzIGl0IGZvcmNlcyBhIHJlcGFpbnQgb24gdGhlIHNjcmVlbixcbiAgLy8gd2hpY2ggaXMgbm90aWNhYmxlIGluIHRoZSBVSS5cbiAgc2V0IGl0ZW1zKGl0ZW1zOiBJdGVtW10pIHtcbiAgICB0aGlzLnJlc29sdmVJdGVtcyhpdGVtcyk7XG4gICAgdGhpcy5jcmVhdGVGb3JtKCk7XG4gIH1cbiAgZ2V0IGl0ZW1zKCk6IEl0ZW1bXSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICB9XG5cbiAgQElucHV0KCkgcHJvbW90aW9uTG9jYXRpb246IFByb21vdGlvbkxvY2F0aW9uID0gUHJvbW90aW9uTG9jYXRpb24uQWN0aXZlQ2FydDtcblxuICBASW5wdXQoJ2NhcnRJc0xvYWRpbmcnKSBzZXQgc2V0TG9hZGluZyh2YWx1ZTogYm9vbGVhbikge1xuICAgIGlmICghdGhpcy5yZWFkb25seSkge1xuICAgICAgLy8gV2hlbnZlciB0aGUgY2FydCBpcyBsb2FkaW5nLCB3ZSBkaXNhYmxlIHRoZSBjb21wbGV0ZSBmb3JtXG4gICAgICAvLyB0byBhdm9pZCBhbnkgdXNlciBpbnRlcmFjdGlvbiB3aXRoIHRoZSBjYXJ0LlxuICAgICAgdmFsdWVcbiAgICAgICAgPyB0aGlzLmZvcm0uZGlzYWJsZSh7IGVtaXRFdmVudDogZmFsc2UgfSlcbiAgICAgICAgOiB0aGlzLmZvcm0uZW5hYmxlKHsgZW1pdEV2ZW50OiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBzZWxlY3RpdmVDYXJ0U2VydmljZTogU2VsZWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGZlYXR1cmVDb25maWc6IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICkge31cblxuICAvL1RPRE8gcmVtb3ZlIGZlYXR1cmUgZmxhZyBmb3IgIzU5NThcbiAgaXNTYXZlRm9yTGF0ZXJFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmZlYXR1cmVDb25maWcpIHtcbiAgICAgIHJldHVybiB0aGlzLmZlYXR1cmVDb25maWcuaXNFbmFibGVkKCdzYXZlRm9yTGF0ZXInKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vVE9ETyByZW1vdmUgZmVhdHVyZSBmbGFnIGZvciAjNTk1OFxuXG4gIC8qKlxuICAgKiBUaGUgaXRlbXMgd2UncmUgZ2V0dGluZyBmb3JtIHRoZSBpbnB1dCBkbyBub3QgaGF2ZSBhIGNvbnNpc3RlbnQgbW9kZWwuXG4gICAqIEluIGNhc2Ugb2YgYSBgY29uc2lnbm1lbnRFbnRyeWAsIHdlIG5lZWQgdG8gbm9ybWFsaXplIHRoZSBkYXRhIGZyb20gdGhlIG9yZGVyRW50cnkuXG4gICAqL1xuICBwcml2YXRlIHJlc29sdmVJdGVtcyhpdGVtczogSXRlbVtdKTogdm9pZCB7XG4gICAgaWYgKGl0ZW1zLmV2ZXJ5KChpdGVtKSA9PiBpdGVtLmhhc093blByb3BlcnR5KCdvcmRlckVudHJ5JykpKSB7XG4gICAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zLm1hcCgoY29uc2lnbm1lbnRFbnRyeSkgPT4ge1xuICAgICAgICBjb25zdCBlbnRyeSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAge30sXG4gICAgICAgICAgKGNvbnNpZ25tZW50RW50cnkgYXMgQ29uc2lnbm1lbnRFbnRyeSkub3JkZXJFbnRyeVxuICAgICAgICApO1xuICAgICAgICBlbnRyeS5xdWFudGl0eSA9IGNvbnNpZ25tZW50RW50cnkucXVhbnRpdHk7XG4gICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRm9ybSgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHt9KTtcbiAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCB7IGNvZGUgfSA9IGl0ZW0ucHJvZHVjdDtcbiAgICAgIGNvbnN0IGdyb3VwID0gbmV3IEZvcm1Hcm91cCh7XG4gICAgICAgIGVudHJ5TnVtYmVyOiBuZXcgRm9ybUNvbnRyb2woKDxhbnk+aXRlbSkuZW50cnlOdW1iZXIpLFxuICAgICAgICBxdWFudGl0eTogbmV3IEZvcm1Db250cm9sKGl0ZW0ucXVhbnRpdHksIHsgdXBkYXRlT246ICdibHVyJyB9KSxcbiAgICAgIH0pO1xuICAgICAgaWYgKCFpdGVtLnVwZGF0ZWFibGUgfHwgdGhpcy5yZWFkb25seSkge1xuICAgICAgICBncm91cC5kaXNhYmxlKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmZvcm0uYWRkQ29udHJvbChjb2RlLCBncm91cCk7XG4gICAgfSk7XG4gIH1cblxuICByZW1vdmVFbnRyeShpdGVtOiBJdGVtKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2VsZWN0aXZlQ2FydFNlcnZpY2UgJiYgdGhpcy5vcHRpb25zLmlzU2F2ZUZvckxhdGVyKSB7XG4gICAgICB0aGlzLnNlbGVjdGl2ZUNhcnRTZXJ2aWNlLnJlbW92ZUVudHJ5KGl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2ZUNhcnRTZXJ2aWNlLnJlbW92ZUVudHJ5KGl0ZW0pO1xuICAgIH1cbiAgICBkZWxldGUgdGhpcy5mb3JtLmNvbnRyb2xzW2l0ZW0ucHJvZHVjdC5jb2RlXTtcbiAgfVxuXG4gIGdldENvbnRyb2woaXRlbTogSXRlbSk6IE9ic2VydmFibGU8Rm9ybUdyb3VwPiB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS5nZXQoaXRlbS5wcm9kdWN0LmNvZGUpLnZhbHVlQ2hhbmdlcy5waXBlKFxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRlcHJlY2F0aW9uXG4gICAgICBzdGFydFdpdGgobnVsbCksXG4gICAgICBtYXAoKHZhbHVlKSA9PiB7XG4gICAgICAgIGlmICh2YWx1ZSAmJiB0aGlzLnNlbGVjdGl2ZUNhcnRTZXJ2aWNlICYmIHRoaXMub3B0aW9ucy5pc1NhdmVGb3JMYXRlcikge1xuICAgICAgICAgIHRoaXMuc2VsZWN0aXZlQ2FydFNlcnZpY2UudXBkYXRlRW50cnkoXG4gICAgICAgICAgICB2YWx1ZS5lbnRyeU51bWJlcixcbiAgICAgICAgICAgIHZhbHVlLnF1YW50aXR5XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UudXBkYXRlRW50cnkodmFsdWUuZW50cnlOdW1iZXIsIHZhbHVlLnF1YW50aXR5KTtcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBtYXAoKCkgPT4gPEZvcm1Hcm91cD50aGlzLmZvcm0uZ2V0KGl0ZW0ucHJvZHVjdC5jb2RlKSlcbiAgICApO1xuICB9XG59XG4iXX0=