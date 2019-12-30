/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, } from '@angular/core';
import { OccConfig, VariantQualifier, } from '@spartacus/core';
var VariantStyleIconsComponent = /** @class */ (function () {
    function VariantStyleIconsComponent(config) {
        this.config = config;
        this.variantNames = {};
    }
    /**
     * @return {?}
     */
    VariantStyleIconsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.variants.forEach((/**
         * @param {?} variant
         * @return {?}
         */
        function (variant) {
            _this.variantNames[variant.code] = _this.getVariantName(variant.variantOptionQualifiers);
        }));
    };
    /**
     * @param {?} variantOptionQualifiers
     * @return {?}
     */
    VariantStyleIconsComponent.prototype.getVariantThumbnailUrl = /**
     * @param {?} variantOptionQualifiers
     * @return {?}
     */
    function (variantOptionQualifiers) {
        /** @type {?} */
        var thumbnail = variantOptionQualifiers.find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.qualifier === VariantQualifier.THUMBNAIL; }));
        return thumbnail
            ? "" + this.config.backend.occ.baseUrl + thumbnail.image.url
            : '';
    };
    /**
     * @private
     * @param {?} variantOptionQualifiers
     * @return {?}
     */
    VariantStyleIconsComponent.prototype.getVariantName = /**
     * @private
     * @param {?} variantOptionQualifiers
     * @return {?}
     */
    function (variantOptionQualifiers) {
        /** @type {?} */
        var rollupProperty = variantOptionQualifiers.find((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.qualifier === VariantQualifier.ROLLUP_PROPERTY; }));
        /** @type {?} */
        var property = rollupProperty
            ? variantOptionQualifiers.find((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.qualifier === rollupProperty.value; }))
            : null;
        return property ? property.value : '';
    };
    VariantStyleIconsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-style-icons',
                    template: "<ul class=\"variant-list\">\n  <li *ngFor=\"let v of variants\">\n    <img\n      [attr.src]=\"getVariantThumbnailUrl(v.variantOptionQualifiers)\"\n      [attr.title]=\"variantNames[v.code]\"\n      [attr.alt]=\"variantNames[v.code]\"\n    />\n  </li>\n</ul>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["ul{padding:0}ul li{display:inline}ul li img{width:50px}"]
                }] }
    ];
    /** @nocollapse */
    VariantStyleIconsComponent.ctorParameters = function () { return [
        { type: OccConfig }
    ]; };
    VariantStyleIconsComponent.propDecorators = {
        variants: [{ type: Input }]
    };
    return VariantStyleIconsComponent;
}());
export { VariantStyleIconsComponent };
if (false) {
    /** @type {?} */
    VariantStyleIconsComponent.prototype.variants;
    /** @type {?} */
    VariantStyleIconsComponent.prototype.variantNames;
    /**
     * @type {?}
     * @private
     */
    VariantStyleIconsComponent.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUtaWNvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LXZhcmlhbnQtc2VsZWN0b3Ivc3R5bGUtaWNvbnMvc3R5bGUtaWNvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTCx1QkFBdUIsR0FDeEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLFNBQVMsRUFHVCxnQkFBZ0IsR0FDakIsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QjtJQU9FLG9DQUFvQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBS3JDLGlCQUFZLEdBQThCLEVBQUUsQ0FBQztJQUxMLENBQUM7Ozs7SUFPekMsNkNBQVE7OztJQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLE9BQU87WUFDM0IsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FDbkQsT0FBTyxDQUFDLHVCQUF1QixDQUNoQyxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELDJEQUFzQjs7OztJQUF0QixVQUNFLHVCQUFpRDs7WUFFM0MsU0FBUyxHQUFHLHVCQUF1QixDQUFDLElBQUk7Ozs7UUFDNUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsU0FBUyxLQUFLLGdCQUFnQixDQUFDLFNBQVMsRUFBN0MsQ0FBNkMsRUFDdEQ7UUFDRCxPQUFPLFNBQVM7WUFDZCxDQUFDLENBQUMsS0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBSztZQUM1RCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7Ozs7O0lBRU8sbURBQWM7Ozs7O0lBQXRCLFVBQ0UsdUJBQWlEOztZQUUzQyxjQUFjLEdBQUcsdUJBQXVCLENBQUMsSUFBSTs7OztRQUNqRCxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxTQUFTLEtBQUssZ0JBQWdCLENBQUMsZUFBZSxFQUFuRCxDQUFtRCxFQUM1RDs7WUFDSyxRQUFRLEdBQUcsY0FBYztZQUM3QixDQUFDLENBQUMsdUJBQXVCLENBQUMsSUFBSTs7OztZQUMxQixVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxTQUFTLEtBQUssY0FBYyxDQUFDLEtBQUssRUFBdkMsQ0FBdUMsRUFDaEQ7WUFDSCxDQUFDLENBQUMsSUFBSTtRQUNSLE9BQU8sUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEMsQ0FBQzs7Z0JBN0NGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixnUkFBMkM7b0JBRTNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7Z0JBWEMsU0FBUzs7OzJCQWVSLEtBQUs7O0lBcUNSLGlDQUFDO0NBQUEsQUE5Q0QsSUE4Q0M7U0F4Q1ksMEJBQTBCOzs7SUFHckMsOENBQzBCOztJQUUxQixrREFBNkM7Ozs7O0lBTGpDLDRDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBPY2NDb25maWcsXG4gIFZhcmlhbnRPcHRpb24sXG4gIFZhcmlhbnRPcHRpb25RdWFsaWZpZXIsXG4gIFZhcmlhbnRRdWFsaWZpZXIsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN0eWxlLWljb25zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N0eWxlLWljb25zLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc3R5bGUtaWNvbnMuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFZhcmlhbnRTdHlsZUljb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWc6IE9jY0NvbmZpZykge31cblxuICBASW5wdXQoKVxuICB2YXJpYW50czogVmFyaWFudE9wdGlvbltdO1xuXG4gIHZhcmlhbnROYW1lczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudmFyaWFudHMuZm9yRWFjaCh2YXJpYW50ID0+IHtcbiAgICAgIHRoaXMudmFyaWFudE5hbWVzW3ZhcmlhbnQuY29kZV0gPSB0aGlzLmdldFZhcmlhbnROYW1lKFxuICAgICAgICB2YXJpYW50LnZhcmlhbnRPcHRpb25RdWFsaWZpZXJzXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VmFyaWFudFRodW1ibmFpbFVybChcbiAgICB2YXJpYW50T3B0aW9uUXVhbGlmaWVyczogVmFyaWFudE9wdGlvblF1YWxpZmllcltdXG4gICk6IHN0cmluZyB7XG4gICAgY29uc3QgdGh1bWJuYWlsID0gdmFyaWFudE9wdGlvblF1YWxpZmllcnMuZmluZChcbiAgICAgIGl0ZW0gPT4gaXRlbS5xdWFsaWZpZXIgPT09IFZhcmlhbnRRdWFsaWZpZXIuVEhVTUJOQUlMXG4gICAgKTtcbiAgICByZXR1cm4gdGh1bWJuYWlsXG4gICAgICA/IGAke3RoaXMuY29uZmlnLmJhY2tlbmQub2NjLmJhc2VVcmx9JHt0aHVtYm5haWwuaW1hZ2UudXJsfWBcbiAgICAgIDogJyc7XG4gIH1cblxuICBwcml2YXRlIGdldFZhcmlhbnROYW1lKFxuICAgIHZhcmlhbnRPcHRpb25RdWFsaWZpZXJzOiBWYXJpYW50T3B0aW9uUXVhbGlmaWVyW11cbiAgKTogc3RyaW5nIHtcbiAgICBjb25zdCByb2xsdXBQcm9wZXJ0eSA9IHZhcmlhbnRPcHRpb25RdWFsaWZpZXJzLmZpbmQoXG4gICAgICBpdGVtID0+IGl0ZW0ucXVhbGlmaWVyID09PSBWYXJpYW50UXVhbGlmaWVyLlJPTExVUF9QUk9QRVJUWVxuICAgICk7XG4gICAgY29uc3QgcHJvcGVydHkgPSByb2xsdXBQcm9wZXJ0eVxuICAgICAgPyB2YXJpYW50T3B0aW9uUXVhbGlmaWVycy5maW5kKFxuICAgICAgICAgIGl0ZW0gPT4gaXRlbS5xdWFsaWZpZXIgPT09IHJvbGx1cFByb3BlcnR5LnZhbHVlXG4gICAgICAgIClcbiAgICAgIDogbnVsbDtcbiAgICByZXR1cm4gcHJvcGVydHkgPyBwcm9wZXJ0eS52YWx1ZSA6ICcnO1xuICB9XG59XG4iXX0=