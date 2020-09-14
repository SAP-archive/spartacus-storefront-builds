import { OnInit } from '@angular/core';
import { OccConfig, VariantOption, VariantOptionQualifier } from '@spartacus/core';
export declare class VariantStyleIconsComponent implements OnInit {
    private config;
    constructor(config: OccConfig);
    variants: VariantOption[];
    variantNames: {
        [key: string]: string;
    };
    ngOnInit(): void;
    getVariantThumbnailUrl(variantOptionQualifiers: VariantOptionQualifier[]): string;
    private getVariantName;
}
