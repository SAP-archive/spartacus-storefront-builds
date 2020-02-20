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

//# sourceMappingURL=variant-style-selector.component.d.ts.map