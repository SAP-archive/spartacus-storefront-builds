/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ProductService, } from '@spartacus/core';
import { filter, map } from 'rxjs/operators';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
export class ProductCarouselService {
    /**
     * @param {?} component
     * @param {?} productService
     */
    constructor(component, productService) {
        this.component = component;
        this.productService = productService;
    }
    /**
     * @return {?}
     */
    getTitle() {
        return this.title$;
    }
    /**
     * @return {?}
     */
    fetchTitle() {
        this.title$ = this.component.data$.pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            return data.title;
        })));
    }
    /**
     * @return {?}
     */
    getItems() {
        return this.items$;
    }
    /**
     * Maps the item codes from CMS component to an array of `Product` observables.
     * @return {?}
     */
    fetchItems() {
        this.items$ = this.component.data$.pipe(filter((/**
         * @param {?} data
         * @return {?}
         */
        data => data && !!data.productCodes)), map((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            /** @type {?} */
            const productCodes = data.productCodes.split(' ');
            return productCodes.map((/**
             * @param {?} code
             * @return {?}
             */
            code => this.productService.get(code)));
        })));
    }
}
ProductCarouselService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductCarouselService.ctorParameters = () => [
    { type: CmsComponentData },
    { type: ProductService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvY2Fyb3VzZWwvcHJvZHVjdC1jYXJvdXNlbC9wcm9kdWN0LWNhcm91c2VsLmNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFHTCxjQUFjLEdBQ2YsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBRzNGLE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBSWpDLFlBQ1ksU0FBd0QsRUFDMUQsY0FBOEI7UUFENUIsY0FBUyxHQUFULFNBQVMsQ0FBK0M7UUFDMUQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3JDLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3JDLEdBQUc7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRTtZQUNULE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFLRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3JDLE1BQU07Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBQyxFQUMzQyxHQUFHOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUU7O2tCQUNILFlBQVksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDakQsT0FBTyxZQUFZLENBQUMsR0FBRzs7OztZQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQztRQUNqRSxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7O1lBckNGLFVBQVU7Ozs7WUFGRixnQkFBZ0I7WUFKdkIsY0FBYzs7Ozs7OztJQVFkLHdDQUFrRDs7Ozs7SUFDbEQsd0NBQW1DOzs7OztJQUdqQywyQ0FBa0U7Ozs7O0lBQ2xFLGdEQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc1Byb2R1Y3RDYXJvdXNlbENvbXBvbmVudCxcbiAgUHJvZHVjdCxcbiAgUHJvZHVjdFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RDYXJvdXNlbFNlcnZpY2Uge1xuICBwcml2YXRlIGl0ZW1zJDogT2JzZXJ2YWJsZTxPYnNlcnZhYmxlPFByb2R1Y3Q+W10+O1xuICBwcml2YXRlIHRpdGxlJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb21wb25lbnQ6IENtc0NvbXBvbmVudERhdGE8Q21zUHJvZHVjdENhcm91c2VsQ29tcG9uZW50PixcbiAgICBwcml2YXRlIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZVxuICApIHt9XG5cbiAgZ2V0VGl0bGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy50aXRsZSQ7XG4gIH1cblxuICBmZXRjaFRpdGxlKCk6IHZvaWQge1xuICAgIHRoaXMudGl0bGUkID0gdGhpcy5jb21wb25lbnQuZGF0YSQucGlwZShcbiAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGEudGl0bGU7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXRJdGVtcygpOiBPYnNlcnZhYmxlPE9ic2VydmFibGU8UHJvZHVjdD5bXT4ge1xuICAgIHJldHVybiB0aGlzLml0ZW1zJDtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYXBzIHRoZSBpdGVtIGNvZGVzIGZyb20gQ01TIGNvbXBvbmVudCB0byBhbiBhcnJheSBvZiBgUHJvZHVjdGAgb2JzZXJ2YWJsZXMuXG4gICAqL1xuICBmZXRjaEl0ZW1zKCk6IHZvaWQge1xuICAgIHRoaXMuaXRlbXMkID0gdGhpcy5jb21wb25lbnQuZGF0YSQucGlwZShcbiAgICAgIGZpbHRlcihkYXRhID0+IGRhdGEgJiYgISFkYXRhLnByb2R1Y3RDb2RlcyksXG4gICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RDb2RlcyA9IGRhdGEucHJvZHVjdENvZGVzLnNwbGl0KCcgJyk7XG4gICAgICAgIHJldHVybiBwcm9kdWN0Q29kZXMubWFwKGNvZGUgPT4gdGhpcy5wcm9kdWN0U2VydmljZS5nZXQoY29kZSkpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=