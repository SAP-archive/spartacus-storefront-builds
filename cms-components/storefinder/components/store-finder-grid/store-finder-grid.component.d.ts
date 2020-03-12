import { OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreFinderService, GeoPoint } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StoreFinderGridComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<StoreFinderGridComponent, "cx-store-finder-grid", never, {}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWdyaWQuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInN0b3JlLWZpbmRlci1ncmlkLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7O0FBV0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJTZXJ2aWNlLCBHZW9Qb2ludCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTdG9yZUZpbmRlckdyaWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJpdmF0ZSBzdG9yZUZpbmRlclNlcnZpY2U7XG4gICAgcHJpdmF0ZSByb3V0ZTtcbiAgICBsb2NhdGlvbnMkOiBhbnk7XG4gICAgaXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBkZWZhdWx0TG9jYXRpb246IEdlb1BvaW50O1xuICAgIGNvdW50cnk6IHN0cmluZztcbiAgICByZWdpb246IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihzdG9yZUZpbmRlclNlcnZpY2U6IFN0b3JlRmluZGVyU2VydmljZSwgcm91dGU6IEFjdGl2YXRlZFJvdXRlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=