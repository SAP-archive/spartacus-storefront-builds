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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StoreFinderListItemComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StoreFinderListItemComponent, "cx-store-finder-list-item", never, {
    "locationIndex": "locationIndex";
    "listOrderLabel": "listOrderLabel";
    "displayDistance": "displayDistance";
    "useClickEvent": "useClickEvent";
}, {
    "storeItemClick": "storeItemClick";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWxpc3QtaXRlbS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsic3RvcmUtZmluZGVyLWxpc3QtaXRlbS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVEYXRhU2VydmljZSwgUm91dGluZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQWJzdHJhY3RTdG9yZUl0ZW1Db21wb25lbnQgfSBmcm9tICcuLi9hYnN0cmFjdC1zdG9yZS1pdGVtL2Fic3RyYWN0LXN0b3JlLWl0ZW0uY29tcG9uZW50JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFN0b3JlRmluZGVyTGlzdEl0ZW1Db21wb25lbnQgZXh0ZW5kcyBBYnN0cmFjdFN0b3JlSXRlbUNvbXBvbmVudCB7XG4gICAgcHJvdGVjdGVkIHN0b3JlRGF0YVNlcnZpY2U6IFN0b3JlRGF0YVNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZTtcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlO1xuICAgIGxvY2F0aW9uSW5kZXg6IG51bWJlcjtcbiAgICBsaXN0T3JkZXJMYWJlbDogYW55O1xuICAgIGRpc3BsYXlEaXN0YW5jZTogYm9vbGVhbjtcbiAgICB1c2VDbGlja0V2ZW50OiBib29sZWFuO1xuICAgIHN0b3JlSXRlbUNsaWNrOiBFdmVudEVtaXR0ZXI8bnVtYmVyPjtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZURhdGFTZXJ2aWNlOiBTdG9yZURhdGFTZXJ2aWNlLCByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSk7XG4gICAgaGFuZGxlU3RvcmVJdGVtQ2xpY2soKTogdm9pZDtcbiAgICB2aWV3U3RvcmUobG9jYXRpb246IGFueSk6IHZvaWQ7XG4gICAgcHJlcGFyZVJvdXRlVXJsKGxvY2F0aW9uOiBhbnkpOiBzdHJpbmc7XG4gICAgb25LZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkO1xufVxuIl19