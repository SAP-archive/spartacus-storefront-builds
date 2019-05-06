/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { CurrentProductService } from '../../current-product.service';
import { ProductTabsOutlets } from '../../product-outlets.model';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC10YWJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC10YWJzL2NvbnRhaW5lci9wcm9kdWN0LXRhYnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFhLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBTWpFLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBcUIvQixZQUNZLE1BQWlCLEVBQ2pCLGtCQUF5QztRQUR6QyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBdUI7UUFsQnJELG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLHNCQUFpQixHQUFrQixFQUFFLENBQUM7SUFrQm5DLENBQUM7Ozs7O0lBaEJKLElBQ0ksT0FBTyxDQUFDLEdBQWU7UUFDekIsSUFBSSxHQUFHLEVBQUU7WUFDUCxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7OztJQUlELElBQUksT0FBTztRQUNULE9BQU8sb0JBQW9CLENBQUMsT0FBTyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFPRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQWlCLEVBQUUsR0FBZ0I7UUFDeEMsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzlDLHVEQUF1RDtZQUN2RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQ2xDLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FDekMsQ0FBQztZQUNGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLG1CQUFhLEtBQUssQ0FBQyxNQUFNLEVBQUEsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUVqRSxnREFBZ0Q7WUFDaEQsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2xDLEdBQUcsQ0FBQyxjQUFjLENBQUM7b0JBQ2pCLFFBQVEsRUFBRSxRQUFRO29CQUNsQixLQUFLLEVBQUUsT0FBTztvQkFDZCxNQUFNLEVBQUUsU0FBUztpQkFDbEIsQ0FBQyxDQUFDO2FBQ0o7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7U0FDdEU7SUFDSCxDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDekM7SUFDSCxDQUFDOzs7Ozs7SUFFTyxvQkFBb0IsQ0FBQyxFQUFlO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtZQUM3QixPQUFPLEtBQUssQ0FBQztTQUNkOztjQUNLLElBQUksR0FBRyxFQUFFLENBQUMscUJBQXFCLEVBQUU7UUFDdkMsT0FBTyxDQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQztZQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVTtZQUMvQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FDaEQsQ0FBQztJQUNKLENBQUM7O0FBcEVNLDRCQUFPLEdBQUcsa0JBQWtCLENBQUM7O1lBTHJDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixpOERBQTRDO2FBQzdDOzs7O1lBUm1CLFNBQVM7WUFFcEIscUJBQXFCOzs7c0JBZTNCLFNBQVMsU0FBQyxtQkFBbUI7MkJBTzdCLFNBQVMsU0FBQyxjQUFjOzs7O0lBZHpCLDZCQUFvQzs7SUFFcEMsd0NBQWdDOztJQUVoQywrQ0FBd0I7O0lBQ3hCLGlEQUFzQzs7SUFTdEMsNENBQW9EOzs7OztJQU9sRCxzQ0FBMkI7Ozs7O0lBQzNCLGtEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFVJUHJvZHVjdCwgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uLy4uL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RUYWJzT3V0bGV0cyB9IGZyb20gJy4uLy4uL3Byb2R1Y3Qtb3V0bGV0cy5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtdGFicycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LXRhYnMuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0VGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHN0YXRpYyBvdXRsZXRzID0gUHJvZHVjdFRhYnNPdXRsZXRzO1xuXG4gIHByb2R1Y3QkOiBPYnNlcnZhYmxlPFVJUHJvZHVjdD47XG5cbiAgaXNXcml0aW5nUmV2aWV3ID0gZmFsc2U7XG4gIGFjdGl2YXRlZEVsZW1lbnRzOiBIVE1MRWxlbWVudFtdID0gW107XG5cbiAgQFZpZXdDaGlsZCgnZGVzY3JpcHRpb25IZWFkZXInKVxuICBzZXQgaW5pdGlhbChyZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBpZiAocmVmKSB7XG4gICAgICByZWYubmF0aXZlRWxlbWVudC5jbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ3Jldmlld0hlYWRlcicpIHJldmlld0hlYWRlcjogRWxlbWVudFJlZjtcblxuICBnZXQgb3V0bGV0cygpIHtcbiAgICByZXR1cm4gUHJvZHVjdFRhYnNDb21wb25lbnQub3V0bGV0cztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZixcbiAgICBwcm90ZWN0ZWQgY3VycmVudFBhZ2VTZXJ2aWNlOiBDdXJyZW50UHJvZHVjdFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucHJvZHVjdCQgPSB0aGlzLmN1cnJlbnRQYWdlU2VydmljZS5nZXRQcm9kdWN0KCk7XG4gIH1cblxuICBzZWxlY3QoZXZlbnQ6IE1vdXNlRXZlbnQsIHRhYjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3RpdmF0ZWRFbGVtZW50cy5pbmRleE9mKHRhYikgPT09IC0xKSB7XG4gICAgICAvLyByZW1vdmUgYWN0aXZlIGNsYXNzIG9uIGJvdGggaGVhZGVyIGFuZCBjb250ZW50IHBhbmVsXG4gICAgICB0aGlzLmFjdGl2YXRlZEVsZW1lbnRzLmZvckVhY2goZWwgPT5cbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJywgJ3RvZ2dsZWQnKVxuICAgICAgKTtcbiAgICAgIHRoaXMuYWN0aXZhdGVkRWxlbWVudHMgPSBbPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCwgdGFiXTtcbiAgICAgIHRoaXMuYWN0aXZhdGVkRWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKSk7XG5cbiAgICAgIC8vIG9ubHkgc2Nyb2xsIGlmIHRoZSBlbGVtZW50IGlzIG5vdCB5ZXQgdmlzaWJsZVxuICAgICAgaWYgKHRoaXMuaXNFbGVtZW50T3V0Vmlld3BvcnQodGFiKSkge1xuICAgICAgICB0YWIuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgICAgICBibG9jazogJ3N0YXJ0JyxcbiAgICAgICAgICBpbmxpbmU6ICduZWFyZXN0JyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZhdGVkRWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKCd0b2dnbGVkJykpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW5SZXZpZXcoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmV2aWV3SGVhZGVyLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMucmV2aWV3SGVhZGVyLm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGlzRWxlbWVudE91dFZpZXdwb3J0KGVsOiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy53aW5SZWYubmF0aXZlV2luZG93KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gKFxuICAgICAgcmVjdC5ib3R0b20gPCAwIHx8XG4gICAgICByZWN0LnJpZ2h0IDwgMCB8fFxuICAgICAgcmVjdC5sZWZ0ID4gdGhpcy53aW5SZWYubmF0aXZlV2luZG93LmlubmVyV2lkdGggfHxcbiAgICAgIHJlY3QudG9wID4gdGhpcy53aW5SZWYubmF0aXZlV2luZG93LmlubmVySGVpZ2h0XG4gICAgKTtcbiAgfVxufVxuIl19