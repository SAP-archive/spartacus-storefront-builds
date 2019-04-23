/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { CurrentProductService } from '../../../../ui/pages/product-page/current-product.service';
import { ProductTabsOutlets } from '../../../product-outlets.model';
export class ProductTabsComponent {
    /**
     * @param {?} winRef
     * @param {?} currentPageService
     */
    constructor(winRef, currentPageService) {
        this.winRef = winRef;
        this.currentPageService = currentPageService;
        this.isWritingReview = false;
        this.activatedElements = [];
    }
    /**
     * @param {?} ref
     * @return {?}
     */
    set initial(ref) {
        if (ref) {
            ref.nativeElement.click();
        }
    }
    /**
     * @return {?}
     */
    get outlets() {
        return ProductTabsComponent.outlets;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.product$ = this.currentPageService.getProduct();
    }
    /**
     * @param {?} event
     * @param {?} tab
     * @return {?}
     */
    select(event, tab) {
        if (this.activatedElements.indexOf(tab) === -1) {
            // remove active class on both header and content panel
            this.activatedElements.forEach(el => el.classList.remove('active', 'toggled'));
            this.activatedElements = [(/** @type {?} */ (event.target)), tab];
            this.activatedElements.forEach(el => el.classList.add('active'));
            // only scroll if the element is not yet visible
            if (this.isElementOutViewport(tab)) {
                tab.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                    inline: 'nearest',
                });
            }
        }
        else {
            this.activatedElements.forEach(el => el.classList.toggle('toggled'));
        }
    }
    /**
     * @return {?}
     */
    openReview() {
        if (this.reviewHeader.nativeElement) {
            this.reviewHeader.nativeElement.click();
        }
    }
    /**
     * @private
     * @param {?} el
     * @return {?}
     */
    isElementOutViewport(el) {
        if (!this.winRef.nativeWindow) {
            return false;
        }
        /** @type {?} */
        const rect = el.getBoundingClientRect();
        return (rect.bottom < 0 ||
            rect.right < 0 ||
            rect.left > this.winRef.nativeWindow.innerWidth ||
            rect.top > this.winRef.nativeWindow.innerHeight);
    }
}
ProductTabsComponent.outlets = ProductTabsOutlets;
ProductTabsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-tabs',
                template: "<div class=\"details\" *ngIf=\"(product$ | async) as product\">\n  <ng-container *cxOutlet=\"outlets.DESCRIPTION\">\n    <h3 #descriptionHeader (click)=\"select($event, description)\">\n      {{ 'productDetails.productDetails' | cxTranslate }}\n    </h3>\n    <div #description>\n      <div class=\"container\" [innerHTML]=\"product?.description\"></div>\n    </div>\n  </ng-container>\n\n  <ng-container *cxOutlet=\"outlets.SPECIFICATIONS\">\n    <h3 (click)=\"select($event, specifications)\">\n      {{ 'productDetails.specification' | cxTranslate }}\n    </h3>\n    <div #specifications>\n      <div class=\"container\">\n        <h2>{{ 'productDetails.specification' | cxTranslate }}</h2>\n        <cx-product-attributes [product]=\"product\"></cx-product-attributes>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *cxOutlet=\"outlets.REVIEWS\">\n    <h3 #reviewHeader (click)=\"select($event, reviews)\">\n      {{ 'productDetails.reviews' | cxTranslate }} ({{\n        product?.numberOfReviews\n      }})\n    </h3>\n    <div #reviews>\n      <div class=\"container\">\n        <h2>\n          {{ 'productDetails.reviews' | cxTranslate }} ({{\n            product?.numberOfReviews\n          }})\n        </h2>\n        <cx-product-reviews\n          class=\"container\"\n          [(isWritingReview)]=\"isWritingReview\"\n          [product]=\"product\"\n        ></cx-product-reviews>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *cxOutlet=\"outlets.SHIPPING\">\n    <h3 (click)=\"select($event, shipping)\">\n      {{ 'productDetails.shipping' | cxTranslate }}\n    </h3>\n    <div #shipping>\n      <div class=\"container\">\n        <h2>{{ 'productDetails.shipping' | cxTranslate }}</h2>\n        <ng-container\n          [cxComponentWrapper]=\"{\n            flexType: 'CMSTabParagraphComponent',\n            uid: 'deliveryTab'\n          }\"\n        ></ng-container>\n      </div>\n    </div>\n  </ng-container>\n</div>\n"
            }] }
];
/** @nocollapse */
ProductTabsComponent.ctorParameters = () => [
    { type: WindowRef },
    { type: CurrentProductService }
];
ProductTabsComponent.propDecorators = {
    initial: [{ type: ViewChild, args: ['descriptionHeader',] }],
    reviewHeader: [{ type: ViewChild, args: ['reviewHeader',] }]
};
if (false) {
    /** @type {?} */
    ProductTabsComponent.outlets;
    /** @type {?} */
    ProductTabsComponent.prototype.product$;
    /** @type {?} */
    ProductTabsComponent.prototype.isWritingReview;
    /** @type {?} */
    ProductTabsComponent.prototype.activatedElements;
    /** @type {?} */
    ProductTabsComponent.prototype.reviewHeader;
    /**
     * @type {?}
     * @protected
     */
    ProductTabsComponent.prototype.winRef;
    /**
     * @type {?}
     * @protected
     */
    ProductTabsComponent.prototype.currentPageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC10YWJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdC10YWJzL2NvbnRhaW5lci9wcm9kdWN0LXRhYnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFhLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBTXBFLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBcUIvQixZQUNZLE1BQWlCLEVBQ2pCLGtCQUF5QztRQUR6QyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBdUI7UUFsQnJELG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLHNCQUFpQixHQUFrQixFQUFFLENBQUM7SUFrQm5DLENBQUM7Ozs7O0lBaEJKLElBQ0ksT0FBTyxDQUFDLEdBQWU7UUFDekIsSUFBSSxHQUFHLEVBQUU7WUFDUCxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7OztJQUlELElBQUksT0FBTztRQUNULE9BQU8sb0JBQW9CLENBQUMsT0FBTyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFPRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQWlCLEVBQUUsR0FBZ0I7UUFDeEMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzlDLHVEQUF1RDtZQUN2RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQ2xDLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FDekMsQ0FBQztZQUNGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLG1CQUFhLEtBQUssQ0FBQyxNQUFNLEVBQUEsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUVqRSxnREFBZ0Q7WUFDaEQsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2xDLEdBQUcsQ0FBQyxjQUFjLENBQUM7b0JBQ2pCLFFBQVEsRUFBRSxRQUFRO29CQUNsQixLQUFLLEVBQUUsT0FBTztvQkFDZCxNQUFNLEVBQUUsU0FBUztpQkFDbEIsQ0FBQyxDQUFDO2FBQ0o7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7U0FDdEU7SUFDSCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDekM7SUFDSCxDQUFDOzs7Ozs7SUFFTyxvQkFBb0IsQ0FBQyxFQUFlO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtZQUM3QixPQUFPLEtBQUssQ0FBQztTQUNkOztjQUNLLElBQUksR0FBRyxFQUFFLENBQUMscUJBQXFCLEVBQUU7UUFDdkMsT0FBTyxDQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQztZQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVTtZQUMvQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FDaEQsQ0FBQztJQUNKLENBQUM7O0FBcEVNLDRCQUFPLEdBQUcsa0JBQWtCLENBQUM7O1lBTHJDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixpOERBQTRDO2FBQzdDOzs7O1lBUm1CLFNBQVM7WUFFcEIscUJBQXFCOzs7c0JBZTNCLFNBQVMsU0FBQyxtQkFBbUI7MkJBTzdCLFNBQVMsU0FBQyxjQUFjOzs7O0lBZHpCLDZCQUFvQzs7SUFFcEMsd0NBQWdDOztJQUVoQywrQ0FBd0I7O0lBQ3hCLGlEQUFzQzs7SUFTdEMsNENBQW9EOzs7OztJQU9sRCxzQ0FBMkI7Ozs7O0lBQzNCLGtEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVJUHJvZHVjdCwgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3VpL3BhZ2VzL3Byb2R1Y3QtcGFnZS9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0VGFic091dGxldHMgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0LW91dGxldHMubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LXRhYnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC10YWJzLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBzdGF0aWMgb3V0bGV0cyA9IFByb2R1Y3RUYWJzT3V0bGV0cztcblxuICBwcm9kdWN0JDogT2JzZXJ2YWJsZTxVSVByb2R1Y3Q+O1xuXG4gIGlzV3JpdGluZ1JldmlldyA9IGZhbHNlO1xuICBhY3RpdmF0ZWRFbGVtZW50czogSFRNTEVsZW1lbnRbXSA9IFtdO1xuXG4gIEBWaWV3Q2hpbGQoJ2Rlc2NyaXB0aW9uSGVhZGVyJylcbiAgc2V0IGluaXRpYWwocmVmOiBFbGVtZW50UmVmKSB7XG4gICAgaWYgKHJlZikge1xuICAgICAgcmVmLm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICB9XG4gIH1cblxuICBAVmlld0NoaWxkKCdyZXZpZXdIZWFkZXInKSByZXZpZXdIZWFkZXI6IEVsZW1lbnRSZWY7XG5cbiAgZ2V0IG91dGxldHMoKSB7XG4gICAgcmV0dXJuIFByb2R1Y3RUYWJzQ29tcG9uZW50Lm91dGxldHM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWYsXG4gICAgcHJvdGVjdGVkIGN1cnJlbnRQYWdlU2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnByb2R1Y3QkID0gdGhpcy5jdXJyZW50UGFnZVNlcnZpY2UuZ2V0UHJvZHVjdCgpO1xuICB9XG5cbiAgc2VsZWN0KGV2ZW50OiBNb3VzZUV2ZW50LCB0YWI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYWN0aXZhdGVkRWxlbWVudHMuaW5kZXhPZih0YWIpID09PSAtMSkge1xuICAgICAgLy8gcmVtb3ZlIGFjdGl2ZSBjbGFzcyBvbiBib3RoIGhlYWRlciBhbmQgY29udGVudCBwYW5lbFxuICAgICAgdGhpcy5hY3RpdmF0ZWRFbGVtZW50cy5mb3JFYWNoKGVsID0+XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScsICd0b2dnbGVkJylcbiAgICAgICk7XG4gICAgICB0aGlzLmFjdGl2YXRlZEVsZW1lbnRzID0gWzxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQsIHRhYl07XG4gICAgICB0aGlzLmFjdGl2YXRlZEVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJykpO1xuXG4gICAgICAvLyBvbmx5IHNjcm9sbCBpZiB0aGUgZWxlbWVudCBpcyBub3QgeWV0IHZpc2libGVcbiAgICAgIGlmICh0aGlzLmlzRWxlbWVudE91dFZpZXdwb3J0KHRhYikpIHtcbiAgICAgICAgdGFiLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgICAgYmxvY2s6ICdzdGFydCcsXG4gICAgICAgICAgaW5saW5lOiAnbmVhcmVzdCcsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2YXRlZEVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZSgndG9nZ2xlZCcpKTtcbiAgICB9XG4gIH1cblxuICBvcGVuUmV2aWV3KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJldmlld0hlYWRlci5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLnJldmlld0hlYWRlci5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0VsZW1lbnRPdXRWaWV3cG9ydChlbDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIChcbiAgICAgIHJlY3QuYm90dG9tIDwgMCB8fFxuICAgICAgcmVjdC5yaWdodCA8IDAgfHxcbiAgICAgIHJlY3QubGVmdCA+IHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdy5pbm5lcldpZHRoIHx8XG4gICAgICByZWN0LnRvcCA+IHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdy5pbm5lckhlaWdodFxuICAgICk7XG4gIH1cbn1cbiJdfQ==