import { OccConfig, BaseOption, VariantQualifier, VariantOptionQualifier, Product } from '@spartacus/core';
export declare class VariantStyleSelectorComponent {
    private config;
    constructor(config: OccConfig);
    variantQualifier: typeof VariantQualifier;
    product: Product;
    variants: BaseOption;
    getVariantOptionValue(qualifiers: VariantOptionQualifier[]): string;
    getVariantThumbnailUrl(variantOptionQualifiers: VariantOptionQualifier[]): string;
}
