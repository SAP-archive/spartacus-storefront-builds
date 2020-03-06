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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLWdyaWQuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbInN0b3JlLWZpbmRlci1ncmlkLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7O0FBV0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN0b3JlRmluZGVyU2VydmljZSwgR2VvUG9pbnQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU3RvcmVGaW5kZXJHcmlkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgc3RvcmVGaW5kZXJTZXJ2aWNlO1xuICAgIHByaXZhdGUgcm91dGU7XG4gICAgbG9jYXRpb25zJDogYW55O1xuICAgIGlzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgZGVmYXVsdExvY2F0aW9uOiBHZW9Qb2ludDtcbiAgICBjb3VudHJ5OiBzdHJpbmc7XG4gICAgcmVnaW9uOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3Ioc3RvcmVGaW5kZXJTZXJ2aWNlOiBTdG9yZUZpbmRlclNlcnZpY2UsIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19