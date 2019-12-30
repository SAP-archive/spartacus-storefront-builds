/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, } from '@angular/core';
import { OccConfig, VariantQualifier, } from '@spartacus/core';
export class VariantStyleIconsComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.config = config;
        this.variantNames = {};
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.variants.forEach((/**
         * @param {?} variant
         * @return {?}
         */
        variant => {
            this.variantNames[variant.code] = this.getVariantName(variant.variantOptionQualifiers);
        }));
    }
    /**
     * @param {?} variantOptionQualifiers
     * @return {?}
     */
    getVariantThumbnailUrl(variantOptionQualifiers) {
        /** @type {?} */
        const thumbnail = variantOptionQualifiers.find((/**
         * @param {?} item
         * @return {?}
         */
        item => item.qualifier === VariantQualifier.THUMBNAIL));
        return thumbnail
            ? `${this.config.backend.occ.baseUrl}${thumbnail.image.url}`
            : '';
    }
    /**
     * @private
     * @param {?} variantOptionQualifiers
     * @return {?}
     */
    getVariantName(variantOptionQualifiers) {
        /** @type {?} */
        const rollupProperty = variantOptionQualifiers.find((/**
         * @param {?} item
         * @return {?}
         */
        item => item.qualifier === VariantQualifier.ROLLUP_PROPERTY));
        /** @type {?} */
        const property = rollupProperty
            ? variantOptionQualifiers.find((/**
             * @param {?} item
             * @return {?}
             */
            item => item.qualifier === rollupProperty.value))
            : null;
        return property ? property.value : '';
    }
}
VariantStyleIconsComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-style-icons',
                template: "<ul class=\"variant-list\">\n  <li *ngFor=\"let v of variants\">\n    <img\n      [attr.src]=\"getVariantThumbnailUrl(v.variantOptionQualifiers)\"\n      [attr.title]=\"variantNames[v.code]\"\n      [attr.alt]=\"variantNames[v.code]\"\n    />\n  </li>\n</ul>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["ul{padding:0}ul li{display:inline}ul li img{width:50px}"]
            }] }
];
/** @nocollapse */
VariantStyleIconsComponent.ctorParameters = () => [
    { type: OccConfig }
];
VariantStyleIconsComponent.propDecorators = {
    variants: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGUtaWNvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LXZhcmlhbnQtc2VsZWN0b3Ivc3R5bGUtaWNvbnMvc3R5bGUtaWNvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTCx1QkFBdUIsR0FDeEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLFNBQVMsRUFHVCxnQkFBZ0IsR0FDakIsTUFBTSxpQkFBaUIsQ0FBQztBQVF6QixNQUFNLE9BQU8sMEJBQTBCOzs7O0lBQ3JDLFlBQW9CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFLckMsaUJBQVksR0FBOEIsRUFBRSxDQUFDO0lBTEwsQ0FBQzs7OztJQU96QyxRQUFRO1FBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FDbkQsT0FBTyxDQUFDLHVCQUF1QixDQUNoQyxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELHNCQUFzQixDQUNwQix1QkFBaUQ7O2NBRTNDLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQyxJQUFJOzs7O1FBQzVDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQ3REO1FBQ0QsT0FBTyxTQUFTO1lBQ2QsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUM1RCxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ1QsQ0FBQzs7Ozs7O0lBRU8sY0FBYyxDQUNwQix1QkFBaUQ7O2NBRTNDLGNBQWMsR0FBRyx1QkFBdUIsQ0FBQyxJQUFJOzs7O1FBQ2pELElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxnQkFBZ0IsQ0FBQyxlQUFlLEVBQzVEOztjQUNLLFFBQVEsR0FBRyxjQUFjO1lBQzdCLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJOzs7O1lBQzFCLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsS0FBSyxjQUFjLENBQUMsS0FBSyxFQUNoRDtZQUNILENBQUMsQ0FBQyxJQUFJO1FBQ1IsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN4QyxDQUFDOzs7WUE3Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGdSQUEyQztnQkFFM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O1lBWEMsU0FBUzs7O3VCQWVSLEtBQUs7Ozs7SUFBTiw4Q0FDMEI7O0lBRTFCLGtEQUE2Qzs7Ozs7SUFMakMsNENBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIE9jY0NvbmZpZyxcbiAgVmFyaWFudE9wdGlvbixcbiAgVmFyaWFudE9wdGlvblF1YWxpZmllcixcbiAgVmFyaWFudFF1YWxpZmllcixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3R5bGUtaWNvbnMnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3R5bGUtaWNvbnMuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zdHlsZS1pY29ucy5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVmFyaWFudFN0eWxlSWNvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZzogT2NjQ29uZmlnKSB7fVxuXG4gIEBJbnB1dCgpXG4gIHZhcmlhbnRzOiBWYXJpYW50T3B0aW9uW107XG5cbiAgdmFyaWFudE5hbWVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9ID0ge307XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy52YXJpYW50cy5mb3JFYWNoKHZhcmlhbnQgPT4ge1xuICAgICAgdGhpcy52YXJpYW50TmFtZXNbdmFyaWFudC5jb2RlXSA9IHRoaXMuZ2V0VmFyaWFudE5hbWUoXG4gICAgICAgIHZhcmlhbnQudmFyaWFudE9wdGlvblF1YWxpZmllcnNcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRWYXJpYW50VGh1bWJuYWlsVXJsKFxuICAgIHZhcmlhbnRPcHRpb25RdWFsaWZpZXJzOiBWYXJpYW50T3B0aW9uUXVhbGlmaWVyW11cbiAgKTogc3RyaW5nIHtcbiAgICBjb25zdCB0aHVtYm5haWwgPSB2YXJpYW50T3B0aW9uUXVhbGlmaWVycy5maW5kKFxuICAgICAgaXRlbSA9PiBpdGVtLnF1YWxpZmllciA9PT0gVmFyaWFudFF1YWxpZmllci5USFVNQk5BSUxcbiAgICApO1xuICAgIHJldHVybiB0aHVtYm5haWxcbiAgICAgID8gYCR7dGhpcy5jb25maWcuYmFja2VuZC5vY2MuYmFzZVVybH0ke3RodW1ibmFpbC5pbWFnZS51cmx9YFxuICAgICAgOiAnJztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmFyaWFudE5hbWUoXG4gICAgdmFyaWFudE9wdGlvblF1YWxpZmllcnM6IFZhcmlhbnRPcHRpb25RdWFsaWZpZXJbXVxuICApOiBzdHJpbmcge1xuICAgIGNvbnN0IHJvbGx1cFByb3BlcnR5ID0gdmFyaWFudE9wdGlvblF1YWxpZmllcnMuZmluZChcbiAgICAgIGl0ZW0gPT4gaXRlbS5xdWFsaWZpZXIgPT09IFZhcmlhbnRRdWFsaWZpZXIuUk9MTFVQX1BST1BFUlRZXG4gICAgKTtcbiAgICBjb25zdCBwcm9wZXJ0eSA9IHJvbGx1cFByb3BlcnR5XG4gICAgICA/IHZhcmlhbnRPcHRpb25RdWFsaWZpZXJzLmZpbmQoXG4gICAgICAgICAgaXRlbSA9PiBpdGVtLnF1YWxpZmllciA9PT0gcm9sbHVwUHJvcGVydHkudmFsdWVcbiAgICAgICAgKVxuICAgICAgOiBudWxsO1xuICAgIHJldHVybiBwcm9wZXJ0eSA/IHByb3BlcnR5LnZhbHVlIDogJyc7XG4gIH1cbn1cbiJdfQ==