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
                    template: "<ng-container *ngIf=\"product\">\n  <ng-container *cxOutlet=\"outlets.IMAGES\">\n    <cx-picture\n      [imageContainer]=\"mainImageContainer\"\n      imageFormat=\"zoom\"\n      (loaded)=\"loadHandler()\"\n    >\n    </cx-picture>\n\n    <ng-container *ngIf=\"product.images?.GALLERY.length > 1\">\n      <div class=\"thumbs\">\n        <cx-picture\n          *ngFor=\"let image of product.images.GALLERY\"\n          [imageContainer]=\"image\"\n          imageFormat=\"thumbnail\"\n          (focus)=\"showImage($event, image)\"\n          tabindex=\"0\"\n          [class.active]=\"isMainImageContainer(image)\"\n        >\n        </cx-picture>\n      </div>\n    </ng-container>\n  </ng-container>\n</ng-container>\n",
                    styles: [":host{display:flex;flex-direction:var(--cx-flex-direction,column);height:100%}:host>cx-picture{height:100%;width:100%;position:relative}.thumbs{display:flex;justify-content:flex-start}.thumbs cx-picture{width:var(--cx-width,75px);height:var(--cx-width,75px);transition:all var(--cx-g-transition-duration);overflow:hidden;position:relative;border:var(--cx-border,2px solid var(--cx-g-color-light));margin:var(--cx-margin,.5vw);padding:var(--cx-padding,.5vw)}.thumbs cx-picture:not(.active){cursor:pointer}.thumbs cx-picture.active,.thumbs cx-picture:hover{border-color:var(--cx-border-color,var(--cx-g-color-primary))}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3Byb2R1Y3QvY29tcG9uZW50cy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1pbWFnZXMvcHJvZHVjdC1pbWFnZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7SUFFaEUsYUFBYSxHQUFHLFNBQVM7QUFFL0I7SUFBQTtRQU1FLFlBQU8sR0FBRyxvQkFBb0IsQ0FBQztJQTBDakMsQ0FBQzs7OztJQWxDQyw0Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDdkMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUN2RDtJQUNILENBQUM7Ozs7OztJQUVELDBDQUFTOzs7OztJQUFULFVBQVUsS0FBaUIsRUFBRSxjQUFjO1FBQ3pDLElBQUksSUFBSSxDQUFDLGtCQUFrQixLQUFLLGNBQWMsRUFBRTtZQUM5QyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFhLEtBQUssQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxjQUFjLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxxREFBb0I7Ozs7SUFBcEIsVUFBcUIsY0FBYztRQUNqQyxPQUFPLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3RFLENBQUM7Ozs7SUFFRCw0Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBRU8sNkNBQVk7Ozs7O0lBQXBCLFVBQXFCLEVBQWU7UUFDbEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRU8sOENBQWE7Ozs7SUFBckI7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzdDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNyQjtJQUNILENBQUM7O2dCQS9DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsNnRCQUE4Qzs7aUJBRS9DOzs7MEJBSUUsS0FBSzs7SUF3Q1IsNkJBQUM7Q0FBQSxBQWhERCxJQWdEQztTQTNDWSxzQkFBc0I7OztJQUNqQyx5Q0FBK0I7O0lBRS9CLHlDQUFzQjs7SUFFdEIsb0RBQW1COztJQUVuQix5Q0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3REZXRhaWxPdXRsZXRzIH0gZnJvbSAnLi4vLi4vLi4vcHJvZHVjdC1vdXRsZXRzLm1vZGVsJztcblxuY29uc3QgV0FJVElOR19DTEFTUyA9ICd3YWl0aW5nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1pbWFnZXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1pbWFnZXMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wcm9kdWN0LWltYWdlcy5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0SW1hZ2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgb3V0bGV0cyA9IFByb2R1Y3REZXRhaWxPdXRsZXRzO1xuXG4gIEBJbnB1dCgpIHByb2R1Y3Q6IGFueTtcblxuICBtYWluSW1hZ2VDb250YWluZXI7XG5cbiAgd2FpdGluZzogSFRNTEVsZW1lbnQ7XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgaWYgKHRoaXMucHJvZHVjdCAmJiB0aGlzLnByb2R1Y3QuaW1hZ2VzKSB7XG4gICAgICB0aGlzLm1haW5JbWFnZUNvbnRhaW5lciA9IHRoaXMucHJvZHVjdC5pbWFnZXMuUFJJTUFSWTtcbiAgICB9XG4gIH1cblxuICBzaG93SW1hZ2UoZXZlbnQ6IE1vdXNlRXZlbnQsIGltYWdlQ29udGFpbmVyKSB7XG4gICAgaWYgKHRoaXMubWFpbkltYWdlQ29udGFpbmVyID09PSBpbWFnZUNvbnRhaW5lcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnN0YXJ0V2FpdGluZyg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KTtcbiAgICB0aGlzLm1haW5JbWFnZUNvbnRhaW5lciA9IGltYWdlQ29udGFpbmVyO1xuICB9XG5cbiAgaXNNYWluSW1hZ2VDb250YWluZXIoaW1hZ2VDb250YWluZXIpIHtcbiAgICByZXR1cm4gaW1hZ2VDb250YWluZXIuem9vbS51cmwgPT09IHRoaXMubWFpbkltYWdlQ29udGFpbmVyLnpvb20udXJsO1xuICB9XG5cbiAgbG9hZEhhbmRsZXIoKSB7XG4gICAgdGhpcy5jbGVhcldhaXRMaXN0KCk7XG4gIH1cblxuICBwcml2YXRlIHN0YXJ0V2FpdGluZyhlbDogSFRNTEVsZW1lbnQpIHtcbiAgICB0aGlzLmNsZWFyV2FpdExpc3QoKTtcbiAgICBlbC5jbGFzc0xpc3QuYWRkKFdBSVRJTkdfQ0xBU1MpO1xuICAgIHRoaXMud2FpdGluZyA9IGVsO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhcldhaXRMaXN0KCkge1xuICAgIGlmICh0aGlzLndhaXRpbmcpIHtcbiAgICAgIHRoaXMud2FpdGluZy5jbGFzc0xpc3QucmVtb3ZlKFdBSVRJTkdfQ0xBU1MpO1xuICAgICAgZGVsZXRlIHRoaXMud2FpdGluZztcbiAgICB9XG4gIH1cbn1cbiJdfQ==