/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { CurrentProductService } from '../current-product.service';
/** @type {?} */
const WAITING_CLASS = 'waiting';
export class ProductImagesComponent {
    /**
     * @param {?} currentProductService
     */
    constructor(currentProductService) {
        this.currentProductService = currentProductService;
        this.imageContainer$ = new BehaviorSubject(null);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.product$ = this.currentProductService.getProduct().pipe(filter(Boolean), tap(p => {
            if (!this.imageContainer$.value) {
                this.imageContainer$.next(p.images.PRIMARY);
            }
        }));
    }
    /**
     * @param {?} event
     * @param {?} imageContainer
     * @return {?}
     */
    showImage(event, imageContainer) {
        if (this.imageContainer$.value === imageContainer) {
            return;
        }
        this.startWaiting((/** @type {?} */ (event.target)));
        this.imageContainer$.next(imageContainer);
    }
    /**
     * @param {?} currentContainer
     * @return {?}
     */
    isMainImageContainer(currentContainer) {
        return this.imageContainer$.pipe(map((container) => container.zoom && container.zoom.url === currentContainer.zoom.url));
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
                template: "<cx-media\n  [container]=\"imageContainer$ | async\"\n  format=\"zoom\"\n  (loaded)=\"loadHandler()\"\n>\n</cx-media>\n\n<div\n  class=\"thumbs\"\n  *ngIf=\"(product$ | async) as product\"\n  [class.hidden]=\"product.images?.GALLERY?.length === 1\"\n>\n  <cx-media\n    *ngFor=\"let image of product.images?.GALLERY\"\n    [container]=\"image\"\n    format=\"thumbnail\"\n    (focus)=\"showImage($event, image)\"\n    tabindex=\"0\"\n    [class.active]=\"isMainImageContainer(image) | async\"\n  >\n  </cx-media>\n</div>\n"
            }] }
];
/** @nocollapse */
ProductImagesComponent.ctorParameters = () => [
    { type: CurrentProductService }
];
if (false) {
    /** @type {?} */
    ProductImagesComponent.prototype.imageContainer$;
    /** @type {?} */
    ProductImagesComponent.prototype.waiting;
    /** @type {?} */
    ProductImagesComponent.prototype.product$;
    /**
     * @type {?}
     * @private
     */
    ProductImagesComponent.prototype.currentProductService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWltYWdlcy9wcm9kdWN0LWltYWdlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQzs7TUFFN0QsYUFBYSxHQUFHLFNBQVM7QUFNL0IsTUFBTSxPQUFPLHNCQUFzQjs7OztJQU9qQyxZQUFvQixxQkFBNEM7UUFBNUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQU5oRSxvQkFBZSxHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBTXVCLENBQUM7Ozs7SUFFcEUsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FDMUQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRTtnQkFDL0IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUM3QztRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBaUIsRUFBRSxjQUFjO1FBQ3pDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEtBQUssY0FBYyxFQUFFO1lBQ2pELE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQWEsS0FBSyxDQUFDLE1BQU0sRUFBQSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7Ozs7SUFFRCxvQkFBb0IsQ0FBQyxnQkFBZ0I7UUFDbkMsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FDOUIsR0FBRyxDQUNELENBQUMsU0FBYyxFQUFFLEVBQUUsQ0FDakIsU0FBUyxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNyRSxDQUNGLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFFTyxZQUFZLENBQUMsRUFBZTtRQUNsQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFTyxhQUFhO1FBQ25CLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDN0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7O1lBeERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixzaEJBQThDO2FBQy9DOzs7O1lBUFEscUJBQXFCOzs7O0lBUzVCLGlEQUE0Qzs7SUFFNUMseUNBQXFCOztJQUVyQiwwQ0FBOEI7Ozs7O0lBRWxCLHVEQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcblxuY29uc3QgV0FJVElOR19DTEFTUyA9ICd3YWl0aW5nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1pbWFnZXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1pbWFnZXMuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0SW1hZ2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaW1hZ2VDb250YWluZXIkID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcblxuICB3YWl0aW5nOiBIVE1MRWxlbWVudDtcblxuICBwcm9kdWN0JDogT2JzZXJ2YWJsZTxQcm9kdWN0PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMucHJvZHVjdCQgPSB0aGlzLmN1cnJlbnRQcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0KCkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIHRhcChwID0+IHtcbiAgICAgICAgaWYgKCF0aGlzLmltYWdlQ29udGFpbmVyJC52YWx1ZSkge1xuICAgICAgICAgIHRoaXMuaW1hZ2VDb250YWluZXIkLm5leHQocC5pbWFnZXMuUFJJTUFSWSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHNob3dJbWFnZShldmVudDogTW91c2VFdmVudCwgaW1hZ2VDb250YWluZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbWFnZUNvbnRhaW5lciQudmFsdWUgPT09IGltYWdlQ29udGFpbmVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3RhcnRXYWl0aW5nKDxIVE1MRWxlbWVudD5ldmVudC50YXJnZXQpO1xuICAgIHRoaXMuaW1hZ2VDb250YWluZXIkLm5leHQoaW1hZ2VDb250YWluZXIpO1xuICB9XG5cbiAgaXNNYWluSW1hZ2VDb250YWluZXIoY3VycmVudENvbnRhaW5lcik6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmltYWdlQ29udGFpbmVyJC5waXBlKFxuICAgICAgbWFwKFxuICAgICAgICAoY29udGFpbmVyOiBhbnkpID0+XG4gICAgICAgICAgY29udGFpbmVyLnpvb20gJiYgY29udGFpbmVyLnpvb20udXJsID09PSBjdXJyZW50Q29udGFpbmVyLnpvb20udXJsXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIGxvYWRIYW5kbGVyKCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJXYWl0TGlzdCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGFydFdhaXRpbmcoZWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgdGhpcy5jbGVhcldhaXRMaXN0KCk7XG4gICAgZWwuY2xhc3NMaXN0LmFkZChXQUlUSU5HX0NMQVNTKTtcbiAgICB0aGlzLndhaXRpbmcgPSBlbDtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJXYWl0TGlzdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy53YWl0aW5nKSB7XG4gICAgICB0aGlzLndhaXRpbmcuY2xhc3NMaXN0LnJlbW92ZShXQUlUSU5HX0NMQVNTKTtcbiAgICAgIGRlbGV0ZSB0aGlzLndhaXRpbmc7XG4gICAgfVxuICB9XG59XG4iXX0=