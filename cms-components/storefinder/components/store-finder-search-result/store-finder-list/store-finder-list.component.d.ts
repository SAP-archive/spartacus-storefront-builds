import { StoreDataService, PointOfService } from '@spartacus/core';
import { StoreFinderMapComponent } from '../../store-finder-map/store-finder-map.component';
import { ICON_TYPE } from './../../../../misc/icon/icon.model';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StoreFinderListComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StoreFinderListComponent, "cx-store-finder-list", never, {
    "locations": "locations";
    "useMylocation": "useMylocation";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWxpc3QuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInN0b3JlLWZpbmRlci1saXN0LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZURhdGFTZXJ2aWNlLCBQb2ludE9mU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlck1hcENvbXBvbmVudCB9IGZyb20gJy4uLy4uL3N0b3JlLWZpbmRlci1tYXAvc3RvcmUtZmluZGVyLW1hcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9taXNjL2ljb24vaWNvbi5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTdG9yZUZpbmRlckxpc3RDb21wb25lbnQge1xuICAgIHByaXZhdGUgc3RvcmVEYXRhU2VydmljZTtcbiAgICBwcml2YXRlIGRvY3VtZW50O1xuICAgIGxvY2F0aW9uczogYW55O1xuICAgIHVzZU15bG9jYXRpb246IGJvb2xlYW47XG4gICAgc3RvcmVNYXA6IFN0b3JlRmluZGVyTWFwQ29tcG9uZW50O1xuICAgIHNlbGVjdGVkU3RvcmU6IFBvaW50T2ZTZXJ2aWNlO1xuICAgIHNlbGVjdGVkU3RvcmVJbmRleDogbnVtYmVyO1xuICAgIGlzRGV0YWlsc01vZGVWaXNpYmxlOiBib29sZWFuO1xuICAgIHN0b3JlRGV0YWlsczogUG9pbnRPZlNlcnZpY2U7XG4gICAgaWNvblR5cGVzOiB0eXBlb2YgSUNPTl9UWVBFO1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlRGF0YVNlcnZpY2U6IFN0b3JlRGF0YVNlcnZpY2UsIGRvY3VtZW50OiBhbnkpO1xuICAgIGNlbnRlclN0b3JlT25NYXBCeUluZGV4KGluZGV4OiBudW1iZXIsIGxvY2F0aW9uOiBQb2ludE9mU2VydmljZSk6IHZvaWQ7XG4gICAgc2VsZWN0U3RvcmVJdGVtTGlzdChpbmRleDogbnVtYmVyKTogdm9pZDtcbiAgICBzaG93U3RvcmVEZXRhaWxzKGxvY2F0aW9uOiBQb2ludE9mU2VydmljZSk6IHZvaWQ7XG4gICAgaGlkZVN0b3JlRGV0YWlscygpOiB2b2lkO1xufVxuIl19