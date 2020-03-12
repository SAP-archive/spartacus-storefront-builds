import { OnInit } from '@angular/core';
import { StoreFinderService, PointOfService, RoutingService } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ICON_TYPE } from '../../../misc/icon';
import * as ɵngcc0 from '@angular/core';
export declare class StoreFinderStoreComponent implements OnInit {
    private storeFinderService;
    private route;
    private routingService;
    location$: Observable<any>;
    isLoading$: Observable<any>;
    iconTypes: typeof ICON_TYPE;
    location: PointOfService;
    disableMap: boolean;
    constructor(storeFinderService: StoreFinderService, route: ActivatedRoute, routingService: RoutingService);
    ngOnInit(): void;
    requestStoresData(): void;
    goBack(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StoreFinderStoreComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StoreFinderStoreComponent, "cx-store-finder-store", never, {
    "location": "location";
    "disableMap": "disableMap";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXN0b3JlLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJzdG9yZS1maW5kZXItc3RvcmUuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJTZXJ2aWNlLCBQb2ludE9mU2VydmljZSwgUm91dGluZ1NlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vbWlzYy9pY29uJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFN0b3JlRmluZGVyU3RvcmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgc3RvcmVGaW5kZXJTZXJ2aWNlO1xuICAgIHByaXZhdGUgcm91dGU7XG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTtcbiAgICBsb2NhdGlvbiQ6IE9ic2VydmFibGU8YW55PjtcbiAgICBpc0xvYWRpbmckOiBPYnNlcnZhYmxlPGFueT47XG4gICAgaWNvblR5cGVzOiB0eXBlb2YgSUNPTl9UWVBFO1xuICAgIGxvY2F0aW9uOiBQb2ludE9mU2VydmljZTtcbiAgICBkaXNhYmxlTWFwOiBib29sZWFuO1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlRmluZGVyU2VydmljZTogU3RvcmVGaW5kZXJTZXJ2aWNlLCByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICByZXF1ZXN0U3RvcmVzRGF0YSgpOiB2b2lkO1xuICAgIGdvQmFjaygpOiB2b2lkO1xufVxuIl19