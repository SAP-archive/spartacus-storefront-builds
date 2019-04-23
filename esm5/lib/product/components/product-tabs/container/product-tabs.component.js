/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { CurrentProductService } from '../../../../ui/pages/product-page/current-product.service';
import { ProductTabsOutlets } from '../../../product-outlets.model';
var ProductTabsComponent = /** @class */ (function () {
    function ProductTabsComponent(winRef, currentPageService) {
        this.winRef = winRef;
        this.currentPageService = currentPageService;
        this.isWritingReview = false;
        this.activatedElements = [];
    }
    Object.defineProperty(ProductTabsComponent.prototype, "initial", {
        set: /**
         * @param {?} ref
         * @return {?}
         */
        function (ref) {
            if (ref) {
                ref.nativeElement.click();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductTabsComponent.prototype, "outlets", {
        get: /**
         * @return {?}
         */
        function () {
            return ProductTabsComponent.outlets;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ProductTabsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.product$ = this.currentPageService.getProduct();
    };
    /**
     * @param {?} event
     * @param {?} tab
     * @return {?}
     */
    ProductTabsComponent.prototype.select = /**
     * @param {?} event
     * @param {?} tab
     * @return {?}
     */
    function (event, tab) {
        if (this.activatedElements.indexOf(tab) === -1) {
            // remove active class on both header and content panel
            this.activatedElements.forEach(function (el) {
                return el.classList.remove('active', 'toggled');
            });
            this.activatedElements = [(/** @type {?} */ (event.target)), tab];
            this.activatedElements.forEach(function (el) { return el.classList.add('active'); });
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
            this.activatedElements.forEach(function (el) { return el.classList.toggle('toggled'); });
        }
    };
    /**
     * @return {?}
     */
    ProductTabsComponent.prototype.openReview = /**
     * @return {?}
     */
    function () {
        if (this.reviewHeader.nativeElement) {
            this.reviewHeader.nativeElement.click();
        }
    };
    /**
     * @private
     * @param {?} el
     * @return {?}
     */
    ProductTabsComponent.prototype.isElementOutViewport = /**
     * @private
     * @param {?} el
     * @return {?}
     */
    function (el) {
        if (!this.winRef.nativeWindow) {
            return false;
        }
        /** @type {?} */
        var rect = el.getBoundingClientRect();
        return (rect.bottom < 0 ||
            rect.right < 0 ||
            rect.left > this.winRef.nativeWindow.innerWidth ||
            rect.top > this.winRef.nativeWindow.innerHeight);
    };
    ProductTabsComponent.outlets = ProductTabsOutlets;
    ProductTabsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-tabs',
                    template: "<div class=\"details\" *ngIf=\"(product$ | async) as product\">\n  <ng-container *cxOutlet=\"outlets.DESCRIPTION\">\n    <h3 #descriptionHeader (click)=\"select($event, description)\">\n      {{ 'productDetails.label.productDetails' | cxTranslate }}\n    </h3>\n    <div #description>\n      <div class=\"container\" [innerHTML]=\"product?.description\"></div>\n    </div>\n  </ng-container>\n\n  <ng-container *cxOutlet=\"outlets.SPECIFICATIONS\">\n    <h3 (click)=\"select($event, specifications)\">\n      {{ 'productDetails.label.specification' | cxTranslate }}\n    </h3>\n    <div #specifications>\n      <div class=\"container\">\n        <h2>{{ 'productDetails.label.specification' | cxTranslate }}</h2>\n        <cx-product-attributes [product]=\"product\"></cx-product-attributes>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *cxOutlet=\"outlets.REVIEWS\">\n    <h3 #reviewHeader (click)=\"select($event, reviews)\">\n      {{ 'productDetails.label.reviews' | cxTranslate }} ({{\n        product?.numberOfReviews\n      }})\n    </h3>\n    <div #reviews>\n      <div class=\"container\">\n        <h2>\n          {{ 'productDetails.label.reviews' | cxTranslate }} ({{\n            product?.numberOfReviews\n          }})\n        </h2>\n        <cx-product-reviews\n          class=\"container\"\n          [(isWritingReview)]=\"isWritingReview\"\n          [product]=\"product\"\n        ></cx-product-reviews>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *cxOutlet=\"outlets.SHIPPING\">\n    <h3 (click)=\"select($event, shipping)\">\n      {{ 'productDetails.label.shipping' | cxTranslate }}\n    </h3>\n    <div #shipping>\n      <div class=\"container\">\n        <h2>{{ 'productDetails.label.shipping' | cxTranslate }}</h2>\n        <ng-container\n          [cxComponentWrapper]=\"{\n            flexType: 'CMSTabParagraphComponent',\n            uid: 'deliveryTab'\n          }\"\n        ></ng-container>\n      </div>\n    </div>\n  </ng-container>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    ProductTabsComponent.ctorParameters = function () { return [
        { type: WindowRef },
        { type: CurrentProductService }
    ]; };
    ProductTabsComponent.propDecorators = {
        initial: [{ type: ViewChild, args: ['descriptionHeader',] }],
        reviewHeader: [{ type: ViewChild, args: ['reviewHeader',] }]
    };
    return ProductTabsComponent;
}());
export { ProductTabsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC10YWJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdC10YWJzL2NvbnRhaW5lci9wcm9kdWN0LXRhYnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFXLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXJELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXBFO0lBeUJFLDhCQUNZLE1BQWlCLEVBQ2pCLGtCQUF5QztRQUR6QyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBdUI7UUFsQnJELG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLHNCQUFpQixHQUFrQixFQUFFLENBQUM7SUFrQm5DLENBQUM7SUFoQkosc0JBQ0kseUNBQU87Ozs7O1FBRFgsVUFDWSxHQUFlO1lBQ3pCLElBQUksR0FBRyxFQUFFO2dCQUNQLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDM0I7UUFDSCxDQUFDOzs7T0FBQTtJQUlELHNCQUFJLHlDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLG9CQUFvQixDQUFDLE9BQU8sQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTs7OztJQU9ELHVDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3ZELENBQUM7Ozs7OztJQUVELHFDQUFNOzs7OztJQUFOLFVBQU8sS0FBaUIsRUFBRSxHQUFnQjtRQUN4QyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDOUMsdURBQXVEO1lBQ3ZELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBQSxFQUFFO2dCQUMvQixPQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUM7WUFBeEMsQ0FBd0MsQ0FDekMsQ0FBQztZQUNGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLG1CQUFhLEtBQUssQ0FBQyxNQUFNLEVBQUEsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQztZQUVqRSxnREFBZ0Q7WUFDaEQsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2xDLEdBQUcsQ0FBQyxjQUFjLENBQUM7b0JBQ2pCLFFBQVEsRUFBRSxRQUFRO29CQUNsQixLQUFLLEVBQUUsT0FBTztvQkFDZCxNQUFNLEVBQUUsU0FBUztpQkFDbEIsQ0FBQyxDQUFDO2FBQ0o7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7U0FDdEU7SUFDSCxDQUFDOzs7O0lBRUQseUNBQVU7OztJQUFWO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRTtZQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN6QztJQUNILENBQUM7Ozs7OztJQUVPLG1EQUFvQjs7Ozs7SUFBNUIsVUFBNkIsRUFBZTtRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDN0IsT0FBTyxLQUFLLENBQUM7U0FDZDs7WUFDSyxJQUFJLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixFQUFFO1FBQ3ZDLE9BQU8sQ0FDTCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUM7WUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVU7WUFDL0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQ2hELENBQUM7SUFDSixDQUFDO0lBcEVNLDRCQUFPLEdBQUcsa0JBQWtCLENBQUM7O2dCQUxyQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsMitEQUE0QztpQkFDN0M7Ozs7Z0JBUmlCLFNBQVM7Z0JBRWxCLHFCQUFxQjs7OzBCQWUzQixTQUFTLFNBQUMsbUJBQW1COytCQU83QixTQUFTLFNBQUMsY0FBYzs7SUF1RDNCLDJCQUFDO0NBQUEsQUExRUQsSUEwRUM7U0F0RVksb0JBQW9COzs7SUFDL0IsNkJBQW9DOztJQUVwQyx3Q0FBOEI7O0lBRTlCLCtDQUF3Qjs7SUFDeEIsaURBQXNDOztJQVN0Qyw0Q0FBb0Q7Ozs7O0lBT2xELHNDQUEyQjs7Ozs7SUFDM0Isa0RBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdCwgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3VpL3BhZ2VzL3Byb2R1Y3QtcGFnZS9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0VGFic091dGxldHMgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0LW91dGxldHMubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LXRhYnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC10YWJzLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBzdGF0aWMgb3V0bGV0cyA9IFByb2R1Y3RUYWJzT3V0bGV0cztcblxuICBwcm9kdWN0JDogT2JzZXJ2YWJsZTxQcm9kdWN0PjtcblxuICBpc1dyaXRpbmdSZXZpZXcgPSBmYWxzZTtcbiAgYWN0aXZhdGVkRWxlbWVudHM6IEhUTUxFbGVtZW50W10gPSBbXTtcblxuICBAVmlld0NoaWxkKCdkZXNjcmlwdGlvbkhlYWRlcicpXG4gIHNldCBpbml0aWFsKHJlZjogRWxlbWVudFJlZikge1xuICAgIGlmIChyZWYpIHtcbiAgICAgIHJlZi5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgQFZpZXdDaGlsZCgncmV2aWV3SGVhZGVyJykgcmV2aWV3SGVhZGVyOiBFbGVtZW50UmVmO1xuXG4gIGdldCBvdXRsZXRzKCkge1xuICAgIHJldHVybiBQcm9kdWN0VGFic0NvbXBvbmVudC5vdXRsZXRzO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmLFxuICAgIHByb3RlY3RlZCBjdXJyZW50UGFnZVNlcnZpY2U6IEN1cnJlbnRQcm9kdWN0U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9kdWN0JCA9IHRoaXMuY3VycmVudFBhZ2VTZXJ2aWNlLmdldFByb2R1Y3QoKTtcbiAgfVxuXG4gIHNlbGVjdChldmVudDogTW91c2VFdmVudCwgdGFiOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFjdGl2YXRlZEVsZW1lbnRzLmluZGV4T2YodGFiKSA9PT0gLTEpIHtcbiAgICAgIC8vIHJlbW92ZSBhY3RpdmUgY2xhc3Mgb24gYm90aCBoZWFkZXIgYW5kIGNvbnRlbnQgcGFuZWxcbiAgICAgIHRoaXMuYWN0aXZhdGVkRWxlbWVudHMuZm9yRWFjaChlbCA9PlxuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnLCAndG9nZ2xlZCcpXG4gICAgICApO1xuICAgICAgdGhpcy5hY3RpdmF0ZWRFbGVtZW50cyA9IFs8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0LCB0YWJdO1xuICAgICAgdGhpcy5hY3RpdmF0ZWRFbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpKTtcblxuICAgICAgLy8gb25seSBzY3JvbGwgaWYgdGhlIGVsZW1lbnQgaXMgbm90IHlldCB2aXNpYmxlXG4gICAgICBpZiAodGhpcy5pc0VsZW1lbnRPdXRWaWV3cG9ydCh0YWIpKSB7XG4gICAgICAgIHRhYi5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICAgIGJsb2NrOiAnc3RhcnQnLFxuICAgICAgICAgIGlubGluZTogJ25lYXJlc3QnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmF0ZWRFbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ3RvZ2dsZWQnKSk7XG4gICAgfVxuICB9XG5cbiAgb3BlblJldmlldygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZXZpZXdIZWFkZXIubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5yZXZpZXdIZWFkZXIubmF0aXZlRWxlbWVudC5jbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNFbGVtZW50T3V0Vmlld3BvcnQoZWw6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiAoXG4gICAgICByZWN0LmJvdHRvbSA8IDAgfHxcbiAgICAgIHJlY3QucmlnaHQgPCAwIHx8XG4gICAgICByZWN0LmxlZnQgPiB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cuaW5uZXJXaWR0aCB8fFxuICAgICAgcmVjdC50b3AgPiB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cuaW5uZXJIZWlnaHRcbiAgICApO1xuICB9XG59XG4iXX0=