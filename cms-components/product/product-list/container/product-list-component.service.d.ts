import { ActivatedRoute, Router } from '@angular/router';
import { ActivatedRouterStateSnapshot, CurrencyService, LanguageService, ProductSearchPage, ProductSearchService, RoutingService } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { ProductListRouteParams, SearchCriteria } from './product-list.model';
/**
 * The `ProductListComponentService` is used to search products. The service is used
 * on the Product Listing Page, for listing products and the facet navigation.
 *
 * The service exposes the product search results based on the category and search
 * route parameters. The route parameters are used to query products by the help of
 * the `ProductSearchService`.
 */
import * as ɵngcc0 from '@angular/core';
export declare class ProductListComponentService {
    protected productSearchService: ProductSearchService;
    protected routing: RoutingService;
    protected activatedRoute: ActivatedRoute;
    protected currencyService: CurrencyService;
    protected languageService: LanguageService;
    protected router: Router;
    /**
     * @deprecated will be removed in version 3.0 as this is the
     *   subscription is longer used
     */
    protected sub: Subscription;
    protected defaultPageSize: number;
    protected readonly RELEVANCE_ALLCATEGORIES = ":relevance:allCategories:";
    constructor(productSearchService: ProductSearchService, routing: RoutingService, activatedRoute: ActivatedRoute, currencyService: CurrencyService, languageService: LanguageService, router: Router);
    /**
     * Emits the search results for the current search query.
     *
     * The `searchResults$` is _not_ concerned with querying, it only observes the
     * `productSearchService.getResults()`
     */
    protected searchResults$: Observable<ProductSearchPage>;
    /**
     * Observes the route and performs a search on each route change.
     *
     * Context changes, such as language and currencies are also taken
     * into account, so that the search is performed again.
     */
    protected searchByRouting$: Observable<ActivatedRouterStateSnapshot>;
    /**
     * This stream is used for the Product Listing and Product Facets.
     *
     * It not only emits search results, but also performs a search on every change
     * of the route (i.e. route params or query params).
     *
     * When a user leaves the PLP route, the PLP component unsubscribes from this stream
     * so no longer the search is performed on route change.
     */
    readonly model$: Observable<ProductSearchPage>;
    /**
     * Expose the `SearchCriteria`. The search criteria are driven by the route parameters.
     *
     * This search route configuration is not yet configurable
     * (see https://github.com/SAP/spartacus/issues/7191).
     */
    protected getCriteriaFromRoute(routeParams: ProductListRouteParams, queryParams: SearchCriteria): SearchCriteria;
    /**
     * Resolves the search query from the given `ProductListRouteParams`.
     */
    protected getQueryFromRouteParams({ query, categoryCode, brandCode, }: ProductListRouteParams): string;
    /**
     * Performs a search based on the given search criteria.
     *
     * The search is delegated to the `ProductSearchService`.
     */
    protected search(criteria: SearchCriteria): void;
    /**
     * Get items from a given page without using navigation
     */
    getPageItems(pageNumber: number): void;
    /**
     * Sort the search results by the given sort code.
     */
    sort(sortCode: string): void;
    /**
     * Routes to the next product listing page, using the given `queryParams`. The
     * `queryParams` support sorting, pagination and querying.
     *
     * The `queryParams` are delegated to the Angular router `NavigationExtras`.
     */
    protected route(queryParams: SearchCriteria): void;
    /**
     * The site context is used to update the search query in case of a
     * changing context. The context will typically influence the search data.
     *
     * We keep this private for now, as we're likely refactoring this in the next
     * major version.
     */
    private get siteContext();
    /**
     * @deprecated will be dropped in version 3.0 as it's no longer in use
     */
    setQuery(query: string): void;
    /**
     * @deprecated will be dropped in version 3.0 as it's no longer in use
     */
    viewPage(pageNumber: number): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductListComponentService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LWNvbXBvbmVudC5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInByb2R1Y3QtbGlzdC1jb21wb25lbnQuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0FBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1RkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3QsIEN1cnJlbmN5U2VydmljZSwgTGFuZ3VhZ2VTZXJ2aWNlLCBQcm9kdWN0U2VhcmNoUGFnZSwgUHJvZHVjdFNlYXJjaFNlcnZpY2UsIFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJvZHVjdExpc3RSb3V0ZVBhcmFtcywgU2VhcmNoQ3JpdGVyaWEgfSBmcm9tICcuL3Byb2R1Y3QtbGlzdC5tb2RlbCc7XG4vKipcbiAqIFRoZSBgUHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlYCBpcyB1c2VkIHRvIHNlYXJjaCBwcm9kdWN0cy4gVGhlIHNlcnZpY2UgaXMgdXNlZFxuICogb24gdGhlIFByb2R1Y3QgTGlzdGluZyBQYWdlLCBmb3IgbGlzdGluZyBwcm9kdWN0cyBhbmQgdGhlIGZhY2V0IG5hdmlnYXRpb24uXG4gKlxuICogVGhlIHNlcnZpY2UgZXhwb3NlcyB0aGUgcHJvZHVjdCBzZWFyY2ggcmVzdWx0cyBiYXNlZCBvbiB0aGUgY2F0ZWdvcnkgYW5kIHNlYXJjaFxuICogcm91dGUgcGFyYW1ldGVycy4gVGhlIHJvdXRlIHBhcmFtZXRlcnMgYXJlIHVzZWQgdG8gcXVlcnkgcHJvZHVjdHMgYnkgdGhlIGhlbHAgb2ZcbiAqIHRoZSBgUHJvZHVjdFNlYXJjaFNlcnZpY2VgLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VhcmNoU2VydmljZTogUHJvZHVjdFNlYXJjaFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHJvdXRpbmc6IFJvdXRpbmdTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGU7XG4gICAgcHJvdGVjdGVkIGN1cnJlbmN5U2VydmljZTogQ3VycmVuY3lTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXI7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgd2lsbCBiZSByZW1vdmVkIGluIHZlcnNpb24gMy4wIGFzIHRoaXMgaXMgdGhlXG4gICAgICogICBzdWJzY3JpcHRpb24gaXMgbG9uZ2VyIHVzZWRcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc3ViOiBTdWJzY3JpcHRpb247XG4gICAgcHJvdGVjdGVkIGRlZmF1bHRQYWdlU2l6ZTogbnVtYmVyO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBSRUxFVkFOQ0VfQUxMQ0FURUdPUklFUyA9IFwiOnJlbGV2YW5jZTphbGxDYXRlZ29yaWVzOlwiO1xuICAgIGNvbnN0cnVjdG9yKHByb2R1Y3RTZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZSwgcm91dGluZzogUm91dGluZ1NlcnZpY2UsIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSwgY3VycmVuY3lTZXJ2aWNlOiBDdXJyZW5jeVNlcnZpY2UsIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLCByb3V0ZXI6IFJvdXRlcik7XG4gICAgLyoqXG4gICAgICogRW1pdHMgdGhlIHNlYXJjaCByZXN1bHRzIGZvciB0aGUgY3VycmVudCBzZWFyY2ggcXVlcnkuXG4gICAgICpcbiAgICAgKiBUaGUgYHNlYXJjaFJlc3VsdHMkYCBpcyBfbm90XyBjb25jZXJuZWQgd2l0aCBxdWVyeWluZywgaXQgb25seSBvYnNlcnZlcyB0aGVcbiAgICAgKiBgcHJvZHVjdFNlYXJjaFNlcnZpY2UuZ2V0UmVzdWx0cygpYFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzZWFyY2hSZXN1bHRzJDogT2JzZXJ2YWJsZTxQcm9kdWN0U2VhcmNoUGFnZT47XG4gICAgLyoqXG4gICAgICogT2JzZXJ2ZXMgdGhlIHJvdXRlIGFuZCBwZXJmb3JtcyBhIHNlYXJjaCBvbiBlYWNoIHJvdXRlIGNoYW5nZS5cbiAgICAgKlxuICAgICAqIENvbnRleHQgY2hhbmdlcywgc3VjaCBhcyBsYW5ndWFnZSBhbmQgY3VycmVuY2llcyBhcmUgYWxzbyB0YWtlblxuICAgICAqIGludG8gYWNjb3VudCwgc28gdGhhdCB0aGUgc2VhcmNoIGlzIHBlcmZvcm1lZCBhZ2Fpbi5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgc2VhcmNoQnlSb3V0aW5nJDogT2JzZXJ2YWJsZTxBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90PjtcbiAgICAvKipcbiAgICAgKiBUaGlzIHN0cmVhbSBpcyB1c2VkIGZvciB0aGUgUHJvZHVjdCBMaXN0aW5nIGFuZCBQcm9kdWN0IEZhY2V0cy5cbiAgICAgKlxuICAgICAqIEl0IG5vdCBvbmx5IGVtaXRzIHNlYXJjaCByZXN1bHRzLCBidXQgYWxzbyBwZXJmb3JtcyBhIHNlYXJjaCBvbiBldmVyeSBjaGFuZ2VcbiAgICAgKiBvZiB0aGUgcm91dGUgKGkuZS4gcm91dGUgcGFyYW1zIG9yIHF1ZXJ5IHBhcmFtcykuXG4gICAgICpcbiAgICAgKiBXaGVuIGEgdXNlciBsZWF2ZXMgdGhlIFBMUCByb3V0ZSwgdGhlIFBMUCBjb21wb25lbnQgdW5zdWJzY3JpYmVzIGZyb20gdGhpcyBzdHJlYW1cbiAgICAgKiBzbyBubyBsb25nZXIgdGhlIHNlYXJjaCBpcyBwZXJmb3JtZWQgb24gcm91dGUgY2hhbmdlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1vZGVsJDogT2JzZXJ2YWJsZTxQcm9kdWN0U2VhcmNoUGFnZT47XG4gICAgLyoqXG4gICAgICogRXhwb3NlIHRoZSBgU2VhcmNoQ3JpdGVyaWFgLiBUaGUgc2VhcmNoIGNyaXRlcmlhIGFyZSBkcml2ZW4gYnkgdGhlIHJvdXRlIHBhcmFtZXRlcnMuXG4gICAgICpcbiAgICAgKiBUaGlzIHNlYXJjaCByb3V0ZSBjb25maWd1cmF0aW9uIGlzIG5vdCB5ZXQgY29uZmlndXJhYmxlXG4gICAgICogKHNlZSBodHRwczovL2dpdGh1Yi5jb20vU0FQL3NwYXJ0YWN1cy9pc3N1ZXMvNzE5MSkuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldENyaXRlcmlhRnJvbVJvdXRlKHJvdXRlUGFyYW1zOiBQcm9kdWN0TGlzdFJvdXRlUGFyYW1zLCBxdWVyeVBhcmFtczogU2VhcmNoQ3JpdGVyaWEpOiBTZWFyY2hDcml0ZXJpYTtcbiAgICAvKipcbiAgICAgKiBSZXNvbHZlcyB0aGUgc2VhcmNoIHF1ZXJ5IGZyb20gdGhlIGdpdmVuIGBQcm9kdWN0TGlzdFJvdXRlUGFyYW1zYC5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0UXVlcnlGcm9tUm91dGVQYXJhbXMoeyBxdWVyeSwgY2F0ZWdvcnlDb2RlLCBicmFuZENvZGUsIH06IFByb2R1Y3RMaXN0Um91dGVQYXJhbXMpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBzZWFyY2ggYmFzZWQgb24gdGhlIGdpdmVuIHNlYXJjaCBjcml0ZXJpYS5cbiAgICAgKlxuICAgICAqIFRoZSBzZWFyY2ggaXMgZGVsZWdhdGVkIHRvIHRoZSBgUHJvZHVjdFNlYXJjaFNlcnZpY2VgLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzZWFyY2goY3JpdGVyaWE6IFNlYXJjaENyaXRlcmlhKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBHZXQgaXRlbXMgZnJvbSBhIGdpdmVuIHBhZ2Ugd2l0aG91dCB1c2luZyBuYXZpZ2F0aW9uXG4gICAgICovXG4gICAgZ2V0UGFnZUl0ZW1zKHBhZ2VOdW1iZXI6IG51bWJlcik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogU29ydCB0aGUgc2VhcmNoIHJlc3VsdHMgYnkgdGhlIGdpdmVuIHNvcnQgY29kZS5cbiAgICAgKi9cbiAgICBzb3J0KHNvcnRDb2RlOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJvdXRlcyB0byB0aGUgbmV4dCBwcm9kdWN0IGxpc3RpbmcgcGFnZSwgdXNpbmcgdGhlIGdpdmVuIGBxdWVyeVBhcmFtc2AuIFRoZVxuICAgICAqIGBxdWVyeVBhcmFtc2Agc3VwcG9ydCBzb3J0aW5nLCBwYWdpbmF0aW9uIGFuZCBxdWVyeWluZy5cbiAgICAgKlxuICAgICAqIFRoZSBgcXVlcnlQYXJhbXNgIGFyZSBkZWxlZ2F0ZWQgdG8gdGhlIEFuZ3VsYXIgcm91dGVyIGBOYXZpZ2F0aW9uRXh0cmFzYC5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgcm91dGUocXVlcnlQYXJhbXM6IFNlYXJjaENyaXRlcmlhKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBUaGUgc2l0ZSBjb250ZXh0IGlzIHVzZWQgdG8gdXBkYXRlIHRoZSBzZWFyY2ggcXVlcnkgaW4gY2FzZSBvZiBhXG4gICAgICogY2hhbmdpbmcgY29udGV4dC4gVGhlIGNvbnRleHQgd2lsbCB0eXBpY2FsbHkgaW5mbHVlbmNlIHRoZSBzZWFyY2ggZGF0YS5cbiAgICAgKlxuICAgICAqIFdlIGtlZXAgdGhpcyBwcml2YXRlIGZvciBub3csIGFzIHdlJ3JlIGxpa2VseSByZWZhY3RvcmluZyB0aGlzIGluIHRoZSBuZXh0XG4gICAgICogbWFqb3IgdmVyc2lvbi5cbiAgICAgKi9cbiAgICBwcml2YXRlIGdldCBzaXRlQ29udGV4dCgpO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHdpbGwgYmUgZHJvcHBlZCBpbiB2ZXJzaW9uIDMuMCBhcyBpdCdzIG5vIGxvbmdlciBpbiB1c2VcbiAgICAgKi9cbiAgICBzZXRRdWVyeShxdWVyeTogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCB3aWxsIGJlIGRyb3BwZWQgaW4gdmVyc2lvbiAzLjAgYXMgaXQncyBubyBsb25nZXIgaW4gdXNlXG4gICAgICovXG4gICAgdmlld1BhZ2UocGFnZU51bWJlcjogbnVtYmVyKTogdm9pZDtcbn1cbiJdfQ==