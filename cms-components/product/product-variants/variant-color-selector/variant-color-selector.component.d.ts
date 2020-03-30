import { BaseOption, Product, RoutingService, VariantOptionQualifier } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class VariantColorSelectorComponent {
    private routingService;
    constructor(routingService: RoutingService);
    product: Product;
    variants: BaseOption;
    changeColor(code: string, name: string): void;
    getVariantOptionValue(qualifiers: VariantOptionQualifier[]): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<VariantColorSelectorComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<VariantColorSelectorComponent, "cx-variant-color-selector", never, { "product": "product"; "variants": "variants"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudC1jb2xvci1zZWxlY3Rvci5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsidmFyaWFudC1jb2xvci1zZWxlY3Rvci5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTs7Ozs7Ozs7O0FBT0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlT3B0aW9uLCBQcm9kdWN0LCBSb3V0aW5nU2VydmljZSwgVmFyaWFudE9wdGlvblF1YWxpZmllciB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBWYXJpYW50Q29sb3JTZWxlY3RvckNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTtcbiAgICBjb25zdHJ1Y3Rvcihyb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UpO1xuICAgIHByb2R1Y3Q6IFByb2R1Y3Q7XG4gICAgdmFyaWFudHM6IEJhc2VPcHRpb247XG4gICAgY2hhbmdlQ29sb3IoY29kZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpOiB2b2lkO1xuICAgIGdldFZhcmlhbnRPcHRpb25WYWx1ZShxdWFsaWZpZXJzOiBWYXJpYW50T3B0aW9uUXVhbGlmaWVyW10pOiBzdHJpbmc7XG59XG4iXX0=