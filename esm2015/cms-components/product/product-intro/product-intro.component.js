import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, } from '@angular/core';
import { Product, TranslationService, WindowRef } from '@spartacus/core';
import { BehaviorSubject } from 'rxjs';
import { CurrentProductService } from '../current-product.service';
let ProductIntroComponent = class ProductIntroComponent {
    constructor(currentProductService, translationService, winRef) {
        this.currentProductService = currentProductService;
        this.translationService = translationService;
        this.winRef = winRef;
        this.reviewsTabAvailable = new BehaviorSubject(false);
        this.product$ = this.currentProductService.getProduct();
    }
    ngAfterContentChecked() {
        this.reviewsTabAvailable.next(!!this.getReviewsComponent());
    }
    // Scroll to views component on page and click "Reviews" tab
    showReviews() {
        // Use translated label for Reviews tab reference
        this.translationService
            .translate('TabPanelContainer.tabs.ProductReviewsTabComponent')
            .subscribe((reviewsTabLabel) => {
            const tabsComponent = this.getTabsComponent();
            const reviewsTab = this.getTabByLabel(reviewsTabLabel, tabsComponent);
            const reviewsComponent = this.getReviewsComponent();
            if (reviewsTab && reviewsComponent) {
                this.clickTabIfInactive(reviewsTab);
                setTimeout(() => reviewsComponent.scrollIntoView({ behavior: 'smooth' }), 0);
            }
        })
            .unsubscribe();
    }
    // NOTE: Does not currently exists as its own component
    // but part of tabs component. This is likely to change in refactor.
    getReviewsComponent() {
        return this.winRef.document.querySelector('cx-product-reviews');
    }
    // Get Tabs Component if exists on page
    getTabsComponent() {
        return this.winRef.document.querySelector('cx-tab-paragraph-container');
    }
    // Click to activate tab if not already active
    clickTabIfInactive(tab) {
        if (!tab.classList.contains('active') ||
            tab.classList.contains('toggled')) {
            tab.click();
        }
    }
    // Get Tab by label if exists on page
    getTabByLabel(label, tabsComponent) {
        if (tabsComponent) {
            // NOTE: Reads through button tags to click on correct tab
            // There may be a better way of doing this now/after refactor
            const tabElements = tabsComponent.getElementsByTagName('button');
            // Look through button tab elements until finding tab with label
            for (const buttonElement of Array.from(tabElements)) {
                if (buttonElement.innerHTML.includes(label)) {
                    return buttonElement;
                }
            }
        }
    }
};
ProductIntroComponent.ctorParameters = () => [
    { type: CurrentProductService },
    { type: TranslationService },
    { type: WindowRef }
];
ProductIntroComponent = __decorate([
    Component({
        selector: 'cx-product-intro',
        template: "<ng-container *ngIf=\"product$ | async as product\">\n  <div class=\"rating\" *ngIf=\"product.averageRating\">\n    <cx-star-rating\n      [rating]=\"product?.averageRating\"\n      [disabled]=\"true\"\n    ></cx-star-rating>\n\n    <div class=\"count\">({{ product?.numberOfReviews }})</div>\n\n    <button\n      *ngIf=\"reviewsTabAvailable | async\"\n      class=\"btn btn-link cx-action-link\"\n      (click)=\"showReviews()\"\n    >\n      {{ 'productSummary.showReviews' | cxTranslate }}\n    </button>\n  </div>\n  <div class=\"rating\" *ngIf=\"!product.averageRating\">\n    {{ 'productDetails.noReviews' | cxTranslate }}\n  </div>\n  <div class=\"code\">\n    {{ 'productSummary.id' | cxTranslate }} {{ product?.code }}\n  </div>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ProductIntroComponent);
export { ProductIntroComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbnRyby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtaW50cm8vcHJvZHVjdC1pbnRyby5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQU9uRSxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtJQUtoQyxZQUNZLHFCQUE0QyxFQUM5QyxrQkFBc0MsRUFDcEMsTUFBaUI7UUFGakIsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQUM5Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3BDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFQN0Isd0JBQW1CLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7UUFFMUQsYUFBUSxHQUF3QixJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxFQUFFLENBQUM7SUFNckUsQ0FBQztJQUVKLHFCQUFxQjtRQUNuQixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCw0REFBNEQ7SUFDNUQsV0FBVztRQUNULGlEQUFpRDtRQUNqRCxJQUFJLENBQUMsa0JBQWtCO2FBQ3BCLFNBQVMsQ0FBQyxtREFBbUQsQ0FBQzthQUM5RCxTQUFTLENBQUMsQ0FBQyxlQUFlLEVBQUUsRUFBRTtZQUM3QixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUM5QyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsQ0FBQztZQUN0RSxNQUFNLGdCQUFnQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQ3BELElBQUksVUFBVSxJQUFJLGdCQUFnQixFQUFFO2dCQUNsQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ3BDLFVBQVUsQ0FDUixHQUFHLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFDN0QsQ0FBQyxDQUNGLENBQUM7YUFDSDtRQUNILENBQUMsQ0FBQzthQUNELFdBQVcsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCx1REFBdUQ7SUFDdkQsb0VBQW9FO0lBQzVELG1CQUFtQjtRQUN6QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFRCx1Q0FBdUM7SUFDL0IsZ0JBQWdCO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLDRCQUE0QixDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELDhDQUE4QztJQUN0QyxrQkFBa0IsQ0FBQyxHQUFnQjtRQUN6QyxJQUNFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO1lBQ2pDLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUNqQztZQUNBLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVELHFDQUFxQztJQUM3QixhQUFhLENBQUMsS0FBYSxFQUFFLGFBQXNCO1FBQ3pELElBQUksYUFBYSxFQUFFO1lBQ2pCLDBEQUEwRDtZQUMxRCw2REFBNkQ7WUFDN0QsTUFBTSxXQUFXLEdBQWtDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FDbkYsUUFBUSxDQUNULENBQUM7WUFFRixnRUFBZ0U7WUFDaEUsS0FBSyxNQUFNLGFBQWEsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO2dCQUNuRCxJQUFJLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO29CQUMzQyxPQUFPLGFBQWEsQ0FBQztpQkFDdEI7YUFDRjtTQUNGO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBbkVvQyxxQkFBcUI7WUFDMUIsa0JBQWtCO1lBQzVCLFNBQVM7O0FBUmxCLHFCQUFxQjtJQUxqQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLGl3QkFBNkM7UUFDN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLHFCQUFxQixDQXlFakM7U0F6RVkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0LCBUcmFuc2xhdGlvblNlcnZpY2UsIFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1pbnRybycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWludHJvLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RJbnRyb0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQge1xuICByZXZpZXdzVGFiQXZhaWxhYmxlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XG5cbiAgcHJvZHVjdCQ6IE9ic2VydmFibGU8UHJvZHVjdD4gPSB0aGlzLmN1cnJlbnRQcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmXG4gICkge31cblxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG4gICAgdGhpcy5yZXZpZXdzVGFiQXZhaWxhYmxlLm5leHQoISF0aGlzLmdldFJldmlld3NDb21wb25lbnQoKSk7XG4gIH1cblxuICAvLyBTY3JvbGwgdG8gdmlld3MgY29tcG9uZW50IG9uIHBhZ2UgYW5kIGNsaWNrIFwiUmV2aWV3c1wiIHRhYlxuICBzaG93UmV2aWV3cygpIHtcbiAgICAvLyBVc2UgdHJhbnNsYXRlZCBsYWJlbCBmb3IgUmV2aWV3cyB0YWIgcmVmZXJlbmNlXG4gICAgdGhpcy50cmFuc2xhdGlvblNlcnZpY2VcbiAgICAgIC50cmFuc2xhdGUoJ1RhYlBhbmVsQ29udGFpbmVyLnRhYnMuUHJvZHVjdFJldmlld3NUYWJDb21wb25lbnQnKVxuICAgICAgLnN1YnNjcmliZSgocmV2aWV3c1RhYkxhYmVsKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhYnNDb21wb25lbnQgPSB0aGlzLmdldFRhYnNDb21wb25lbnQoKTtcbiAgICAgICAgY29uc3QgcmV2aWV3c1RhYiA9IHRoaXMuZ2V0VGFiQnlMYWJlbChyZXZpZXdzVGFiTGFiZWwsIHRhYnNDb21wb25lbnQpO1xuICAgICAgICBjb25zdCByZXZpZXdzQ29tcG9uZW50ID0gdGhpcy5nZXRSZXZpZXdzQ29tcG9uZW50KCk7XG4gICAgICAgIGlmIChyZXZpZXdzVGFiICYmIHJldmlld3NDb21wb25lbnQpIHtcbiAgICAgICAgICB0aGlzLmNsaWNrVGFiSWZJbmFjdGl2ZShyZXZpZXdzVGFiKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICAgKCkgPT4gcmV2aWV3c0NvbXBvbmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvLyBOT1RFOiBEb2VzIG5vdCBjdXJyZW50bHkgZXhpc3RzIGFzIGl0cyBvd24gY29tcG9uZW50XG4gIC8vIGJ1dCBwYXJ0IG9mIHRhYnMgY29tcG9uZW50LiBUaGlzIGlzIGxpa2VseSB0byBjaGFuZ2UgaW4gcmVmYWN0b3IuXG4gIHByaXZhdGUgZ2V0UmV2aWV3c0NvbXBvbmVudCgpOiBFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy53aW5SZWYuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY3gtcHJvZHVjdC1yZXZpZXdzJyk7XG4gIH1cblxuICAvLyBHZXQgVGFicyBDb21wb25lbnQgaWYgZXhpc3RzIG9uIHBhZ2VcbiAgcHJpdmF0ZSBnZXRUYWJzQ29tcG9uZW50KCk6IEVsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLndpblJlZi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjeC10YWItcGFyYWdyYXBoLWNvbnRhaW5lcicpO1xuICB9XG5cbiAgLy8gQ2xpY2sgdG8gYWN0aXZhdGUgdGFiIGlmIG5vdCBhbHJlYWR5IGFjdGl2ZVxuICBwcml2YXRlIGNsaWNrVGFiSWZJbmFjdGl2ZSh0YWI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKFxuICAgICAgIXRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpIHx8XG4gICAgICB0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2dnbGVkJylcbiAgICApIHtcbiAgICAgIHRhYi5jbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEdldCBUYWIgYnkgbGFiZWwgaWYgZXhpc3RzIG9uIHBhZ2VcbiAgcHJpdmF0ZSBnZXRUYWJCeUxhYmVsKGxhYmVsOiBzdHJpbmcsIHRhYnNDb21wb25lbnQ6IEVsZW1lbnQpOiBIVE1MRWxlbWVudCB7XG4gICAgaWYgKHRhYnNDb21wb25lbnQpIHtcbiAgICAgIC8vIE5PVEU6IFJlYWRzIHRocm91Z2ggYnV0dG9uIHRhZ3MgdG8gY2xpY2sgb24gY29ycmVjdCB0YWJcbiAgICAgIC8vIFRoZXJlIG1heSBiZSBhIGJldHRlciB3YXkgb2YgZG9pbmcgdGhpcyBub3cvYWZ0ZXIgcmVmYWN0b3JcbiAgICAgIGNvbnN0IHRhYkVsZW1lbnRzOiBIVE1MQ29sbGVjdGlvbk9mPEhUTUxFbGVtZW50PiA9IHRhYnNDb21wb25lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXG4gICAgICAgICdidXR0b24nXG4gICAgICApO1xuXG4gICAgICAvLyBMb29rIHRocm91Z2ggYnV0dG9uIHRhYiBlbGVtZW50cyB1bnRpbCBmaW5kaW5nIHRhYiB3aXRoIGxhYmVsXG4gICAgICBmb3IgKGNvbnN0IGJ1dHRvbkVsZW1lbnQgb2YgQXJyYXkuZnJvbSh0YWJFbGVtZW50cykpIHtcbiAgICAgICAgaWYgKGJ1dHRvbkVsZW1lbnQuaW5uZXJIVE1MLmluY2x1ZGVzKGxhYmVsKSkge1xuICAgICAgICAgIHJldHVybiBidXR0b25FbGVtZW50O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=