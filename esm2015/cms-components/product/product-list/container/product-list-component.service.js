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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWxpc3QvY29udGFpbmVyL3Byb2R1Y3QtbGlzdC1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUVMLGVBQWUsRUFDZixlQUFlLEVBRWYsb0JBQW9CLEVBRXBCLGNBQWMsR0FDZixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUNMLFlBQVksRUFDWixvQkFBb0IsRUFDcEIsTUFBTSxFQUNOLEdBQUcsRUFDSCxLQUFLLEVBQ0wsV0FBVyxFQUNYLEdBQUcsR0FDSixNQUFNLGdCQUFnQixDQUFDOzs7O0FBR3hCOzs7Ozs7O0dBT0c7QUFFSCxNQUFNLE9BQU8sMkJBQTJCO0lBTXRDLFlBQ1ksb0JBQTBDLEVBQzFDLE9BQXVCLEVBQ3ZCLGNBQThCLEVBQzlCLGVBQWdDLEVBQ2hDLGVBQWdDLEVBQ2hDLE1BQWM7UUFMZCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFYMUIsNkJBQTZCO1FBQ25CLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBRVosNEJBQXVCLEdBQUcsMkJBQTJCLENBQUM7UUFXekU7Ozs7O1dBS0c7UUFDTyxtQkFBYyxHQUVwQixJQUFJLENBQUMsb0JBQW9CO2FBQzFCLFVBQVUsRUFBRTthQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEU7Ozs7O1dBS0c7UUFDTyxxQkFBZ0IsR0FFdEIsYUFBYSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUNoQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDNUIsdUVBQXVFO2dCQUN2RSw4REFBOEQ7Z0JBQzlELE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDckMsQ0FBQyxDQUFDLENBQ0g7WUFDRCxHQUFHLElBQUksQ0FBQyxXQUFXO1NBQ3BCLENBQUMsQ0FBQyxJQUFJLENBQ0wsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUNmLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFFLFdBQTJCLENBQUMsS0FBSyxDQUFDLEVBQ3ZFLEdBQUcsQ0FBQyxDQUFDLEtBQW1DLEVBQUUsRUFBRTtZQUMxQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQ3hDLEtBQUssQ0FBQyxNQUFNLEVBQ1osS0FBSyxDQUFDLFdBQVcsQ0FDbEIsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUVGOzs7Ozs7OztXQVFHO1FBQ00sV0FBTSxHQUFrQyxhQUFhLENBQUM7WUFDN0QsSUFBSSxDQUFDLGNBQWM7WUFDbkIsSUFBSSxDQUFDLGdCQUFnQjtTQUN0QixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxXQUFXLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUF2RC9ELENBQUM7SUF5REo7Ozs7O09BS0c7SUFDTyxvQkFBb0IsQ0FDNUIsV0FBbUMsRUFDbkMsV0FBMkI7UUFFM0IsT0FBTztZQUNMLEtBQUssRUFBRSxXQUFXLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUM7WUFDckUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLGVBQWU7WUFDdEQsV0FBVyxFQUFFLFdBQVcsQ0FBQyxXQUFXO1lBQ3BDLFFBQVEsRUFBRSxXQUFXLENBQUMsUUFBUTtTQUMvQixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ08sdUJBQXVCLENBQUMsRUFDaEMsS0FBSyxFQUNMLFlBQVksRUFDWixTQUFTLEdBQ2M7UUFDdkIsSUFBSSxLQUFLLEVBQUU7WUFDVCxPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsSUFBSSxZQUFZLEVBQUU7WUFDaEIsT0FBTyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsWUFBWSxDQUFDO1NBQ3BEO1FBRUQsMERBQTBEO1FBQzFELDZCQUE2QjtRQUM3QixJQUFJLFNBQVMsRUFBRTtZQUNiLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixHQUFHLFNBQVMsQ0FBQztTQUNqRDtJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ08sTUFBTSxDQUFDLFFBQXdCO1FBQ3ZDLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUM7UUFDekMsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDO1FBRS9CLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQzlCLFFBQVEsQ0FBQyxLQUFLO1FBQ2QsaUVBQWlFO1FBQ2pFLE1BQU0sQ0FBQyxNQUFNLENBQ1gsRUFBRSxFQUNGLFdBQVcsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUM5QixRQUFRLElBQUksRUFBRSxRQUFRLEVBQUUsRUFDeEIsSUFBSSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQ2pCLENBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILFlBQVksQ0FBQyxVQUFrQjtRQUM3QixJQUFJLENBQUMsT0FBTzthQUNULGNBQWMsRUFBRTthQUNoQixTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNuQixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQzdDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUNsQixLQUFLLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FDeEIsQ0FBQztZQUNGLE1BQU0sUUFBUSxtQ0FDVCxhQUFhLEtBQ2hCLFdBQVcsRUFBRSxVQUFVLEdBQ3hCLENBQUM7WUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsQ0FBQzthQUNELFdBQVcsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksQ0FBQyxRQUFnQjtRQUNuQixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDTyxLQUFLLENBQUMsV0FBMkI7UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFO1lBQ3ZCLFdBQVc7WUFDWCxtQkFBbUIsRUFBRSxPQUFPO1lBQzVCLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYztTQUNoQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsSUFBWSxXQUFXO1FBQ3JCLHFFQUFxRTtRQUNyRSxvRUFBb0U7UUFDcEUscUVBQXFFO1FBRXJFLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUM5RSxDQUFDOzs7O1lBM0xGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OztZQXhCaEMsb0JBQW9CO1lBRXBCLGNBQWM7WUFSUCxjQUFjO1lBR3JCLGVBQWU7WUFDZixlQUFlO1lBSlEsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtcbiAgQWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdCxcbiAgQ3VycmVuY3lTZXJ2aWNlLFxuICBMYW5ndWFnZVNlcnZpY2UsXG4gIFByb2R1Y3RTZWFyY2hQYWdlLFxuICBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgUm91dGVyU3RhdGUsXG4gIFJvdXRpbmdTZXJ2aWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgZGVib3VuY2VUaW1lLFxuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgZmlsdGVyLFxuICBtYXAsXG4gIHBsdWNrLFxuICBzaGFyZVJlcGxheSxcbiAgdGFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQcm9kdWN0TGlzdFJvdXRlUGFyYW1zLCBTZWFyY2hDcml0ZXJpYSB9IGZyb20gJy4vcHJvZHVjdC1saXN0Lm1vZGVsJztcblxuLyoqXG4gKiBUaGUgYFByb2R1Y3RMaXN0Q29tcG9uZW50U2VydmljZWAgaXMgdXNlZCB0byBzZWFyY2ggcHJvZHVjdHMuIFRoZSBzZXJ2aWNlIGlzIHVzZWRcbiAqIG9uIHRoZSBQcm9kdWN0IExpc3RpbmcgUGFnZSwgZm9yIGxpc3RpbmcgcHJvZHVjdHMgYW5kIHRoZSBmYWNldCBuYXZpZ2F0aW9uLlxuICpcbiAqIFRoZSBzZXJ2aWNlIGV4cG9zZXMgdGhlIHByb2R1Y3Qgc2VhcmNoIHJlc3VsdHMgYmFzZWQgb24gdGhlIGNhdGVnb3J5IGFuZCBzZWFyY2hcbiAqIHJvdXRlIHBhcmFtZXRlcnMuIFRoZSByb3V0ZSBwYXJhbWV0ZXJzIGFyZSB1c2VkIHRvIHF1ZXJ5IHByb2R1Y3RzIGJ5IHRoZSBoZWxwIG9mXG4gKiB0aGUgYFByb2R1Y3RTZWFyY2hTZXJ2aWNlYC5cbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2Uge1xuICAvLyBUT0RPOiBtYWtlIGl0IGNvbmZpZ3VyYWJsZVxuICBwcm90ZWN0ZWQgZGVmYXVsdFBhZ2VTaXplID0gMTA7XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IFJFTEVWQU5DRV9BTExDQVRFR09SSUVTID0gJzpyZWxldmFuY2U6YWxsQ2F0ZWdvcmllczonO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBwcm9kdWN0U2VhcmNoU2VydmljZTogUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmc6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJvdGVjdGVkIGN1cnJlbmN5U2VydmljZTogQ3VycmVuY3lTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXJcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBFbWl0cyB0aGUgc2VhcmNoIHJlc3VsdHMgZm9yIHRoZSBjdXJyZW50IHNlYXJjaCBxdWVyeS5cbiAgICpcbiAgICogVGhlIGBzZWFyY2hSZXN1bHRzJGAgaXMgX25vdF8gY29uY2VybmVkIHdpdGggcXVlcnlpbmcsIGl0IG9ubHkgb2JzZXJ2ZXMgdGhlXG4gICAqIGBwcm9kdWN0U2VhcmNoU2VydmljZS5nZXRSZXN1bHRzKClgXG4gICAqL1xuICBwcm90ZWN0ZWQgc2VhcmNoUmVzdWx0cyQ6IE9ic2VydmFibGU8XG4gICAgUHJvZHVjdFNlYXJjaFBhZ2VcbiAgPiA9IHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2VcbiAgICAuZ2V0UmVzdWx0cygpXG4gICAgLnBpcGUoZmlsdGVyKChzZWFyY2hSZXN1bHQpID0+IE9iamVjdC5rZXlzKHNlYXJjaFJlc3VsdCkubGVuZ3RoID4gMCkpO1xuXG4gIC8qKlxuICAgKiBPYnNlcnZlcyB0aGUgcm91dGUgYW5kIHBlcmZvcm1zIGEgc2VhcmNoIG9uIGVhY2ggcm91dGUgY2hhbmdlLlxuICAgKlxuICAgKiBDb250ZXh0IGNoYW5nZXMsIHN1Y2ggYXMgbGFuZ3VhZ2UgYW5kIGN1cnJlbmNpZXMgYXJlIGFsc28gdGFrZW5cbiAgICogaW50byBhY2NvdW50LCBzbyB0aGF0IHRoZSBzZWFyY2ggaXMgcGVyZm9ybWVkIGFnYWluLlxuICAgKi9cbiAgcHJvdGVjdGVkIHNlYXJjaEJ5Um91dGluZyQ6IE9ic2VydmFibGU8XG4gICAgQWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdFxuICA+ID0gY29tYmluZUxhdGVzdChbXG4gICAgdGhpcy5yb3V0aW5nLmdldFJvdXRlclN0YXRlKCkucGlwZShcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCh4LCB5KSA9PiB7XG4gICAgICAgIC8vIHJvdXRlciBlbWl0cyBuZXcgdmFsdWUgYWxzbyB3aGVuIHRoZSBhbnRpY2lwYXRlZCBgbmV4dFN0YXRlYCBjaGFuZ2VzXG4gICAgICAgIC8vIGJ1dCB3ZSB3YW50IHRvIHBlcmZvcm0gc2VhcmNoIG9ubHkgd2hlbiBjdXJyZW50IHVybCBjaGFuZ2VzXG4gICAgICAgIHJldHVybiB4LnN0YXRlLnVybCA9PT0geS5zdGF0ZS51cmw7XG4gICAgICB9KVxuICAgICksXG4gICAgLi4udGhpcy5zaXRlQ29udGV4dCxcbiAgXSkucGlwZShcbiAgICBkZWJvdW5jZVRpbWUoMCksXG4gICAgbWFwKChbcm91dGVyU3RhdGUsIC4uLl9jb250ZXh0XSkgPT4gKHJvdXRlclN0YXRlIGFzIFJvdXRlclN0YXRlKS5zdGF0ZSksXG4gICAgdGFwKChzdGF0ZTogQWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdCkgPT4ge1xuICAgICAgY29uc3QgY3JpdGVyaWEgPSB0aGlzLmdldENyaXRlcmlhRnJvbVJvdXRlKFxuICAgICAgICBzdGF0ZS5wYXJhbXMsXG4gICAgICAgIHN0YXRlLnF1ZXJ5UGFyYW1zXG4gICAgICApO1xuICAgICAgdGhpcy5zZWFyY2goY3JpdGVyaWEpO1xuICAgIH0pXG4gICk7XG5cbiAgLyoqXG4gICAqIFRoaXMgc3RyZWFtIGlzIHVzZWQgZm9yIHRoZSBQcm9kdWN0IExpc3RpbmcgYW5kIFByb2R1Y3QgRmFjZXRzLlxuICAgKlxuICAgKiBJdCBub3Qgb25seSBlbWl0cyBzZWFyY2ggcmVzdWx0cywgYnV0IGFsc28gcGVyZm9ybXMgYSBzZWFyY2ggb24gZXZlcnkgY2hhbmdlXG4gICAqIG9mIHRoZSByb3V0ZSAoaS5lLiByb3V0ZSBwYXJhbXMgb3IgcXVlcnkgcGFyYW1zKS5cbiAgICpcbiAgICogV2hlbiBhIHVzZXIgbGVhdmVzIHRoZSBQTFAgcm91dGUsIHRoZSBQTFAgY29tcG9uZW50IHVuc3Vic2NyaWJlcyBmcm9tIHRoaXMgc3RyZWFtXG4gICAqIHNvIG5vIGxvbmdlciB0aGUgc2VhcmNoIGlzIHBlcmZvcm1lZCBvbiByb3V0ZSBjaGFuZ2UuXG4gICAqL1xuICByZWFkb25seSBtb2RlbCQ6IE9ic2VydmFibGU8UHJvZHVjdFNlYXJjaFBhZ2U+ID0gY29tYmluZUxhdGVzdChbXG4gICAgdGhpcy5zZWFyY2hSZXN1bHRzJCxcbiAgICB0aGlzLnNlYXJjaEJ5Um91dGluZyQsXG4gIF0pLnBpcGUocGx1Y2soMCksIHNoYXJlUmVwbGF5KHsgYnVmZmVyU2l6ZTogMSwgcmVmQ291bnQ6IHRydWUgfSkpO1xuXG4gIC8qKlxuICAgKiBFeHBvc2UgdGhlIGBTZWFyY2hDcml0ZXJpYWAuIFRoZSBzZWFyY2ggY3JpdGVyaWEgYXJlIGRyaXZlbiBieSB0aGUgcm91dGUgcGFyYW1ldGVycy5cbiAgICpcbiAgICogVGhpcyBzZWFyY2ggcm91dGUgY29uZmlndXJhdGlvbiBpcyBub3QgeWV0IGNvbmZpZ3VyYWJsZVxuICAgKiAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9TQVAvc3BhcnRhY3VzL2lzc3Vlcy83MTkxKS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRDcml0ZXJpYUZyb21Sb3V0ZShcbiAgICByb3V0ZVBhcmFtczogUHJvZHVjdExpc3RSb3V0ZVBhcmFtcyxcbiAgICBxdWVyeVBhcmFtczogU2VhcmNoQ3JpdGVyaWFcbiAgKTogU2VhcmNoQ3JpdGVyaWEge1xuICAgIHJldHVybiB7XG4gICAgICBxdWVyeTogcXVlcnlQYXJhbXMucXVlcnkgfHwgdGhpcy5nZXRRdWVyeUZyb21Sb3V0ZVBhcmFtcyhyb3V0ZVBhcmFtcyksXG4gICAgICBwYWdlU2l6ZTogcXVlcnlQYXJhbXMucGFnZVNpemUgfHwgdGhpcy5kZWZhdWx0UGFnZVNpemUsXG4gICAgICBjdXJyZW50UGFnZTogcXVlcnlQYXJhbXMuY3VycmVudFBhZ2UsXG4gICAgICBzb3J0Q29kZTogcXVlcnlQYXJhbXMuc29ydENvZGUsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyB0aGUgc2VhcmNoIHF1ZXJ5IGZyb20gdGhlIGdpdmVuIGBQcm9kdWN0TGlzdFJvdXRlUGFyYW1zYC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRRdWVyeUZyb21Sb3V0ZVBhcmFtcyh7XG4gICAgcXVlcnksXG4gICAgY2F0ZWdvcnlDb2RlLFxuICAgIGJyYW5kQ29kZSxcbiAgfTogUHJvZHVjdExpc3RSb3V0ZVBhcmFtcykge1xuICAgIGlmIChxdWVyeSkge1xuICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH1cbiAgICBpZiAoY2F0ZWdvcnlDb2RlKSB7XG4gICAgICByZXR1cm4gdGhpcy5SRUxFVkFOQ0VfQUxMQ0FURUdPUklFUyArIGNhdGVnb3J5Q29kZTtcbiAgICB9XG5cbiAgICAvLyBUT0RPOiBkcm9wIHN1cHBvcnQgZm9yIGJyYW5kcyBhcyB0aGV5IHNob3VsZCBiZSB0cmVhdGVkXG4gICAgLy8gc2ltaWxhcmx5IGFzIGFueSBjYXRlZ29yeS5cbiAgICBpZiAoYnJhbmRDb2RlKSB7XG4gICAgICByZXR1cm4gdGhpcy5SRUxFVkFOQ0VfQUxMQ0FURUdPUklFUyArIGJyYW5kQ29kZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBzZWFyY2ggYmFzZWQgb24gdGhlIGdpdmVuIHNlYXJjaCBjcml0ZXJpYS5cbiAgICpcbiAgICogVGhlIHNlYXJjaCBpcyBkZWxlZ2F0ZWQgdG8gdGhlIGBQcm9kdWN0U2VhcmNoU2VydmljZWAuXG4gICAqL1xuICBwcm90ZWN0ZWQgc2VhcmNoKGNyaXRlcmlhOiBTZWFyY2hDcml0ZXJpYSk6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnRQYWdlID0gY3JpdGVyaWEuY3VycmVudFBhZ2U7XG4gICAgY29uc3QgcGFnZVNpemUgPSBjcml0ZXJpYS5wYWdlU2l6ZTtcbiAgICBjb25zdCBzb3J0ID0gY3JpdGVyaWEuc29ydENvZGU7XG5cbiAgICB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlLnNlYXJjaChcbiAgICAgIGNyaXRlcmlhLnF1ZXJ5LFxuICAgICAgLy8gVE9ETzogY29uc2lkZXIgZHJvcHBpbmcgdGhpcyBjb21wbGV4IHBhc3Npbmcgb2YgY2xlYW5lZCBvYmplY3RcbiAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgIHt9LFxuICAgICAgICBjdXJyZW50UGFnZSAmJiB7IGN1cnJlbnRQYWdlIH0sXG4gICAgICAgIHBhZ2VTaXplICYmIHsgcGFnZVNpemUgfSxcbiAgICAgICAgc29ydCAmJiB7IHNvcnQgfVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGl0ZW1zIGZyb20gYSBnaXZlbiBwYWdlIHdpdGhvdXQgdXNpbmcgbmF2aWdhdGlvblxuICAgKi9cbiAgZ2V0UGFnZUl0ZW1zKHBhZ2VOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1xuICAgICAgLmdldFJvdXRlclN0YXRlKClcbiAgICAgIC5zdWJzY3JpYmUoKHJvdXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdXRlQ3JpdGVyaWEgPSB0aGlzLmdldENyaXRlcmlhRnJvbVJvdXRlKFxuICAgICAgICAgIHJvdXRlLnN0YXRlLnBhcmFtcyxcbiAgICAgICAgICByb3V0ZS5zdGF0ZS5xdWVyeVBhcmFtc1xuICAgICAgICApO1xuICAgICAgICBjb25zdCBjcml0ZXJpYSA9IHtcbiAgICAgICAgICAuLi5yb3V0ZUNyaXRlcmlhLFxuICAgICAgICAgIGN1cnJlbnRQYWdlOiBwYWdlTnVtYmVyLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNlYXJjaChjcml0ZXJpYSk7XG4gICAgICB9KVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICAvKipcbiAgICogU29ydCB0aGUgc2VhcmNoIHJlc3VsdHMgYnkgdGhlIGdpdmVuIHNvcnQgY29kZS5cbiAgICovXG4gIHNvcnQoc29ydENvZGU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMucm91dGUoeyBzb3J0Q29kZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSb3V0ZXMgdG8gdGhlIG5leHQgcHJvZHVjdCBsaXN0aW5nIHBhZ2UsIHVzaW5nIHRoZSBnaXZlbiBgcXVlcnlQYXJhbXNgLiBUaGVcbiAgICogYHF1ZXJ5UGFyYW1zYCBzdXBwb3J0IHNvcnRpbmcsIHBhZ2luYXRpb24gYW5kIHF1ZXJ5aW5nLlxuICAgKlxuICAgKiBUaGUgYHF1ZXJ5UGFyYW1zYCBhcmUgZGVsZWdhdGVkIHRvIHRoZSBBbmd1bGFyIHJvdXRlciBgTmF2aWdhdGlvbkV4dHJhc2AuXG4gICAqL1xuICBwcm90ZWN0ZWQgcm91dGUocXVlcnlQYXJhbXM6IFNlYXJjaENyaXRlcmlhKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW10sIHtcbiAgICAgIHF1ZXJ5UGFyYW1zLFxuICAgICAgcXVlcnlQYXJhbXNIYW5kbGluZzogJ21lcmdlJyxcbiAgICAgIHJlbGF0aXZlVG86IHRoaXMuYWN0aXZhdGVkUm91dGUsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHNpdGUgY29udGV4dCBpcyB1c2VkIHRvIHVwZGF0ZSB0aGUgc2VhcmNoIHF1ZXJ5IGluIGNhc2Ugb2YgYVxuICAgKiBjaGFuZ2luZyBjb250ZXh0LiBUaGUgY29udGV4dCB3aWxsIHR5cGljYWxseSBpbmZsdWVuY2UgdGhlIHNlYXJjaCBkYXRhLlxuICAgKlxuICAgKiBXZSBrZWVwIHRoaXMgcHJpdmF0ZSBmb3Igbm93LCBhcyB3ZSdyZSBsaWtlbHkgcmVmYWN0b3JpbmcgdGhpcyBpbiB0aGUgbmV4dFxuICAgKiBtYWpvciB2ZXJzaW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXQgc2l0ZUNvbnRleHQoKTogT2JzZXJ2YWJsZTxzdHJpbmc+W10ge1xuICAgIC8vIFRPRE86IHdlIHNob3VsZCByZWZhY3RvciB0aGlzIHNvIHRoYXQgY3VzdG9tIGNvbnRleHQgd2lsbCBiZSB0YWtlblxuICAgIC8vIGludG8gYWNjb3VudCBhdXRvbWF0aWNhbGx5LiBJZGVhbGx5LCB3ZSBkcm9wIHRoZSBzcGVjaWZpYyBjb250ZXh0XG4gICAgLy8gZnJvbSB0aGUgY29uc3RydWN0b3IsIGFuZCBxdWVyeSBhIENvbnRleHRTZXJ2aWNlIGZvciBhbGwgY29udGV4dHMuXG5cbiAgICByZXR1cm4gW3RoaXMubGFuZ3VhZ2VTZXJ2aWNlLmdldEFjdGl2ZSgpLCB0aGlzLmN1cnJlbmN5U2VydmljZS5nZXRBY3RpdmUoKV07XG4gIH1cbn1cbiJdfQ==