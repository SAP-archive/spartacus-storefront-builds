/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { TranslationService, WindowRef } from '@spartacus/core';
import { BehaviorSubject } from 'rxjs';
import { CurrentProductService } from '../current-product.service';
export class ProductIntroComponent {
    /**
     * @param {?} currentProductService
     * @param {?} translationService
     * @param {?} winRef
     */
    constructor(currentProductService, translationService, winRef) {
        this.currentProductService = currentProductService;
        this.translationService = translationService;
        this.winRef = winRef;
        this.reviewsTabAvailable = new BehaviorSubject(false);
        this.product$ = this.currentProductService.getProduct();
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.reviewsTabAvailable.next(!!this.getReviewsComponent());
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
    // NOTE: Does not currently exists as its own component
    // but part of tabs component. This is likely to change in refactor.
    /**
     * @private
     * @return {?}
     */
    getReviewsComponent() {
        return this.winRef.document.querySelector('cx-product-reviews');
    }
    // Get Tabs Component if exists on page
    /**
     * @private
     * @return {?}
     */
    getTabsComponent() {
        return this.winRef.document.querySelector('cx-tab-paragraph-container');
    }
    // Click to activate tab if not already active
    /**
     * @private
     * @param {?} tab
     * @return {?}
     */
    clickTabIfInactive(tab) {
        if (!tab.classList.contains('active') ||
            tab.classList.contains('toggled')) {
            tab.click();
        }
    }
    // Get Tab by label if exists on page
    /**
     * @private
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
}
ProductIntroComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-intro',
                template: "<ng-container *ngIf=\"product$ | async as product\">\n  <div class=\"rating\" *ngIf=\"product.averageRating\">\n    <cx-star-rating\n      [rating]=\"product?.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n    <div class=\"count\">({{ product?.numberOfReviews }})</div>\n    <a\n      class=\"btn-link\"\n      *ngIf=\"reviewsTabAvailable | async\"\n      (click)=\"showReviews()\"\n      >{{ 'productSummary.showReviews' | cxTranslate }}</a\n    >\n  </div>\n  <div class=\"rating\" *ngIf=\"!product.averageRating\">\n    {{ 'productDetails.noReviews' | cxTranslate }}\n  </div>\n  <div class=\"code\">\n    {{ 'productSummary.id' | cxTranslate }} {{ product?.code }}\n  </div>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ProductIntroComponent.ctorParameters = () => [
    { type: CurrentProductService },
    { type: TranslationService },
    { type: WindowRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbnRyby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtaW50cm8vcHJvZHVjdC1pbnRyby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBVyxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBT25FLE1BQU0sT0FBTyxxQkFBcUI7Ozs7OztJQUtoQyxZQUNZLHFCQUE0QyxFQUM5QyxrQkFBc0MsRUFDcEMsTUFBaUI7UUFGakIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM5Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3BDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFQN0Isd0JBQW1CLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFFMUQsYUFBUSxHQUF3QixJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxFQUFFLENBQUM7SUFNckUsQ0FBQzs7OztJQUVKLHFCQUFxQjtRQUNuQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7O0lBR0QsV0FBVztRQUNULGlEQUFpRDtRQUNqRCxJQUFJLENBQUMsa0JBQWtCO2FBQ3BCLFNBQVMsQ0FBQywwREFBMEQsQ0FBQzthQUNyRSxTQUFTOzs7O1FBQUMsZUFBZSxDQUFDLEVBQUU7O2tCQUNyQixhQUFhLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFOztrQkFDdkMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQzs7a0JBQy9ELGdCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUNuRCxJQUFJLFVBQVUsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNwQyxVQUFVOzs7Z0JBQ1IsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLEdBQzdELENBQUMsQ0FDRixDQUFDO2FBQ0g7UUFDSCxDQUFDLEVBQUM7YUFDRCxXQUFXLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7Ozs7O0lBSU8sbUJBQW1CO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7O0lBR08sZ0JBQWdCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDMUUsQ0FBQzs7Ozs7OztJQUdPLGtCQUFrQixDQUFDLEdBQWdCO1FBQ3pDLElBQ0UsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDakMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQ2pDO1lBQ0EsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2I7SUFDSCxDQUFDOzs7Ozs7OztJQUdPLGFBQWEsQ0FBQyxLQUFhLEVBQUUsYUFBc0I7UUFDekQsSUFBSSxhQUFhLEVBQUU7Ozs7a0JBR1gsVUFBVSxHQUVaLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUM7WUFFNUMsNERBQTREO1lBQzVELEtBQUssTUFBTSxTQUFTLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDOUMsSUFBSSxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDdkMsT0FBTyxTQUFTLENBQUM7aUJBQ2xCO2FBQ0Y7U0FDRjtJQUNILENBQUM7OztZQTdFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsMHRCQUE2QztnQkFDN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFOUSxxQkFBcUI7WUFGWixrQkFBa0I7WUFBRSxTQUFTOzs7O0lBVTdDLG9EQUEwRDs7SUFFMUQseUNBQXdFOzs7OztJQUd0RSxzREFBc0Q7Ozs7O0lBQ3RELG1EQUE4Qzs7Ozs7SUFDOUMsdUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0LCBUcmFuc2xhdGlvblNlcnZpY2UsIFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1pbnRybycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWludHJvLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RJbnRyb0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuICByZXZpZXdzVGFiQXZhaWxhYmxlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG5cbiAgcHJvZHVjdCQ6IE9ic2VydmFibGU8UHJvZHVjdD4gPSB0aGlzLmN1cnJlbnRQcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmXG4gICkge31cblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgdGhpcy5yZXZpZXdzVGFiQXZhaWxhYmxlLm5leHQoISF0aGlzLmdldFJldmlld3NDb21wb25lbnQoKSk7XG4gIH1cblxuICAvLyBTY3JvbGwgdG8gdmlld3MgY29tcG9uZW50IG9uIHBhZ2UgYW5kIGNsaWNrIFwiUmV2aWV3c1wiIHRhYlxuICBzaG93UmV2aWV3cygpIHtcbiAgICAvLyBVc2UgdHJhbnNsYXRlZCBsYWJlbCBmb3IgUmV2aWV3cyB0YWIgcmVmZXJlbmNlXG4gICAgdGhpcy50cmFuc2xhdGlvblNlcnZpY2VcbiAgICAgIC50cmFuc2xhdGUoJ0NNU1RhYlBhcmFncmFwaENvbnRhaW5lci50YWJzLlByb2R1Y3RSZXZpZXdzVGFiQ29tcG9uZW50JylcbiAgICAgIC5zdWJzY3JpYmUocmV2aWV3c1RhYkxhYmVsID0+IHtcbiAgICAgICAgY29uc3QgdGFic0NvbXBvbmVudCA9IHRoaXMuZ2V0VGFic0NvbXBvbmVudCgpO1xuICAgICAgICBjb25zdCByZXZpZXdzVGFiID0gdGhpcy5nZXRUYWJCeUxhYmVsKHJldmlld3NUYWJMYWJlbCwgdGFic0NvbXBvbmVudCk7XG4gICAgICAgIGNvbnN0IHJldmlld3NDb21wb25lbnQgPSB0aGlzLmdldFJldmlld3NDb21wb25lbnQoKTtcbiAgICAgICAgaWYgKHJldmlld3NUYWIgJiYgcmV2aWV3c0NvbXBvbmVudCkge1xuICAgICAgICAgIHRoaXMuY2xpY2tUYWJJZkluYWN0aXZlKHJldmlld3NUYWIpO1xuICAgICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgICAoKSA9PiByZXZpZXdzQ29tcG9uZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pLFxuICAgICAgICAgICAgMFxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8vIE5PVEU6IERvZXMgbm90IGN1cnJlbnRseSBleGlzdHMgYXMgaXRzIG93biBjb21wb25lbnRcbiAgLy8gYnV0IHBhcnQgb2YgdGFicyBjb21wb25lbnQuIFRoaXMgaXMgbGlrZWx5IHRvIGNoYW5nZSBpbiByZWZhY3Rvci5cbiAgcHJpdmF0ZSBnZXRSZXZpZXdzQ29tcG9uZW50KCk6IEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLndpblJlZi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjeC1wcm9kdWN0LXJldmlld3MnKTtcbiAgfVxuXG4gIC8vIEdldCBUYWJzIENvbXBvbmVudCBpZiBleGlzdHMgb24gcGFnZVxuICBwcml2YXRlIGdldFRhYnNDb21wb25lbnQoKTogRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMud2luUmVmLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2N4LXRhYi1wYXJhZ3JhcGgtY29udGFpbmVyJyk7XG4gIH1cblxuICAvLyBDbGljayB0byBhY3RpdmF0ZSB0YWIgaWYgbm90IGFscmVhZHkgYWN0aXZlXG4gIHByaXZhdGUgY2xpY2tUYWJJZkluYWN0aXZlKHRhYjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAoXG4gICAgICAhdGFiLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgfHxcbiAgICAgIHRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZ2dsZWQnKVxuICAgICkge1xuICAgICAgdGFiLmNsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gR2V0IFRhYiBieSBsYWJlbCBpZiBleGlzdHMgb24gcGFnZVxuICBwcml2YXRlIGdldFRhYkJ5TGFiZWwobGFiZWw6IHN0cmluZywgdGFic0NvbXBvbmVudDogRWxlbWVudCk6IEhUTUxFbGVtZW50IHtcbiAgICBpZiAodGFic0NvbXBvbmVudCkge1xuICAgICAgLy8gTk9URTogUmVhZHMgdGhyb3VnaCBoMyB0YWdzIHRvIGNsaWNrIG9uIGNvcnJlY3QgdGFiXG4gICAgICAvLyBUaGVyZSBtYXkgYmUgYSBiZXR0ZXIgd2F5IG9mIGRvaW5nIHRoaXMgbm93L2FmdGVyIHJlZmFjdG9yXG4gICAgICBjb25zdCBoM0VsZW1lbnRzOiBIVE1MQ29sbGVjdGlvbk9mPFxuICAgICAgICBIVE1MRWxlbWVudFxuICAgICAgPiA9IHRhYnNDb21wb25lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2gzJyk7XG5cbiAgICAgIC8vIExvb2sgdGhyb3VnaCBoMyB0YWIgZWxlbWVudHMgdW50aWwgZmluZGluZyB0YWIgd2l0aCBsYWJlbFxuICAgICAgZm9yIChjb25zdCBoM0VsZW1lbnQgb2YgQXJyYXkuZnJvbShoM0VsZW1lbnRzKSkge1xuICAgICAgICBpZiAoaDNFbGVtZW50LmlubmVySFRNTC5pbmNsdWRlcyhsYWJlbCkpIHtcbiAgICAgICAgICByZXR1cm4gaDNFbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=