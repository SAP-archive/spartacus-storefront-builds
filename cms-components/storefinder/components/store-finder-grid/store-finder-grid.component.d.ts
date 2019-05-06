import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LongitudeLatitude, RoutingService, StoreFinderService } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
export declare class StoreFinderGridComponent implements OnInit, OnDestroy {
    private storeFinderService;
    private route;
    private routingService;
    locations$: any;
    isLoading$: Observable<boolean>;
    locationsSub: Subscription;
    defaultLocation: LongitudeLatitude;
    country: string;
    region: string;
    constructor(storeFinderService: StoreFinderService, route: ActivatedRoute, routingService: RoutingService);
    ngOnInit(): void;
    viewStore(location: any): void;
    ngOnDestroy(): void;
}
