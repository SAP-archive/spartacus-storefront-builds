import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GeoPoint, SearchConfig, StoreFinderSearchQuery, StoreFinderService, StoreFinderConfig } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class StoreFinderSearchResultComponent implements OnInit, OnDestroy {
    private storeFinderService;
    private route;
    protected config: StoreFinderConfig;
    locations: any;
    subscription: Subscription;
    useMyLocation: boolean;
    countryCode: string;
    searchConfig: SearchConfig;
    radius: number;
    searchQuery: StoreFinderSearchQuery;
    geolocation: GeoPoint;
    locations$: Observable<any>;
    isLoading$: Observable<any>;
    constructor(storeFinderService: StoreFinderService, route: ActivatedRoute, config: StoreFinderConfig);
    ngOnInit(): void;
    ngOnDestroy(): void;
    viewPage(pageNumber: number): void;
    private initialize;
    private parseParameters;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StoreFinderSearchResultComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StoreFinderSearchResultComponent, "cx-store-finder-search-result", never, {}, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXNlYXJjaC1yZXN1bHQuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInN0b3JlLWZpbmRlci1zZWFyY2gtcmVzdWx0LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEdlb1BvaW50LCBTZWFyY2hDb25maWcsIFN0b3JlRmluZGVyU2VhcmNoUXVlcnksIFN0b3JlRmluZGVyU2VydmljZSwgU3RvcmVGaW5kZXJDb25maWcgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTdG9yZUZpbmRlclNlYXJjaFJlc3VsdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIHN0b3JlRmluZGVyU2VydmljZTtcbiAgICBwcml2YXRlIHJvdXRlO1xuICAgIHByb3RlY3RlZCBjb25maWc6IFN0b3JlRmluZGVyQ29uZmlnO1xuICAgIGxvY2F0aW9uczogYW55O1xuICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIHVzZU15TG9jYXRpb246IGJvb2xlYW47XG4gICAgY291bnRyeUNvZGU6IHN0cmluZztcbiAgICBzZWFyY2hDb25maWc6IFNlYXJjaENvbmZpZztcbiAgICByYWRpdXM6IG51bWJlcjtcbiAgICBzZWFyY2hRdWVyeTogU3RvcmVGaW5kZXJTZWFyY2hRdWVyeTtcbiAgICBnZW9sb2NhdGlvbjogR2VvUG9pbnQ7XG4gICAgbG9jYXRpb25zJDogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8YW55PjtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZUZpbmRlclNlcnZpY2U6IFN0b3JlRmluZGVyU2VydmljZSwgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCBjb25maWc6IFN0b3JlRmluZGVyQ29uZmlnKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG4gICAgdmlld1BhZ2UocGFnZU51bWJlcjogbnVtYmVyKTogdm9pZDtcbiAgICBwcml2YXRlIGluaXRpYWxpemU7XG4gICAgcHJpdmF0ZSBwYXJzZVBhcmFtZXRlcnM7XG59XG4iXX0=