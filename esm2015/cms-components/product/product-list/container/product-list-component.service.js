import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrencyService, LanguageService, ProductSearchService, RoutingService, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, pluck, shareReplay, tap, } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "@angular/router";
/**
 * The `ProductListComponentService` is used to search products. The service is used
 * on the Product Listing Page, for listing products and the facet navigation.
 *
 * The service exposes the product search results based on the category and search
 * route parameters. The route parameters are used to query products by the help of
 * the `ProductSearchService`.
 */
export class ProductListComponentService {
    constructor(productSearchService, routing, activatedRoute, currencyService, languageService, router) {
        this.productSearchService = productSearchService;
        this.routing = routing;
        this.activatedRoute = activatedRoute;
        this.currencyService = currencyService;
        this.languageService = languageService;
        this.router = router;
        // TODO: make it configurable
        this.defaultPageSize = 10;
        this.RELEVANCE_ALLCATEGORIES = ':relevance:allCategories:';
        /**
         * Emits the search results for the current search query.
         *
         * The `searchResults$` is _not_ concerned with querying, it only observes the
         * `productSearchService.getResults()`
         */
        this.searchResults$ = this.productSearchService
            .getResults()
            .pipe(filter((searchResult) => Object.keys(searchResult).length > 0));
        /**
         * Observes the route and performs a search on each route change.
         *
         * Context changes, such as language and currencies are also taken
         * into account, so that the search is performed again.
         */
        this.searchByRouting$ = combineLatest([
            this.routing.getRouterState().pipe(distinctUntilChanged((x, y) => {
                // router emits new value also when the anticipated `nextState` changes
                // but we want to perform search only when current url changes
                return x.state.url === y.state.url;
            })),
            ...this.siteContext,
        ]).pipe(debounceTime(0), map(([routerState, ..._context]) => routerState.state), tap((state) => {
            const criteria = this.getCriteriaFromRoute(state.params, state.queryParams);
            this.search(criteria);
        }));
        /**
         * This stream is used for the Product Listing and Product Facets.
         *
         * It not only emits search results, but also performs a search on every change
         * of the route (i.e. route params or query params).
         *
         * When a user leaves the PLP route, the PLP component unsubscribes from this stream
         * so no longer the search is performed on route change.
         */
        this.model$ = combineLatest([
            this.searchResults$,
            this.searchByRouting$,
        ]).pipe(pluck(0), shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * Expose the `SearchCriteria`. The search criteria are driven by the route parameters.
     *
     * This search route configuration is not yet configurable
     * (see https://github.com/SAP/spartacus/issues/7191).
     */
    getCriteriaFromRoute(routeParams, queryParams) {
        return {
            query: queryParams.query || this.getQueryFromRouteParams(routeParams),
            pageSize: queryParams.pageSize || this.defaultPageSize,
            currentPage: queryParams.currentPage,
            sortCode: queryParams.sortCode,
        };
    }
    /**
     * Resolves the search query from the given `ProductListRouteParams`.
     */
    getQueryFromRouteParams({ query, categoryCode, brandCode, }) {
        if (query) {
            return query;
        }
        if (categoryCode) {
            return this.RELEVANCE_ALLCATEGORIES + categoryCode;
        }
        // TODO: drop support for brands as they should be treated
        // similarly as any category.
        if (brandCode) {
            return this.RELEVANCE_ALLCATEGORIES + brandCode;
        }
    }
    /**
     * Performs a search based on the given search criteria.
     *
     * The search is delegated to the `ProductSearchService`.
     */
    search(criteria) {
        const currentPage = criteria.currentPage;
        const pageSize = criteria.pageSize;
        const sort = criteria.sortCode;
        this.productSearchService.search(criteria.query, 
        // TODO: consider dropping this complex passing of cleaned object
        Object.assign({}, currentPage && { currentPage }, pageSize && { pageSize }, sort && { sort }));
    }
    /**
     * Get items from a given page without using navigation
     */
    getPageItems(pageNumber) {
        this.routing
            .getRouterState()
            .subscribe((route) => {
            const routeCriteria = this.getCriteriaFromRoute(route.state.params, route.state.queryParams);
            const criteria = Object.assign(Object.assign({}, routeCriteria), { currentPage: pageNumber });
            this.search(criteria);
        })
            .unsubscribe();
    }
    /**
     * Sort the search results by the given sort code.
     */
    sort(sortCode) {
        this.route({ sortCode });
    }
    /**
     * Routes to the next product listing page, using the given `queryParams`. The
     * `queryParams` support sorting, pagination and querying.
     *
     * The `queryParams` are delegated to the Angular router `NavigationExtras`.
     */
    route(queryParams) {
        this.router.navigate([], {
            queryParams,
            queryParamsHandling: 'merge',
            relativeTo: this.activatedRoute,
        });
    }
    /**
     * The site context is used to update the search query in case of a
     * changing context. The context will typically influence the search data.
     *
     * We keep this private for now, as we're likely refactoring this in the next
     * major version.
     */
    get siteContext() {
        // TODO: we should refactor this so that custom context will be taken
        // into account automatically. Ideally, we drop the specific context
        // from the constructor, and query a ContextService for all contexts.
        return [this.languageService.getActive(), this.currencyService.getActive()];
    }
    /**
     * @deprecated will be dropped in version 3.0 as it's no longer in use
     */
    setQuery(query) {
        this.route({ query, currentPage: undefined });
    }
    /**
     * @deprecated will be dropped in version 3.0 as it's no longer in use
     */
    viewPage(pageNumber) {
        this.route({ currentPage: pageNumber });
    }
}
ProductListComponentService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductListComponentService_Factory() { return new ProductListComponentService(i0.ɵɵinject(i1.ProductSearchService), i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.ActivatedRoute), i0.ɵɵinject(i1.CurrencyService), i0.ɵɵinject(i1.LanguageService), i0.ɵɵinject(i2.Router)); }, token: ProductListComponentService, providedIn: "root" });
ProductListComponentService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
ProductListComponentService.ctorParameters = () => [
    { type: ProductSearchService },
    { type: RoutingService },
    { type: ActivatedRoute },
    { type: CurrencyService },
    { type: LanguageService },
    { type: Router }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWxpc3QvY29udGFpbmVyL3Byb2R1Y3QtbGlzdC1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUVMLGVBQWUsRUFDZixlQUFlLEVBRWYsb0JBQW9CLEVBRXBCLGNBQWMsR0FDZixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQTRCLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFDTCxZQUFZLEVBQ1osb0JBQW9CLEVBQ3BCLE1BQU0sRUFDTixHQUFHLEVBQ0gsS0FBSyxFQUNMLFdBQVcsRUFDWCxHQUFHLEdBQ0osTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUd4Qjs7Ozs7OztHQU9HO0FBRUgsTUFBTSxPQUFPLDJCQUEyQjtJQVl0QyxZQUNZLG9CQUEwQyxFQUMxQyxPQUF1QixFQUN2QixjQUE4QixFQUM5QixlQUFnQyxFQUNoQyxlQUFnQyxFQUNoQyxNQUFjO1FBTGQseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBWDFCLDZCQUE2QjtRQUNuQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUVaLDRCQUF1QixHQUFHLDJC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LFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsUUFBUSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxRQUFRLENBQUMsVUFBa0I7UUFDekIsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7WUEvTUYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7O1lBeEJoQyxvQkFBb0I7WUFFcEIsY0FBYztZQVJQLGNBQWM7WUFHckIsZUFBZTtZQUNmLGVBQWU7WUFKUSxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuICBDdXJyZW5jeVNlcnZpY2UsXG4gIExhbmd1YWdlU2VydmljZSxcbiAgUHJvZHVjdFNlYXJjaFBhZ2UsXG4gIFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICBSb3V0ZXJTdGF0ZSxcbiAgUm91dGluZ1NlcnZpY2UsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlYm91bmNlVGltZSxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIGZpbHRlcixcbiAgbWFwLFxuICBwbHVjayxcbiAgc2hhcmVSZXBsYXksXG4gIHRhcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJvZHVjdExpc3RSb3V0ZVBhcmFtcywgU2VhcmNoQ3JpdGVyaWEgfSBmcm9tICcuL3Byb2R1Y3QtbGlzdC5tb2RlbCc7XG5cbi8qKlxuICogVGhlIGBQcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2VgIGlzIHVzZWQgdG8gc2VhcmNoIHByb2R1Y3RzLiBUaGUgc2VydmljZSBpcyB1c2VkXG4gKiBvbiB0aGUgUHJvZHVjdCBMaXN0aW5nIFBhZ2UsIGZvciBsaXN0aW5nIHByb2R1Y3RzIGFuZCB0aGUgZmFjZXQgbmF2aWdhdGlvbi5cbiAqXG4gKiBUaGUgc2VydmljZSBleHBvc2VzIHRoZSBwcm9kdWN0IHNlYXJjaCByZXN1bHRzIGJhc2VkIG9uIHRoZSBjYXRlZ29yeSBhbmQgc2VhcmNoXG4gKiByb3V0ZSBwYXJhbWV0ZXJzLiBUaGUgcm91dGUgcGFyYW1ldGVycyBhcmUgdXNlZCB0byBxdWVyeSBwcm9kdWN0cyBieSB0aGUgaGVscCBvZlxuICogdGhlIGBQcm9kdWN0U2VhcmNoU2VydmljZWAuXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHdpbGwgYmUgcmVtb3ZlZCBpbiB2ZXJzaW9uIDMuMCBhcyB0aGlzIGlzIHRoZVxuICAgKiAgIHN1YnNjcmlwdGlvbiBpcyBsb25nZXIgdXNlZFxuICAgKi9cbiAgcHJvdGVjdGVkIHN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIC8vIFRPRE86IG1ha2UgaXQgY29uZmlndXJhYmxlXG4gIHByb3RlY3RlZCBkZWZhdWx0UGFnZVNpemUgPSAxMDtcblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgUkVMRVZBTkNFX0FMTENBVEVHT1JJRVMgPSAnOnJlbGV2YW5jZTphbGxDYXRlZ29yaWVzOic7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZzogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcm90ZWN0ZWQgY3VycmVuY3lTZXJ2aWNlOiBDdXJyZW5jeVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlclxuICApIHt9XG5cbiAgLyoqXG4gICAqIEVtaXRzIHRoZSBzZWFyY2ggcmVzdWx0cyBmb3IgdGhlIGN1cnJlbnQgc2VhcmNoIHF1ZXJ5LlxuICAgKlxuICAgKiBUaGUgYHNlYXJjaFJlc3VsdHMkYCBpcyBfbm90XyBjb25jZXJuZWQgd2l0aCBxdWVyeWluZywgaXQgb25seSBvYnNlcnZlcyB0aGVcbiAgICogYHByb2R1Y3RTZWFyY2hTZXJ2aWNlLmdldFJlc3VsdHMoKWBcbiAgICovXG4gIHByb3RlY3RlZCBzZWFyY2hSZXN1bHRzJDogT2JzZXJ2YWJsZTxcbiAgICBQcm9kdWN0U2VhcmNoUGFnZVxuICA+ID0gdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZVxuICAgIC5nZXRSZXN1bHRzKClcbiAgICAucGlwZShmaWx0ZXIoKHNlYXJjaFJlc3VsdCkgPT4gT2JqZWN0LmtleXMoc2VhcmNoUmVzdWx0KS5sZW5ndGggPiAwKSk7XG5cbiAgLyoqXG4gICAqIE9ic2VydmVzIHRoZSByb3V0ZSBhbmQgcGVyZm9ybXMgYSBzZWFyY2ggb24gZWFjaCByb3V0ZSBjaGFuZ2UuXG4gICAqXG4gICAqIENvbnRleHQgY2hhbmdlcywgc3VjaCBhcyBsYW5ndWFnZSBhbmQgY3VycmVuY2llcyBhcmUgYWxzbyB0YWtlblxuICAgKiBpbnRvIGFjY291bnQsIHNvIHRoYXQgdGhlIHNlYXJjaCBpcyBwZXJmb3JtZWQgYWdhaW4uXG4gICAqL1xuICBwcm90ZWN0ZWQgc2VhcmNoQnlSb3V0aW5nJDogT2JzZXJ2YWJsZTxcbiAgICBBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90XG4gID4gPSBjb21iaW5lTGF0ZXN0KFtcbiAgICB0aGlzLnJvdXRpbmcuZ2V0Um91dGVyU3RhdGUoKS5waXBlKFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKHgsIHkpID0+IHtcbiAgICAgICAgLy8gcm91dGVyIGVtaXRzIG5ldyB2YWx1ZSBhbHNvIHdoZW4gdGhlIGFudGljaXBhdGVkIGBuZXh0U3RhdGVgIGNoYW5nZXNcbiAgICAgICAgLy8gYnV0IHdlIHdhbnQgdG8gcGVyZm9ybSBzZWFyY2ggb25seSB3aGVuIGN1cnJlbnQgdXJsIGNoYW5nZXNcbiAgICAgICAgcmV0dXJuIHguc3RhdGUudXJsID09PSB5LnN0YXRlLnVybDtcbiAgICAgIH0pXG4gICAgKSxcbiAgICAuLi50aGlzLnNpdGVDb250ZXh0LFxuICBdKS5waXBlKFxuICAgIGRlYm91bmNlVGltZSgwKSxcbiAgICBtYXAoKFtyb3V0ZXJTdGF0ZSwgLi4uX2NvbnRleHRdKSA9PiAocm91dGVyU3RhdGUgYXMgUm91dGVyU3RhdGUpLnN0YXRlKSxcbiAgICB0YXAoKHN0YXRlOiBBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90KSA9PiB7XG4gICAgICBjb25zdCBjcml0ZXJpYSA9IHRoaXMuZ2V0Q3JpdGVyaWFGcm9tUm91dGUoXG4gICAgICAgIHN0YXRlLnBhcmFtcyxcbiAgICAgICAgc3RhdGUucXVlcnlQYXJhbXNcbiAgICAgICk7XG4gICAgICB0aGlzLnNlYXJjaChjcml0ZXJpYSk7XG4gICAgfSlcbiAgKTtcblxuICAvKipcbiAgICogVGhpcyBzdHJlYW0gaXMgdXNlZCBmb3IgdGhlIFByb2R1Y3QgTGlzdGluZyBhbmQgUHJvZHVjdCBGYWNldHMuXG4gICAqXG4gICAqIEl0IG5vdCBvbmx5IGVtaXRzIHNlYXJjaCByZXN1bHRzLCBidXQgYWxzbyBwZXJmb3JtcyBhIHNlYXJjaCBvbiBldmVyeSBjaGFuZ2VcbiAgICogb2YgdGhlIHJvdXRlIChpLmUuIHJvdXRlIHBhcmFtcyBvciBxdWVyeSBwYXJhbXMpLlxuICAgKlxuICAgKiBXaGVuIGEgdXNlciBsZWF2ZXMgdGhlIFBMUCByb3V0ZSwgdGhlIFBMUCBjb21wb25lbnQgdW5zdWJzY3JpYmVzIGZyb20gdGhpcyBzdHJlYW1cbiAgICogc28gbm8gbG9uZ2VyIHRoZSBzZWFyY2ggaXMgcGVyZm9ybWVkIG9uIHJvdXRlIGNoYW5nZS5cbiAgICovXG4gIHJlYWRvbmx5IG1vZGVsJDogT2JzZXJ2YWJsZTxQcm9kdWN0U2VhcmNoUGFnZT4gPSBjb21iaW5lTGF0ZXN0KFtcbiAgICB0aGlzLnNlYXJjaFJlc3VsdHMkLFxuICAgIHRoaXMuc2VhcmNoQnlSb3V0aW5nJCxcbiAgXSkucGlwZShwbHVjaygwKSwgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KSk7XG5cbiAgLyoqXG4gICAqIEV4cG9zZSB0aGUgYFNlYXJjaENyaXRlcmlhYC4gVGhlIHNlYXJjaCBjcml0ZXJpYSBhcmUgZHJpdmVuIGJ5IHRoZSByb3V0ZSBwYXJhbWV0ZXJzLlxuICAgKlxuICAgKiBUaGlzIHNlYXJjaCByb3V0ZSBjb25maWd1cmF0aW9uIGlzIG5vdCB5ZXQgY29uZmlndXJhYmxlXG4gICAqIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL1NBUC9zcGFydGFjdXMvaXNzdWVzLzcxOTEpLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldENyaXRlcmlhRnJvbVJvdXRlKFxuICAgIHJvdXRlUGFyYW1zOiBQcm9kdWN0TGlzdFJvdXRlUGFyYW1zLFxuICAgIHF1ZXJ5UGFyYW1zOiBTZWFyY2hDcml0ZXJpYVxuICApOiBTZWFyY2hDcml0ZXJpYSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHF1ZXJ5OiBxdWVyeVBhcmFtcy5xdWVyeSB8fCB0aGlzLmdldFF1ZXJ5RnJvbVJvdXRlUGFyYW1zKHJvdXRlUGFyYW1zKSxcbiAgICAgIHBhZ2VTaXplOiBxdWVyeVBhcmFtcy5wYWdlU2l6ZSB8fCB0aGlzLmRlZmF1bHRQYWdlU2l6ZSxcbiAgICAgIGN1cnJlbnRQYWdlOiBxdWVyeVBhcmFtcy5jdXJyZW50UGFnZSxcbiAgICAgIHNvcnRDb2RlOiBxdWVyeVBhcmFtcy5zb3J0Q29kZSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIHRoZSBzZWFyY2ggcXVlcnkgZnJvbSB0aGUgZ2l2ZW4gYFByb2R1Y3RMaXN0Um91dGVQYXJhbXNgLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFF1ZXJ5RnJvbVJvdXRlUGFyYW1zKHtcbiAgICBxdWVyeSxcbiAgICBjYXRlZ29yeUNvZGUsXG4gICAgYnJhbmRDb2RlLFxuICB9OiBQcm9kdWN0TGlzdFJvdXRlUGFyYW1zKSB7XG4gICAgaWYgKHF1ZXJ5KSB7XG4gICAgICByZXR1cm4gcXVlcnk7XG4gICAgfVxuICAgIGlmIChjYXRlZ29yeUNvZGUpIHtcbiAgICAgIHJldHVybiB0aGlzLlJFTEVWQU5DRV9BTExDQVRFR09SSUVTICsgY2F0ZWdvcnlDb2RlO1xuICAgIH1cblxuICAgIC8vIFRPRE86IGRyb3Agc3VwcG9ydCBmb3IgYnJhbmRzIGFzIHRoZXkgc2hvdWxkIGJlIHRyZWF0ZWRcbiAgICAvLyBzaW1pbGFybHkgYXMgYW55IGNhdGVnb3J5LlxuICAgIGlmIChicmFuZENvZGUpIHtcbiAgICAgIHJldHVybiB0aGlzLlJFTEVWQU5DRV9BTExDQVRFR09SSUVTICsgYnJhbmRDb2RlO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIHNlYXJjaCBiYXNlZCBvbiB0aGUgZ2l2ZW4gc2VhcmNoIGNyaXRlcmlhLlxuICAgKlxuICAgKiBUaGUgc2VhcmNoIGlzIGRlbGVnYXRlZCB0byB0aGUgYFByb2R1Y3RTZWFyY2hTZXJ2aWNlYC5cbiAgICovXG4gIHByb3RlY3RlZCBzZWFyY2goY3JpdGVyaWE6IFNlYXJjaENyaXRlcmlhKTogdm9pZCB7XG4gICAgY29uc3QgY3VycmVudFBhZ2UgPSBjcml0ZXJpYS5jdXJyZW50UGFnZTtcbiAgICBjb25zdCBwYWdlU2l6ZSA9IGNyaXRlcmlhLnBhZ2VTaXplO1xuICAgIGNvbnN0IHNvcnQgPSBjcml0ZXJpYS5zb3J0Q29kZTtcblxuICAgIHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2Uuc2VhcmNoKFxuICAgICAgY3JpdGVyaWEucXVlcnksXG4gICAgICAvLyBUT0RPOiBjb25zaWRlciBkcm9wcGluZyB0aGlzIGNvbXBsZXggcGFzc2luZyBvZiBjbGVhbmVkIG9iamVjdFxuICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIGN1cnJlbnRQYWdlICYmIHsgY3VycmVudFBhZ2UgfSxcbiAgICAgICAgcGFnZVNpemUgJiYgeyBwYWdlU2l6ZSB9LFxuICAgICAgICBzb3J0ICYmIHsgc29ydCB9XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaXRlbXMgZnJvbSBhIGdpdmVuIHBhZ2Ugd2l0aG91dCB1c2luZyBuYXZpZ2F0aW9uXG4gICAqL1xuICBnZXRQYWdlSXRlbXMocGFnZU51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nXG4gICAgICAuZ2V0Um91dGVyU3RhdGUoKVxuICAgICAgLnN1YnNjcmliZSgocm91dGUpID0+IHtcbiAgICAgICAgY29uc3Qgcm91dGVDcml0ZXJpYSA9IHRoaXMuZ2V0Q3JpdGVyaWFGcm9tUm91dGUoXG4gICAgICAgICAgcm91dGUuc3RhdGUucGFyYW1zLFxuICAgICAgICAgIHJvdXRlLnN0YXRlLnF1ZXJ5UGFyYW1zXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGNyaXRlcmlhID0ge1xuICAgICAgICAgIC4uLnJvdXRlQ3JpdGVyaWEsXG4gICAgICAgICAgY3VycmVudFBhZ2U6IHBhZ2VOdW1iZXIsXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2VhcmNoKGNyaXRlcmlhKTtcbiAgICAgIH0pXG4gICAgICAudW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTb3J0IHRoZSBzZWFyY2ggcmVzdWx0cyBieSB0aGUgZ2l2ZW4gc29ydCBjb2RlLlxuICAgKi9cbiAgc29ydChzb3J0Q29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZSh7IHNvcnRDb2RlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJvdXRlcyB0byB0aGUgbmV4dCBwcm9kdWN0IGxpc3RpbmcgcGFnZSwgdXNpbmcgdGhlIGdpdmVuIGBxdWVyeVBhcmFtc2AuIFRoZVxuICAgKiBgcXVlcnlQYXJhbXNgIHN1cHBvcnQgc29ydGluZywgcGFnaW5hdGlvbiBhbmQgcXVlcnlpbmcuXG4gICAqXG4gICAqIFRoZSBgcXVlcnlQYXJhbXNgIGFyZSBkZWxlZ2F0ZWQgdG8gdGhlIEFuZ3VsYXIgcm91dGVyIGBOYXZpZ2F0aW9uRXh0cmFzYC5cbiAgICovXG4gIHByb3RlY3RlZCByb3V0ZShxdWVyeVBhcmFtczogU2VhcmNoQ3JpdGVyaWEpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXSwge1xuICAgICAgcXVlcnlQYXJhbXMsXG4gICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLFxuICAgICAgcmVsYXRpdmVUbzogdGhpcy5hY3RpdmF0ZWRSb3V0ZSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgc2l0ZSBjb250ZXh0IGlzIHVzZWQgdG8gdXBkYXRlIHRoZSBzZWFyY2ggcXVlcnkgaW4gY2FzZSBvZiBhXG4gICAqIGNoYW5naW5nIGNvbnRleHQuIFRoZSBjb250ZXh0IHdpbGwgdHlwaWNhbGx5IGluZmx1ZW5jZSB0aGUgc2VhcmNoIGRhdGEuXG4gICAqXG4gICAqIFdlIGtlZXAgdGhpcyBwcml2YXRlIGZvciBub3csIGFzIHdlJ3JlIGxpa2VseSByZWZhY3RvcmluZyB0aGlzIGluIHRoZSBuZXh0XG4gICAqIG1ham9yIHZlcnNpb24uXG4gICAqL1xuICBwcml2YXRlIGdldCBzaXRlQ29udGV4dCgpOiBPYnNlcnZhYmxlPHN0cmluZz5bXSB7XG4gICAgLy8gVE9ETzogd2Ugc2hvdWxkIHJlZmFjdG9yIHRoaXMgc28gdGhhdCBjdXN0b20gY29udGV4dCB3aWxsIGJlIHRha2VuXG4gICAgLy8gaW50byBhY2NvdW50IGF1dG9tYXRpY2FsbHkuIElkZWFsbHksIHdlIGRyb3AgdGhlIHNwZWNpZmljIGNvbnRleHRcbiAgICAvLyBmcm9tIHRoZSBjb25zdHJ1Y3RvciwgYW5kIHF1ZXJ5IGEgQ29udGV4dFNlcnZpY2UgZm9yIGFsbCBjb250ZXh0cy5cblxuICAgIHJldHVybiBbdGhpcy5sYW5ndWFnZVNlcnZpY2UuZ2V0QWN0aXZlKCksIHRoaXMuY3VycmVuY3lTZXJ2aWNlLmdldEFjdGl2ZSgpXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB3aWxsIGJlIGRyb3BwZWQgaW4gdmVyc2lvbiAzLjAgYXMgaXQncyBubyBsb25nZXIgaW4gdXNlXG4gICAqL1xuICBzZXRRdWVyeShxdWVyeTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZSh7IHF1ZXJ5LCBjdXJyZW50UGFnZTogdW5kZWZpbmVkIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHdpbGwgYmUgZHJvcHBlZCBpbiB2ZXJzaW9uIDMuMCBhcyBpdCdzIG5vIGxvbmdlciBpbiB1c2VcbiAgICovXG4gIHZpZXdQYWdlKHBhZ2VOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucm91dGUoeyBjdXJyZW50UGFnZTogcGFnZU51bWJlciB9KTtcbiAgfVxufVxuIl19