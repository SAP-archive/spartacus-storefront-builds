import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { OccConfig, BaseOption, VariantQualifier, VariantOptionQualifier, Product, ProductService, ProductScope, RoutingService, } from '@spartacus/core';
import { filter, take } from 'rxjs/operators';
let VariantStyleSelectorComponent = class VariantStyleSelectorComponent {
    constructor(config, productService, routingService) {
        this.config = config;
        this.productService = productService;
        this.routingService = routingService;
        this.variantQualifier = VariantQualifier;
    }
    getVariantOptionValue(qualifiers) {
        const obj = qualifiers.find((q) => q.qualifier === VariantQualifier.STYLE);
        return obj ? obj.value : '';
    }
    getVariantThumbnailUrl(variantOptionQualifiers) {
        const qualifier = variantOptionQualifiers.find((item) => item.image);
        return qualifier
            ? `${this.config.backend.occ.baseUrl}${qualifier.image.url}`
            : '';
    }
    changeStyle(code) {
        if (code) {
            this.productService
                .get(code, ProductScope.LIST)
                .pipe(
            // below call might looks redundant but in fact this data is going to be loaded anyways
            // we're just calling it earlier and storing
            filter(Boolean), take(1))
                .subscribe((product) => {
                this.routingService.go({
                    cxRoute: 'product',
                    params: product,
                });
            });
        }
        return null;
    }
};
VariantStyleSelectorComponent.ctorParameters = () => [
    { type: OccConfig },
    { type: ProductService },
    { type: RoutingService }
];
__decorate([
    Input()
], VariantStyleSelectorComponent.prototype, "variants", void 0);
VariantStyleSelectorComponent = __decorate([
    Component({
        selector: 'cx-variant-style-selector',
        template: "<ng-container>\n  <div class=\"variant-selector\">\n    <div *ngIf=\"variants.selected\" class=\"variant-name\">\n      {{ 'variant.style' | cxTranslate }}:\n      <span class=\"style-name\">{{\n        getVariantOptionValue(variants?.selected.variantOptionQualifiers)\n      }}</span>\n    </div>\n    <ul class=\"variant-list\">\n      <li\n        *ngFor=\"let v of variants?.options\"\n        [ngClass]=\"{\n          'selected-variant': v.code === variants?.selected.code\n        }\"\n      >\n        <button class=\"variant-button\" (click)=\"changeStyle(v.code)\">\n          <img\n            src=\"{{ getVariantThumbnailUrl(v.variantOptionQualifiers) }}\"\n            title=\"{{ getVariantOptionValue(v.variantOptionQualifiers) }}\"\n            alt=\"{{ getVariantOptionValue(v.variantOptionQualifiers) }}\"\n          />\n        </button>\n      </li>\n    </ul>\n  </div>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], VariantStyleSelectorComponent);
export { VariantStyleSelectorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudC1zdHlsZS1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtdmFyaWFudHMvdmFyaWFudC1zdHlsZS1zZWxlY3Rvci92YXJpYW50LXN0eWxlLXNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2hCLHNCQUFzQixFQUN0QixPQUFPLEVBQ1AsY0FBYyxFQUNkLFlBQVksRUFDWixjQUFjLEdBQ2YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzlDLElBQWEsNkJBQTZCLEdBQTFDLE1BQWEsNkJBQTZCO0lBQ3hDLFlBQ1UsTUFBaUIsRUFDakIsY0FBOEIsRUFDOUIsY0FBOEI7UUFGOUIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBR3hDLHFCQUFnQixHQUFHLGdCQUFnQixDQUFDO0lBRmpDLENBQUM7SUFPSixxQkFBcUIsQ0FBQyxVQUFvQztRQUN4RCxNQUFNLEdBQUcsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxLQUFLLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNFLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELHNCQUFzQixDQUNwQix1QkFBaUQ7UUFFakQsTUFBTSxTQUFTLEdBQUcsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckUsT0FBTyxTQUFTO1lBQ2QsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUM1RCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1QsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFZO1FBQ3RCLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxDQUFDLGNBQWM7aUJBQ2hCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUksQ0FBQztpQkFDNUIsSUFBSTtZQUNILHVGQUF1RjtZQUN2Riw0Q0FBNEM7WUFDNUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUjtpQkFDQSxTQUFTLENBQUMsQ0FBQyxPQUFnQixFQUFFLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO29CQUNyQixPQUFPLEVBQUUsU0FBUztvQkFDbEIsTUFBTSxFQUFFLE9BQU87aUJBQ2hCLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Q0FDRixDQUFBOztZQTNDbUIsU0FBUztZQUNELGNBQWM7WUFDZCxjQUFjOztBQU14QztJQURDLEtBQUssRUFBRTsrREFDYTtBQVZWLDZCQUE2QjtJQUx6QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsMkJBQTJCO1FBQ3JDLHU1QkFBc0Q7UUFDdEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLDZCQUE2QixDQTZDekM7U0E3Q1ksNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE9jY0NvbmZpZyxcbiAgQmFzZU9wdGlvbixcbiAgVmFyaWFudFF1YWxpZmllcixcbiAgVmFyaWFudE9wdGlvblF1YWxpZmllcixcbiAgUHJvZHVjdCxcbiAgUHJvZHVjdFNlcnZpY2UsXG4gIFByb2R1Y3RTY29wZSxcbiAgUm91dGluZ1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXZhcmlhbnQtc3R5bGUtc2VsZWN0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vdmFyaWFudC1zdHlsZS1zZWxlY3Rvci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBWYXJpYW50U3R5bGVTZWxlY3RvckNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBPY2NDb25maWcsXG4gICAgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2VcbiAgKSB7fVxuXG4gIHZhcmlhbnRRdWFsaWZpZXIgPSBWYXJpYW50UXVhbGlmaWVyO1xuXG4gIEBJbnB1dCgpXG4gIHZhcmlhbnRzOiBCYXNlT3B0aW9uO1xuXG4gIGdldFZhcmlhbnRPcHRpb25WYWx1ZShxdWFsaWZpZXJzOiBWYXJpYW50T3B0aW9uUXVhbGlmaWVyW10pIHtcbiAgICBjb25zdCBvYmogPSBxdWFsaWZpZXJzLmZpbmQoKHEpID0+IHEucXVhbGlmaWVyID09PSBWYXJpYW50UXVhbGlmaWVyLlNUWUxFKTtcbiAgICByZXR1cm4gb2JqID8gb2JqLnZhbHVlIDogJyc7XG4gIH1cblxuICBnZXRWYXJpYW50VGh1bWJuYWlsVXJsKFxuICAgIHZhcmlhbnRPcHRpb25RdWFsaWZpZXJzOiBWYXJpYW50T3B0aW9uUXVhbGlmaWVyW11cbiAgKTogc3RyaW5nIHtcbiAgICBjb25zdCBxdWFsaWZpZXIgPSB2YXJpYW50T3B0aW9uUXVhbGlmaWVycy5maW5kKChpdGVtKSA9PiBpdGVtLmltYWdlKTtcbiAgICByZXR1cm4gcXVhbGlmaWVyXG4gICAgICA/IGAke3RoaXMuY29uZmlnLmJhY2tlbmQub2NjLmJhc2VVcmx9JHtxdWFsaWZpZXIuaW1hZ2UudXJsfWBcbiAgICAgIDogJyc7XG4gIH1cblxuICBjaGFuZ2VTdHlsZShjb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoY29kZSkge1xuICAgICAgdGhpcy5wcm9kdWN0U2VydmljZVxuICAgICAgICAuZ2V0KGNvZGUsIFByb2R1Y3RTY29wZS5MSVNUKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICAvLyBiZWxvdyBjYWxsIG1pZ2h0IGxvb2tzIHJlZHVuZGFudCBidXQgaW4gZmFjdCB0aGlzIGRhdGEgaXMgZ29pbmcgdG8gYmUgbG9hZGVkIGFueXdheXNcbiAgICAgICAgICAvLyB3ZSdyZSBqdXN0IGNhbGxpbmcgaXQgZWFybGllciBhbmQgc3RvcmluZ1xuICAgICAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgICAgICB0YWtlKDEpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgocHJvZHVjdDogUHJvZHVjdCkgPT4ge1xuICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oe1xuICAgICAgICAgICAgY3hSb3V0ZTogJ3Byb2R1Y3QnLFxuICAgICAgICAgICAgcGFyYW1zOiBwcm9kdWN0LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdfQ==