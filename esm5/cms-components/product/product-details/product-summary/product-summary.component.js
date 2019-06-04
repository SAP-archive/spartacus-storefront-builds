/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return document.querySelector('cx-tab-paragraph-container');
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
            .subscribe((/**
         * @param {?} reviewsTabLabel
         * @return {?}
         */
        function (reviewsTabLabel) {
            /** @type {?} */
            var tabsComponent = _this.getTabsComponent();
            /** @type {?} */
            var reviewsTab = _this.getTabByLabel(reviewsTabLabel, tabsComponent);
            /** @type {?} */
            var reviewsComponent = _this.getReviewsComponent();
            if (reviewsTab && reviewsComponent) {
                _this.clickTabIfInactive(reviewsTab);
                reviewsComponent.scrollIntoView();
            }
        }));
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
                    template: "<ng-container *cxOutlet=\"outlets.RATING\">\n  <div class=\"rating\">\n    <cx-star-rating\n      [rating]=\"product?.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n    <div class=\"count\">({{ product?.numberOfReviews }})</div>\n    <a class=\"btn-link\" *ngIf=\"reviewsTabAvailable\" (click)=\"showReviews()\">{{\n      'productSummary.showReviews' | cxTranslate\n    }}</a>\n  </div>\n</ng-container>\n<ng-container *cxOutlet=\"outlets.TITLE\">\n  <!-- <div class=\"name\">{{ product?.name }}</div> -->\n  <div class=\"code\">\n    {{ 'productSummary.id' | cxTranslate }} {{ product?.code }}\n  </div>\n</ng-container>\n\n<ng-container *cxOutlet=\"outlets.PRICE\">\n  <div class=\"price\" aria-label=\"new item price\">\n    {{ product?.price?.formattedValue }}\n  </div>\n</ng-container>\n\n<ng-container *cxOutlet=\"outlets.DESCRIPTION\">\n  <div class=\"description\"><p [innerHTML]=\"product?.summary\"></p></div>\n</ng-container>\n\n<cx-page-slot position=\"AddToCart\"></cx-page-slot>\n\n<!-- @TODO: Temp. Comment out share link while not in use by CMS -->\n<!-- <ng-container *cxOutlet=\"outlets.SHARE\">\n  <div>\n    <a href=\"#\" class=\"share btn-link\">\n      {{ 'productSummary.share' | cxTranslate }}\n    </a>\n  </div>\n</ng-container> -->\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zdW1tYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3Qtc3VtbWFyeS9wcm9kdWN0LXN1bW1hcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxHQUVOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVuRTtJQStFRSxpQ0FDWSxhQUE0QixFQUM5QixrQkFBc0M7UUFEcEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDOUIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQXhFaEQsY0FBUyxHQUFHLENBQUMsQ0FBQztJQXlFWCxDQUFDO0lBcEVKLHNCQUFJLDRDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLHVCQUF1QixDQUFDLE9BQU8sQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTs7Ozs7SUFFRCw2Q0FBVzs7OztJQUFYLFVBQVksS0FBSztRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFRCx1REFBdUQ7SUFDdkQsb0VBQW9FOzs7Ozs7O0lBQzVELHFEQUFtQjs7Ozs7OztJQUEzQjtRQUNFLE9BQU8sUUFBUSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCx1Q0FBdUM7Ozs7OztJQUMvQixrREFBZ0I7Ozs7OztJQUF4QjtRQUNFLE9BQU8sUUFBUSxDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxxQ0FBcUM7Ozs7Ozs7SUFDckMsK0NBQWE7Ozs7Ozs7SUFBYixVQUFjLEtBQWEsRUFBRSxhQUFzQjs7UUFDakQsSUFBSSxhQUFhLEVBQUU7Ozs7Z0JBR1gsVUFBVSxHQUVaLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7O2dCQUU1Qyw0REFBNEQ7Z0JBQzVELEtBQXdCLElBQUEsS0FBQSxpQkFBQSxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBLGdCQUFBLDRCQUFFO29CQUEzQyxJQUFNLFNBQVMsV0FBQTtvQkFDbEIsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDdkMsT0FBTyxTQUFTLENBQUM7cUJBQ2xCO2lCQUNGOzs7Ozs7Ozs7U0FDRjtJQUNILENBQUM7SUFFRCw4Q0FBOEM7Ozs7OztJQUM5QyxvREFBa0I7Ozs7OztJQUFsQixVQUFtQixHQUFnQjtRQUNqQyxJQUNFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBQ2pDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUNqQztZQUNBLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVELDREQUE0RDs7Ozs7SUFDNUQsNkNBQVc7Ozs7O0lBQVg7UUFBQSxpQkFlQztRQWRDLGlEQUFpRDtRQUNqRCxJQUFJLENBQUMsa0JBQWtCO2FBQ3BCLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQzthQUNuQyxTQUFTOzs7O1FBQUMsVUFBQSxlQUFlOztnQkFDbEIsYUFBYSxHQUFHLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRTs7Z0JBQ3ZDLFVBQVUsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUM7O2dCQUUvRCxnQkFBZ0IsR0FBRyxLQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFFbkQsSUFBSSxVQUFVLElBQUksZ0JBQWdCLEVBQUU7Z0JBQ2xDLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDcEMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDbkM7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7SUFPRCwwQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzFELENBQUM7SUEvRU0sK0JBQU8sR0FBRyxvQkFBb0IsQ0FBQzs7Z0JBUHZDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5Qiw4d0NBQStDO29CQUMvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDO2lCQUMzQjs7OztnQkFSUSxhQUFhO2dCQUFFLGtCQUFrQjs7OzBCQWV2QyxLQUFLOztJQTJFUiw4QkFBQztDQUFBLEFBdkZELElBdUZDO1NBakZZLHVCQUF1Qjs7O0lBQ2xDLGdDQUFzQzs7SUFFdEMsNENBQWM7O0lBQ2Qsc0RBQTZCOztJQUU3QiwwQ0FBc0I7Ozs7O0lBb0VwQixnREFBc0M7Ozs7O0lBQ3RDLHFEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVHJhbnNsYXRlUGlwZSwgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3REZXRhaWxPdXRsZXRzIH0gZnJvbSAnLi4vLi4vcHJvZHVjdC1vdXRsZXRzLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1zdW1tYXJ5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3Qtc3VtbWFyeS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtUcmFuc2xhdGVQaXBlXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFN1bW1hcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBzdGF0aWMgb3V0bGV0cyA9IFByb2R1Y3REZXRhaWxPdXRsZXRzO1xuXG4gIGl0ZW1Db3VudCA9IDE7XG4gIHJldmlld3NUYWJBdmFpbGFibGU6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgcHJvZHVjdDogYW55O1xuXG4gIGdldCBvdXRsZXRzKCkge1xuICAgIHJldHVybiBQcm9kdWN0U3VtbWFyeUNvbXBvbmVudC5vdXRsZXRzO1xuICB9XG5cbiAgdXBkYXRlQ291bnQodmFsdWUpIHtcbiAgICB0aGlzLml0ZW1Db3VudCA9IHZhbHVlO1xuICB9XG5cbiAgLy8gTk9URTogRG9lcyBub3QgY3VycmVudGx5IGV4aXN0cyBhcyBpdHMgb3duIGNvbXBvbmVudFxuICAvLyBidXQgcGFydCBvZiB0YWJzIGNvbXBvbmVudC4gVGhpcyBpcyBsaWtlbHkgdG8gY2hhbmdlIGluIHJlZmFjdG9yLlxuICBwcml2YXRlIGdldFJldmlld3NDb21wb25lbnQoKTogRWxlbWVudCB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2N4LXByb2R1Y3QtcmV2aWV3cycpO1xuICB9XG5cbiAgLy8gR2V0IFRhYnMgQ29tcG9uZW50IGlmIGV4aXN0cyBvbiBwYWdlXG4gIHByaXZhdGUgZ2V0VGFic0NvbXBvbmVudCgpOiBFbGVtZW50IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY3gtdGFiLXBhcmFncmFwaC1jb250YWluZXInKTtcbiAgfVxuXG4gIC8vIEdldCBUYWIgYnkgbGFiZWwgaWYgZXhpc3RzIG9uIHBhZ2VcbiAgZ2V0VGFiQnlMYWJlbChsYWJlbDogc3RyaW5nLCB0YWJzQ29tcG9uZW50OiBFbGVtZW50KTogSFRNTEVsZW1lbnQge1xuICAgIGlmICh0YWJzQ29tcG9uZW50KSB7XG4gICAgICAvLyBOT1RFOiBSZWFkcyB0aHJvdWdoIGgzIHRhZ3MgdG8gY2xpY2sgb24gY29ycmVjdCB0YWJcbiAgICAgIC8vIFRoZXJlIG1heSBiZSBhIGJldHRlciB3YXkgb2YgZG9pbmcgdGhpcyBub3cvYWZ0ZXIgcmVmYWN0b3JcbiAgICAgIGNvbnN0IGgzRWxlbWVudHM6IEhUTUxDb2xsZWN0aW9uT2Y8XG4gICAgICAgIEhUTUxFbGVtZW50XG4gICAgICA+ID0gdGFic0NvbXBvbmVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaDMnKTtcblxuICAgICAgLy8gTG9vayB0aHJvdWdoIGgzIHRhYiBlbGVtZW50cyB1bnRpbCBmaW5kaW5nIHRhYiB3aXRoIGxhYmVsXG4gICAgICBmb3IgKGNvbnN0IGgzRWxlbWVudCBvZiBBcnJheS5mcm9tKGgzRWxlbWVudHMpKSB7XG4gICAgICAgIGlmIChoM0VsZW1lbnQuaW5uZXJIVE1MLmluY2x1ZGVzKGxhYmVsKSkge1xuICAgICAgICAgIHJldHVybiBoM0VsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBDbGljayB0byBhY3RpdmF0ZSB0YWIgaWYgbm90IGFscmVhZHkgYWN0aXZlXG4gIGNsaWNrVGFiSWZJbmFjdGl2ZSh0YWI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgIXRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpIHx8XG4gICAgICB0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2dnbGVkJylcbiAgICApIHtcbiAgICAgIHRhYi5jbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNjcm9sbCB0byB2aWV3cyBjb21wb25lbnQgb24gcGFnZSBhbmQgY2xpY2sgXCJSZXZpZXdzXCIgdGFiXG4gIHNob3dSZXZpZXdzKCkge1xuICAgIC8vIFVzZSB0cmFuc2xhdGVkIGxhYmVsIGZvciBSZXZpZXdzIHRhYiByZWZlcmVuY2VcbiAgICB0aGlzLnRyYW5zbGF0aW9uU2VydmljZVxuICAgICAgLnRyYW5zbGF0ZSgncHJvZHVjdERldGFpbHMucmV2aWV3cycpXG4gICAgICAuc3Vic2NyaWJlKHJldmlld3NUYWJMYWJlbCA9PiB7XG4gICAgICAgIGNvbnN0IHRhYnNDb21wb25lbnQgPSB0aGlzLmdldFRhYnNDb21wb25lbnQoKTtcbiAgICAgICAgY29uc3QgcmV2aWV3c1RhYiA9IHRoaXMuZ2V0VGFiQnlMYWJlbChyZXZpZXdzVGFiTGFiZWwsIHRhYnNDb21wb25lbnQpO1xuXG4gICAgICAgIGNvbnN0IHJldmlld3NDb21wb25lbnQgPSB0aGlzLmdldFJldmlld3NDb21wb25lbnQoKTtcblxuICAgICAgICBpZiAocmV2aWV3c1RhYiAmJiByZXZpZXdzQ29tcG9uZW50KSB7XG4gICAgICAgICAgdGhpcy5jbGlja1RhYklmSW5hY3RpdmUocmV2aWV3c1RhYik7XG4gICAgICAgICAgcmV2aWV3c0NvbXBvbmVudC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGVQaXBlOiBUcmFuc2xhdGVQaXBlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucmV2aWV3c1RhYkF2YWlsYWJsZSA9ICEhdGhpcy5nZXRSZXZpZXdzQ29tcG9uZW50KCk7XG4gIH1cbn1cbiJdfQ==