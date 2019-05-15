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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC10YWJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC10YWJzL2NvbnRhaW5lci9wcm9kdWN0LXRhYnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFXLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXJELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRWpFO0lBeUJFLDhCQUNZLE1BQWlCLEVBQ2pCLGtCQUF5QztRQUR6QyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBdUI7UUFsQnJELG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLHNCQUFpQixHQUFrQixFQUFFLENBQUM7SUFrQm5DLENBQUM7SUFoQkosc0JBQ0kseUNBQU87Ozs7O1FBRFgsVUFDWSxHQUFlO1lBQ3pCLElBQUksR0FBRyxFQUFFO2dCQUNQLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDM0I7UUFDSCxDQUFDOzs7T0FBQTtJQUlELHNCQUFJLHlDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLG9CQUFvQixDQUFDLE9BQU8sQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTs7OztJQU9ELHVDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3ZELENBQUM7Ozs7OztJQUVELHFDQUFNOzs7OztJQUFOLFVBQU8sS0FBaUIsRUFBRSxHQUFnQjtRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN6Qyx1REFBdUQ7WUFDdkQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUU7Z0JBQy9CLE9BQUEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQztZQUF4QyxDQUF3QyxDQUN6QyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsbUJBQWEsS0FBSyxDQUFDLE1BQU0sRUFBQSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzFELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO1lBRWpFLGdEQUFnRDtZQUNoRCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDbEMsR0FBRyxDQUFDLGNBQWMsQ0FBQztvQkFDakIsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLEtBQUssRUFBRSxPQUFPO29CQUNkLE1BQU0sRUFBRSxTQUFTO2lCQUNsQixDQUFDLENBQUM7YUFDSjtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztTQUN0RTtJQUNILENBQUM7Ozs7SUFFRCx5Q0FBVTs7O0lBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFO1lBQ25DLElBQUksQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sbURBQW9COzs7OztJQUE1QixVQUE2QixFQUFlO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtZQUM3QixPQUFPLEtBQUssQ0FBQztTQUNkOztZQUNLLElBQUksR0FBRyxFQUFFLENBQUMscUJBQXFCLEVBQUU7UUFDdkMsT0FBTyxDQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQztZQUNkLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsVUFBVTtZQUMvQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FDaEQsQ0FBQztJQUNKLENBQUM7SUFwRU0sNEJBQU8sR0FBRyxrQkFBa0IsQ0FBQzs7Z0JBTHJDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixpOERBQTRDO2lCQUM3Qzs7OztnQkFSaUIsU0FBUztnQkFFbEIscUJBQXFCOzs7MEJBZTNCLFNBQVMsU0FBQyxtQkFBbUI7K0JBTzdCLFNBQVMsU0FBQyxjQUFjOztJQXVEM0IsMkJBQUM7Q0FBQSxBQTFFRCxJQTBFQztTQXRFWSxvQkFBb0I7OztJQUMvQiw2QkFBb0M7O0lBRXBDLHdDQUE4Qjs7SUFFOUIsK0NBQXdCOztJQUN4QixpREFBc0M7O0lBU3RDLDRDQUFvRDs7Ozs7SUFPbEQsc0NBQTJCOzs7OztJQUMzQixrREFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0LCBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY3VycmVudC1wcm9kdWN0LnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFRhYnNPdXRsZXRzIH0gZnJvbSAnLi4vLi4vcHJvZHVjdC1vdXRsZXRzLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC10YWJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtdGFicy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RUYWJzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgc3RhdGljIG91dGxldHMgPSBQcm9kdWN0VGFic091dGxldHM7XG5cbiAgcHJvZHVjdCQ6IE9ic2VydmFibGU8UHJvZHVjdD47XG5cbiAgaXNXcml0aW5nUmV2aWV3ID0gZmFsc2U7XG4gIGFjdGl2YXRlZEVsZW1lbnRzOiBIVE1MRWxlbWVudFtdID0gW107XG5cbiAgQFZpZXdDaGlsZCgnZGVzY3JpcHRpb25IZWFkZXInKVxuICBzZXQgaW5pdGlhbChyZWY6IEVsZW1lbnRSZWYpIHtcbiAgICBpZiAocmVmKSB7XG4gICAgICByZWYubmF0aXZlRWxlbWVudC5jbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIEBWaWV3Q2hpbGQoJ3Jldmlld0hlYWRlcicpIHJldmlld0hlYWRlcjogRWxlbWVudFJlZjtcblxuICBnZXQgb3V0bGV0cygpIHtcbiAgICByZXR1cm4gUHJvZHVjdFRhYnNDb21wb25lbnQub3V0bGV0cztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZixcbiAgICBwcm90ZWN0ZWQgY3VycmVudFBhZ2VTZXJ2aWNlOiBDdXJyZW50UHJvZHVjdFNlcnZpY2VcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucHJvZHVjdCQgPSB0aGlzLmN1cnJlbnRQYWdlU2VydmljZS5nZXRQcm9kdWN0KCk7XG4gIH1cblxuICBzZWxlY3QoZXZlbnQ6IE1vdXNlRXZlbnQsIHRhYjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZhdGVkRWxlbWVudHMuaW5jbHVkZXModGFiKSkge1xuICAgICAgLy8gcmVtb3ZlIGFjdGl2ZSBjbGFzcyBvbiBib3RoIGhlYWRlciBhbmQgY29udGVudCBwYW5lbFxuICAgICAgdGhpcy5hY3RpdmF0ZWRFbGVtZW50cy5mb3JFYWNoKGVsID0+XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScsICd0b2dnbGVkJylcbiAgICAgICk7XG4gICAgICB0aGlzLmFjdGl2YXRlZEVsZW1lbnRzID0gWzxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQsIHRhYl07XG4gICAgICB0aGlzLmFjdGl2YXRlZEVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJykpO1xuXG4gICAgICAvLyBvbmx5IHNjcm9sbCBpZiB0aGUgZWxlbWVudCBpcyBub3QgeWV0IHZpc2libGVcbiAgICAgIGlmICh0aGlzLmlzRWxlbWVudE91dFZpZXdwb3J0KHRhYikpIHtcbiAgICAgICAgdGFiLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCcsXG4gICAgICAgICAgYmxvY2s6ICdzdGFydCcsXG4gICAgICAgICAgaW5saW5lOiAnbmVhcmVzdCcsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdGl2YXRlZEVsZW1lbnRzLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZSgndG9nZ2xlZCcpKTtcbiAgICB9XG4gIH1cblxuICBvcGVuUmV2aWV3KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJldmlld0hlYWRlci5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLnJldmlld0hlYWRlci5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0VsZW1lbnRPdXRWaWV3cG9ydChlbDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIChcbiAgICAgIHJlY3QuYm90dG9tIDwgMCB8fFxuICAgICAgcmVjdC5yaWdodCA8IDAgfHxcbiAgICAgIHJlY3QubGVmdCA+IHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdy5pbm5lcldpZHRoIHx8XG4gICAgICByZWN0LnRvcCA+IHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdy5pbm5lckhlaWdodFxuICAgICk7XG4gIH1cbn1cbiJdfQ==