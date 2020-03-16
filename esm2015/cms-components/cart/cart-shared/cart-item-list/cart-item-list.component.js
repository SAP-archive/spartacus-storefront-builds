import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActiveCartService, ConsignmentEntry, FeatureConfigService, PromotionLocation, SelectiveCartService, } from '@spartacus/core';
import { map, startWith } from 'rxjs/operators';
let CartItemListComponent = class CartItemListComponent {
    constructor(activeCartService, selectiveCartService, featureConfig) {
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
    set items(items) {
        this.resolveItems(items);
        this.createForm();
    }
    get items() {
        return this._items;
    }
    set setLoading(value) {
        if (!this.readonly) {
            // Whenver the cart is loading, we disable the complete form
            // to avoid any user interaction with the cart.
            value
                ? this.form.disable({ emitEvent: false })
                : this.form.enable({ emitEvent: false });
        }
    }
    //TODO remove feature flag for #5958
    isSaveForLaterEnabled() {
        if (this.featureConfig) {
            return this.featureConfig.isEnabled('saveForLater');
        }
        return false;
    }
    //TODO remove feature flag for #5958
    /**
     * The items we're getting form the input do not have a consistent model.
     * In case of a `consignmentEntry`, we need to normalize the data from the orderEntry.
     */
    resolveItems(items) {
        if (items.every(item => item.hasOwnProperty('orderEntry'))) {
            this._items = items.map(consignmentEntry => {
                const entry = Object.assign({}, consignmentEntry.orderEntry);
                entry.quantity = consignmentEntry.quantity;
                return entry;
            });
        }
        else {
            this._items = items;
        }
    }
    createForm() {
        this.form = new FormGroup({});
        this._items.forEach(item => {
            const { code } = item.product;
            const group = new FormGroup({
                entryNumber: new FormControl(item.entryNumber),
                quantity: new FormControl(item.quantity, { updateOn: 'blur' }),
            });
            if (!item.updateable || this.readonly) {
                group.disable();
            }
            this.form.addControl(code, group);
        });
    }
    removeEntry(item) {
        if (this.selectiveCartService && this.options.isSaveForLater) {
            this.selectiveCartService.removeEntry(item);
        }
        else {
            this.activeCartService.removeEntry(item);
        }
        delete this.form.controls[item.product.code];
    }
    getControl(item) {
        return this.form.get(item.product.code).valueChanges.pipe(
        // tslint:disable-next-line:deprecation
        startWith(null), map(value => {
            if (value && this.selectiveCartService && this.options.isSaveForLater) {
                this.selectiveCartService.updateEntry(value.entryNumber, value.quantity);
            }
            else if (value) {
                this.activeCartService.updateEntry(value.entryNumber, value.quantity);
            }
        }), map(() => this.form.get(item.product.code)));
    }
};
CartItemListComponent.ctorParameters = () => [
    { type: ActiveCartService },
    { type: SelectiveCartService },
    { type: FeatureConfigService }
];
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
export { CartItemListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9jYXJ0LXNoYXJlZC9jYXJ0LWl0ZW0tbGlzdC9jYXJ0LWl0ZW0tbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixnQkFBZ0IsRUFDaEIsb0JBQW9CLEVBQ3BCLGlCQUFpQixFQUNqQixvQkFBb0IsR0FDckIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBV2hELElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBcUNoQyxZQUNZLGlCQUFvQyxFQUNwQyxvQkFBMEMsRUFDMUMsYUFBbUM7UUFGbkMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQXZDdEMsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixjQUFTLEdBQUcsSUFBSSxDQUFDO1FBRWpCLFlBQU8sR0FBNkI7WUFDM0MsY0FBYyxFQUFFLEtBQUs7WUFDckIsV0FBVyxFQUFFLElBQUk7U0FDbEIsQ0FBQztRQUVNLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFlbkIsc0JBQWlCLEdBQXNCLGlCQUFpQixDQUFDLFVBQVUsQ0FBQztJQWdCMUUsQ0FBQztJQXhCSixJQUFJLEtBQUssQ0FBQyxLQUFhO1FBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FB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LENBQUMsTUFBTTtLQUNoRCxDQUFDO0dBQ1cscUJBQXFCLENBZ0hqQztTQWhIWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIEFjdGl2ZUNhcnRTZXJ2aWNlLFxuICBDb25zaWdubWVudEVudHJ5LFxuICBGZWF0dXJlQ29uZmlnU2VydmljZSxcbiAgUHJvbW90aW9uTG9jYXRpb24sXG4gIFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBDYXJ0SXRlbUNvbXBvbmVudE9wdGlvbnMsXG4gIEl0ZW0sXG59IGZyb20gJy4uL2NhcnQtaXRlbS9jYXJ0LWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2FydC1pdGVtLWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FydC1pdGVtLWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydEl0ZW1MaXN0Q29tcG9uZW50IHtcbiAgQElucHV0KCkgcmVhZG9ubHkgPSBmYWxzZTtcblxuICBASW5wdXQoKSBoYXNIZWFkZXIgPSB0cnVlO1xuXG4gIEBJbnB1dCgpIG9wdGlvbnM6IENhcnRJdGVtQ29tcG9uZW50T3B0aW9ucyA9IHtcbiAgICBpc1NhdmVGb3JMYXRlcjogZmFsc2UsXG4gICAgb3B0aW9uYWxCdG46IG51bGwsXG4gIH07XG5cbiAgcHJpdmF0ZSBfaXRlbXM6IEl0ZW1bXSA9IFtdO1xuICBmb3JtOiBGb3JtR3JvdXA7XG5cbiAgQElucHV0KCdpdGVtcycpXG4gIC8vIFRPRE86IGN1cnJlbnRseSB3ZSdyZSBnZXR0aW5nIGEgbmV3IGFycmF5IG9mIGl0ZW1zIGlmIHRoZSBjYXJ0IGNoYW5nZXMuXG4gIC8vIHByZXR0eSBhbm5veWluZyBhcyBpdCBmb3JjZXMgYSByZXBhaW50IG9uIHRoZSBzY3JlZW4sXG4gIC8vIHdoaWNoIGlzIG5vdGljYWJsZSBpbiB0aGUgVUkuXG4gIHNldCBpdGVtcyhpdGVtczogSXRlbVtdKSB7XG4gICAgdGhpcy5yZXNvbHZlSXRlbXMoaXRlbXMpO1xuICAgIHRoaXMuY3JlYXRlRm9ybSgpO1xuICB9XG4gIGdldCBpdGVtcygpOiBJdGVtW10ge1xuICAgIHJldHVybiB0aGlzLl9pdGVtcztcbiAgfVxuXG4gIEBJbnB1dCgpIHByb21vdGlvbkxvY2F0aW9uOiBQcm9tb3Rpb25Mb2NhdGlvbiA9IFByb21vdGlvbkxvY2F0aW9uLkFjdGl2ZUNhcnQ7XG5cbiAgQElucHV0KCdjYXJ0SXNMb2FkaW5nJykgc2V0IHNldExvYWRpbmcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBpZiAoIXRoaXMucmVhZG9ubHkpIHtcbiAgICAgIC8vIFdoZW52ZXIgdGhlIGNhcnQgaXMgbG9hZGluZywgd2UgZGlzYWJsZSB0aGUgY29tcGxldGUgZm9ybVxuICAgICAgLy8gdG8gYXZvaWQgYW55IHVzZXIgaW50ZXJhY3Rpb24gd2l0aCB0aGUgY2FydC5cbiAgICAgIHZhbHVlXG4gICAgICAgID8gdGhpcy5mb3JtLmRpc2FibGUoeyBlbWl0RXZlbnQ6IGZhbHNlIH0pXG4gICAgICAgIDogdGhpcy5mb3JtLmVuYWJsZSh7IGVtaXRFdmVudDogZmFsc2UgfSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgc2VsZWN0aXZlQ2FydFNlcnZpY2U6IFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBmZWF0dXJlQ29uZmlnOiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgLy9UT0RPIHJlbW92ZSBmZWF0dXJlIGZsYWcgZm9yICM1OTU4XG4gIGlzU2F2ZUZvckxhdGVyRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5mZWF0dXJlQ29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5mZWF0dXJlQ29uZmlnLmlzRW5hYmxlZCgnc2F2ZUZvckxhdGVyJyk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvL1RPRE8gcmVtb3ZlIGZlYXR1cmUgZmxhZyBmb3IgIzU5NThcblxuICAvKipcbiAgICogVGhlIGl0ZW1zIHdlJ3JlIGdldHRpbmcgZm9ybSB0aGUgaW5wdXQgZG8gbm90IGhhdmUgYSBjb25zaXN0ZW50IG1vZGVsLlxuICAgKiBJbiBjYXNlIG9mIGEgYGNvbnNpZ25tZW50RW50cnlgLCB3ZSBuZWVkIHRvIG5vcm1hbGl6ZSB0aGUgZGF0YSBmcm9tIHRoZSBvcmRlckVudHJ5LlxuICAgKi9cbiAgcHJpdmF0ZSByZXNvbHZlSXRlbXMoaXRlbXM6IEl0ZW1bXSk6IHZvaWQge1xuICAgIGlmIChpdGVtcy5ldmVyeShpdGVtID0+IGl0ZW0uaGFzT3duUHJvcGVydHkoJ29yZGVyRW50cnknKSkpIHtcbiAgICAgIHRoaXMuX2l0ZW1zID0gaXRlbXMubWFwKGNvbnNpZ25tZW50RW50cnkgPT4ge1xuICAgICAgICBjb25zdCBlbnRyeSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAge30sXG4gICAgICAgICAgKGNvbnNpZ25tZW50RW50cnkgYXMgQ29uc2lnbm1lbnRFbnRyeSkub3JkZXJFbnRyeVxuICAgICAgICApO1xuICAgICAgICBlbnRyeS5xdWFudGl0eSA9IGNvbnNpZ25tZW50RW50cnkucXVhbnRpdHk7XG4gICAgICAgIHJldHVybiBlbnRyeTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRm9ybSgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybUdyb3VwKHt9KTtcbiAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgeyBjb2RlIH0gPSBpdGVtLnByb2R1Y3Q7XG4gICAgICBjb25zdCBncm91cCA9IG5ldyBGb3JtR3JvdXAoe1xuICAgICAgICBlbnRyeU51bWJlcjogbmV3IEZvcm1Db250cm9sKCg8YW55Pml0ZW0pLmVudHJ5TnVtYmVyKSxcbiAgICAgICAgcXVhbnRpdHk6IG5ldyBGb3JtQ29udHJvbChpdGVtLnF1YW50aXR5LCB7IHVwZGF0ZU9uOiAnYmx1cicgfSksXG4gICAgICB9KTtcbiAgICAgIGlmICghaXRlbS51cGRhdGVhYmxlIHx8IHRoaXMucmVhZG9ubHkpIHtcbiAgICAgICAgZ3JvdXAuZGlzYWJsZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy5mb3JtLmFkZENvbnRyb2woY29kZSwgZ3JvdXApO1xuICAgIH0pO1xuICB9XG5cbiAgcmVtb3ZlRW50cnkoaXRlbTogSXRlbSk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNlbGVjdGl2ZUNhcnRTZXJ2aWNlICYmIHRoaXMub3B0aW9ucy5pc1NhdmVGb3JMYXRlcikge1xuICAgICAgdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZS5yZW1vdmVFbnRyeShpdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZS5yZW1vdmVFbnRyeShpdGVtKTtcbiAgICB9XG4gICAgZGVsZXRlIHRoaXMuZm9ybS5jb250cm9sc1tpdGVtLnByb2R1Y3QuY29kZV07XG4gIH1cblxuICBnZXRDb250cm9sKGl0ZW06IEl0ZW0pOiBPYnNlcnZhYmxlPEZvcm1Hcm91cD4ge1xuICAgIHJldHVybiB0aGlzLmZvcm0uZ2V0KGl0ZW0ucHJvZHVjdC5jb2RlKS52YWx1ZUNoYW5nZXMucGlwZShcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpkZXByZWNhdGlvblxuICAgICAgc3RhcnRXaXRoKG51bGwpLFxuICAgICAgbWFwKHZhbHVlID0+IHtcbiAgICAgICAgaWYgKHZhbHVlICYmIHRoaXMuc2VsZWN0aXZlQ2FydFNlcnZpY2UgJiYgdGhpcy5vcHRpb25zLmlzU2F2ZUZvckxhdGVyKSB7XG4gICAgICAgICAgdGhpcy5zZWxlY3RpdmVDYXJ0U2VydmljZS51cGRhdGVFbnRyeShcbiAgICAgICAgICAgIHZhbHVlLmVudHJ5TnVtYmVyLFxuICAgICAgICAgICAgdmFsdWUucXVhbnRpdHlcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5hY3RpdmVDYXJ0U2VydmljZS51cGRhdGVFbnRyeSh2YWx1ZS5lbnRyeU51bWJlciwgdmFsdWUucXVhbnRpdHkpO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIG1hcCgoKSA9PiA8Rm9ybUdyb3VwPnRoaXMuZm9ybS5nZXQoaXRlbS5wcm9kdWN0LmNvZGUpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==