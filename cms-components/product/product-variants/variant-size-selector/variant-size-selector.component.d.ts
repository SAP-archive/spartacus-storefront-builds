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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudC1zaXplLXNlbGVjdG9yLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJ2YXJpYW50LXNpemUtc2VsZWN0b3IuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFRQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm9kdWN0LCBSb3V0aW5nU2VydmljZSwgQmFzZU9wdGlvbiwgVmFyaWFudE9wdGlvblF1YWxpZmllciwgUHJvZHVjdFNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVmFyaWFudFNpemVTZWxlY3RvckNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTtcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSwgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlKTtcbiAgICBwcm9kdWN0OiBQcm9kdWN0O1xuICAgIHZhcmlhbnRzOiBCYXNlT3B0aW9uO1xuICAgIGNoYW5nZVNpemUoY29kZTogc3RyaW5nKTogdm9pZDtcbiAgICBnZXRWYXJpYW50T3B0aW9uVmFsdWUocXVhbGlmaWVyczogVmFyaWFudE9wdGlvblF1YWxpZmllcltdKTogc3RyaW5nO1xufVxuIl19