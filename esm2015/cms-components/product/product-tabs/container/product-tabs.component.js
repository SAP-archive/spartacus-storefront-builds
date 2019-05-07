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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC10YWJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC10YWJzL2NvbnRhaW5lci9wcm9kdWN0LXRhYnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFhLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBTWpFLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBcUIvQixZQUNZLE1BQWlCLEVBQ2pCLGtCQUF5QztRQUR6QyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBdUI7UUFsQnJELG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLHNCQUFpQixHQUFrQixFQUFFLENBQUM7SUFrQm5DLENBQUM7Ozs7O0lBaEJKLElBQ0ksT0FBTyxDQUFDLEdBQWU7UUFDekIsSUFBSSxHQUFHLEVBQUU7WUFDUCxHQUFHLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7OztJQUlELElBQUksT0FBTztRQUNULE9BQU8sb0JBQW9CLENBQUMsT0FBTyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFPRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQWlCLEVBQUUsR0FBZ0I7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDekMsdURBQXVEO1lBQ3ZELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FDbEMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUN6QyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsbUJBQWEsS0FBSyxDQUFDLE1BQU0sRUFBQSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBRWpFLGdEQUFnRDtZQUNoRCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDbEMsR0FBRyxDQUFDLGNBQWMsQ0FBQztvQkFDakIsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLEtBQUssRUFBRSxPQUFPO29CQUNkLE1BQU0sRUFBRSxTQUFTO2lCQUNsQixDQUFDLENBQUM7YUFDSjtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRTtZQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN6QztJQUNILENBQUM7Ozs7OztJQUVPLG9CQUFvQixDQUFDLEVBQWU7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQzdCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7O2NBQ0ssSUFBSSxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRTtRQUN2QyxPQUFPLENBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDO1lBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDO1lBQ2QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxVQUFVO1lBQy9DLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUNoRCxDQUFDO0lBQ0osQ0FBQzs7QUFwRU0sNEJBQU8sR0FBRyxrQkFBa0IsQ0FBQzs7WUFMckMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLGk4REFBNEM7YUFDN0M7Ozs7WUFSbUIsU0FBUztZQUVwQixxQkFBcUI7OztzQkFlM0IsU0FBUyxTQUFDLG1CQUFtQjsyQkFPN0IsU0FBUyxTQUFDLGNBQWM7Ozs7SUFkekIsNkJBQW9DOztJQUVwQyx3Q0FBZ0M7O0lBRWhDLCtDQUF3Qjs7SUFDeEIsaURBQXNDOztJQVN0Qyw0Q0FBb0Q7Ozs7O0lBT2xELHNDQUEyQjs7Ozs7SUFDM0Isa0RBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVUlQcm9kdWN0LCBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY3VycmVudC1wcm9kdWN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFRhYnNPdXRsZXRzIH0gZnJvbSAnLi4vLi4vcHJvZHVjdC1vdXRsZXRzLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC10YWJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtdGFicy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc3RhdGljIG91dGxldHMgPSBQcm9kdWN0VGFic091dGxldHM7XG5cbiAgcHJvZHVjdCQ6IE9ic2VydmFibGU8VUlQcm9kdWN0PjtcblxuICBpc1dyaXRpbmdSZXZpZXcgPSBmYWxzZTtcbiAgYWN0aXZhdGVkRWxlbWVudHM6IEhUTUxFbGVtZW50W10gPSBbXTtcblxuICBAVmlld0NoaWxkKCdkZXNjcmlwdGlvbkhlYWRlcicpXG4gIHNldCBpbml0aWFsKHJlZjogRWxlbWVudFJlZikge1xuICAgIGlmIChyZWYpIHtcbiAgICAgIHJlZi5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgQFZpZXdDaGlsZCgncmV2aWV3SGVhZGVyJykgcmV2aWV3SGVhZGVyOiBFbGVtZW50UmVmO1xuXG4gIGdldCBvdXRsZXRzKCkge1xuICAgIHJldHVybiBQcm9kdWN0VGFic0NvbXBvbmVudC5vdXRsZXRzO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmLFxuICAgIHByb3RlY3RlZCBjdXJyZW50UGFnZVNlcnZpY2U6IEN1cnJlbnRQcm9kdWN0U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9kdWN0JCA9IHRoaXMuY3VycmVudFBhZ2VTZXJ2aWNlLmdldFByb2R1Y3QoKTtcbiAgfVxuXG4gIHNlbGVjdChldmVudDogTW91c2VFdmVudCwgdGFiOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5hY3RpdmF0ZWRFbGVtZW50cy5pbmNsdWRlcyh0YWIpKSB7XG4gICAgICAvLyByZW1vdmUgYWN0aXZlIGNsYXNzIG9uIGJvdGggaGVhZGVyIGFuZCBjb250ZW50IHBhbmVsXG4gICAgICB0aGlzLmFjdGl2YXRlZEVsZW1lbnRzLmZvckVhY2goZWwgPT5cbiAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJywgJ3RvZ2dsZWQnKVxuICAgICAgKTtcbiAgICAgIHRoaXMuYWN0aXZhdGVkRWxlbWVudHMgPSBbPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCwgdGFiXTtcbiAgICAgIHRoaXMuYWN0aXZhdGVkRWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKSk7XG5cbiAgICAgIC8vIG9ubHkgc2Nyb2xsIGlmIHRoZSBlbGVtZW50IGlzIG5vdCB5ZXQgdmlzaWJsZVxuICAgICAgaWYgKHRoaXMuaXNFbGVtZW50T3V0Vmlld3BvcnQodGFiKSkge1xuICAgICAgICB0YWIuc2Nyb2xsSW50b1ZpZXcoe1xuICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICAgICAgICBibG9jazogJ3N0YXJ0JyxcbiAgICAgICAgICBpbmxpbmU6ICduZWFyZXN0JyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZhdGVkRWxlbWVudHMuZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QudG9nZ2xlKCd0b2dnbGVkJykpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW5SZXZpZXcoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucmV2aWV3SGVhZGVyLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMucmV2aWV3SGVhZGVyLm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGlzRWxlbWVudE91dFZpZXdwb3J0KGVsOiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy53aW5SZWYubmF0aXZlV2luZG93KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gKFxuICAgICAgcmVjdC5ib3R0b20gPCAwIHx8XG4gICAgICByZWN0LnJpZ2h0IDwgMCB8fFxuICAgICAgcmVjdC5sZWZ0ID4gdGhpcy53aW5SZWYubmF0aXZlV2luZG93LmlubmVyV2lkdGggfHxcbiAgICAgIHJlY3QudG9wID4gdGhpcy53aW5SZWYubmF0aXZlV2luZG93LmlubmVySGVpZ2h0XG4gICAgKTtcbiAgfVxufVxuIl19