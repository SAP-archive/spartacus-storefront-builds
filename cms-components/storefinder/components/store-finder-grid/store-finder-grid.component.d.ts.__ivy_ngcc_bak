import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreFinderService, GeoPoint } from '@spartacus/core';
import { Observable } from 'rxjs';
export declare class StoreFinderGridComponent implements OnInit, OnDestroy {
    private storeFinderService;
    private route;
    locations$: any;
    isLoading$: Observable<boolean>;
    defaultLocation: GeoPoint;
    country: string;
    region: string;
    constructor(storeFinderService: StoreFinderService, route: ActivatedRoute);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
