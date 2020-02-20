import { EventEmitter } from '@angular/core';
import { StoreDataService } from '@spartacus/core';
import { AbstractStoreItemComponent } from '../abstract-store-item/abstract-store-item.component';
import * as ɵngcc0 from '@angular/core';
export declare class StoreFinderListItemComponent extends AbstractStoreItemComponent {
    protected storeDataService: StoreDataService;
    locationIndex: number;
    listOrderLabel: any;
    displayDistance: boolean;
    storeItemClick: EventEmitter<number>;
    constructor(storeDataService: StoreDataService);
    handleStoreItemClick(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StoreFinderListItemComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StoreFinderListItemComponent, "cx-store-finder-list-item", never, {
    "locationIndex": "locationIndex";
    "listOrderLabel": "listOrderLabel";
    "displayDistance": "displayDistance";
}, {
    "storeItemClick": "storeItemClick";
}, never>;
}

//# sourceMappingURL=store-finder-list-item.component.d.ts.map