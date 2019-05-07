/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';
import { TranslatePipe } from '@spartacus/core';
import { ProductDetailOutlets } from '../../product-outlets.model';
var ProductSummaryComponent = /** @class */ (function () {
    function ProductSummaryComponent(translatePipe) {
        this.translatePipe = translatePipe;
        this.itemCount = 1;
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
    Object.defineProperty(ProductSummaryComponent.prototype, "hasStock", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.product &&
                this.product.stock &&
                (this.product.stock.stockLevel > 0 ||
                    this.product.stock.stockLevelStatus === 'inStock'));
        },
        enumerable: true,
        configurable: true
    });
    // NOTE: Does not currently exists as its own component
    // but part of tabs component. This is likely to change in refactor.
    // NOTE: Does not currently exists as its own component
    // but part of tabs component. This is likely to change in refactor.
    /**
     * @private
     * @return {?}
     */
    ProductSummaryComponent.prototype.getReviewsComponent = 
    // NOTE: Does not currently exists as its own component
    // but part of tabs component. This is likely to change in refactor.
    /**
     * @private
     * @return {?}
     */
    function () {
        return document.querySelector('cx-product-reviews');
    };
    // Get Tabs Component if exists on page
    // Get Tabs Component if exists on page
    /**
     * @private
     * @return {?}
     */
    ProductSummaryComponent.prototype.getTabsComponent = 
    // Get Tabs Component if exists on page
    /**
     * @private
     * @return {?}
     */
    function () {
        return document.querySelector('cx-product-tabs');
    };
    // Get Tab by label if exists on page
    // Get Tab by label if exists on page
    /**
     * @param {?} label
     * @param {?} tabsComponent
     * @return {?}
     */
    ProductSummaryComponent.prototype.getTabByLabel = 
    // Get Tab by label if exists on page
    /**
     * @param {?} label
     * @param {?} tabsComponent
     * @return {?}
     */
    function (label, tabsComponent) {
        var e_1, _a;
        if (tabsComponent) {
            // NOTE: Reads through h3 tags to click on correct tab
            // There may be a better way of doing this now/after refactor
            /** @type {?} */
            var h3Elements = tabsComponent.getElementsByTagName('h3');
            try {
                // Look through h3 tab elements until finding tab with label
                for (var _b = tslib_1.__values(Array.from(h3Elements)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var h3Element = _c.value;
                    if (h3Element.innerHTML.includes(label)) {
                        return h3Element;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    // Click to activate tab if not already active
    // Click to activate tab if not already active
    /**
     * @param {?} tab
     * @return {?}
     */
    ProductSummaryComponent.prototype.clickTabIfInactive = 
    // Click to activate tab if not already active
    /**
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        if (!tab.classList.contains('active') ||
            tab.classList.contains('toggled')) {
            tab.click();
        }
    };
    // Scroll to views component on page and click "Reviews" tab
    // Scroll to views component on page and click "Reviews" tab
    /**
     * @return {?}
     */
    ProductSummaryComponent.prototype.showReviews = 
    // Scroll to views component on page and click "Reviews" tab
    /**
     * @return {?}
     */
    function () {
        // Use translated label for Reviews tab reference
        /** @type {?} */
        var reviewsTabLabel = this.translatePipe.transform('productDetails.label.reviews');
        /** @type {?} */
        var tabsComponent = this.getTabsComponent();
        /** @type {?} */
        var reviewsTab = this.getTabByLabel(reviewsTabLabel, tabsComponent);
        /** @type {?} */
        var reviewsComponent = this.getReviewsComponent();
        if (reviewsTab && reviewsComponent) {
            reviewsComponent.scrollIntoView();
            this.clickTabIfInactive(reviewsTab);
        }
    };
    /**
     * @return {?}
     */
    ProductSummaryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.reviewsTabAvailable = !!this.getReviewsComponent();
    };
    ProductSummaryComponent.outlets = ProductDetailOutlets;
    ProductSummaryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-summary',
                    template: "<ng-container *cxOutlet=\"outlets.TITLE\">\n  <div class=\"name\">{{ product?.name }}</div>\n  <div class=\"code\">\n    {{ 'productSummary.id' | cxTranslate }} {{ product?.code }}\n  </div>\n</ng-container>\n\n<div class=\"images\"><ng-content></ng-content></div>\n\n<ng-container *cxOutlet=\"outlets.RATING\">\n  <div class=\"rating\">\n    <cx-star-rating\n      [rating]=\"product?.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n    <div class=\"count\">({{ product?.numberOfReviews }})</div>\n    <a class=\"btn-link\" *ngIf=\"reviewsTabAvailable\" (click)=\"showReviews()\">{{\n      'productSummary.showReviews' | cxTranslate\n    }}</a>\n  </div>\n</ng-container>\n\n<ng-container *cxOutlet=\"outlets.PRICE\">\n  <div class=\"price\" aria-label=\"new item price\">\n    {{ product?.price?.formattedValue }}\n  </div>\n</ng-container>\n\n<div class=\"description\"><p [innerHTML]=\"product?.summary\"></p></div>\n\n<ng-container *cxOutlet=\"outlets.ADDTOCART\">\n  <div class=\"quantity\">\n    <label>{{ 'productSummary.quantity' | cxTranslate }}</label>\n    <cx-item-counter\n      isValueChangeable=\"true\"\n      [min]=\"1\"\n      [max]=\"product.stock?.stockLevel || 1000\"\n      *ngIf=\"\n        product?.stock?.stockLevel > 0 ||\n        product?.stock?.stockLevelStatus === 'inStock'\n      \"\n      (update)=\"updateCount($event)\"\n    ></cx-item-counter>\n    <span class=\"info\">{{\n      hasStock\n        ? ('productSummary.inStock' | cxTranslate)\n        : ('productSummary.outOfStock' | cxTranslate)\n    }}</span>\n  </div>\n  <cx-add-to-cart\n    *ngIf=\"product?.stock?.stockLevelStatus !== 'outOfStock'\"\n    [quantity]=\"itemCount\"\n    [productCode]=\"product?.code\"\n    [maxQuantity]=\"product.stock.stockLevel\"\n  ></cx-add-to-cart>\n</ng-container>\n\n<!-- @TODO: Temp. Comment out share link while not in use by CMS -->\n<!-- <ng-container *cxOutlet=\"outlets.SHARE\">\n  <div>\n    <a href=\"#\" class=\"share btn-link\">\n      {{ 'productSummary.share' | cxTranslate }}\n    </a>\n  </div>\n</ng-container> -->\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [TranslatePipe]
                }] }
    ];
    /** @nocollapse */
    ProductSummaryComponent.ctorParameters = function () { return [
        { type: TranslatePipe }
    ]; };
    ProductSummaryComponent.propDecorators = {
        product: [{ type: Input }]
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
    ProductSummaryComponent.prototype.reviewsTabAvailable;
    /** @type {?} */
    ProductSummaryComponent.prototype.product;
    /**
     * @type {?}
     * @protected
     */
    ProductSummaryComponent.prototype.translatePipe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zdW1tYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3Qtc3VtbWFyeS9wcm9kdWN0LXN1bW1hcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxHQUVOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVuRTtJQXVGRSxpQ0FBc0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUE5RWxELGNBQVMsR0FBRyxDQUFDLENBQUM7SUE4RXVDLENBQUM7SUF6RXRELHNCQUFJLDRDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLHVCQUF1QixDQUFDLE9BQU8sQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTs7Ozs7SUFFRCw2Q0FBVzs7OztJQUFYLFVBQVksS0FBSztRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxzQkFBSSw2Q0FBUTs7OztRQUFaO1lBQ0UsT0FBTyxDQUNMLElBQUksQ0FBQyxPQUFPO2dCQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSztnQkFDbEIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEtBQUssU0FBUyxDQUFDLENBQ3JELENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUVELHVEQUF1RDtJQUN2RCxvRUFBb0U7Ozs7Ozs7SUFDNUQscURBQW1COzs7Ozs7O0lBQTNCO1FBQ0UsT0FBTyxRQUFRLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELHVDQUF1Qzs7Ozs7O0lBQy9CLGtEQUFnQjs7Ozs7O0lBQXhCO1FBQ0UsT0FBTyxRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELHFDQUFxQzs7Ozs7OztJQUNyQywrQ0FBYTs7Ozs7OztJQUFiLFVBQWMsS0FBYSxFQUFFLGFBQXNCOztRQUNqRCxJQUFJLGFBQWEsRUFBRTs7OztnQkFHWCxVQUFVLEdBRVosYUFBYSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQzs7Z0JBRTVDLDREQUE0RDtnQkFDNUQsS0FBd0IsSUFBQSxLQUFBLGlCQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUEsZ0JBQUEsNEJBQUU7b0JBQTNDLElBQU0sU0FBUyxXQUFBO29CQUNsQixJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUN2QyxPQUFPLFNBQVMsQ0FBQztxQkFDbEI7aUJBQ0Y7Ozs7Ozs7OztTQUNGO0lBQ0gsQ0FBQztJQUVELDhDQUE4Qzs7Ozs7O0lBQzlDLG9EQUFrQjs7Ozs7O0lBQWxCLFVBQW1CLEdBQWdCO1FBQ2pDLElBQ0UsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDakMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQ2pDO1lBQ0EsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRUQsNERBQTREOzs7OztJQUM1RCw2Q0FBVzs7Ozs7SUFBWDs7O1lBRVEsZUFBZSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUNsRCw4QkFBOEIsQ0FDL0I7O1lBRUssYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTs7WUFDdkMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQzs7WUFDL0QsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFO1FBRW5ELElBQUksVUFBVSxJQUFJLGdCQUFnQixFQUFFO1lBQ2xDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQ2xDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7Ozs7SUFJRCwwQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzFELENBQUM7SUFwRk0sK0JBQU8sR0FBRyxvQkFBb0IsQ0FBQzs7Z0JBUHZDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5Qiw4aUVBQStDO29CQUMvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDO2lCQUMzQjs7OztnQkFSUSxhQUFhOzs7MEJBZW5CLEtBQUs7O0lBZ0ZSLDhCQUFDO0NBQUEsQUE1RkQsSUE0RkM7U0F0RlksdUJBQXVCOzs7SUFDbEMsZ0NBQXNDOztJQUV0Qyw0Q0FBYzs7SUFDZCxzREFBNkI7O0lBRTdCLDBDQUFzQjs7Ozs7SUEyRVYsZ0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3REZXRhaWxPdXRsZXRzIH0gZnJvbSAnLi4vLi4vcHJvZHVjdC1vdXRsZXRzLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1zdW1tYXJ5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3Qtc3VtbWFyeS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtUcmFuc2xhdGVQaXBlXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFN1bW1hcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBzdGF0aWMgb3V0bGV0cyA9IFByb2R1Y3REZXRhaWxPdXRsZXRzO1xuXG4gIGl0ZW1Db3VudCA9IDE7XG4gIHJldmlld3NUYWJBdmFpbGFibGU6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgcHJvZHVjdDogYW55O1xuXG4gIGdldCBvdXRsZXRzKCkge1xuICAgIHJldHVybiBQcm9kdWN0U3VtbWFyeUNvbXBvbmVudC5vdXRsZXRzO1xuICB9XG5cbiAgdXBkYXRlQ291bnQodmFsdWUpIHtcbiAgICB0aGlzLml0ZW1Db3VudCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGhhc1N0b2NrKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnByb2R1Y3QgJiZcbiAgICAgIHRoaXMucHJvZHVjdC5zdG9jayAmJlxuICAgICAgKHRoaXMucHJvZHVjdC5zdG9jay5zdG9ja0xldmVsID4gMCB8fFxuICAgICAgICB0aGlzLnByb2R1Y3Quc3RvY2suc3RvY2tMZXZlbFN0YXR1cyA9PT0gJ2luU3RvY2snKVxuICAgICk7XG4gIH1cblxuICAvLyBOT1RFOiBEb2VzIG5vdCBjdXJyZW50bHkgZXhpc3RzIGFzIGl0cyBvd24gY29tcG9uZW50XG4gIC8vIGJ1dCBwYXJ0IG9mIHRhYnMgY29tcG9uZW50LiBUaGlzIGlzIGxpa2VseSB0byBjaGFuZ2UgaW4gcmVmYWN0b3IuXG4gIHByaXZhdGUgZ2V0UmV2aWV3c0NvbXBvbmVudCgpOiBFbGVtZW50IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY3gtcHJvZHVjdC1yZXZpZXdzJyk7XG4gIH1cblxuICAvLyBHZXQgVGFicyBDb21wb25lbnQgaWYgZXhpc3RzIG9uIHBhZ2VcbiAgcHJpdmF0ZSBnZXRUYWJzQ29tcG9uZW50KCk6IEVsZW1lbnQge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjeC1wcm9kdWN0LXRhYnMnKTtcbiAgfVxuXG4gIC8vIEdldCBUYWIgYnkgbGFiZWwgaWYgZXhpc3RzIG9uIHBhZ2VcbiAgZ2V0VGFiQnlMYWJlbChsYWJlbDogc3RyaW5nLCB0YWJzQ29tcG9uZW50OiBFbGVtZW50KTogSFRNTEVsZW1lbnQge1xuICAgIGlmICh0YWJzQ29tcG9uZW50KSB7XG4gICAgICAvLyBOT1RFOiBSZWFkcyB0aHJvdWdoIGgzIHRhZ3MgdG8gY2xpY2sgb24gY29ycmVjdCB0YWJcbiAgICAgIC8vIFRoZXJlIG1heSBiZSBhIGJldHRlciB3YXkgb2YgZG9pbmcgdGhpcyBub3cvYWZ0ZXIgcmVmYWN0b3JcbiAgICAgIGNvbnN0IGgzRWxlbWVudHM6IEhUTUxDb2xsZWN0aW9uT2Y8XG4gICAgICAgIEhUTUxFbGVtZW50XG4gICAgICA+ID0gdGFic0NvbXBvbmVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaDMnKTtcblxuICAgICAgLy8gTG9vayB0aHJvdWdoIGgzIHRhYiBlbGVtZW50cyB1bnRpbCBmaW5kaW5nIHRhYiB3aXRoIGxhYmVsXG4gICAgICBmb3IgKGNvbnN0IGgzRWxlbWVudCBvZiBBcnJheS5mcm9tKGgzRWxlbWVudHMpKSB7XG4gICAgICAgIGlmIChoM0VsZW1lbnQuaW5uZXJIVE1MLmluY2x1ZGVzKGxhYmVsKSkge1xuICAgICAgICAgIHJldHVybiBoM0VsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDbGljayB0byBhY3RpdmF0ZSB0YWIgaWYgbm90IGFscmVhZHkgYWN0aXZlXG4gIGNsaWNrVGFiSWZJbmFjdGl2ZSh0YWI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgIXRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpIHx8XG4gICAgICB0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2dnbGVkJylcbiAgICApIHtcbiAgICAgIHRhYi5jbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNjcm9sbCB0byB2aWV3cyBjb21wb25lbnQgb24gcGFnZSBhbmQgY2xpY2sgXCJSZXZpZXdzXCIgdGFiXG4gIHNob3dSZXZpZXdzKCkge1xuICAgIC8vIFVzZSB0cmFuc2xhdGVkIGxhYmVsIGZvciBSZXZpZXdzIHRhYiByZWZlcmVuY2VcbiAgICBjb25zdCByZXZpZXdzVGFiTGFiZWwgPSB0aGlzLnRyYW5zbGF0ZVBpcGUudHJhbnNmb3JtKFxuICAgICAgJ3Byb2R1Y3REZXRhaWxzLmxhYmVsLnJldmlld3MnXG4gICAgKTtcblxuICAgIGNvbnN0IHRhYnNDb21wb25lbnQgPSB0aGlzLmdldFRhYnNDb21wb25lbnQoKTtcbiAgICBjb25zdCByZXZpZXdzVGFiID0gdGhpcy5nZXRUYWJCeUxhYmVsKHJldmlld3NUYWJMYWJlbCwgdGFic0NvbXBvbmVudCk7XG4gICAgY29uc3QgcmV2aWV3c0NvbXBvbmVudCA9IHRoaXMuZ2V0UmV2aWV3c0NvbXBvbmVudCgpO1xuXG4gICAgaWYgKHJldmlld3NUYWIgJiYgcmV2aWV3c0NvbXBvbmVudCkge1xuICAgICAgcmV2aWV3c0NvbXBvbmVudC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgdGhpcy5jbGlja1RhYklmSW5hY3RpdmUocmV2aWV3c1RhYik7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRyYW5zbGF0ZVBpcGU6IFRyYW5zbGF0ZVBpcGUpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yZXZpZXdzVGFiQXZhaWxhYmxlID0gISF0aGlzLmdldFJldmlld3NDb21wb25lbnQoKTtcbiAgfVxufVxuIl19