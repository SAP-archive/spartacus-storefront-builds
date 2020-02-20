import { __decorate, __read } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsProductReferencesComponent, Product, ProductReference, ProductReferenceService, } from '@spartacus/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap, tap, distinctUntilChanged, } from 'rxjs/operators';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
import { CurrentProductService } from '../../current-product.service';
var ProductReferencesComponent = /** @class */ (function () {
    function ProductReferencesComponent(component, current, referenceService) {
        var _this = this;
        this.component = component;
        this.current = current;
        this.referenceService = referenceService;
        /**
         * returns an Obervable string for the title
         */
        this.title$ = this.component.data$.pipe(map(function (d) { return d.title; }));
        this.currentProductCode$ = this.current.getProduct().pipe(filter(Boolean), map(function (p) { return p.code; }), distinctUntilChanged(), tap(function () { return _this.referenceService.cleanReferences(); }));
        /**
         * Obervable with an Array of Observables. This is done, so that
         * the component UI could consider to lazy load the UI components when they're
         * in the viewpoint.
         */
        this.items$ = combineLatest([
            this.currentProductCode$,
            this.component.data$,
        ]).pipe(switchMap(function (_a) {
            var _b = __read(_a, 2), code = _b[0], data = _b[1];
            return _this.getProductReferences(code, data.productReferenceTypes);
        }));
    }
    ProductReferencesComponent.prototype.getProductReferences = function (code, referenceType) {
        return this.referenceService.get(code, referenceType).pipe(filter(Boolean), map(function (refs) { return refs.map(function (ref) { return of(ref.target); }); }));
    };
    ProductReferencesComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: CurrentProductService },
        { type: ProductReferenceService }
    ]; };
    ProductReferencesComponent = __decorate([
        Component({
            selector: 'cx-product-references',
            template: "<cx-carousel\n  [title]=\"title$ | async\"\n  [items]=\"items$ | async\"\n  [template]=\"carouselItem\"\n>\n</cx-carousel>\n\n<ng-template #carouselItem let-item=\"item\">\n  <a tabindex=\"0\" [routerLink]=\"{ cxRoute: 'product', params: item } | cxUrl\">\n    <cx-media\n      *ngIf=\"item.images?.PRIMARY\"\n      [container]=\"item.images.PRIMARY\"\n      format=\"product\"\n    >\n    </cx-media>\n    <h4>{{ item.name }}</h4>\n    <div class=\"price\">{{ item.price?.formattedValue }}</div>\n  </a>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ProductReferencesComponent);
    return ProductReferencesComponent;
}());
export { ProductReferencesComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvY2Fyb3VzZWwvcHJvZHVjdC1yZWZlcmVuY2VzL3Byb2R1Y3QtcmVmZXJlbmNlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUNMLDZCQUE2QixFQUM3QixPQUFPLEVBQ1AsZ0JBQWdCLEVBQ2hCLHVCQUF1QixHQUN4QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFDTCxNQUFNLEVBQ04sR0FBRyxFQUNILFNBQVMsRUFDVCxHQUFHLEVBQ0gsb0JBQW9CLEdBQ3JCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDM0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFPdEU7SUE2QkUsb0NBQ1ksU0FBMEQsRUFDMUQsT0FBOEIsRUFDOUIsZ0JBQXlDO1FBSHJELGlCQUlJO1FBSFEsY0FBUyxHQUFULFNBQVMsQ0FBaUQ7UUFDMUQsWUFBTyxHQUFQLE9BQU8sQ0FBdUI7UUFDOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF5QjtRQS9CckQ7O1dBRUc7UUFDSCxXQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLENBQUMsQ0FBQztRQUU5Qyx3QkFBbUIsR0FFdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHLENBQUMsVUFBQyxDQUFVLElBQUssT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sQ0FBQyxFQUMzQixvQkFBb0IsRUFBRSxFQUN0QixHQUFHLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsRUFBdkMsQ0FBdUMsQ0FBQyxDQUNuRCxDQUFDO1FBRUY7Ozs7V0FJRztRQUNILFdBQU0sR0FBc0MsYUFBYSxDQUFDO1lBQ3hELElBQUksQ0FBQyxtQkFBbUI7WUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLO1NBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQ0wsU0FBUyxDQUFDLFVBQUMsRUFBWTtnQkFBWixrQkFBWSxFQUFYLFlBQUksRUFBRSxZQUFJO1lBQ3BCLE9BQUEsS0FBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFBM0QsQ0FBMkQsQ0FDNUQsQ0FDRixDQUFDO0lBTUMsQ0FBQztJQUVJLHlEQUFvQixHQUE1QixVQUNFLElBQVksRUFDWixhQUFxQjtRQUVyQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FDeEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUcsQ0FBQyxVQUFDLElBQXdCLElBQUssT0FBQSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBZCxDQUFjLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQyxDQUNuRSxDQUFDO0lBQ0osQ0FBQzs7Z0JBYnNCLGdCQUFnQjtnQkFDbEIscUJBQXFCO2dCQUNaLHVCQUF1Qjs7SUFoQzFDLDBCQUEwQjtRQUx0QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLHNoQkFBa0Q7WUFDbEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztPQUNXLDBCQUEwQixDQTRDdEM7SUFBRCxpQ0FBQztDQUFBLEFBNUNELElBNENDO1NBNUNZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENtc1Byb2R1Y3RSZWZlcmVuY2VzQ29tcG9uZW50LFxuICBQcm9kdWN0LFxuICBQcm9kdWN0UmVmZXJlbmNlLFxuICBQcm9kdWN0UmVmZXJlbmNlU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBmaWx0ZXIsXG4gIG1hcCxcbiAgc3dpdGNoTWFwLFxuICB0YXAsXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBDdXJyZW50UHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXByb2R1Y3QtcmVmZXJlbmNlcycsXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9kdWN0LXJlZmVyZW5jZXMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdFJlZmVyZW5jZXNDb21wb25lbnQge1xuICAvKipcbiAgICogcmV0dXJucyBhbiBPYmVydmFibGUgc3RyaW5nIGZvciB0aGUgdGl0bGVcbiAgICovXG4gIHRpdGxlJCA9IHRoaXMuY29tcG9uZW50LmRhdGEkLnBpcGUobWFwKGQgPT4gZC50aXRsZSkpO1xuXG4gIHByaXZhdGUgY3VycmVudFByb2R1Y3RDb2RlJDogT2JzZXJ2YWJsZTxcbiAgICBzdHJpbmdcbiAgPiA9IHRoaXMuY3VycmVudC5nZXRQcm9kdWN0KCkucGlwZShcbiAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgbWFwKChwOiBQcm9kdWN0KSA9PiBwLmNvZGUpLFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgdGFwKCgpID0+IHRoaXMucmVmZXJlbmNlU2VydmljZS5jbGVhblJlZmVyZW5jZXMoKSlcbiAgKTtcblxuICAvKipcbiAgICogT2JlcnZhYmxlIHdpdGggYW4gQXJyYXkgb2YgT2JzZXJ2YWJsZXMuIFRoaXMgaXMgZG9uZSwgc28gdGhhdFxuICAgKiB0aGUgY29tcG9uZW50IFVJIGNvdWxkIGNvbnNpZGVyIHRvIGxhenkgbG9hZCB0aGUgVUkgY29tcG9uZW50cyB3aGVuIHRoZXkncmVcbiAgICogaW4gdGhlIHZpZXdwb2ludC5cbiAgICovXG4gIGl0ZW1zJDogT2JzZXJ2YWJsZTxPYnNlcnZhYmxlPFByb2R1Y3Q+W10+ID0gY29tYmluZUxhdGVzdChbXG4gICAgdGhpcy5jdXJyZW50UHJvZHVjdENvZGUkLFxuICAgIHRoaXMuY29tcG9uZW50LmRhdGEkLFxuICBdKS5waXBlKFxuICAgIHN3aXRjaE1hcCgoW2NvZGUsIGRhdGFdKSA9PlxuICAgICAgdGhpcy5nZXRQcm9kdWN0UmVmZXJlbmNlcyhjb2RlLCBkYXRhLnByb2R1Y3RSZWZlcmVuY2VUeXBlcylcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudDogQ21zQ29tcG9uZW50RGF0YTxDbXNQcm9kdWN0UmVmZXJlbmNlc0NvbXBvbmVudD4sXG4gICAgcHJvdGVjdGVkIGN1cnJlbnQ6IEN1cnJlbnRQcm9kdWN0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcmVmZXJlbmNlU2VydmljZTogUHJvZHVjdFJlZmVyZW5jZVNlcnZpY2VcbiAgKSB7fVxuXG4gIHByaXZhdGUgZ2V0UHJvZHVjdFJlZmVyZW5jZXMoXG4gICAgY29kZTogc3RyaW5nLFxuICAgIHJlZmVyZW5jZVR5cGU6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPE9ic2VydmFibGU8UHJvZHVjdD5bXT4ge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZVNlcnZpY2UuZ2V0KGNvZGUsIHJlZmVyZW5jZVR5cGUpLnBpcGUoXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBtYXAoKHJlZnM6IFByb2R1Y3RSZWZlcmVuY2VbXSkgPT4gcmVmcy5tYXAocmVmID0+IG9mKHJlZi50YXJnZXQpKSlcbiAgICApO1xuICB9XG59XG4iXX0=