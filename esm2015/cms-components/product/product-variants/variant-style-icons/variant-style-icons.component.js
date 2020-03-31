import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy, } from '@angular/core';
import { OccConfig, VariantOption, VariantOptionQualifier, VariantQualifier, } from '@spartacus/core';
let VariantStyleIconsComponent = class VariantStyleIconsComponent {
    constructor(config) {
        this.config = config;
        this.variantNames = {};
    }
    ngOnInit() {
        this.variants.forEach((variant) => {
            this.variantNames[variant.code] = this.getVariantName(variant.variantOptionQualifiers);
        });
    }
    getVariantThumbnailUrl(variantOptionQualifiers) {
        const thumbnail = variantOptionQualifiers.find((item) => item.qualifier === VariantQualifier.THUMBNAIL);
        return thumbnail
            ? `${this.config.backend.occ.baseUrl}${thumbnail.image.url}`
            : '';
    }
    getVariantName(variantOptionQualifiers) {
        const rollupProperty = variantOptionQualifiers.find((item) => item.qualifier === VariantQualifier.ROLLUP_PROPERTY);
        const property = rollupProperty
            ? variantOptionQualifiers.find((item) => item.qualifier === rollupProperty.value)
            : null;
        return property ? property.value : '';
    }
};
VariantStyleIconsComponent.ctorParameters = () => [
    { type: OccConfig }
];
__decorate([
    Input()
], VariantStyleIconsComponent.prototype, "variants", void 0);
VariantStyleIconsComponent = __decorate([
    Component({
        selector: 'cx-variant-style-icons',
        template: "<ul class=\"variant-list\">\n  <li *ngFor=\"let v of variants\">\n    <img\n      [attr.src]=\"getVariantThumbnailUrl(v.variantOptionQualifiers)\"\n      [attr.title]=\"variantNames[v.code]\"\n      [attr.alt]=\"variantNames[v.code]\"\n    />\n  </li>\n</ul>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: ["ul{padding:0;white-space:nowrap;overflow:hidden}ul li{display:inline}ul li img{width:50px}"]
    })
], VariantStyleIconsComponent);
export { VariantStyleIconsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudC1zdHlsZS1pY29ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtdmFyaWFudHMvdmFyaWFudC1zdHlsZS1pY29ucy92YXJpYW50LXN0eWxlLWljb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRUwsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxTQUFTLEVBQ1QsYUFBYSxFQUNiLHNCQUFzQixFQUN0QixnQkFBZ0IsR0FDakIsTUFBTSxpQkFBaUIsQ0FBQztBQVF6QixJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQUNyQyxZQUFvQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBS3JDLGlCQUFZLEdBQThCLEVBQUUsQ0FBQztJQUxMLENBQUM7SUFPekMsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FDbkQsT0FBTyxDQUFDLHVCQUF1QixDQUNoQyxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsc0JBQXNCLENBQ3BCLHVCQUFpRDtRQUVqRCxNQUFNLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQyxJQUFJLENBQzVDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLGdCQUFnQixDQUFDLFNBQVMsQ0FDeEQsQ0FBQztRQUNGLE9BQU8sU0FBUztZQUNkLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDNUQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNULENBQUM7SUFFTyxjQUFjLENBQ3BCLHVCQUFpRDtRQUVqRCxNQUFNLGNBQWMsR0FBRyx1QkFBdUIsQ0FBQyxJQUFJLENBQ2pELENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLGdCQUFnQixDQUFDLGVBQWUsQ0FDOUQsQ0FBQztRQUNGLE1BQU0sUUFBUSxHQUFHLGNBQWM7WUFDN0IsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FDMUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssY0FBYyxDQUFDLEtBQUssQ0FDbEQ7WUFDSCxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ1QsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN4QyxDQUFDO0NBQ0YsQ0FBQTs7WUF2QzZCLFNBQVM7O0FBR3JDO0lBREMsS0FBSyxFQUFFOzREQUNrQjtBQUpmLDBCQUEwQjtJQU50QyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsd0JBQXdCO1FBQ2xDLGdSQUFtRDtRQUVuRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7S0FDaEQsQ0FBQztHQUNXLDBCQUEwQixDQXdDdEM7U0F4Q1ksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIE9jY0NvbmZpZyxcbiAgVmFyaWFudE9wdGlvbixcbiAgVmFyaWFudE9wdGlvblF1YWxpZmllcixcbiAgVmFyaWFudFF1YWxpZmllcixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtdmFyaWFudC1zdHlsZS1pY29ucycsXG4gIHRlbXBsYXRlVXJsOiAnLi92YXJpYW50LXN0eWxlLWljb25zLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdmFyaWFudC1zdHlsZS1pY29ucy5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVmFyaWFudFN0eWxlSWNvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogT2NjQ29uZmlnKSB7fVxuXG4gIEBJbnB1dCgpXG4gIHZhcmlhbnRzOiBWYXJpYW50T3B0aW9uW107XG5cbiAgdmFyaWFudE5hbWVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy52YXJpYW50cy5mb3JFYWNoKCh2YXJpYW50KSA9PiB7XG4gICAgICB0aGlzLnZhcmlhbnROYW1lc1t2YXJpYW50LmNvZGVdID0gdGhpcy5nZXRWYXJpYW50TmFtZShcbiAgICAgICAgdmFyaWFudC52YXJpYW50T3B0aW9uUXVhbGlmaWVyc1xuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFZhcmlhbnRUaHVtYm5haWxVcmwoXG4gICAgdmFyaWFudE9wdGlvblF1YWxpZmllcnM6IFZhcmlhbnRPcHRpb25RdWFsaWZpZXJbXVxuICApOiBzdHJpbmcge1xuICAgIGNvbnN0IHRodW1ibmFpbCA9IHZhcmlhbnRPcHRpb25RdWFsaWZpZXJzLmZpbmQoXG4gICAgICAoaXRlbSkgPT4gaXRlbS5xdWFsaWZpZXIgPT09IFZhcmlhbnRRdWFsaWZpZXIuVEhVTUJOQUlMXG4gICAgKTtcbiAgICByZXR1cm4gdGh1bWJuYWlsXG4gICAgICA/IGAke3RoaXMuY29uZmlnLmJhY2tlbmQub2NjLmJhc2VVcmx9JHt0aHVtYm5haWwuaW1hZ2UudXJsfWBcbiAgICAgIDogJyc7XG4gIH1cblxuICBwcml2YXRlIGdldFZhcmlhbnROYW1lKFxuICAgIHZhcmlhbnRPcHRpb25RdWFsaWZpZXJzOiBWYXJpYW50T3B0aW9uUXVhbGlmaWVyW11cbiAgKTogc3RyaW5nIHtcbiAgICBjb25zdCByb2xsdXBQcm9wZXJ0eSA9IHZhcmlhbnRPcHRpb25RdWFsaWZpZXJzLmZpbmQoXG4gICAgICAoaXRlbSkgPT4gaXRlbS5xdWFsaWZpZXIgPT09IFZhcmlhbnRRdWFsaWZpZXIuUk9MTFVQX1BST1BFUlRZXG4gICAgKTtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IHJvbGx1cFByb3BlcnR5XG4gICAgICA/IHZhcmlhbnRPcHRpb25RdWFsaWZpZXJzLmZpbmQoXG4gICAgICAgICAgKGl0ZW0pID0+IGl0ZW0ucXVhbGlmaWVyID09PSByb2xsdXBQcm9wZXJ0eS52YWx1ZVxuICAgICAgICApXG4gICAgICA6IG51bGw7XG4gICAgcmV0dXJuIHByb3BlcnR5ID8gcHJvcGVydHkudmFsdWUgOiAnJztcbiAgfVxufVxuIl19