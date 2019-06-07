/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TranslationService } from '@spartacus/core';
import { ProductDetailOutlets } from '../../product-outlets.model';
export class ProductSummaryComponent {
    /**
     * @param {?} translationService
     */
    constructor(translationService) {
        this.translationService = translationService;
        this.itemCount = 1;
        this.reviewsTabAvailable = new BehaviorSubject(false);
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
    // NOTE: Does not currently exists as its own component
    // but part of tabs component. This is likely to change in refactor.
    /**
     * @private
     * @return {?}
     */
    getReviewsComponent() {
        return document.querySelector('cx-product-reviews');
    }
    // Get Tabs Component if exists on page
    /**
     * @private
     * @return {?}
     */
    getTabsComponent() {
        return document.querySelector('cx-tab-paragraph-container');
    }
    // Get Tab by label if exists on page
    /**
     * @param {?} label
     * @param {?} tabsComponent
     * @return {?}
     */
    getTabByLabel(label, tabsComponent) {
        if (tabsComponent) {
            // NOTE: Reads through h3 tags to click on correct tab
            // There may be a better way of doing this now/after refactor
            /** @type {?} */
            const h3Elements = tabsComponent.getElementsByTagName('h3');
            // Look through h3 tab elements until finding tab with label
            for (const h3Element of Array.from(h3Elements)) {
                if (h3Element.innerHTML.includes(label)) {
                    return h3Element;
                }
            }
        }
    }
    // Click to activate tab if not already active
    /**
     * @param {?} tab
     * @return {?}
     */
    clickTabIfInactive(tab) {
        if (!tab.classList.contains('active') ||
            tab.classList.contains('toggled')) {
            tab.click();
        }
    }
    // Scroll to views component on page and click "Reviews" tab
    /**
     * @return {?}
     */
    showReviews() {
        // Use translated label for Reviews tab reference
        this.translationService
            .translate('CMSTabParagraphContainer.tabs.ProductReviewsTabComponent')
            .subscribe((/**
         * @param {?} reviewsTabLabel
         * @return {?}
         */
        reviewsTabLabel => {
            /** @type {?} */
            const tabsComponent = this.getTabsComponent();
            /** @type {?} */
            const reviewsTab = this.getTabByLabel(reviewsTabLabel, tabsComponent);
            /** @type {?} */
            const reviewsComponent = this.getReviewsComponent();
            if (reviewsTab && reviewsComponent) {
                this.clickTabIfInactive(reviewsTab);
                setTimeout((/**
                 * @return {?}
                 */
                () => reviewsComponent.scrollIntoView({ behavior: 'smooth' })), 0);
            }
        }))
            .unsubscribe();
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.reviewsTabAvailable.next(!!this.getReviewsComponent());
    }
}
ProductSummaryComponent.outlets = ProductDetailOutlets;
ProductSummaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-summary',
                template: "<ng-template\n  [cxOutlet]=\"outlets.RATING\"\n  [cxOutletContext]=\"{ product: product }\"\n>\n  <div class=\"rating\">\n    <cx-star-rating\n      [rating]=\"product?.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n    <div class=\"count\">({{ product?.numberOfReviews }})</div>\n    <a\n      class=\"btn-link\"\n      *ngIf=\"(reviewsTabAvailable | async)\"\n      (click)=\"showReviews()\"\n      >{{ 'productSummary.showReviews' | cxTranslate }}</a\n    >\n  </div>\n</ng-template>\n<ng-template\n  [cxOutlet]=\"outlets.TITLE\"\n  [cxOutletContext]=\"{ product: product }\"\n>\n  <!-- <div class=\"name\">{{ product?.name }}</div> -->\n  <div class=\"code\">\n    {{ 'productSummary.id' | cxTranslate }} {{ product?.code }}\n  </div>\n</ng-template>\n\n<ng-template\n  [cxOutlet]=\"outlets.PRICE\"\n  [cxOutletContext]=\"{ product: product }\"\n>\n  <div class=\"price\" aria-label=\"new item price\">\n    {{ product?.price?.formattedValue }}\n  </div>\n</ng-template>\n\n<ng-template\n  [cxOutlet]=\"outlets.DESCRIPTION\"\n  [cxOutletContext]=\"{ product: product }\"\n>\n  <div class=\"description\"><p [innerHTML]=\"product?.summary\"></p></div>\n</ng-template>\n\n<cx-page-slot position=\"AddToCart\"></cx-page-slot>\n\n<!-- @TODO: Temp. Comment out share link while not in use by CMS -->\n<!-- <ng-template [cxOutlet]=\"outlets.SHARE\" [cxOutletContext]=\"{ product: product }\">\n  <div>\n    <a href=\"#\" class=\"share btn-link\">\n      {{ 'productSummary.share' | cxTranslate }}\n    </a>\n  </div>\n</ng-template> -->\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ProductSummaryComponent.ctorParameters = () => [
    { type: TranslationService }
];
ProductSummaryComponent.propDecorators = {
    product: [{ type: Input }]
};
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
     * @private
     */
    ProductSummaryComponent.prototype.translationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zdW1tYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3Qtc3VtbWFyeS9wcm9kdWN0LXN1bW1hcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEdBQ04sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV2QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQU9uRSxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBMkVsQyxZQUFvQixrQkFBc0M7UUFBdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQXhFMUQsY0FBUyxHQUFHLENBQUMsQ0FBQztRQUNkLHdCQUFtQixHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO0lBdUVHLENBQUM7Ozs7SUFuRTlELElBQUksT0FBTztRQUNULE9BQU8sdUJBQXVCLENBQUMsT0FBTyxDQUFDO0lBQ3pDLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEtBQUs7UUFDZixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN6QixDQUFDOzs7Ozs7O0lBSU8sbUJBQW1CO1FBQ3pCLE9BQU8sUUFBUSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7OztJQUdPLGdCQUFnQjtRQUN0QixPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7O0lBR0QsYUFBYSxDQUFDLEtBQWEsRUFBRSxhQUFzQjtRQUNqRCxJQUFJLGFBQWEsRUFBRTs7OztrQkFHWCxVQUFVLEdBRVosYUFBYSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQztZQUU1Qyw0REFBNEQ7WUFDNUQsS0FBSyxNQUFNLFNBQVMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUM5QyxJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUN2QyxPQUFPLFNBQVMsQ0FBQztpQkFDbEI7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7O0lBR0Qsa0JBQWtCLENBQUMsR0FBZ0I7UUFDakMsSUFDRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUNqQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFDakM7WUFDQSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7Ozs7O0lBR0QsV0FBVztRQUNULGlEQUFpRDtRQUNqRCxJQUFJLENBQUMsa0JBQWtCO2FBQ3BCLFNBQVMsQ0FBQywwREFBMEQsQ0FBQzthQUNyRSxTQUFTOzs7O1FBQUMsZUFBZSxDQUFDLEVBQUU7O2tCQUNyQixhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFOztrQkFDdkMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQzs7a0JBQy9ELGdCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUNuRCxJQUFJLFVBQVUsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNwQyxVQUFVOzs7Z0JBQ1IsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLEdBQzdELENBQUMsQ0FDRixDQUFDO2FBQ0g7UUFDSCxDQUFDLEVBQUM7YUFDRCxXQUFXLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7O0lBSUQscUJBQXFCO1FBQ25CLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7QUE5RU0sK0JBQU8sR0FBRyxvQkFBb0IsQ0FBQzs7WUFOdkMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLGlpREFBK0M7Z0JBQy9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBUFEsa0JBQWtCOzs7c0JBY3hCLEtBQUs7Ozs7SUFMTixnQ0FBc0M7O0lBRXRDLDRDQUFjOztJQUNkLHNEQUEwRDs7SUFFMUQsMENBQXNCOzs7OztJQXFFVixxREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3REZXRhaWxPdXRsZXRzIH0gZnJvbSAnLi4vLi4vcHJvZHVjdC1vdXRsZXRzLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1zdW1tYXJ5JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3Qtc3VtbWFyeS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0U3VtbWFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuICBzdGF0aWMgb3V0bGV0cyA9IFByb2R1Y3REZXRhaWxPdXRsZXRzO1xuXG4gIGl0ZW1Db3VudCA9IDE7XG4gIHJldmlld3NUYWJBdmFpbGFibGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcblxuICBASW5wdXQoKSBwcm9kdWN0OiBhbnk7XG5cbiAgZ2V0IG91dGxldHMoKSB7XG4gICAgcmV0dXJuIFByb2R1Y3RTdW1tYXJ5Q29tcG9uZW50Lm91dGxldHM7XG4gIH1cblxuICB1cGRhdGVDb3VudCh2YWx1ZSkge1xuICAgIHRoaXMuaXRlbUNvdW50ID0gdmFsdWU7XG4gIH1cblxuICAvLyBOT1RFOiBEb2VzIG5vdCBjdXJyZW50bHkgZXhpc3RzIGFzIGl0cyBvd24gY29tcG9uZW50XG4gIC8vIGJ1dCBwYXJ0IG9mIHRhYnMgY29tcG9uZW50LiBUaGlzIGlzIGxpa2VseSB0byBjaGFuZ2UgaW4gcmVmYWN0b3IuXG4gIHByaXZhdGUgZ2V0UmV2aWV3c0NvbXBvbmVudCgpOiBFbGVtZW50IHtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY3gtcHJvZHVjdC1yZXZpZXdzJyk7XG4gIH1cblxuICAvLyBHZXQgVGFicyBDb21wb25lbnQgaWYgZXhpc3RzIG9uIHBhZ2VcbiAgcHJpdmF0ZSBnZXRUYWJzQ29tcG9uZW50KCk6IEVsZW1lbnQge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjeC10YWItcGFyYWdyYXBoLWNvbnRhaW5lcicpO1xuICB9XG5cbiAgLy8gR2V0IFRhYiBieSBsYWJlbCBpZiBleGlzdHMgb24gcGFnZVxuICBnZXRUYWJCeUxhYmVsKGxhYmVsOiBzdHJpbmcsIHRhYnNDb21wb25lbnQ6IEVsZW1lbnQpOiBIVE1MRWxlbWVudCB7XG4gICAgaWYgKHRhYnNDb21wb25lbnQpIHtcbiAgICAgIC8vIE5PVEU6IFJlYWRzIHRocm91Z2ggaDMgdGFncyB0byBjbGljayBvbiBjb3JyZWN0IHRhYlxuICAgICAgLy8gVGhlcmUgbWF5IGJlIGEgYmV0dGVyIHdheSBvZiBkb2luZyB0aGlzIG5vdy9hZnRlciByZWZhY3RvclxuICAgICAgY29uc3QgaDNFbGVtZW50czogSFRNTENvbGxlY3Rpb25PZjxcbiAgICAgICAgSFRNTEVsZW1lbnRcbiAgICAgID4gPSB0YWJzQ29tcG9uZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoMycpO1xuXG4gICAgICAvLyBMb29rIHRocm91Z2ggaDMgdGFiIGVsZW1lbnRzIHVudGlsIGZpbmRpbmcgdGFiIHdpdGggbGFiZWxcbiAgICAgIGZvciAoY29uc3QgaDNFbGVtZW50IG9mIEFycmF5LmZyb20oaDNFbGVtZW50cykpIHtcbiAgICAgICAgaWYgKGgzRWxlbWVudC5pbm5lckhUTUwuaW5jbHVkZXMobGFiZWwpKSB7XG4gICAgICAgICAgcmV0dXJuIGgzRWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIENsaWNrIHRvIGFjdGl2YXRlIHRhYiBpZiBub3QgYWxyZWFkeSBhY3RpdmVcbiAgY2xpY2tUYWJJZkluYWN0aXZlKHRhYjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICAhdGFiLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgfHxcbiAgICAgIHRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZ2dsZWQnKVxuICAgICkge1xuICAgICAgdGFiLmNsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gU2Nyb2xsIHRvIHZpZXdzIGNvbXBvbmVudCBvbiBwYWdlIGFuZCBjbGljayBcIlJldmlld3NcIiB0YWJcbiAgc2hvd1Jldmlld3MoKSB7XG4gICAgLy8gVXNlIHRyYW5zbGF0ZWQgbGFiZWwgZm9yIFJldmlld3MgdGFiIHJlZmVyZW5jZVxuICAgIHRoaXMudHJhbnNsYXRpb25TZXJ2aWNlXG4gICAgICAudHJhbnNsYXRlKCdDTVNUYWJQYXJhZ3JhcGhDb250YWluZXIudGFicy5Qcm9kdWN0UmV2aWV3c1RhYkNvbXBvbmVudCcpXG4gICAgICAuc3Vic2NyaWJlKHJldmlld3NUYWJMYWJlbCA9PiB7XG4gICAgICAgIGNvbnN0IHRhYnNDb21wb25lbnQgPSB0aGlzLmdldFRhYnNDb21wb25lbnQoKTtcbiAgICAgICAgY29uc3QgcmV2aWV3c1RhYiA9IHRoaXMuZ2V0VGFiQnlMYWJlbChyZXZpZXdzVGFiTGFiZWwsIHRhYnNDb21wb25lbnQpO1xuICAgICAgICBjb25zdCByZXZpZXdzQ29tcG9uZW50ID0gdGhpcy5nZXRSZXZpZXdzQ29tcG9uZW50KCk7XG4gICAgICAgIGlmIChyZXZpZXdzVGFiICYmIHJldmlld3NDb21wb25lbnQpIHtcbiAgICAgICAgICB0aGlzLmNsaWNrVGFiSWZJbmFjdGl2ZShyZXZpZXdzVGFiKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgKCkgPT4gcmV2aWV3c0NvbXBvbmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zbGF0aW9uU2VydmljZTogVHJhbnNsYXRpb25TZXJ2aWNlKSB7fVxuXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcbiAgICB0aGlzLnJldmlld3NUYWJBdmFpbGFibGUubmV4dCghIXRoaXMuZ2V0UmV2aWV3c0NvbXBvbmVudCgpKTtcbiAgfVxufVxuIl19