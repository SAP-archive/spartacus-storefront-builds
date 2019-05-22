/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';
import { TranslatePipe, TranslationService } from '@spartacus/core';
import { ProductDetailOutlets } from '../../product-outlets.model';
var ProductSummaryComponent = /** @class */ (function () {
    function ProductSummaryComponent(translatePipe, translationService) {
        this.translatePipe = translatePipe;
        this.translationService = translationService;
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
        var _this = this;
        // Use translated label for Reviews tab reference
        this.translationService
            .translate('productDetails.reviews')
            .subscribe(function (reviewsTabLabel) {
            /** @type {?} */
            var tabsComponent = _this.getTabsComponent();
            /** @type {?} */
            var reviewsTab = _this.getTabByLabel(reviewsTabLabel, tabsComponent);
            /** @type {?} */
            var reviewsComponent = _this.getReviewsComponent();
            if (reviewsTab && reviewsComponent) {
                reviewsComponent.scrollIntoView();
                _this.clickTabIfInactive(reviewsTab);
            }
        });
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
        { type: TranslatePipe },
        { type: TranslationService }
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
    /**
     * @type {?}
     * @private
     */
    ProductSummaryComponent.prototype.translationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zdW1tYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3Qtc3VtbWFyeS9wcm9kdWN0LXN1bW1hcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxHQUVOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVuRTtJQXVGRSxpQ0FDWSxhQUE0QixFQUM5QixrQkFBc0M7UUFEcEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDOUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQWhGaEQsY0FBUyxHQUFHLENBQUMsQ0FBQztJQWlGWCxDQUFDO0lBNUVKLHNCQUFJLDRDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLHVCQUF1QixDQUFDLE9BQU8sQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTs7Ozs7SUFFRCw2Q0FBVzs7OztJQUFYLFVBQVksS0FBSztRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxzQkFBSSw2Q0FBUTs7OztRQUFaO1lBQ0UsT0FBTyxDQUNMLElBQUksQ0FBQyxPQUFPO2dCQUNaLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSztnQkFDbEIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQztvQkFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEtBQUssU0FBUyxDQUFDLENBQ3JELENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUVELHVEQUF1RDtJQUN2RCxvRUFBb0U7Ozs7Ozs7SUFDNUQscURBQW1COzs7Ozs7O0lBQTNCO1FBQ0UsT0FBTyxRQUFRLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELHVDQUF1Qzs7Ozs7O0lBQy9CLGtEQUFnQjs7Ozs7O0lBQXhCO1FBQ0UsT0FBTyxRQUFRLENBQUMsYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUVELHFDQUFxQzs7Ozs7OztJQUNyQywrQ0FBYTs7Ozs7OztJQUFiLFVBQWMsS0FBYSxFQUFFLGFBQXNCOztRQUNqRCxJQUFJLGFBQWEsRUFBRTs7OztnQkFHWCxVQUFVLEdBRVosYUFBYSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQzs7Z0JBRTVDLDREQUE0RDtnQkFDNUQsS0FBd0IsSUFBQSxLQUFBLGlCQUFBLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUEsZ0JBQUEsNEJBQUU7b0JBQTNDLElBQU0sU0FBUyxXQUFBO29CQUNsQixJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUN2QyxPQUFPLFNBQVMsQ0FBQztxQkFDbEI7aUJBQ0Y7Ozs7Ozs7OztTQUNGO0lBQ0gsQ0FBQztJQUVELDhDQUE4Qzs7Ozs7O0lBQzlDLG9EQUFrQjs7Ozs7O0lBQWxCLFVBQW1CLEdBQWdCO1FBQ2pDLElBQ0UsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDakMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQ2pDO1lBQ0EsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0lBRUQsNERBQTREOzs7OztJQUM1RCw2Q0FBVzs7Ozs7SUFBWDtRQUFBLGlCQWNDO1FBYkMsaURBQWlEO1FBQ2pELElBQUksQ0FBQyxrQkFBa0I7YUFDcEIsU0FBUyxDQUFDLHdCQUF3QixDQUFDO2FBQ25DLFNBQVMsQ0FBQyxVQUFBLGVBQWU7O2dCQUNsQixhQUFhLEdBQUcsS0FBSSxDQUFDLGdCQUFnQixFQUFFOztnQkFDdkMsVUFBVSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQzs7Z0JBQy9ELGdCQUFnQixHQUFHLEtBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUVuRCxJQUFJLFVBQVUsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDbEMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ2xDLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNyQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQU9ELDBDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDMUQsQ0FBQztJQXZGTSwrQkFBTyxHQUFHLG9CQUFvQixDQUFDOztnQkFQdkMsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLDhpRUFBK0M7b0JBQy9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUM7aUJBQzNCOzs7O2dCQVJRLGFBQWE7Z0JBQUUsa0JBQWtCOzs7MEJBZXZDLEtBQUs7O0lBbUZSLDhCQUFDO0NBQUEsQUEvRkQsSUErRkM7U0F6RlksdUJBQXVCOzs7SUFDbEMsZ0NBQXNDOztJQUV0Qyw0Q0FBYzs7SUFDZCxzREFBNkI7O0lBRTdCLDBDQUFzQjs7Ozs7SUE0RXBCLGdEQUFzQzs7Ozs7SUFDdEMscURBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlLCBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdERldGFpbE91dGxldHMgfSBmcm9tICcuLi8uLi9wcm9kdWN0LW91dGxldHMubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LXN1bW1hcnknLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1zdW1tYXJ5LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1RyYW5zbGF0ZVBpcGVdLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0U3VtbWFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHN0YXRpYyBvdXRsZXRzID0gUHJvZHVjdERldGFpbE91dGxldHM7XG5cbiAgaXRlbUNvdW50ID0gMTtcbiAgcmV2aWV3c1RhYkF2YWlsYWJsZTogYm9vbGVhbjtcblxuICBASW5wdXQoKSBwcm9kdWN0OiBhbnk7XG5cbiAgZ2V0IG91dGxldHMoKSB7XG4gICAgcmV0dXJuIFByb2R1Y3RTdW1tYXJ5Q29tcG9uZW50Lm91dGxldHM7XG4gIH1cblxuICB1cGRhdGVDb3VudCh2YWx1ZSkge1xuICAgIHRoaXMuaXRlbUNvdW50ID0gdmFsdWU7XG4gIH1cblxuICBnZXQgaGFzU3RvY2soKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucHJvZHVjdCAmJlxuICAgICAgdGhpcy5wcm9kdWN0LnN0b2NrICYmXG4gICAgICAodGhpcy5wcm9kdWN0LnN0b2NrLnN0b2NrTGV2ZWwgPiAwIHx8XG4gICAgICAgIHRoaXMucHJvZHVjdC5zdG9jay5zdG9ja0xldmVsU3RhdHVzID09PSAnaW5TdG9jaycpXG4gICAgKTtcbiAgfVxuXG4gIC8vIE5PVEU6IERvZXMgbm90IGN1cnJlbnRseSBleGlzdHMgYXMgaXRzIG93biBjb21wb25lbnRcbiAgLy8gYnV0IHBhcnQgb2YgdGFicyBjb21wb25lbnQuIFRoaXMgaXMgbGlrZWx5IHRvIGNoYW5nZSBpbiByZWZhY3Rvci5cbiAgcHJpdmF0ZSBnZXRSZXZpZXdzQ29tcG9uZW50KCk6IEVsZW1lbnQge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjeC1wcm9kdWN0LXJldmlld3MnKTtcbiAgfVxuXG4gIC8vIEdldCBUYWJzIENvbXBvbmVudCBpZiBleGlzdHMgb24gcGFnZVxuICBwcml2YXRlIGdldFRhYnNDb21wb25lbnQoKTogRWxlbWVudCB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2N4LXByb2R1Y3QtdGFicycpO1xuICB9XG5cbiAgLy8gR2V0IFRhYiBieSBsYWJlbCBpZiBleGlzdHMgb24gcGFnZVxuICBnZXRUYWJCeUxhYmVsKGxhYmVsOiBzdHJpbmcsIHRhYnNDb21wb25lbnQ6IEVsZW1lbnQpOiBIVE1MRWxlbWVudCB7XG4gICAgaWYgKHRhYnNDb21wb25lbnQpIHtcbiAgICAgIC8vIE5PVEU6IFJlYWRzIHRocm91Z2ggaDMgdGFncyB0byBjbGljayBvbiBjb3JyZWN0IHRhYlxuICAgICAgLy8gVGhlcmUgbWF5IGJlIGEgYmV0dGVyIHdheSBvZiBkb2luZyB0aGlzIG5vdy9hZnRlciByZWZhY3RvclxuICAgICAgY29uc3QgaDNFbGVtZW50czogSFRNTENvbGxlY3Rpb25PZjxcbiAgICAgICAgSFRNTEVsZW1lbnRcbiAgICAgID4gPSB0YWJzQ29tcG9uZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoMycpO1xuXG4gICAgICAvLyBMb29rIHRocm91Z2ggaDMgdGFiIGVsZW1lbnRzIHVudGlsIGZpbmRpbmcgdGFiIHdpdGggbGFiZWxcbiAgICAgIGZvciAoY29uc3QgaDNFbGVtZW50IG9mIEFycmF5LmZyb20oaDNFbGVtZW50cykpIHtcbiAgICAgICAgaWYgKGgzRWxlbWVudC5pbm5lckhUTUwuaW5jbHVkZXMobGFiZWwpKSB7XG4gICAgICAgICAgcmV0dXJuIGgzRWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENsaWNrIHRvIGFjdGl2YXRlIHRhYiBpZiBub3QgYWxyZWFkeSBhY3RpdmVcbiAgY2xpY2tUYWJJZkluYWN0aXZlKHRhYjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICAhdGFiLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgfHxcbiAgICAgIHRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZ2dsZWQnKVxuICAgICkge1xuICAgICAgdGFiLmNsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gU2Nyb2xsIHRvIHZpZXdzIGNvbXBvbmVudCBvbiBwYWdlIGFuZCBjbGljayBcIlJldmlld3NcIiB0YWJcbiAgc2hvd1Jldmlld3MoKSB7XG4gICAgLy8gVXNlIHRyYW5zbGF0ZWQgbGFiZWwgZm9yIFJldmlld3MgdGFiIHJlZmVyZW5jZVxuICAgIHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlXG4gICAgICAudHJhbnNsYXRlKCdwcm9kdWN0RGV0YWlscy5yZXZpZXdzJylcbiAgICAgIC5zdWJzY3JpYmUocmV2aWV3c1RhYkxhYmVsID0+IHtcbiAgICAgICAgY29uc3QgdGFic0NvbXBvbmVudCA9IHRoaXMuZ2V0VGFic0NvbXBvbmVudCgpO1xuICAgICAgICBjb25zdCByZXZpZXdzVGFiID0gdGhpcy5nZXRUYWJCeUxhYmVsKHJldmlld3NUYWJMYWJlbCwgdGFic0NvbXBvbmVudCk7XG4gICAgICAgIGNvbnN0IHJldmlld3NDb21wb25lbnQgPSB0aGlzLmdldFJldmlld3NDb21wb25lbnQoKTtcblxuICAgICAgICBpZiAocmV2aWV3c1RhYiAmJiByZXZpZXdzQ29tcG9uZW50KSB7XG4gICAgICAgICAgcmV2aWV3c0NvbXBvbmVudC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgIHRoaXMuY2xpY2tUYWJJZkluYWN0aXZlKHJldmlld3NUYWIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGVQaXBlOiBUcmFuc2xhdGVQaXBlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmV2aWV3c1RhYkF2YWlsYWJsZSA9ICEhdGhpcy5nZXRSZXZpZXdzQ29tcG9uZW50KCk7XG4gIH1cbn1cbiJdfQ==