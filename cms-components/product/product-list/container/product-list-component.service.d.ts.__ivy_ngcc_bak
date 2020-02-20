import { ActivatedRoute, Router } from '@angular/router';
import { CurrencyService, LanguageService, ProductSearchPage, ProductSearchService, RoutingService } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
export declare class ProductListComponentService {
    protected productSearchService: ProductSearchService;
    protected routing: RoutingService;
    protected activatedRoute: ActivatedRoute;
    protected currencyService: CurrencyService;
    protected languageService: LanguageService;
    protected router: Router;
    protected defaultPageSize: number;
    protected sub: Subscription;
    protected readonly RELEVANCE_ALLCATEGORIES = ":relevance:allCategories:";
    constructor(productSearchService: ProductSearchService, routing: RoutingService, activatedRoute: ActivatedRoute, currencyService: CurrencyService, languageService: LanguageService, router: Router);
    private searchResults$;
    private searchByRouting$;
    /**
     * This stream should be used only on the Product Listing Page.
     *
     * It not only emits search results, but also performs a search on every change
     * of the route (i.e. route params or query params).
     *
     * When a user leaves the PLP route, the PLP component unsubscribes from this stream
     * so no longer the search is performed on route change.
     */
    readonly model$: Observable<ProductSearchPage>;
    clearSearchResults(): void;
    private getCriteriaFromRoute;
    private getQueryFromRouteParams;
    private search;
    private getSearchConfig;
    setQuery(query: string): void;
    viewPage(pageNumber: number): void;
    /**
     * Get items from a given page without using navigation
     */
    getPageItems(pageNumber: number): void;
    sort(sortCode: string): void;
    private setQueryParams;
}
