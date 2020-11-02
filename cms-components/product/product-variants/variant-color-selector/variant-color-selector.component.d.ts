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

//# sourceMappingURL=variant-color-selector.component.d.ts.map