/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { CurrentProductService } from '../current-product.service';
var ProductImagesComponent = /** @class */ (function () {
    function ProductImagesComponent(currentProductService) {
        var _this = this;
        this.currentProductService = currentProductService;
        this.mainMediaContainer = new BehaviorSubject(null);
        this.product$ = this.currentProductService.getProduct().pipe(filter(Boolean), distinctUntilChanged(), tap((/**
         * @param {?} p
         * @return {?}
         */
        function (p) {
            return _this.mainMediaContainer.next(p.images ? p.images.PRIMARY : {});
        })));
        this.thumbs$ = this.product$.pipe(map((/**
         * @param {?} product
         * @return {?}
         */
        function (product) { return _this.createCarouselItems(product); })));
        this.mainImage$ = combineLatest([
            this.product$,
            this.mainMediaContainer,
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), _ = _b[0], container = _b[1];
            return container;
        })));
    }
    /**
     * @return {?}
     */
    ProductImagesComponent.prototype.getThumbs = /**
     * @return {?}
     */
    function () {
        return this.thumbs$;
    };
    /**
     * @return {?}
     */
    ProductImagesComponent.prototype.getMain = /**
     * @return {?}
     */
    function () {
        return this.mainImage$;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ProductImagesComponent.prototype.openImage = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.mainMediaContainer.next(item.media.container);
    };
    /** find the index of the main media in the list of media */
    /**
     * find the index of the main media in the list of media
     * @param {?} thumbs
     * @return {?}
     */
    ProductImagesComponent.prototype.getActive = /**
     * find the index of the main media in the list of media
     * @param {?} thumbs
     * @return {?}
     */
    function (thumbs) {
        return this.mainMediaContainer.pipe(filter(Boolean), map((/**
         * @param {?} container
         * @return {?}
         */
        function (container) {
            /** @type {?} */
            var current = thumbs.find((/**
             * @param {?} t
             * @return {?}
             */
            function (t) {
                return t.media &&
                    container.zoom &&
                    t.media.container &&
                    t.media.container.zoom &&
                    t.media.container.zoom.url === container.zoom.url;
            }));
            return thumbs.indexOf(current);
        })));
    };
    /**
     * Return an array of CarouselItems for the product thumbnails.
     * In case there are less then 2 thumbs, we return null.
     */
    /**
     * Return an array of CarouselItems for the product thumbnails.
     * In case there are less then 2 thumbs, we return null.
     * @private
     * @param {?} product
     * @return {?}
     */
    ProductImagesComponent.prototype.createCarouselItems = /**
     * Return an array of CarouselItems for the product thumbnails.
     * In case there are less then 2 thumbs, we return null.
     * @private
     * @param {?} product
     * @return {?}
     */
    function (product) {
        if (!product.images ||
            !product.images.GALLERY ||
            product.images.GALLERY.length < 2) {
            return null;
        }
        return ((/** @type {?} */ (product.images.GALLERY))).map((/**
         * @param {?} c
         * @return {?}
         */
        function (c) {
            return {
                media: {
                    container: c,
                    format: 'thumbnail',
                },
            };
        }));
    };
    ProductImagesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-images',
                    template: "<ng-container *ngIf=\"(getMain() | async) as main\">\n  <cx-media [container]=\"main\" format=\"zoom\"> </cx-media>\n</ng-container>\n<ng-container *ngIf=\"(getThumbs() | async) as thumbs\">\n  <cx-carousel\n    class=\"thumbs\"\n    [items]=\"thumbs\"\n    [minItemPixelSize]=\"120\"\n    [hideIndicators]=\"true\"\n    (open)=\"openImage($event)\"\n    [activeItem]=\"getActive(thumbs) | async\"\n  ></cx-carousel>\n</ng-container>\n",
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
    /**
     * @type {?}
     * @private
     */
    ProductImagesComponent.prototype.mainMediaContainer;
    /**
     * @type {?}
     * @private
     */
    ProductImagesComponent.prototype.product$;
    /**
     * @type {?}
     * @private
     */
    ProductImagesComponent.prototype.thumbs$;
    /**
     * @type {?}
     * @private
     */
    ProductImagesComponent.prototype.mainImage$;
    /**
     * @type {?}
     * @private
     */
    ProductImagesComponent.prototype.currentProductService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWltYWdlcy9wcm9kdWN0LWltYWdlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5FLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRW5FO0lBMkJFLGdDQUFvQixxQkFBNEM7UUFBaEUsaUJBQW9FO1FBQWhELDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFyQnhELHVCQUFrQixHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9DLGFBQVEsR0FFWixJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUM5QyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2Ysb0JBQW9CLEVBQUUsRUFDdEIsR0FBRzs7OztRQUFDLFVBQUMsQ0FBVTtZQUNiLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQTlELENBQThELEVBQy9ELENBQ0YsQ0FBQztRQUVNLFlBQU8sR0FBK0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzlELEdBQUc7Ozs7UUFBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsRUFBakMsQ0FBaUMsRUFBQyxDQUNsRCxDQUFDO1FBRU0sZUFBVSxHQUFHLGFBQWEsQ0FBQztZQUNqQyxJQUFJLENBQUMsUUFBUTtZQUNiLElBQUksQ0FBQyxrQkFBa0I7U0FDeEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQyxFQUFjO2dCQUFkLDBCQUFjLEVBQWIsU0FBQyxFQUFFLGlCQUFTO1lBQU0sT0FBQSxTQUFTO1FBQVQsQ0FBUyxFQUFDLENBQUMsQ0FBQztJQUV1QixDQUFDOzs7O0lBRXBFLDBDQUFTOzs7SUFBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN0QixDQUFDOzs7O0lBRUQsd0NBQU87OztJQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Ozs7O0lBRUQsMENBQVM7Ozs7SUFBVCxVQUFVLElBQWtCO1FBQzFCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsNERBQTREOzs7Ozs7SUFDNUQsMENBQVM7Ozs7O0lBQVQsVUFBVSxNQUFzQjtRQUM5QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQ2pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHOzs7O1FBQUMsVUFBQyxTQUFjOztnQkFDWCxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUk7Ozs7WUFDekIsVUFBQSxDQUFDO2dCQUNDLE9BQUEsQ0FBQyxDQUFDLEtBQUs7b0JBQ1AsU0FBUyxDQUFDLElBQUk7b0JBQ2QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTO29CQUNqQixDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJO29CQUN0QixDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRztZQUpqRCxDQUlpRCxFQUNwRDtZQUNELE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRzs7Ozs7Ozs7SUFDSyxvREFBbUI7Ozs7Ozs7SUFBM0IsVUFBNEIsT0FBZ0I7UUFDMUMsSUFDRSxDQUFDLE9BQU8sQ0FBQyxNQUFNO1lBQ2YsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU87WUFDdkIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFDakM7WUFDQSxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxDQUFDLG1CQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFBLENBQUMsQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDO1lBQzFDLE9BQU87Z0JBQ0wsS0FBSyxFQUFFO29CQUNMLFNBQVMsRUFBRSxDQUFDO29CQUNaLE1BQU0sRUFBRSxXQUFXO2lCQUNwQjthQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7O2dCQWhGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsK2JBQThDO29CQUM5QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBTlEscUJBQXFCOztJQW1GOUIsNkJBQUM7Q0FBQSxBQWpGRCxJQWlGQztTQTVFWSxzQkFBc0I7Ozs7OztJQUNqQyxvREFBdUQ7Ozs7O0lBRXZELDBDQVFFOzs7OztJQUVGLHlDQUVFOzs7OztJQUVGLDRDQUc0Qzs7Ozs7SUFFaEMsdURBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxJdGVtIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvY2Fyb3VzZWwvaW5kZXgnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vY3VycmVudC1wcm9kdWN0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LWltYWdlcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWltYWdlcy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0SW1hZ2VzQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBtYWluTWVkaWFDb250YWluZXIgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuXG4gIHByaXZhdGUgcHJvZHVjdCQ6IE9ic2VydmFibGU8XG4gICAgUHJvZHVjdFxuICA+ID0gdGhpcy5jdXJyZW50UHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdCgpLnBpcGUoXG4gICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgdGFwKChwOiBQcm9kdWN0KSA9PlxuICAgICAgdGhpcy5tYWluTWVkaWFDb250YWluZXIubmV4dChwLmltYWdlcyA/IHAuaW1hZ2VzLlBSSU1BUlkgOiB7fSlcbiAgICApXG4gICk7XG5cbiAgcHJpdmF0ZSB0aHVtYnMkOiBPYnNlcnZhYmxlPENhcm91c2VsSXRlbVtdPiA9IHRoaXMucHJvZHVjdCQucGlwZShcbiAgICBtYXAocHJvZHVjdCA9PiB0aGlzLmNyZWF0ZUNhcm91c2VsSXRlbXMocHJvZHVjdCkpXG4gICk7XG5cbiAgcHJpdmF0ZSBtYWluSW1hZ2UkID0gY29tYmluZUxhdGVzdChbXG4gICAgdGhpcy5wcm9kdWN0JCxcbiAgICB0aGlzLm1haW5NZWRpYUNvbnRhaW5lcixcbiAgXSkucGlwZShtYXAoKFtfLCBjb250YWluZXJdKSA9PiBjb250YWluZXIpKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlKSB7fVxuXG4gIGdldFRodW1icygpOiBPYnNlcnZhYmxlPENhcm91c2VsSXRlbVtdPiB7XG4gICAgcmV0dXJuIHRoaXMudGh1bWJzJDtcbiAgfVxuXG4gIGdldE1haW4oKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5tYWluSW1hZ2UkO1xuICB9XG5cbiAgb3BlbkltYWdlKGl0ZW06IENhcm91c2VsSXRlbSk6IHZvaWQge1xuICAgIHRoaXMubWFpbk1lZGlhQ29udGFpbmVyLm5leHQoaXRlbS5tZWRpYS5jb250YWluZXIpO1xuICB9XG5cbiAgLyoqIGZpbmQgdGhlIGluZGV4IG9mIHRoZSBtYWluIG1lZGlhIGluIHRoZSBsaXN0IG9mIG1lZGlhICovXG4gIGdldEFjdGl2ZSh0aHVtYnM6IENhcm91c2VsSXRlbVtdKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5tYWluTWVkaWFDb250YWluZXIucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIG1hcCgoY29udGFpbmVyOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHRodW1icy5maW5kKFxuICAgICAgICAgIHQgPT5cbiAgICAgICAgICAgIHQubWVkaWEgJiZcbiAgICAgICAgICAgIGNvbnRhaW5lci56b29tICYmXG4gICAgICAgICAgICB0Lm1lZGlhLmNvbnRhaW5lciAmJlxuICAgICAgICAgICAgdC5tZWRpYS5jb250YWluZXIuem9vbSAmJlxuICAgICAgICAgICAgdC5tZWRpYS5jb250YWluZXIuem9vbS51cmwgPT09IGNvbnRhaW5lci56b29tLnVybFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gdGh1bWJzLmluZGV4T2YoY3VycmVudCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIENhcm91c2VsSXRlbXMgZm9yIHRoZSBwcm9kdWN0IHRodW1ibmFpbHMuXG4gICAqIEluIGNhc2UgdGhlcmUgYXJlIGxlc3MgdGhlbiAyIHRodW1icywgd2UgcmV0dXJuIG51bGwuXG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZUNhcm91c2VsSXRlbXMocHJvZHVjdDogUHJvZHVjdCk6IENhcm91c2VsSXRlbVtdIHtcbiAgICBpZiAoXG4gICAgICAhcHJvZHVjdC5pbWFnZXMgfHxcbiAgICAgICFwcm9kdWN0LmltYWdlcy5HQUxMRVJZIHx8XG4gICAgICBwcm9kdWN0LmltYWdlcy5HQUxMRVJZLmxlbmd0aCA8IDJcbiAgICApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoPGFueVtdPnByb2R1Y3QuaW1hZ2VzLkdBTExFUlkpLm1hcChjID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1lZGlhOiB7XG4gICAgICAgICAgY29udGFpbmVyOiBjLFxuICAgICAgICAgIGZvcm1hdDogJ3RodW1ibmFpbCcsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG59XG4iXX0=