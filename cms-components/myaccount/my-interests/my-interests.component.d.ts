import { OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginationModel, Product, ProductInterestEntryRelation, ProductInterestSearchResult, ProductService, TranslationService, UserInterestsService } from '@spartacus/core';
import * as ɵngcc0 from '@angular/core';
interface ProductInterestSearchResultUI extends ProductInterestSearchResult {
    results?: (ProductInterestEntryRelation & {
        product$?: Observable<Product>;
    })[];
}
export declare class MyInterestsComponent implements OnInit, OnDestroy {
    private productInterestService;
    private translationService;
    private productService;
    private DEFAULT_PAGE_SIZE;
    private sortMapping;
    sort: string;
    sortOptions: {
        code: string;
        selected: boolean;
    }[];
    pagination: PaginationModel;
    interests$: Observable<ProductInterestSearchResultUI>;
    isRemoveDisabled$: Observable<boolean>;
    getInterestsloading$: Observable<boolean>;
    sortLabels: Observable<{
        byNameAsc: string;
        byNameDesc: string;
    }>;
    constructor(productInterestService: UserInterestsService, translationService: TranslationService, productService: ProductService);
    ngOnInit(): void;
    private getSortLabels;
    private getProduct;
    removeInterest(relation: ProductInterestEntryRelation & {
        product$?: Observable<Product>;
    }): void;
    sortChange(sort: string): void;
    pageChange(page: number): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MyInterestsComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MyInterestsComponent, "cx-my-interests", never, {}, {}, never, never>;
}
export {};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktaW50ZXJlc3RzLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJteS1pbnRlcmVzdHMuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBhZ2luYXRpb25Nb2RlbCwgUHJvZHVjdCwgUHJvZHVjdEludGVyZXN0RW50cnlSZWxhdGlvbiwgUHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0LCBQcm9kdWN0U2VydmljZSwgVHJhbnNsYXRpb25TZXJ2aWNlLCBVc2VySW50ZXJlc3RzU2VydmljZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbnRlcmZhY2UgUHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0VUkgZXh0ZW5kcyBQcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHQge1xuICAgIHJlc3VsdHM/OiAoUHJvZHVjdEludGVyZXN0RW50cnlSZWxhdGlvbiAmIHtcbiAgICAgICAgcHJvZHVjdCQ/OiBPYnNlcnZhYmxlPFByb2R1Y3Q+O1xuICAgIH0pW107XG59XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBNeUludGVyZXN0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIHByb2R1Y3RJbnRlcmVzdFNlcnZpY2U7XG4gICAgcHJpdmF0ZSB0cmFuc2xhdGlvblNlcnZpY2U7XG4gICAgcHJpdmF0ZSBwcm9kdWN0U2VydmljZTtcbiAgICBwcml2YXRlIERFRkFVTFRfUEFHRV9TSVpFO1xuICAgIHByaXZhdGUgc29ydE1hcHBpbmc7XG4gICAgc29ydDogc3RyaW5nO1xuICAgIHNvcnRPcHRpb25zOiB7XG4gICAgICAgIGNvZGU6IHN0cmluZztcbiAgICAgICAgc2VsZWN0ZWQ6IGJvb2xlYW47XG4gICAgfVtdO1xuICAgIHBhZ2luYXRpb246IFBhZ2luYXRpb25Nb2RlbDtcbiAgICBpbnRlcmVzdHMkOiBPYnNlcnZhYmxlPFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdFVJPjtcbiAgICBpc1JlbW92ZURpc2FibGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBnZXRJbnRlcmVzdHNsb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBzb3J0TGFiZWxzOiBPYnNlcnZhYmxlPHtcbiAgICAgICAgYnlOYW1lQXNjOiBzdHJpbmc7XG4gICAgICAgIGJ5TmFtZURlc2M6IHN0cmluZztcbiAgICB9PjtcbiAgICBjb25zdHJ1Y3Rvcihwcm9kdWN0SW50ZXJlc3RTZXJ2aWNlOiBVc2VySW50ZXJlc3RzU2VydmljZSwgdHJhbnNsYXRpb25TZXJ2aWNlOiBUcmFuc2xhdGlvblNlcnZpY2UsIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBwcml2YXRlIGdldFNvcnRMYWJlbHM7XG4gICAgcHJpdmF0ZSBnZXRQcm9kdWN0O1xuICAgIHJlbW92ZUludGVyZXN0KHJlbGF0aW9uOiBQcm9kdWN0SW50ZXJlc3RFbnRyeVJlbGF0aW9uICYge1xuICAgICAgICBwcm9kdWN0JD86IE9ic2VydmFibGU8UHJvZHVjdD47XG4gICAgfSk6IHZvaWQ7XG4gICAgc29ydENoYW5nZShzb3J0OiBzdHJpbmcpOiB2b2lkO1xuICAgIHBhZ2VDaGFuZ2UocGFnZTogbnVtYmVyKTogdm9pZDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuZXhwb3J0IHt9O1xuIl19