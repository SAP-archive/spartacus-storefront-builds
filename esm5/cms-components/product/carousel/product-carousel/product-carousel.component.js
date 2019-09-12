/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductService, } from '@spartacus/core';
import { filter, map } from 'rxjs/operators';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
var ProductCarouselComponent = /** @class */ (function () {
    function ProductCarouselComponent(componentData, productService) {
        var _this = this;
        this.componentData = componentData;
        this.productService = productService;
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
        function (codes) { return codes.map((/**
         * @param {?} code
         * @return {?}
         */
        function (code) { return _this.productService.get(code); })); })));
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
        { type: ProductService }
    ]; };
    return ProductCarouselComponent;
}());
export { ProductCarouselComponent };
if (false) {
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L2Nhcm91c2VsL3Byb2R1Y3QtY2Fyb3VzZWwvcHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUdMLGNBQWMsR0FDZixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFFM0Y7SUEyQkUsa0NBQ1ksYUFBc0MsRUFDdEMsY0FBOEI7UUFGMUMsaUJBR0k7UUFGUSxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFDdEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBdkJsQyxtQkFBYyxHQUFzQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3ZFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDaEIsQ0FBQzs7OztRQUtGLFdBQU0sR0FBdUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQ25ELEdBQUc7Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxFQUFDLENBQ3hCLENBQUM7Ozs7OztRQU9GLFdBQU0sR0FBc0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQ2xFLEdBQUc7Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFuQyxDQUFtQyxFQUFDLEVBQ2hELEdBQUc7Ozs7UUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBN0IsQ0FBNkIsRUFBQyxFQUFoRCxDQUFnRCxFQUFDLENBQy9ELENBQUM7SUFLQyxDQUFDOztnQkE5QkwsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLDZpQkFBZ0Q7b0JBQ2hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFOUSxnQkFBZ0I7Z0JBSnZCLGNBQWM7O0lBcUNoQiwrQkFBQztDQUFBLEFBL0JELElBK0JDO1NBMUJZLHdCQUF3Qjs7Ozs7O0lBQ25DLGtEQUVFOzs7OztJQUtGLDBDQUVFOzs7Ozs7O0lBT0YsMENBR0U7Ozs7O0lBR0EsaURBQWdEOzs7OztJQUNoRCxrREFBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNQcm9kdWN0Q2Fyb3VzZWxDb21wb25lbnQgYXMgbW9kZWwsXG4gIFByb2R1Y3QsXG4gIFByb2R1Y3RTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtY2Fyb3VzZWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0Q2Fyb3VzZWxDb21wb25lbnQge1xuICBwcml2YXRlIGNvbXBvbmVudERhdGEkOiBPYnNlcnZhYmxlPG1vZGVsPiA9IHRoaXMuY29tcG9uZW50RGF0YS5kYXRhJC5waXBlKFxuICAgIGZpbHRlcihCb29sZWFuKVxuICApO1xuXG4gIC8qKlxuICAgKiByZXR1cm5zIGFuIE9iZXJ2YWJsZSBzdHJpbmcgZm9yIHRoZSB0aXRsZS5cbiAgICovXG4gIHRpdGxlJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5jb21wb25lbnREYXRhJC5waXBlKFxuICAgIG1hcChkYXRhID0+IGRhdGEudGl0bGUpXG4gICk7XG5cbiAgLyoqXG4gICAqIE9iZXJ2YWJsZSB0aGF0IGhvbGRzIGFuIEFycmF5IG9mIE9ic2VydmFibGVzLiBUaGlzIGlzIGRvbmUsIHNvIHRoYXRcbiAgICogdGhlIGNvbXBvbmVudCBVSSBjb3VsZCBjb25zaWRlciB0byBsYXp5IGxvYWQgdGhlIFVJIGNvbXBvbmVudHMgd2hlbiB0aGV5J3JlXG4gICAqIGluIHRoZSB2aWV3cG9pbnQuXG4gICAqL1xuICBpdGVtcyQ6IE9ic2VydmFibGU8T2JzZXJ2YWJsZTxQcm9kdWN0PltdPiA9IHRoaXMuY29tcG9uZW50RGF0YSQucGlwZShcbiAgICBtYXAoZGF0YSA9PiBkYXRhLnByb2R1Y3RDb2Rlcy50cmltKCkuc3BsaXQoJyAnKSksXG4gICAgbWFwKGNvZGVzID0+IGNvZGVzLm1hcChjb2RlID0+IHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0KGNvZGUpKSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxtb2RlbD4sXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZVxuICApIHt9XG59XG4iXX0=