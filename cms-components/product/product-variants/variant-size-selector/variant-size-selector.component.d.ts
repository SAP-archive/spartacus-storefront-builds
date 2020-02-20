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

//# sourceMappingURL=variant-size-selector.component.d.ts.map