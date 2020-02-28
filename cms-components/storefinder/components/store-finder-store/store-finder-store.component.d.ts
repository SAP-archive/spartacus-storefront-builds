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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLXN0b3JlLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJzdG9yZS1maW5kZXItc3RvcmUuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlRmluZGVyU2VydmljZSwgUG9pbnRPZlNlcnZpY2UsIFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uL21pc2MvaWNvbic7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTdG9yZUZpbmRlclN0b3JlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIHN0b3JlRmluZGVyU2VydmljZTtcbiAgICBwcml2YXRlIHJvdXRlO1xuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U7XG4gICAgbG9jYXRpb24kOiBPYnNlcnZhYmxlPGFueT47XG4gICAgaXNMb2FkaW5nJDogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIGljb25UeXBlczogdHlwZW9mIElDT05fVFlQRTtcbiAgICBsb2NhdGlvbjogUG9pbnRPZlNlcnZpY2U7XG4gICAgZGlzYWJsZU1hcDogYm9vbGVhbjtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZUZpbmRlclNlcnZpY2U6IFN0b3JlRmluZGVyU2VydmljZSwgcm91dGU6IEFjdGl2YXRlZFJvdXRlLCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgcmVxdWVzdFN0b3Jlc0RhdGEoKTogdm9pZDtcbiAgICBnb0JhY2soKTogdm9pZDtcbn1cbiJdfQ==