import { FormControl } from '@angular/forms';
import { RoutingService } from '@spartacus/core';
import { ICON_TYPE } from '../../../misc/icon';
import * as ɵngcc0 from '@angular/core';
export declare class StoreFinderSearchComponent {
    private routingService;
    searchBox: FormControl;
    iconTypes: typeof ICON_TYPE;
    constructor(routingService: RoutingService);
    findStores(address: string): void;
    viewStoresWithMyLoc(): void;
    onKey(event: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StoreFinderSearchComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StoreFinderSearchComponent, "cx-store-finder-search", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXNlYXJjaC5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsic3RvcmUtZmluZGVyLXNlYXJjaC5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7O0FBUUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybUNvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi9taXNjL2ljb24nO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU3RvcmVGaW5kZXJTZWFyY2hDb21wb25lbnQge1xuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U7XG4gICAgc2VhcmNoQm94OiBGb3JtQ29udHJvbDtcbiAgICBpY29uVHlwZXM6IHR5cGVvZiBJQ09OX1RZUEU7XG4gICAgY29uc3RydWN0b3Iocm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlKTtcbiAgICBmaW5kU3RvcmVzKGFkZHJlc3M6IHN0cmluZyk6IHZvaWQ7XG4gICAgdmlld1N0b3Jlc1dpdGhNeUxvYygpOiB2b2lkO1xuICAgIG9uS2V5KGV2ZW50OiBhbnkpOiB2b2lkO1xufVxuIl19