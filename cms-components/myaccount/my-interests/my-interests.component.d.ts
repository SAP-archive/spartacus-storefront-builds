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

//# sourceMappingURL=my-interests.component.d.ts.map