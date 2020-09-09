import { StoreDataService } from '@spartacus/core';
export declare class AbstractStoreItemComponent {
    protected storeDataService: StoreDataService;
    location: any;
    constructor(storeDataService: StoreDataService);
    getDirections(location: any): string;
    getFormattedStoreAddress(addressParts: string[]): string;
}
