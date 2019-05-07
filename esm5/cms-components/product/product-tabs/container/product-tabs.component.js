/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { CurrentProductService } from '../../current-product.service';
import { ProductTabsOutlets } from '../../product-outlets.model';
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
        if (!this.activatedElements.includes(tab)) {
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
                    template: "<div class=\"details\" *ngIf=\"(product$ | async) as product\">\n  <ng-container *cxOutlet=\"outlets.DESCRIPTION\">\n    <h3 #descriptionHeader (click)=\"select($event, description)\">\n      {{ 'productDetails.productDetails' | cxTranslate }}\n    </h3>\n    <div #description>\n      <div class=\"container\" [innerHTML]=\"product?.description\"></div>\n    </div>\n  </ng-container>\n\n  <ng-container *cxOutlet=\"outlets.SPECIFICATIONS\">\n    <h3 (click)=\"select($event, specifications)\">\n      {{ 'productDetails.specification' | cxTranslate }}\n    </h3>\n    <div #specifications>\n      <div class=\"container\">\n        <h2>{{ 'productDetails.specification' | cxTranslate }}</h2>\n        <cx-product-attributes [product]=\"product\"></cx-product-attributes>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *cxOutlet=\"outlets.REVIEWS\">\n    <h3 #reviewHeader (click)=\"select($event, reviews)\">\n      {{ 'productDetails.reviews' | cxTranslate }} ({{\n        product?.numberOfReviews\n      }})\n    </h3>\n    <div #reviews>\n      <div class=\"container\">\n        <h2>\n          {{ 'productDetails.reviews' | cxTranslate }} ({{\n            product?.numberOfReviews\n          }})\n        </h2>\n        <cx-product-reviews\n          class=\"container\"\n          [(isWritingReview)]=\"isWritingReview\"\n          [product]=\"product\"\n        ></cx-product-reviews>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *cxOutlet=\"outlets.SHIPPING\">\n    <h3 (click)=\"select($event, shipping)\">\n      {{ 'productDetails.shipping' | cxTranslate }}\n    </h3>\n    <div #shipping>\n      <div class=\"container\">\n        <h2>{{ 'productDetails.shipping' | cxTranslate }}</h2>\n        <ng-container\n          [cxComponentWrapper]=\"{\n            flexType: 'CMSTabParagraphComponent',\n            uid: 'deliveryTab'\n          }\"\n        ></ng-container>\n      </div>\n    </div>\n  </ng-container>\n</div>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC10YWJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC10YWJzL2NvbnRhaW5lci9wcm9kdWN0LXRhYnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFhLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXZELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRWpFO0lBeUJFLDhCQUNZLE1BQWlCLEVBQ2pCLGtCQUF5QztRQUR6QyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBdUI7UUFsQnJELG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLHNCQUFpQixHQUFrQixFQUFFLENBQUM7SUFrQm5DLENBQUM7SUFoQkosc0JBQ0kseUNBQU87Ozs7O1FBRFgsVUFDWSxHQUFlO1lBQ3pCLElBQUksR0FBRyxFQUFFO2dCQUNQLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDM0I7UUFDSCxDQUFDOzs7T0FBQTtJQUlELHNCQUFJLHlDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLG9CQUFvQixDQUFDLE9BQU8sQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTs7OztJQU9ELHVDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3ZELENBQUM7Ozs7OztJQUVELHFDQUFNOzs7OztJQUFOLFVBQU8sS0FBaUIsRUFBRSxHQUFnQjtRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN6Qyx1REFBdUQ7WUFDdkQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUU7Z0JBQy9CLE9BQUEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQztZQUF4QyxDQUF3QyxDQUN6QyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsbUJBQWEsS0FBSyxDQUFDLE1BQU0sRUFBQSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO1lBRWpFLGdEQUFnRDtZQUNoRCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDbEMsR0FBRyxDQUFDLGNBQWMsQ0FBQztvQkFDakIsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLEtBQUssRUFBRSxPQUFPO29CQUNkLE1BQU0sRUFBRSxTQUFTO2lCQUNsQixDQUFDLENBQUM7YUFDSjtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUM7Ozs7SUFFRCx5Q0FBVTs7O0lBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFO1lBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sbURBQW9COzs7OztJQUE1QixVQUE2QixFQUFlO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtZQUM3QixPQUFPLEtBQUssQ0FBQztTQUNkOztZQUNLLElBQUksR0FBRyxFQUFFLENBQUMscUJBQXFCLEVBQUU7UUFDdkMsT0FBTyxDQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQztZQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVTtZQUMvQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FDaEQsQ0FBQztJQUNKLENBQUM7SUFwRU0sNEJBQU8sR0FBRyxrQkFBa0IsQ0FBQzs7Z0JBTHJDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixpOERBQTRDO2lCQUM3Qzs7OztnQkFSbUIsU0FBUztnQkFFcEIscUJBQXFCOzs7MEJBZTNCLFNBQVMsU0FBQyxtQkFBbUI7K0JBTzdCLFNBQVMsU0FBQyxjQUFjOztJQXVEM0IsMkJBQUM7Q0FBQSxBQTFFRCxJQTBFQztTQXRFWSxvQkFBb0I7OztJQUMvQiw2QkFBb0M7O0lBRXBDLHdDQUFnQzs7SUFFaEMsK0NBQXdCOztJQUN4QixpREFBc0M7O0lBU3RDLDRDQUFvRDs7Ozs7SUFPbEQsc0NBQTJCOzs7OztJQUMzQixrREFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBVSVByb2R1Y3QsIFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXJyZW50UHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0VGFic091dGxldHMgfSBmcm9tICcuLi8uLi9wcm9kdWN0LW91dGxldHMubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LXRhYnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC10YWJzLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBzdGF0aWMgb3V0bGV0cyA9IFByb2R1Y3RUYWJzT3V0bGV0cztcblxuICBwcm9kdWN0JDogT2JzZXJ2YWJsZTxVSVByb2R1Y3Q+O1xuXG4gIGlzV3JpdGluZ1JldmlldyA9IGZhbHNlO1xuICBhY3RpdmF0ZWRFbGVtZW50czogSFRNTEVsZW1lbnRbXSA9IFtdO1xuXG4gIEBWaWV3Q2hpbGQoJ2Rlc2NyaXB0aW9uSGVhZGVyJylcbiAgc2V0IGluaXRpYWwocmVmOiBFbGVtZW50UmVmKSB7XG4gICAgaWYgKHJlZikge1xuICAgICAgcmVmLm5hdGl2ZUVsZW1lbnQuY2xpY2soKTtcbiAgICB9XG4gIH1cblxuICBAVmlld0NoaWxkKCdyZXZpZXdIZWFkZXInKSByZXZpZXdIZWFkZXI6IEVsZW1lbnRSZWY7XG5cbiAgZ2V0IG91dGxldHMoKSB7XG4gICAgcmV0dXJuIFByb2R1Y3RUYWJzQ29tcG9uZW50Lm91dGxldHM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWYsXG4gICAgcHJvdGVjdGVkIGN1cnJlbnRQYWdlU2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnByb2R1Y3QkID0gdGhpcy5jdXJyZW50UGFnZVNlcnZpY2UuZ2V0UHJvZHVjdCgpO1xuICB9XG5cbiAgc2VsZWN0KGV2ZW50OiBNb3VzZUV2ZW50LCB0YWI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmFjdGl2YXRlZEVsZW1lbnRzLmluY2x1ZGVzKHRhYikpIHtcbiAgICAgIC8vIHJlbW92ZSBhY3RpdmUgY2xhc3Mgb24gYm90aCBoZWFkZXIgYW5kIGNvbnRlbnQgcGFuZWxcbiAgICAgIHRoaXMuYWN0aXZhdGVkRWxlbWVudHMuZm9yRWFjaChlbCA9PlxuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnLCAndG9nZ2xlZCcpXG4gICAgICApO1xuICAgICAgdGhpcy5hY3RpdmF0ZWRFbGVtZW50cyA9IFs8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0LCB0YWJdO1xuICAgICAgdGhpcy5hY3RpdmF0ZWRFbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpKTtcblxuICAgICAgLy8gb25seSBzY3JvbGwgaWYgdGhlIGVsZW1lbnQgaXMgbm90IHlldCB2aXNpYmxlXG4gICAgICBpZiAodGhpcy5pc0VsZW1lbnRPdXRWaWV3cG9ydCh0YWIpKSB7XG4gICAgICAgIHRhYi5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICAgIGJsb2NrOiAnc3RhcnQnLFxuICAgICAgICAgIGlubGluZTogJ25lYXJlc3QnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmF0ZWRFbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ3RvZ2dsZWQnKSk7XG4gICAgfVxuICB9XG5cbiAgb3BlblJldmlldygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZXZpZXdIZWFkZXIubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5yZXZpZXdIZWFkZXIubmF0aXZlRWxlbWVudC5jbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNFbGVtZW50T3V0Vmlld3BvcnQoZWw6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiAoXG4gICAgICByZWN0LmJvdHRvbSA8IDAgfHxcbiAgICAgIHJlY3QucmlnaHQgPCAwIHx8XG4gICAgICByZWN0LmxlZnQgPiB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cuaW5uZXJXaWR0aCB8fFxuICAgICAgcmVjdC50b3AgPiB0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cuaW5uZXJIZWlnaHRcbiAgICApO1xuICB9XG59XG4iXX0=