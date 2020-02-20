import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy, } from '@angular/core';
import { OccConfig, VariantOption, VariantOptionQualifier, VariantQualifier, } from '@spartacus/core';
let VariantStyleIconsComponent = class VariantStyleIconsComponent {
    constructor(config) {
        this.config = config;
        this.variantNames = {};
    }
    ngOnInit() {
        this.variants.forEach(variant => {
            this.variantNames[variant.code] = this.getVariantName(variant.variantOptionQualifiers);
        });
    }
    getVariantThumbnailUrl(variantOptionQualifiers) {
        const thumbnail = variantOptionQualifiers.find(item => item.qualifier === VariantQualifier.THUMBNAIL);
        return thumbnail
            ? `${this.config.backend.occ.baseUrl}${thumbnail.image.url}`
            : '';
    }
    getVariantName(variantOptionQualifiers) {
        const rollupProperty = variantOptionQualifiers.find(item => item.qualifier === VariantQualifier.ROLLUP_PROPERTY);
        const property = rollupProperty
            ? variantOptionQualifiers.find(item => item.qualifier === rollupProperty.value)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudC1zdHlsZS1pY29ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtdmFyaWFudHMvdmFyaWFudC1zdHlsZS1pY29ucy92YXJpYW50LXN0eWxlLWljb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRUwsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxTQUFTLEVBQ1QsYUFBYSxFQUNiLHNCQUFzQixFQUN0QixnQkFBZ0IsR0FDakIsTUFBTSxpQkFBaUIsQ0FBQztBQVF6QixJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQUNyQyxZQUFvQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBS3JDLGlCQUFZLEdBQThCLEVBQUUsQ0FBQztJQUxMLENBQUM7SUFPekMsUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQ25ELE9BQU8sQ0FBQyx1QkFBdUIsQ0FDaEMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNCQUFzQixDQUNwQix1QkFBaUQ7UUFFakQsTUFBTSxTQUFTLEdBQUcsdUJBQXVCLENBQUMsSUFBSSxDQUM1QyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEtBQUssZ0JBQWdCLENBQUMsU0FBUyxDQUN0RCxDQUFDO1FBQ0YsT0FBTyxTQUFTO1lBQ2QsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUM1RCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1QsQ0FBQztJQUVPLGNBQWMsQ0FDcEIsdUJBQWlEO1FBRWpELE1BQU0sY0FBYyxHQUFHLHVCQUF1QixDQUFDLElBQUksQ0FDakQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLGdCQUFnQixDQUFDLGVBQWUsQ0FDNUQsQ0FBQztRQUNGLE1BQU0sUUFBUSxHQUFHLGNBQWM7WUFDN0IsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLGNBQWMsQ0FBQyxLQUFLLENBQ2hEO1lBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNULE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEMsQ0FBQztDQUNGLENBQUE7O1lBdkM2QixTQUFTOztBQUdyQztJQURDLEtBQUssRUFBRTs0REFDa0I7QUFKZiwwQkFBMEI7SUFOdEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHdCQUF3QjtRQUNsQyxnUkFBbUQ7UUFFbkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O0tBQ2hELENBQUM7R0FDVywwQkFBMEIsQ0F3Q3RDO1NBeENZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBPY2NDb25maWcsXG4gIFZhcmlhbnRPcHRpb24sXG4gIFZhcmlhbnRPcHRpb25RdWFsaWZpZXIsXG4gIFZhcmlhbnRRdWFsaWZpZXIsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXZhcmlhbnQtc3R5bGUtaWNvbnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vdmFyaWFudC1zdHlsZS1pY29ucy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3ZhcmlhbnQtc3R5bGUtaWNvbnMuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFZhcmlhbnRTdHlsZUljb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IE9jY0NvbmZpZykge31cblxuICBASW5wdXQoKVxuICB2YXJpYW50czogVmFyaWFudE9wdGlvbltdO1xuXG4gIHZhcmlhbnROYW1lczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudmFyaWFudHMuZm9yRWFjaCh2YXJpYW50ID0+IHtcbiAgICAgIHRoaXMudmFyaWFudE5hbWVzW3ZhcmlhbnQuY29kZV0gPSB0aGlzLmdldFZhcmlhbnROYW1lKFxuICAgICAgICB2YXJpYW50LnZhcmlhbnRPcHRpb25RdWFsaWZpZXJzXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VmFyaWFudFRodW1ibmFpbFVybChcbiAgICB2YXJpYW50T3B0aW9uUXVhbGlmaWVyczogVmFyaWFudE9wdGlvblF1YWxpZmllcltdXG4gICk6IHN0cmluZyB7XG4gICAgY29uc3QgdGh1bWJuYWlsID0gdmFyaWFudE9wdGlvblF1YWxpZmllcnMuZmluZChcbiAgICAgIGl0ZW0gPT4gaXRlbS5xdWFsaWZpZXIgPT09IFZhcmlhbnRRdWFsaWZpZXIuVEhVTUJOQUlMXG4gICAgKTtcbiAgICByZXR1cm4gdGh1bWJuYWlsXG4gICAgICA/IGAke3RoaXMuY29uZmlnLmJhY2tlbmQub2NjLmJhc2VVcmx9JHt0aHVtYm5haWwuaW1hZ2UudXJsfWBcbiAgICAgIDogJyc7XG4gIH1cblxuICBwcml2YXRlIGdldFZhcmlhbnROYW1lKFxuICAgIHZhcmlhbnRPcHRpb25RdWFsaWZpZXJzOiBWYXJpYW50T3B0aW9uUXVhbGlmaWVyW11cbiAgKTogc3RyaW5nIHtcbiAgICBjb25zdCByb2xsdXBQcm9wZXJ0eSA9IHZhcmlhbnRPcHRpb25RdWFsaWZpZXJzLmZpbmQoXG4gICAgICBpdGVtID0+IGl0ZW0ucXVhbGlmaWVyID09PSBWYXJpYW50UXVhbGlmaWVyLlJPTExVUF9QUk9QRVJUWVxuICAgICk7XG4gICAgY29uc3QgcHJvcGVydHkgPSByb2xsdXBQcm9wZXJ0eVxuICAgICAgPyB2YXJpYW50T3B0aW9uUXVhbGlmaWVycy5maW5kKFxuICAgICAgICAgIGl0ZW0gPT4gaXRlbS5xdWFsaWZpZXIgPT09IHJvbGx1cFByb3BlcnR5LnZhbHVlXG4gICAgICAgIClcbiAgICAgIDogbnVsbDtcbiAgICByZXR1cm4gcHJvcGVydHkgPyBwcm9wZXJ0eS52YWx1ZSA6ICcnO1xuICB9XG59XG4iXX0=