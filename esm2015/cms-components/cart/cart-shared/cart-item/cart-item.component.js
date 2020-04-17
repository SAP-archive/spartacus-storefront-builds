import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PromotionLocation } from '@spartacus/core';
import { PromotionService } from '../../../../shared/services/promotion/promotion.service';
let CartItemComponent = class CartItemComponent {
    constructor(promotionService) {
        this.promotionService = promotionService;
        this.compact = false;
        this.readonly = false;
        this.view = new EventEmitter();
        this.promotionLocation = PromotionLocation.ActiveCart;
        // TODO: evaluate whether this is generic enough
        this.options = {
            isSaveForLater: false,
            optionalBtn: null,
        };
    }
    ngOnInit() {
        this.appliedProductPromotions$ = this.promotionService.getProductPromotionForEntry(this.item, this.promotionLocation);
    }
    isProductOutOfStock(product) {
        // TODO Move stocklevelstatuses across the app to an enum
        return (product &&
            product.stock &&
            product.stock.stockLevelStatus === 'outOfStock');
    }
    removeItem() {
        this.quantityControl.setValue(0);
        this.quantityControl.markAsDirty();
    }
    viewItem() {
        this.view.emit();
    }
};
CartItemComponent.ctorParameters = () => [
    { type: PromotionService }
];
__decorate([
    Input()
], CartItemComponent.prototype, "compact", void 0);
__decorate([
    Input()
], CartItemComponent.prototype, "item", void 0);
__decorate([
    Input()
], CartItemComponent.prototype, "readonly", void 0);
__decorate([
    Input()
], CartItemComponent.prototype, "quantityControl", void 0);
__decorate([
    Output()
], CartItemComponent.prototype, "view", void 0);
__decorate([
    Input()
], CartItemComponent.prototype, "promotionLocation", void 0);
__decorate([
    Input()
], CartItemComponent.prototype, "options", void 0);
CartItemComponent = __decorate([
    Component({
        selector: 'cx-cart-item',
        template: "<div [ngClass]=\"compact ? 'cx-compact row' : 'row'\">\n  <!-- Item Image -->\n  <div class=\"col-2 cx-image-container\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: item.product } | cxUrl\"\n      (click)=\"viewItem()\"\n      tabindex=\"-1\"\n    >\n      <cx-media [container]=\"item.product.images?.PRIMARY\"></cx-media>\n    </a>\n  </div>\n  <!-- Item Information -->\n  <div class=\"cx-info col-10\">\n    <div class=\"cx-info-container row\">\n      <!-- Item Description -->\n      <div [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-5'\">\n        <div *ngIf=\"item.product.name\" class=\"cx-name\">\n          <a\n            class=\"cx-link\"\n            [routerLink]=\"{ cxRoute: 'product', params: item.product } | cxUrl\"\n            (click)=\"viewItem()\"\n            >{{ item.product.name }}</a\n          >\n        </div>\n        <div *ngIf=\"item.product.code\" class=\"cx-code\">\n          {{ 'cartItems.id' | cxTranslate }} {{ item.product.code }}\n        </div>\n        <!-- Variants -->\n        <ng-container *ngIf=\"item.product.baseOptions?.length\">\n          <div\n            *ngFor=\"\n              let variant of item.product.baseOptions[0]?.selected\n                ?.variantOptionQualifiers\n            \"\n            class=\"cx-property\"\n          >\n            <div class=\"cx-label\" *ngIf=\"variant.name && variant.value\">\n              {{ variant.name }}: {{ variant.value }}\n            </div>\n          </div>\n        </ng-container>\n      </div>\n      <!-- Item Price -->\n      <div\n        *ngIf=\"item.basePrice\"\n        class=\"cx-price\"\n        [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n        >\n          {{ 'cartItems.itemPrice' | cxTranslate }}\n        </div>\n        <div *ngIf=\"item.basePrice\" class=\"cx-value\">\n          {{ item.basePrice?.formattedValue }}\n        </div>\n      </div>\n      <!-- Item Quantity -->\n      <div class=\"cx-quantity\" [ngClass]=\"compact ? '' : ' col-3'\">\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n          placement=\"left\"\n          title=\"{{ 'cartItems.quantityTitle' | cxTranslate }}\"\n        >\n          {{ 'cartItems.quantity' | cxTranslate }}\n        </div>\n        <div class=\"cx-value\">\n          <cx-item-counter\n            [control]=\"quantityControl\"\n            [readonly]=\"!item.updateable || readonly || options.isSaveForLater\"\n            [max]=\"item.product.stock?.stockLevel || 1000\"\n            [allowZero]=\"true\"\n          >\n          </cx-item-counter>\n        </div>\n      </div>\n      <!-- Total -->\n      <ng-container *ngIf=\"options.isSaveForLater; else total\">\n        <div\n          class=\"cx-total\"\n          [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n        >\n          <div\n            class=\"cx-label\"\n            [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n          >\n            {{ 'saveForLaterItems.stock' | cxTranslate }}\n          </div>\n          <div\n            *ngIf=\"item.product?.stock?.stockLevel >= 0; else forceInstock\"\n            class=\"cx-value\"\n          >\n            {{ item.product.stock.stockLevel }}\n          </div>\n          <ng-template #forceInstock\n            ><div class=\"cx-value\">\n              {{ 'saveForLaterItems.forceInStock' | cxTranslate }}\n            </div></ng-template\n          >\n        </div>\n      </ng-container>\n    </div>\n    <!-- Availability -->\n    <div\n      *ngIf=\"isProductOutOfStock(item.product)\"\n      class=\"cx-availability col-12\"\n    >\n      {{ 'productSummary.outOfStock' | cxTranslate }}\n    </div>\n    <!-- Promotion -->\n\n    <ng-container\n      *ngIf=\"appliedProductPromotions$ | async as appliedProductPromotions\"\n    >\n      <cx-promotions [promotions]=\"appliedProductPromotions\"></cx-promotions>\n    </ng-container>\n\n    <!-- Actions -->\n    <div\n      *ngIf=\"(!readonly || options.isSaveForLater) && item.updateable\"\n      class=\"cx-actions col-12\"\n    >\n      <ng-container *ngIf=\"!isProductOutOfStock(item.product)\">\n        <ng-container\n          *ngTemplateOutlet=\"\n            options.optionalBtn;\n            context: {\n              $implicit: { loading: quantityControl.disabled, item: item }\n            }\n          \"\n        ></ng-container>\n      </ng-container>\n\n      <div class=\"col-md-3 cx-remove-btn\">\n        <button\n          class=\"link\"\n          [disabled]=\"quantityControl.disabled\"\n          (click)=\"removeItem()\"\n        >\n          {{ 'common.remove' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #total>\n  <div\n    *ngIf=\"item.totalPrice\"\n    class=\"cx-total\"\n    [ngClass]=\"compact ? '' : ' col-md-3 col-xl-2'\"\n  >\n    <div\n      class=\"cx-label\"\n      [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n    >\n      {{ 'cartItems.total' | cxTranslate }}\n    </div>\n    <div class=\"cx-value\">{{ item.totalPrice.formattedValue }}</div>\n  </div>\n</ng-template>\n"
    })
], CartItemComponent);
export { CartItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NhcnQvY2FydC1zaGFyZWQvY2FydC1pdGVtL2NhcnQtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFFLGlCQUFpQixFQUFtQixNQUFNLGlCQUFpQixDQUFDO0FBRXJFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBbUIzRixJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQWtCNUIsWUFBc0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFqQi9DLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUdoQixTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVoQyxzQkFBaUIsR0FBc0IsaUJBQWlCLENBQUMsVUFBVSxDQUFDO1FBRTdFLGdEQUFnRDtRQUN2QyxZQUFPLEdBQTZCO1lBQzNDLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUM7SUFJeUQsQ0FBQztJQUU1RCxRQUFRO1FBQ04sSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQywyQkFBMkIsQ0FDaEYsSUFBSSxDQUFDLElBQUksRUFDVCxJQUFJLENBQUMsaUJBQWlCLENBQ3ZCLENBQUM7SUFDSixDQUFDO0lBRUQsbUJBQW1CLENBQUMsT0FBWTtRQUM5Qix5REFBeUQ7UUFDekQsT0FBTyxDQUNMLE9BQU87WUFDUCxPQUFPLENBQUMsS0FBSztZQUNiLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEtBQUssWUFBWSxDQUNoRCxDQUFDO0lBQ0osQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNuQixDQUFDO0NBQ0YsQ0FBQTs7WUExQnlDLGdCQUFnQjs7QUFqQi9DO0lBQVIsS0FBSyxFQUFFO2tEQUFpQjtBQUNoQjtJQUFSLEtBQUssRUFBRTsrQ0FBWTtBQUNYO0lBQVIsS0FBSyxFQUFFO21EQUFrQjtBQUNqQjtJQUFSLEtBQUssRUFBRTswREFBOEI7QUFFNUI7SUFBVCxNQUFNLEVBQUU7K0NBQWdDO0FBRWhDO0lBQVIsS0FBSyxFQUFFOzREQUFxRTtBQUdwRTtJQUFSLEtBQUssRUFBRTtrREFHTjtBQWRTLGlCQUFpQjtJQUo3QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsY0FBYztRQUN4QixzdUtBQXlDO0tBQzFDLENBQUM7R0FDVyxpQkFBaUIsQ0E0QzdCO1NBNUNZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUHJvbW90aW9uTG9jYXRpb24sIFByb21vdGlvblJlc3VsdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQcm9tb3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3Byb21vdGlvbi9wcm9tb3Rpb24uc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSXRlbSB7XG4gIHByb2R1Y3Q/OiBhbnk7XG4gIHF1YW50aXR5PzogYW55O1xuICBiYXNlUHJpY2U/OiBhbnk7XG4gIHRvdGFsUHJpY2U/OiBhbnk7XG4gIHVwZGF0ZWFibGU/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhcnRJdGVtQ29tcG9uZW50T3B0aW9ucyB7XG4gIGlzU2F2ZUZvckxhdGVyPzogYm9vbGVhbjtcbiAgb3B0aW9uYWxCdG4/OiBhbnk7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhcnQtaXRlbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJ0LWl0ZW0uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0SXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNvbXBhY3QgPSBmYWxzZTtcbiAgQElucHV0KCkgaXRlbTogSXRlbTtcbiAgQElucHV0KCkgcmVhZG9ubHkgPSBmYWxzZTtcbiAgQElucHV0KCkgcXVhbnRpdHlDb250cm9sOiBGb3JtQ29udHJvbDtcblxuICBAT3V0cHV0KCkgdmlldyA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBJbnB1dCgpIHByb21vdGlvbkxvY2F0aW9uOiBQcm9tb3Rpb25Mb2NhdGlvbiA9IFByb21vdGlvbkxvY2F0aW9uLkFjdGl2ZUNhcnQ7XG5cbiAgLy8gVE9ETzogZXZhbHVhdGUgd2hldGhlciB0aGlzIGlzIGdlbmVyaWMgZW5vdWdoXG4gIEBJbnB1dCgpIG9wdGlvbnM6IENhcnRJdGVtQ29tcG9uZW50T3B0aW9ucyA9IHtcbiAgICBpc1NhdmVGb3JMYXRlcjogZmFsc2UsXG4gICAgb3B0aW9uYWxCdG46IG51bGwsXG4gIH07XG5cbiAgYXBwbGllZFByb2R1Y3RQcm9tb3Rpb25zJDogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT47XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHByb21vdGlvblNlcnZpY2U6IFByb21vdGlvblNlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hcHBsaWVkUHJvZHVjdFByb21vdGlvbnMkID0gdGhpcy5wcm9tb3Rpb25TZXJ2aWNlLmdldFByb2R1Y3RQcm9tb3Rpb25Gb3JFbnRyeShcbiAgICAgIHRoaXMuaXRlbSxcbiAgICAgIHRoaXMucHJvbW90aW9uTG9jYXRpb25cbiAgICApO1xuICB9XG5cbiAgaXNQcm9kdWN0T3V0T2ZTdG9jayhwcm9kdWN0OiBhbnkpIHtcbiAgICAvLyBUT0RPIE1vdmUgc3RvY2tsZXZlbHN0YXR1c2VzIGFjcm9zcyB0aGUgYXBwIHRvIGFuIGVudW1cbiAgICByZXR1cm4gKFxuICAgICAgcHJvZHVjdCAmJlxuICAgICAgcHJvZHVjdC5zdG9jayAmJlxuICAgICAgcHJvZHVjdC5zdG9jay5zdG9ja0xldmVsU3RhdHVzID09PSAnb3V0T2ZTdG9jaydcbiAgICApO1xuICB9XG5cbiAgcmVtb3ZlSXRlbSgpIHtcbiAgICB0aGlzLnF1YW50aXR5Q29udHJvbC5zZXRWYWx1ZSgwKTtcbiAgICB0aGlzLnF1YW50aXR5Q29udHJvbC5tYXJrQXNEaXJ0eSgpO1xuICB9XG5cbiAgdmlld0l0ZW0oKSB7XG4gICAgdGhpcy52aWV3LmVtaXQoKTtcbiAgfVxufVxuIl19