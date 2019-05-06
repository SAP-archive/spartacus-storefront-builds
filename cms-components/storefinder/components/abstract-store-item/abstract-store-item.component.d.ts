import { StoreDataService } from '@spartacus/core';
export declare class AbstractStoreItemComponent {
    protected storeDataService: StoreDataService;
    location: any;
    readonly current_date: Date;
    constructor(storeDataService: StoreDataService);
    getDirections(location: any): string;
    getClosingTime(location: any): Date;
    getOpeningTime(location: any): Date;
    isOpen(location: any): boolean;
}
