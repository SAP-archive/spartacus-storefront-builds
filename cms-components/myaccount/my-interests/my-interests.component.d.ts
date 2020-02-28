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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MyInterestsComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MyInterestsComponent, "cx-my-interests", never, {}, {}, never>;
}
export {};

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktaW50ZXJlc3RzLmNvbXBvbmVudC5kLnRzIiwic291cmNlcyI6WyJteS1pbnRlcmVzdHMuY29tcG9uZW50LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBOzsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUGFnaW5hdGlvbk1vZGVsLCBQcm9kdWN0LCBQcm9kdWN0SW50ZXJlc3RFbnRyeVJlbGF0aW9uLCBQcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHQsIFByb2R1Y3RTZXJ2aWNlLCBUcmFuc2xhdGlvblNlcnZpY2UsIFVzZXJJbnRlcmVzdHNTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmludGVyZmFjZSBQcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHRVSSBleHRlbmRzIFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdCB7XG4gICAgcmVzdWx0cz86IChQcm9kdWN0SW50ZXJlc3RFbnRyeVJlbGF0aW9uICYge1xuICAgICAgICBwcm9kdWN0JD86IE9ic2VydmFibGU8UHJvZHVjdD47XG4gICAgfSlbXTtcbn1cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE15SW50ZXJlc3RzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByaXZhdGUgcHJvZHVjdEludGVyZXN0U2VydmljZTtcbiAgICBwcml2YXRlIHRyYW5zbGF0aW9uU2VydmljZTtcbiAgICBwcml2YXRlIHByb2R1Y3RTZXJ2aWNlO1xuICAgIHByaXZhdGUgREVGQVVMVF9QQUdFX1NJWkU7XG4gICAgcHJpdmF0ZSBzb3J0TWFwcGluZztcbiAgICBzb3J0OiBzdHJpbmc7XG4gICAgc29ydE9wdGlvbnM6IHtcbiAgICAgICAgY29kZTogc3RyaW5nO1xuICAgICAgICBzZWxlY3RlZDogYm9vbGVhbjtcbiAgICB9W107XG4gICAgcGFnaW5hdGlvbjogUGFnaW5hdGlvbk1vZGVsO1xuICAgIGludGVyZXN0cyQ6IE9ic2VydmFibGU8UHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0VUk+O1xuICAgIGlzUmVtb3ZlRGlzYWJsZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGdldEludGVyZXN0c2xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIHNvcnRMYWJlbHM6IE9ic2VydmFibGU8e1xuICAgICAgICBieU5hbWVBc2M6IHN0cmluZztcbiAgICAgICAgYnlOYW1lRGVzYzogc3RyaW5nO1xuICAgIH0+O1xuICAgIGNvbnN0cnVjdG9yKHByb2R1Y3RJbnRlcmVzdFNlcnZpY2U6IFVzZXJJbnRlcmVzdHNTZXJ2aWNlLCB0cmFuc2xhdGlvblNlcnZpY2U6IFRyYW5zbGF0aW9uU2VydmljZSwgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIHByaXZhdGUgZ2V0U29ydExhYmVscztcbiAgICBwcml2YXRlIGdldFByb2R1Y3Q7XG4gICAgcmVtb3ZlSW50ZXJlc3QocmVsYXRpb246IFByb2R1Y3RJbnRlcmVzdEVudHJ5UmVsYXRpb24gJiB7XG4gICAgICAgIHByb2R1Y3QkPzogT2JzZXJ2YWJsZTxQcm9kdWN0PjtcbiAgICB9KTogdm9pZDtcbiAgICBzb3J0Q2hhbmdlKHNvcnQ6IHN0cmluZyk6IHZvaWQ7XG4gICAgcGFnZUNoYW5nZShwYWdlOiBudW1iZXIpOiB2b2lkO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG5leHBvcnQge307XG4iXX0=