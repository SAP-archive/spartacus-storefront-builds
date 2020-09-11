import { Product, RoutingService, BaseOption, VariantOptionQualifier, ProductService } from '@spartacus/core';
export declare class VariantSizeSelectorComponent {
    private productService;
    private routingService;
    constructor(productService: ProductService, routingService: RoutingService);
    product: Product;
    variants: BaseOption;
    changeSize(code: string): void;
    getVariantOptionValue(qualifiers: VariantOptionQualifier[]): string;
}
