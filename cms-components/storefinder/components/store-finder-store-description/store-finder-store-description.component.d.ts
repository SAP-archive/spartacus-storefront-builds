import { StoreDataService, PointOfService } from '@spartacus/core';
import { AbstractStoreItemComponent } from '../abstract-store-item/abstract-store-item.component';
export declare class StoreFinderStoreDescriptionComponent extends AbstractStoreItemComponent {
    protected storeDataService: StoreDataService;
    location: PointOfService;
    disableMap: boolean;
    constructor(storeDataService: StoreDataService);
}
