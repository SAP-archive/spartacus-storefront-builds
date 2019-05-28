/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CurrentProductService } from '../current-product.service';
/** @type {?} */
var WAITING_CLASS = 'is-waiting';
var ProductImagesComponent = /** @class */ (function () {
    function ProductImagesComponent(currentProductService) {
        this.currentProductService = currentProductService;
        this.product$ = this.currentProductService
            .getProduct()
            .pipe(filter(Boolean));
        this._imageContainer$ = new BehaviorSubject(null);
        this.imageContainer$ = combineLatest(this.product$, this._imageContainer$).pipe(map(function (_a) {
            var _b = tslib_1.__read(_a, 2), product = _b[0], container = _b[1];
            return container
                ? container
                : product.images && product.images.PRIMARY
                    ? product.images.PRIMARY
                    : {};
        }));
    }
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
        this.startWaiting((/** @type {?} */ (event.target)));
        this._imageContainer$.next(imageContainer);
    };
    /**
     * @param {?} currentContainer
     * @return {?}
     */
    ProductImagesComponent.prototype.isMainImageContainer = /**
     * @param {?} currentContainer
     * @return {?}
     */
    function (currentContainer) {
        return this.imageContainer$.pipe(map(function (container) {
            return container &&
                container.zoom &&
                currentContainer.zoom &&
                container.zoom.url === currentContainer.zoom.url;
        }));
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
                    template: "<ng-container *ngIf=\"(imageContainer$ | async) as container\">\n  <cx-media [container]=\"container\" format=\"zoom\" (loaded)=\"loadHandler()\">\n  </cx-media>\n\n  <div\n    class=\"thumbs\"\n    *ngIf=\"(product$ | async) as product\"\n    [class.hidden]=\"product.images?.GALLERY?.length === 1\"\n  >\n    <cx-media\n      *ngFor=\"let image of product.images?.GALLERY\"\n      [container]=\"image\"\n      format=\"thumbnail\"\n      (focus)=\"showImage($event, image)\"\n      tabindex=\"0\"\n      [class.active]=\"isMainImageContainer(image) | async\"\n    >\n    </cx-media>\n  </div>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ProductImagesComponent.ctorParameters = function () { return [
        { type: CurrentProductService }
    ]; };
    return ProductImagesComponent;
}());
export { ProductImagesComponent };
if (false) {
    /** @type {?} */
    ProductImagesComponent.prototype.waiting;
    /** @type {?} */
    ProductImagesComponent.prototype.product$;
    /**
     * @type {?}
     * @private
     */
    ProductImagesComponent.prototype._imageContainer$;
    /** @type {?} */
    ProductImagesComponent.prototype.imageContainer$;
    /**
     * @type {?}
     * @private
     */
    ProductImagesComponent.prototype.currentProductService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWltYWdlcy9wcm9kdWN0LWltYWdlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5FLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0lBRTdELGFBQWEsR0FBRyxZQUFZO0FBRWxDO0lBd0JFLGdDQUFvQixxQkFBNEM7UUFBNUMsMEJBQXFCLEdBQXJCLHFCQUFxQixDQUF1QjtRQWhCaEUsYUFBUSxHQUF3QixJQUFJLENBQUMscUJBQXFCO2FBQ3ZELFVBQVUsRUFBRTthQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUVqQixxQkFBZ0IsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVyRCxvQkFBZSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLElBQUksQ0FDeEUsR0FBRyxDQUFDLFVBQUMsRUFBb0I7Z0JBQXBCLDBCQUFvQixFQUFuQixlQUFPLEVBQUUsaUJBQVM7WUFDdEIsT0FBQSxTQUFTO2dCQUNQLENBQUMsQ0FBQyxTQUFTO2dCQUNYLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTztvQkFDMUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTztvQkFDeEIsQ0FBQyxDQUFDLEVBQUU7UUFKTixDQUlNLENBQ1AsQ0FDRixDQUFDO0lBRWlFLENBQUM7Ozs7OztJQUVwRSwwQ0FBUzs7Ozs7SUFBVCxVQUFVLEtBQWlCLEVBQUUsY0FBYztRQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFhLEtBQUssQ0FBQyxNQUFNLEVBQUEsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFFRCxxREFBb0I7Ozs7SUFBcEIsVUFBcUIsZ0JBQWdCO1FBQ25DLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQzlCLEdBQUcsQ0FDRCxVQUFDLFNBQWM7WUFDYixPQUFBLFNBQVM7Z0JBQ1QsU0FBUyxDQUFDLElBQUk7Z0JBQ2QsZ0JBQWdCLENBQUMsSUFBSTtnQkFDckIsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEdBQUc7UUFIaEQsQ0FHZ0QsQ0FDbkQsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7OztJQUVELDRDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7Ozs7SUFFTyw2Q0FBWTs7Ozs7SUFBcEIsVUFBcUIsRUFBZTtRQUNsQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFTyw4Q0FBYTs7OztJQUFyQjtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDN0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQzs7Z0JBMURGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixpbkJBQThDO29CQUM5QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBUlEscUJBQXFCOztJQStEOUIsNkJBQUM7Q0FBQSxBQTNERCxJQTJEQztTQXREWSxzQkFBc0I7OztJQUNqQyx5Q0FBcUI7O0lBRXJCLDBDQUV5Qjs7Ozs7SUFFekIsa0RBQXFEOztJQUVyRCxpREFRRTs7Ozs7SUFFVSx1REFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDdXJyZW50UHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5cbmNvbnN0IFdBSVRJTkdfQ0xBU1MgPSAnaXMtd2FpdGluZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtaW1hZ2VzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtaW1hZ2VzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RJbWFnZXNDb21wb25lbnQge1xuICB3YWl0aW5nOiBIVE1MRWxlbWVudDtcblxuICBwcm9kdWN0JDogT2JzZXJ2YWJsZTxQcm9kdWN0PiA9IHRoaXMuY3VycmVudFByb2R1Y3RTZXJ2aWNlXG4gICAgLmdldFByb2R1Y3QoKVxuICAgIC5waXBlKGZpbHRlcihCb29sZWFuKSk7XG5cbiAgcHJpdmF0ZSBfaW1hZ2VDb250YWluZXIkID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcblxuICBpbWFnZUNvbnRhaW5lciQgPSBjb21iaW5lTGF0ZXN0KHRoaXMucHJvZHVjdCQsIHRoaXMuX2ltYWdlQ29udGFpbmVyJCkucGlwZShcbiAgICBtYXAoKFtwcm9kdWN0LCBjb250YWluZXJdKSA9PlxuICAgICAgY29udGFpbmVyXG4gICAgICAgID8gY29udGFpbmVyXG4gICAgICAgIDogcHJvZHVjdC5pbWFnZXMgJiYgcHJvZHVjdC5pbWFnZXMuUFJJTUFSWVxuICAgICAgICA/IHByb2R1Y3QuaW1hZ2VzLlBSSU1BUllcbiAgICAgICAgOiB7fVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlKSB7fVxuXG4gIHNob3dJbWFnZShldmVudDogTW91c2VFdmVudCwgaW1hZ2VDb250YWluZXIpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXJ0V2FpdGluZyg8SFRNTEVsZW1lbnQ+ZXZlbnQudGFyZ2V0KTtcbiAgICB0aGlzLl9pbWFnZUNvbnRhaW5lciQubmV4dChpbWFnZUNvbnRhaW5lcik7XG4gIH1cblxuICBpc01haW5JbWFnZUNvbnRhaW5lcihjdXJyZW50Q29udGFpbmVyKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VDb250YWluZXIkLnBpcGUoXG4gICAgICBtYXAoXG4gICAgICAgIChjb250YWluZXI6IGFueSkgPT5cbiAgICAgICAgICBjb250YWluZXIgJiZcbiAgICAgICAgICBjb250YWluZXIuem9vbSAmJlxuICAgICAgICAgIGN1cnJlbnRDb250YWluZXIuem9vbSAmJlxuICAgICAgICAgIGNvbnRhaW5lci56b29tLnVybCA9PT0gY3VycmVudENvbnRhaW5lci56b29tLnVybFxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBsb2FkSGFuZGxlcigpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyV2FpdExpc3QoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhcnRXYWl0aW5nKGVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJXYWl0TGlzdCgpO1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoV0FJVElOR19DTEFTUyk7XG4gICAgdGhpcy53YWl0aW5nID0gZWw7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyV2FpdExpc3QoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMud2FpdGluZykge1xuICAgICAgdGhpcy53YWl0aW5nLmNsYXNzTGlzdC5yZW1vdmUoV0FJVElOR19DTEFTUyk7XG4gICAgICBkZWxldGUgdGhpcy53YWl0aW5nO1xuICAgIH1cbiAgfVxufVxuIl19