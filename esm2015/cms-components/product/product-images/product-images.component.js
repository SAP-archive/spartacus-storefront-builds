/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
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
        product => this.createCarouselItems(product))));
        this.mainImage$ = combineLatest([
            this.product$,
            this.mainMediaContainer,
        ]).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ([_, container]) => container)));
    }
    /**
     * @return {?}
     */
    getThumbs() {
        return this.thumbs$;
    }
    /**
     * @return {?}
     */
    getMain() {
        return this.mainImage$;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    openImage(item) {
        this.mainMediaContainer.next(item.media.container);
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
    createCarouselItems(product) {
        if (!product.images ||
            !product.images.GALLERY ||
            product.images.GALLERY.length < 2) {
            return null;
        }
        return ((/** @type {?} */ (product.images.GALLERY))).map((/**
         * @param {?} c
         * @return {?}
         */
        c => {
            return {
                media: {
                    container: c,
                    format: 'thumbnail',
                },
            };
        }));
    }
}
ProductImagesComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-images',
                template: "<ng-container *ngIf=\"(getMain() | async) as main\">\n  <cx-media [container]=\"main\" format=\"zoom\"> </cx-media>\n</ng-container>\n<ng-container *ngIf=\"(getThumbs() | async) as thumbs\">\n  <cx-carousel\n    class=\"thumbs\"\n    [items]=\"thumbs\"\n    [minItemPixelSize]=\"120\"\n    [hideIndicators]=\"true\"\n    (open)=\"openImage($event)\"\n    [activeItem]=\"getActive(thumbs) | async\"\n  ></cx-carousel>\n</ng-container>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWltYWdlcy9wcm9kdWN0LWltYWdlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFPbkUsTUFBTSxPQUFPLHNCQUFzQjs7OztJQXNCakMsWUFBb0IscUJBQTRDO1FBQTVDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFyQnhELHVCQUFrQixHQUFHLElBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRS9DLGFBQVEsR0FFWixJQUFJLENBQUMscUJBQXFCLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUM5QyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2Ysb0JBQW9CLEVBQUUsRUFDdEIsR0FBRzs7OztRQUFDLENBQUMsQ0FBVSxFQUFFLEVBQUUsQ0FDakIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQy9ELENBQ0YsQ0FBQztRQUVNLFlBQU8sR0FBK0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzlELEdBQUc7Ozs7UUFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsRUFBQyxDQUNsRCxDQUFDO1FBRU0sZUFBVSxHQUFHLGFBQWEsQ0FBQztZQUNqQyxJQUFJLENBQUMsUUFBUTtZQUNiLElBQUksQ0FBQyxrQkFBa0I7U0FDeEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxTQUFTLENBQUMsRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztJQUV1QixDQUFDOzs7O0lBRXBFLFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsSUFBa0I7UUFDMUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JELENBQUM7Ozs7OztJQUdELFNBQVMsQ0FBQyxNQUFzQjtRQUM5QixPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQ2pDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHOzs7O1FBQUMsQ0FBQyxTQUFjLEVBQUUsRUFBRTs7a0JBQ2YsT0FBTyxHQUFHLE1BQU0sQ0FBQyxJQUFJOzs7O1lBQ3pCLENBQUMsQ0FBQyxFQUFFLENBQ0YsQ0FBQyxDQUFDLEtBQUs7Z0JBQ1AsU0FBUyxDQUFDLElBQUk7Z0JBQ2QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTO2dCQUNqQixDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJO2dCQUN0QixDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUNwRDtZQUNELE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqQyxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7SUFNTyxtQkFBbUIsQ0FBQyxPQUFnQjtRQUMxQyxJQUNFLENBQUMsT0FBTyxDQUFDLE1BQU07WUFDZixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsT0FBTztZQUN2QixPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNqQztZQUNBLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxPQUFPLENBQUMsbUJBQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUEsQ0FBQyxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRTtZQUM3QyxPQUFPO2dCQUNMLEtBQUssRUFBRTtvQkFDTCxTQUFTLEVBQUUsQ0FBQztvQkFDWixNQUFNLEVBQUUsV0FBVztpQkFDcEI7YUFDRixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFoRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLCtiQUE4QztnQkFDOUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFOUSxxQkFBcUI7Ozs7Ozs7SUFRNUIsb0RBQXVEOzs7OztJQUV2RCwwQ0FRRTs7Ozs7SUFFRix5Q0FFRTs7Ozs7SUFFRiw0Q0FHNEM7Ozs7O0lBRWhDLHVEQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENhcm91c2VsSXRlbSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL2Nhcm91c2VsL2luZGV4JztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1pbWFnZXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1pbWFnZXMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdEltYWdlc0NvbXBvbmVudCB7XG4gIHByaXZhdGUgbWFpbk1lZGlhQ29udGFpbmVyID0gbmV3IEJlaGF2aW9yU3ViamVjdChudWxsKTtcblxuICBwcml2YXRlIHByb2R1Y3QkOiBPYnNlcnZhYmxlPFxuICAgIFByb2R1Y3RcbiAgPiA9IHRoaXMuY3VycmVudFByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3QoKS5waXBlKFxuICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgIHRhcCgocDogUHJvZHVjdCkgPT5cbiAgICAgIHRoaXMubWFpbk1lZGlhQ29udGFpbmVyLm5leHQocC5pbWFnZXMgPyBwLmltYWdlcy5QUklNQVJZIDoge30pXG4gICAgKVxuICApO1xuXG4gIHByaXZhdGUgdGh1bWJzJDogT2JzZXJ2YWJsZTxDYXJvdXNlbEl0ZW1bXT4gPSB0aGlzLnByb2R1Y3QkLnBpcGUoXG4gICAgbWFwKHByb2R1Y3QgPT4gdGhpcy5jcmVhdGVDYXJvdXNlbEl0ZW1zKHByb2R1Y3QpKVxuICApO1xuXG4gIHByaXZhdGUgbWFpbkltYWdlJCA9IGNvbWJpbmVMYXRlc3QoW1xuICAgIHRoaXMucHJvZHVjdCQsXG4gICAgdGhpcy5tYWluTWVkaWFDb250YWluZXIsXG4gIF0pLnBpcGUobWFwKChbXywgY29udGFpbmVyXSkgPT4gY29udGFpbmVyKSk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjdXJyZW50UHJvZHVjdFNlcnZpY2U6IEN1cnJlbnRQcm9kdWN0U2VydmljZSkge31cblxuICBnZXRUaHVtYnMoKTogT2JzZXJ2YWJsZTxDYXJvdXNlbEl0ZW1bXT4ge1xuICAgIHJldHVybiB0aGlzLnRodW1icyQ7XG4gIH1cblxuICBnZXRNYWluKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMubWFpbkltYWdlJDtcbiAgfVxuXG4gIG9wZW5JbWFnZShpdGVtOiBDYXJvdXNlbEl0ZW0pOiB2b2lkIHtcbiAgICB0aGlzLm1haW5NZWRpYUNvbnRhaW5lci5uZXh0KGl0ZW0ubWVkaWEuY29udGFpbmVyKTtcbiAgfVxuXG4gIC8qKiBmaW5kIHRoZSBpbmRleCBvZiB0aGUgbWFpbiBtZWRpYSBpbiB0aGUgbGlzdCBvZiBtZWRpYSAqL1xuICBnZXRBY3RpdmUodGh1bWJzOiBDYXJvdXNlbEl0ZW1bXSk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMubWFpbk1lZGlhQ29udGFpbmVyLnBpcGUoXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBtYXAoKGNvbnRhaW5lcjogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSB0aHVtYnMuZmluZChcbiAgICAgICAgICB0ID0+XG4gICAgICAgICAgICB0Lm1lZGlhICYmXG4gICAgICAgICAgICBjb250YWluZXIuem9vbSAmJlxuICAgICAgICAgICAgdC5tZWRpYS5jb250YWluZXIgJiZcbiAgICAgICAgICAgIHQubWVkaWEuY29udGFpbmVyLnpvb20gJiZcbiAgICAgICAgICAgIHQubWVkaWEuY29udGFpbmVyLnpvb20udXJsID09PSBjb250YWluZXIuem9vbS51cmxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRodW1icy5pbmRleE9mKGN1cnJlbnQpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbiBhcnJheSBvZiBDYXJvdXNlbEl0ZW1zIGZvciB0aGUgcHJvZHVjdCB0aHVtYm5haWxzLlxuICAgKiBJbiBjYXNlIHRoZXJlIGFyZSBsZXNzIHRoZW4gMiB0aHVtYnMsIHdlIHJldHVybiBudWxsLlxuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGVDYXJvdXNlbEl0ZW1zKHByb2R1Y3Q6IFByb2R1Y3QpOiBDYXJvdXNlbEl0ZW1bXSB7XG4gICAgaWYgKFxuICAgICAgIXByb2R1Y3QuaW1hZ2VzIHx8XG4gICAgICAhcHJvZHVjdC5pbWFnZXMuR0FMTEVSWSB8fFxuICAgICAgcHJvZHVjdC5pbWFnZXMuR0FMTEVSWS5sZW5ndGggPCAyXG4gICAgKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKDxhbnlbXT5wcm9kdWN0LmltYWdlcy5HQUxMRVJZKS5tYXAoYyA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtZWRpYToge1xuICAgICAgICAgIGNvbnRhaW5lcjogYyxcbiAgICAgICAgICBmb3JtYXQ6ICd0aHVtYm5haWwnLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxufVxuIl19