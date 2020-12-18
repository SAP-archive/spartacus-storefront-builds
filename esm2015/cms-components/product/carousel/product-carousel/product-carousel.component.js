import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductScope, ProductService, } from '@spartacus/core';
import { filter, map } from 'rxjs/operators';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
export class ProductCarouselComponent {
    constructor(componentData, productService) {
        this.componentData = componentData;
        this.productService = productService;
        this.PRODUCT_SCOPE = ProductScope.LIST;
        this.componentData$ = this.componentData.data$.pipe(filter(Boolean));
        /**
         * returns an Observable string for the title.
         */
        this.title$ = this.componentData$.pipe(map((data) => data.title));
        /**
         * Observable that holds an Array of Observables. This is done, so that
         * the component UI could consider to lazy load the UI components when they're
         * in the viewpoint.
         */
        this.items$ = this.componentData$.pipe(map((data) => { var _a, _b; return (_b = (_a = data.productCodes) === null || _a === void 0 ? void 0 : _a.trim().split(' ')) !== null && _b !== void 0 ? _b : []; }), map((codes) => codes.map((code) => this.productService.get(code, this.PRODUCT_SCOPE))));
    }
}
ProductCarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-carousel',
                template: "<cx-carousel\n  [items]=\"items$ | async\"\n  [title]=\"title$ | async\"\n  [template]=\"carouselItem\"\n  itemWidth=\"285px\"\n>\n</cx-carousel>\n\n<ng-template #carouselItem let-item=\"item\">\n  <a tabindex=\"0\" [routerLink]=\"{ cxRoute: 'product', params: item } | cxUrl\">\n    <cx-media [container]=\"item.images?.PRIMARY\" format=\"product\"></cx-media>\n    <h4>\n      {{ item.name }}\n    </h4>\n    <div class=\"price\">\n      {{ item.price?.formattedValue }}\n    </div>\n  </a>\n</ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
ProductCarouselComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: ProductService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9wcm9kdWN0L2Nhcm91c2VsL3Byb2R1Y3QtY2Fyb3VzZWwvcHJvZHVjdC1jYXJvdXNlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRSxPQUFPLEVBR0wsWUFBWSxFQUNaLGNBQWMsR0FDZixNQUFNLGlCQUFpQixDQUFDO0FBRXpCLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFPM0YsTUFBTSxPQUFPLHdCQUF3QjtJQTBCbkMsWUFDWSxhQUFzQyxFQUN0QyxjQUE4QjtRQUQ5QixrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFDdEMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBM0J2QixrQkFBYSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUM7UUFFN0MsbUJBQWMsR0FBc0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUN2RSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQ2hCLENBQUM7UUFFRjs7V0FFRztRQUNILFdBQU0sR0FBdUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQ25ELEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUMxQixDQUFDO1FBRUY7Ozs7V0FJRztRQUNILFdBQU0sR0FBc0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQ2xFLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLGtDQUFDLElBQUksQ0FBQyxZQUFZLDBDQUFFLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxvQ0FBSyxFQUFFLEdBQUEsQ0FBQyxFQUN6RCxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUNaLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FDdkUsQ0FDRixDQUFDO0lBS0MsQ0FBQzs7O1lBbENMLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQiwwZ0JBQWdEO2dCQUNoRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7O1lBTlEsZ0JBQWdCO1lBSnZCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNQcm9kdWN0Q2Fyb3VzZWxDb21wb25lbnQgYXMgbW9kZWwsXG4gIFByb2R1Y3QsXG4gIFByb2R1Y3RTY29wZSxcbiAgUHJvZHVjdFNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1jYXJvdXNlbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LWNhcm91c2VsLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RDYXJvdXNlbENvbXBvbmVudCB7XG4gIHByb3RlY3RlZCByZWFkb25seSBQUk9EVUNUX1NDT1BFID0gUHJvZHVjdFNjb3BlLkxJU1Q7XG5cbiAgcHJpdmF0ZSBjb21wb25lbnREYXRhJDogT2JzZXJ2YWJsZTxtb2RlbD4gPSB0aGlzLmNvbXBvbmVudERhdGEuZGF0YSQucGlwZShcbiAgICBmaWx0ZXIoQm9vbGVhbilcbiAgKTtcblxuICAvKipcbiAgICogcmV0dXJucyBhbiBPYnNlcnZhYmxlIHN0cmluZyBmb3IgdGhlIHRpdGxlLlxuICAgKi9cbiAgdGl0bGUkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLmNvbXBvbmVudERhdGEkLnBpcGUoXG4gICAgbWFwKChkYXRhKSA9PiBkYXRhLnRpdGxlKVxuICApO1xuXG4gIC8qKlxuICAgKiBPYnNlcnZhYmxlIHRoYXQgaG9sZHMgYW4gQXJyYXkgb2YgT2JzZXJ2YWJsZXMuIFRoaXMgaXMgZG9uZSwgc28gdGhhdFxuICAgKiB0aGUgY29tcG9uZW50IFVJIGNvdWxkIGNvbnNpZGVyIHRvIGxhenkgbG9hZCB0aGUgVUkgY29tcG9uZW50cyB3aGVuIHRoZXkncmVcbiAgICogaW4gdGhlIHZpZXdwb2ludC5cbiAgICovXG4gIGl0ZW1zJDogT2JzZXJ2YWJsZTxPYnNlcnZhYmxlPFByb2R1Y3Q+W10+ID0gdGhpcy5jb21wb25lbnREYXRhJC5waXBlKFxuICAgIG1hcCgoZGF0YSkgPT4gZGF0YS5wcm9kdWN0Q29kZXM/LnRyaW0oKS5zcGxpdCgnICcpID8/IFtdKSxcbiAgICBtYXAoKGNvZGVzKSA9PlxuICAgICAgY29kZXMubWFwKChjb2RlKSA9PiB0aGlzLnByb2R1Y3RTZXJ2aWNlLmdldChjb2RlLCB0aGlzLlBST0RVQ1RfU0NPUEUpKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxtb2RlbD4sXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZVxuICApIHt9XG59XG4iXX0=