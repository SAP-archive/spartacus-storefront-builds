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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudC1zdHlsZS1pY29ucy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsidmFyaWFudC1zdHlsZS1pY29ucy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBVUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9jY0NvbmZpZywgVmFyaWFudE9wdGlvbiwgVmFyaWFudE9wdGlvblF1YWxpZmllciB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBWYXJpYW50U3R5bGVJY29uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBjb25maWc7XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBPY2NDb25maWcpO1xuICAgIHZhcmlhbnRzOiBWYXJpYW50T3B0aW9uW107XG4gICAgdmFyaWFudE5hbWVzOiB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbiAgICB9O1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgZ2V0VmFyaWFudFRodW1ibmFpbFVybCh2YXJpYW50T3B0aW9uUXVhbGlmaWVyczogVmFyaWFudE9wdGlvblF1YWxpZmllcltdKTogc3RyaW5nO1xuICAgIHByaXZhdGUgZ2V0VmFyaWFudE5hbWU7XG59XG4iXX0=