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
                    template: "<div class=\"details\" *ngIf=\"(product$ | async) as product\">\n  <ng-container *cxOutlet=\"outlets.DESCRIPTION\">\n    <h3 #descriptionHeader (click)=\"select($event, description)\">\n      {{ 'productDetails.label.productDetails' | cxTranslate }}\n    </h3>\n    <div #description>\n      <div class=\"container\" [innerHTML]=\"product?.description\"></div>\n    </div>\n  </ng-container>\n\n  <ng-container *cxOutlet=\"outlets.SPECIFICATIONS\">\n    <h3 (click)=\"select($event, specifications)\">\n      {{ 'productDetails.label.specification' | cxTranslate }}\n    </h3>\n    <div #specifications>\n      <div class=\"container\">\n        <h2>{{ 'productDetails.label.specification' | cxTranslate }}</h2>\n        <cx-product-attributes [product]=\"product\"></cx-product-attributes>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *cxOutlet=\"outlets.REVIEWS\">\n    <h3 #reviewHeader (click)=\"select($event, reviews)\">\n      {{ 'productDetails.label.reviews' | cxTranslate }} ({{\n        product?.numberOfReviews\n      }})\n    </h3>\n    <div #reviews>\n      <div class=\"container\">\n        <h2>\n          {{ 'productDetails.label.reviews' | cxTranslate }} ({{\n            product?.numberOfReviews\n          }})\n        </h2>\n        <cx-product-reviews\n          class=\"container\"\n          [(isWritingReview)]=\"isWritingReview\"\n          [product]=\"product\"\n        ></cx-product-reviews>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-container *cxOutlet=\"outlets.SHIPPING\">\n    <h3 (click)=\"select($event, shipping)\">\n      {{ 'productDetails.label.shipping' | cxTranslate }}\n    </h3>\n    <div #shipping>\n      <div class=\"container\">\n        <h2>{{ 'productDetails.label.shipping' | cxTranslate }}</h2>\n        <ng-container\n          [cxComponentWrapper]=\"{\n            flexType: 'CMSTabParagraphComponent',\n            uid: 'deliveryTab'\n          }\"\n        ></ng-container>\n      </div>\n    </div>\n  </ng-container>\n</div>\n",
                    styles: [""]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC10YWJzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi9wcm9kdWN0L2NvbXBvbmVudHMvcHJvZHVjdC10YWJzL2NvbnRhaW5lci9wcm9kdWN0LXRhYnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFXLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXJELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRXBFO0lBMEJFLDhCQUNZLE1BQWlCLEVBQ2pCLGtCQUF5QztRQUR6QyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBdUI7UUFsQnJELG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLHNCQUFpQixHQUFrQixFQUFFLENBQUM7SUFrQm5DLENBQUM7SUFoQkosc0JBQ0kseUNBQU87Ozs7O1FBRFgsVUFDWSxHQUFlO1lBQ3pCLElBQUksR0FBRyxFQUFFO2dCQUNQLEdBQUcsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDM0I7UUFDSCxDQUFDOzs7T0FBQTtJQUlELHNCQUFJLHlDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLG9CQUFvQixDQUFDLE9BQU8sQ0FBQztRQUN0QyxDQUFDOzs7T0FBQTs7OztJQU9ELHVDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3ZELENBQUM7Ozs7OztJQUVELHFDQUFNOzs7OztJQUFOLFVBQU8sS0FBaUIsRUFBRSxHQUFnQjtRQUN4QyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDOUMsdURBQXVEO1lBQ3ZELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsVUFBQSxFQUFFO2dCQUMvQixPQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUM7WUFBeEMsQ0FBd0MsQ0FDekMsQ0FBQztZQUNGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxDQUFDLG1CQUFhLEtBQUssQ0FBQyxNQUFNLEVBQUEsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQztZQUVqRSxnREFBZ0Q7WUFDaEQsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2xDLEdBQUcsQ0FBQyxjQUFjLENBQUM7b0JBQ2pCLFFBQVEsRUFBRSxRQUFRO29CQUNsQixLQUFLLEVBQUUsT0FBTztvQkFDZCxNQUFNLEVBQUUsU0FBUztpQkFDbEIsQ0FBQyxDQUFDO2FBQ0o7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7U0FDdEU7SUFDSCxDQUFDOzs7O0lBRUQseUNBQVU7OztJQUFWO1FBQ0UsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRTtZQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN6QztJQUNILENBQUM7Ozs7OztJQUVPLG1EQUFvQjs7Ozs7SUFBNUIsVUFBNkIsRUFBRTtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDN0IsT0FBTyxLQUFLLENBQUM7U0FDZDs7WUFDSyxJQUFJLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixFQUFFO1FBQ3ZDLE9BQU8sQ0FDTCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUM7WUFDZCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFVBQVU7WUFDL0MsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQ2hELENBQUM7SUFDSixDQUFDO0lBcEVNLDRCQUFPLEdBQUcsa0JBQWtCLENBQUM7O2dCQU5yQyxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsMitEQUE0Qzs7aUJBRTdDOzs7O2dCQVRpQixTQUFTO2dCQUVsQixxQkFBcUI7OzswQkFnQjNCLFNBQVMsU0FBQyxtQkFBbUI7K0JBTzdCLFNBQVMsU0FBQyxjQUFjOztJQXVEM0IsMkJBQUM7Q0FBQSxBQTNFRCxJQTJFQztTQXRFWSxvQkFBb0I7OztJQUMvQiw2QkFBb0M7O0lBRXBDLHdDQUE4Qjs7SUFFOUIsK0NBQXdCOztJQUN4QixpREFBc0M7O0lBU3RDLDRDQUFvRDs7Ozs7SUFPbEQsc0NBQTJCOzs7OztJQUMzQixrREFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0LCBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vdWkvcGFnZXMvcHJvZHVjdC1wYWdlL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RUYWJzT3V0bGV0cyB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3Qtb3V0bGV0cy5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtdGFicycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LXRhYnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9kdWN0LXRhYnMuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBzdGF0aWMgb3V0bGV0cyA9IFByb2R1Y3RUYWJzT3V0bGV0cztcblxuICBwcm9kdWN0JDogT2JzZXJ2YWJsZTxQcm9kdWN0PjtcblxuICBpc1dyaXRpbmdSZXZpZXcgPSBmYWxzZTtcbiAgYWN0aXZhdGVkRWxlbWVudHM6IEhUTUxFbGVtZW50W10gPSBbXTtcblxuICBAVmlld0NoaWxkKCdkZXNjcmlwdGlvbkhlYWRlcicpXG4gIHNldCBpbml0aWFsKHJlZjogRWxlbWVudFJlZikge1xuICAgIGlmIChyZWYpIHtcbiAgICAgIHJlZi5uYXRpdmVFbGVtZW50LmNsaWNrKCk7XG4gICAgfVxuICB9XG5cbiAgQFZpZXdDaGlsZCgncmV2aWV3SGVhZGVyJykgcmV2aWV3SGVhZGVyOiBFbGVtZW50UmVmO1xuXG4gIGdldCBvdXRsZXRzKCkge1xuICAgIHJldHVybiBQcm9kdWN0VGFic0NvbXBvbmVudC5vdXRsZXRzO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmLFxuICAgIHByb3RlY3RlZCBjdXJyZW50UGFnZVNlcnZpY2U6IEN1cnJlbnRQcm9kdWN0U2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9kdWN0JCA9IHRoaXMuY3VycmVudFBhZ2VTZXJ2aWNlLmdldFByb2R1Y3QoKTtcbiAgfVxuXG4gIHNlbGVjdChldmVudDogTW91c2VFdmVudCwgdGFiOiBIVE1MRWxlbWVudCkge1xuICAgIGlmICh0aGlzLmFjdGl2YXRlZEVsZW1lbnRzLmluZGV4T2YodGFiKSA9PT0gLTEpIHtcbiAgICAgIC8vIHJlbW92ZSBhY3RpdmUgY2xhc3Mgb24gYm90aCBoZWFkZXIgYW5kIGNvbnRlbnQgcGFuZWxcbiAgICAgIHRoaXMuYWN0aXZhdGVkRWxlbWVudHMuZm9yRWFjaChlbCA9PlxuICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnLCAndG9nZ2xlZCcpXG4gICAgICApO1xuICAgICAgdGhpcy5hY3RpdmF0ZWRFbGVtZW50cyA9IFs8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0LCB0YWJdO1xuICAgICAgdGhpcy5hY3RpdmF0ZWRFbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpKTtcblxuICAgICAgLy8gb25seSBzY3JvbGwgaWYgdGhlIGVsZW1lbnQgaXMgbm90IHlldCB2aXNpYmxlXG4gICAgICBpZiAodGhpcy5pc0VsZW1lbnRPdXRWaWV3cG9ydCh0YWIpKSB7XG4gICAgICAgIHRhYi5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnLFxuICAgICAgICAgIGJsb2NrOiAnc3RhcnQnLFxuICAgICAgICAgIGlubGluZTogJ25lYXJlc3QnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmF0ZWRFbGVtZW50cy5mb3JFYWNoKGVsID0+IGVsLmNsYXNzTGlzdC50b2dnbGUoJ3RvZ2dsZWQnKSk7XG4gICAgfVxuICB9XG5cbiAgb3BlblJldmlldygpIHtcbiAgICBpZiAodGhpcy5yZXZpZXdIZWFkZXIubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5yZXZpZXdIZWFkZXIubmF0aXZlRWxlbWVudC5jbGljaygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNFbGVtZW50T3V0Vmlld3BvcnQoZWwpIHtcbiAgICBpZiAoIXRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIChcbiAgICAgIHJlY3QuYm90dG9tIDwgMCB8fFxuICAgICAgcmVjdC5yaWdodCA8IDAgfHxcbiAgICAgIHJlY3QubGVmdCA+IHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdy5pbm5lcldpZHRoIHx8XG4gICAgICByZWN0LnRvcCA+IHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdy5pbm5lckhlaWdodFxuICAgICk7XG4gIH1cbn1cbiJdfQ==