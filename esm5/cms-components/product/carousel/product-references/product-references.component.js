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
            template: "<cx-carousel\n  [title]=\"title$ | async\"\n  [items]=\"items$ | async\"\n  [template]=\"carouselItem\"\n>\n</cx-carousel>\n\n<ng-template #carouselItem let-item=\"item\">\n  <a tabindex=\"0\" [routerLink]=\"{ cxRoute: 'product', params: item } | cxUrl\">\n    <cx-media *ngIf=\"item.images?.PRIMARY\" [container]=\"item.images?.PRIMARY\">\n    </cx-media>\n    <h4>{{ item.name }}</h4>\n    <div class=\"price\">{{ item.price?.formattedValue }}</div>\n  </a>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ProductReferencesComponent);
    return ProductReferencesComponent;
}());
export { ProductReferencesComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvY2Fyb3VzZWwvcHJvZHVjdC1yZWZlcmVuY2VzL3Byb2R1Y3QtcmVmZXJlbmNlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUNMLDZCQUE2QixFQUM3QixPQUFPLEVBQ1AsZ0JBQWdCLEVBQ2hCLHVCQUF1QixHQUN4QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFDTCxNQUFNLEVBQ04sR0FBRyxFQUNILFNBQVMsRUFDVCxHQUFHLEVBQ0gsb0JBQW9CLEdBQ3JCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDM0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFPdEU7SUE2QkUsb0NBQ1ksU0FBMEQsRUFDMUQsT0FBOEIsRUFDOUIsZ0JBQXlDO1FBSHJELGlCQUlJO1FBSFEsY0FBUyxHQUFULFNBQVMsQ0FBaUQ7UUFDMUQsWUFBTyxHQUFQLE9BQU8sQ0FBdUI7UUFDOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF5QjtRQS9CckQ7O1dBRUc7UUFDSCxXQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsSUFBSyxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLENBQUMsQ0FBQztRQUVoRCx3QkFBbUIsR0FFdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHLENBQUMsVUFBQyxDQUFVLElBQUssT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sQ0FBQyxFQUMzQixvQkFBb0IsRUFBRSxFQUN0QixHQUFHLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsRUFBdkMsQ0FBdUMsQ0FBQyxDQUNuRCxDQUFDO1FBRUY7Ozs7V0FJRztRQUNILFdBQU0sR0FBc0MsYUFBYSxDQUFDO1lBQ3hELElBQUksQ0FBQyxtQkFBbUI7WUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLO1NBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQ0wsU0FBUyxDQUFDLFVBQUMsRUFBWTtnQkFBWixrQkFBWSxFQUFYLFlBQUksRUFBRSxZQUFJO1lBQ3BCLE9BQUEsS0FBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUM7UUFBM0QsQ0FBMkQsQ0FDNUQsQ0FDRixDQUFDO0lBTUMsQ0FBQztJQUVJLHlEQUFvQixHQUE1QixVQUNFLElBQVksRUFDWixhQUFxQjtRQUVyQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FDeEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUcsQ0FBQyxVQUFDLElBQXdCLElBQUssT0FBQSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRyxJQUFLLE9BQUEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBZCxDQUFjLENBQUMsRUFBakMsQ0FBaUMsQ0FBQyxDQUNyRSxDQUFDO0lBQ0osQ0FBQzs7Z0JBYnNCLGdCQUFnQjtnQkFDbEIscUJBQXFCO2dCQUNaLHVCQUF1Qjs7SUFoQzFDLDBCQUEwQjtRQUx0QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLHllQUFrRDtZQUNsRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1csMEJBQTBCLENBNEN0QztJQUFELGlDQUFDO0NBQUEsQUE1Q0QsSUE0Q0M7U0E1Q1ksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ21zUHJvZHVjdFJlZmVyZW5jZXNDb21wb25lbnQsXG4gIFByb2R1Y3QsXG4gIFByb2R1Y3RSZWZlcmVuY2UsXG4gIFByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGZpbHRlcixcbiAgbWFwLFxuICBzd2l0Y2hNYXAsXG4gIHRhcCxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG59IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uLy4uL2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtcHJvZHVjdC1yZWZlcmVuY2VzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2R1Y3QtcmVmZXJlbmNlcy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0UmVmZXJlbmNlc0NvbXBvbmVudCB7XG4gIC8qKlxuICAgKiByZXR1cm5zIGFuIE9iZXJ2YWJsZSBzdHJpbmcgZm9yIHRoZSB0aXRsZVxuICAgKi9cbiAgdGl0bGUkID0gdGhpcy5jb21wb25lbnQuZGF0YSQucGlwZShtYXAoKGQpID0+IGQudGl0bGUpKTtcblxuICBwcml2YXRlIGN1cnJlbnRQcm9kdWN0Q29kZSQ6IE9ic2VydmFibGU8XG4gICAgc3RyaW5nXG4gID4gPSB0aGlzLmN1cnJlbnQuZ2V0UHJvZHVjdCgpLnBpcGUoXG4gICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgIG1hcCgocDogUHJvZHVjdCkgPT4gcC5jb2RlKSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgIHRhcCgoKSA9PiB0aGlzLnJlZmVyZW5jZVNlcnZpY2UuY2xlYW5SZWZlcmVuY2VzKCkpXG4gICk7XG5cbiAgLyoqXG4gICAqIE9iZXJ2YWJsZSB3aXRoIGFuIEFycmF5IG9mIE9ic2VydmFibGVzLiBUaGlzIGlzIGRvbmUsIHNvIHRoYXRcbiAgICogdGhlIGNvbXBvbmVudCBVSSBjb3VsZCBjb25zaWRlciB0byBsYXp5IGxvYWQgdGhlIFVJIGNvbXBvbmVudHMgd2hlbiB0aGV5J3JlXG4gICAqIGluIHRoZSB2aWV3cG9pbnQuXG4gICAqL1xuICBpdGVtcyQ6IE9ic2VydmFibGU8T2JzZXJ2YWJsZTxQcm9kdWN0PltdPiA9IGNvbWJpbmVMYXRlc3QoW1xuICAgIHRoaXMuY3VycmVudFByb2R1Y3RDb2RlJCxcbiAgICB0aGlzLmNvbXBvbmVudC5kYXRhJCxcbiAgXSkucGlwZShcbiAgICBzd2l0Y2hNYXAoKFtjb2RlLCBkYXRhXSkgPT5cbiAgICAgIHRoaXMuZ2V0UHJvZHVjdFJlZmVyZW5jZXMoY29kZSwgZGF0YS5wcm9kdWN0UmVmZXJlbmNlVHlwZXMpXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb21wb25lbnQ6IENtc0NvbXBvbmVudERhdGE8Q21zUHJvZHVjdFJlZmVyZW5jZXNDb21wb25lbnQ+LFxuICAgIHByb3RlY3RlZCBjdXJyZW50OiBDdXJyZW50UHJvZHVjdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJlZmVyZW5jZVNlcnZpY2U6IFByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlXG4gICkge31cblxuICBwcml2YXRlIGdldFByb2R1Y3RSZWZlcmVuY2VzKFxuICAgIGNvZGU6IHN0cmluZyxcbiAgICByZWZlcmVuY2VUeXBlOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxPYnNlcnZhYmxlPFByb2R1Y3Q+W10+IHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2VTZXJ2aWNlLmdldChjb2RlLCByZWZlcmVuY2VUeXBlKS5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgbWFwKChyZWZzOiBQcm9kdWN0UmVmZXJlbmNlW10pID0+IHJlZnMubWFwKChyZWYpID0+IG9mKHJlZi50YXJnZXQpKSlcbiAgICApO1xuICB9XG59XG4iXX0=