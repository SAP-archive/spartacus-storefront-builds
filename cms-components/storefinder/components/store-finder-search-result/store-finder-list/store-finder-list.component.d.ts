import { StoreDataService, PointOfService } from '@spartacus/core';
import { StoreFinderMapComponent } from '../../store-finder-map/store-finder-map.component';
import { ICON_TYPE } from './../../../../misc/icon/icon.model';
export declare class StoreFinderListComponent {
    private storeDataService;
    private document;
    locations: any;
    useMylocation: boolean;
    storeMap: StoreFinderMapComponent;
    selectedStore: PointOfService;
    selectedStoreIndex: number;
    isDetailsModeVisible: boolean;
    storeDetails: PointOfService;
    iconTypes: typeof ICON_TYPE;
    constructor(storeDataService: StoreDataService, document: any);
    centerStoreOnMapByIndex(index: number, location: PointOfService): void;
    selectStoreItemList(index: number): void;
    showStoreDetails(location: PointOfService): void;
    hideStoreDetails(): void;
}
