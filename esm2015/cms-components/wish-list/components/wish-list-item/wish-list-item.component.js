import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
let WishListItemComponent = class WishListItemComponent {
    constructor() {
        this.isLoading = false;
        this.remove = new EventEmitter();
    }
    removeEntry(item) {
        this.remove.emit(item);
    }
};
__decorate([
    Input()
], WishListItemComponent.prototype, "isLoading", void 0);
__decorate([
    Input()
], WishListItemComponent.prototype, "cartEntry", void 0);
__decorate([
    Output()
], WishListItemComponent.prototype, "remove", void 0);
WishListItemComponent = __decorate([
    Component({
        selector: 'cx-wish-list-item',
        template: "<div class=\"row\">\n  <!-- Item Image -->\n  <div class=\"cx-image-container col-2\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: cartEntry.product } | cxUrl\"\n      tabindex=\"-1\"\n    >\n      <cx-media [container]=\"cartEntry.product.images?.PRIMARY\"></cx-media>\n    </a>\n  </div>\n  <!-- Item Information -->\n  <div class=\"cx-info col-10\">\n    <div class=\"cx-info-container row\">\n      <!-- Item Description -->\n      <div class=\"col-md-5 col-lg-5 col-xl-5\">\n        <div *ngIf=\"cartEntry.product.name\" class=\"cx-name\">\n          <a\n            class=\"cx-link\"\n            [routerLink]=\"\n              { cxRoute: 'product', params: cartEntry.product } | cxUrl\n            \"\n            >{{ cartEntry.product.name }}</a\n          >\n        </div>\n        <div *ngIf=\"cartEntry.product.code\" class=\"cx-code\">\n          {{ 'cartItems.id' | cxTranslate }} {{ cartEntry.product.code }}\n        </div>\n        <!-- Variants -->\n        <ng-container *ngIf=\"cartEntry.product.baseOptions?.length\">\n          <div\n            *ngFor=\"\n              let variant of cartEntry.product.baseOptions[0]?.selected\n                ?.variantOptionQualifiers\n            \"\n            class=\"cx-property\"\n          >\n            <div class=\"cx-label\" *ngIf=\"variant.name && variant.value\">\n              {{ variant.name }}: {{ variant.value }}\n            </div>\n          </div>\n        </ng-container>\n      </div>\n      <!-- Item Price -->\n      <div\n        *ngIf=\"cartEntry.basePrice\"\n        class=\"cx-price col-md-3 col-lg-4 col-xl-4\"\n      >\n        <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n          {{ 'cartItems.itemPrice' | cxTranslate }}\n        </div>\n        <div *ngIf=\"cartEntry.basePrice\" class=\"cx-value\">\n          {{ cartEntry.basePrice?.formattedValue }}\n        </div>\n      </div>\n      <!-- Total -->\n      <div class=\"col-sm-8 col-md-4 col-lg-3 col-xl-3 cx-add-to-cart\">\n        <cx-add-to-cart\n          *ngIf=\"\n            cartEntry.product.stock.stockLevelStatus !== 'outOfStock';\n            else outOfStock\n          \"\n          [showQuantity]=\"false\"\n          [product]=\"cartEntry.product\"\n        ></cx-add-to-cart>\n        <ng-template #outOfStock>\n          <span class=\"cx-out-of-stock\">\n            {{ 'addToCart.outOfStock' | cxTranslate }}\n          </span>\n        </ng-template>\n      </div>\n    </div>\n    <div class=\"cx-return-button col-12\">\n      <button\n        class=\"btn cx-action-link\"\n        (click)=\"removeEntry(cartEntry)\"\n        [disabled]=\"isLoading\"\n      >\n        {{ 'common.remove' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</div>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], WishListItemComponent);
export { WishListItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaC1saXN0LWl0ZW0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvd2lzaC1saXN0L2NvbXBvbmVudHMvd2lzaC1saXN0LWl0ZW0vd2lzaC1saXN0LWl0ZW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQVF2QixJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQUFsQztRQUVFLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFJbEIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7SUFLMUMsQ0FBQztJQUhDLFdBQVcsQ0FBQyxJQUFnQjtRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0NBQ0YsQ0FBQTtBQVRDO0lBREMsS0FBSyxFQUFFO3dEQUNVO0FBQ1Q7SUFBUixLQUFLLEVBQUU7d0RBQXVCO0FBRy9CO0lBREMsTUFBTSxFQUFFO3FEQUMrQjtBQU43QixxQkFBcUI7SUFMakMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixtdEZBQThDO1FBQzlDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7R0FDVyxxQkFBcUIsQ0FXakM7U0FYWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT3JkZXJFbnRyeSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXdpc2gtbGlzdC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dpc2gtbGlzdC1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFdpc2hMaXN0SXRlbUNvbXBvbmVudCB7XG4gIEBJbnB1dCgpXG4gIGlzTG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBjYXJ0RW50cnk6IE9yZGVyRW50cnk7XG5cbiAgQE91dHB1dCgpXG4gIHJlbW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8T3JkZXJFbnRyeT4oKTtcblxuICByZW1vdmVFbnRyeShpdGVtOiBPcmRlckVudHJ5KSB7XG4gICAgdGhpcy5yZW1vdmUuZW1pdChpdGVtKTtcbiAgfVxufVxuIl19