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
        function (product) { return _this.createThumbs(product); })), tap((/**
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
                    template: "<ng-container *ngIf=\"mainImage$ | async as main\">\n  <cx-media [container]=\"main\" format=\"zoom\"> </cx-media>\n</ng-container>\n\n<cx-carousel\n  *ngIf=\"!isThumbsEmpty\"\n  class=\"thumbs\"\n  [items]=\"thumbs$ | async\"\n  itemWidth=\"120px\"\n  [hideIndicators]=\"false\"\n  [template]=\"thumb\"\n></cx-carousel>\n\n<ng-template #thumb let-item=\"item\">\n  <cx-media\n    [container]=\"item.container\"\n    tabindex=\"0\"\n    format=\"thumbnail\"\n    (focus)=\"openImage(item.container)\"\n    [class.is-active]=\"isActive(item.container) | async\"\n  >\n  </cx-media>\n</ng-template>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWltYWdlcy9wcm9kdWN0LWltYWdlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5FLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVuRTtJQStCRSxnQ0FBb0IscUJBQTRDO1FBQWhFLGlCQUFvRTtRQUFoRCwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBekJ4RCx1QkFBa0IsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUvQyxhQUFRLEdBRVosSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FDOUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLG9CQUFvQixFQUFFLEVBQ3RCLEdBQUc7Ozs7UUFBQyxVQUFDLENBQVU7WUFDYixPQUFBLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUE5RCxDQUE4RCxFQUMvRCxDQUNGLENBQUM7UUFJRixZQUFPLEdBQXNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM3QyxHQUFHOzs7O1FBQUMsVUFBQSxP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LEFBckZELElBcUZDO1NBaEZZLHNCQUFzQjs7Ozs7O0lBQ2pDLG9EQUF1RDs7Ozs7SUFFdkQsMENBUUU7O0lBRUYsK0NBQXVCOztJQUV2Qix5Q0FLRTs7SUFFRiw0Q0FFRTs7Ozs7SUFFVSx1REFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vY3VycmVudC1wcm9kdWN0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LWltYWdlcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWltYWdlcy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0SW1hZ2VzQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBtYWluTWVkaWFDb250YWluZXIgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KG51bGwpO1xuXG4gIHByaXZhdGUgcHJvZHVjdCQ6IE9ic2VydmFibGU8XG4gICAgUHJvZHVjdFxuICA+ID0gdGhpcy5jdXJyZW50UHJvZHVjdFNlcnZpY2UuZ2V0UHJvZHVjdCgpLnBpcGUoXG4gICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgdGFwKChwOiBQcm9kdWN0KSA9PlxuICAgICAgdGhpcy5tYWluTWVkaWFDb250YWluZXIubmV4dChwLmltYWdlcyA/IHAuaW1hZ2VzLlBSSU1BUlkgOiB7fSlcbiAgICApXG4gICk7XG5cbiAgaXNUaHVtYnNFbXB0eTogYm9vbGVhbjtcblxuICB0aHVtYnMkOiBPYnNlcnZhYmxlPGFueVtdPiA9IHRoaXMucHJvZHVjdCQucGlwZShcbiAgICBtYXAocHJvZHVjdCA9PiB0aGlzLmNyZWF0ZVRodW1icyhwcm9kdWN0KSksXG4gICAgdGFwKHRodW1icyA9PiB7XG4gICAgICB0aGlzLmlzVGh1bWJzRW1wdHkgPSB0aHVtYnMubGVuZ3RoID09PSAwO1xuICAgIH0pXG4gICk7XG5cbiAgbWFpbkltYWdlJCA9IGNvbWJpbmVMYXRlc3QoW3RoaXMucHJvZHVjdCQsIHRoaXMubWFpbk1lZGlhQ29udGFpbmVyXSkucGlwZShcbiAgICBtYXAoKFssIGNvbnRhaW5lcl0pID0+IGNvbnRhaW5lcilcbiAgKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlKSB7fVxuXG4gIG9wZW5JbWFnZShpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1haW5NZWRpYUNvbnRhaW5lci5uZXh0KGl0ZW0pO1xuICB9XG5cbiAgaXNBY3RpdmUodGh1bWJuYWlsKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMubWFpbk1lZGlhQ29udGFpbmVyLnBpcGUoXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBtYXAoKGNvbnRhaW5lcjogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgY29udGFpbmVyLnpvb20gJiZcbiAgICAgICAgICBjb250YWluZXIuem9vbS51cmwgJiZcbiAgICAgICAgICB0aHVtYm5haWwuem9vbSAmJlxuICAgICAgICAgIHRodW1ibmFpbC56b29tLnVybCAmJlxuICAgICAgICAgIGNvbnRhaW5lci56b29tLnVybCA9PT0gdGh1bWJuYWlsLnpvb20udXJsXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKiogZmluZCB0aGUgaW5kZXggb2YgdGhlIG1haW4gbWVkaWEgaW4gdGhlIGxpc3Qgb2YgbWVkaWEgKi9cbiAgZ2V0QWN0aXZlKHRodW1iczogYW55W10pOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLm1haW5NZWRpYUNvbnRhaW5lci5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgbWFwKChjb250YWluZXI6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gdGh1bWJzLmZpbmQoXG4gICAgICAgICAgdCA9PlxuICAgICAgICAgICAgdC5tZWRpYSAmJlxuICAgICAgICAgICAgY29udGFpbmVyLnpvb20gJiZcbiAgICAgICAgICAgIHQubWVkaWEuY29udGFpbmVyICYmXG4gICAgICAgICAgICB0Lm1lZGlhLmNvbnRhaW5lci56b29tICYmXG4gICAgICAgICAgICB0Lm1lZGlhLmNvbnRhaW5lci56b29tLnVybCA9PT0gY29udGFpbmVyLnpvb20udXJsXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0aHVtYnMuaW5kZXhPZihjdXJyZW50KTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgQ2Fyb3VzZWxJdGVtcyBmb3IgdGhlIHByb2R1Y3QgdGh1bWJuYWlscy5cbiAgICogSW4gY2FzZSB0aGVyZSBhcmUgbGVzcyB0aGVuIDIgdGh1bWJzLCB3ZSByZXR1cm4gbnVsbC5cbiAgICovXG4gIHByaXZhdGUgY3JlYXRlVGh1bWJzKHByb2R1Y3Q6IFByb2R1Y3QpOiBPYnNlcnZhYmxlPGFueT5bXSB7XG4gICAgaWYgKFxuICAgICAgIXByb2R1Y3QuaW1hZ2VzIHx8XG4gICAgICAhcHJvZHVjdC5pbWFnZXMuR0FMTEVSWSB8fFxuICAgICAgcHJvZHVjdC5pbWFnZXMuR0FMTEVSWS5sZW5ndGggPCAyXG4gICAgKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuICg8YW55W10+cHJvZHVjdC5pbWFnZXMuR0FMTEVSWSkubWFwKGMgPT4gb2YoeyBjb250YWluZXI6IGMgfSkpO1xuICB9XG59XG4iXX0=