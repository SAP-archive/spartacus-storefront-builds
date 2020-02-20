import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsProductReferencesComponent, Product, ProductReference, ProductReferenceService, } from '@spartacus/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap, tap, distinctUntilChanged, } from 'rxjs/operators';
import { CmsComponentData } from '../../../../cms-structure/page/model/cms-component-data';
import { CurrentProductService } from '../../current-product.service';
let ProductReferencesComponent = class ProductReferencesComponent {
    constructor(component, current, referenceService) {
        this.component = component;
        this.current = current;
        this.referenceService = referenceService;
        /**
         * returns an Obervable string for the title
         */
        this.title$ = this.component.data$.pipe(map(d => d.title));
        this.currentProductCode$ = this.current.getProduct().pipe(filter(Boolean), map((p) => p.code), distinctUntilChanged(), tap(() => this.referenceService.cleanReferences()));
        /**
         * Obervable with an Array of Observables. This is done, so that
         * the component UI could consider to lazy load the UI components when they're
         * in the viewpoint.
         */
        this.items$ = combineLatest([
            this.currentProductCode$,
            this.component.data$,
        ]).pipe(switchMap(([code, data]) => this.getProductReferences(code, data.productReferenceTypes)));
    }
    getProductReferences(code, referenceType) {
        return this.referenceService.get(code, referenceType).pipe(filter(Boolean), map((refs) => refs.map(ref => of(ref.target))));
    }
};
ProductReferencesComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: CurrentProductService },
    { type: ProductReferenceService }
];
ProductReferencesComponent = __decorate([
    Component({
        selector: 'cx-product-references',
        template: "<cx-carousel\n  [title]=\"title$ | async\"\n  [items]=\"items$ | async\"\n  [template]=\"carouselItem\"\n>\n</cx-carousel>\n\n<ng-template #carouselItem let-item=\"item\">\n  <a tabindex=\"0\" [routerLink]=\"{ cxRoute: 'product', params: item } | cxUrl\">\n    <cx-media\n      *ngIf=\"item.images?.PRIMARY\"\n      [container]=\"item.images.PRIMARY\"\n      format=\"product\"\n    >\n    </cx-media>\n    <h4>{{ item.name }}</h4>\n    <div class=\"price\">{{ item.price?.formattedValue }}</div>\n  </a>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ProductReferencesComponent);
export { ProductReferencesComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvY2Fyb3VzZWwvcHJvZHVjdC1yZWZlcmVuY2VzL3Byb2R1Y3QtcmVmZXJlbmNlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUNMLDZCQUE2QixFQUM3QixPQUFPLEVBQ1AsZ0JBQWdCLEVBQ2hCLHVCQUF1QixHQUN4QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFDTCxNQUFNLEVBQ04sR0FBRyxFQUNILFNBQVMsRUFDVCxHQUFHLEVBQ0gsb0JBQW9CLEdBQ3JCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDM0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFPdEUsSUFBYSwwQkFBMEIsR0FBdkMsTUFBYSwwQkFBMEI7SUE2QnJDLFlBQ1ksU0FBMEQsRUFDMUQsT0FBOEIsRUFDOUIsZ0JBQXlDO1FBRnpDLGNBQVMsR0FBVCxTQUFTLENBQWlEO1FBQzFELFlBQU8sR0FBUCxPQUFPLENBQXVCO1FBQzlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7UUEvQnJEOztXQUVHO1FBQ0gsV0FBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUU5Qyx3QkFBbUIsR0FFdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHLENBQUMsQ0FBQyxDQUFVLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFDM0Isb0JBQW9CLEVBQUUsRUFDdEIsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUNuRCxDQUFDO1FBRUY7Ozs7V0FJRztRQUNILFdBQU0sR0FBc0MsYUFBYSxDQUFDO1lBQ3hELElBQUksQ0FBQyxtQkFBbUI7WUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLO1NBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQ0wsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUN6QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUM1RCxDQUNGLENBQUM7SUFNQyxDQUFDO0lBRUksb0JBQW9CLENBQzFCLElBQVksRUFDWixhQUFxQjtRQUVyQixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FDeEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUcsQ0FBQyxDQUFDLElBQXdCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FDbkUsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBOztZQWR3QixnQkFBZ0I7WUFDbEIscUJBQXFCO1lBQ1osdUJBQXVCOztBQWhDMUMsMEJBQTBCO0lBTHRDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSx1QkFBdUI7UUFDakMsc2hCQUFrRDtRQUNsRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO0dBQ1csMEJBQTBCLENBNEN0QztTQTVDWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNQcm9kdWN0UmVmZXJlbmNlc0NvbXBvbmVudCxcbiAgUHJvZHVjdCxcbiAgUHJvZHVjdFJlZmVyZW5jZSxcbiAgUHJvZHVjdFJlZmVyZW5jZVNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZmlsdGVyLFxuICBtYXAsXG4gIHN3aXRjaE1hcCxcbiAgdGFwLFxuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY3VycmVudC1wcm9kdWN0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LXJlZmVyZW5jZXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1yZWZlcmVuY2VzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RSZWZlcmVuY2VzQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIHJldHVybnMgYW4gT2JlcnZhYmxlIHN0cmluZyBmb3IgdGhlIHRpdGxlXG4gICAqL1xuICB0aXRsZSQgPSB0aGlzLmNvbXBvbmVudC5kYXRhJC5waXBlKG1hcChkID0+IGQudGl0bGUpKTtcblxuICBwcml2YXRlIGN1cnJlbnRQcm9kdWN0Q29kZSQ6IE9ic2VydmFibGU8XG4gICAgc3RyaW5nXG4gID4gPSB0aGlzLmN1cnJlbnQuZ2V0UHJvZHVjdCgpLnBpcGUoXG4gICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgIG1hcCgocDogUHJvZHVjdCkgPT4gcC5jb2RlKSxcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgIHRhcCgoKSA9PiB0aGlzLnJlZmVyZW5jZVNlcnZpY2UuY2xlYW5SZWZlcmVuY2VzKCkpXG4gICk7XG5cbiAgLyoqXG4gICAqIE9iZXJ2YWJsZSB3aXRoIGFuIEFycmF5IG9mIE9ic2VydmFibGVzLiBUaGlzIGlzIGRvbmUsIHNvIHRoYXRcbiAgICogdGhlIGNvbXBvbmVudCBVSSBjb3VsZCBjb25zaWRlciB0byBsYXp5IGxvYWQgdGhlIFVJIGNvbXBvbmVudHMgd2hlbiB0aGV5J3JlXG4gICAqIGluIHRoZSB2aWV3cG9pbnQuXG4gICAqL1xuICBpdGVtcyQ6IE9ic2VydmFibGU8T2JzZXJ2YWJsZTxQcm9kdWN0PltdPiA9IGNvbWJpbmVMYXRlc3QoW1xuICAgIHRoaXMuY3VycmVudFByb2R1Y3RDb2RlJCxcbiAgICB0aGlzLmNvbXBvbmVudC5kYXRhJCxcbiAgXSkucGlwZShcbiAgICBzd2l0Y2hNYXAoKFtjb2RlLCBkYXRhXSkgPT5cbiAgICAgIHRoaXMuZ2V0UHJvZHVjdFJlZmVyZW5jZXMoY29kZSwgZGF0YS5wcm9kdWN0UmVmZXJlbmNlVHlwZXMpXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjb21wb25lbnQ6IENtc0NvbXBvbmVudERhdGE8Q21zUHJvZHVjdFJlZmVyZW5jZXNDb21wb25lbnQ+LFxuICAgIHByb3RlY3RlZCBjdXJyZW50OiBDdXJyZW50UHJvZHVjdFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJlZmVyZW5jZVNlcnZpY2U6IFByb2R1Y3RSZWZlcmVuY2VTZXJ2aWNlXG4gICkge31cblxuICBwcml2YXRlIGdldFByb2R1Y3RSZWZlcmVuY2VzKFxuICAgIGNvZGU6IHN0cmluZyxcbiAgICByZWZlcmVuY2VUeXBlOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxPYnNlcnZhYmxlPFByb2R1Y3Q+W10+IHtcbiAgICByZXR1cm4gdGhpcy5yZWZlcmVuY2VTZXJ2aWNlLmdldChjb2RlLCByZWZlcmVuY2VUeXBlKS5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgbWFwKChyZWZzOiBQcm9kdWN0UmVmZXJlbmNlW10pID0+IHJlZnMubWFwKHJlZiA9PiBvZihyZWYudGFyZ2V0KSkpXG4gICAgKTtcbiAgfVxufVxuIl19