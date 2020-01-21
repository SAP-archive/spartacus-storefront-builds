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
                    selector: 'cx-variant-style-icons',
                    template: "<ul class=\"variant-list\">\n  <li *ngFor=\"let v of variants\">\n    <img\n      [attr.src]=\"getVariantThumbnailUrl(v.variantOptionQualifiers)\"\n      [attr.title]=\"variantNames[v.code]\"\n      [attr.alt]=\"variantNames[v.code]\"\n    />\n  </li>\n</ul>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["ul{padding:0;white-space:nowrap;overflow:hidden}ul li{display:inline}ul li img{width:50px}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudC1zdHlsZS1pY29ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtdmFyaWFudHMvdmFyaWFudC1zdHlsZS1pY29ucy92YXJpYW50LXN0eWxlLWljb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRUwsdUJBQXVCLEdBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxTQUFTLEVBR1QsZ0JBQWdCLEdBQ2pCLE1BQU0saUJBQWlCLENBQUM7QUFFekI7SUFPRSxvQ0FBb0IsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUtyQyxpQkFBWSxHQUE4QixFQUFFLENBQUM7SUFMTCxDQUFDOzs7O0lBT3pDLDZDQUFROzs7SUFBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxPQUFPO1lBQzNCLEtBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUksQ0FBQyxjQUFjLENBQ25ELE9BQU8sQ0FBQyx1QkFBdUIsQ0FDaEMsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCwyREFBc0I7Ozs7SUFBdEIsVUFDRSx1QkFBaUQ7O1lBRTNDLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQyxJQUFJOzs7O1FBQzVDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLFNBQVMsS0FBSyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQTdDLENBQTZDLEVBQ3REO1FBQ0QsT0FBTyxTQUFTO1lBQ2QsQ0FBQyxDQUFDLEtBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUs7WUFDNUQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNULENBQUM7Ozs7OztJQUVPLG1EQUFjOzs7OztJQUF0QixVQUNFLHVCQUFpRDs7WUFFM0MsY0FBYyxHQUFHLHVCQUF1QixDQUFDLElBQUk7Ozs7UUFDakQsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsU0FBUyxLQUFLLGdCQUFnQixDQUFDLGVBQWUsRUFBbkQsQ0FBbUQsRUFDNUQ7O1lBQ0ssUUFBUSxHQUFHLGNBQWM7WUFDN0IsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLElBQUk7Ozs7WUFDMUIsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsU0FBUyxLQUFLLGNBQWMsQ0FBQyxLQUFLLEVBQXZDLENBQXVDLEVBQ2hEO1lBQ0gsQ0FBQyxDQUFDLElBQUk7UUFDUixPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLENBQUM7O2dCQTdDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMsZ1JBQW1EO29CQUVuRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQVhDLFNBQVM7OzsyQkFlUixLQUFLOztJQXFDUixpQ0FBQztDQUFBLEFBOUNELElBOENDO1NBeENZLDBCQUEwQjs7O0lBR3JDLDhDQUMwQjs7SUFFMUIsa0RBQTZDOzs7OztJQUxqQyw0Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgT2NjQ29uZmlnLFxuICBWYXJpYW50T3B0aW9uLFxuICBWYXJpYW50T3B0aW9uUXVhbGlmaWVyLFxuICBWYXJpYW50UXVhbGlmaWVyLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC12YXJpYW50LXN0eWxlLWljb25zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ZhcmlhbnQtc3R5bGUtaWNvbnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi92YXJpYW50LXN0eWxlLWljb25zLmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBWYXJpYW50U3R5bGVJY29uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlnOiBPY2NDb25maWcpIHt9XG5cbiAgQElucHV0KClcbiAgdmFyaWFudHM6IFZhcmlhbnRPcHRpb25bXTtcblxuICB2YXJpYW50TmFtZXM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnZhcmlhbnRzLmZvckVhY2godmFyaWFudCA9PiB7XG4gICAgICB0aGlzLnZhcmlhbnROYW1lc1t2YXJpYW50LmNvZGVdID0gdGhpcy5nZXRWYXJpYW50TmFtZShcbiAgICAgICAgdmFyaWFudC52YXJpYW50T3B0aW9uUXVhbGlmaWVyc1xuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFZhcmlhbnRUaHVtYm5haWxVcmwoXG4gICAgdmFyaWFudE9wdGlvblF1YWxpZmllcnM6IFZhcmlhbnRPcHRpb25RdWFsaWZpZXJbXVxuICApOiBzdHJpbmcge1xuICAgIGNvbnN0IHRodW1ibmFpbCA9IHZhcmlhbnRPcHRpb25RdWFsaWZpZXJzLmZpbmQoXG4gICAgICBpdGVtID0+IGl0ZW0ucXVhbGlmaWVyID09PSBWYXJpYW50UXVhbGlmaWVyLlRIVU1CTkFJTFxuICAgICk7XG4gICAgcmV0dXJuIHRodW1ibmFpbFxuICAgICAgPyBgJHt0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsfSR7dGh1bWJuYWlsLmltYWdlLnVybH1gXG4gICAgICA6ICcnO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRWYXJpYW50TmFtZShcbiAgICB2YXJpYW50T3B0aW9uUXVhbGlmaWVyczogVmFyaWFudE9wdGlvblF1YWxpZmllcltdXG4gICk6IHN0cmluZyB7XG4gICAgY29uc3Qgcm9sbHVwUHJvcGVydHkgPSB2YXJpYW50T3B0aW9uUXVhbGlmaWVycy5maW5kKFxuICAgICAgaXRlbSA9PiBpdGVtLnF1YWxpZmllciA9PT0gVmFyaWFudFF1YWxpZmllci5ST0xMVVBfUFJPUEVSVFlcbiAgICApO1xuICAgIGNvbnN0IHByb3BlcnR5ID0gcm9sbHVwUHJvcGVydHlcbiAgICAgID8gdmFyaWFudE9wdGlvblF1YWxpZmllcnMuZmluZChcbiAgICAgICAgICBpdGVtID0+IGl0ZW0ucXVhbGlmaWVyID09PSByb2xsdXBQcm9wZXJ0eS52YWx1ZVxuICAgICAgICApXG4gICAgICA6IG51bGw7XG4gICAgcmV0dXJuIHByb3BlcnR5ID8gcHJvcGVydHkudmFsdWUgOiAnJztcbiAgfVxufVxuIl19