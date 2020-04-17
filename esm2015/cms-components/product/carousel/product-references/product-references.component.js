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
        this.title$ = this.component.data$.pipe(map((d) => d.title));
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
        return this.referenceService.get(code, referenceType).pipe(filter(Boolean), map((refs) => refs.map((ref) => of(ref.target))));
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
        template: "<cx-carousel\n  [title]=\"title$ | async\"\n  [items]=\"items$ | async\"\n  [template]=\"carouselItem\"\n>\n</cx-carousel>\n\n<ng-template #carouselItem let-item=\"item\">\n  <a tabindex=\"0\" [routerLink]=\"{ cxRoute: 'product', params: item } | cxUrl\">\n    <cx-media *ngIf=\"item.images?.PRIMARY\" [container]=\"item.images?.PRIMARY\">\n    </cx-media>\n    <h4>{{ item.name }}</h4>\n    <div class=\"price\">{{ item.price?.formattedValue }}</div>\n  </a>\n</ng-template>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ProductReferencesComponent);
export { ProductReferencesComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvY2Fyb3VzZWwvcHJvZHVjdC1yZWZlcmVuY2VzL3Byb2R1Y3QtcmVmZXJlbmNlcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUNMLDZCQUE2QixFQUM3QixPQUFPLEVBQ1AsZ0JBQWdCLEVBQ2hCLHVCQUF1QixHQUN4QixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFDTCxNQUFNLEVBQ04sR0FBRyxFQUNILFNBQVMsRUFDVCxHQUFHLEVBQ0gsb0JBQW9CLEdBQ3JCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFDM0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFPdEUsSUFBYSwwQkFBMEIsR0FBdkMsTUFBYSwwQkFBMEI7SUE2QnJDLFlBQ1ksU0FBMEQsRUFDMUQsT0FBOEIsRUFDOUIsZ0JBQXlDO1FBRnpDLGNBQVMsR0FBVCxTQUFTLENBQWlEO1FBQzFELFlBQU8sR0FBUCxPQUFPLENBQXVCO1FBQzlCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBeUI7UUEvQnJEOztXQUVHO1FBQ0gsV0FBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBRWhELHdCQUFtQixHQUV2QixJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FDaEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUcsQ0FBQyxDQUFDLENBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUMzQixvQkFBb0IsRUFBRSxFQUN0QixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGVBQWUsRUFBRSxDQUFDLENBQ25ELENBQUM7UUFFRjs7OztXQUlHO1FBQ0gsV0FBTSxHQUFzQyxhQUFhLENBQUM7WUFDeEQsSUFBSSxDQUFDLG1CQUFtQjtZQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUs7U0FDckIsQ0FBQyxDQUFDLElBQUksQ0FDTCxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLENBQ3pCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQzVELENBQ0YsQ0FBQztJQU1DLENBQUM7SUFFSSxvQkFBb0IsQ0FDMUIsSUFBWSxFQUNaLGFBQXFCO1FBRXJCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUN4RCxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsR0FBRyxDQUFDLENBQUMsSUFBd0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQ3JFLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTs7WUFkd0IsZ0JBQWdCO1lBQ2xCLHFCQUFxQjtZQUNaLHVCQUF1Qjs7QUFoQzFDLDBCQUEwQjtJQUx0QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsdUJBQXVCO1FBQ2pDLHllQUFrRDtRQUNsRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO0dBQ1csMEJBQTBCLENBNEN0QztTQTVDWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDbXNQcm9kdWN0UmVmZXJlbmNlc0NvbXBvbmVudCxcbiAgUHJvZHVjdCxcbiAgUHJvZHVjdFJlZmVyZW5jZSxcbiAgUHJvZHVjdFJlZmVyZW5jZVNlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZmlsdGVyLFxuICBtYXAsXG4gIHN3aXRjaE1hcCxcbiAgdGFwLFxuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9jbXMtY29tcG9uZW50LWRhdGEnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY3VycmVudC1wcm9kdWN0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LXJlZmVyZW5jZXMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1yZWZlcmVuY2VzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RSZWZlcmVuY2VzQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIHJldHVybnMgYW4gT2JlcnZhYmxlIHN0cmluZyBmb3IgdGhlIHRpdGxlXG4gICAqL1xuICB0aXRsZSQgPSB0aGlzLmNvbXBvbmVudC5kYXRhJC5waXBlKG1hcCgoZCkgPT4gZC50aXRsZSkpO1xuXG4gIHByaXZhdGUgY3VycmVudFByb2R1Y3RDb2RlJDogT2JzZXJ2YWJsZTxcbiAgICBzdHJpbmdcbiAgPiA9IHRoaXMuY3VycmVudC5nZXRQcm9kdWN0KCkucGlwZShcbiAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgbWFwKChwOiBQcm9kdWN0KSA9PiBwLmNvZGUpLFxuICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgdGFwKCgpID0+IHRoaXMucmVmZXJlbmNlU2VydmljZS5jbGVhblJlZmVyZW5jZXMoKSlcbiAgKTtcblxuICAvKipcbiAgICogT2JlcnZhYmxlIHdpdGggYW4gQXJyYXkgb2YgT2JzZXJ2YWJsZXMuIFRoaXMgaXMgZG9uZSwgc28gdGhhdFxuICAgKiB0aGUgY29tcG9uZW50IFVJIGNvdWxkIGNvbnNpZGVyIHRvIGxhenkgbG9hZCB0aGUgVUkgY29tcG9uZW50cyB3aGVuIHRoZXkncmVcbiAgICogaW4gdGhlIHZpZXdwb2ludC5cbiAgICovXG4gIGl0ZW1zJDogT2JzZXJ2YWJsZTxPYnNlcnZhYmxlPFByb2R1Y3Q+W10+ID0gY29tYmluZUxhdGVzdChbXG4gICAgdGhpcy5jdXJyZW50UHJvZHVjdENvZGUkLFxuICAgIHRoaXMuY29tcG9uZW50LmRhdGEkLFxuICBdKS5waXBlKFxuICAgIHN3aXRjaE1hcCgoW2NvZGUsIGRhdGFdKSA9PlxuICAgICAgdGhpcy5nZXRQcm9kdWN0UmVmZXJlbmNlcyhjb2RlLCBkYXRhLnByb2R1Y3RSZWZlcmVuY2VUeXBlcylcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudDogQ21zQ29tcG9uZW50RGF0YTxDbXNQcm9kdWN0UmVmZXJlbmNlc0NvbXBvbmVudD4sXG4gICAgcHJvdGVjdGVkIGN1cnJlbnQ6IEN1cnJlbnRQcm9kdWN0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcmVmZXJlbmNlU2VydmljZTogUHJvZHVjdFJlZmVyZW5jZVNlcnZpY2VcbiAgKSB7fVxuXG4gIHByaXZhdGUgZ2V0UHJvZHVjdFJlZmVyZW5jZXMoXG4gICAgY29kZTogc3RyaW5nLFxuICAgIHJlZmVyZW5jZVR5cGU6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPE9ic2VydmFibGU8UHJvZHVjdD5bXT4ge1xuICAgIHJldHVybiB0aGlzLnJlZmVyZW5jZVNlcnZpY2UuZ2V0KGNvZGUsIHJlZmVyZW5jZVR5cGUpLnBpcGUoXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBtYXAoKHJlZnM6IFByb2R1Y3RSZWZlcmVuY2VbXSkgPT4gcmVmcy5tYXAoKHJlZikgPT4gb2YocmVmLnRhcmdldCkpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==