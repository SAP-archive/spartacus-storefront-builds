import { __decorate } from "tslib";
import { Component, Input, ChangeDetectionStrategy, } from '@angular/core';
import { OccConfig, VariantOption, VariantOptionQualifier, VariantQualifier, } from '@spartacus/core';
var VariantStyleIconsComponent = /** @class */ (function () {
    function VariantStyleIconsComponent(config) {
        this.config = config;
        this.variantNames = {};
    }
    VariantStyleIconsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.variants.forEach(function (variant) {
            _this.variantNames[variant.code] = _this.getVariantName(variant.variantOptionQualifiers);
        });
    };
    VariantStyleIconsComponent.prototype.getVariantThumbnailUrl = function (variantOptionQualifiers) {
        var thumbnail = variantOptionQualifiers.find(function (item) { return item.qualifier === VariantQualifier.THUMBNAIL; });
        return thumbnail
            ? "" + this.config.backend.occ.baseUrl + thumbnail.image.url
            : '';
    };
    VariantStyleIconsComponent.prototype.getVariantName = function (variantOptionQualifiers) {
        var rollupProperty = variantOptionQualifiers.find(function (item) { return item.qualifier === VariantQualifier.ROLLUP_PROPERTY; });
        var property = rollupProperty
            ? variantOptionQualifiers.find(function (item) { return item.qualifier === rollupProperty.value; })
            : null;
        return property ? property.value : '';
    };
    VariantStyleIconsComponent.ctorParameters = function () { return [
        { type: OccConfig }
    ]; };
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
    return VariantStyleIconsComponent;
}());
export { VariantStyleIconsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudC1zdHlsZS1pY29ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtdmFyaWFudHMvdmFyaWFudC1zdHlsZS1pY29ucy92YXJpYW50LXN0eWxlLWljb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRUwsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxTQUFTLEVBQ1QsYUFBYSxFQUNiLHNCQUFzQixFQUN0QixnQkFBZ0IsR0FDakIsTUFBTSxpQkFBaUIsQ0FBQztBQVF6QjtJQUNFLG9DQUFvQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBS3JDLGlCQUFZLEdBQThCLEVBQUUsQ0FBQztJQUxMLENBQUM7SUFPekMsNkNBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO1lBQzNCLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQ25ELE9BQU8sQ0FBQyx1QkFBdUIsQ0FDaEMsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDJEQUFzQixHQUF0QixVQUNFLHVCQUFpRDtRQUVqRCxJQUFNLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQyxJQUFJLENBQzVDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLFNBQVMsS0FBSyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQTdDLENBQTZDLENBQ3RELENBQUM7UUFDRixPQUFPLFNBQVM7WUFDZCxDQUFDLENBQUMsS0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBSztZQUM1RCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1QsQ0FBQztJQUVPLG1EQUFjLEdBQXRCLFVBQ0UsdUJBQWlEO1FBRWpELElBQU0sY0FBYyxHQUFHLHVCQUF1QixDQUFDLElBQUksQ0FDakQsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsU0FBUyxLQUFLLGdCQUFnQixDQUFDLGVBQWUsRUFBbkQsQ0FBbUQsQ0FDNUQsQ0FBQztRQUNGLElBQU0sUUFBUSxHQUFHLGNBQWM7WUFDN0IsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FDMUIsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsU0FBUyxLQUFLLGNBQWMsQ0FBQyxLQUFLLEVBQXZDLENBQXVDLENBQ2hEO1lBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNULE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEMsQ0FBQzs7Z0JBdEMyQixTQUFTOztJQUdyQztRQURDLEtBQUssRUFBRTtnRUFDa0I7SUFKZiwwQkFBMEI7UUFOdEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHdCQUF3QjtZQUNsQyxnUkFBbUQ7WUFFbkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O1NBQ2hELENBQUM7T0FDVywwQkFBMEIsQ0F3Q3RDO0lBQUQsaUNBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQXhDWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgT2NjQ29uZmlnLFxuICBWYXJpYW50T3B0aW9uLFxuICBWYXJpYW50T3B0aW9uUXVhbGlmaWVyLFxuICBWYXJpYW50UXVhbGlmaWVyLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC12YXJpYW50LXN0eWxlLWljb25zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ZhcmlhbnQtc3R5bGUtaWNvbnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi92YXJpYW50LXN0eWxlLWljb25zLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBWYXJpYW50U3R5bGVJY29uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnOiBPY2NDb25maWcpIHt9XG5cbiAgQElucHV0KClcbiAgdmFyaWFudHM6IFZhcmlhbnRPcHRpb25bXTtcblxuICB2YXJpYW50TmFtZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnZhcmlhbnRzLmZvckVhY2godmFyaWFudCA9PiB7XG4gICAgICB0aGlzLnZhcmlhbnROYW1lc1t2YXJpYW50LmNvZGVdID0gdGhpcy5nZXRWYXJpYW50TmFtZShcbiAgICAgICAgdmFyaWFudC52YXJpYW50T3B0aW9uUXVhbGlmaWVyc1xuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFZhcmlhbnRUaHVtYm5haWxVcmwoXG4gICAgdmFyaWFudE9wdGlvblF1YWxpZmllcnM6IFZhcmlhbnRPcHRpb25RdWFsaWZpZXJbXVxuICApOiBzdHJpbmcge1xuICAgIGNvbnN0IHRodW1ibmFpbCA9IHZhcmlhbnRPcHRpb25RdWFsaWZpZXJzLmZpbmQoXG4gICAgICBpdGVtID0+IGl0ZW0ucXVhbGlmaWVyID09PSBWYXJpYW50UXVhbGlmaWVyLlRIVU1CTkFJTFxuICAgICk7XG4gICAgcmV0dXJuIHRodW1ibmFpbFxuICAgICAgPyBgJHt0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsfSR7dGh1bWJuYWlsLmltYWdlLnVybH1gXG4gICAgICA6ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRWYXJpYW50TmFtZShcbiAgICB2YXJpYW50T3B0aW9uUXVhbGlmaWVyczogVmFyaWFudE9wdGlvblF1YWxpZmllcltdXG4gICk6IHN0cmluZyB7XG4gICAgY29uc3Qgcm9sbHVwUHJvcGVydHkgPSB2YXJpYW50T3B0aW9uUXVhbGlmaWVycy5maW5kKFxuICAgICAgaXRlbSA9PiBpdGVtLnF1YWxpZmllciA9PT0gVmFyaWFudFF1YWxpZmllci5ST0xMVVBfUFJPUEVSVFlcbiAgICApO1xuICAgIGNvbnN0IHByb3BlcnR5ID0gcm9sbHVwUHJvcGVydHlcbiAgICAgID8gdmFyaWFudE9wdGlvblF1YWxpZmllcnMuZmluZChcbiAgICAgICAgICBpdGVtID0+IGl0ZW0ucXVhbGlmaWVyID09PSByb2xsdXBQcm9wZXJ0eS52YWx1ZVxuICAgICAgICApXG4gICAgICA6IG51bGw7XG4gICAgcmV0dXJuIHByb3BlcnR5ID8gcHJvcGVydHkudmFsdWUgOiAnJztcbiAgfVxufVxuIl19