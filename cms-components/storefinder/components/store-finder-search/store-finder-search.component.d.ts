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

//# sourceMappingURL=store-finder-search.component.d.ts.map