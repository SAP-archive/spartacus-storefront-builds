/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { ProductDetailOutlets } from '../../../product-outlets.model';
export class ProductSummaryComponent {
    constructor() {
        this.itemCount = 1;
        this.openReview = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get outlets() {
        return ProductSummaryComponent.outlets;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    updateCount(value) {
        this.itemCount = value;
    }
    /**
     * @return {?}
     */
    get stockInfo() {
        return this.hasStock()
            ? `${this.product.stock.stockLevel} in stock`
            : 'Out of stock';
    }
    /**
     * @private
     * @return {?}
     */
    hasStock() {
        return (this.product &&
            this.product.stock &&
            (this.product.stock.stockLevel > 0 ||
                this.product.stock.stockLevelStatus === 'inStock'));
    }
    /**
     * @return {?}
     */
    launchReview() {
        this.openReview.emit();
    }
}
ProductSummaryComponent.outlets = ProductDetailOutlets;
ProductSummaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-summary',
                template: "<ng-container *cxOutlet=\"outlets.TITLE\">\n  <div class=\"name\">{{ product?.name }}</div>\n  <div class=\"code\">\n    {{ 'productDetails.label.id' | cxTranslate }} {{ product?.code }}\n  </div>\n</ng-container>\n\n<div class=\"images\"><ng-content></ng-content></div>\n\n<ng-container *cxOutlet=\"outlets.RATING\">\n  <div class=\"rating\">\n    <cx-star-rating\n      [rating]=\"product?.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n    <div class=\"count\">({{ product?.numberOfReviews }})</div>\n    <a class=\"btn-link\" (click)=\"launchReview()\">{{\n      'productDetails.action.showReviews' | cxTranslate\n    }}</a>\n  </div>\n</ng-container>\n\n<ng-container *cxOutlet=\"outlets.PRICE\">\n  <div class=\"price\" aria-label=\"new item price\">\n    {{ product?.price?.formattedValue }}\n  </div>\n</ng-container>\n\n<div class=\"description\"><p [innerHTML]=\"product?.summary\"></p></div>\n\n<ng-container *cxOutlet=\"outlets.ADDTOCART\">\n  <div class=\"quantity\">\n    <label>{{ 'productDetails.label.quantity' | cxTranslate }}</label>\n    <cx-item-counter\n      isValueChangeable=\"true\"\n      [min]=\"1\"\n      [max]=\"product.stock?.stockLevel || 1000\"\n      *ngIf=\"\n        product?.stock?.stockLevel > 0 ||\n        product?.stock?.stockLevelStatus === 'inStock'\n      \"\n      (update)=\"updateCount($event)\"\n    ></cx-item-counter>\n    <span class=\"info\">{{ stockInfo }}</span>\n  </div>\n  <cx-add-to-cart\n    *ngIf=\"product?.stock?.stockLevelStatus !== 'outOfStock'\"\n    [quantity]=\"itemCount\"\n    [productCode]=\"product?.code\"\n    [maxQuantity]=\"product.stock.stockLevel\"\n  ></cx-add-to-cart>\n</ng-container>\n\n<ng-container *cxOutlet=\"outlets.SHARE\">\n  <div>\n    <a href=\"#\" class=\"share btn-link\">\n      {{ 'productDetails.action.share' | cxTranslate }}\n    </a>\n  </div>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
ProductSummaryComponent.propDecorators = {
    product: [{ type: Input }],
    openReview: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ProductSummaryComponent.outlets;
    /** @type {?} */
    ProductSummaryComponent.prototype.itemCount;
    /** @type {?} */
    ProductSummaryComponent.prototype.product;
    /** @type {?} */
    ProductSummaryComponent.prototype.openReview;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zdW1tYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3Qtc3VtbWFyeS9wcm9kdWN0LXN1bW1hcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQU90RSxNQUFNLE9BQU8sdUJBQXVCO0lBTHBDO1FBUUUsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUdKLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBNEI1QyxDQUFDOzs7O0lBMUJDLElBQUksT0FBTztRQUNULE9BQU8sdUJBQXVCLENBQUMsT0FBTyxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQUs7UUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3BCLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsV0FBVztZQUM3QyxDQUFDLENBQUMsY0FBYyxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRU8sUUFBUTtRQUNkLE9BQU8sQ0FDTCxJQUFJLENBQUMsT0FBTztZQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSztZQUNsQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsS0FBSyxTQUFTLENBQUMsQ0FDckQsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDOztBQWhDTSwrQkFBTyxHQUFHLG9CQUFvQixDQUFDOztZQU52QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsczJEQUErQztnQkFDL0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztzQkFNRSxLQUFLO3lCQUNMLE1BQU07Ozs7SUFMUCxnQ0FBc0M7O0lBRXRDLDRDQUFjOztJQUVkLDBDQUFzQjs7SUFDdEIsNkNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3REZXRhaWxPdXRsZXRzIH0gZnJvbSAnLi4vLi4vLi4vcHJvZHVjdC1vdXRsZXRzLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1zdW1tYXJ5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3Qtc3VtbWFyeS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0U3VtbWFyeUNvbXBvbmVudCB7XG4gIHN0YXRpYyBvdXRsZXRzID0gUHJvZHVjdERldGFpbE91dGxldHM7XG5cbiAgaXRlbUNvdW50ID0gMTtcblxuICBASW5wdXQoKSBwcm9kdWN0OiBhbnk7XG4gIEBPdXRwdXQoKSBvcGVuUmV2aWV3ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGdldCBvdXRsZXRzKCkge1xuICAgIHJldHVybiBQcm9kdWN0U3VtbWFyeUNvbXBvbmVudC5vdXRsZXRzO1xuICB9XG5cbiAgdXBkYXRlQ291bnQodmFsdWUpIHtcbiAgICB0aGlzLml0ZW1Db3VudCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHN0b2NrSW5mbygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmhhc1N0b2NrKClcbiAgICAgID8gYCR7dGhpcy5wcm9kdWN0LnN0b2NrLnN0b2NrTGV2ZWx9IGluIHN0b2NrYFxuICAgICAgOiAnT3V0IG9mIHN0b2NrJztcbiAgfVxuXG4gIHByaXZhdGUgaGFzU3RvY2soKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucHJvZHVjdCAmJlxuICAgICAgdGhpcy5wcm9kdWN0LnN0b2NrICYmXG4gICAgICAodGhpcy5wcm9kdWN0LnN0b2NrLnN0b2NrTGV2ZWwgPiAwIHx8XG4gICAgICAgIHRoaXMucHJvZHVjdC5zdG9jay5zdG9ja0xldmVsU3RhdHVzID09PSAnaW5TdG9jaycpXG4gICAgKTtcbiAgfVxuXG4gIGxhdW5jaFJldmlldygpIHtcbiAgICB0aGlzLm9wZW5SZXZpZXcuZW1pdCgpO1xuICB9XG59XG4iXX0=