import { FormControl } from '@angular/forms';
import { RoutingService } from '@spartacus/core';
import { ICON_TYPE } from '../../../misc/icon';
export declare class StoreFinderSearchComponent {
    private routingService;
    searchBox: FormControl;
    iconTypes: typeof ICON_TYPE;
    constructor(routingService: RoutingService);
    findStores(address: string): void;
    viewStoresWithMyLoc(): void;
    onKey(event: any): void;
}
