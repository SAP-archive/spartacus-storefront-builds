/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductReferenceService, } from '@spartacus/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap, tap, distinctUntilChanged, } from 'rxjs/operators';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
import { CurrentProductService } from '../../current-product.service';
export class ProductReferencesComponent {
    /**
     * @param {?} component
     * @param {?} current
     * @param {?} referenceService
     */
    constructor(component, current, referenceService) {
        this.component = component;
        this.current = current;
        this.referenceService = referenceService;
        /**
         * returns an Obervable string for the title
         */
        this.title$ = this.component.data$.pipe(map((/**
         * @param {?} d
         * @return {?}
         */
        d => d.title)));
        this.currentProductCode$ = this.current.getProduct().pipe(filter(Boolean), map((/**
         * @param {?} p
         * @return {?}
         */
        (p) => p.code)), distinctUntilChanged(), tap((/**
         * @return {?}
         */
        () => this.referenceService.cleanReferences())));
        /**
         * Obervable with an Array of Observables. This is done, so that
         * the component UI could consider to lazy load the UI components when they're
         * in the viewpoint.
         */
        this.items$ = combineLatest([
            this.currentProductCode$,
            this.component.data$,
        ]).pipe(switchMap((/**
         * @param {?} __0
         * @return {?}
         */
        ([code, data]) => this.getProductReferences(code, data.productReferenceTypes))));
    }
    /**
     * @private
     * @param {?} code
     * @param {?} referenceType
     * @return {?}
     */
    getProductReferences(code, referenceType) {
        return this.referenceService.get(code, referenceType).pipe(filter(Boolean), map((/**
         * @param {?} refs
         * @return {?}
         */
        (refs) => refs.map((/**
         * @param {?} ref
         * @return {?}
         */
        ref => of(ref.target))))));
    }
}
ProductReferencesComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-references',
                template: "<cx-carousel\n  [title]=\"title$ | async\"\n  [items]=\"items$ | async\"\n  [template]=\"carouselItem\"\n>\n</cx-carousel>\n\n<ng-template #carouselItem let-item=\"item\">\n  <a tabindex=\"0\" [routerLink]=\"{ cxRoute: 'product', params: item } | cxUrl\">\n    <cx-media\n      *ngIf=\"item.images?.PRIMARY\"\n      [container]=\"item.images.PRIMARY\"\n      format=\"product\"\n    >\n    </cx-media>\n    <h4>{{ item.name }}</h4>\n    <div class=\"price\">{{ item.price?.formattedValue }}</div>\n  </a>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
ProductReferencesComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: CurrentProductService },
    { type: ProductReferenceService }
];
if (false) {
    /**
     * returns an Obervable string for the title
     * @type {?}
     */
    ProductReferencesComponent.prototype.title$;
    /**
     * @type {?}
     * @private
     */
    ProductReferencesComponent.prototype.currentProductCode$;
    /**
     * Obervable with an Array of Observables. This is done, so that
     * the component UI could consider to lazy load the UI components when they're
     * in the viewpoint.
     * @type {?}
     */
    ProductReferencesComponent.prototype.items$;
    /**
     * @type {?}
     * @protected
     */
    ProductReferencesComponent.prototype.component;
    /**
     * @type {?}
     * @protected
     */
    ProductReferencesComponent.prototype.current;
    /**
     * @type {?}
     * @protected
     */
    ProductReferencesComponent.prototype.referenceService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvY2Fyb3VzZWwvcHJvZHVjdC1yZWZlcmVuY2VzL3Byb2R1Y3QtcmVmZXJlbmNlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUlMLHVCQUF1QixHQUN4QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFDTCxNQUFNLEVBQ04sR0FBRyxFQUNILFNBQVMsRUFDVCxHQUFHLEVBQ0gsb0JBQW9CLEdBQ3JCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDM0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFPdEUsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7O0lBNkJyQyxZQUNZLFNBQTBELEVBQzFELE9BQThCLEVBQzlCLGdCQUF5QztRQUZ6QyxjQUFTLEdBQVQsU0FBUyxDQUFpRDtRQUMxRCxZQUFPLEdBQVAsT0FBTyxDQUF1QjtRQUM5QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQXlCOzs7O1FBNUJyRCxXQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO1FBRTlDLHdCQUFtQixHQUV2QixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FDaEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUc7Ozs7UUFBQyxDQUFDLENBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBQyxFQUMzQixvQkFBb0IsRUFBRSxFQUN0QixHQUFHOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxFQUFFLEVBQUMsQ0FDbkQsQ0FBQzs7Ozs7O1FBT0YsV0FBTSxHQUFzQyxhQUFhLENBQUM7WUFDeEQsSUFBSSxDQUFDLG1CQUFtQjtZQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUs7U0FDckIsQ0FBQyxDQUFDLElBQUksQ0FDTCxTQUFTOzs7O1FBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQ3pCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQzVELENBQ0YsQ0FBQztJQU1DLENBQUM7Ozs7Ozs7SUFFSSxvQkFBb0IsQ0FDMUIsSUFBWSxFQUNaLGFBQXFCO1FBRXJCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUN4RCxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsR0FBRzs7OztRQUFDLENBQUMsSUFBd0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUMsRUFBQyxDQUNuRSxDQUFDO0lBQ0osQ0FBQzs7O1lBaERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxzaEJBQWtEO2dCQUNsRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQVBRLGdCQUFnQjtZQUNoQixxQkFBcUI7WUFYNUIsdUJBQXVCOzs7Ozs7O0lBc0J2Qiw0Q0FBc0Q7Ozs7O0lBRXRELHlEQU9FOzs7Ozs7O0lBT0YsNENBT0U7Ozs7O0lBR0EsK0NBQW9FOzs7OztJQUNwRSw2Q0FBd0M7Ozs7O0lBQ3hDLHNEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc1Byb2R1Y3RSZWZlcmVuY2VzQ29tcG9uZW50LFxuICBQcm9kdWN0LFxuICBQcm9kdWN0UmVmZXJlbmNlLFxuICBQcm9kdWN0UmVmZXJlbmNlU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBmaWx0ZXIsXG4gIG1hcCxcbiAgc3dpdGNoTWFwLFxuICB0YXAsXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBDdXJyZW50UHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtcmVmZXJlbmNlcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LXJlZmVyZW5jZXMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFJlZmVyZW5jZXNDb21wb25lbnQge1xuICAvKipcbiAgICogcmV0dXJucyBhbiBPYmVydmFibGUgc3RyaW5nIGZvciB0aGUgdGl0bGVcbiAgICovXG4gIHRpdGxlJCA9IHRoaXMuY29tcG9uZW50LmRhdGEkLnBpcGUobWFwKGQgPT4gZC50aXRsZSkpO1xuXG4gIHByaXZhdGUgY3VycmVudFByb2R1Y3RDb2RlJDogT2JzZXJ2YWJsZTxcbiAgICBzdHJpbmdcbiAgPiA9IHRoaXMuY3VycmVudC5nZXRQcm9kdWN0KCkucGlwZShcbiAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgbWFwKChwOiBQcm9kdWN0KSA9PiBwLmNvZGUpLFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgdGFwKCgpID0+IHRoaXMucmVmZXJlbmNlU2VydmljZS5jbGVhblJlZmVyZW5jZXMoKSlcbiAgKTtcblxuICAvKipcbiAgICogT2JlcnZhYmxlIHdpdGggYW4gQXJyYXkgb2YgT2JzZXJ2YWJsZXMuIFRoaXMgaXMgZG9uZSwgc28gdGhhdFxuICAgKiB0aGUgY29tcG9uZW50IFVJIGNvdWxkIGNvbnNpZGVyIHRvIGxhenkgbG9hZCB0aGUgVUkgY29tcG9uZW50cyB3aGVuIHRoZXkncmVcbiAgICogaW4gdGhlIHZpZXdwb2ludC5cbiAgICovXG4gIGl0ZW1zJDogT2JzZXJ2YWJsZTxPYnNlcnZhYmxlPFByb2R1Y3Q+W10+ID0gY29tYmluZUxhdGVzdChbXG4gICAgdGhpcy5jdXJyZW50UHJvZHVjdENvZGUkLFxuICAgIHRoaXMuY29tcG9uZW50LmRhdGEkLFxuICBdKS5waXBlKFxuICAgIHN3aXRjaE1hcCgoW2NvZGUsIGRhdGFdKSA9PlxuICAgICAgdGhpcy5nZXRQcm9kdWN0UmVmZXJlbmNlcyhjb2RlLCBkYXRhLnByb2R1Y3RSZWZlcmVuY2VUeXBlcylcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudDogQ21zQ29tcG9uZW50RGF0YTxDbXNQcm9kdWN0UmVmZXJlbmNlc0NvbXBvbmVudD4sXG4gICAgcHJvdGVjdGVkIGN1cnJlbnQ6IEN1cnJlbnRQcm9kdWN0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcmVmZXJlbmNlU2VydmljZTogUHJvZHVjdFJlZmVyZW5jZVNlcnZpY2VcbiAgKSB7fVxuXG4gIHByaXZhdGUgZ2V0UHJvZHVjdFJlZmVyZW5jZXMoXG4gICAgY29kZTogc3RyaW5nLFxuICAgIHJlZmVyZW5jZVR5cGU6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPE9ic2VydmFibGU8UHJvZHVjdD5bXT4ge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZVNlcnZpY2UuZ2V0KGNvZGUsIHJlZmVyZW5jZVR5cGUpLnBpcGUoXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBtYXAoKHJlZnM6IFByb2R1Y3RSZWZlcmVuY2VbXSkgPT4gcmVmcy5tYXAocmVmID0+IG9mKHJlZi50YXJnZXQpKSlcbiAgICApO1xuICB9XG59XG4iXX0=