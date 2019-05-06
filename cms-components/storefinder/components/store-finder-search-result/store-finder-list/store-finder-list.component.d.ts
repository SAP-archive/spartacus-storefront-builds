import { StoreDataService } from '@spartacus/core';
import { StoreFinderMapComponent } from '../../store-finder-map/store-finder-map.component';
export declare class StoreFinderListComponent {
    private storeDataService;
    private document;
    locations: any;
    storeMap: StoreFinderMapComponent;
    selectedStore: number;
    constructor(storeDataService: StoreDataService, document: any);
    centerStoreOnMapByIndex(index: number): void;
    selectStoreItemList(index: number): void;
}
