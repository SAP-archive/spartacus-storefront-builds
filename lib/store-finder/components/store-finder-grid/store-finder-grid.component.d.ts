import { OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { StoreFinderService, LongitudeLatitude } from '@spartacus/core';
import { RoutingService } from '@spartacus/core';
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
