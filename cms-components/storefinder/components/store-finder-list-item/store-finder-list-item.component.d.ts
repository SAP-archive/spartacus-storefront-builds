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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWxpc3QtaXRlbS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsic3RvcmUtZmluZGVyLWxpc3QtaXRlbS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7O0FBUUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZURhdGFTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0U3RvcmVJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vYWJzdHJhY3Qtc3RvcmUtaXRlbS9hYnN0cmFjdC1zdG9yZS1pdGVtLmNvbXBvbmVudCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTdG9yZUZpbmRlckxpc3RJdGVtQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RTdG9yZUl0ZW1Db21wb25lbnQge1xuICAgIHByb3RlY3RlZCBzdG9yZURhdGFTZXJ2aWNlOiBTdG9yZURhdGFTZXJ2aWNlO1xuICAgIGxvY2F0aW9uSW5kZXg6IG51bWJlcjtcbiAgICBsaXN0T3JkZXJMYWJlbDogYW55O1xuICAgIGRpc3BsYXlEaXN0YW5jZTogYm9vbGVhbjtcbiAgICBzdG9yZUl0ZW1DbGljazogRXZlbnRFbWl0dGVyPG51bWJlcj47XG4gICAgY29uc3RydWN0b3Ioc3RvcmVEYXRhU2VydmljZTogU3RvcmVEYXRhU2VydmljZSk7XG4gICAgaGFuZGxlU3RvcmVJdGVtQ2xpY2soKTogdm9pZDtcbn1cbiJdfQ==