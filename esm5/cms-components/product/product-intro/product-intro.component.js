/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { TranslationService } from '@spartacus/core';
import { BehaviorSubject } from 'rxjs';
import { CurrentProductService } from '../current-product.service';
var ProductIntroComponent = /** @class */ (function () {
    function ProductIntroComponent(currentProductService, translationService) {
        this.currentProductService = currentProductService;
        this.translationService = translationService;
        this.reviewsTabAvailable = new BehaviorSubject(false);
        this.product$ = this.currentProductService.getProduct();
    }
    /**
     * @return {?}
     */
    ProductIntroComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        this.reviewsTabAvailable.next(!!this.getReviewsComponent());
    };
    // Scroll to views component on page and click "Reviews" tab
    // Scroll to views component on page and click "Reviews" tab
    /**
     * @return {?}
     */
    ProductIntroComponent.prototype.showReviews = 
    // Scroll to views component on page and click "Reviews" tab
    /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Use translated label for Reviews tab reference
        this.translationService
            .translate('CMSTabParagraphContainer.tabs.ProductReviewsTabComponent')
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
                setTimeout((/**
                 * @return {?}
                 */
                function () { return reviewsComponent.scrollIntoView({ behavior: 'smooth' }); }), 0);
            }
        }))
            .unsubscribe();
    };
    // NOTE: Does not currently exists as its own component
    // but part of tabs component. This is likely to change in refactor.
    // NOTE: Does not currently exists as its own component
    // but part of tabs component. This is likely to change in refactor.
    /**
     * @private
     * @return {?}
     */
    ProductIntroComponent.prototype.getReviewsComponent = 
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
    ProductIntroComponent.prototype.getTabsComponent = 
    // Get Tabs Component if exists on page
    /**
     * @private
     * @return {?}
     */
    function () {
        return document.querySelector('cx-tab-paragraph-container');
    };
    // Click to activate tab if not already active
    // Click to activate tab if not already active
    /**
     * @private
     * @param {?} tab
     * @return {?}
     */
    ProductIntroComponent.prototype.clickTabIfInactive = 
    // Click to activate tab if not already active
    /**
     * @private
     * @param {?} tab
     * @return {?}
     */
    function (tab) {
        if (!tab.classList.contains('active') ||
            tab.classList.contains('toggled')) {
            tab.click();
        }
    };
    // Get Tab by label if exists on page
    // Get Tab by label if exists on page
    /**
     * @private
     * @param {?} label
     * @param {?} tabsComponent
     * @return {?}
     */
    ProductIntroComponent.prototype.getTabByLabel = 
    // Get Tab by label if exists on page
    /**
     * @private
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
    ProductIntroComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-intro',
                    template: "<ng-container *ngIf=\"(product$ | async) as product\">\n  <div class=\"rating\">\n    <cx-star-rating\n      [rating]=\"product?.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n    <div class=\"count\">({{ product?.numberOfReviews }})</div>\n    <a\n      class=\"btn-link\"\n      *ngIf=\"(reviewsTabAvailable | async)\"\n      (click)=\"showReviews()\"\n      >{{ 'productSummary.showReviews' | cxTranslate }}</a\n    >\n  </div>\n  <div class=\"code\">\n    {{ 'productSummary.id' | cxTranslate }} {{ product?.code }}\n  </div>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ProductIntroComponent.ctorParameters = function () { return [
        { type: CurrentProductService },
        { type: TranslationService }
    ]; };
    return ProductIntroComponent;
}());
export { ProductIntroComponent };
if (false) {
    /** @type {?} */
    ProductIntroComponent.prototype.reviewsTabAvailable;
    /** @type {?} */
    ProductIntroComponent.prototype.product$;
    /**
     * @type {?}
     * @protected
     */
    ProductIntroComponent.prototype.currentProductService;
    /**
     * @type {?}
     * @private
     */
    ProductIntroComponent.prototype.translationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbnRyby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtaW50cm8vcHJvZHVjdC1pbnRyby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQVcsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRW5FO0lBVUUsK0JBQ1kscUJBQTRDLEVBQzlDLGtCQUFzQztRQURwQywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBQzlDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFOaEQsd0JBQW1CLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFFMUQsYUFBUSxHQUF3QixJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxFQUFFLENBQUM7SUFLckUsQ0FBQzs7OztJQUVKLHFEQUFxQjs7O0lBQXJCO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsNERBQTREOzs7OztJQUM1RCwyQ0FBVzs7Ozs7SUFBWDtRQUFBLGlCQWlCQztRQWhCQyxpREFBaUQ7UUFDakQsSUFBSSxDQUFDLGtCQUFrQjthQUNwQixTQUFTLENBQUMsMERBQTBELENBQUM7YUFDckUsU0FBUzs7OztRQUFDLFVBQUEsZUFBZTs7Z0JBQ2xCLGFBQWEsR0FBRyxLQUFJLENBQUMsZ0JBQWdCLEVBQUU7O2dCQUN2QyxVQUFVLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDOztnQkFDL0QsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixFQUFFO1lBQ25ELElBQUksVUFBVSxJQUFJLGdCQUFnQixFQUFFO2dCQUNsQyxLQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3BDLFVBQVU7OztnQkFDUixjQUFNLE9BQUEsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQXZELENBQXVELEdBQzdELENBQUMsQ0FDRixDQUFDO2FBQ0g7UUFDSCxDQUFDLEVBQUM7YUFDRCxXQUFXLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsdURBQXVEO0lBQ3ZELG9FQUFvRTs7Ozs7OztJQUM1RCxtREFBbUI7Ozs7Ozs7SUFBM0I7UUFDRSxPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQsdUNBQXVDOzs7Ozs7SUFDL0IsZ0RBQWdCOzs7Ozs7SUFBeEI7UUFDRSxPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsOENBQThDOzs7Ozs7O0lBQ3RDLGtEQUFrQjs7Ozs7OztJQUExQixVQUEyQixHQUFnQjtRQUN6QyxJQUNFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBQ2pDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUNqQztZQUNBLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVELHFDQUFxQzs7Ozs7Ozs7SUFDN0IsNkNBQWE7Ozs7Ozs7O0lBQXJCLFVBQXNCLEtBQWEsRUFBRSxhQUFzQjs7UUFDekQsSUFBSSxhQUFhLEVBQUU7Ozs7Z0JBR1gsVUFBVSxHQUVaLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7O2dCQUU1Qyw0REFBNEQ7Z0JBQzVELEtBQXdCLElBQUEsS0FBQSxpQkFBQSxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBLGdCQUFBLDRCQUFFO29CQUEzQyxJQUFNLFNBQVMsV0FBQTtvQkFDbEIsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDdkMsT0FBTyxTQUFTLENBQUM7cUJBQ2xCO2lCQUNGOzs7Ozs7Ozs7U0FDRjtJQUNILENBQUM7O2dCQTVFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIscWtCQUE2QztvQkFDN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQU5RLHFCQUFxQjtnQkFGWixrQkFBa0I7O0lBaUZwQyw0QkFBQztDQUFBLEFBN0VELElBNkVDO1NBeEVZLHFCQUFxQjs7O0lBQ2hDLG9EQUEwRDs7SUFFMUQseUNBQXdFOzs7OztJQUd0RSxzREFBc0Q7Ozs7O0lBQ3RELG1EQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudENoZWNrZWQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdCwgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vY3VycmVudC1wcm9kdWN0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LWludHJvJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtaW50cm8uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdEludHJvQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gIHJldmlld3NUYWJBdmFpbGFibGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcblxuICBwcm9kdWN0JDogT2JzZXJ2YWJsZTxQcm9kdWN0PiA9IHRoaXMuY3VycmVudFByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3QoKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY3VycmVudFByb2R1Y3RTZXJ2aWNlOiBDdXJyZW50UHJvZHVjdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvblNlcnZpY2U6IFRyYW5zbGF0aW9uU2VydmljZVxuICApIHt9XG5cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCkge1xuICAgIHRoaXMucmV2aWV3c1RhYkF2YWlsYWJsZS5uZXh0KCEhdGhpcy5nZXRSZXZpZXdzQ29tcG9uZW50KCkpO1xuICB9XG5cbiAgLy8gU2Nyb2xsIHRvIHZpZXdzIGNvbXBvbmVudCBvbiBwYWdlIGFuZCBjbGljayBcIlJldmlld3NcIiB0YWJcbiAgc2hvd1Jldmlld3MoKSB7XG4gICAgLy8gVXNlIHRyYW5zbGF0ZWQgbGFiZWwgZm9yIFJldmlld3MgdGFiIHJlZmVyZW5jZVxuICAgIHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlXG4gICAgICAudHJhbnNsYXRlKCdDTVNUYWJQYXJhZ3JhcGhDb250YWluZXIudGFicy5Qcm9kdWN0UmV2aWV3c1RhYkNvbXBvbmVudCcpXG4gICAgICAuc3Vic2NyaWJlKHJldmlld3NUYWJMYWJlbCA9PiB7XG4gICAgICAgIGNvbnN0IHRhYnNDb21wb25lbnQgPSB0aGlzLmdldFRhYnNDb21wb25lbnQoKTtcbiAgICAgICAgY29uc3QgcmV2aWV3c1RhYiA9IHRoaXMuZ2V0VGFiQnlMYWJlbChyZXZpZXdzVGFiTGFiZWwsIHRhYnNDb21wb25lbnQpO1xuICAgICAgICBjb25zdCByZXZpZXdzQ29tcG9uZW50ID0gdGhpcy5nZXRSZXZpZXdzQ29tcG9uZW50KCk7XG4gICAgICAgIGlmIChyZXZpZXdzVGFiICYmIHJldmlld3NDb21wb25lbnQpIHtcbiAgICAgICAgICB0aGlzLmNsaWNrVGFiSWZJbmFjdGl2ZShyZXZpZXdzVGFiKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgKCkgPT4gcmV2aWV3c0NvbXBvbmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvLyBOT1RFOiBEb2VzIG5vdCBjdXJyZW50bHkgZXhpc3RzIGFzIGl0cyBvd24gY29tcG9uZW50XG4gIC8vIGJ1dCBwYXJ0IG9mIHRhYnMgY29tcG9uZW50LiBUaGlzIGlzIGxpa2VseSB0byBjaGFuZ2UgaW4gcmVmYWN0b3IuXG4gIHByaXZhdGUgZ2V0UmV2aWV3c0NvbXBvbmVudCgpOiBFbGVtZW50IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY3gtcHJvZHVjdC1yZXZpZXdzJyk7XG4gIH1cblxuICAvLyBHZXQgVGFicyBDb21wb25lbnQgaWYgZXhpc3RzIG9uIHBhZ2VcbiAgcHJpdmF0ZSBnZXRUYWJzQ29tcG9uZW50KCk6IEVsZW1lbnQge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjeC10YWItcGFyYWdyYXBoLWNvbnRhaW5lcicpO1xuICB9XG5cbiAgLy8gQ2xpY2sgdG8gYWN0aXZhdGUgdGFiIGlmIG5vdCBhbHJlYWR5IGFjdGl2ZVxuICBwcml2YXRlIGNsaWNrVGFiSWZJbmFjdGl2ZSh0YWI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgIXRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpIHx8XG4gICAgICB0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2dnbGVkJylcbiAgICApIHtcbiAgICAgIHRhYi5jbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEdldCBUYWIgYnkgbGFiZWwgaWYgZXhpc3RzIG9uIHBhZ2VcbiAgcHJpdmF0ZSBnZXRUYWJCeUxhYmVsKGxhYmVsOiBzdHJpbmcsIHRhYnNDb21wb25lbnQ6IEVsZW1lbnQpOiBIVE1MRWxlbWVudCB7XG4gICAgaWYgKHRhYnNDb21wb25lbnQpIHtcbiAgICAgIC8vIE5PVEU6IFJlYWRzIHRocm91Z2ggaDMgdGFncyB0byBjbGljayBvbiBjb3JyZWN0IHRhYlxuICAgICAgLy8gVGhlcmUgbWF5IGJlIGEgYmV0dGVyIHdheSBvZiBkb2luZyB0aGlzIG5vdy9hZnRlciByZWZhY3RvclxuICAgICAgY29uc3QgaDNFbGVtZW50czogSFRNTENvbGxlY3Rpb25PZjxcbiAgICAgICAgSFRNTEVsZW1lbnRcbiAgICAgID4gPSB0YWJzQ29tcG9uZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoMycpO1xuXG4gICAgICAvLyBMb29rIHRocm91Z2ggaDMgdGFiIGVsZW1lbnRzIHVudGlsIGZpbmRpbmcgdGFiIHdpdGggbGFiZWxcbiAgICAgIGZvciAoY29uc3QgaDNFbGVtZW50IG9mIEFycmF5LmZyb20oaDNFbGVtZW50cykpIHtcbiAgICAgICAgaWYgKGgzRWxlbWVudC5pbm5lckhUTUwuaW5jbHVkZXMobGFiZWwpKSB7XG4gICAgICAgICAgcmV0dXJuIGgzRWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19