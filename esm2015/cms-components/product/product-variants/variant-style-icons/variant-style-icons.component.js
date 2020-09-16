import { Component, Input, ChangeDetectionStrategy, } from '@angular/core';
import { OccConfig, VariantQualifier, } from '@spartacus/core';
export class VariantStyleIconsComponent {
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
}
VariantStyleIconsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-variant-style-icons',
                template: "<ul class=\"variant-list\">\n  <li *ngFor=\"let v of variants\">\n    <img\n      [attr.src]=\"getVariantThumbnailUrl(v.variantOptionQualifiers)\"\n      [attr.title]=\"variantNames[v.code]\"\n      [attr.alt]=\"variantNames[v.code]\"\n    />\n  </li>\n</ul>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["ul{overflow:hidden;padding:0;white-space:nowrap}ul li{display:inline}ul li img{width:50px}"]
            },] }
];
VariantStyleIconsComponent.ctorParameters = () => [
    { type: OccConfig }
];
VariantStyleIconsComponent.propDecorators = {
    variants: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudC1zdHlsZS1pY29ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9jbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtdmFyaWFudHMvdmFyaWFudC1zdHlsZS1pY29ucy92YXJpYW50LXN0eWxlLWljb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTCx1QkFBdUIsR0FDeEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLFNBQVMsRUFHVCxnQkFBZ0IsR0FDakIsTUFBTSxpQkFBaUIsQ0FBQztBQVF6QixNQUFNLE9BQU8sMEJBQTBCO0lBQ3JDLFlBQW9CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFLckMsaUJBQVksR0FBOEIsRUFBRSxDQUFDO0lBTEwsQ0FBQztJQU96QyxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUNuRCxPQUFPLENBQUMsdUJBQXVCLENBQ2hDLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxzQkFBc0IsQ0FDcEIsdUJBQWlEO1FBRWpELE1BQU0sU0FBUyxHQUFHLHVCQUF1QixDQUFDLElBQUksQ0FDNUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssZ0JBQWdCLENBQUMsU0FBUyxDQUN4RCxDQUFDO1FBQ0YsT0FBTyxTQUFTO1lBQ2QsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUM1RCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1QsQ0FBQztJQUVPLGNBQWMsQ0FDcEIsdUJBQWlEO1FBRWpELE1BQU0sY0FBYyxHQUFHLHVCQUF1QixDQUFDLElBQUksQ0FDakQsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssZ0JBQWdCLENBQUMsZUFBZSxDQUM5RCxDQUFDO1FBQ0YsTUFBTSxRQUFRLEdBQUcsY0FBYztZQUM3QixDQUFDLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUMxQixDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxjQUFjLENBQUMsS0FBSyxDQUNsRDtZQUNILENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDVCxPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLENBQUM7OztZQTdDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsZ1JBQW1EO2dCQUVuRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7OztZQVhDLFNBQVM7Ozt1QkFlUixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIE9jY0NvbmZpZyxcbiAgVmFyaWFudE9wdGlvbixcbiAgVmFyaWFudE9wdGlvblF1YWxpZmllcixcbiAgVmFyaWFudFF1YWxpZmllcixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtdmFyaWFudC1zdHlsZS1pY29ucycsXG4gIHRlbXBsYXRlVXJsOiAnLi92YXJpYW50LXN0eWxlLWljb25zLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdmFyaWFudC1zdHlsZS1pY29ucy5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVmFyaWFudFN0eWxlSWNvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogT2NjQ29uZmlnKSB7fVxuXG4gIEBJbnB1dCgpXG4gIHZhcmlhbnRzOiBWYXJpYW50T3B0aW9uW107XG5cbiAgdmFyaWFudE5hbWVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy52YXJpYW50cy5mb3JFYWNoKCh2YXJpYW50KSA9PiB7XG4gICAgICB0aGlzLnZhcmlhbnROYW1lc1t2YXJpYW50LmNvZGVdID0gdGhpcy5nZXRWYXJpYW50TmFtZShcbiAgICAgICAgdmFyaWFudC52YXJpYW50T3B0aW9uUXVhbGlmaWVyc1xuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFZhcmlhbnRUaHVtYm5haWxVcmwoXG4gICAgdmFyaWFudE9wdGlvblF1YWxpZmllcnM6IFZhcmlhbnRPcHRpb25RdWFsaWZpZXJbXVxuICApOiBzdHJpbmcge1xuICAgIGNvbnN0IHRodW1ibmFpbCA9IHZhcmlhbnRPcHRpb25RdWFsaWZpZXJzLmZpbmQoXG4gICAgICAoaXRlbSkgPT4gaXRlbS5xdWFsaWZpZXIgPT09IFZhcmlhbnRRdWFsaWZpZXIuVEhVTUJOQUlMXG4gICAgKTtcbiAgICByZXR1cm4gdGh1bWJuYWlsXG4gICAgICA/IGAke3RoaXMuY29uZmlnLmJhY2tlbmQub2NjLmJhc2VVcmx9JHt0aHVtYm5haWwuaW1hZ2UudXJsfWBcbiAgICAgIDogJyc7XG4gIH1cblxuICBwcml2YXRlIGdldFZhcmlhbnROYW1lKFxuICAgIHZhcmlhbnRPcHRpb25RdWFsaWZpZXJzOiBWYXJpYW50T3B0aW9uUXVhbGlmaWVyW11cbiAgKTogc3RyaW5nIHtcbiAgICBjb25zdCByb2xsdXBQcm9wZXJ0eSA9IHZhcmlhbnRPcHRpb25RdWFsaWZpZXJzLmZpbmQoXG4gICAgICAoaXRlbSkgPT4gaXRlbS5xdWFsaWZpZXIgPT09IFZhcmlhbnRRdWFsaWZpZXIuUk9MTFVQX1BST1BFUlRZXG4gICAgKTtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IHJvbGx1cFByb3BlcnR5XG4gICAgICA/IHZhcmlhbnRPcHRpb25RdWFsaWZpZXJzLmZpbmQoXG4gICAgICAgICAgKGl0ZW0pID0+IGl0ZW0ucXVhbGlmaWVyID09PSByb2xsdXBQcm9wZXJ0eS52YWx1ZVxuICAgICAgICApXG4gICAgICA6IG51bGw7XG4gICAgcmV0dXJuIHByb3BlcnR5ID8gcHJvcGVydHkudmFsdWUgOiAnJztcbiAgfVxufVxuIl19