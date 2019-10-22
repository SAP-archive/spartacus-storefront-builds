/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { CurrentProductService } from '../current-product.service';
export class ProductImagesComponent {
    /**
     * @param {?} currentProductService
     */
    constructor(currentProductService) {
        this.currentProductService = currentProductService;
        this.mainMediaContainer = new BehaviorSubject(null);
        this.product$ = this.currentProductService.getProduct().pipe(filter(Boolean), distinctUntilChanged(), tap((/**
         * @param {?} p
         * @return {?}
         */
        (p) => this.mainMediaContainer.next(p.images ? p.images.PRIMARY : {}))));
        this.thumbs$ = this.product$.pipe(map((/**
         * @param {?} product
         * @return {?}
         */
        product => this.createThumbs(product))), tap((/**
         * @param {?} thumbs
         * @return {?}
         */
        thumbs => {
            this.isThumbsEmpty = thumbs.length === 0;
        })));
        this.mainImage$ = combineLatest([this.product$, this.mainMediaContainer]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([, container]) => container)));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    openImage(item) {
        this.mainMediaContainer.next(item);
    }
    /**
     * @param {?} thumbnail
     * @return {?}
     */
    isActive(thumbnail) {
        return this.mainMediaContainer.pipe(filter(Boolean), map((/**
         * @param {?} container
         * @return {?}
         */
        (container) => {
            return (container.zoom &&
                container.zoom.url &&
                thumbnail.zoom &&
                thumbnail.zoom.url &&
                container.zoom.url === thumbnail.zoom.url);
        })));
    }
    /**
     * find the index of the main media in the list of media
     * @param {?} thumbs
     * @return {?}
     */
    getActive(thumbs) {
        return this.mainMediaContainer.pipe(filter(Boolean), map((/**
         * @param {?} container
         * @return {?}
         */
        (container) => {
            /** @type {?} */
            const current = thumbs.find((/**
             * @param {?} t
             * @return {?}
             */
            t => t.media &&
                container.zoom &&
                t.media.container &&
                t.media.container.zoom &&
                t.media.container.zoom.url === container.zoom.url));
            return thumbs.indexOf(current);
        })));
    }
    /**
     * Return an array of CarouselItems for the product thumbnails.
     * In case there are less then 2 thumbs, we return null.
     * @private
     * @param {?} product
     * @return {?}
     */
    createThumbs(product) {
        if (!product.images ||
            !product.images.GALLERY ||
            product.images.GALLERY.length < 2) {
            return [];
        }
        return ((/** @type {?} */ (product.images.GALLERY))).map((/**
         * @param {?} c
         * @return {?}
         */
        c => of({ container: c })));
    }
}
ProductImagesComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-images',
                template: "<ng-container *ngIf=\"mainImage$ | async as main\">\n  <cx-media [container]=\"main\" format=\"zoom\"> </cx-media>\n</ng-container>\n\n<cx-carousel\n  *ngIf=\"!isThumbsEmpty\"\n  class=\"thumbs\"\n  [items]=\"thumbs$ | async\"\n  itemWidth=\"120px\"\n  [hideIndicators]=\"false\"\n  [template]=\"thumb\"\n></cx-carousel>\n\n<ng-template #thumb let-item=\"item\">\n  <cx-media\n    [container]=\"item.container\"\n    tabindex=\"0\"\n    format=\"thumbnail\"\n    (focus)=\"openImage(item.container)\"\n    [class.is-active]=\"isActive(item.container) | async\"\n  >\n  </cx-media>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ProductImagesComponent.ctorParameters = () => [
    { type: CurrentProductService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWltYWdlcy9wcm9kdWN0LWltYWdlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBT25FLE1BQU0sT0FBTyxzQkFBc0I7Ozs7SUEwQmpDLFlBQW9CLHFCQUE0QztRQUE1QywwQkFBcUIsR0FBckIscUJBQXFCLENBQXVCO1FBekJ4RCx1QkFBa0IsR0FBRyxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUvQyxhQUFRLEdBRVosSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FDOUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLG9CQUFvQixFQUFFLEVBQ3RCLEdBQUc7Ozs7UUFBQyxDQUFDLENBQVUsRUFBRSxFQUFFLENBQ2pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUMvRCxDQUNGLENBQUM7UUFJRixZQUFPLEdBQXNCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM3QyxHQUFHOzs7O1FBQUMsT0FBTyxD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b3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1pbWFnZXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1pbWFnZXMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdEltYWdlc0NvbXBvbmVudCB7XG4gIHByaXZhdGUgbWFpbk1lZGlhQ29udGFpbmVyID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcblxuICBwcml2YXRlIHByb2R1Y3QkOiBPYnNlcnZhYmxlPFxuICAgIFByb2R1Y3RcbiAgPiA9IHRoaXMuY3VycmVudFByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3QoKS5waXBlKFxuICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgIHRhcCgocDogUHJvZHVjdCkgPT5cbiAgICAgIHRoaXMubWFpbk1lZGlhQ29udGFpbmVyLm5leHQocC5pbWFnZXMgPyBwLmltYWdlcy5QUklNQVJZIDoge30pXG4gICAgKVxuICApO1xuXG4gIGlzVGh1bWJzRW1wdHk6IGJvb2xlYW47XG5cbiAgdGh1bWJzJDogT2JzZXJ2YWJsZTxhbnlbXT4gPSB0aGlzLnByb2R1Y3QkLnBpcGUoXG4gICAgbWFwKHByb2R1Y3QgPT4gdGhpcy5jcmVhdGVUaHVtYnMocHJvZHVjdCkpLFxuICAgIHRhcCh0aHVtYnMgPT4ge1xuICAgICAgdGhpcy5pc1RodW1ic0VtcHR5ID0gdGh1bWJzLmxlbmd0aCA9PT0gMDtcbiAgICB9KVxuICApO1xuXG4gIG1haW5JbWFnZSQgPSBjb21iaW5lTGF0ZXN0KFt0aGlzLnByb2R1Y3QkLCB0aGlzLm1haW5NZWRpYUNvbnRhaW5lcl0pLnBpcGUoXG4gICAgbWFwKChbLCBjb250YWluZXJdKSA9PiBjb250YWluZXIpXG4gICk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjdXJyZW50UHJvZHVjdFNlcnZpY2U6IEN1cnJlbnRQcm9kdWN0U2VydmljZSkge31cblxuICBvcGVuSW1hZ2UoaXRlbTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tYWluTWVkaWFDb250YWluZXIubmV4dChpdGVtKTtcbiAgfVxuXG4gIGlzQWN0aXZlKHRodW1ibmFpbCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLm1haW5NZWRpYUNvbnRhaW5lci5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgbWFwKChjb250YWluZXI6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIGNvbnRhaW5lci56b29tICYmXG4gICAgICAgICAgY29udGFpbmVyLnpvb20udXJsICYmXG4gICAgICAgICAgdGh1bWJuYWlsLnpvb20gJiZcbiAgICAgICAgICB0aHVtYm5haWwuem9vbS51cmwgJiZcbiAgICAgICAgICBjb250YWluZXIuem9vbS51cmwgPT09IHRodW1ibmFpbC56b29tLnVybFxuICAgICAgICApO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqIGZpbmQgdGhlIGluZGV4IG9mIHRoZSBtYWluIG1lZGlhIGluIHRoZSBsaXN0IG9mIG1lZGlhICovXG4gIGdldEFjdGl2ZSh0aHVtYnM6IGFueVtdKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5tYWluTWVkaWFDb250YWluZXIucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIG1hcCgoY29udGFpbmVyOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IHRodW1icy5maW5kKFxuICAgICAgICAgIHQgPT5cbiAgICAgICAgICAgIHQubWVkaWEgJiZcbiAgICAgICAgICAgIGNvbnRhaW5lci56b29tICYmXG4gICAgICAgICAgICB0Lm1lZGlhLmNvbnRhaW5lciAmJlxuICAgICAgICAgICAgdC5tZWRpYS5jb250YWluZXIuem9vbSAmJlxuICAgICAgICAgICAgdC5tZWRpYS5jb250YWluZXIuem9vbS51cmwgPT09IGNvbnRhaW5lci56b29tLnVybFxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gdGh1bWJzLmluZGV4T2YoY3VycmVudCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFuIGFycmF5IG9mIENhcm91c2VsSXRlbXMgZm9yIHRoZSBwcm9kdWN0IHRodW1ibmFpbHMuXG4gICAqIEluIGNhc2UgdGhlcmUgYXJlIGxlc3MgdGhlbiAyIHRodW1icywgd2UgcmV0dXJuIG51bGwuXG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZVRodW1icyhwcm9kdWN0OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxhbnk+W10ge1xuICAgIGlmIChcbiAgICAgICFwcm9kdWN0LmltYWdlcyB8fFxuICAgICAgIXByb2R1Y3QuaW1hZ2VzLkdBTExFUlkgfHxcbiAgICAgIHByb2R1Y3QuaW1hZ2VzLkdBTExFUlkubGVuZ3RoIDwgMlxuICAgICkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIHJldHVybiAoPGFueVtdPnByb2R1Y3QuaW1hZ2VzLkdBTExFUlkpLm1hcChjID0+IG9mKHsgY29udGFpbmVyOiBjIH0pKTtcbiAgfVxufVxuIl19