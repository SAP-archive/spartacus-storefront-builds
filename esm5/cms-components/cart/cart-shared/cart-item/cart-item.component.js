import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PromotionLocation } from '@spartacus/core';
import { PromotionService } from '../../../../shared/services/promotion/promotion.service';
var CartItemComponent = /** @class */ (function () {
    function CartItemComponent(promotionService) {
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
    CartItemComponent.prototype.ngOnInit = function () {
        this.appliedProductPromotions$ = this.promotionService.getProductPromotionForEntry(this.item, this.promotionLocation);
    };
    CartItemComponent.prototype.isProductOutOfStock = function (product) {
        // TODO Move stocklevelstatuses across the app to an enum
        return (product &&
            product.stock &&
            product.stock.stockLevelStatus === 'outOfStock');
    };
    CartItemComponent.prototype.removeItem = function () {
        this.quantityControl.setValue(0);
        this.quantityControl.markAsDirty();
    };
    CartItemComponent.prototype.viewItem = function () {
        this.view.emit();
    };
    CartItemComponent.ctorParameters = function () { return [
        { type: PromotionService }
    ]; };
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
            template: "<div [ngClass]=\"compact ? 'cx-compact row' : 'row'\">\n  <!-- Item Image -->\n  <div class=\"col-2 cx-image-container\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: item.product } | cxUrl\"\n      (click)=\"viewItem()\"\n      tabindex=\"-1\"\n    >\n      <cx-media [container]=\"item.product.images?.PRIMARY\"></cx-media>\n    </a>\n  </div>\n  <!-- Item Information -->\n  <div class=\"cx-info col-10\">\n    <div class=\"cx-info-container row\">\n      <!-- Item Description -->\n      <div [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-5'\">\n        <div *ngIf=\"item.product.name\" class=\"cx-name\">\n          <a\n            class=\"cx-link\"\n            [routerLink]=\"{ cxRoute: 'product', params: item.product } | cxUrl\"\n            (click)=\"viewItem()\"\n            >{{ item.product.name }}</a\n          >\n        </div>\n        <div *ngIf=\"item.product.code\" class=\"cx-code\">\n          {{ 'cartItems.id' | cxTranslate }} {{ item.product.code }}\n        </div>\n        <!-- Variants -->\n        <ng-container *ngIf=\"item.product.baseOptions?.length\">\n          <div\n            *ngFor=\"\n              let variant of item.product.baseOptions[0]?.selected\n                ?.variantOptionQualifiers\n            \"\n            class=\"cx-property\"\n          >\n            <div class=\"cx-label\" *ngIf=\"variant.name && variant.value\">\n              {{ variant.name }}: {{ variant.value }}\n            </div>\n          </div>\n        </ng-container>\n      </div>\n      <!-- Item Price -->\n      <div\n        *ngIf=\"item.basePrice\"\n        class=\"cx-price\"\n        [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n        >\n          {{ 'cartItems.itemPrice' | cxTranslate }}\n        </div>\n        <div *ngIf=\"item.basePrice\" class=\"cx-value\">\n          {{ item.basePrice?.formattedValue }}\n        </div>\n      </div>\n      <!-- Item Quantity -->\n      <div class=\"cx-quantity\" [ngClass]=\"compact ? '' : ' col-3'\">\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n          placement=\"left\"\n          title=\"{{ 'cartItems.quantityTitle' | cxTranslate }}\"\n        >\n          {{ 'cartItems.quantity' | cxTranslate }}\n        </div>\n        <div class=\"cx-value\">\n          <cx-item-counter\n            [control]=\"quantityControl\"\n            [readonly]=\"!item.updateable || readonly || options.isSaveForLater\"\n            [max]=\"item.product.stock?.stockLevel || 1000\"\n            [allowZero]=\"true\"\n          >\n          </cx-item-counter>\n        </div>\n      </div>\n      <!-- Total -->\n      <ng-container *ngIf=\"options.isSaveForLater; else total\">\n        <div\n          class=\"cx-total\"\n          [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n        >\n          <div\n            class=\"cx-label\"\n            [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n          >\n            {{ 'saveForLaterItems.stock' | cxTranslate }}\n          </div>\n          <div\n            *ngIf=\"item.product?.stock?.stockLevel >= 0; else forceInstock\"\n            class=\"cx-value\"\n          >\n            {{ item.product.stock.stockLevel }}\n          </div>\n          <ng-template #forceInstock\n            ><div class=\"cx-value\">\n              {{ 'saveForLaterItems.forceInStock' | cxTranslate }}\n            </div></ng-template\n          >\n        </div>\n      </ng-container>\n    </div>\n    <!-- Availability -->\n    <div\n      *ngIf=\"isProductOutOfStock(item.product)\"\n      class=\"cx-availability col-12\"\n    >\n      {{ 'productSummary.outOfStock' | cxTranslate }}\n    </div>\n    <!-- Promotion -->\n\n    <ng-container\n      *ngIf=\"appliedProductPromotions$ | async as appliedProductPromotions\"\n    >\n      <cx-promotions [promotions]=\"appliedProductPromotions\"></cx-promotions>\n    </ng-container>\n\n    <!-- Actions -->\n    <div\n      *ngIf=\"(!readonly || options.isSaveForLater) && item.updateable\"\n      class=\"cx-actions col-12\"\n    >\n      <ng-container *ngIf=\"!isProductOutOfStock(item.product)\">\n        <ng-container\n          *ngTemplateOutlet=\"\n            options.optionalBtn;\n            context: {\n              $implicit: { loading: quantityControl.disabled, item: item }\n            }\n          \"\n        ></ng-container>\n      </ng-container>\n\n      <div class=\"col-md-3 cx-remove-btn\">\n        <button\n          class=\"link cx-action-link\"\n          [disabled]=\"quantityControl.disabled\"\n          (click)=\"removeItem()\"\n        >\n          {{ 'common.remove' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #total>\n  <div\n    *ngIf=\"item.totalPrice\"\n    class=\"cx-total\"\n    [ngClass]=\"compact ? '' : ' col-md-3 col-xl-2'\"\n  >\n    <div\n      class=\"cx-label\"\n      [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n    >\n      {{ 'cartItems.total' | cxTranslate }}\n    </div>\n    <div class=\"cx-value\">{{ item.totalPrice.formattedValue }}</div>\n  </div>\n</ng-template>\n"
        })
    ], CartItemComponent);
    return CartItemComponent;
}());
export { CartItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NhcnQvY2FydC1zaGFyZWQvY2FydC1pdGVtL2NhcnQtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFFLGlCQUFpQixFQUFtQixNQUFNLGlCQUFpQixDQUFDO0FBRXJFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBbUIzRjtJQWtCRSwyQkFBc0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFqQi9DLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFFaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUdoQixTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVoQyxzQkFBaUIsR0FBc0IsaUJBQWlCLENBQUMsVUFBVSxDQUFDO1FBRTdFLGdEQUFnRDtRQUN2QyxZQUFPLEdBQTZCO1lBQzNDLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUM7SUFJeUQsQ0FBQztJQUU1RCxvQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQywyQkFBMkIsQ0FDaEYsSUFBSSxDQUFDLElBQUksRUFDVCxJQUFJLENBQUMsaUJBQWlCLENBQ3ZCLENBQUM7SUFDSixDQUFDO0lBRUQsK0NBQW1CLEdBQW5CLFVBQW9CLE9BQVk7UUFDOUIseURBQXlEO1FBQ3pELE9BQU8sQ0FDTCxPQUFPO1lBQ1AsT0FBTyxDQUFDLEtBQUs7WUFDYixPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixLQUFLLFlBQVksQ0FDaEQsQ0FBQztJQUNKLENBQUM7SUFFRCxzQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Z0JBekJ1QyxnQkFBZ0I7O0lBakIvQztRQUFSLEtBQUssRUFBRTtzREFBaUI7SUFDaEI7UUFBUixLQUFLLEVBQUU7bURBQVk7SUFDWDtRQUFSLEtBQUssRUFBRTt1REFBa0I7SUFDakI7UUFBUixLQUFLLEVBQUU7OERBQThCO0lBRTVCO1FBQVQsTUFBTSxFQUFFO21EQUFnQztJQUVoQztRQUFSLEtBQUssRUFBRTtnRUFBcUU7SUFHcEU7UUFBUixLQUFLLEVBQUU7c0RBR047SUFkUyxpQkFBaUI7UUFKN0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIscXZLQUF5QztTQUMxQyxDQUFDO09BQ1csaUJBQWlCLENBNEM3QjtJQUFELHdCQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0E1Q1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBQcm9tb3Rpb25Mb2NhdGlvbiwgUHJvbW90aW9uUmVzdWx0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb21vdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvcHJvbW90aW9uL3Byb21vdGlvbi5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJdGVtIHtcbiAgcHJvZHVjdD86IGFueTtcbiAgcXVhbnRpdHk/OiBhbnk7XG4gIGJhc2VQcmljZT86IGFueTtcbiAgdG90YWxQcmljZT86IGFueTtcbiAgdXBkYXRlYWJsZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FydEl0ZW1Db21wb25lbnRPcHRpb25zIHtcbiAgaXNTYXZlRm9yTGF0ZXI/OiBib29sZWFuO1xuICBvcHRpb25hbEJ0bj86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2FydC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcnQtaXRlbS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY29tcGFjdCA9IGZhbHNlO1xuICBASW5wdXQoKSBpdGVtOiBJdGVtO1xuICBASW5wdXQoKSByZWFkb25seSA9IGZhbHNlO1xuICBASW5wdXQoKSBxdWFudGl0eUNvbnRyb2w6IEZvcm1Db250cm9sO1xuXG4gIEBPdXRwdXQoKSB2aWV3ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQElucHV0KCkgcHJvbW90aW9uTG9jYXRpb246IFByb21vdGlvbkxvY2F0aW9uID0gUHJvbW90aW9uTG9jYXRpb24uQWN0aXZlQ2FydDtcblxuICAvLyBUT0RPOiBldmFsdWF0ZSB3aGV0aGVyIHRoaXMgaXMgZ2VuZXJpYyBlbm91Z2hcbiAgQElucHV0KCkgb3B0aW9uczogQ2FydEl0ZW1Db21wb25lbnRPcHRpb25zID0ge1xuICAgIGlzU2F2ZUZvckxhdGVyOiBmYWxzZSxcbiAgICBvcHRpb25hbEJ0bjogbnVsbCxcbiAgfTtcblxuICBhcHBsaWVkUHJvZHVjdFByb21vdGlvbnMkOiBPYnNlcnZhYmxlPFByb21vdGlvblJlc3VsdFtdPjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcHJvbW90aW9uU2VydmljZTogUHJvbW90aW9uU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucyQgPSB0aGlzLnByb21vdGlvblNlcnZpY2UuZ2V0UHJvZHVjdFByb21vdGlvbkZvckVudHJ5KFxuICAgICAgdGhpcy5pdGVtLFxuICAgICAgdGhpcy5wcm9tb3Rpb25Mb2NhdGlvblxuICAgICk7XG4gIH1cblxuICBpc1Byb2R1Y3RPdXRPZlN0b2NrKHByb2R1Y3Q6IGFueSkge1xuICAgIC8vIFRPRE8gTW92ZSBzdG9ja2xldmVsc3RhdHVzZXMgYWNyb3NzIHRoZSBhcHAgdG8gYW4gZW51bVxuICAgIHJldHVybiAoXG4gICAgICBwcm9kdWN0ICYmXG4gICAgICBwcm9kdWN0LnN0b2NrICYmXG4gICAgICBwcm9kdWN0LnN0b2NrLnN0b2NrTGV2ZWxTdGF0dXMgPT09ICdvdXRPZlN0b2NrJ1xuICAgICk7XG4gIH1cblxuICByZW1vdmVJdGVtKCkge1xuICAgIHRoaXMucXVhbnRpdHlDb250cm9sLnNldFZhbHVlKDApO1xuICAgIHRoaXMucXVhbnRpdHlDb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gIH1cblxuICB2aWV3SXRlbSgpIHtcbiAgICB0aGlzLnZpZXcuZW1pdCgpO1xuICB9XG59XG4iXX0=