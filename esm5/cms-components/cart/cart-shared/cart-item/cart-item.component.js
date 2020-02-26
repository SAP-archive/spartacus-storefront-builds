import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FeatureConfigService, PromotionLocation, PromotionResult, } from '@spartacus/core';
import { PromotionService } from '../../../../shared/services/promotion/promotion.service';
var CartItemComponent = /** @class */ (function () {
    function CartItemComponent(promotionService, featureConfig) {
        this.promotionService = promotionService;
        this.featureConfig = featureConfig;
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
    //TODO remove feature flag for #5958
    CartItemComponent.prototype.isSaveForLaterEnabled = function () {
        if (this.featureConfig) {
            return this.featureConfig.isEnabled('saveForLater');
        }
        return false;
    };
    //TODO remove feature flag for #5958
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
        { type: PromotionService },
        { type: FeatureConfigService }
    ]; };
    __decorate([
        Input()
    ], CartItemComponent.prototype, "compact", void 0);
    __decorate([
        Input()
    ], CartItemComponent.prototype, "item", void 0);
    __decorate([
        Input()
    ], CartItemComponent.prototype, "potentialProductPromotions", void 0);
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
            template: "<div [ngClass]=\"compact ? 'cx-compact row' : 'row'\">\n  <!-- Item Image -->\n  <div class=\"col-2 cx-image-container\">\n    <a\n      [routerLink]=\"{ cxRoute: 'product', params: item.product } | cxUrl\"\n      (click)=\"viewItem()\"\n      tabindex=\"-1\"\n    >\n      <cx-media\n        [container]=\"item.product.images?.PRIMARY\"\n        format=\"thumbnail\"\n      ></cx-media>\n    </a>\n  </div>\n  <!-- Item Information -->\n  <div class=\"cx-info col-10\">\n    <div class=\"cx-info-container row \">\n      <!-- Item Description -->\n      <div [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-5'\">\n        <div *ngIf=\"item.product.name\" class=\"cx-name\">\n          <a\n            class=\"cx-link\"\n            [routerLink]=\"{ cxRoute: 'product', params: item.product } | cxUrl\"\n            (click)=\"viewItem()\"\n            >{{ item.product.name }}</a\n          >\n        </div>\n        <div *ngIf=\"item.product.code\" class=\"cx-code\">\n          {{ 'cartItems.id' | cxTranslate }} {{ item.product.code }}\n        </div>\n        <!-- Variants -->\n        <ng-container *cxFeatureLevel=\"'!1.5'\">\n          <div\n            *ngFor=\"let variant of item.product.variantOptionQualifiers\"\n            class=\"cx-property\"\n          >\n            <div class=\"cx-label\">{{ variant.name }}</div>\n            <div class=\"cx-value\">{{ variant.value }}</div>\n          </div>\n        </ng-container>\n        <ng-container *cxFeatureLevel=\"'1.5'\">\n          <ng-container *ngIf=\"item.product.baseOptions?.length\">\n            <div\n              *ngFor=\"\n                let variant of item.product.baseOptions[0]?.selected\n                  ?.variantOptionQualifiers\n              \"\n              class=\"cx-property\"\n            >\n              <div class=\"cx-label\" *ngIf=\"variant.name && variant.value\">\n                {{ variant.name }}: {{ variant.value }}\n              </div>\n            </div>\n          </ng-container>\n        </ng-container>\n      </div>\n      <!-- Item Price -->\n      <div\n        *ngIf=\"item.basePrice\"\n        class=\"cx-price\"\n        [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n      >\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n        >\n          {{ 'cartItems.itemPrice' | cxTranslate }}\n        </div>\n        <div *ngIf=\"item.basePrice\" class=\"cx-value\">\n          {{ item.basePrice?.formattedValue }}\n        </div>\n      </div>\n      <!-- Item Quantity -->\n      <div class=\"cx-quantity\" [ngClass]=\"compact ? '' : ' col-3'\">\n        <div\n          class=\"cx-label\"\n          [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n          placement=\"left\"\n          title=\"{{ 'cartItems.quantityTitle' | cxTranslate }}\"\n        >\n          {{ 'cartItems.quantity' | cxTranslate }}\n        </div>\n        <div class=\"cx-value\">\n          <cx-item-counter\n            [control]=\"quantityControl\"\n            [readonly]=\"\n              !item.updateable ||\n              readonly ||\n              (isSaveForLaterEnabled() && options.isSaveForLater)\n            \"\n            [max]=\"item.product.stock?.stockLevel || 1000\"\n            [allowZero]=\"true\"\n          >\n          </cx-item-counter>\n        </div>\n      </div>\n      <!-- Total -->\n      <ng-container\n        *ngIf=\"isSaveForLaterEnabled() && options.isSaveForLater; else total\"\n      >\n        <div\n          class=\"cx-total\"\n          [ngClass]=\"compact ? '' : ' col-md-3 col-lg-3 col-xl-2'\"\n        >\n          <div\n            class=\"cx-label\"\n            [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n          >\n            {{ 'saveForLaterItems.stock' | cxTranslate }}\n          </div>\n          <div\n            *ngIf=\"item.product?.stock?.stockLevel >= 0; else forceInstock\"\n            class=\"cx-value\"\n          >\n            {{ item.product.stock.stockLevel }}\n          </div>\n          <ng-template #forceInstock\n            ><div class=\"cx-value\">\n              {{ 'saveForLaterItems.forceInStock' | cxTranslate }}\n            </div></ng-template\n          >\n        </div>\n      </ng-container>\n    </div>\n    <!-- Availability -->\n    <div\n      *ngIf=\"isProductOutOfStock(item.product)\"\n      class=\"cx-availability col-12\"\n    >\n      {{ 'productSummary.outOfStock' | cxTranslate }}\n    </div>\n    <!-- Promotion -->\n    <ng-container *cxFeatureLevel=\"'!1.5'\">\n      <cx-promotions [promotions]=\"potentialProductPromotions\"></cx-promotions>\n    </ng-container>\n\n    <ng-container *cxFeatureLevel=\"'1.5'\">\n      <ng-container\n        *ngIf=\"appliedProductPromotions$ | async as appliedProductPromotions\"\n      >\n        <cx-promotions [promotions]=\"appliedProductPromotions\"></cx-promotions>\n      </ng-container>\n    </ng-container>\n\n    <!-- Actions -->\n    <div\n      *ngIf=\"(!readonly || options.isSaveForLater) && item.updateable\"\n      class=\"cx-actions col-12\"\n    >\n      <ng-container *ngIf=\"!isProductOutOfStock(item.product)\">\n        <ng-container\n          *ngTemplateOutlet=\"\n            options.optionalBtn;\n            context: {\n              $implicit: { loading: quantityControl.disabled, item: item }\n            }\n          \"\n        ></ng-container>\n      </ng-container>\n\n      <div class=\"col-md-3 cx-remove-btn\">\n        <button\n          class=\"link\"\n          [disabled]=\"quantityControl.disabled\"\n          (click)=\"removeItem()\"\n        >\n          {{ 'common.remove' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #total>\n  <div\n    *ngIf=\"item.totalPrice\"\n    class=\"cx-total\"\n    [ngClass]=\"compact ? '' : ' col-md-3 col-xl-2'\"\n  >\n    <div\n      class=\"cx-label\"\n      [ngClass]=\"compact ? '' : ' d-block d-md-none d-lg-none d-xl-none'\"\n    >\n      {{ 'cartItems.total' | cxTranslate }}\n    </div>\n    <div class=\"cx-value\">{{ item.totalPrice.formattedValue }}</div>\n  </div>\n</ng-template>\n"
        })
    ], CartItemComponent);
    return CartItemComponent;
}());
export { CartItemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NhcnQvY2FydC1zaGFyZWQvY2FydC1pdGVtL2NhcnQtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixpQkFBaUIsRUFDakIsZUFBZSxHQUNoQixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBbUIzRjtJQStCRSwyQkFDWSxnQkFBa0MsRUFDcEMsYUFBb0M7UUFEbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBdUI7UUFoQ3JDLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFHaEIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUdoQixTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUVoQyxzQkFBaUIsR0FBc0IsaUJBQWlCLENBQUMsVUFBVSxDQUFDO1FBRTdFLGdEQUFnRDtRQUN2QyxZQUFPLEdBQTZCO1lBQzNDLGNBQWMsRUFBRSxLQUFLO1lBQ3JCLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUM7SUFtQkMsQ0FBQztJQUVKLG9DQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLDJCQUEyQixDQUNoRixJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxpQkFBaUIsQ0FDdkIsQ0FBQztJQUNKLENBQUM7SUFFRCxvQ0FBb0M7SUFDcEMsaURBQXFCLEdBQXJCO1FBQ0UsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDckQ7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDRCxvQ0FBb0M7SUFFcEMsK0NBQW1CLEdBQW5CLFVBQW9CLE9BQVk7UUFDOUIseURBQXlEO1FBQ3pELE9BQU8sQ0FDTCxPQUFPO1lBQ1AsT0FBTyxDQUFDLEtBQUs7WUFDYixPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixLQUFLLFlBQVksQ0FDaEQsQ0FBQztJQUNKLENBQUM7SUFFRCxzQ0FBVSxHQUFWO1FBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Z0JBcEM2QixnQkFBZ0I7Z0JBQ3BCLG9CQUFvQjs7SUFoQ3JDO1FBQVIsS0FBSyxFQUFFO3NEQUFpQjtJQUNoQjtRQUFSLEtBQUssRUFBRTttREFBWTtJQUNYO1FBQVIsS0FBSyxFQUFFO3lFQUFtQztJQUNsQztRQUFSLEtBQUssRUFBRTt1REFBa0I7SUFDakI7UUFBUixLQUFLLEVBQUU7OERBQThCO0lBRTVCO1FBQVQsTUFBTSxFQUFFO21EQUFnQztJQUVoQztRQUFSLEtBQUssRUFBRTtnRUFBcUU7SUFHcEU7UUFBUixLQUFLLEVBQUU7c0RBR047SUFmUyxpQkFBaUI7UUFKN0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsMmtNQUF5QztTQUMxQyxDQUFDO09BQ1csaUJBQWlCLENBcUU3QjtJQUFELHdCQUFDO0NBQUEsQUFyRUQsSUFxRUM7U0FyRVksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBGZWF0dXJlQ29uZmlnU2VydmljZSxcbiAgUHJvbW90aW9uTG9jYXRpb24sXG4gIFByb21vdGlvblJlc3VsdCxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFByb21vdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvcHJvbW90aW9uL3Byb21vdGlvbi5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJdGVtIHtcbiAgcHJvZHVjdD86IGFueTtcbiAgcXVhbnRpdHk/OiBhbnk7XG4gIGJhc2VQcmljZT86IGFueTtcbiAgdG90YWxQcmljZT86IGFueTtcbiAgdXBkYXRlYWJsZT86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FydEl0ZW1Db21wb25lbnRPcHRpb25zIHtcbiAgaXNTYXZlRm9yTGF0ZXI/OiBib29sZWFuO1xuICBvcHRpb25hbEJ0bj86IGFueTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY2FydC1pdGVtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhcnQtaXRlbS5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRJdGVtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgY29tcGFjdCA9IGZhbHNlO1xuICBASW5wdXQoKSBpdGVtOiBJdGVtO1xuICBASW5wdXQoKSBwb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9uczogYW55W107XG4gIEBJbnB1dCgpIHJlYWRvbmx5ID0gZmFsc2U7XG4gIEBJbnB1dCgpIHF1YW50aXR5Q29udHJvbDogRm9ybUNvbnRyb2w7XG5cbiAgQE91dHB1dCgpIHZpZXcgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBASW5wdXQoKSBwcm9tb3Rpb25Mb2NhdGlvbjogUHJvbW90aW9uTG9jYXRpb24gPSBQcm9tb3Rpb25Mb2NhdGlvbi5BY3RpdmVDYXJ0O1xuXG4gIC8vIFRPRE86IGV2YWx1YXRlIHdoZXRoZXIgdGhpcyBpcyBnZW5lcmljIGVub3VnaFxuICBASW5wdXQoKSBvcHRpb25zOiBDYXJ0SXRlbUNvbXBvbmVudE9wdGlvbnMgPSB7XG4gICAgaXNTYXZlRm9yTGF0ZXI6IGZhbHNlLFxuICAgIG9wdGlvbmFsQnRuOiBudWxsLFxuICB9O1xuXG4gIGFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucyQ6IE9ic2VydmFibGU8UHJvbW90aW9uUmVzdWx0W10+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb21vdGlvblNlcnZpY2U6IFByb21vdGlvblNlcnZpY2UsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnVuaWZpZWQtc2lnbmF0dXJlc1xuICAgIGZlYXR1cmVDb25maWc6IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICk7XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjVcbiAgICogQWRkIGZlYXR1cmVDb25maWcgZm9yIHNhdmUgZm9yIGxhdGVyLlxuICAgKiBSZW1vdmUgaXNzdWU6ICM1OTU4XG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9tb3Rpb25TZXJ2aWNlOiBQcm9tb3Rpb25TZXJ2aWNlKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcHJvbW90aW9uU2VydmljZTogUHJvbW90aW9uU2VydmljZSxcbiAgICBwcml2YXRlIGZlYXR1cmVDb25maWc/OiBGZWF0dXJlQ29uZmlnU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hcHBsaWVkUHJvZHVjdFByb21vdGlvbnMkID0gdGhpcy5wcm9tb3Rpb25TZXJ2aWNlLmdldFByb2R1Y3RQcm9tb3Rpb25Gb3JFbnRyeShcbiAgICAgIHRoaXMuaXRlbSxcbiAgICAgIHRoaXMucHJvbW90aW9uTG9jYXRpb25cbiAgICApO1xuICB9XG5cbiAgLy9UT0RPIHJlbW92ZSBmZWF0dXJlIGZsYWcgZm9yICM1OTU4XG4gIGlzU2F2ZUZvckxhdGVyRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5mZWF0dXJlQ29uZmlnKSB7XG4gICAgICByZXR1cm4gdGhpcy5mZWF0dXJlQ29uZmlnLmlzRW5hYmxlZCgnc2F2ZUZvckxhdGVyJyk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvL1RPRE8gcmVtb3ZlIGZlYXR1cmUgZmxhZyBmb3IgIzU5NThcblxuICBpc1Byb2R1Y3RPdXRPZlN0b2NrKHByb2R1Y3Q6IGFueSkge1xuICAgIC8vIFRPRE8gTW92ZSBzdG9ja2xldmVsc3RhdHVzZXMgYWNyb3NzIHRoZSBhcHAgdG8gYW4gZW51bVxuICAgIHJldHVybiAoXG4gICAgICBwcm9kdWN0ICYmXG4gICAgICBwcm9kdWN0LnN0b2NrICYmXG4gICAgICBwcm9kdWN0LnN0b2NrLnN0b2NrTGV2ZWxTdGF0dXMgPT09ICdvdXRPZlN0b2NrJ1xuICAgICk7XG4gIH1cblxuICByZW1vdmVJdGVtKCkge1xuICAgIHRoaXMucXVhbnRpdHlDb250cm9sLnNldFZhbHVlKDApO1xuICAgIHRoaXMucXVhbnRpdHlDb250cm9sLm1hcmtBc0RpcnR5KCk7XG4gIH1cblxuICB2aWV3SXRlbSgpIHtcbiAgICB0aGlzLnZpZXcuZW1pdCgpO1xuICB9XG59XG4iXX0=