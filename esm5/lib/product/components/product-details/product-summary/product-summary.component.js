/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter, } from '@angular/core';
import { ProductDetailOutlets } from '../../../product-outlets.model';
var ProductSummaryComponent = /** @class */ (function () {
    function ProductSummaryComponent() {
        this.itemCount = 1;
        this.openReview = new EventEmitter();
    }
    Object.defineProperty(ProductSummaryComponent.prototype, "outlets", {
        get: /**
         * @return {?}
         */
        function () {
            return ProductSummaryComponent.outlets;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    ProductSummaryComponent.prototype.updateCount = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.itemCount = value;
    };
    Object.defineProperty(ProductSummaryComponent.prototype, "stockInfo", {
        get: /**
         * @return {?}
         */
        function () {
            return this.hasStock()
                ? this.product.stock.stockLevel + " in stock"
                : 'Out of stock';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    ProductSummaryComponent.prototype.hasStock = /**
     * @private
     * @return {?}
     */
    function () {
        return (this.product &&
            this.product.stock &&
            (this.product.stock.stockLevel > 0 ||
                this.product.stock.stockLevelStatus === 'inStock'));
    };
    /**
     * @return {?}
     */
    ProductSummaryComponent.prototype.launchReview = /**
     * @return {?}
     */
    function () {
        this.openReview.emit();
    };
    ProductSummaryComponent.outlets = ProductDetailOutlets;
    ProductSummaryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-summary',
                    template: "<ng-container *cxOutlet=\"outlets.TITLE\">\n  <div class=\"name\">{{ product?.name }}</div>\n  <div class=\"code\">\n    {{ 'productDetails.label.id' | cxTranslate }} {{ product?.code }}\n  </div>\n</ng-container>\n\n<div class=\"images\"><ng-content></ng-content></div>\n\n<ng-container *cxOutlet=\"outlets.RATING\">\n  <div class=\"rating\">\n    <cx-star-rating\n      [rating]=\"product?.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n    <div class=\"count\">({{ product?.numberOfReviews }})</div>\n    <a class=\"btn-link\" (click)=\"launchReview()\">{{\n      'productDetails.action.showReviews' | cxTranslate\n    }}</a>\n  </div>\n</ng-container>\n\n<ng-container *cxOutlet=\"outlets.PRICE\">\n  <div class=\"price\" aria-label=\"new item price\">\n    {{ product?.price?.formattedValue }}\n  </div>\n</ng-container>\n\n<div class=\"description\"><p [innerHTML]=\"product?.summary\"></p></div>\n\n<ng-container *cxOutlet=\"outlets.ADDTOCART\">\n  <div class=\"quantity\">\n    <label>{{ 'productDetails.label.quantity' | cxTranslate }}</label>\n    <cx-item-counter\n      isValueChangeable=\"true\"\n      [min]=\"1\"\n      [max]=\"product.stock?.stockLevel || 1000\"\n      *ngIf=\"\n        product?.stock?.stockLevel > 0 ||\n        product?.stock?.stockLevelStatus === 'inStock'\n      \"\n      (update)=\"updateCount($event)\"\n    ></cx-item-counter>\n    <span class=\"info\">{{ stockInfo }}</span>\n  </div>\n  <cx-add-to-cart\n    *ngIf=\"product?.stock?.stockLevelStatus !== 'outOfStock'\"\n    [quantity]=\"itemCount\"\n    [productCode]=\"product?.code\"\n    [maxQuantity]=\"product.stock.stockLevel\"\n  ></cx-add-to-cart>\n</ng-container>\n\n<ng-container *cxOutlet=\"outlets.SHARE\">\n  <div>\n    <a href=\"#\" class=\"share btn-link\">\n      {{ 'productDetails.action.share' | cxTranslate }}\n    </a>\n  </div>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/:host{display:-ms-grid;display:grid;grid-column-gap:var(--cx-grid-column-gap,30px)}@media (min-width:992px){:host{-ms-grid-columns:var(--cx-grid-template-columns,50% auto);grid-template-columns:var(--cx-grid-template-columns,50% auto);-ms-grid-rows:var(--cx-grid-template-row,repeat(7,auto) 1fr);grid-template-rows:var(--cx-grid-template-row,repeat(7,auto) 1fr)}.images{grid-column:var(--cx-grid-column,1);grid-row:var(--cx-grid-row,1/span 8)}}.name{font-size:var(--cx-font-size,2.25rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222)}.code{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222);color:var(--cx-color,var(--cx-g-color-secondary))}.rating{display:flex;flex-direction:row;align-items:baseline;margin:var(--cx-margin,0 0 12px 0)}.rating .count{margin:var(--cx-margin,0 20px 0 5px)}.price{display:inline-block;font-size:var(--cx-font-size,1.375rem);font-weight:var(--cx-g-font-weight-semi);line-height:var(--cx-line-height,1.22222);font-weight:400}.quantity label{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);margin:var(--cx-margin,15px 0 10px 0)}.quantity .info{font-size:var(--cx-font-size,.875rem);font-weight:var(--cx-g-font-weight-normal);line-height:var(--cx-line-height,1.22222);margin:var(--cx-margin,0 15px 0 15px);color:var(--cx-color,var(--cx-g-color-secondary))}cx-add-to-cart{margin:var(--cx-margin,20px 0 10px 0)}"]
                }] }
    ];
    ProductSummaryComponent.propDecorators = {
        product: [{ type: Input }],
        openReview: [{ type: Output }]
    };
    return ProductSummaryComponent;
}());
export { ProductSummaryComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zdW1tYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3Qtc3VtbWFyeS9wcm9kdWN0LXN1bW1hcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCx1QkFBdUIsRUFDdkIsTUFBTSxFQUNOLFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUV0RTtJQUFBO1FBU0UsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUdKLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBNEI1QyxDQUFDO0lBMUJDLHNCQUFJLDRDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLHVCQUF1QixDQUFDLE9BQU8sQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTs7Ozs7SUFFRCw2Q0FBVzs7OztJQUFYLFVBQVksS0FBSztRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxzQkFBSSw4Q0FBUzs7OztRQUFiO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNwQixDQUFDLENBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxjQUFXO2dCQUM3QyxDQUFDLENBQUMsY0FBYyxDQUFDO1FBQ3JCLENBQUM7OztPQUFBOzs7OztJQUVPLDBDQUFROzs7O0lBQWhCO1FBQ0UsT0FBTyxDQUNMLElBQUksQ0FBQyxPQUFPO1lBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLO1lBQ2xCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLENBQUM7Z0JBQ2hDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLGdCQUFnQixLQUFLLFNBQVMsQ0FBQyxDQUNyRCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELDhDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQWhDTSwrQkFBTyxHQUFHLG9CQUFvQixDQUFDOztnQkFQdkMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLHMyREFBK0M7b0JBRS9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7OzswQkFNRSxLQUFLOzZCQUNMLE1BQU07O0lBNEJULDhCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0FsQ1ksdUJBQXVCOzs7SUFDbEMsZ0NBQXNDOztJQUV0Qyw0Q0FBYzs7SUFFZCwwQ0FBc0I7O0lBQ3RCLDZDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0RGV0YWlsT3V0bGV0cyB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3Qtb3V0bGV0cy5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3Qtc3VtbWFyeScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LXN1bW1hcnkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9kdWN0LXN1bW1hcnkuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTdW1tYXJ5Q29tcG9uZW50IHtcbiAgc3RhdGljIG91dGxldHMgPSBQcm9kdWN0RGV0YWlsT3V0bGV0cztcblxuICBpdGVtQ291bnQgPSAxO1xuXG4gIEBJbnB1dCgpIHByb2R1Y3Q6IGFueTtcbiAgQE91dHB1dCgpIG9wZW5SZXZpZXcgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZ2V0IG91dGxldHMoKSB7XG4gICAgcmV0dXJuIFByb2R1Y3RTdW1tYXJ5Q29tcG9uZW50Lm91dGxldHM7XG4gIH1cblxuICB1cGRhdGVDb3VudCh2YWx1ZSkge1xuICAgIHRoaXMuaXRlbUNvdW50ID0gdmFsdWU7XG4gIH1cblxuICBnZXQgc3RvY2tJbmZvKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaGFzU3RvY2soKVxuICAgICAgPyBgJHt0aGlzLnByb2R1Y3Quc3RvY2suc3RvY2tMZXZlbH0gaW4gc3RvY2tgXG4gICAgICA6ICdPdXQgb2Ygc3RvY2snO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNTdG9jaygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5wcm9kdWN0ICYmXG4gICAgICB0aGlzLnByb2R1Y3Quc3RvY2sgJiZcbiAgICAgICh0aGlzLnByb2R1Y3Quc3RvY2suc3RvY2tMZXZlbCA+IDAgfHxcbiAgICAgICAgdGhpcy5wcm9kdWN0LnN0b2NrLnN0b2NrTGV2ZWxTdGF0dXMgPT09ICdpblN0b2NrJylcbiAgICApO1xuICB9XG5cbiAgbGF1bmNoUmV2aWV3KCkge1xuICAgIHRoaXMub3BlblJldmlldy5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==