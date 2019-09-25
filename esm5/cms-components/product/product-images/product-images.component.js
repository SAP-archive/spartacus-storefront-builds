/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
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
        function (product) { return _this.createThumbs(product); })));
        this.mainImage$ = combineLatest([this.product$, this.mainMediaContainer]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), container = _b[1];
            return container;
        })));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    ProductImagesComponent.prototype.openImage = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.mainMediaContainer.next(item);
    };
    /**
     * @param {?} thumbnail
     * @return {?}
     */
    ProductImagesComponent.prototype.isActive = /**
     * @param {?} thumbnail
     * @return {?}
     */
    function (thumbnail) {
        return this.mainMediaContainer.pipe(filter(Boolean), map((/**
         * @param {?} container
         * @return {?}
         */
        function (container) {
            return (container.zoom &&
                container.zoom.url &&
                thumbnail.zoom &&
                thumbnail.zoom.url &&
                container.zoom.url === thumbnail.zoom.url);
        })));
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
    ProductImagesComponent.prototype.createThumbs = /**
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
            return [];
        }
        return ((/** @type {?} */ (product.images.GALLERY))).map((/**
         * @param {?} c
         * @return {?}
         */
        function (c) { return of({ container: c }); }));
    };
    ProductImagesComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-images',
                    template: "<ng-container *ngIf=\"mainImage$ | async as main\">\n  <cx-media [container]=\"main\" format=\"zoom\"> </cx-media>\n</ng-container>\n\n<cx-carousel\n  class=\"thumbs\"\n  [items]=\"thumbs$ | async\"\n  itemWidth=\"120px\"\n  [hideIndicators]=\"false\"\n  [template]=\"thumb\"\n></cx-carousel>\n\n<ng-template #thumb let-item=\"item\">\n  <cx-media\n    [container]=\"item.container\"\n    tabindex=\"0\"\n    format=\"thumbnail\"\n    (focus)=\"openImage(item.container)\"\n    [class.is-active]=\"isActive(item.container) | async\"\n  >\n  </cx-media>\n</ng-template>\n",
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
    /** @type {?} */
    ProductImagesComponent.prototype.thumbs$;
    /** @type {?} */
    ProductImagesComponent.prototype.mainImage$;
    /**
     * @type {?}
     * @private
     */
    ProductImagesComponent.prototype.currentProductService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWltYWdlcy9wcm9kdWN0LWltYWdlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5FLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVuRTtJQTBCRSxnQ0FBb0IscUJBQTRDO1FBQWhFLGlCQUFvRTtRQUFoRCwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBcEJ4RCx1QkFBa0IsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUvQyxhQUFRLEdBRVosSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FDOUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLG9CQUFvQixFQUFFLEVBQ3RCLEdBQUc7Ozs7UUFBQyxVQUFDLENBQVU7WUFDYixPQUFBLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUE5RCxDQUE4RCxFQUMvRCxDQUNGLENBQUM7UUFFRixZQUFPLEdBQXNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM3QyxHQUFHOzs7O1FBQUMsVUFBQSxP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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1pbWFnZXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1pbWFnZXMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdEltYWdlc0NvbXBvbmVudCB7XG4gIHByaXZhdGUgbWFpbk1lZGlhQ29udGFpbmVyID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcblxuICBwcml2YXRlIHByb2R1Y3QkOiBPYnNlcnZhYmxlPFxuICAgIFByb2R1Y3RcbiAgPiA9IHRoaXMuY3VycmVudFByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3QoKS5waXBlKFxuICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgIHRhcCgocDogUHJvZHVjdCkgPT5cbiAgICAgIHRoaXMubWFpbk1lZGlhQ29udGFpbmVyLm5leHQocC5pbWFnZXMgPyBwLmltYWdlcy5QUklNQVJZIDoge30pXG4gICAgKVxuICApO1xuXG4gIHRodW1icyQ6IE9ic2VydmFibGU8YW55W10+ID0gdGhpcy5wcm9kdWN0JC5waXBlKFxuICAgIG1hcChwcm9kdWN0ID0+IHRoaXMuY3JlYXRlVGh1bWJzKHByb2R1Y3QpKVxuICApO1xuXG4gIG1haW5JbWFnZSQgPSBjb21iaW5lTGF0ZXN0KFt0aGlzLnByb2R1Y3QkLCB0aGlzLm1haW5NZWRpYUNvbnRhaW5lcl0pLnBpcGUoXG4gICAgbWFwKChbLCBjb250YWluZXJdKSA9PiBjb250YWluZXIpXG4gICk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjdXJyZW50UHJvZHVjdFNlcnZpY2U6IEN1cnJlbnRQcm9kdWN0U2VydmljZSkge31cblxuICBvcGVuSW1hZ2UoaXRlbTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tYWluTWVkaWFDb250YWluZXIubmV4dChpdGVtKTtcbiAgfVxuXG4gIGlzQWN0aXZlKHRodW1ibmFpbCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLm1haW5NZWRpYUNvbnRhaW5lci5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgbWFwKChjb250YWluZXI6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIGNvbnRhaW5lci56b29tICYmXG4gICAgICAgICAgY29udGFpbmVyLnpvb20udXJsICYmXG4gICAgICAgICAgdGh1bWJuYWlsLnpvb20gJiZcbiAgICAgICAgICB0aHVtYm5haWwuem9vbS51cmwgJiZcbiAgICAgICAgICBjb250YWluZXIuem9vbS51cmwgPT09IHRodW1ibmFpbC56b29tLnVybFxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqIGZpbmQgdGhlIGluZGV4IG9mIHRoZSBtYWluIG1lZGlhIGluIHRoZSBsaXN0IG9mIG1lZGlhICovXG4gIGdldEFjdGl2ZSh0aHVtYnM6IGFueVtdKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5tYWluTWVkaWFDb250YWluZXIucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIG1hcCgoY29udGFpbmVyOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHRodW1icy5maW5kKFxuICAgICAgICAgIHQgPT5cbiAgICAgICAgICAgIHQubWVkaWEgJiZcbiAgICAgICAgICAgIGNvbnRhaW5lci56b29tICYmXG4gICAgICAgICAgICB0Lm1lZGlhLmNvbnRhaW5lciAmJlxuICAgICAgICAgICAgdC5tZWRpYS5jb250YWluZXIuem9vbSAmJlxuICAgICAgICAgICAgdC5tZWRpYS5jb250YWluZXIuem9vbS51cmwgPT09IGNvbnRhaW5lci56b29tLnVybFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gdGh1bWJzLmluZGV4T2YoY3VycmVudCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIENhcm91c2VsSXRlbXMgZm9yIHRoZSBwcm9kdWN0IHRodW1ibmFpbHMuXG4gICAqIEluIGNhc2UgdGhlcmUgYXJlIGxlc3MgdGhlbiAyIHRodW1icywgd2UgcmV0dXJuIG51bGwuXG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZVRodW1icyhwcm9kdWN0OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxhbnk+W10ge1xuICAgIGlmIChcbiAgICAgICFwcm9kdWN0LmltYWdlcyB8fFxuICAgICAgIXByb2R1Y3QuaW1hZ2VzLkdBTExFUlkgfHxcbiAgICAgIHByb2R1Y3QuaW1hZ2VzLkdBTExFUlkubGVuZ3RoIDwgMlxuICAgICkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiAoPGFueVtdPnByb2R1Y3QuaW1hZ2VzLkdBTExFUlkpLm1hcChjID0+IG9mKHsgY29udGFpbmVyOiBjIH0pKTtcbiAgfVxufVxuIl19