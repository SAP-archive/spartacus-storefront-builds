import { Product, RoutingService, BaseOption, VariantOptionQualifier } from '@spartacus/core';
export declare class VariantSizeSelectorComponent {
    private routingService;
    constructor(routingService: RoutingService);
    product: Product;
    variants: BaseOption;
    changeSize(code: string, name: string): void;
    getVariantOptionValue(qualifiers: VariantOptionQualifier[]): string;
}
