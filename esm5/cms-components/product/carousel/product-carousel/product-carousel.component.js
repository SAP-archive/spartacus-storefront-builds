/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FeatureConfigService, ProductService, } from '@spartacus/core';
import { filter, map } from 'rxjs/operators';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
var ProductCarouselComponent = /** @class */ (function () {
    function ProductCarouselComponent(componentData, productService, features) {
        var _this = this;
        this.componentData = componentData;
        this.productService = productService;
        this.features = features;
        this.PRODUCT_SCOPE = this.features && this.features.isLevel('1.4') ? 'list' : '';
        this.componentData$ = this.componentData.data$.pipe(filter(Boolean));
        /**
         * returns an Obervable string for the title.
         */
        this.title$ = this.componentData$.pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return data.title; })));
        /**
         * Obervable that holds an Array of Observables. This is done, so that
         * the component UI could consider to lazy load the UI components when they're
         * in the viewpoint.
         */
        this.items$ = this.componentData$.pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return data.productCodes.trim().split(' '); })), map((/**
         * @param {?} codes
         * @return {?}
         */
        function (codes) {
            return codes.map((/**
             * @param {?} code
             * @return {?}
             */
            function (code) { return _this.productService.get(code, _this.PRODUCT_SCOPE); }));
        })));
    }
    ProductCarouselComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-product-carousel',
                    template: "<cx-carousel\n  [items]=\"items$ | async\"\n  [title]=\"title$ | async\"\n  [template]=\"carouselItem\"\n  itemWidth=\"285px\"\n>\n</cx-carousel>\n\n<ng-template #carouselItem let-item=\"item\">\n  <a tabindex=\"0\" [routerLink]=\"{ cxRoute: 'product', params: item } | cxUrl\">\n    <cx-media\n      *ngIf=\"item.images?.PRIMARY\"\n      [container]=\"item.images.PRIMARY\"\n      format=\"product\"\n    >\n    </cx-media>\n    <h4>{{ item.name }}</h4>\n    <div class=\"price\">{{ item.price?.formattedValue }}</div>\n  </a>\n</ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    ProductCarouselComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: ProductService },
        { type: FeatureConfigService }
    ]; };
    return ProductCarouselComponent;
}());
export { ProductCarouselComponent };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ProductCarouselComponent.prototype.PRODUCT_SCOPE;
    /**
     * @type {?}
     * @private
     */
    ProductCarouselComponent.prototype.componentData$;
    /**
     * returns an Obervable string for the title.
     * @type {?}
     */
    ProductCarouselComponent.prototype.title$;
    /**
     * Obervable that holds an Array of Observables. This is done, so that
     * the component UI could consider to lazy load the UI components when they're
     * in the viewpoint.
     * @type {?}
     */
    ProductCarouselComponent.prototype.items$;
    /**
     * @type {?}
     * @protected
     */
    ProductCarouselComponent.prototype.componentData;
    /**
     * @type {?}
     * @protected
     */
    ProductCarouselComponent.prototype.productService;
    /**
     * @type {?}
     * @protected
     */
    ProductCarouselComponent.prototype.features;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L2Nhcm91c2VsL3Byb2R1Y3QtY2Fyb3VzZWwvcHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUVMLG9CQUFvQixFQUVwQixjQUFjLEdBQ2YsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBRTNGO0lBZ0NFLGtDQUNZLGFBQXNDLEVBQ3RDLGNBQThCLEVBQzlCLFFBQStCO1FBSDNDLGlCQUlJO1FBSFEsa0JBQWEsR0FBYixhQUFhLENBQXlCO1FBQ3RDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixhQUFRLEdBQVIsUUFBUSxDQUF1QjtRQTdCeEIsa0JBQWEsR0FDOUIsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFFdEQsbUJBQWMsR0FBc0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUN2RSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQ2hCLENBQUM7Ozs7UUFLRixXQUFNLEdBQXVCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUNuRCxHQUFHOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsRUFBQyxDQUN4QixDQUFDOzs7Ozs7UUFPRixXQUFNLEdBQXNDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUNsRSxHQUFHOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBbkMsQ0FBbUMsRUFBQyxFQUNoRCxHQUFHOzs7O1FBQUMsVUFBQSxLQUFLO1lBQ1AsT0FBQSxLQUFLLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxhQUFhLENBQUMsRUFBakQsQ0FBaUQsRUFBQztRQUFwRSxDQUFvRSxFQUNyRSxDQUNGLENBQUM7SUFNQyxDQUFDOztnQkFwQ0wsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLDZpQkFBZ0Q7b0JBQ2hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFOUSxnQkFBZ0I7Z0JBSnZCLGNBQWM7Z0JBRmQsb0JBQW9COztJQTZDdEIsK0JBQUM7Q0FBQSxBQXJDRCxJQXFDQztTQWhDWSx3QkFBd0I7Ozs7OztJQUNuQyxpREFDOEQ7Ozs7O0lBRTlELGtEQUVFOzs7OztJQUtGLDBDQUVFOzs7Ozs7O0lBT0YsMENBS0U7Ozs7O0lBR0EsaURBQWdEOzs7OztJQUNoRCxrREFBd0M7Ozs7O0lBQ3hDLDRDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc1Byb2R1Y3RDYXJvdXNlbENvbXBvbmVudCBhcyBtb2RlbCxcbiAgRmVhdHVyZUNvbmZpZ1NlcnZpY2UsXG4gIFByb2R1Y3QsXG4gIFByb2R1Y3RTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0Q2Fyb3VzZWxDb21wb25lbnQge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgUFJPRFVDVF9TQ09QRSA9XG4gICAgdGhpcy5mZWF0dXJlcyAmJiB0aGlzLmZlYXR1cmVzLmlzTGV2ZWwoJzEuNCcpID8gJ2xpc3QnIDogJyc7XG5cbiAgcHJpdmF0ZSBjb21wb25lbnREYXRhJDogT2JzZXJ2YWJsZTxtb2RlbD4gPSB0aGlzLmNvbXBvbmVudERhdGEuZGF0YSQucGlwZShcbiAgICBmaWx0ZXIoQm9vbGVhbilcbiAgKTtcblxuICAvKipcbiAgICogcmV0dXJucyBhbiBPYmVydmFibGUgc3RyaW5nIGZvciB0aGUgdGl0bGUuXG4gICAqL1xuICB0aXRsZSQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuY29tcG9uZW50RGF0YSQucGlwZShcbiAgICBtYXAoZGF0YSA9PiBkYXRhLnRpdGxlKVxuICApO1xuXG4gIC8qKlxuICAgKiBPYmVydmFibGUgdGhhdCBob2xkcyBhbiBBcnJheSBvZiBPYnNlcnZhYmxlcy4gVGhpcyBpcyBkb25lLCBzbyB0aGF0XG4gICAqIHRoZSBjb21wb25lbnQgVUkgY291bGQgY29uc2lkZXIgdG8gbGF6eSBsb2FkIHRoZSBVSSBjb21wb25lbnRzIHdoZW4gdGhleSdyZVxuICAgKiBpbiB0aGUgdmlld3BvaW50LlxuICAgKi9cbiAgaXRlbXMkOiBPYnNlcnZhYmxlPE9ic2VydmFibGU8UHJvZHVjdD5bXT4gPSB0aGlzLmNvbXBvbmVudERhdGEkLnBpcGUoXG4gICAgbWFwKGRhdGEgPT4gZGF0YS5wcm9kdWN0Q29kZXMudHJpbSgpLnNwbGl0KCcgJykpLFxuICAgIG1hcChjb2RlcyA9PlxuICAgICAgY29kZXMubWFwKGNvZGUgPT4gdGhpcy5wcm9kdWN0U2VydmljZS5nZXQoY29kZSwgdGhpcy5QUk9EVUNUX1NDT1BFKSlcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8bW9kZWw+LFxuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGZlYXR1cmVzPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2VcbiAgKSB7fVxufVxuIl19