/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ProductDetailOutlets } from '../../product-outlets.model';
/** @type {?} */
var WAITING_CLASS = 'waiting';
var ProductImagesComponent = /** @class */ (function () {
    function ProductImagesComponent() {
        this.outlets = ProductDetailOutlets;
    }
    /**
     * @return {?}
     */
    ProductImagesComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this.product && this.product.images) {
            this.mainImageContainer = this.product.images.PRIMARY;
        }
    };
    /**
     * @param {?} event
     * @param {?} imageContainer
     * @return {?}
     */
    ProductImagesComponent.prototype.showImage = /**
     * @param {?} event
     * @param {?} imageContainer
     * @return {?}
     */
    function (event, imageContainer) {
        if (this.mainImageContainer === imageContainer) {
            return;
        }
        this.startWaiting((/** @type {?} */ (event.target)));
        this.mainImageContainer = imageContainer;
    };
    /**
     * @param {?} imageContainer
     * @return {?}
     */
    ProductImagesComponent.prototype.isMainImageContainer = /**
     * @param {?} imageContainer
     * @return {?}
     */
    function (imageContainer) {
        return (this.mainImageContainer.zoom &&
            imageContainer.zoom &&
            imageContainer.zoom.url === this.mainImageContainer.zoom.url);
    };
    /**
     * @return {?}
     */
    ProductImagesComponent.prototype.loadHandler = /**
     * @return {?}
     */
    function () {
        this.clearWaitList();
    };
    /**
     * @private
     * @param {?} el
     * @return {?}
     */
    ProductImagesComponent.prototype.startWaiting = /**
     * @private
     * @param {?} el
     * @return {?}
     */
    function (el) {
        this.clearWaitList();
        el.classList.add(WAITING_CLASS);
        this.waiting = el;
    };
    /**
     * @private
     * @return {?}
     */
    ProductImagesComponent.prototype.clearWaitList = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.waiting) {
            this.waiting.classList.remove(WAITING_CLASS);
            delete this.waiting;
        }
    };
    ProductImagesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-images',
                    template: "<ng-container *ngIf=\"product\">\n  <ng-container *cxOutlet=\"outlets.IMAGES\">\n    <cx-media\n      [container]=\"mainImageContainer\"\n      format=\"zoom\"\n      (loaded)=\"loadHandler()\"\n    >\n    </cx-media>\n    <ng-container *ngIf=\"product.images?.GALLERY.length > 1\">\n      <div class=\"thumbs\">\n        <cx-media\n          *ngFor=\"let image of product.images.GALLERY\"\n          [container]=\"image\"\n          format=\"thumbnail\"\n          (focus)=\"showImage($event, image)\"\n          tabindex=\"0\"\n          [class.active]=\"isMainImageContainer(image)\"\n        >\n        </cx-media>\n      </div>\n    </ng-container>\n  </ng-container>\n</ng-container>\n"
                }] }
    ];
    ProductImagesComponent.propDecorators = {
        product: [{ type: Input }]
    };
    return ProductImagesComponent;
}());
export { ProductImagesComponent };
if (false) {
    /** @type {?} */
    ProductImagesComponent.prototype.outlets;
    /** @type {?} */
    ProductImagesComponent.prototype.product;
    /** @type {?} */
    ProductImagesComponent.prototype.mainImageContainer;
    /** @type {?} */
    ProductImagesComponent.prototype.waiting;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1pbWFnZXMvcHJvZHVjdC1pbWFnZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7SUFFN0QsYUFBYSxHQUFHLFNBQVM7QUFFL0I7SUFBQTtRQUtFLFlBQU8sR0FBRyxvQkFBb0IsQ0FBQztJQThDakMsQ0FBQzs7OztJQXRDQyw0Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUN2RDtJQUNILENBQUM7Ozs7OztJQUVELDBDQUFTOzs7OztJQUFULFVBQVUsS0FBaUIsRUFBRSxjQUFjO1FBQ3pDLElBQUksSUFBSSxDQUFDLGtCQUFrQixLQUFLLGNBQWMsRUFBRTtZQUM5QyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFhLEtBQUssQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxjQUFjLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxxREFBb0I7Ozs7SUFBcEIsVUFBcUIsY0FBYztRQUNqQyxPQUFPLENBQ0wsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUk7WUFDNUIsY0FBYyxDQUFDLElBQUk7WUFDbkIsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQzdELENBQUM7SUFDSixDQUFDOzs7O0lBRUQsNENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7OztJQUVPLDZDQUFZOzs7OztJQUFwQixVQUFxQixFQUFlO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7OztJQUVPLDhDQUFhOzs7O0lBQXJCO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM3QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDckI7SUFDSCxDQUFDOztnQkFsREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxtQkFBbUI7b0JBQzdCLCtyQkFBOEM7aUJBQy9DOzs7MEJBSUUsS0FBSzs7SUE0Q1IsNkJBQUM7Q0FBQSxBQW5ERCxJQW1EQztTQS9DWSxzQkFBc0I7OztJQUNqQyx5Q0FBK0I7O0lBRS9CLHlDQUFzQjs7SUFFdEIsb0RBQW1COztJQUVuQix5Q0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3REZXRhaWxPdXRsZXRzIH0gZnJvbSAnLi4vLi4vcHJvZHVjdC1vdXRsZXRzLm1vZGVsJztcblxuY29uc3QgV0FJVElOR19DTEFTUyA9ICd3YWl0aW5nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1pbWFnZXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1pbWFnZXMuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0SW1hZ2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgb3V0bGV0cyA9IFByb2R1Y3REZXRhaWxPdXRsZXRzO1xuXG4gIEBJbnB1dCgpIHByb2R1Y3Q6IGFueTtcblxuICBtYWluSW1hZ2VDb250YWluZXI7XG5cbiAgd2FpdGluZzogSFRNTEVsZW1lbnQ7XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucHJvZHVjdCAmJiB0aGlzLnByb2R1Y3QuaW1hZ2VzKSB7XG4gICAgICB0aGlzLm1haW5JbWFnZUNvbnRhaW5lciA9IHRoaXMucHJvZHVjdC5pbWFnZXMuUFJJTUFSWTtcbiAgICB9XG4gIH1cblxuICBzaG93SW1hZ2UoZXZlbnQ6IE1vdXNlRXZlbnQsIGltYWdlQ29udGFpbmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubWFpbkltYWdlQ29udGFpbmVyID09PSBpbWFnZUNvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnN0YXJ0V2FpdGluZyg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KTtcbiAgICB0aGlzLm1haW5JbWFnZUNvbnRhaW5lciA9IGltYWdlQ29udGFpbmVyO1xuICB9XG5cbiAgaXNNYWluSW1hZ2VDb250YWluZXIoaW1hZ2VDb250YWluZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5tYWluSW1hZ2VDb250YWluZXIuem9vbSAmJlxuICAgICAgaW1hZ2VDb250YWluZXIuem9vbSAmJlxuICAgICAgaW1hZ2VDb250YWluZXIuem9vbS51cmwgPT09IHRoaXMubWFpbkltYWdlQ29udGFpbmVyLnpvb20udXJsXG4gICAgKTtcbiAgfVxuXG4gIGxvYWRIYW5kbGVyKCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJXYWl0TGlzdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGFydFdhaXRpbmcoZWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy5jbGVhcldhaXRMaXN0KCk7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChXQUlUSU5HX0NMQVNTKTtcbiAgICB0aGlzLndhaXRpbmcgPSBlbDtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJXYWl0TGlzdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy53YWl0aW5nKSB7XG4gICAgICB0aGlzLndhaXRpbmcuY2xhc3NMaXN0LnJlbW92ZShXQUlUSU5HX0NMQVNTKTtcbiAgICAgIGRlbGV0ZSB0aGlzLndhaXRpbmc7XG4gICAgfVxuICB9XG59XG4iXX0=