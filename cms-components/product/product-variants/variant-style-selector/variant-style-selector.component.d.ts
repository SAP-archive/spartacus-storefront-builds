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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudC1zdHlsZS1zZWxlY3Rvci5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsidmFyaWFudC1zdHlsZS1zZWxlY3Rvci5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFVQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9jY0NvbmZpZywgQmFzZU9wdGlvbiwgVmFyaWFudFF1YWxpZmllciwgVmFyaWFudE9wdGlvblF1YWxpZmllciwgUHJvZHVjdFNlcnZpY2UsIFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFZhcmlhbnRTdHlsZVNlbGVjdG9yQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIGNvbmZpZztcbiAgICBwcml2YXRlIHByb2R1Y3RTZXJ2aWNlO1xuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U7XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBPY2NDb25maWcsIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSwgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlKTtcbiAgICB2YXJpYW50UXVhbGlmaWVyOiB0eXBlb2YgVmFyaWFudFF1YWxpZmllcjtcbiAgICB2YXJpYW50czogQmFzZU9wdGlvbjtcbiAgICBnZXRWYXJpYW50T3B0aW9uVmFsdWUocXVhbGlmaWVyczogVmFyaWFudE9wdGlvblF1YWxpZmllcltdKTogc3RyaW5nO1xuICAgIGdldFZhcmlhbnRUaHVtYm5haWxVcmwodmFyaWFudE9wdGlvblF1YWxpZmllcnM6IFZhcmlhbnRPcHRpb25RdWFsaWZpZXJbXSk6IHN0cmluZztcbiAgICBjaGFuZ2VTdHlsZShjb2RlOiBzdHJpbmcpOiB2b2lkO1xufVxuIl19