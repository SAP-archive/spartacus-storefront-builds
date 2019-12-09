/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { TranslationService, WindowRef } from '@spartacus/core';
import { BehaviorSubject } from 'rxjs';
import { CurrentProductService } from '../current-product.service';
var ProductIntroComponent = /** @class */ (function () {
    function ProductIntroComponent(currentProductService, translationService, winRef) {
        this.currentProductService = currentProductService;
        this.translationService = translationService;
        this.winRef = winRef;
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
        return this.winRef.document.querySelector('cx-product-reviews');
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
        return this.winRef.document.querySelector('cx-tab-paragraph-container');
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
                    template: "<ng-container *ngIf=\"product$ | async as product\">\n  <div class=\"rating\" *ngIf=\"product.averageRating\">\n    <cx-star-rating\n      [rating]=\"product?.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n    <div class=\"count\">({{ product?.numberOfReviews }})</div>\n    <a\n      class=\"btn-link\"\n      *ngIf=\"reviewsTabAvailable | async\"\n      (click)=\"showReviews()\"\n      >{{ 'productSummary.showReviews' | cxTranslate }}</a\n    >\n  </div>\n  <div class=\"rating\" *ngIf=\"!product.averageRating\">\n    {{ 'productDetails.noReviews' | cxTranslate }}\n  </div>\n  <div class=\"code\">\n    {{ 'productSummary.id' | cxTranslate }} {{ product?.code }}\n  </div>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ProductIntroComponent.ctorParameters = function () { return [
        { type: CurrentProductService },
        { type: TranslationService },
        { type: WindowRef }
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
    /**
     * @type {?}
     * @protected
     */
    ProductIntroComponent.prototype.winRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbnRyby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtaW50cm8vcHJvZHVjdC1pbnRyby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQVcsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVuRTtJQVVFLCtCQUNZLHFCQUE0QyxFQUM5QyxrQkFBc0MsRUFDcEMsTUFBaUI7UUFGakIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM5Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3BDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFQN0Isd0JBQW1CLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFFMUQsYUFBUSxHQUF3QixJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxFQUFFLENBQUM7SUFNckUsQ0FBQzs7OztJQUVKLHFEQUFxQjs7O0lBQXJCO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRUQsNERBQTREOzs7OztJQUM1RCwyQ0FBVzs7Ozs7SUFBWDtRQUFBLGlCQWlCQztRQWhCQyxpREFBaUQ7UUFDakQsSUFBSSxDQUFDLGtCQUFrQjthQUNwQixTQUFTLENBQUMsMERBQTBELENBQUM7YUFDckUsU0FBUzs7OztRQUFDLFVBQUEsZUFBZTs7Z0JBQ2xCLGFBQWEsR0FBRyxLQUFJLENBQUMsZ0JBQWdCLEVBQUU7O2dCQUN2QyxVQUFVLEdBQUcsS0FBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDOztnQkFDL0QsZ0JBQWdCLEdBQUcsS0FBSSxDQUFDLG1CQUFtQixFQUFFO1lBQ25ELElBQUksVUFBVSxJQUFJLGdCQUFnQixFQUFFO2dCQUNsQyxLQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3BDLFVBQVU7OztnQkFDUixjQUFNLE9BQUEsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQXZELENBQXVELEdBQzdELENBQUMsQ0FDRixDQUFDO2FBQ0g7UUFDSCxDQUFDLEVBQUM7YUFDRCxXQUFXLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsdURBQXVEO0lBQ3ZELG9FQUFvRTs7Ozs7OztJQUM1RCxtREFBbUI7Ozs7Ozs7SUFBM0I7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCx1Q0FBdUM7Ozs7OztJQUMvQixnREFBZ0I7Ozs7OztJQUF4QjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELDhDQUE4Qzs7Ozs7OztJQUN0QyxrREFBa0I7Ozs7Ozs7SUFBMUIsVUFBMkIsR0FBZ0I7UUFDekMsSUFDRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUNqQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFDakM7WUFDQSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7SUFFRCxxQ0FBcUM7Ozs7Ozs7O0lBQzdCLDZDQUFhOzs7Ozs7OztJQUFyQixVQUFzQixLQUFhLEVBQUUsYUFBc0I7O1FBQ3pELElBQUksYUFBYSxFQUFFOzs7O2dCQUdYLFVBQVUsR0FFWixhQUFhLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDOztnQkFFNUMsNERBQTREO2dCQUM1RCxLQUF3QixJQUFBLEtBQUEsaUJBQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtvQkFBM0MsSUFBTSxTQUFTLFdBQUE7b0JBQ2xCLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ3ZDLE9BQU8sU0FBUyxDQUFDO3FCQUNsQjtpQkFDRjs7Ozs7Ozs7O1NBQ0Y7SUFDSCxDQUFDOztnQkE3RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLDB0QkFBNkM7b0JBQzdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFOUSxxQkFBcUI7Z0JBRlosa0JBQWtCO2dCQUFFLFNBQVM7O0lBa0YvQyw0QkFBQztDQUFBLEFBOUVELElBOEVDO1NBekVZLHFCQUFxQjs7O0lBQ2hDLG9EQUEwRDs7SUFFMUQseUNBQXdFOzs7OztJQUd0RSxzREFBc0Q7Ozs7O0lBQ3RELG1EQUE4Qzs7Ozs7SUFDOUMsdUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0LCBUcmFuc2xhdGlvblNlcnZpY2UsIFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1pbnRybycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWludHJvLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RJbnRyb0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuICByZXZpZXdzVGFiQXZhaWxhYmxlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG5cbiAgcHJvZHVjdCQ6IE9ic2VydmFibGU8UHJvZHVjdD4gPSB0aGlzLmN1cnJlbnRQcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmXG4gICkge31cblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgdGhpcy5yZXZpZXdzVGFiQXZhaWxhYmxlLm5leHQoISF0aGlzLmdldFJldmlld3NDb21wb25lbnQoKSk7XG4gIH1cblxuICAvLyBTY3JvbGwgdG8gdmlld3MgY29tcG9uZW50IG9uIHBhZ2UgYW5kIGNsaWNrIFwiUmV2aWV3c1wiIHRhYlxuICBzaG93UmV2aWV3cygpIHtcbiAgICAvLyBVc2UgdHJhbnNsYXRlZCBsYWJlbCBmb3IgUmV2aWV3cyB0YWIgcmVmZXJlbmNlXG4gICAgdGhpcy50cmFuc2xhdGlvblNlcnZpY2VcbiAgICAgIC50cmFuc2xhdGUoJ0NNU1RhYlBhcmFncmFwaENvbnRhaW5lci50YWJzLlByb2R1Y3RSZXZpZXdzVGFiQ29tcG9uZW50JylcbiAgICAgIC5zdWJzY3JpYmUocmV2aWV3c1RhYkxhYmVsID0+IHtcbiAgICAgICAgY29uc3QgdGFic0NvbXBvbmVudCA9IHRoaXMuZ2V0VGFic0NvbXBvbmVudCgpO1xuICAgICAgICBjb25zdCByZXZpZXdzVGFiID0gdGhpcy5nZXRUYWJCeUxhYmVsKHJldmlld3NUYWJMYWJlbCwgdGFic0NvbXBvbmVudCk7XG4gICAgICAgIGNvbnN0IHJldmlld3NDb21wb25lbnQgPSB0aGlzLmdldFJldmlld3NDb21wb25lbnQoKTtcbiAgICAgICAgaWYgKHJldmlld3NUYWIgJiYgcmV2aWV3c0NvbXBvbmVudCkge1xuICAgICAgICAgIHRoaXMuY2xpY2tUYWJJZkluYWN0aXZlKHJldmlld3NUYWIpO1xuICAgICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgICAoKSA9PiByZXZpZXdzQ29tcG9uZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pLFxuICAgICAgICAgICAgMFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8vIE5PVEU6IERvZXMgbm90IGN1cnJlbnRseSBleGlzdHMgYXMgaXRzIG93biBjb21wb25lbnRcbiAgLy8gYnV0IHBhcnQgb2YgdGFicyBjb21wb25lbnQuIFRoaXMgaXMgbGlrZWx5IHRvIGNoYW5nZSBpbiByZWZhY3Rvci5cbiAgcHJpdmF0ZSBnZXRSZXZpZXdzQ29tcG9uZW50KCk6IEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLndpblJlZi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjeC1wcm9kdWN0LXJldmlld3MnKTtcbiAgfVxuXG4gIC8vIEdldCBUYWJzIENvbXBvbmVudCBpZiBleGlzdHMgb24gcGFnZVxuICBwcml2YXRlIGdldFRhYnNDb21wb25lbnQoKTogRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMud2luUmVmLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2N4LXRhYi1wYXJhZ3JhcGgtY29udGFpbmVyJyk7XG4gIH1cblxuICAvLyBDbGljayB0byBhY3RpdmF0ZSB0YWIgaWYgbm90IGFscmVhZHkgYWN0aXZlXG4gIHByaXZhdGUgY2xpY2tUYWJJZkluYWN0aXZlKHRhYjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICAhdGFiLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgfHxcbiAgICAgIHRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZ2dsZWQnKVxuICAgICkge1xuICAgICAgdGFiLmNsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gR2V0IFRhYiBieSBsYWJlbCBpZiBleGlzdHMgb24gcGFnZVxuICBwcml2YXRlIGdldFRhYkJ5TGFiZWwobGFiZWw6IHN0cmluZywgdGFic0NvbXBvbmVudDogRWxlbWVudCk6IEhUTUxFbGVtZW50IHtcbiAgICBpZiAodGFic0NvbXBvbmVudCkge1xuICAgICAgLy8gTk9URTogUmVhZHMgdGhyb3VnaCBoMyB0YWdzIHRvIGNsaWNrIG9uIGNvcnJlY3QgdGFiXG4gICAgICAvLyBUaGVyZSBtYXkgYmUgYSBiZXR0ZXIgd2F5IG9mIGRvaW5nIHRoaXMgbm93L2FmdGVyIHJlZmFjdG9yXG4gICAgICBjb25zdCBoM0VsZW1lbnRzOiBIVE1MQ29sbGVjdGlvbk9mPFxuICAgICAgICBIVE1MRWxlbWVudFxuICAgICAgPiA9IHRhYnNDb21wb25lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2gzJyk7XG5cbiAgICAgIC8vIExvb2sgdGhyb3VnaCBoMyB0YWIgZWxlbWVudHMgdW50aWwgZmluZGluZyB0YWIgd2l0aCBsYWJlbFxuICAgICAgZm9yIChjb25zdCBoM0VsZW1lbnQgb2YgQXJyYXkuZnJvbShoM0VsZW1lbnRzKSkge1xuICAgICAgICBpZiAoaDNFbGVtZW50LmlubmVySFRNTC5pbmNsdWRlcyhsYWJlbCkpIHtcbiAgICAgICAgICByZXR1cm4gaDNFbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=