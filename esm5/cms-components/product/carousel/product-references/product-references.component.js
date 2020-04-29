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
        this.title$ = this.component.data$.pipe(map(function (d) { return d === null || d === void 0 ? void 0 : d.title; }));
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
            return _this.getProductReferences(code, data === null || data === void 0 ? void 0 : data.productReferenceTypes);
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
            template: "<cx-carousel\n  [title]=\"title$ | async\"\n  [items]=\"items$ | async\"\n  [template]=\"carouselItem\"\n>\n</cx-carousel>\n\n<ng-template #carouselItem let-item=\"item\">\n  <a tabindex=\"0\" [routerLink]=\"{ cxRoute: 'product', params: item } | cxUrl\">\n    <cx-media [container]=\"item.images?.PRIMARY\"></cx-media>\n    <h4>{{ item.name }}</h4>\n    <div class=\"price\">{{ item.price?.formattedValue }}</div>\n  </a>\n</ng-template>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ProductReferencesComponent);
    return ProductReferencesComponent;
}());
export { ProductReferencesComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvY2Fyb3VzZWwvcHJvZHVjdC1yZWZlcmVuY2VzL3Byb2R1Y3QtcmVmZXJlbmNlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUNMLDZCQUE2QixFQUM3QixPQUFPLEVBQ1AsZ0JBQWdCLEVBQ2hCLHVCQUF1QixHQUN4QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFDTCxNQUFNLEVBQ04sR0FBRyxFQUNILFNBQVMsRUFDVCxHQUFHLEVBQ0gsb0JBQW9CLEdBQ3JCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDM0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFPdEU7SUE2QkUsb0NBQ1ksU0FBMEQsRUFDMUQsT0FBOEIsRUFDOUIsZ0JBQXlDO1FBSHJELGlCQUlJO1FBSFEsY0FBUyxHQUFULFNBQVMsQ0FBaUQ7UUFDMUQsWUFBTyxHQUFQLE9BQU8sQ0FBdUI7UUFDOUIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUF5QjtRQS9CckQ7O1dBRUc7UUFDSCxXQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFDLENBQUMsV0FBSyxDQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsS0FBSyxHQUFBLENBQUMsQ0FBQyxDQUFDO1FBRWpELHdCQUFtQixHQUV2QixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FDaEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUcsQ0FBQyxVQUFDLENBQVUsSUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxDQUFDLEVBQzNCLG9CQUFvQixFQUFFLEVBQ3RCLEdBQUcsQ0FBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxFQUF2QyxDQUF1QyxDQUFDLENBQ25ELENBQUM7UUFFRjs7OztXQUlHO1FBQ0gsV0FBTSxHQUFzQyxhQUFhLENBQUM7WUFDeEQsSUFBSSxDQUFDLG1CQUFtQjtZQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUs7U0FDckIsQ0FBQyxDQUFDLElBQUksQ0FDTCxTQUFTLENBQUMsVUFBQyxFQUFZO2dCQUFaLGtCQUFZLEVBQVgsWUFBSSxFQUFFLFlBQUk7WUFDcEIsT0FBQSxLQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxxQkFBcUIsQ0FBQztRQUE1RCxDQUE0RCxDQUM3RCxDQUNGLENBQUM7SUFNQyxDQUFDO0lBRUkseURBQW9CLEdBQTVCLFVBQ0UsSUFBWSxFQUNaLGFBQXFCO1FBRXJCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUN4RCxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsR0FBRyxDQUFDLFVBQUMsSUFBd0IsSUFBSyxPQUFBLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFkLENBQWMsQ0FBQyxFQUFqQyxDQUFpQyxDQUFDLENBQ3JFLENBQUM7SUFDSixDQUFDOztnQkFic0IsZ0JBQWdCO2dCQUNsQixxQkFBcUI7Z0JBQ1osdUJBQXVCOztJQWhDMUMsMEJBQTBCO1FBTHRDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsb2NBQWtEO1lBQ2xELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVywwQkFBMEIsQ0E0Q3RDO0lBQUQsaUNBQUM7Q0FBQSxBQTVDRCxJQTRDQztTQTVDWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNQcm9kdWN0UmVmZXJlbmNlc0NvbXBvbmVudCxcbiAgUHJvZHVjdCxcbiAgUHJvZHVjdFJlZmVyZW5jZSxcbiAgUHJvZHVjdFJlZmVyZW5jZVNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZmlsdGVyLFxuICBtYXAsXG4gIHN3aXRjaE1hcCxcbiAgdGFwLFxuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY3VycmVudC1wcm9kdWN0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LXJlZmVyZW5jZXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1yZWZlcmVuY2VzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RSZWZlcmVuY2VzQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIHJldHVybnMgYW4gT2JlcnZhYmxlIHN0cmluZyBmb3IgdGhlIHRpdGxlXG4gICAqL1xuICB0aXRsZSQgPSB0aGlzLmNvbXBvbmVudC5kYXRhJC5waXBlKG1hcCgoZCkgPT4gZD8udGl0bGUpKTtcblxuICBwcml2YXRlIGN1cnJlbnRQcm9kdWN0Q29kZSQ6IE9ic2VydmFibGU8XG4gICAgc3RyaW5nXG4gID4gPSB0aGlzLmN1cnJlbnQuZ2V0UHJvZHVjdCgpLnBpcGUoXG4gICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgIG1hcCgocDogUHJvZHVjdCkgPT4gcC5jb2RlKSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgIHRhcCgoKSA9PiB0aGlzLnJlZmVyZW5jZVNlcnZpY2UuY2xlYW5SZWZlcmVuY2VzKCkpXG4gICk7XG5cbiAgLyoqXG4gICAqIE9iZXJ2YWJsZSB3aXRoIGFuIEFycmF5IG9mIE9ic2VydmFibGVzLiBUaGlzIGlzIGRvbmUsIHNvIHRoYXRcbiAgICogdGhlIGNvbXBvbmVudCBVSSBjb3VsZCBjb25zaWRlciB0byBsYXp5IGxvYWQgdGhlIFVJIGNvbXBvbmVudHMgd2hlbiB0aGV5J3JlXG4gICAqIGluIHRoZSB2aWV3cG9pbnQuXG4gICAqL1xuICBpdGVtcyQ6IE9ic2VydmFibGU8T2JzZXJ2YWJsZTxQcm9kdWN0PltdPiA9IGNvbWJpbmVMYXRlc3QoW1xuICAgIHRoaXMuY3VycmVudFByb2R1Y3RDb2RlJCxcbiAgICB0aGlzLmNvbXBvbmVudC5kYXRhJCxcbiAgXSkucGlwZShcbiAgICBzd2l0Y2hNYXAoKFtjb2RlLCBkYXRhXSkgPT5cbiAgICAgIHRoaXMuZ2V0UHJvZHVjdFJlZmVyZW5jZXMoY29kZSwgZGF0YT8ucHJvZHVjdFJlZmVyZW5jZVR5cGVzKVxuICAgIClcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50OiBDbXNDb21wb25lbnREYXRhPENtc1Byb2R1Y3RSZWZlcmVuY2VzQ29tcG9uZW50PixcbiAgICBwcm90ZWN0ZWQgY3VycmVudDogQ3VycmVudFByb2R1Y3RTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByZWZlcmVuY2VTZXJ2aWNlOiBQcm9kdWN0UmVmZXJlbmNlU2VydmljZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBnZXRQcm9kdWN0UmVmZXJlbmNlcyhcbiAgICBjb2RlOiBzdHJpbmcsXG4gICAgcmVmZXJlbmNlVHlwZTogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8T2JzZXJ2YWJsZTxQcm9kdWN0PltdPiB7XG4gICAgcmV0dXJuIHRoaXMucmVmZXJlbmNlU2VydmljZS5nZXQoY29kZSwgcmVmZXJlbmNlVHlwZSkucGlwZShcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIG1hcCgocmVmczogUHJvZHVjdFJlZmVyZW5jZVtdKSA9PiByZWZzLm1hcCgocmVmKSA9PiBvZihyZWYudGFyZ2V0KSkpXG4gICAgKTtcbiAgfVxufVxuIl19