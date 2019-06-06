/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';
import { TranslatePipe, TranslationService } from '@spartacus/core';
import { ProductDetailOutlets } from '../../product-outlets.model';
export class ProductSummaryComponent {
    /**
     * @param {?} translatePipe
     * @param {?} translationService
     */
    constructor(translatePipe, translationService) {
        this.translatePipe = translatePipe;
        this.translationService = translationService;
        this.itemCount = 1;
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
            .translate('productDetails.reviews')
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
                reviewsComponent.scrollIntoView();
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.reviewsTabAvailable = !!this.getReviewsComponent();
    }
}
ProductSummaryComponent.outlets = ProductDetailOutlets;
ProductSummaryComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-summary',
                template: "<ng-template\n  [cxOutlet]=\"outlets.RATING\"\n  [cxOutletContext]=\"{ product: product }\"\n>\n  <div class=\"rating\">\n    <cx-star-rating\n      [rating]=\"product?.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n    <div class=\"count\">({{ product?.numberOfReviews }})</div>\n    <a class=\"btn-link\" *ngIf=\"reviewsTabAvailable\" (click)=\"showReviews()\">{{\n      'productSummary.showReviews' | cxTranslate\n    }}</a>\n  </div>\n</ng-template>\n<ng-template\n  [cxOutlet]=\"outlets.TITLE\"\n  [cxOutletContext]=\"{ product: product }\"\n>\n  <!-- <div class=\"name\">{{ product?.name }}</div> -->\n  <div class=\"code\">\n    {{ 'productSummary.id' | cxTranslate }} {{ product?.code }}\n  </div>\n</ng-template>\n\n<ng-template\n  [cxOutlet]=\"outlets.PRICE\"\n  [cxOutletContext]=\"{ product: product }\"\n>\n  <div class=\"price\" aria-label=\"new item price\">\n    {{ product?.price?.formattedValue }}\n  </div>\n</ng-template>\n\n<ng-template\n  [cxOutlet]=\"outlets.DESCRIPTION\"\n  [cxOutletContext]=\"{ product: product }\"\n>\n  <div class=\"description\"><p [innerHTML]=\"product?.summary\"></p></div>\n</ng-template>\n\n<cx-page-slot position=\"AddToCart\"></cx-page-slot>\n\n<!-- @TODO: Temp. Comment out share link while not in use by CMS -->\n<!-- <ng-template [cxOutlet]=\"outlets.SHARE\" [cxOutletContext]=\"{ product: product }\">\n  <div>\n    <a href=\"#\" class=\"share btn-link\">\n      {{ 'productSummary.share' | cxTranslate }}\n    </a>\n  </div>\n</ng-template> -->\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [TranslatePipe]
            }] }
];
/** @nocollapse */
ProductSummaryComponent.ctorParameters = () => [
    { type: TranslatePipe },
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
     * @protected
     */
    ProductSummaryComponent.prototype.translatePipe;
    /**
     * @type {?}
     * @private
     */
    ProductSummaryComponent.prototype.translationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zdW1tYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3Qtc3VtbWFyeS9wcm9kdWN0LXN1bW1hcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEdBRU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBUW5FLE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBeUVsQyxZQUNZLGFBQTRCLEVBQzlCLGtCQUFzQztRQURwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM5Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBeEVoRCxjQUFTLEdBQUcsQ0FBQyxDQUFDO0lBeUVYLENBQUM7Ozs7SUFwRUosSUFBSSxPQUFPO1FBQ1QsT0FBTyx1QkFBdUIsQ0FBQyxPQUFPLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBSztRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7Ozs7SUFJTyxtQkFBbUI7UUFDekIsT0FBTyxRQUFRLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7O0lBR08sZ0JBQWdCO1FBQ3RCLE9BQU8sUUFBUSxDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7Ozs7SUFHRCxhQUFhLENBQUMsS0FBYSxFQUFFLGFBQXNCO1FBQ2pELElBQUksYUFBYSxFQUFFOzs7O2tCQUdYLFVBQVUsR0FFWixhQUFhLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDO1lBRTVDLDREQUE0RDtZQUM1RCxLQUFLLE1BQU0sU0FBUyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQzlDLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3ZDLE9BQU8sU0FBUyxDQUFDO2lCQUNsQjthQUNGO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7SUFHRCxrQkFBa0IsQ0FBQyxHQUFnQjtRQUNqQyxJQUNFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBQ2pDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUNqQztZQUNBLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNiO0lBQ0gsQ0FBQzs7Ozs7SUFHRCxXQUFXO1FBQ1QsaURBQWlEO1FBQ2pELElBQUksQ0FBQyxrQkFBa0I7YUFDcEIsU0FBUyxDQUFDLHdCQUF3QixDQUFDO2FBQ25DLFNBQVM7Ozs7UUFBQyxlQUFlLENBQUMsRUFBRTs7a0JBQ3JCLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7O2tCQUN2QyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDOztrQkFFL0QsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBRW5ELElBQUksVUFBVSxJQUFJLGdCQUFnQixFQUFFO2dCQUNsQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3BDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQ25DO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7O0lBT0QsUUFBUTtRQUNOLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDMUQsQ0FBQzs7QUEvRU0sK0JBQU8sR0FBRyxvQkFBb0IsQ0FBQzs7WUFQdkMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLGdnREFBK0M7Z0JBQy9DLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUM7YUFDM0I7Ozs7WUFSUSxhQUFhO1lBQUUsa0JBQWtCOzs7c0JBZXZDLEtBQUs7Ozs7SUFMTixnQ0FBc0M7O0lBRXRDLDRDQUFjOztJQUNkLHNEQUE2Qjs7SUFFN0IsMENBQXNCOzs7OztJQW9FcEIsZ0RBQXNDOzs7OztJQUN0QyxxREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRyYW5zbGF0ZVBpcGUsIFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0RGV0YWlsT3V0bGV0cyB9IGZyb20gJy4uLy4uL3Byb2R1Y3Qtb3V0bGV0cy5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3Qtc3VtbWFyeScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LXN1bW1hcnkuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbVHJhbnNsYXRlUGlwZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTdW1tYXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc3RhdGljIG91dGxldHMgPSBQcm9kdWN0RGV0YWlsT3V0bGV0cztcblxuICBpdGVtQ291bnQgPSAxO1xuICByZXZpZXdzVGFiQXZhaWxhYmxlOiBib29sZWFuO1xuXG4gIEBJbnB1dCgpIHByb2R1Y3Q6IGFueTtcblxuICBnZXQgb3V0bGV0cygpIHtcbiAgICByZXR1cm4gUHJvZHVjdFN1bW1hcnlDb21wb25lbnQub3V0bGV0cztcbiAgfVxuXG4gIHVwZGF0ZUNvdW50KHZhbHVlKSB7XG4gICAgdGhpcy5pdGVtQ291bnQgPSB2YWx1ZTtcbiAgfVxuXG4gIC8vIE5PVEU6IERvZXMgbm90IGN1cnJlbnRseSBleGlzdHMgYXMgaXRzIG93biBjb21wb25lbnRcbiAgLy8gYnV0IHBhcnQgb2YgdGFicyBjb21wb25lbnQuIFRoaXMgaXMgbGlrZWx5IHRvIGNoYW5nZSBpbiByZWZhY3Rvci5cbiAgcHJpdmF0ZSBnZXRSZXZpZXdzQ29tcG9uZW50KCk6IEVsZW1lbnQge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjeC1wcm9kdWN0LXJldmlld3MnKTtcbiAgfVxuXG4gIC8vIEdldCBUYWJzIENvbXBvbmVudCBpZiBleGlzdHMgb24gcGFnZVxuICBwcml2YXRlIGdldFRhYnNDb21wb25lbnQoKTogRWxlbWVudCB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2N4LXRhYi1wYXJhZ3JhcGgtY29udGFpbmVyJyk7XG4gIH1cblxuICAvLyBHZXQgVGFiIGJ5IGxhYmVsIGlmIGV4aXN0cyBvbiBwYWdlXG4gIGdldFRhYkJ5TGFiZWwobGFiZWw6IHN0cmluZywgdGFic0NvbXBvbmVudDogRWxlbWVudCk6IEhUTUxFbGVtZW50IHtcbiAgICBpZiAodGFic0NvbXBvbmVudCkge1xuICAgICAgLy8gTk9URTogUmVhZHMgdGhyb3VnaCBoMyB0YWdzIHRvIGNsaWNrIG9uIGNvcnJlY3QgdGFiXG4gICAgICAvLyBUaGVyZSBtYXkgYmUgYSBiZXR0ZXIgd2F5IG9mIGRvaW5nIHRoaXMgbm93L2FmdGVyIHJlZmFjdG9yXG4gICAgICBjb25zdCBoM0VsZW1lbnRzOiBIVE1MQ29sbGVjdGlvbk9mPFxuICAgICAgICBIVE1MRWxlbWVudFxuICAgICAgPiA9IHRhYnNDb21wb25lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2gzJyk7XG5cbiAgICAgIC8vIExvb2sgdGhyb3VnaCBoMyB0YWIgZWxlbWVudHMgdW50aWwgZmluZGluZyB0YWIgd2l0aCBsYWJlbFxuICAgICAgZm9yIChjb25zdCBoM0VsZW1lbnQgb2YgQXJyYXkuZnJvbShoM0VsZW1lbnRzKSkge1xuICAgICAgICBpZiAoaDNFbGVtZW50LmlubmVySFRNTC5pbmNsdWRlcyhsYWJlbCkpIHtcbiAgICAgICAgICByZXR1cm4gaDNFbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ2xpY2sgdG8gYWN0aXZhdGUgdGFiIGlmIG5vdCBhbHJlYWR5IGFjdGl2ZVxuICBjbGlja1RhYklmSW5hY3RpdmUodGFiOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgICF0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSB8fFxuICAgICAgdGFiLmNsYXNzTGlzdC5jb250YWlucygndG9nZ2xlZCcpXG4gICAgKSB7XG4gICAgICB0YWIuY2xpY2soKTtcbiAgICB9XG4gIH1cblxuICAvLyBTY3JvbGwgdG8gdmlld3MgY29tcG9uZW50IG9uIHBhZ2UgYW5kIGNsaWNrIFwiUmV2aWV3c1wiIHRhYlxuICBzaG93UmV2aWV3cygpIHtcbiAgICAvLyBVc2UgdHJhbnNsYXRlZCBsYWJlbCBmb3IgUmV2aWV3cyB0YWIgcmVmZXJlbmNlXG4gICAgdGhpcy50cmFuc2xhdGlvblNlcnZpY2VcbiAgICAgIC50cmFuc2xhdGUoJ3Byb2R1Y3REZXRhaWxzLnJldmlld3MnKVxuICAgICAgLnN1YnNjcmliZShyZXZpZXdzVGFiTGFiZWwgPT4ge1xuICAgICAgICBjb25zdCB0YWJzQ29tcG9uZW50ID0gdGhpcy5nZXRUYWJzQ29tcG9uZW50KCk7XG4gICAgICAgIGNvbnN0IHJldmlld3NUYWIgPSB0aGlzLmdldFRhYkJ5TGFiZWwocmV2aWV3c1RhYkxhYmVsLCB0YWJzQ29tcG9uZW50KTtcblxuICAgICAgICBjb25zdCByZXZpZXdzQ29tcG9uZW50ID0gdGhpcy5nZXRSZXZpZXdzQ29tcG9uZW50KCk7XG5cbiAgICAgICAgaWYgKHJldmlld3NUYWIgJiYgcmV2aWV3c0NvbXBvbmVudCkge1xuICAgICAgICAgIHRoaXMuY2xpY2tUYWJJZkluYWN0aXZlKHJldmlld3NUYWIpO1xuICAgICAgICAgIHJldmlld3NDb21wb25lbnQuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRlUGlwZTogVHJhbnNsYXRlUGlwZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uU2VydmljZTogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJldmlld3NUYWJBdmFpbGFibGUgPSAhIXRoaXMuZ2V0UmV2aWV3c0NvbXBvbmVudCgpO1xuICB9XG59XG4iXX0=