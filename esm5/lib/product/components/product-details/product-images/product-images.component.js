/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ProductDetailOutlets } from '../../../product-outlets.model';
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
        return imageContainer.zoom.url === this.mainImageContainer.zoom.url;
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
                    template: "<ng-container *ngIf=\"product\">\n  <ng-container *cxOutlet=\"outlets.IMAGES\">\n    <cx-picture\n      [imageContainer]=\"mainImageContainer\"\n      imageFormat=\"zoom\"\n      (loaded)=\"loadHandler()\"\n    >\n    </cx-picture>\n\n    <ng-container *ngIf=\"product.images?.GALLERY.length > 1\">\n      <div class=\"thumbs\">\n        <cx-picture\n          *ngFor=\"let image of product.images.GALLERY\"\n          [imageContainer]=\"image\"\n          imageFormat=\"thumbnail\"\n          (focus)=\"showImage($event, image)\"\n          tabindex=\"0\"\n          [class.active]=\"isMainImageContainer(image)\"\n        >\n        </cx-picture>\n      </div>\n    </ng-container>\n  </ng-container>\n</ng-container>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3Byb2R1Y3QvY29tcG9uZW50cy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1pbWFnZXMvcHJvZHVjdC1pbWFnZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7SUFFaEUsYUFBYSxHQUFHLFNBQVM7QUFFL0I7SUFBQTtRQUtFLFlBQU8sR0FBRyxvQkFBb0IsQ0FBQztJQTBDakMsQ0FBQzs7OztJQWxDQyw0Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUN2RDtJQUNILENBQUM7Ozs7OztJQUVELDBDQUFTOzs7OztJQUFULFVBQVUsS0FBaUIsRUFBRSxjQUFjO1FBQ3pDLElBQUksSUFBSSxDQUFDLGtCQUFrQixLQUFLLGNBQWMsRUFBRTtZQUM5QyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFhLEtBQUssQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxjQUFjLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxxREFBb0I7Ozs7SUFBcEIsVUFBcUIsY0FBYztRQUNqQyxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3RFLENBQUM7Ozs7SUFFRCw0Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBRU8sNkNBQVk7Ozs7O0lBQXBCLFVBQXFCLEVBQWU7UUFDbEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRU8sOENBQWE7Ozs7SUFBckI7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzdDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNyQjtJQUNILENBQUM7O2dCQTlDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsNnRCQUE4QztpQkFDL0M7OzswQkFJRSxLQUFLOztJQXdDUiw2QkFBQztDQUFBLEFBL0NELElBK0NDO1NBM0NZLHNCQUFzQjs7O0lBQ2pDLHlDQUErQjs7SUFFL0IseUNBQXNCOztJQUV0QixvREFBbUI7O0lBRW5CLHlDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdERldGFpbE91dGxldHMgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0LW91dGxldHMubW9kZWwnO1xuXG5jb25zdCBXQUlUSU5HX0NMQVNTID0gJ3dhaXRpbmcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LWltYWdlcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWltYWdlcy5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RJbWFnZXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBvdXRsZXRzID0gUHJvZHVjdERldGFpbE91dGxldHM7XG5cbiAgQElucHV0KCkgcHJvZHVjdDogYW55O1xuXG4gIG1haW5JbWFnZUNvbnRhaW5lcjtcblxuICB3YWl0aW5nOiBIVE1MRWxlbWVudDtcblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wcm9kdWN0ICYmIHRoaXMucHJvZHVjdC5pbWFnZXMpIHtcbiAgICAgIHRoaXMubWFpbkltYWdlQ29udGFpbmVyID0gdGhpcy5wcm9kdWN0LmltYWdlcy5QUklNQVJZO1xuICAgIH1cbiAgfVxuXG4gIHNob3dJbWFnZShldmVudDogTW91c2VFdmVudCwgaW1hZ2VDb250YWluZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5tYWluSW1hZ2VDb250YWluZXIgPT09IGltYWdlQ29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3RhcnRXYWl0aW5nKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpO1xuICAgIHRoaXMubWFpbkltYWdlQ29udGFpbmVyID0gaW1hZ2VDb250YWluZXI7XG4gIH1cblxuICBpc01haW5JbWFnZUNvbnRhaW5lcihpbWFnZUNvbnRhaW5lcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpbWFnZUNvbnRhaW5lci56b29tLnVybCA9PT0gdGhpcy5tYWluSW1hZ2VDb250YWluZXIuem9vbS51cmw7XG4gIH1cblxuICBsb2FkSGFuZGxlcigpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyV2FpdExpc3QoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhcnRXYWl0aW5nKGVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJXYWl0TGlzdCgpO1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoV0FJVElOR19DTEFTUyk7XG4gICAgdGhpcy53YWl0aW5nID0gZWw7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyV2FpdExpc3QoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMud2FpdGluZykge1xuICAgICAgdGhpcy53YWl0aW5nLmNsYXNzTGlzdC5yZW1vdmUoV0FJVElOR19DTEFTUyk7XG4gICAgICBkZWxldGUgdGhpcy53YWl0aW5nO1xuICAgIH1cbiAgfVxufVxuIl19