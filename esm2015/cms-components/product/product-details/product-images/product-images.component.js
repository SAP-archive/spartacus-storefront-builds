/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { ProductDetailOutlets } from '../../product-outlets.model';
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
        return (this.mainImageContainer.zoom &&
            imageContainer.zoom &&
            imageContainer.zoom.url === this.mainImageContainer.zoom.url);
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
                template: "<ng-container *ngIf=\"product\">\n  <ng-container *cxOutlet=\"outlets.IMAGES\">\n    <cx-media\n      [container]=\"mainImageContainer\"\n      format=\"zoom\"\n      (loaded)=\"loadHandler()\"\n    >\n    </cx-media>\n    <ng-container *ngIf=\"product.images?.GALLERY.length > 1\">\n      <div class=\"thumbs\">\n        <cx-media\n          *ngFor=\"let image of product.images.GALLERY\"\n          [container]=\"image\"\n          format=\"thumbnail\"\n          (focus)=\"showImage($event, image)\"\n          tabindex=\"0\"\n          [class.active]=\"isMainImageContainer(image)\"\n        >\n        </cx-media>\n      </div>\n    </ng-container>\n  </ng-container>\n</ng-container>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1pbWFnZXMvcHJvZHVjdC1pbWFnZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUM1RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7TUFFN0QsYUFBYSxHQUFHLFNBQVM7QUFNL0IsTUFBTSxPQUFPLHNCQUFzQjtJQUpuQztRQUtFLFlBQU8sR0FBRyxvQkFBb0IsQ0FBQztJQThDakMsQ0FBQzs7OztJQXRDQyxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7U0FDdkQ7SUFDSCxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBaUIsRUFBRSxjQUFjO1FBQ3pDLElBQUksSUFBSSxDQUFDLGtCQUFrQixLQUFLLGNBQWMsRUFBRTtZQUM5QyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFhLEtBQUssQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxjQUFjLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxvQkFBb0IsQ0FBQyxjQUFjO1FBQ2pDLE9BQU8sQ0FDTCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSTtZQUM1QixjQUFjLENBQUMsSUFBSTtZQUNuQixjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDN0QsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7OztJQUVPLFlBQVksQ0FBQyxFQUFlO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNwQixDQUFDOzs7OztJQUVPLGFBQWE7UUFDbkIsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUM3QyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDckI7SUFDSCxDQUFDOzs7WUFsREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLCtyQkFBOEM7YUFDL0M7OztzQkFJRSxLQUFLOzs7O0lBRk4seUNBQStCOztJQUUvQix5Q0FBc0I7O0lBRXRCLG9EQUFtQjs7SUFFbkIseUNBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0RGV0YWlsT3V0bGV0cyB9IGZyb20gJy4uLy4uL3Byb2R1Y3Qtb3V0bGV0cy5tb2RlbCc7XG5cbmNvbnN0IFdBSVRJTkdfQ0xBU1MgPSAnd2FpdGluZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtaW1hZ2VzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtaW1hZ2VzLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdEltYWdlc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIG91dGxldHMgPSBQcm9kdWN0RGV0YWlsT3V0bGV0cztcblxuICBASW5wdXQoKSBwcm9kdWN0OiBhbnk7XG5cbiAgbWFpbkltYWdlQ29udGFpbmVyO1xuXG4gIHdhaXRpbmc6IEhUTUxFbGVtZW50O1xuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnByb2R1Y3QgJiYgdGhpcy5wcm9kdWN0LmltYWdlcykge1xuICAgICAgdGhpcy5tYWluSW1hZ2VDb250YWluZXIgPSB0aGlzLnByb2R1Y3QuaW1hZ2VzLlBSSU1BUlk7XG4gICAgfVxuICB9XG5cbiAgc2hvd0ltYWdlKGV2ZW50OiBNb3VzZUV2ZW50LCBpbWFnZUNvbnRhaW5lcik6IHZvaWQge1xuICAgIGlmICh0aGlzLm1haW5JbWFnZUNvbnRhaW5lciA9PT0gaW1hZ2VDb250YWluZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zdGFydFdhaXRpbmcoPEhUTUxFbGVtZW50PmV2ZW50LnRhcmdldCk7XG4gICAgdGhpcy5tYWluSW1hZ2VDb250YWluZXIgPSBpbWFnZUNvbnRhaW5lcjtcbiAgfVxuXG4gIGlzTWFpbkltYWdlQ29udGFpbmVyKGltYWdlQ29udGFpbmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMubWFpbkltYWdlQ29udGFpbmVyLnpvb20gJiZcbiAgICAgIGltYWdlQ29udGFpbmVyLnpvb20gJiZcbiAgICAgIGltYWdlQ29udGFpbmVyLnpvb20udXJsID09PSB0aGlzLm1haW5JbWFnZUNvbnRhaW5lci56b29tLnVybFxuICAgICk7XG4gIH1cblxuICBsb2FkSGFuZGxlcigpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyV2FpdExpc3QoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhcnRXYWl0aW5nKGVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJXYWl0TGlzdCgpO1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoV0FJVElOR19DTEFTUyk7XG4gICAgdGhpcy53YWl0aW5nID0gZWw7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyV2FpdExpc3QoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMud2FpdGluZykge1xuICAgICAgdGhpcy53YWl0aW5nLmNsYXNzTGlzdC5yZW1vdmUoV0FJVElOR19DTEFTUyk7XG4gICAgICBkZWxldGUgdGhpcy53YWl0aW5nO1xuICAgIH1cbiAgfVxufVxuIl19