/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    /**
     * @return {?}
     */
    get hasStock() {
        return (this.product &&
            this.product.stock &&
            (this.product.stock.stockLevel > 0 ||
                this.product.stock.stockLevelStatus === 'inStock'));
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
            .subscribe(reviewsTabLabel => {
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
        });
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
                template: "<ng-container *cxOutlet=\"outlets.TITLE\">\n  <div class=\"name\">{{ product?.name }}</div>\n  <div class=\"code\">\n    {{ 'productSummary.id' | cxTranslate }} {{ product?.code }}\n  </div>\n</ng-container>\n\n<ng-container *cxOutlet=\"outlets.RATING\">\n  <div class=\"rating\">\n    <cx-star-rating\n      [rating]=\"product?.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n    <div class=\"count\">({{ product?.numberOfReviews }})</div>\n    <a class=\"btn-link\" *ngIf=\"reviewsTabAvailable\" (click)=\"showReviews()\">{{\n      'productSummary.showReviews' | cxTranslate\n    }}</a>\n  </div>\n</ng-container>\n\n<ng-container *cxOutlet=\"outlets.PRICE\">\n  <div class=\"price\" aria-label=\"new item price\">\n    {{ product?.price?.formattedValue }}\n  </div>\n</ng-container>\n\n<div class=\"description\"><p [innerHTML]=\"product?.summary\"></p></div>\n\n<ng-container *cxOutlet=\"outlets.ADDTOCART\">\n  <div class=\"quantity\">\n    <label>{{ 'productSummary.quantity' | cxTranslate }}</label>\n    <cx-item-counter\n      isValueChangeable=\"true\"\n      [min]=\"1\"\n      [max]=\"product.stock?.stockLevel || 1000\"\n      *ngIf=\"\n        product?.stock?.stockLevel > 0 ||\n        product?.stock?.stockLevelStatus === 'inStock'\n      \"\n      (update)=\"updateCount($event)\"\n    ></cx-item-counter>\n    <span class=\"info\">{{\n      hasStock\n        ? ('productSummary.inStock' | cxTranslate)\n        : ('productSummary.outOfStock' | cxTranslate)\n    }}</span>\n  </div>\n  <cx-add-to-cart\n    *ngIf=\"product?.stock?.stockLevelStatus !== 'outOfStock'\"\n    [quantity]=\"itemCount\"\n    [productCode]=\"product?.code\"\n    [maxQuantity]=\"product.stock.stockLevel\"\n  ></cx-add-to-cart>\n</ng-container>\n\n<!-- @TODO: Temp. Comment out share link while not in use by CMS -->\n<!-- <ng-container *cxOutlet=\"outlets.SHARE\">\n  <div>\n    <a href=\"#\" class=\"share btn-link\">\n      {{ 'productSummary.share' | cxTranslate }}\n    </a>\n  </div>\n</ng-container> -->\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zdW1tYXJ5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3Qtc3VtbWFyeS9wcm9kdWN0LXN1bW1hcnkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEdBRU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBUW5FLE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBa0ZsQyxZQUNZLGFBQTRCLEVBQzlCLGtCQUFzQztRQURwQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM5Qix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBakZoRCxjQUFTLEdBQUcsQ0FBQyxDQUFDO0lBa0ZYLENBQUM7Ozs7SUE3RUosSUFBSSxPQUFPO1FBQ1QsT0FBTyx1QkFBdUIsQ0FBQyxPQUFPLENBQUM7SUFDekMsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsS0FBSztRQUNmLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7Ozs7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLENBQ0wsSUFBSSxDQUFDLE9BQU87WUFDWixJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUs7WUFDbEIsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsQ0FBQztnQkFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEtBQUssU0FBUyxDQUFDLENBQ3JELENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBSU8sbUJBQW1CO1FBQ3pCLE9BQU8sUUFBUSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7OztJQUdPLGdCQUFnQjtRQUN0QixPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsNEJBQTRCLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7O0lBR0QsYUFBYSxDQUFDLEtBQWEsRUFBRSxhQUFzQjtRQUNqRCxJQUFJLGFBQWEsRUFBRTs7OztrQkFHWCxVQUFVLEdBRVosYUFBYSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQztZQUU1Qyw0REFBNEQ7WUFDNUQsS0FBSyxNQUFNLFNBQVMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUM5QyxJQUFJLFNBQVMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUN2QyxPQUFPLFNBQVMsQ0FBQztpQkFDbEI7YUFDRjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7O0lBR0Qsa0JBQWtCLENBQUMsR0FBZ0I7UUFDakMsSUFDRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUNqQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFDakM7WUFDQSxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDYjtJQUNILENBQUM7Ozs7O0lBR0QsV0FBVztRQUNULGlEQUFpRDtRQUNqRCxJQUFJLENBQUMsa0JBQWtCO2FBQ3BCLFNBQVMsQ0FBQyx3QkFBd0IsQ0FBQzthQUNuQyxTQUFTLENBQUMsZUFBZSxDQUFDLEVBQUU7O2tCQUNyQixhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFOztrQkFDdkMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQzs7a0JBRS9ELGdCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUVuRCxJQUFJLFVBQVUsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNwQyxnQkFBZ0IsQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUNuQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7OztJQU9ELFFBQVE7UUFDTixJQUFJLENBQUMsbUJBQW1CLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzFELENBQUM7O0FBeEZNLCtCQUFPLEdBQUcsb0JBQW9CLENBQUM7O1lBUHZDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixxL0RBQStDO2dCQUMvQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDO2FBQzNCOzs7O1lBUlEsYUFBYTtZQUFFLGtCQUFrQjs7O3NCQWV2QyxLQUFLOzs7O0lBTE4sZ0NBQXNDOztJQUV0Qyw0Q0FBYzs7SUFDZCxzREFBNkI7O0lBRTdCLDBDQUFzQjs7Ozs7SUE2RXBCLGdEQUFzQzs7Ozs7SUFDdEMscURBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGVQaXBlLCBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdERldGFpbE91dGxldHMgfSBmcm9tICcuLi8uLi9wcm9kdWN0LW91dGxldHMubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LXN1bW1hcnknLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1zdW1tYXJ5LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1RyYW5zbGF0ZVBpcGVdLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0U3VtbWFyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHN0YXRpYyBvdXRsZXRzID0gUHJvZHVjdERldGFpbE91dGxldHM7XG5cbiAgaXRlbUNvdW50ID0gMTtcbiAgcmV2aWV3c1RhYkF2YWlsYWJsZTogYm9vbGVhbjtcblxuICBASW5wdXQoKSBwcm9kdWN0OiBhbnk7XG5cbiAgZ2V0IG91dGxldHMoKSB7XG4gICAgcmV0dXJuIFByb2R1Y3RTdW1tYXJ5Q29tcG9uZW50Lm91dGxldHM7XG4gIH1cblxuICB1cGRhdGVDb3VudCh2YWx1ZSkge1xuICAgIHRoaXMuaXRlbUNvdW50ID0gdmFsdWU7XG4gIH1cblxuICBnZXQgaGFzU3RvY2soKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucHJvZHVjdCAmJlxuICAgICAgdGhpcy5wcm9kdWN0LnN0b2NrICYmXG4gICAgICAodGhpcy5wcm9kdWN0LnN0b2NrLnN0b2NrTGV2ZWwgPiAwIHx8XG4gICAgICAgIHRoaXMucHJvZHVjdC5zdG9jay5zdG9ja0xldmVsU3RhdHVzID09PSAnaW5TdG9jaycpXG4gICAgKTtcbiAgfVxuXG4gIC8vIE5PVEU6IERvZXMgbm90IGN1cnJlbnRseSBleGlzdHMgYXMgaXRzIG93biBjb21wb25lbnRcbiAgLy8gYnV0IHBhcnQgb2YgdGFicyBjb21wb25lbnQuIFRoaXMgaXMgbGlrZWx5IHRvIGNoYW5nZSBpbiByZWZhY3Rvci5cbiAgcHJpdmF0ZSBnZXRSZXZpZXdzQ29tcG9uZW50KCk6IEVsZW1lbnQge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjeC1wcm9kdWN0LXJldmlld3MnKTtcbiAgfVxuXG4gIC8vIEdldCBUYWJzIENvbXBvbmVudCBpZiBleGlzdHMgb24gcGFnZVxuICBwcml2YXRlIGdldFRhYnNDb21wb25lbnQoKTogRWxlbWVudCB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2N4LXRhYi1wYXJhZ3JhcGgtY29udGFpbmVyJyk7XG4gIH1cblxuICAvLyBHZXQgVGFiIGJ5IGxhYmVsIGlmIGV4aXN0cyBvbiBwYWdlXG4gIGdldFRhYkJ5TGFiZWwobGFiZWw6IHN0cmluZywgdGFic0NvbXBvbmVudDogRWxlbWVudCk6IEhUTUxFbGVtZW50IHtcbiAgICBpZiAodGFic0NvbXBvbmVudCkge1xuICAgICAgLy8gTk9URTogUmVhZHMgdGhyb3VnaCBoMyB0YWdzIHRvIGNsaWNrIG9uIGNvcnJlY3QgdGFiXG4gICAgICAvLyBUaGVyZSBtYXkgYmUgYSBiZXR0ZXIgd2F5IG9mIGRvaW5nIHRoaXMgbm93L2FmdGVyIHJlZmFjdG9yXG4gICAgICBjb25zdCBoM0VsZW1lbnRzOiBIVE1MQ29sbGVjdGlvbk9mPFxuICAgICAgICBIVE1MRWxlbWVudFxuICAgICAgPiA9IHRhYnNDb21wb25lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2gzJyk7XG5cbiAgICAgIC8vIExvb2sgdGhyb3VnaCBoMyB0YWIgZWxlbWVudHMgdW50aWwgZmluZGluZyB0YWIgd2l0aCBsYWJlbFxuICAgICAgZm9yIChjb25zdCBoM0VsZW1lbnQgb2YgQXJyYXkuZnJvbShoM0VsZW1lbnRzKSkge1xuICAgICAgICBpZiAoaDNFbGVtZW50LmlubmVySFRNTC5pbmNsdWRlcyhsYWJlbCkpIHtcbiAgICAgICAgICByZXR1cm4gaDNFbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ2xpY2sgdG8gYWN0aXZhdGUgdGFiIGlmIG5vdCBhbHJlYWR5IGFjdGl2ZVxuICBjbGlja1RhYklmSW5hY3RpdmUodGFiOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgICF0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSB8fFxuICAgICAgdGFiLmNsYXNzTGlzdC5jb250YWlucygndG9nZ2xlZCcpXG4gICAgKSB7XG4gICAgICB0YWIuY2xpY2soKTtcbiAgICB9XG4gIH1cblxuICAvLyBTY3JvbGwgdG8gdmlld3MgY29tcG9uZW50IG9uIHBhZ2UgYW5kIGNsaWNrIFwiUmV2aWV3c1wiIHRhYlxuICBzaG93UmV2aWV3cygpIHtcbiAgICAvLyBVc2UgdHJhbnNsYXRlZCBsYWJlbCBmb3IgUmV2aWV3cyB0YWIgcmVmZXJlbmNlXG4gICAgdGhpcy50cmFuc2xhdGlvblNlcnZpY2VcbiAgICAgIC50cmFuc2xhdGUoJ3Byb2R1Y3REZXRhaWxzLnJldmlld3MnKVxuICAgICAgLnN1YnNjcmliZShyZXZpZXdzVGFiTGFiZWwgPT4ge1xuICAgICAgICBjb25zdCB0YWJzQ29tcG9uZW50ID0gdGhpcy5nZXRUYWJzQ29tcG9uZW50KCk7XG4gICAgICAgIGNvbnN0IHJldmlld3NUYWIgPSB0aGlzLmdldFRhYkJ5TGFiZWwocmV2aWV3c1RhYkxhYmVsLCB0YWJzQ29tcG9uZW50KTtcblxuICAgICAgICBjb25zdCByZXZpZXdzQ29tcG9uZW50ID0gdGhpcy5nZXRSZXZpZXdzQ29tcG9uZW50KCk7XG5cbiAgICAgICAgaWYgKHJldmlld3NUYWIgJiYgcmV2aWV3c0NvbXBvbmVudCkge1xuICAgICAgICAgIHRoaXMuY2xpY2tUYWJJZkluYWN0aXZlKHJldmlld3NUYWIpO1xuICAgICAgICAgIHJldmlld3NDb21wb25lbnQuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRlUGlwZTogVHJhbnNsYXRlUGlwZSxcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uU2VydmljZTogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnJldmlld3NUYWJBdmFpbGFibGUgPSAhIXRoaXMuZ2V0UmV2aWV3c0NvbXBvbmVudCgpO1xuICB9XG59XG4iXX0=