import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductReferenceService, } from '@spartacus/core';
import { of } from 'rxjs';
import { filter, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
import { CurrentProductService } from '../../current-product.service';
export class ProductReferencesComponent {
    constructor(cmsComponentData, currentProductService, productReferenceService) {
        this.cmsComponentData = cmsComponentData;
        this.currentProductService = currentProductService;
        this.productReferenceService = productReferenceService;
        /**
         * Observable with an Array of Observables. This is done so that
         * the component UI could consider to lazy load the UI components when they're
         * in the viewpoint.
         */
        this.items$ = this.productCode$.pipe(withLatestFrom(this.componentData$), tap(([productCode, data]) => this.productReferenceService.loadProductReferences(productCode, data === null || data === void 0 ? void 0 : data.productReferenceTypes)), switchMap(([productCode, data]) => this.getProductReferences(productCode, data === null || data === void 0 ? void 0 : data.productReferenceTypes)));
    }
    get componentData$() {
        return this.cmsComponentData.data$.pipe(filter(Boolean));
    }
    /**
     * Returns an Observable String for the product code
     */
    get productCode$() {
        return this.currentProductService.getProduct().pipe(filter(Boolean), map((product) => product.code), tap((_) => this.productReferenceService.cleanReferences()));
    }
    /**
     * Returns an Observable String for the title
     */
    get title$() {
        return this.componentData$.pipe(map((data) => data === null || data === void 0 ? void 0 : data.title));
    }
    /**
     * Returns an observable for product references
     */
    getProductReferences(code, referenceType) {
        return this.productReferenceService
            .getProductReferences(code, referenceType)
            .pipe(filter(Boolean), map((references) => references.map((reference) => of(reference.target))));
    }
}
ProductReferencesComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-references',
                template: "<cx-carousel\n  [title]=\"title$ | async\"\n  [items]=\"items$ | async\"\n  [template]=\"carouselItem\"\n>\n</cx-carousel>\n\n<ng-template #carouselItem let-item=\"item\">\n  <a tabindex=\"0\" [routerLink]=\"{ cxRoute: 'product', params: item } | cxUrl\">\n    <cx-media [container]=\"item.images?.PRIMARY\" format=\"product\"></cx-media>\n    <h4>{{ item.name }}</h4>\n    <div class=\"price\">{{ item.price?.formattedValue }}</div>\n  </a>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
ProductReferencesComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: CurrentProductService },
    { type: ProductReferenceService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL3Byb2R1Y3QvY2Fyb3VzZWwvcHJvZHVjdC1yZWZlcmVuY2VzL3Byb2R1Y3QtcmVmZXJlbmNlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBSUwsdUJBQXVCLEdBQ3hCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLGNBQWMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBT3RFLE1BQU0sT0FBTywwQkFBMEI7SUFDckMsWUFDWSxnQkFBaUUsRUFDakUscUJBQTRDLEVBQzVDLHVCQUFnRDtRQUZoRCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWlEO1FBQ2pFLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7UUFDNUMsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQXlCNUQ7Ozs7V0FJRztRQUNILFdBQU0sR0FBc0MsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQ2hFLGNBQWMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQ25DLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FDMUIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLHFCQUFxQixDQUNoRCxXQUFXLEVBQ1gsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLHFCQUFxQixDQUM1QixDQUNGLEVBQ0QsU0FBUyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUNoQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxFQUFFLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxxQkFBcUIsQ0FBQyxDQUNwRSxDQUNGLENBQUM7SUF4Q0MsQ0FBQztJQUVKLElBQWMsY0FBYztRQUMxQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7T0FFRztJQUNILElBQWMsWUFBWTtRQUN4QixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQ2pELE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHLENBQUMsQ0FBQyxPQUFnQixFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQ3ZDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGVBQWUsRUFBRSxDQUFDLENBQzNELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxhQUFKLElBQUksdUJBQUosSUFBSSxDQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQW9CRDs7T0FFRztJQUNLLG9CQUFvQixDQUMxQixJQUFZLEVBQ1osYUFBcUI7UUFFckIsT0FBTyxJQUFJLENBQUMsdUJBQXVCO2FBQ2hDLG9CQUFvQixDQUFDLElBQUksRUFBRSxhQUFhLENBQUM7YUFDekMsSUFBSSxDQUNILE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHLENBQUMsQ0FBQyxVQUE4QixFQUFFLEVBQUUsQ0FDckMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUNwRCxDQUNGLENBQUM7SUFDTixDQUFDOzs7WUFuRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLHVkQUFrRDtnQkFDbEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztZQVBRLGdCQUFnQjtZQUNoQixxQkFBcUI7WUFMNUIsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zUHJvZHVjdFJlZmVyZW5jZXNDb21wb25lbnQsXG4gIFByb2R1Y3QsXG4gIFByb2R1Y3RSZWZlcmVuY2UsXG4gIFByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzd2l0Y2hNYXAsIHRhcCwgd2l0aExhdGVzdEZyb20gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBDdXJyZW50UHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtcmVmZXJlbmNlcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LXJlZmVyZW5jZXMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFJlZmVyZW5jZXNDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY21zQ29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDbXNQcm9kdWN0UmVmZXJlbmNlc0NvbXBvbmVudD4sXG4gICAgcHJvdGVjdGVkIGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBwcm9kdWN0UmVmZXJlbmNlU2VydmljZTogUHJvZHVjdFJlZmVyZW5jZVNlcnZpY2VcbiAgKSB7fVxuXG4gIHByb3RlY3RlZCBnZXQgY29tcG9uZW50RGF0YSQoKTogT2JzZXJ2YWJsZTxDbXNQcm9kdWN0UmVmZXJlbmNlc0NvbXBvbmVudD4ge1xuICAgIHJldHVybiB0aGlzLmNtc0NvbXBvbmVudERhdGEuZGF0YSQucGlwZShmaWx0ZXIoQm9vbGVhbikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSBTdHJpbmcgZm9yIHRoZSBwcm9kdWN0IGNvZGVcbiAgICovXG4gIHByb3RlY3RlZCBnZXQgcHJvZHVjdENvZGUkKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFByb2R1Y3RTZXJ2aWNlLmdldFByb2R1Y3QoKS5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgbWFwKChwcm9kdWN0OiBQcm9kdWN0KSA9PiBwcm9kdWN0LmNvZGUpLFxuICAgICAgdGFwKChfKSA9PiB0aGlzLnByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlLmNsZWFuUmVmZXJlbmNlcygpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBPYnNlcnZhYmxlIFN0cmluZyBmb3IgdGhlIHRpdGxlXG4gICAqL1xuICBnZXQgdGl0bGUkKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50RGF0YSQucGlwZShtYXAoKGRhdGEpID0+IGRhdGE/LnRpdGxlKSk7XG4gIH1cblxuICAvKipcbiAgICogT2JzZXJ2YWJsZSB3aXRoIGFuIEFycmF5IG9mIE9ic2VydmFibGVzLiBUaGlzIGlzIGRvbmUgc28gdGhhdFxuICAgKiB0aGUgY29tcG9uZW50IFVJIGNvdWxkIGNvbnNpZGVyIHRvIGxhenkgbG9hZCB0aGUgVUkgY29tcG9uZW50cyB3aGVuIHRoZXkncmVcbiAgICogaW4gdGhlIHZpZXdwb2ludC5cbiAgICovXG4gIGl0ZW1zJDogT2JzZXJ2YWJsZTxPYnNlcnZhYmxlPFByb2R1Y3Q+W10+ID0gdGhpcy5wcm9kdWN0Q29kZSQucGlwZShcbiAgICB3aXRoTGF0ZXN0RnJvbSh0aGlzLmNvbXBvbmVudERhdGEkKSxcbiAgICB0YXAoKFtwcm9kdWN0Q29kZSwgZGF0YV0pID0+XG4gICAgICB0aGlzLnByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlLmxvYWRQcm9kdWN0UmVmZXJlbmNlcyhcbiAgICAgICAgcHJvZHVjdENvZGUsXG4gICAgICAgIGRhdGE/LnByb2R1Y3RSZWZlcmVuY2VUeXBlc1xuICAgICAgKVxuICAgICksXG4gICAgc3dpdGNoTWFwKChbcHJvZHVjdENvZGUsIGRhdGFdKSA9PlxuICAgICAgdGhpcy5nZXRQcm9kdWN0UmVmZXJlbmNlcyhwcm9kdWN0Q29kZSwgZGF0YT8ucHJvZHVjdFJlZmVyZW5jZVR5cGVzKVxuICAgIClcbiAgKTtcblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIGZvciBwcm9kdWN0IHJlZmVyZW5jZXNcbiAgICovXG4gIHByaXZhdGUgZ2V0UHJvZHVjdFJlZmVyZW5jZXMoXG4gICAgY29kZTogc3RyaW5nLFxuICAgIHJlZmVyZW5jZVR5cGU6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPE9ic2VydmFibGU8UHJvZHVjdD5bXT4ge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlXG4gICAgICAuZ2V0UHJvZHVjdFJlZmVyZW5jZXMoY29kZSwgcmVmZXJlbmNlVHlwZSlcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICAgIG1hcCgocmVmZXJlbmNlczogUHJvZHVjdFJlZmVyZW5jZVtdKSA9PlxuICAgICAgICAgIHJlZmVyZW5jZXMubWFwKChyZWZlcmVuY2UpID0+IG9mKHJlZmVyZW5jZS50YXJnZXQpKVxuICAgICAgICApXG4gICAgICApO1xuICB9XG59XG4iXX0=