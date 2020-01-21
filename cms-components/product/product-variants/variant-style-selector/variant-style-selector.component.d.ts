import { OccConfig, BaseOption, VariantQualifier, VariantOptionQualifier } from '@spartacus/core';
export declare class VariantStyleSelectorComponent {
    private config;
    constructor(config: OccConfig);
    variantQualifier: typeof VariantQualifier;
    variants: BaseOption;
    getVariantOptionValue(qualifiers: VariantOptionQualifier[]): string;
    getVariantThumbnailUrl(variantOptionQualifiers: VariantOptionQualifier[]): string;
}
