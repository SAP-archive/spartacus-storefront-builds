import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeoPoint, SearchConfig, StoreFinderSearchQuery, StoreFinderService } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StoreFinderSearchResultComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StoreFinderSearchResultComponent, "cx-store-finder-search-result", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXNlYXJjaC1yZXN1bHQuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInN0b3JlLWZpbmRlci1zZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBHZW9Qb2ludCwgU2VhcmNoQ29uZmlnLCBTdG9yZUZpbmRlclNlYXJjaFF1ZXJ5LCBTdG9yZUZpbmRlclNlcnZpY2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTdG9yZUZpbmRlclNlYXJjaFJlc3VsdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIHN0b3JlRmluZGVyU2VydmljZTtcbiAgICBwcml2YXRlIHJvdXRlO1xuICAgIGxvY2F0aW9uczogYW55O1xuICAgIHNlYXJjaFF1ZXJ5OiBTdG9yZUZpbmRlclNlYXJjaFF1ZXJ5O1xuICAgIGxvY2F0aW9ucyQ6IE9ic2VydmFibGU8YW55PjtcbiAgICBpc0xvYWRpbmckOiBPYnNlcnZhYmxlPGFueT47XG4gICAgZ2VvbG9jYXRpb246IEdlb1BvaW50O1xuICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIHVzZU15TG9jYXRpb246IGJvb2xlYW47XG4gICAgY291bnRyeUNvZGU6IHN0cmluZztcbiAgICBzZWFyY2hDb25maWc6IFNlYXJjaENvbmZpZztcbiAgICBjb25zdHJ1Y3RvcihzdG9yZUZpbmRlclNlcnZpY2U6IFN0b3JlRmluZGVyU2VydmljZSwgcm91dGU6IEFjdGl2YXRlZFJvdXRlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgdmlld1BhZ2UocGFnZU51bWJlcjogbnVtYmVyKTogdm9pZDtcbiAgICBwcml2YXRlIGluaXRpYWxpemU7XG4gICAgcHJpdmF0ZSBwYXJzZVBhcmFtZXRlcnM7XG59XG4iXX0=