import { ActivatedRoute } from '@angular/router';
import { EventEmitter } from '@angular/core';
import { StoreDataService, RoutingService } from '@spartacus/core';
import { AbstractStoreItemComponent } from '../abstract-store-item/abstract-store-item.component';
import * as ɵngcc0 from '@angular/core';
export declare class StoreFinderListItemComponent extends AbstractStoreItemComponent {
    protected storeDataService: StoreDataService;
    protected route: ActivatedRoute;
    protected routingService: RoutingService;
    locationIndex: number;
    listOrderLabel: any;
    displayDistance: boolean;
    useClickEvent: boolean;
    storeItemClick: EventEmitter<number>;
    constructor(storeDataService: StoreDataService, route: ActivatedRoute, routingService: RoutingService);
    handleStoreItemClick(): void;
    viewStore(location: any): void;
    prepareRouteUrl(location: any): string;
    onKey(event: KeyboardEvent): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StoreFinderListItemComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StoreFinderListItemComponent, "cx-store-finder-list-item", never, { "locationIndex": "locationIndex"; "listOrderLabel": "listOrderLabel"; "displayDistance": "displayDistance"; "useClickEvent": "useClickEvent"; }, { "storeItemClick": "storeItemClick"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWxpc3QtaXRlbS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsic3RvcmUtZmluZGVyLWxpc3QtaXRlbS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7OztBQWNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZURhdGFTZXJ2aWNlLCBSb3V0aW5nU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdFN0b3JlSXRlbUNvbXBvbmVudCB9IGZyb20gJy4uL2Fic3RyYWN0LXN0b3JlLWl0ZW0vYWJzdHJhY3Qtc3RvcmUtaXRlbS5jb21wb25lbnQnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU3RvcmVGaW5kZXJMaXN0SXRlbUNvbXBvbmVudCBleHRlbmRzIEFic3RyYWN0U3RvcmVJdGVtQ29tcG9uZW50IHtcbiAgICBwcm90ZWN0ZWQgc3RvcmVEYXRhU2VydmljZTogU3RvcmVEYXRhU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcm91dGU6IEFjdGl2YXRlZFJvdXRlO1xuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2U7XG4gICAgbG9jYXRpb25JbmRleDogbnVtYmVyO1xuICAgIGxpc3RPcmRlckxhYmVsOiBhbnk7XG4gICAgZGlzcGxheURpc3RhbmNlOiBib29sZWFuO1xuICAgIHVzZUNsaWNrRXZlbnQ6IGJvb2xlYW47XG4gICAgc3RvcmVJdGVtQ2xpY2s6IEV2ZW50RW1pdHRlcjxudW1iZXI+O1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlRGF0YVNlcnZpY2U6IFN0b3JlRGF0YVNlcnZpY2UsIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlKTtcbiAgICBoYW5kbGVTdG9yZUl0ZW1DbGljaygpOiB2b2lkO1xuICAgIHZpZXdTdG9yZShsb2NhdGlvbjogYW55KTogdm9pZDtcbiAgICBwcmVwYXJlUm91dGVVcmwobG9jYXRpb246IGFueSk6IHN0cmluZztcbiAgICBvbktleShldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQ7XG59XG4iXX0=