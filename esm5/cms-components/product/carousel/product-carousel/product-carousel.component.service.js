/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ProductService, } from '@spartacus/core';
import { filter, map } from 'rxjs/operators';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
var ProductCarouselService = /** @class */ (function () {
    function ProductCarouselService(component, productService) {
        this.component = component;
        this.productService = productService;
    }
    /**
     * @return {?}
     */
    ProductCarouselService.prototype.getTitle = /**
     * @return {?}
     */
    function () {
        return this.title$;
    };
    /**
     * @return {?}
     */
    ProductCarouselService.prototype.fetchTitle = /**
     * @return {?}
     */
    function () {
        this.title$ = this.component.data$.pipe(map(function (data) {
            return data.title;
        }));
    };
    /**
     * @return {?}
     */
    ProductCarouselService.prototype.getItems = /**
     * @return {?}
     */
    function () {
        return this.items$;
    };
    /**
     * Maps the item codes from CMS component to an array of `Product` observables.
     */
    /**
     * Maps the item codes from CMS component to an array of `Product` observables.
     * @return {?}
     */
    ProductCarouselService.prototype.fetchItems = /**
     * Maps the item codes from CMS component to an array of `Product` observables.
     * @return {?}
     */
    function () {
        var _this = this;
        this.items$ = this.component.data$.pipe(filter(function (data) { return data && !!data.productCodes; }), map(function (data) {
            /** @type {?} */
            var productCodes = data.productCodes.split(' ');
            return productCodes.map(function (code) { return _this.productService.get(code); });
        }));
    };
    ProductCarouselService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductCarouselService.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: ProductService }
    ]; };
    return ProductCarouselService;
}());
export { ProductCarouselService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProductCarouselService.prototype.items$;
    /**
     * @type {?}
     * @private
     */
    ProductCarouselService.prototype.title$;
    /**
     * @type {?}
     * @protected
     */
    ProductCarouselService.prototype.component;
    /**
     * @type {?}
     * @private
     */
    ProductCarouselService.prototype.productService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvY2Fyb3VzZWwvcHJvZHVjdC1jYXJvdXNlbC9wcm9kdWN0LWNhcm91c2VsLmNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFHTCxjQUFjLEdBQ2YsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBRTNGO0lBS0UsZ0NBQ1ksU0FBd0QsRUFDMUQsY0FBOEI7UUFENUIsY0FBUyxHQUFULFNBQVMsQ0FBK0M7UUFDMUQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3JDLENBQUM7Ozs7SUFFSix5Q0FBUTs7O0lBQVI7UUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELDJDQUFVOzs7SUFBVjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNyQyxHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O0lBRUQseUNBQVE7OztJQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCwyQ0FBVTs7OztJQUFWO1FBQUEsaUJBUUM7UUFQQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDckMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUEzQixDQUEyQixDQUFDLEVBQzNDLEdBQUcsQ0FBQyxVQUFBLElBQUk7O2dCQUNBLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDakQsT0FBTyxZQUFZLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQTdCLENBQTZCLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBckNGLFVBQVU7Ozs7Z0JBRkYsZ0JBQWdCO2dCQUp2QixjQUFjOztJQTRDaEIsNkJBQUM7Q0FBQSxBQXRDRCxJQXNDQztTQXJDWSxzQkFBc0I7Ozs7OztJQUNqQyx3Q0FBa0Q7Ozs7O0lBQ2xELHdDQUFtQzs7Ozs7SUFHakMsMkNBQWtFOzs7OztJQUNsRSxnREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNQcm9kdWN0Q2Fyb3VzZWxDb21wb25lbnQsXG4gIFByb2R1Y3QsXG4gIFByb2R1Y3RTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0Q2Fyb3VzZWxTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBpdGVtcyQ6IE9ic2VydmFibGU8T2JzZXJ2YWJsZTxQcm9kdWN0PltdPjtcbiAgcHJpdmF0ZSB0aXRsZSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50OiBDbXNDb21wb25lbnREYXRhPENtc1Byb2R1Y3RDYXJvdXNlbENvbXBvbmVudD4sXG4gICAgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2VcbiAgKSB7fVxuXG4gIGdldFRpdGxlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMudGl0bGUkO1xuICB9XG5cbiAgZmV0Y2hUaXRsZSgpOiB2b2lkIHtcbiAgICB0aGlzLnRpdGxlJCA9IHRoaXMuY29tcG9uZW50LmRhdGEkLnBpcGUoXG4gICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBkYXRhLnRpdGxlO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0SXRlbXMoKTogT2JzZXJ2YWJsZTxPYnNlcnZhYmxlPFByb2R1Y3Q+W10+IHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcyQ7XG4gIH1cblxuICAvKipcbiAgICogTWFwcyB0aGUgaXRlbSBjb2RlcyBmcm9tIENNUyBjb21wb25lbnQgdG8gYW4gYXJyYXkgb2YgYFByb2R1Y3RgIG9ic2VydmFibGVzLlxuICAgKi9cbiAgZmV0Y2hJdGVtcygpOiB2b2lkIHtcbiAgICB0aGlzLml0ZW1zJCA9IHRoaXMuY29tcG9uZW50LmRhdGEkLnBpcGUoXG4gICAgICBmaWx0ZXIoZGF0YSA9PiBkYXRhICYmICEhZGF0YS5wcm9kdWN0Q29kZXMpLFxuICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICBjb25zdCBwcm9kdWN0Q29kZXMgPSBkYXRhLnByb2R1Y3RDb2Rlcy5zcGxpdCgnICcpO1xuICAgICAgICByZXR1cm4gcHJvZHVjdENvZGVzLm1hcChjb2RlID0+IHRoaXMucHJvZHVjdFNlcnZpY2UuZ2V0KGNvZGUpKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19