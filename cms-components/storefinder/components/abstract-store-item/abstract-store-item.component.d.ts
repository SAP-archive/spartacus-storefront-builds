import { StoreDataService } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
export declare class AbstractStoreItemComponent {
    protected storeDataService: StoreDataService;
    location: any;
    constructor(storeDataService: StoreDataService);
    getDirections(location: any): string;
    getFormattedStoreAddress(addressParts: string[]): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AbstractStoreItemComponent>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<AbstractStoreItemComponent, never, never, {
    "location": "location";
}, {}, never>;
}

//# sourceMappingURL=abstract-store-item.component.d.ts.map