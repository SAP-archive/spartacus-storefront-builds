import { Product, RoutingService, BaseOption, VariantOptionQualifier } from '@spartacus/core';
export declare class VariantColorSelectorComponent {
    private routingService;
    constructor(routingService: RoutingService);
    product: Product;
    variants: BaseOption;
    changeColor(code: string): void;
    getVariantOptionValue(qualifiers: VariantOptionQualifier[]): string;
}
