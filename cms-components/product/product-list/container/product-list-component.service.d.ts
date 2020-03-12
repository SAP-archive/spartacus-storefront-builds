import { ActivatedRoute, Router } from '@angular/router';
import { CurrencyService, LanguageService, ProductSearchPage, ProductSearchService, RoutingService } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductListComponentService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LWNvbXBvbmVudC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInByb2R1Y3QtbGlzdC1jb21wb25lbnQuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEN1cnJlbmN5U2VydmljZSwgTGFuZ3VhZ2VTZXJ2aWNlLCBQcm9kdWN0U2VhcmNoUGFnZSwgUHJvZHVjdFNlYXJjaFNlcnZpY2UsIFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlYXJjaFNlcnZpY2U6IFByb2R1Y3RTZWFyY2hTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCByb3V0aW5nOiBSb3V0aW5nU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlO1xuICAgIHByb3RlY3RlZCBjdXJyZW5jeVNlcnZpY2U6IEN1cnJlbmN5U2VydmljZTtcbiAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyO1xuICAgIHByb3RlY3RlZCBkZWZhdWx0UGFnZVNpemU6IG51bWJlcjtcbiAgICBwcm90ZWN0ZWQgc3ViOiBTdWJzY3JpcHRpb247XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IFJFTEVWQU5DRV9BTExDQVRFR09SSUVTID0gXCI6cmVsZXZhbmNlOmFsbENhdGVnb3JpZXM6XCI7XG4gICAgY29uc3RydWN0b3IocHJvZHVjdFNlYXJjaFNlcnZpY2U6IFByb2R1Y3RTZWFyY2hTZXJ2aWNlLCByb3V0aW5nOiBSb3V0aW5nU2VydmljZSwgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLCBjdXJyZW5jeVNlcnZpY2U6IEN1cnJlbmN5U2VydmljZSwgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsIHJvdXRlcjogUm91dGVyKTtcbiAgICBwcml2YXRlIHNlYXJjaFJlc3VsdHMkO1xuICAgIHByaXZhdGUgc2VhcmNoQnlSb3V0aW5nJDtcbiAgICAvKipcbiAgICAgKiBUaGlzIHN0cmVhbSBzaG91bGQgYmUgdXNlZCBvbmx5IG9uIHRoZSBQcm9kdWN0IExpc3RpbmcgUGFnZS5cbiAgICAgKlxuICAgICAqIEl0IG5vdCBvbmx5IGVtaXRzIHNlYXJjaCByZXN1bHRzLCBidXQgYWxzbyBwZXJmb3JtcyBhIHNlYXJjaCBvbiBldmVyeSBjaGFuZ2VcbiAgICAgKiBvZiB0aGUgcm91dGUgKGkuZS4gcm91dGUgcGFyYW1zIG9yIHF1ZXJ5IHBhcmFtcykuXG4gICAgICpcbiAgICAgKiBXaGVuIGEgdXNlciBsZWF2ZXMgdGhlIFBMUCByb3V0ZSwgdGhlIFBMUCBjb21wb25lbnQgdW5zdWJzY3JpYmVzIGZyb20gdGhpcyBzdHJlYW1cbiAgICAgKiBzbyBubyBsb25nZXIgdGhlIHNlYXJjaCBpcyBwZXJmb3JtZWQgb24gcm91dGUgY2hhbmdlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1vZGVsJDogT2JzZXJ2YWJsZTxQcm9kdWN0U2VhcmNoUGFnZT47XG4gICAgY2xlYXJTZWFyY2hSZXN1bHRzKCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBnZXRDcml0ZXJpYUZyb21Sb3V0ZTtcbiAgICBwcml2YXRlIGdldFF1ZXJ5RnJvbVJvdXRlUGFyYW1zO1xuICAgIHByaXZhdGUgc2VhcmNoO1xuICAgIHByaXZhdGUgZ2V0U2VhcmNoQ29uZmlnO1xuICAgIHNldFF1ZXJ5KHF1ZXJ5OiBzdHJpbmcpOiB2b2lkO1xuICAgIHZpZXdQYWdlKHBhZ2VOdW1iZXI6IG51bWJlcik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogR2V0IGl0ZW1zIGZyb20gYSBnaXZlbiBwYWdlIHdpdGhvdXQgdXNpbmcgbmF2aWdhdGlvblxuICAgICAqL1xuICAgIGdldFBhZ2VJdGVtcyhwYWdlTnVtYmVyOiBudW1iZXIpOiB2b2lkO1xuICAgIHNvcnQoc29ydENvZGU6IHN0cmluZyk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBzZXRRdWVyeVBhcmFtcztcbn1cbiJdfQ==