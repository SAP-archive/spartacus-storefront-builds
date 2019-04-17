/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ProductDetailOutlets } from '../../../product-outlets.model';
/** @type {?} */
const WAITING_CLASS = 'waiting';
export class ProductImagesComponent {
    constructor() {
        this.outlets = ProductDetailOutlets;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this.product && this.product.images) {
            this.mainImageContainer = this.product.images.PRIMARY;
        }
    }
    /**
     * @param {?} event
     * @param {?} imageContainer
     * @return {?}
     */
    showImage(event, imageContainer) {
        if (this.mainImageContainer === imageContainer) {
            return;
        }
        this.startWaiting((/** @type {?} */ (event.target)));
        this.mainImageContainer = imageContainer;
    }
    /**
     * @param {?} imageContainer
     * @return {?}
     */
    isMainImageContainer(imageContainer) {
        return imageContainer.zoom.url === this.mainImageContainer.zoom.url;
    }
    /**
     * @return {?}
     */
    loadHandler() {
        this.clearWaitList();
    }
    /**
     * @private
     * @param {?} el
     * @return {?}
     */
    startWaiting(el) {
        this.clearWaitList();
        el.classList.add(WAITING_CLASS);
        this.waiting = el;
    }
    /**
     * @private
     * @return {?}
     */
    clearWaitList() {
        if (this.waiting) {
            this.waiting.classList.remove(WAITING_CLASS);
            delete this.waiting;
        }
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3Byb2R1Y3QvY29tcG9uZW50cy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1pbWFnZXMvcHJvZHVjdC1pbWFnZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQzs7TUFFaEUsYUFBYSxHQUFHLFNBQVM7QUFPL0IsTUFBTSxPQUFPLHNCQUFzQjtJQUxuQztRQU1FLFlBQU8sR0FBRyxvQkFBb0IsQ0FBQztJQTBDakMsQ0FBQzs7OztJQWxDQyxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDdkQ7SUFDSCxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBaUIsRUFBRSxjQUFjO1FBQ3pDLElBQUksSUFBSSxDQUFDLGtCQUFrQixLQUFLLGNBQWMsRUFBRTtZQUM5QyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFhLEtBQUssQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxjQUFjLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxvQkFBb0IsQ0FBQyxjQUFjO1FBQ2pDLE9BQU8sY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDdEUsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBRU8sWUFBWSxDQUFDLEVBQWU7UUFDbEMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRU8sYUFBYTtRQUNuQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzdDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUNyQjtJQUNILENBQUM7OztZQS9DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtnQkFDN0IsNnRCQUE4Qzs7YUFFL0M7OztzQkFJRSxLQUFLOzs7O0lBRk4seUNBQStCOztJQUUvQix5Q0FBc0I7O0lBRXRCLG9EQUFtQjs7SUFFbkIseUNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0RGV0YWlsT3V0bGV0cyB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3Qtb3V0bGV0cy5tb2RlbCc7XG5cbmNvbnN0IFdBSVRJTkdfQ0xBU1MgPSAnd2FpdGluZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtaW1hZ2VzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtaW1hZ2VzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcHJvZHVjdC1pbWFnZXMuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdEltYWdlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIG91dGxldHMgPSBQcm9kdWN0RGV0YWlsT3V0bGV0cztcblxuICBASW5wdXQoKSBwcm9kdWN0OiBhbnk7XG5cbiAgbWFpbkltYWdlQ29udGFpbmVyO1xuXG4gIHdhaXRpbmc6IEhUTUxFbGVtZW50O1xuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLnByb2R1Y3QgJiYgdGhpcy5wcm9kdWN0LmltYWdlcykge1xuICAgICAgdGhpcy5tYWluSW1hZ2VDb250YWluZXIgPSB0aGlzLnByb2R1Y3QuaW1hZ2VzLlBSSU1BUlk7XG4gICAgfVxuICB9XG5cbiAgc2hvd0ltYWdlKGV2ZW50OiBNb3VzZUV2ZW50LCBpbWFnZUNvbnRhaW5lcikge1xuICAgIGlmICh0aGlzLm1haW5JbWFnZUNvbnRhaW5lciA9PT0gaW1hZ2VDb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zdGFydFdhaXRpbmcoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCk7XG4gICAgdGhpcy5tYWluSW1hZ2VDb250YWluZXIgPSBpbWFnZUNvbnRhaW5lcjtcbiAgfVxuXG4gIGlzTWFpbkltYWdlQ29udGFpbmVyKGltYWdlQ29udGFpbmVyKSB7XG4gICAgcmV0dXJuIGltYWdlQ29udGFpbmVyLnpvb20udXJsID09PSB0aGlzLm1haW5JbWFnZUNvbnRhaW5lci56b29tLnVybDtcbiAgfVxuXG4gIGxvYWRIYW5kbGVyKCkge1xuICAgIHRoaXMuY2xlYXJXYWl0TGlzdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGFydFdhaXRpbmcoZWw6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5jbGVhcldhaXRMaXN0KCk7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChXQUlUSU5HX0NMQVNTKTtcbiAgICB0aGlzLndhaXRpbmcgPSBlbDtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJXYWl0TGlzdCgpIHtcbiAgICBpZiAodGhpcy53YWl0aW5nKSB7XG4gICAgICB0aGlzLndhaXRpbmcuY2xhc3NMaXN0LnJlbW92ZShXQUlUSU5HX0NMQVNTKTtcbiAgICAgIGRlbGV0ZSB0aGlzLndhaXRpbmc7XG4gICAgfVxuICB9XG59XG4iXX0=