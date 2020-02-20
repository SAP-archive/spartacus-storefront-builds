import { OnInit } from '@angular/core';
import { OccConfig, VariantOption, VariantOptionQualifier } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<VariantStyleIconsComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<VariantStyleIconsComponent, "cx-variant-style-icons", never, {
    "variants": "variants";
}, {}, never>;
}

//# sourceMappingURL=variant-style-icons.component.d.ts.map