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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWxpc3QuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInN0b3JlLWZpbmRlci1saXN0LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlRGF0YVNlcnZpY2UsIFBvaW50T2ZTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IFN0b3JlRmluZGVyTWFwQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vc3RvcmUtZmluZGVyLW1hcC9zdG9yZS1maW5kZXItbWFwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLy4uLy4uLy4uLy4uL21pc2MvaWNvbi9pY29uLm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFN0b3JlRmluZGVyTGlzdENvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBzdG9yZURhdGFTZXJ2aWNlO1xuICAgIHByaXZhdGUgZG9jdW1lbnQ7XG4gICAgbG9jYXRpb25zOiBhbnk7XG4gICAgdXNlTXlsb2NhdGlvbjogYm9vbGVhbjtcbiAgICBzdG9yZU1hcDogU3RvcmVGaW5kZXJNYXBDb21wb25lbnQ7XG4gICAgc2VsZWN0ZWRTdG9yZTogUG9pbnRPZlNlcnZpY2U7XG4gICAgc2VsZWN0ZWRTdG9yZUluZGV4OiBudW1iZXI7XG4gICAgaXNEZXRhaWxzTW9kZVZpc2libGU6IGJvb2xlYW47XG4gICAgc3RvcmVEZXRhaWxzOiBQb2ludE9mU2VydmljZTtcbiAgICBpY29uVHlwZXM6IHR5cGVvZiBJQ09OX1RZUEU7XG4gICAgY29uc3RydWN0b3Ioc3RvcmVEYXRhU2VydmljZTogU3RvcmVEYXRhU2VydmljZSwgZG9jdW1lbnQ6IGFueSk7XG4gICAgY2VudGVyU3RvcmVPbk1hcEJ5SW5kZXgoaW5kZXg6IG51bWJlciwgbG9jYXRpb246IFBvaW50T2ZTZXJ2aWNlKTogdm9pZDtcbiAgICBzZWxlY3RTdG9yZUl0ZW1MaXN0KGluZGV4OiBudW1iZXIpOiB2b2lkO1xuICAgIHNob3dTdG9yZURldGFpbHMobG9jYXRpb246IFBvaW50T2ZTZXJ2aWNlKTogdm9pZDtcbiAgICBoaWRlU3RvcmVEZXRhaWxzKCk6IHZvaWQ7XG59XG4iXX0=