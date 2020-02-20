import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product, RoutingService, BaseOption, VariantQualifier, VariantOptionQualifier, ProductService, ProductScope, } from '@spartacus/core';
import { filter, take } from 'rxjs/operators';
let VariantSizeSelectorComponent = class VariantSizeSelectorComponent {
    constructor(productService, routingService) {
        this.productService = productService;
        this.routingService = routingService;
    }
    changeSize(code) {
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
    getVariantOptionValue(qualifiers) {
        const obj = qualifiers.find(q => q.qualifier === VariantQualifier.SIZE);
        return obj ? obj.value : '';
    }
};
VariantSizeSelectorComponent.ctorParameters = () => [
    { type: ProductService },
    { type: RoutingService }
];
__decorate([
    Input()
], VariantSizeSelectorComponent.prototype, "product", void 0);
__decorate([
    Input()
], VariantSizeSelectorComponent.prototype, "variants", void 0);
VariantSizeSelectorComponent = __decorate([
    Component({
        selector: 'cx-variant-size-selector',
        template: "<ng-container>\n  <div class=\"variant-selector\">\n    <div class=\"variant-name\">{{ 'variant.size' | cxTranslate }}:</div>\n    <select\n      (change)=\"changeSize($event.target.value)\"\n      class=\"form-control variant-select\"\n    >\n      <option\n        *ngFor=\"let v of variants?.options\"\n        value=\"{{ v.code }}\"\n        [selected]=\"v.code === product?.code\"\n        >{{ getVariantOptionValue(v.variantOptionQualifiers) }}</option\n      >\n    </select>\n    <a\n      href=\"#\"\n      class=\"size-guide\"\n      title=\"{{ 'variant.sizeGuideLabel' | cxTranslate }}\"\n    >\n      {{ 'variant.sizeGuideLabel' | cxTranslate }}\n    </a>\n  </div>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], VariantSizeSelectorComponent);
export { VariantSizeSelectorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudC1zaXplLXNlbGVjdG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC12YXJpYW50cy92YXJpYW50LXNpemUtc2VsZWN0b3IvdmFyaWFudC1zaXplLXNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUNMLE9BQU8sRUFDUCxjQUFjLEVBQ2QsVUFBVSxFQUNWLGdCQUFnQixFQUNoQixzQkFBc0IsRUFDdEIsY0FBYyxFQUNkLFlBQVksR0FDYixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPOUMsSUFBYSw0QkFBNEIsR0FBekMsTUFBYSw0QkFBNEI7SUFDdkMsWUFDVSxjQUE4QixFQUM5QixjQUE4QjtRQUQ5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBQ3JDLENBQUM7SUFRSixVQUFVLENBQUMsSUFBWTtRQUNyQixJQUFJLElBQUksRUFBRTtZQUNSLElBQUksQ0FBQyxjQUFjO2lCQUNoQixHQUFHLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUM7aUJBQzVCLElBQUk7WUFDSCx1RkFBdUY7WUFDdkYsNENBQTRDO1lBQzVDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1I7aUJBQ0EsU0FBUyxDQUFDLENBQUMsT0FBZ0IsRUFBRSxFQUFFO2dCQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQztvQkFDckIsT0FBTyxFQUFFLFNBQVM7b0JBQ2xCLE1BQU0sRUFBRSxPQUFPO2lCQUNoQixDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNOO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0QscUJBQXFCLENBQUMsVUFBb0M7UUFDeEQsTUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEtBQUssZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEUsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM5QixDQUFDO0NBQ0YsQ0FBQTs7WUFqQzJCLGNBQWM7WUFDZCxjQUFjOztBQUl4QztJQURDLEtBQUssRUFBRTs2REFDUztBQUdqQjtJQURDLEtBQUssRUFBRTs4REFDYTtBQVZWLDRCQUE0QjtJQUx4QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsMEJBQTBCO1FBQ3BDLG9zQkFBcUQ7UUFDckQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLDRCQUE0QixDQW1DeEM7U0FuQ1ksNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIFByb2R1Y3QsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBCYXNlT3B0aW9uLFxuICBWYXJpYW50UXVhbGlmaWVyLFxuICBWYXJpYW50T3B0aW9uUXVhbGlmaWVyLFxuICBQcm9kdWN0U2VydmljZSxcbiAgUHJvZHVjdFNjb3BlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC12YXJpYW50LXNpemUtc2VsZWN0b3InLFxuICB0ZW1wbGF0ZVVybDogJy4vdmFyaWFudC1zaXplLXNlbGVjdG9yLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFZhcmlhbnRTaXplU2VsZWN0b3JDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZVxuICApIHt9XG5cbiAgQElucHV0KClcbiAgcHJvZHVjdDogUHJvZHVjdDtcblxuICBASW5wdXQoKVxuICB2YXJpYW50czogQmFzZU9wdGlvbjtcblxuICBjaGFuZ2VTaXplKGNvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmIChjb2RlKSB7XG4gICAgICB0aGlzLnByb2R1Y3RTZXJ2aWNlXG4gICAgICAgIC5nZXQoY29kZSwgUHJvZHVjdFNjb3BlLkxJU1QpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIC8vIGJlbG93IGNhbGwgbWlnaHQgbG9va3MgcmVkdW5kYW50IGJ1dCBpbiBmYWN0IHRoaXMgZGF0YSBpcyBnb2luZyB0byBiZSBsb2FkZWQgYW55d2F5c1xuICAgICAgICAgIC8vIHdlJ3JlIGp1c3QgY2FsbGluZyBpdCBlYXJsaWVyIGFuZCBzdG9yaW5nXG4gICAgICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgICAgIHRha2UoMSlcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChwcm9kdWN0OiBQcm9kdWN0KSA9PiB7XG4gICAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7XG4gICAgICAgICAgICBjeFJvdXRlOiAncHJvZHVjdCcsXG4gICAgICAgICAgICBwYXJhbXM6IHByb2R1Y3QsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBnZXRWYXJpYW50T3B0aW9uVmFsdWUocXVhbGlmaWVyczogVmFyaWFudE9wdGlvblF1YWxpZmllcltdKSB7XG4gICAgY29uc3Qgb2JqID0gcXVhbGlmaWVycy5maW5kKHEgPT4gcS5xdWFsaWZpZXIgPT09IFZhcmlhbnRRdWFsaWZpZXIuU0laRSk7XG4gICAgcmV0dXJuIG9iaiA/IG9iai52YWx1ZSA6ICcnO1xuICB9XG59XG4iXX0=