import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RoutingService } from '@spartacus/core';
export declare class StoreFinderSearchComponent {
    private routing;
    private route;
    searchBox: FormControl;
    constructor(routing: RoutingService, route: ActivatedRoute);
    findStores(address: string): void;
    viewStoresWithMyLoc(): void;
    onKey(event: any): void;
}
