/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { ProductReferenceService, RoutingService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
export class ProductReferencesService {
    /**
     * @param {?} component
     * @param {?} referenceService
     * @param {?} routerService
     */
    constructor(component, referenceService, routerService) {
        this.component = component;
        this.referenceService = referenceService;
        this.routerService = routerService;
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
        this.title$ = this.component.data$.pipe(map(data => {
            return data.title;
        }));
    }
    /**
     * @return {?}
     */
    getDisplayProductTitles() {
        return this.displayProductTitles$.pipe(map(data => Boolean(JSON.parse(data.toLowerCase()))));
    }
    /**
     * @return {?}
     */
    fetchDisplayProductTitles() {
        this.displayProductTitles$ = this.component.data$.pipe(map(data => {
            return data.displayProductTitles;
        }));
    }
    /**
     * @return {?}
     */
    getDisplayProductPrices() {
        return this.displayProductPrices$.pipe(map(data => Boolean(JSON.parse(data.toLowerCase()))));
    }
    /**
     * @return {?}
     */
    fetchDisplayProductPrices() {
        this.displayProductPrices$ = this.component.data$.pipe(map(data => {
            return data.displayProductPrices;
        }));
    }
    /**
     * @return {?}
     */
    getReferenceType() {
        return this.component.data$.pipe(map(data => data.productReferenceTypes));
    }
    /**
     * @return {?}
     */
    getProductCode() {
        return this.routerService
            .getRouterState()
            .pipe(map(data => data.state.params.productCode));
    }
    /**
     * @return {?}
     */
    getReferenceList() {
        return this.items$;
    }
    /**
     * @param {?=} pageSize
     * @return {?}
     */
    setReferenceList(pageSize) {
        this.items$ = combineLatest(this.getProductCode(), this.getReferenceType()).pipe(map(data => ({ productCode: data[0], referenceType: data[1] })), switchMap(data => {
            return this.referenceService.get(data.productCode, data.referenceType, pageSize);
        }));
    }
}
ProductReferencesService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductReferencesService.ctorParameters = () => [
    { type: CmsComponentData },
    { type: ProductReferenceService },
    { type: RoutingService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProductReferencesService.prototype.title$;
    /**
     * @type {?}
     * @private
     */
    ProductReferencesService.prototype.items$;
    /**
     * @type {?}
     * @private
     */
    ProductReferencesService.prototype.displayProductTitles$;
    /**
     * @type {?}
     * @private
     */
    ProductReferencesService.prototype.displayProductPrices$;
    /**
     * @type {?}
     * @protected
     */
    ProductReferencesService.prototype.component;
    /**
     * @type {?}
     * @private
     */
    ProductReferencesService.prototype.referenceService;
    /**
     * @type {?}
     * @private
     */
    ProductReferencesService.prototype.routerService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9jYXJvdXNlbC9wcm9kdWN0LXJlZmVyZW5jZXMvcHJvZHVjdC1yZWZlcmVuY2VzLmNvbXBvbmVudC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFHTCx1QkFBdUIsRUFDdkIsY0FBYyxHQUNmLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBRzNGLE1BQU0sT0FBTyx3QkFBd0I7Ozs7OztJQU1uQyxZQUNZLFNBQTBELEVBQzVELGdCQUF5QyxFQUN6QyxhQUE2QjtRQUYzQixjQUFTLEdBQVQsU0FBUyxDQUFpRDtRQUM1RCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCO1FBQ3pDLGtCQUFhLEdBQWIsYUFBYSxDQUFnQjtJQUNwQyxDQUFDOzs7O0lBRUosUUFBUTtRQUNOLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNyQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCx1QkFBdUI7UUFDckIsT0FBTyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUNwQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQ3JELENBQUM7SUFDSixDQUFDOzs7O0lBRUQseUJBQXlCO1FBQ3ZCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BELEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNULE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O0lBRUQsdUJBQXVCO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FDcEMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUNyRCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELHlCQUF5QjtRQUN2QixJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwRCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVCxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDNUUsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxhQUFhO2FBQ3RCLGNBQWMsRUFBRTthQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsZ0JBQWdCLENBQUMsUUFBaUI7UUFDaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQ3pCLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFDckIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQ3hCLENBQUMsSUFBSSxDQUNKLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQy9ELFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNmLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FDOUIsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLGFBQWEsRUFDbEIsUUFBUSxDQUNULENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7O1lBakZGLFVBQVU7Ozs7WUFGRixnQkFBZ0I7WUFMdkIsdUJBQXVCO1lBQ3ZCLGNBQWM7Ozs7Ozs7SUFRZCwwQ0FBbUM7Ozs7O0lBQ25DLDBDQUErQzs7Ozs7SUFDL0MseURBQWtEOzs7OztJQUNsRCx5REFBa0Q7Ozs7O0lBR2hELDZDQUFvRTs7Ozs7SUFDcEUsb0RBQWlEOzs7OztJQUNqRCxpREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNQcm9kdWN0UmVmZXJlbmNlc0NvbXBvbmVudCxcbiAgUHJvZHVjdFJlZmVyZW5jZSxcbiAgUHJvZHVjdFJlZmVyZW5jZVNlcnZpY2UsXG4gIFJvdXRpbmdTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UmVmZXJlbmNlc1NlcnZpY2Uge1xuICBwcml2YXRlIHRpdGxlJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBwcml2YXRlIGl0ZW1zJDogT2JzZXJ2YWJsZTxQcm9kdWN0UmVmZXJlbmNlW10+O1xuICBwcml2YXRlIGRpc3BsYXlQcm9kdWN0VGl0bGVzJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICBwcml2YXRlIGRpc3BsYXlQcm9kdWN0UHJpY2VzJDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb21wb25lbnQ6IENtc0NvbXBvbmVudERhdGE8Q21zUHJvZHVjdFJlZmVyZW5jZXNDb21wb25lbnQ+LFxuICAgIHByaXZhdGUgcmVmZXJlbmNlU2VydmljZTogUHJvZHVjdFJlZmVyZW5jZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0ZXJTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgZ2V0VGl0bGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy50aXRsZSQ7XG4gIH1cblxuICBmZXRjaFRpdGxlKCk6IHZvaWQge1xuICAgIHRoaXMudGl0bGUkID0gdGhpcy5jb21wb25lbnQuZGF0YSQucGlwZShcbiAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgcmV0dXJuIGRhdGEudGl0bGU7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBnZXREaXNwbGF5UHJvZHVjdFRpdGxlcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5kaXNwbGF5UHJvZHVjdFRpdGxlcyQucGlwZShcbiAgICAgIG1hcChkYXRhID0+IEJvb2xlYW4oSlNPTi5wYXJzZShkYXRhLnRvTG93ZXJDYXNlKCkpKSlcbiAgICApO1xuICB9XG5cbiAgZmV0Y2hEaXNwbGF5UHJvZHVjdFRpdGxlcygpOiB2b2lkIHtcbiAgICB0aGlzLmRpc3BsYXlQcm9kdWN0VGl0bGVzJCA9IHRoaXMuY29tcG9uZW50LmRhdGEkLnBpcGUoXG4gICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBkYXRhLmRpc3BsYXlQcm9kdWN0VGl0bGVzO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZ2V0RGlzcGxheVByb2R1Y3RQcmljZXMoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZGlzcGxheVByb2R1Y3RQcmljZXMkLnBpcGUoXG4gICAgICBtYXAoZGF0YSA9PiBCb29sZWFuKEpTT04ucGFyc2UoZGF0YS50b0xvd2VyQ2FzZSgpKSkpXG4gICAgKTtcbiAgfVxuXG4gIGZldGNoRGlzcGxheVByb2R1Y3RQcmljZXMoKTogdm9pZCB7XG4gICAgdGhpcy5kaXNwbGF5UHJvZHVjdFByaWNlcyQgPSB0aGlzLmNvbXBvbmVudC5kYXRhJC5waXBlKFxuICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICByZXR1cm4gZGF0YS5kaXNwbGF5UHJvZHVjdFByaWNlcztcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZVR5cGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnQuZGF0YSQucGlwZShtYXAoZGF0YSA9PiBkYXRhLnByb2R1Y3RSZWZlcmVuY2VUeXBlcykpO1xuICB9XG5cbiAgZ2V0UHJvZHVjdENvZGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXJTZXJ2aWNlXG4gICAgICAuZ2V0Um91dGVyU3RhdGUoKVxuICAgICAgLnBpcGUobWFwKGRhdGEgPT4gZGF0YS5zdGF0ZS5wYXJhbXMucHJvZHVjdENvZGUpKTtcbiAgfVxuXG4gIGdldFJlZmVyZW5jZUxpc3QoKTogT2JzZXJ2YWJsZTxQcm9kdWN0UmVmZXJlbmNlW10+IHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcyQ7XG4gIH1cblxuICBzZXRSZWZlcmVuY2VMaXN0KHBhZ2VTaXplPzogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5pdGVtcyQgPSBjb21iaW5lTGF0ZXN0KFxuICAgICAgdGhpcy5nZXRQcm9kdWN0Q29kZSgpLFxuICAgICAgdGhpcy5nZXRSZWZlcmVuY2VUeXBlKClcbiAgICApLnBpcGUoXG4gICAgICBtYXAoZGF0YSA9PiAoeyBwcm9kdWN0Q29kZTogZGF0YVswXSwgcmVmZXJlbmNlVHlwZTogZGF0YVsxXSB9KSksXG4gICAgICBzd2l0Y2hNYXAoZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZVNlcnZpY2UuZ2V0KFxuICAgICAgICAgIGRhdGEucHJvZHVjdENvZGUsXG4gICAgICAgICAgZGF0YS5yZWZlcmVuY2VUeXBlLFxuICAgICAgICAgIHBhZ2VTaXplXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==