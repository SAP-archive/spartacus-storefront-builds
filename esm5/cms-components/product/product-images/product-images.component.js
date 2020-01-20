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
        function (product) { return _this.createThumbs(product); })), 
        // TODO: deprecated, remove the below tap (issue:#6166)
        tap((/**
         * @param {?} thumbs
         * @return {?}
         */
        function (thumbs) {
            _this.isThumbsEmpty = thumbs.length === 0;
        })));
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
                    template: "<ng-container *ngIf=\"mainImage$ | async as main\">\n  <cx-media [container]=\"main\" format=\"zoom\"> </cx-media>\n</ng-container>\n\n<ng-container *ngIf=\"thumbs$ | async as thumbs\">\n  <cx-carousel\n    *ngIf=\"thumbs.length\"\n    class=\"thumbs\"\n    [items]=\"thumbs\"\n    itemWidth=\"120px\"\n    [hideIndicators]=\"false\"\n    [template]=\"thumb\"\n  ></cx-carousel>\n</ng-container>\n\n<ng-template #thumb let-item=\"item\">\n  <cx-media\n    [container]=\"item.container\"\n    tabindex=\"0\"\n    format=\"thumbnail\"\n    (focus)=\"openImage(item.container)\"\n    [class.is-active]=\"isActive(item.container) | async\"\n  >\n  </cx-media>\n</ng-template>\n",
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
     * @deprecated since version 1.5
     * This variable will no longer be in use. Use thumbs$ observable instead.
     * TODO(issue:#6166).
     * @type {?}
     */
    ProductImagesComponent.prototype.isThumbsEmpty;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWltYWdlcy9wcm9kdWN0LWltYWdlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5FLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVuRTtJQXFDRSxnQ0FBb0IscUJBQTRDO1FBQWhFLGlCQUFvRTtRQUFoRCwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBL0J4RCx1QkFBa0IsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUvQyxhQUFRLEdBRVosSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FDOUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLG9CQUFvQixFQUFFLEVBQ3RCLEdBQUc7Ozs7UUFBQyxVQUFDLENBQVU7WUFDYixPQUFBLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUE5RCxDQUE4RCxFQUMvRCxDQUNGLENBQUM7UUFTRixZQUFPLEdBQXNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM3QyxHQUFHOzs7O1FBQUMsVUFBQSxP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OUIsNkJBQUM7Q0FBQSxBQTNGRCxJQTJGQztTQXRGWSxzQkFBc0I7Ozs7OztJQUNqQyxvREFBdUQ7Ozs7O0lBRXZELDBDQVFFOzs7Ozs7O0lBT0YsK0NBQXVCOztJQUV2Qix5Q0FNRTs7SUFFRiw0Q0FFRTs7Ozs7SUFFVSx1REFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vY3VycmVudC1wcm9kdWN0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LWltYWdlcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWltYWdlcy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0SW1hZ2VzQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBtYWluTWVkaWFDb250YWluZXIgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuXG4gIHByaXZhdGUgcHJvZHVjdCQ6IE9ic2VydmFibGU8XG4gICAgUHJvZHVjdFxuICA+ID0gdGhpcy5jdXJyZW50UHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdCgpLnBpcGUoXG4gICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgdGFwKChwOiBQcm9kdWN0KSA9PlxuICAgICAgdGhpcy5tYWluTWVkaWFDb250YWluZXIubmV4dChwLmltYWdlcyA/IHAuaW1hZ2VzLlBSSU1BUlkgOiB7fSlcbiAgICApXG4gICk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS41XG4gICAqIFRoaXMgdmFyaWFibGUgd2lsbCBubyBsb25nZXIgYmUgaW4gdXNlLiBVc2UgdGh1bWJzJCBvYnNlcnZhYmxlIGluc3RlYWQuXG4gICAqIFRPRE8oaXNzdWU6IzYxNjYpLlxuICAgKi9cbiAgaXNUaHVtYnNFbXB0eTogYm9vbGVhbjtcblxuICB0aHVtYnMkOiBPYnNlcnZhYmxlPGFueVtdPiA9IHRoaXMucHJvZHVjdCQucGlwZShcbiAgICBtYXAocHJvZHVjdCA9PiB0aGlzLmNyZWF0ZVRodW1icyhwcm9kdWN0KSksXG4gICAgLy8gVE9ETzogZGVwcmVjYXRlZCwgcmVtb3ZlIHRoZSBiZWxvdyB0YXAgKGlzc3VlOiM2MTY2KVxuICAgIHRhcCh0aHVtYnMgPT4ge1xuICAgICAgdGhpcy5pc1RodW1ic0VtcHR5ID0gdGh1bWJzLmxlbmd0aCA9PT0gMDtcbiAgICB9KVxuICApO1xuXG4gIG1haW5JbWFnZSQgPSBjb21iaW5lTGF0ZXN0KFt0aGlzLnByb2R1Y3QkLCB0aGlzLm1haW5NZWRpYUNvbnRhaW5lcl0pLnBpcGUoXG4gICAgbWFwKChbLCBjb250YWluZXJdKSA9PiBjb250YWluZXIpXG4gICk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjdXJyZW50UHJvZHVjdFNlcnZpY2U6IEN1cnJlbnRQcm9kdWN0U2VydmljZSkge31cblxuICBvcGVuSW1hZ2UoaXRlbTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tYWluTWVkaWFDb250YWluZXIubmV4dChpdGVtKTtcbiAgfVxuXG4gIGlzQWN0aXZlKHRodW1ibmFpbCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLm1haW5NZWRpYUNvbnRhaW5lci5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgbWFwKChjb250YWluZXI6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIGNvbnRhaW5lci56b29tICYmXG4gICAgICAgICAgY29udGFpbmVyLnpvb20udXJsICYmXG4gICAgICAgICAgdGh1bWJuYWlsLnpvb20gJiZcbiAgICAgICAgICB0aHVtYm5haWwuem9vbS51cmwgJiZcbiAgICAgICAgICBjb250YWluZXIuem9vbS51cmwgPT09IHRodW1ibmFpbC56b29tLnVybFxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqIGZpbmQgdGhlIGluZGV4IG9mIHRoZSBtYWluIG1lZGlhIGluIHRoZSBsaXN0IG9mIG1lZGlhICovXG4gIGdldEFjdGl2ZSh0aHVtYnM6IGFueVtdKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5tYWluTWVkaWFDb250YWluZXIucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIG1hcCgoY29udGFpbmVyOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHRodW1icy5maW5kKFxuICAgICAgICAgIHQgPT5cbiAgICAgICAgICAgIHQubWVkaWEgJiZcbiAgICAgICAgICAgIGNvbnRhaW5lci56b29tICYmXG4gICAgICAgICAgICB0Lm1lZGlhLmNvbnRhaW5lciAmJlxuICAgICAgICAgICAgdC5tZWRpYS5jb250YWluZXIuem9vbSAmJlxuICAgICAgICAgICAgdC5tZWRpYS5jb250YWluZXIuem9vbS51cmwgPT09IGNvbnRhaW5lci56b29tLnVybFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gdGh1bWJzLmluZGV4T2YoY3VycmVudCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIENhcm91c2VsSXRlbXMgZm9yIHRoZSBwcm9kdWN0IHRodW1ibmFpbHMuXG4gICAqIEluIGNhc2UgdGhlcmUgYXJlIGxlc3MgdGhlbiAyIHRodW1icywgd2UgcmV0dXJuIG51bGwuXG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZVRodW1icyhwcm9kdWN0OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxhbnk+W10ge1xuICAgIGlmIChcbiAgICAgICFwcm9kdWN0LmltYWdlcyB8fFxuICAgICAgIXByb2R1Y3QuaW1hZ2VzLkdBTExFUlkgfHxcbiAgICAgIHByb2R1Y3QuaW1hZ2VzLkdBTExFUlkubGVuZ3RoIDwgMlxuICAgICkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiAoPGFueVtdPnByb2R1Y3QuaW1hZ2VzLkdBTExFUlkpLm1hcChjID0+IG9mKHsgY29udGFpbmVyOiBjIH0pKTtcbiAgfVxufVxuIl19