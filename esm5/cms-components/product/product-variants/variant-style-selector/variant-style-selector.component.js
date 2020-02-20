import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { OccConfig, BaseOption, VariantQualifier, VariantOptionQualifier, Product, ProductService, ProductScope, RoutingService, } from '@spartacus/core';
import { filter, take } from 'rxjs/operators';
var VariantStyleSelectorComponent = /** @class */ (function () {
    function VariantStyleSelectorComponent(config, productService, routingService) {
        this.config = config;
        this.productService = productService;
        this.routingService = routingService;
        this.variantQualifier = VariantQualifier;
    }
    VariantStyleSelectorComponent.prototype.getVariantOptionValue = function (qualifiers) {
        var obj = qualifiers.find(function (q) { return q.qualifier === VariantQualifier.STYLE; });
        return obj ? obj.value : '';
    };
    VariantStyleSelectorComponent.prototype.getVariantThumbnailUrl = function (variantOptionQualifiers) {
        var qualifier = variantOptionQualifiers.find(function (item) { return item.image; });
        return qualifier
            ? "" + this.config.backend.occ.baseUrl + qualifier.image.url
            : '';
    };
    VariantStyleSelectorComponent.prototype.changeStyle = function (code) {
        var _this = this;
        if (code) {
            this.productService
                .get(code, ProductScope.LIST)
                .pipe(
            // below call might looks redundant but in fact this data is going to be loaded anyways
            // we're just calling it earlier and storing
            filter(Boolean), take(1))
                .subscribe(function (product) {
                _this.routingService.go({
                    cxRoute: 'product',
                    params: product,
                });
            });
        }
        return null;
    };
    VariantStyleSelectorComponent.ctorParameters = function () { return [
        { type: OccConfig },
        { type: ProductService },
        { type: RoutingService }
    ]; };
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
    return VariantStyleSelectorComponent;
}());
export { VariantStyleSelectorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudC1zdHlsZS1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtdmFyaWFudHMvdmFyaWFudC1zdHlsZS1zZWxlY3Rvci92YXJpYW50LXN0eWxlLXNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2hCLHNCQUFzQixFQUN0QixPQUFPLEVBQ1AsY0FBYyxFQUNkLFlBQVksRUFDWixjQUFjLEdBQ2YsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzlDO0lBQ0UsdUNBQ1UsTUFBaUIsRUFDakIsY0FBOEIsRUFDOUIsY0FBOEI7UUFGOUIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBR3hDLHFCQUFnQixHQUFHLGdCQUFnQixDQUFDO0lBRmpDLENBQUM7SUFPSiw2REFBcUIsR0FBckIsVUFBc0IsVUFBb0M7UUFDeEQsSUFBTSxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxTQUFTLEtBQUssZ0JBQWdCLENBQUMsS0FBSyxFQUF0QyxDQUFzQyxDQUFDLENBQUM7UUFDekUsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRUQsOERBQXNCLEdBQXRCLFVBQ0UsdUJBQWlEO1FBRWpELElBQU0sU0FBUyxHQUFHLHVCQUF1QixDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLEVBQVYsQ0FBVSxDQUFDLENBQUM7UUFDbkUsT0FBTyxTQUFTO1lBQ2QsQ0FBQyxDQUFDLEtBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUs7WUFDNUQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNULENBQUM7SUFFRCxtREFBVyxHQUFYLFVBQVksSUFBWTtRQUF4QixpQkFrQkM7UUFqQkMsSUFBSSxJQUFJLEVBQUU7WUFDUixJQUFJLENBQUMsY0FBYztpQkFDaEIsR0FBRyxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsSUFBSSxDQUFDO2lCQUM1QixJQUFJO1lBQ0gsdUZBQXVGO1lBQ3ZGLDRDQUE0QztZQUM1QyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUNSO2lCQUNBLFNBQVMsQ0FBQyxVQUFDLE9BQWdCO2dCQUMxQixLQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQztvQkFDckIsT0FBTyxFQUFFLFNBQVM7b0JBQ2xCLE1BQU0sRUFBRSxPQUFPO2lCQUNoQixDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNOO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztnQkExQ2lCLFNBQVM7Z0JBQ0QsY0FBYztnQkFDZCxjQUFjOztJQU14QztRQURDLEtBQUssRUFBRTttRUFDYTtJQVZWLDZCQUE2QjtRQUx6QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLDAxQkFBc0Q7WUFDdEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztPQUNXLDZCQUE2QixDQTZDekM7SUFBRCxvQ0FBQztDQUFBLEFBN0NELElBNkNDO1NBN0NZLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBPY2NDb25maWcsXG4gIEJhc2VPcHRpb24sXG4gIFZhcmlhbnRRdWFsaWZpZXIsXG4gIFZhcmlhbnRPcHRpb25RdWFsaWZpZXIsXG4gIFByb2R1Y3QsXG4gIFByb2R1Y3RTZXJ2aWNlLFxuICBQcm9kdWN0U2NvcGUsXG4gIFJvdXRpbmdTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC12YXJpYW50LXN0eWxlLXNlbGVjdG9yJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ZhcmlhbnQtc3R5bGUtc2VsZWN0b3IuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVmFyaWFudFN0eWxlU2VsZWN0b3JDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogT2NjQ29uZmlnLFxuICAgIHByaXZhdGUgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlXG4gICkge31cblxuICB2YXJpYW50UXVhbGlmaWVyID0gVmFyaWFudFF1YWxpZmllcjtcblxuICBASW5wdXQoKVxuICB2YXJpYW50czogQmFzZU9wdGlvbjtcblxuICBnZXRWYXJpYW50T3B0aW9uVmFsdWUocXVhbGlmaWVyczogVmFyaWFudE9wdGlvblF1YWxpZmllcltdKSB7XG4gICAgY29uc3Qgb2JqID0gcXVhbGlmaWVycy5maW5kKHEgPT4gcS5xdWFsaWZpZXIgPT09IFZhcmlhbnRRdWFsaWZpZXIuU1RZTEUpO1xuICAgIHJldHVybiBvYmogPyBvYmoudmFsdWUgOiAnJztcbiAgfVxuXG4gIGdldFZhcmlhbnRUaHVtYm5haWxVcmwoXG4gICAgdmFyaWFudE9wdGlvblF1YWxpZmllcnM6IFZhcmlhbnRPcHRpb25RdWFsaWZpZXJbXVxuICApOiBzdHJpbmcge1xuICAgIGNvbnN0IHF1YWxpZmllciA9IHZhcmlhbnRPcHRpb25RdWFsaWZpZXJzLmZpbmQoaXRlbSA9PiBpdGVtLmltYWdlKTtcbiAgICByZXR1cm4gcXVhbGlmaWVyXG4gICAgICA/IGAke3RoaXMuY29uZmlnLmJhY2tlbmQub2NjLmJhc2VVcmx9JHtxdWFsaWZpZXIuaW1hZ2UudXJsfWBcbiAgICAgIDogJyc7XG4gIH1cblxuICBjaGFuZ2VTdHlsZShjb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoY29kZSkge1xuICAgICAgdGhpcy5wcm9kdWN0U2VydmljZVxuICAgICAgICAuZ2V0KGNvZGUsIFByb2R1Y3RTY29wZS5MSVNUKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICAvLyBiZWxvdyBjYWxsIG1pZ2h0IGxvb2tzIHJlZHVuZGFudCBidXQgaW4gZmFjdCB0aGlzIGRhdGEgaXMgZ29pbmcgdG8gYmUgbG9hZGVkIGFueXdheXNcbiAgICAgICAgICAvLyB3ZSdyZSBqdXN0IGNhbGxpbmcgaXQgZWFybGllciBhbmQgc3RvcmluZ1xuICAgICAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgICAgICB0YWtlKDEpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgocHJvZHVjdDogUHJvZHVjdCkgPT4ge1xuICAgICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oe1xuICAgICAgICAgICAgY3hSb3V0ZTogJ3Byb2R1Y3QnLFxuICAgICAgICAgICAgcGFyYW1zOiBwcm9kdWN0LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiJdfQ==