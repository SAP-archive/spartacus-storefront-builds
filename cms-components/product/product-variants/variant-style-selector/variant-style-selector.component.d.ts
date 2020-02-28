import { OccConfig, BaseOption, VariantQualifier, VariantOptionQualifier, ProductService, RoutingService } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class VariantStyleSelectorComponent {
    private config;
    private productService;
    private routingService;
    constructor(config: OccConfig, productService: ProductService, routingService: RoutingService);
    variantQualifier: typeof VariantQualifier;
    variants: BaseOption;
    getVariantOptionValue(qualifiers: VariantOptionQualifier[]): string;
    getVariantThumbnailUrl(variantOptionQualifiers: VariantOptionQualifier[]): string;
    changeStyle(code: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<VariantStyleSelectorComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<VariantStyleSelectorComponent, "cx-variant-style-selector", never, {
    "variants": "variants";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudC1zdHlsZS1zZWxlY3Rvci5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsidmFyaWFudC1zdHlsZS1zZWxlY3Rvci5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFVQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPY2NDb25maWcsIEJhc2VPcHRpb24sIFZhcmlhbnRRdWFsaWZpZXIsIFZhcmlhbnRPcHRpb25RdWFsaWZpZXIsIFByb2R1Y3RTZXJ2aWNlLCBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBWYXJpYW50U3R5bGVTZWxlY3RvckNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBjb25maWc7XG4gICAgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTtcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogT2NjQ29uZmlnLCBwcm9kdWN0U2VydmljZTogUHJvZHVjdFNlcnZpY2UsIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSk7XG4gICAgdmFyaWFudFF1YWxpZmllcjogdHlwZW9mIFZhcmlhbnRRdWFsaWZpZXI7XG4gICAgdmFyaWFudHM6IEJhc2VPcHRpb247XG4gICAgZ2V0VmFyaWFudE9wdGlvblZhbHVlKHF1YWxpZmllcnM6IFZhcmlhbnRPcHRpb25RdWFsaWZpZXJbXSk6IHN0cmluZztcbiAgICBnZXRWYXJpYW50VGh1bWJuYWlsVXJsKHZhcmlhbnRPcHRpb25RdWFsaWZpZXJzOiBWYXJpYW50T3B0aW9uUXVhbGlmaWVyW10pOiBzdHJpbmc7XG4gICAgY2hhbmdlU3R5bGUoY29kZTogc3RyaW5nKTogdm9pZDtcbn1cbiJdfQ==