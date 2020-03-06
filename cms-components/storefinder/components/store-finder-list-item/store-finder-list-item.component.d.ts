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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWxpc3QtaXRlbS5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsic3RvcmUtZmluZGVyLWxpc3QtaXRlbS5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlRGF0YVNlcnZpY2UsIFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IEFic3RyYWN0U3RvcmVJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi4vYWJzdHJhY3Qtc3RvcmUtaXRlbS9hYnN0cmFjdC1zdG9yZS1pdGVtLmNvbXBvbmVudCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTdG9yZUZpbmRlckxpc3RJdGVtQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RTdG9yZUl0ZW1Db21wb25lbnQge1xuICAgIHByb3RlY3RlZCBzdG9yZURhdGFTZXJ2aWNlOiBTdG9yZURhdGFTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByb3V0ZTogQWN0aXZhdGVkUm91dGU7XG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZTtcbiAgICBsb2NhdGlvbkluZGV4OiBudW1iZXI7XG4gICAgbGlzdE9yZGVyTGFiZWw6IGFueTtcbiAgICBkaXNwbGF5RGlzdGFuY2U6IGJvb2xlYW47XG4gICAgdXNlQ2xpY2tFdmVudDogYm9vbGVhbjtcbiAgICBzdG9yZUl0ZW1DbGljazogRXZlbnRFbWl0dGVyPG51bWJlcj47XG4gICAgY29uc3RydWN0b3Ioc3RvcmVEYXRhU2VydmljZTogU3RvcmVEYXRhU2VydmljZSwgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UpO1xuICAgIGhhbmRsZVN0b3JlSXRlbUNsaWNrKCk6IHZvaWQ7XG4gICAgdmlld1N0b3JlKGxvY2F0aW9uOiBhbnkpOiB2b2lkO1xuICAgIHByZXBhcmVSb3V0ZVVybChsb2NhdGlvbjogYW55KTogc3RyaW5nO1xuICAgIG9uS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZDtcbn1cbiJdfQ==