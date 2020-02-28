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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudC1zdHlsZS1pY29ucy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsidmFyaWFudC1zdHlsZS1pY29ucy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0FBVUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPY2NDb25maWcsIFZhcmlhbnRPcHRpb24sIFZhcmlhbnRPcHRpb25RdWFsaWZpZXIgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVmFyaWFudFN0eWxlSWNvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgY29uZmlnO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogT2NjQ29uZmlnKTtcbiAgICB2YXJpYW50czogVmFyaWFudE9wdGlvbltdO1xuICAgIHZhcmlhbnROYW1lczoge1xuICAgICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG4gICAgfTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIGdldFZhcmlhbnRUaHVtYm5haWxVcmwodmFyaWFudE9wdGlvblF1YWxpZmllcnM6IFZhcmlhbnRPcHRpb25RdWFsaWZpZXJbXSk6IHN0cmluZztcbiAgICBwcml2YXRlIGdldFZhcmlhbnROYW1lO1xufVxuIl19