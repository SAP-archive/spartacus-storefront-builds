import { Product, RoutingService, BaseOption, VariantOptionQualifier, ProductService } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class VariantSizeSelectorComponent {
    private productService;
    private routingService;
    constructor(productService: ProductService, routingService: RoutingService);
    product: Product;
    variants: BaseOption;
    changeSize(code: string): void;
    getVariantOptionValue(qualifiers: VariantOptionQualifier[]): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<VariantSizeSelectorComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<VariantSizeSelectorComponent, "cx-variant-size-selector", never, {
    "product": "product";
    "variants": "variants";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudC1zaXplLXNlbGVjdG9yLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJ2YXJpYW50LXNpemUtc2VsZWN0b3IuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFRQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2R1Y3QsIFJvdXRpbmdTZXJ2aWNlLCBCYXNlT3B0aW9uLCBWYXJpYW50T3B0aW9uUXVhbGlmaWVyLCBQcm9kdWN0U2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBWYXJpYW50U2l6ZVNlbGVjdG9yQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIHByb2R1Y3RTZXJ2aWNlO1xuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U7XG4gICAgY29uc3RydWN0b3IocHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UpO1xuICAgIHByb2R1Y3Q6IFByb2R1Y3Q7XG4gICAgdmFyaWFudHM6IEJhc2VPcHRpb247XG4gICAgY2hhbmdlU2l6ZShjb2RlOiBzdHJpbmcpOiB2b2lkO1xuICAgIGdldFZhcmlhbnRPcHRpb25WYWx1ZShxdWFsaWZpZXJzOiBWYXJpYW50T3B0aW9uUXVhbGlmaWVyW10pOiBzdHJpbmc7XG59XG4iXX0=