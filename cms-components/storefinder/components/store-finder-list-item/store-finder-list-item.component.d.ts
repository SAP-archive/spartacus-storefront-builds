import { EventEmitter } from '@angular/core';
import { StoreDataService } from '@spartacus/core';
import { AbstractStoreItemComponent } from '../abstract-store-item/abstract-store-item.component';
import * as ɵngcc0 from '@angular/core';
export declare class StoreFinderListItemComponent extends AbstractStoreItemComponent {
    protected storeDataService: StoreDataService;
    locationIndex: number;
    listOrderLabel: any;
    displayDistance: boolean;
    useClickEvent: boolean;
    storeItemClick: EventEmitter<number>;
    constructor(storeDataService: StoreDataService);
    handleStoreItemClick(): void;
    onKey(event: KeyboardEvent): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StoreFinderListItemComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StoreFinderListItemComponent, "cx-store-finder-list-item", never, { "locationIndex": "locationIndex"; "listOrderLabel": "listOrderLabel"; "displayDistance": "displayDistance"; "useClickEvent": "useClickEvent"; }, { "storeItemClick": "storeItemClick"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWxpc3QtaXRlbS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsic3RvcmUtZmluZGVyLWxpc3QtaXRlbS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7QUFVQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVEYXRhU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdFN0b3JlSXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL2Fic3RyYWN0LXN0b3JlLWl0ZW0vYWJzdHJhY3Qtc3RvcmUtaXRlbS5jb21wb25lbnQnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU3RvcmVGaW5kZXJMaXN0SXRlbUNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0U3RvcmVJdGVtQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgc3RvcmVEYXRhU2VydmljZTogU3RvcmVEYXRhU2VydmljZTtcbiAgICBsb2NhdGlvbkluZGV4OiBudW1iZXI7XG4gICAgbGlzdE9yZGVyTGFiZWw6IGFueTtcbiAgICBkaXNwbGF5RGlzdGFuY2U6IGJvb2xlYW47XG4gICAgdXNlQ2xpY2tFdmVudDogYm9vbGVhbjtcbiAgICBzdG9yZUl0ZW1DbGljazogRXZlbnRFbWl0dGVyPG51bWJlcj47XG4gICAgY29uc3RydWN0b3Ioc3RvcmVEYXRhU2VydmljZTogU3RvcmVEYXRhU2VydmljZSk7XG4gICAgaGFuZGxlU3RvcmVJdGVtQ2xpY2soKTogdm9pZDtcbiAgICBvbktleShldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQ7XG59XG4iXX0=