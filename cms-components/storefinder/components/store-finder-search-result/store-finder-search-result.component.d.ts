import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeoPoint, SearchConfig, StoreFinderSearchQuery, StoreFinderService } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
export declare class StoreFinderSearchResultComponent implements OnInit, OnDestroy {
    private storeFinderService;
    private route;
    locations: any;
    searchQuery: StoreFinderSearchQuery;
    locations$: Observable<any>;
    isLoading$: Observable<any>;
    geolocation: GeoPoint;
    subscription: Subscription;
    useMyLocation: boolean;
    countryCode: string;
    searchConfig: SearchConfig;
    constructor(storeFinderService: StoreFinderService, route: ActivatedRoute);
    ngOnInit(): void;
    ngOnDestroy(): void;
    viewPage(pageNumber: number): void;
    private initialize;
    private parseParameters;
}
