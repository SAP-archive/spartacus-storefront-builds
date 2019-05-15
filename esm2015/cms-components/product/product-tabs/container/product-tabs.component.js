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
        if (!this.activatedElements.includes(tab)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC10YWJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC10YWJzL2NvbnRhaW5lci9wcm9kdWN0LXRhYnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFXLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXJELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBTWpFLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBcUIvQixZQUNZLE1BQWlCLEVBQ2pCLGtCQUF5QztRQUR6QyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBdUI7UUFsQnJELG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLHNCQUFpQixHQUFrQixFQUFFLENBQUM7SUFrQm5DLENBQUM7Ozs7O0lBaEJKLElBQ0ksT0FBTyxDQUFDLEdBQWU7UUFDekIsSUFBSSxHQUFHLEVBQUU7WUFDUCxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7OztJQUlELElBQUksT0FBTztRQUNULE9BQU8sb0JBQW9CLENBQUMsT0FBTyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFPRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQWlCLEVBQUUsR0FBZ0I7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDekMsdURBQXVEO1lBQ3ZELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FDbEMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUN6QyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsbUJBQWEsS0FBSyxDQUFDLE1BQU0sRUFBQSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBRWpFLGdEQUFnRDtZQUNoRCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDbEMsR0FBRyxDQUFDLGNBQWMsQ0FBQztvQkFDakIsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLEtBQUssRUFBRSxPQUFPO29CQUNkLE1BQU0sRUFBRSxTQUFTO2lCQUNsQixDQUFDLENBQUM7YUFDSjtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRTtZQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN6QztJQUNILENBQUM7Ozs7OztJQUVPLG9CQUFvQixDQUFDLEVBQWU7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQzdCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7O2NBQ0ssSUFBSSxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRTtRQUN2QyxPQUFPLENBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVO1lBQy9DLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUNoRCxDQUFDO0lBQ0osQ0FBQzs7QUFwRU0sNEJBQU8sR0FBRyxrQkFBa0IsQ0FBQzs7WUFMckMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLGk4REFBNEM7YUFDN0M7Ozs7WUFSaUIsU0FBUztZQUVsQixxQkFBcUI7OztzQkFlM0IsU0FBUyxTQUFDLG1CQUFtQjsyQkFPN0IsU0FBUyxTQUFDLGNBQWM7Ozs7SUFkekIsNkJBQW9DOztJQUVwQyx3Q0FBOEI7O0lBRTlCLCtDQUF3Qjs7SUFDeEIsaURBQXNDOztJQVN0Qyw0Q0FBb0Q7Ozs7O0lBT2xELHNDQUEyQjs7Ozs7SUFDM0Isa0RBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdCwgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uLy4uL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RUYWJzT3V0bGV0cyB9IGZyb20gJy4uLy4uL3Byb2R1Y3Qtb3V0bGV0cy5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtdGFicycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LXRhYnMuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0VGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHN0YXRpYyBvdXRsZXRzID0gUHJvZHVjdFRhYnNPdXRsZXRzO1xuXG4gIHByb2R1Y3QkOiBPYnNlcnZhYmxlPFByb2R1Y3Q+O1xuXG4gIGlzV3JpdGluZ1JldmlldyA9IGZhbHNlO1xuICBhY3RpdmF0ZWRFbGVtZW50czogSFRNTEVsZW1lbnRbXSA9IFtdO1xuXG4gIEBWaWV3Q2hpbGQoJ2Rlc2NyaXB0aW9uSGVhZGVyJylcbiAgc2V0IGluaXRpYWwocmVmOiBFbGVtZW50UmVmKSB7XG4gICAgaWYgKHJlZikge1xuICAgICAgcmVmLm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICB9XG4gIH1cblxuICBAVmlld0NoaWxkKCdyZXZpZXdIZWFkZXInKSByZXZpZXdIZWFkZXI6IEVsZW1lbnRSZWY7XG5cbiAgZ2V0IG91dGxldHMoKSB7XG4gICAgcmV0dXJuIFByb2R1Y3RUYWJzQ29tcG9uZW50Lm91dGxldHM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWYsXG4gICAgcHJvdGVjdGVkIGN1cnJlbnRQYWdlU2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnByb2R1Y3QkID0gdGhpcy5jdXJyZW50UGFnZVNlcnZpY2UuZ2V0UHJvZHVjdCgpO1xuICB9XG5cbiAgc2VsZWN0KGV2ZW50OiBNb3VzZUV2ZW50LCB0YWI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmFjdGl2YXRlZEVsZW1lbnRzLmluY2x1ZGVzKHRhYikpIHtcbiAgICAgIC8vIHJlbW92ZSBhY3RpdmUgY2xhc3Mgb24gYm90aCBoZWFkZXIgYW5kIGNvbnRlbnQgcGFuZWxcbiAgICAgIHRoaXMuYWN0aXZhdGVkRWxlbWVudHMuZm9yRWFjaChlbCA9PlxuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnLCAndG9nZ2xlZCcpXG4gICAgICApO1xuICAgICAgdGhpcy5hY3RpdmF0ZWRFbGVtZW50cyA9IFs8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0LCB0YWJdO1xuICAgICAgdGhpcy5hY3RpdmF0ZWRFbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpKTtcblxuICAgICAgLy8gb25seSBzY3JvbGwgaWYgdGhlIGVsZW1lbnQgaXMgbm90IHlldCB2aXNpYmxlXG4gICAgICBpZiAodGhpcy5pc0VsZW1lbnRPdXRWaWV3cG9ydCh0YWIpKSB7XG4gICAgICAgIHRhYi5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICAgIGJsb2NrOiAnc3RhcnQnLFxuICAgICAgICAgIGlubGluZTogJ25lYXJlc3QnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmF0ZWRFbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ3RvZ2dsZWQnKSk7XG4gICAgfVxuICB9XG5cbiAgb3BlblJldmlldygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZXZpZXdIZWFkZXIubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5yZXZpZXdIZWFkZXIubmF0aXZlRWxlbWVudC5jbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNFbGVtZW50T3V0Vmlld3BvcnQoZWw6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiAoXG4gICAgICByZWN0LmJvdHRvbSA8IDAgfHxcbiAgICAgIHJlY3QucmlnaHQgPCAwIHx8XG4gICAgICByZWN0LmxlZnQgPiB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cuaW5uZXJXaWR0aCB8fFxuICAgICAgcmVjdC50b3AgPiB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cuaW5uZXJIZWlnaHRcbiAgICApO1xuICB9XG59XG4iXX0=