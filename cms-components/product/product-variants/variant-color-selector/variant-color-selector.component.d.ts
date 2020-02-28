import { BaseOption, Product, RoutingService, VariantOptionQualifier } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class VariantColorSelectorComponent {
    private routingService;
    constructor(routingService: RoutingService);
    product: Product;
    variants: BaseOption;
    changeColor(code: string, name: string): void;
    getVariantOptionValue(qualifiers: VariantOptionQualifier[]): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<VariantColorSelectorComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<VariantColorSelectorComponent, "cx-variant-color-selector", never, {
    "product": "product";
    "variants": "variants";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFyaWFudC1jb2xvci1zZWxlY3Rvci5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsidmFyaWFudC1jb2xvci1zZWxlY3Rvci5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBT0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZU9wdGlvbiwgUHJvZHVjdCwgUm91dGluZ1NlcnZpY2UsIFZhcmlhbnRPcHRpb25RdWFsaWZpZXIgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVmFyaWFudENvbG9yU2VsZWN0b3JDb21wb25lbnQge1xuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U7XG4gICAgY29uc3RydWN0b3Iocm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlKTtcbiAgICBwcm9kdWN0OiBQcm9kdWN0O1xuICAgIHZhcmlhbnRzOiBCYXNlT3B0aW9uO1xuICAgIGNoYW5nZUNvbG9yKGNvZGU6IHN0cmluZywgbmFtZTogc3RyaW5nKTogdm9pZDtcbiAgICBnZXRWYXJpYW50T3B0aW9uVmFsdWUocXVhbGlmaWVyczogVmFyaWFudE9wdGlvblF1YWxpZmllcltdKTogc3RyaW5nO1xufVxuIl19