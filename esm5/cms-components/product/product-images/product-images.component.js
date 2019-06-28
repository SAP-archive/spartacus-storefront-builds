/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            var _b = tslib_1.__read(_a, 2), _ = _b[0], container = _b[1];
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
                    template: "<ng-container *ngIf=\"(mainImage$ | async) as main\">\n  <cx-media [container]=\"main\" format=\"zoom\"> </cx-media>\n</ng-container>\n\n<cx-carousel\n  class=\"thumbs\"\n  [items]=\"thumbs$ | async\"\n  itemWidth=\"120px\"\n  [hideIndicators]=\"false\"\n  [template]=\"thumb\"\n></cx-carousel>\n\n<ng-template #thumb let-item=\"item\">\n  <cx-media\n    [container]=\"item.container\"\n    tabindex=\"0\"\n    format=\"thumbnail\"\n    (focus)=\"openImage(item.container)\"\n    [class.is-active]=\"isActive(item.container) | async\"\n  >\n  </cx-media>\n</ng-template>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWltYWdlcy9wcm9kdWN0LWltYWdlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5FLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVuRTtJQTBCRSxnQ0FBb0IscUJBQTRDO1FBQWhFLGlCQUFvRTtRQUFoRCwwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBcEJ4RCx1QkFBa0IsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUvQyxhQUFRLEdBRVosSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FDOUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLG9CQUFvQixFQUFFLEVBQ3RCLEdBQUc7Ozs7UUFBQyxVQUFDLENBQVU7WUFDYixPQUFBLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUE5RCxDQUE4RCxFQUMvRCxDQUNGLENBQUM7UUFFRixZQUFPLEdBQXNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM3QyxHQUFHOzs7O1FBQUMsVUFBQSxP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QUVVLHVEQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDdXJyZW50UHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtaW1hZ2VzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtaW1hZ2VzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RJbWFnZXNDb21wb25lbnQge1xuICBwcml2YXRlIG1haW5NZWRpYUNvbnRhaW5lciA9IG5ldyBCZWhhdmlvclN1YmplY3QobnVsbCk7XG5cbiAgcHJpdmF0ZSBwcm9kdWN0JDogT2JzZXJ2YWJsZTxcbiAgICBQcm9kdWN0XG4gID4gPSB0aGlzLmN1cnJlbnRQcm9kdWN0U2VydmljZS5nZXRQcm9kdWN0KCkucGlwZShcbiAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICB0YXAoKHA6IFByb2R1Y3QpID0+XG4gICAgICB0aGlzLm1haW5NZWRpYUNvbnRhaW5lci5uZXh0KHAuaW1hZ2VzID8gcC5pbWFnZXMuUFJJTUFSWSA6IHt9KVxuICAgIClcbiAgKTtcblxuICB0aHVtYnMkOiBPYnNlcnZhYmxlPGFueVtdPiA9IHRoaXMucHJvZHVjdCQucGlwZShcbiAgICBtYXAocHJvZHVjdCA9PiB0aGlzLmNyZWF0ZVRodW1icyhwcm9kdWN0KSlcbiAgKTtcblxuICBtYWluSW1hZ2UkID0gY29tYmluZUxhdGVzdChbdGhpcy5wcm9kdWN0JCwgdGhpcy5tYWluTWVkaWFDb250YWluZXJdKS5waXBlKFxuICAgIG1hcCgoW18sIGNvbnRhaW5lcl0pID0+IGNvbnRhaW5lcilcbiAgKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlKSB7fVxuXG4gIG9wZW5JbWFnZShpdGVtOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1haW5NZWRpYUNvbnRhaW5lci5uZXh0KGl0ZW0pO1xuICB9XG5cbiAgaXNBY3RpdmUodGh1bWJuYWlsKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMubWFpbk1lZGlhQ29udGFpbmVyLnBpcGUoXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBtYXAoKGNvbnRhaW5lcjogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgY29udGFpbmVyLnpvb20gJiZcbiAgICAgICAgICBjb250YWluZXIuem9vbS51cmwgJiZcbiAgICAgICAgICB0aHVtYm5haWwuem9vbSAmJlxuICAgICAgICAgIHRodW1ibmFpbC56b29tLnVybCAmJlxuICAgICAgICAgIGNvbnRhaW5lci56b29tLnVybCA9PT0gdGh1bWJuYWlsLnpvb20udXJsXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKiogZmluZCB0aGUgaW5kZXggb2YgdGhlIG1haW4gbWVkaWEgaW4gdGhlIGxpc3Qgb2YgbWVkaWEgKi9cbiAgZ2V0QWN0aXZlKHRodW1iczogYW55W10pOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLm1haW5NZWRpYUNvbnRhaW5lci5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgbWFwKChjb250YWluZXI6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gdGh1bWJzLmZpbmQoXG4gICAgICAgICAgdCA9PlxuICAgICAgICAgICAgdC5tZWRpYSAmJlxuICAgICAgICAgICAgY29udGFpbmVyLnpvb20gJiZcbiAgICAgICAgICAgIHQubWVkaWEuY29udGFpbmVyICYmXG4gICAgICAgICAgICB0Lm1lZGlhLmNvbnRhaW5lci56b29tICYmXG4gICAgICAgICAgICB0Lm1lZGlhLmNvbnRhaW5lci56b29tLnVybCA9PT0gY29udGFpbmVyLnpvb20udXJsXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiB0aHVtYnMuaW5kZXhPZihjdXJyZW50KTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gYW4gYXJyYXkgb2YgQ2Fyb3VzZWxJdGVtcyBmb3IgdGhlIHByb2R1Y3QgdGh1bWJuYWlscy5cbiAgICogSW4gY2FzZSB0aGVyZSBhcmUgbGVzcyB0aGVuIDIgdGh1bWJzLCB3ZSByZXR1cm4gbnVsbC5cbiAgICovXG4gIHByaXZhdGUgY3JlYXRlVGh1bWJzKHByb2R1Y3Q6IFByb2R1Y3QpOiBPYnNlcnZhYmxlPGFueT5bXSB7XG4gICAgaWYgKFxuICAgICAgIXByb2R1Y3QuaW1hZ2VzIHx8XG4gICAgICAhcHJvZHVjdC5pbWFnZXMuR0FMTEVSWSB8fFxuICAgICAgcHJvZHVjdC5pbWFnZXMuR0FMTEVSWS5sZW5ndGggPCAyXG4gICAgKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgcmV0dXJuICg8YW55W10+cHJvZHVjdC5pbWFnZXMuR0FMTEVSWSkubWFwKGMgPT4gb2YoeyBjb250YWluZXI6IGMgfSkpO1xuICB9XG59XG4iXX0=