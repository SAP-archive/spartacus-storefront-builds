import { EventEmitter } from '@angular/core';
import { StoreDataService } from '@spartacus/core';
import { AbstractStoreItemComponent } from '../abstract-store-item/abstract-store-item.component';
export declare class StoreFinderListItemComponent extends AbstractStoreItemComponent {
    protected storeDataService: StoreDataService;
    locationIndex: number;
    storeItemClick: EventEmitter<number>;
    constructor(storeDataService: StoreDataService);
    handleStoreItemClick(): void;
}
