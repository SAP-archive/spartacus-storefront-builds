import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoutingService, StoreFinderService, GeoPoint } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class StoreFinderGridComponent implements OnInit, OnDestroy {
    private storeFinderService;
    private route;
    private routingService;
    locations$: any;
    isLoading$: Observable<boolean>;
    defaultLocation: GeoPoint;
    country: string;
    region: string;
    constructor(storeFinderService: StoreFinderService, route: ActivatedRoute, routingService: RoutingService);
    ngOnInit(): void;
    viewStore(location: any): void;
    prepareRouteUrl(location: any): string;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StoreFinderGridComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StoreFinderGridComponent, "cx-store-finder-grid", never, {}, {}, never>;
}

//# sourceMappingURL=store-finder-grid.component.d.ts.map