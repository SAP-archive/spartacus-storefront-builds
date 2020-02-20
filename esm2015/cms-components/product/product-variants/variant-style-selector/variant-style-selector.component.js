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
        const obj = qualifiers.find(q => q.qualifier === VariantQualifier.STYLE);
        return obj ? obj.value : '';
    }
    getVariantThumbnailUrl(variantOptionQualifiers) {
        const qualifier = variantOptionQualifiers.find(item => item.image);
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
        template: "<ng-container>\n  <div class=\"variant-selector\">\n    <div *ngIf=\"variants.selected\" class=\"variant-name\">\n      {{ 'variant.style' | cxTranslate }}:\n      <span class=\"style-name\">{{\n        getVariantOptionValue(variants?.selected.variantOptionQualifiers)\n      }}</span>\n    </div>\n    <ul class=\"variant-list\">\n      <li\n        *ngFor=\"let v of variants?.options\"\n        [ngClass]=\"{\n          'selected-variant': v.code === variants?.selected.code\n        }\"\n      >\n        <img\n          (click)=\"changeStyle(v.code)\"\n          src=\"{{ getVariantThumbnailUrl(v.variantOptionQualifiers) }}\"\n          title=\"{{ getVariantOptionValue(v.variantOptionQualifiers) }}\"\n          alt=\"{{ getVariantOptionValue(v.variantOptionQualifiers) }}\"\n        />\n      </li>\n    </ul>\n  </div>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], VariantStyleSelectorComponent);
export { VariantStyleSelectorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudC1zdHlsZS1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtdmFyaWFudHMvdmFyaWFudC1zdHlsZS1zZWxlY3Rvci92YXJpYW50LXN0eWxlLXNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2hCLHNCQUFzQixFQUN0QixPQUFPLEVBQ1AsY0FBYyxFQUNkLFlBQVksRUFDWixjQUFjLEdBQ2YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzlDLElBQWEsNkJBQTZCLEdBQTFDLE1BQWEsNkJBQTZCO0lBQ3hDLFlBQ1UsTUFBaUIsRUFDakIsY0FBOEIsRUFDOUIsY0FBOEI7UUFGOUIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBR3hDLHFCQUFnQixHQUFHLGdCQUFnQixDQUFDO0lBRmpDLENBQUM7SUFPSixxQkFBcUIsQ0FBQyxVQUFvQztRQUN4RCxNQUFNLEdBQUcsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsS0FBSyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN6RSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxzQkFBc0IsQ0FDcEIsdUJBQWlEO1FBRWpELE1BQU0sU0FBUyxHQUFHLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuRSxPQUFPLFNBQVM7WUFDZCxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQzVELENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRUQsV0FBVyxDQUFDLElBQVk7UUFDdEIsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsY0FBYztpQkFDaEIsR0FBRyxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDO2lCQUM1QixJQUFJO1lBQ0gsdUZBQXVGO1lBQ3ZGLDRDQUE0QztZQUM1QyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNSO2lCQUNBLFNBQVMsQ0FBQyxDQUFDLE9BQWdCLEVBQUUsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7b0JBQ3JCLE9BQU8sRUFBRSxTQUFTO29CQUNsQixNQUFNLEVBQUUsT0FBTztpQkFDaEIsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGLENBQUE7O1lBM0NtQixTQUFTO1lBQ0QsY0FBYztZQUNkLGNBQWM7O0FBTXhDO0lBREMsS0FBSyxFQUFFOytEQUNhO0FBVlYsNkJBQTZCO0lBTHpDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSwyQkFBMkI7UUFDckMsMDFCQUFzRDtRQUN0RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO0dBQ1csNkJBQTZCLENBNkN6QztTQTdDWSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgT2NjQ29uZmlnLFxuICBCYXNlT3B0aW9uLFxuICBWYXJpYW50UXVhbGlmaWVyLFxuICBWYXJpYW50T3B0aW9uUXVhbGlmaWVyLFxuICBQcm9kdWN0LFxuICBQcm9kdWN0U2VydmljZSxcbiAgUHJvZHVjdFNjb3BlLFxuICBSb3V0aW5nU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtdmFyaWFudC1zdHlsZS1zZWxlY3RvcicsXG4gIHRlbXBsYXRlVXJsOiAnLi92YXJpYW50LXN0eWxlLXNlbGVjdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFZhcmlhbnRTdHlsZVNlbGVjdG9yQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IE9jY0NvbmZpZyxcbiAgICBwcml2YXRlIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgdmFyaWFudFF1YWxpZmllciA9IFZhcmlhbnRRdWFsaWZpZXI7XG5cbiAgQElucHV0KClcbiAgdmFyaWFudHM6IEJhc2VPcHRpb247XG5cbiAgZ2V0VmFyaWFudE9wdGlvblZhbHVlKHF1YWxpZmllcnM6IFZhcmlhbnRPcHRpb25RdWFsaWZpZXJbXSkge1xuICAgIGNvbnN0IG9iaiA9IHF1YWxpZmllcnMuZmluZChxID0+IHEucXVhbGlmaWVyID09PSBWYXJpYW50UXVhbGlmaWVyLlNUWUxFKTtcbiAgICByZXR1cm4gb2JqID8gb2JqLnZhbHVlIDogJyc7XG4gIH1cblxuICBnZXRWYXJpYW50VGh1bWJuYWlsVXJsKFxuICAgIHZhcmlhbnRPcHRpb25RdWFsaWZpZXJzOiBWYXJpYW50T3B0aW9uUXVhbGlmaWVyW11cbiAgKTogc3RyaW5nIHtcbiAgICBjb25zdCBxdWFsaWZpZXIgPSB2YXJpYW50T3B0aW9uUXVhbGlmaWVycy5maW5kKGl0ZW0gPT4gaXRlbS5pbWFnZSk7XG4gICAgcmV0dXJuIHF1YWxpZmllclxuICAgICAgPyBgJHt0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsfSR7cXVhbGlmaWVyLmltYWdlLnVybH1gXG4gICAgICA6ICcnO1xuICB9XG5cbiAgY2hhbmdlU3R5bGUoY29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKGNvZGUpIHtcbiAgICAgIHRoaXMucHJvZHVjdFNlcnZpY2VcbiAgICAgICAgLmdldChjb2RlLCBQcm9kdWN0U2NvcGUuTElTVClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgLy8gYmVsb3cgY2FsbCBtaWdodCBsb29rcyByZWR1bmRhbnQgYnV0IGluIGZhY3QgdGhpcyBkYXRhIGlzIGdvaW5nIHRvIGJlIGxvYWRlZCBhbnl3YXlzXG4gICAgICAgICAgLy8gd2UncmUganVzdCBjYWxsaW5nIGl0IGVhcmxpZXIgYW5kIHN0b3JpbmdcbiAgICAgICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICAgICAgdGFrZSgxKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKHByb2R1Y3Q6IFByb2R1Y3QpID0+IHtcbiAgICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHtcbiAgICAgICAgICAgIGN4Um91dGU6ICdwcm9kdWN0JyxcbiAgICAgICAgICAgIHBhcmFtczogcHJvZHVjdCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG59XG4iXX0=