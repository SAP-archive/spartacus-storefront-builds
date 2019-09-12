/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { CmsService, } from '@spartacus/core';
import { filter, map, tap } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/index';
/**
 * Generic carousel that renders CMS Components.
 */
var BannerCarouselComponent = /** @class */ (function () {
    function BannerCarouselComponent(componentData, cmsService) {
        var _this = this;
        this.componentData = componentData;
        this.cmsService = cmsService;
        this.componentData$ = this.componentData.data$.pipe(filter(Boolean), tap((/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return (_this.theme = d.effect + "-theme"); })));
        this.items$ = this.componentData$.pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return data.banners.trim().split(' '); })), map((/**
         * @param {?} codes
         * @return {?}
         */
        function (codes) { return codes.map((/**
         * @param {?} code
         * @return {?}
         */
        function (code) { return _this.cmsService.getComponentData(code); })); })));
        /**
         * Adds a specific theme for the carousel. The effect can be
         * used in CSS customisations.
         */
        this.theme = '';
    }
    /**
     * Returns an Obervable with an Array of Observables. This is done, so that
     * the component UI could consider to lazy load the UI components when they're
     * in the viewpoint.
     */
    /**
     * Returns an Obervable with an Array of Observables. This is done, so that
     * the component UI could consider to lazy load the UI components when they're
     * in the viewpoint.
     * @return {?}
     */
    BannerCarouselComponent.prototype.getItems = /**
     * Returns an Obervable with an Array of Observables. This is done, so that
     * the component UI could consider to lazy load the UI components when they're
     * in the viewpoint.
     * @return {?}
     */
    function () {
        return this.items$;
    };
    BannerCarouselComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-banner-carousel',
                    template: "<cx-carousel\n  [items]=\"getItems() | async\"\n  [template]=\"template\"\n  itemWidth=\"100%\"\n  class=\"inline-navigation\"\n></cx-carousel>\n\n<ng-template #template let-item=\"item\">\n  <ng-container\n    [cxComponentWrapper]=\"{\n      flexType: item.typeCode,\n      typeCode: item.typeCode,\n      uid: item?.uid\n    }\"\n  >\n  </ng-container>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    BannerCarouselComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: CmsService }
    ]; };
    BannerCarouselComponent.propDecorators = {
        theme: [{ type: HostBinding, args: ['class',] }]
    };
    return BannerCarouselComponent;
}());
export { BannerCarouselComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    BannerCarouselComponent.prototype.componentData$;
    /**
     * @type {?}
     * @private
     */
    BannerCarouselComponent.prototype.items$;
    /**
     * Adds a specific theme for the carousel. The effect can be
     * used in CSS customisations.
     * @type {?}
     */
    BannerCarouselComponent.prototype.theme;
    /**
     * @type {?}
     * @private
     */
    BannerCarouselComponent.prototype.componentData;
    /**
     * @type {?}
     * @private
     */
    BannerCarouselComponent.prototype.cmsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFubmVyLWNhcm91c2VsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2NvbnRlbnQvYmFubmVyLWNhcm91c2VsL2Jhbm5lci1jYXJvdXNlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFFTCxVQUFVLEdBRVgsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7OztBQUtoRTtJQXdCRSxpQ0FDVSxhQUFzQyxFQUN0QyxVQUFzQjtRQUZoQyxpQkFHSTtRQUZNLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUN0QyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBcEJ4QixtQkFBYyxHQUFzQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3ZFLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHOzs7O1FBQUMsVUFBQyxDQUFRLElBQUssT0FBQSxDQUFDLEtBQUksQ0FBQyxLQUFLLEdBQU0sQ0FBQyxDQUFDLE1BQU0sV0FBUSxDQUFDLEVBQWxDLENBQWtDLEVBQUMsQ0FDdEQsQ0FBQztRQUVNLFdBQU0sR0FFVixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDMUIsR0FBRzs7OztRQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQTlCLENBQThCLEVBQUMsRUFDM0MsR0FBRzs7OztRQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQXRDLENBQXNDLEVBQUMsRUFBekQsQ0FBeUQsRUFBQyxDQUN4RSxDQUFDOzs7OztRQU1vQixVQUFLLEdBQUcsRUFBRSxDQUFDO0lBSzlCLENBQUM7SUFFSjs7OztPQUlHOzs7Ozs7O0lBQ0gsMENBQVE7Ozs7OztJQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7O2dCQXBDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsZ1lBQTZDO29CQUM3QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBVFEsZ0JBQWdCO2dCQUx2QixVQUFVOzs7d0JBZ0NULFdBQVcsU0FBQyxPQUFPOztJQWV0Qiw4QkFBQztDQUFBLEFBckNELElBcUNDO1NBaENZLHVCQUF1Qjs7Ozs7O0lBQ2xDLGlEQUdFOzs7OztJQUVGLHlDQUtFOzs7Ozs7SUFNRix3Q0FBaUM7Ozs7O0lBRy9CLGdEQUE4Qzs7Ozs7SUFDOUMsNkNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSG9zdEJpbmRpbmcgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc0Jhbm5lckNhcm91c2VsQ29tcG9uZW50IGFzIG1vZGVsLFxuICBDbXNTZXJ2aWNlLFxuICBDb250ZW50U2xvdENvbXBvbmVudERhdGEsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvaW5kZXgnO1xuXG4vKipcbiAqIEdlbmVyaWMgY2Fyb3VzZWwgdGhhdCByZW5kZXJzIENNUyBDb21wb25lbnRzLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1iYW5uZXItY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZVVybDogJ2Jhbm5lci1jYXJvdXNlbC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBCYW5uZXJDYXJvdXNlbENvbXBvbmVudCB7XG4gIHByaXZhdGUgY29tcG9uZW50RGF0YSQ6IE9ic2VydmFibGU8bW9kZWw+ID0gdGhpcy5jb21wb25lbnREYXRhLmRhdGEkLnBpcGUoXG4gICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgIHRhcCgoZDogbW9kZWwpID0+ICh0aGlzLnRoZW1lID0gYCR7ZC5lZmZlY3R9LXRoZW1lYCkpXG4gICk7XG5cbiAgcHJpdmF0ZSBpdGVtcyQ6IE9ic2VydmFibGU8XG4gICAgT2JzZXJ2YWJsZTxDb250ZW50U2xvdENvbXBvbmVudERhdGE+W11cbiAgPiA9IHRoaXMuY29tcG9uZW50RGF0YSQucGlwZShcbiAgICBtYXAoZGF0YSA9PiBkYXRhLmJhbm5lcnMudHJpbSgpLnNwbGl0KCcgJykpLFxuICAgIG1hcChjb2RlcyA9PiBjb2Rlcy5tYXAoY29kZSA9PiB0aGlzLmNtc1NlcnZpY2UuZ2V0Q29tcG9uZW50RGF0YShjb2RlKSkpXG4gICk7XG5cbiAgLyoqXG4gICAqIEFkZHMgYSBzcGVjaWZpYyB0aGVtZSBmb3IgdGhlIGNhcm91c2VsLiBUaGUgZWZmZWN0IGNhbiBiZVxuICAgKiB1c2VkIGluIENTUyBjdXN0b21pc2F0aW9ucy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSB0aGVtZSA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxtb2RlbD4sXG4gICAgcHJpdmF0ZSBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBPYmVydmFibGUgd2l0aCBhbiBBcnJheSBvZiBPYnNlcnZhYmxlcy4gVGhpcyBpcyBkb25lLCBzbyB0aGF0XG4gICAqIHRoZSBjb21wb25lbnQgVUkgY291bGQgY29uc2lkZXIgdG8gbGF6eSBsb2FkIHRoZSBVSSBjb21wb25lbnRzIHdoZW4gdGhleSdyZVxuICAgKiBpbiB0aGUgdmlld3BvaW50LlxuICAgKi9cbiAgZ2V0SXRlbXMoKTogT2JzZXJ2YWJsZTxPYnNlcnZhYmxlPENvbnRlbnRTbG90Q29tcG9uZW50RGF0YT5bXT4ge1xuICAgIHJldHVybiB0aGlzLml0ZW1zJDtcbiAgfVxufVxuIl19