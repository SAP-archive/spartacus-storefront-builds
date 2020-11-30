import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CurrencyService, LanguageService, ProductSearchService, RoutingService, } from '@spartacus/core';
import { combineLatest, using } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, shareReplay, tap, } from 'rxjs/operators';
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
        this.model$ = using(() => this.searchByRouting$.subscribe(), () => this.searchResults$).pipe(shareReplay({ bufferSize: 1, refCount: true }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWxpc3QvY29udGFpbmVyL3Byb2R1Y3QtbGlzdC1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUVMLGVBQWUsRUFDZixlQUFlLEVBRWYsb0JBQW9CLEVBRXBCLGNBQWMsR0FDZixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxhQUFhLEVBQWMsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hELE9BQU8sRUFDTCxZQUFZLEVBQ1osb0JBQW9CLEVBQ3BCLE1BQU0sRUFDTixHQUFHLEVBQ0gsV0FBVyxFQUNYLEdBQUcsR0FDSixNQUFNLGdCQUFnQixDQUFDOzs7O0FBR3hCOzs7Ozs7O0dBT0c7QUFFSCxNQUFNLE9BQU8sMkJBQTJCO0lBTXRDLFlBQ1ksb0JBQTBDLEVBQzFDLE9BQXVCLEVBQ3ZCLGNBQThCLEVBQzlCLGVBQWdDLEVBQ2hDLGVBQWdDLEVBQ2hDLE1BQWM7UUFMZCx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQ3ZCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFYMUIsNkJBQTZCO1FBQ25CLG9CQUFlLEdBQUcsRUFBRSxDQUFDO1FBRVosNEJBQXVCLEdBQUcsMkJBQTJCLENBQUM7UUFXekU7Ozs7O1dBS0c7UUFDTyxtQkFBYyxHQUVwQixJQUFJLENBQUMsb0JBQW9CO2FBQzFCLFVBQVUsRUFBRTthQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEU7Ozs7O1dBS0c7UUFDTyxxQkFBZ0IsR0FFdEIsYUFBYSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUNoQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDNUIsdUVBQXVFO2dCQUN2RSw4REFBOEQ7Z0JBQzlELE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7WUFDckMsQ0FBQyxDQUFDLENBQ0g7WUFDRCxHQUFHLElBQUksQ0FBQyxXQUFXO1NBQ3BCLENBQUMsQ0FBQyxJQUFJLENBQ0wsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUNmLEdBQUcsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsUUFBUSxDQUFDLEVBQUUsRUFBRSxDQUFFLFdBQTJCLENBQUMsS0FBSyxDQUFDLEVBQ3ZFLEdBQUcsQ0FBQyxDQUFDLEtBQW1DLEVBQUUsRUFBRTtZQUMxQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQ3hDLEtBQUssQ0FBQyxNQUFNLEVBQ1osS0FBSyxDQUFDLFdBQVcsQ0FDbEIsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUVGOzs7Ozs7OztXQVFHO1FBQ00sV0FBTSxHQUFrQyxLQUFLLENBQ3BELEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsRUFDdkMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FDMUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBdkRwRCxDQUFDO0lBeURKOzs7OztPQUtHO0lBQ08sb0JBQW9CLENBQzVCLFdBQW1DLEVBQ25DLFdBQTJCO1FBRTNCLE9BQU87WUFDTCxLQUFLLEVBQUUsV0FBVyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxDQUFDO1lBQ3JFLFFBQVEsRUFBRSxXQUFXLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxlQUFlO1lBQ3RELFdBQVcsRUFBRSxXQUFXLENBQUMsV0FBVztZQUNwQyxRQUFRLEVBQUUsV0FBVyxDQUFDLFFBQVE7U0FDL0IsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNPLHVCQUF1QixDQUFDLEVBQ2hDLEtBQUssRUFDTCxZQUFZLEVBQ1osU0FBUyxHQUNjO1FBQ3ZCLElBQUksS0FBSyxFQUFFO1lBQ1QsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksWUFBWSxFQUFFO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixHQUFHLFlBQVksQ0FBQztTQUNwRDtRQUVELDBEQUEwRDtRQUMxRCw2QkFBNkI7UUFDN0IsSUFBSSxTQUFTLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxTQUFTLENBQUM7U0FDakQ7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNPLE1BQU0sQ0FBQyxRQUF3QjtRQUN2QyxNQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ3pDLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDbkMsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUUvQixJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUM5QixRQUFRLENBQUMsS0FBSztRQUNkLGlFQUFpRTtRQUNqRSxNQUFNLENBQUMsTUFBTSxDQUNYLEVBQUUsRUFDRixXQUFXLElBQUksRUFBRSxXQUFXLEVBQUUsRUFDOUIsUUFBUSxJQUFJLEVBQUUsUUFBUSxFQUFFLEVBQ3hCLElBQUksSUFBSSxFQUFFLElBQUksRUFBRSxDQUNqQixDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxZQUFZLENBQUMsVUFBa0I7UUFDN0IsSUFBSSxDQUFDLE9BQU87YUFDVCxjQUFjLEVBQUU7YUFDaEIsU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDbkIsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUM3QyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFDbEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQ3hCLENBQUM7WUFDRixNQUFNLFFBQVEsbUNBQ1QsYUFBYSxLQUNoQixXQUFXLEVBQUUsVUFBVSxHQUN4QixDQUFDO1lBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4QixDQUFDLENBQUM7YUFDRCxXQUFXLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLENBQUMsUUFBZ0I7UUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ08sS0FBSyxDQUFDLFdBQTJCO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRTtZQUN2QixXQUFXO1lBQ1gsbUJBQW1CLEVBQUUsT0FBTztZQUM1QixVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWM7U0FDaEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILElBQVksV0FBVztRQUNyQixxRUFBcUU7UUFDckUsb0VBQW9FO1FBQ3BFLHFFQUFxRTtRQUVyRSxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDOUUsQ0FBQzs7OztZQTNMRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7WUF2QmhDLG9CQUFvQjtZQUVwQixjQUFjO1lBUlAsY0FBYztZQUdyQixlQUFlO1lBQ2YsZUFBZTtZQUpRLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3QsXG4gIEN1cnJlbmN5U2VydmljZSxcbiAgTGFuZ3VhZ2VTZXJ2aWNlLFxuICBQcm9kdWN0U2VhcmNoUGFnZSxcbiAgUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gIFJvdXRlclN0YXRlLFxuICBSb3V0aW5nU2VydmljZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIHVzaW5nIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkZWJvdW5jZVRpbWUsXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBmaWx0ZXIsXG4gIG1hcCxcbiAgc2hhcmVSZXBsYXksXG4gIHRhcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgUHJvZHVjdExpc3RSb3V0ZVBhcmFtcywgU2VhcmNoQ3JpdGVyaWEgfSBmcm9tICcuL3Byb2R1Y3QtbGlzdC5tb2RlbCc7XG5cbi8qKlxuICogVGhlIGBQcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2VgIGlzIHVzZWQgdG8gc2VhcmNoIHByb2R1Y3RzLiBUaGUgc2VydmljZSBpcyB1c2VkXG4gKiBvbiB0aGUgUHJvZHVjdCBMaXN0aW5nIFBhZ2UsIGZvciBsaXN0aW5nIHByb2R1Y3RzIGFuZCB0aGUgZmFjZXQgbmF2aWdhdGlvbi5cbiAqXG4gKiBUaGUgc2VydmljZSBleHBvc2VzIHRoZSBwcm9kdWN0IHNlYXJjaCByZXN1bHRzIGJhc2VkIG9uIHRoZSBjYXRlZ29yeSBhbmQgc2VhcmNoXG4gKiByb3V0ZSBwYXJhbWV0ZXJzLiBUaGUgcm91dGUgcGFyYW1ldGVycyBhcmUgdXNlZCB0byBxdWVyeSBwcm9kdWN0cyBieSB0aGUgaGVscCBvZlxuICogdGhlIGBQcm9kdWN0U2VhcmNoU2VydmljZWAuXG4gKi9cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlIHtcbiAgLy8gVE9ETzogbWFrZSBpdCBjb25maWd1cmFibGVcbiAgcHJvdGVjdGVkIGRlZmF1bHRQYWdlU2l6ZSA9IDEwO1xuXG4gIHByb3RlY3RlZCByZWFkb25seSBSRUxFVkFOQ0VfQUxMQ0FURUdPUklFUyA9ICc6cmVsZXZhbmNlOmFsbENhdGVnb3JpZXM6JztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlYXJjaFNlcnZpY2U6IFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByb3RlY3RlZCBjdXJyZW5jeVNlcnZpY2U6IEN1cnJlbmN5U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyXG4gICkge31cblxuICAvKipcbiAgICogRW1pdHMgdGhlIHNlYXJjaCByZXN1bHRzIGZvciB0aGUgY3VycmVudCBzZWFyY2ggcXVlcnkuXG4gICAqXG4gICAqIFRoZSBgc2VhcmNoUmVzdWx0cyRgIGlzIF9ub3RfIGNvbmNlcm5lZCB3aXRoIHF1ZXJ5aW5nLCBpdCBvbmx5IG9ic2VydmVzIHRoZVxuICAgKiBgcHJvZHVjdFNlYXJjaFNlcnZpY2UuZ2V0UmVzdWx0cygpYFxuICAgKi9cbiAgcHJvdGVjdGVkIHNlYXJjaFJlc3VsdHMkOiBPYnNlcnZhYmxlPFxuICAgIFByb2R1Y3RTZWFyY2hQYWdlXG4gID4gPSB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlXG4gICAgLmdldFJlc3VsdHMoKVxuICAgIC5waXBlKGZpbHRlcigoc2VhcmNoUmVzdWx0KSA9PiBPYmplY3Qua2V5cyhzZWFyY2hSZXN1bHQpLmxlbmd0aCA+IDApKTtcblxuICAvKipcbiAgICogT2JzZXJ2ZXMgdGhlIHJvdXRlIGFuZCBwZXJmb3JtcyBhIHNlYXJjaCBvbiBlYWNoIHJvdXRlIGNoYW5nZS5cbiAgICpcbiAgICogQ29udGV4dCBjaGFuZ2VzLCBzdWNoIGFzIGxhbmd1YWdlIGFuZCBjdXJyZW5jaWVzIGFyZSBhbHNvIHRha2VuXG4gICAqIGludG8gYWNjb3VudCwgc28gdGhhdCB0aGUgc2VhcmNoIGlzIHBlcmZvcm1lZCBhZ2Fpbi5cbiAgICovXG4gIHByb3RlY3RlZCBzZWFyY2hCeVJvdXRpbmckOiBPYnNlcnZhYmxlPFxuICAgIEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3RcbiAgPiA9IGNvbWJpbmVMYXRlc3QoW1xuICAgIHRoaXMucm91dGluZy5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgoeCwgeSkgPT4ge1xuICAgICAgICAvLyByb3V0ZXIgZW1pdHMgbmV3IHZhbHVlIGFsc28gd2hlbiB0aGUgYW50aWNpcGF0ZWQgYG5leHRTdGF0ZWAgY2hhbmdlc1xuICAgICAgICAvLyBidXQgd2Ugd2FudCB0byBwZXJmb3JtIHNlYXJjaCBvbmx5IHdoZW4gY3VycmVudCB1cmwgY2hhbmdlc1xuICAgICAgICByZXR1cm4geC5zdGF0ZS51cmwgPT09IHkuc3RhdGUudXJsO1xuICAgICAgfSlcbiAgICApLFxuICAgIC4uLnRoaXMuc2l0ZUNvbnRleHQsXG4gIF0pLnBpcGUoXG4gICAgZGVib3VuY2VUaW1lKDApLFxuICAgIG1hcCgoW3JvdXRlclN0YXRlLCAuLi5fY29udGV4dF0pID0+IChyb3V0ZXJTdGF0ZSBhcyBSb3V0ZXJTdGF0ZSkuc3RhdGUpLFxuICAgIHRhcCgoc3RhdGU6IEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3QpID0+IHtcbiAgICAgIGNvbnN0IGNyaXRlcmlhID0gdGhpcy5nZXRDcml0ZXJpYUZyb21Sb3V0ZShcbiAgICAgICAgc3RhdGUucGFyYW1zLFxuICAgICAgICBzdGF0ZS5xdWVyeVBhcmFtc1xuICAgICAgKTtcbiAgICAgIHRoaXMuc2VhcmNoKGNyaXRlcmlhKTtcbiAgICB9KVxuICApO1xuXG4gIC8qKlxuICAgKiBUaGlzIHN0cmVhbSBpcyB1c2VkIGZvciB0aGUgUHJvZHVjdCBMaXN0aW5nIGFuZCBQcm9kdWN0IEZhY2V0cy5cbiAgICpcbiAgICogSXQgbm90IG9ubHkgZW1pdHMgc2VhcmNoIHJlc3VsdHMsIGJ1dCBhbHNvIHBlcmZvcm1zIGEgc2VhcmNoIG9uIGV2ZXJ5IGNoYW5nZVxuICAgKiBvZiB0aGUgcm91dGUgKGkuZS4gcm91dGUgcGFyYW1zIG9yIHF1ZXJ5IHBhcmFtcykuXG4gICAqXG4gICAqIFdoZW4gYSB1c2VyIGxlYXZlcyB0aGUgUExQIHJvdXRlLCB0aGUgUExQIGNvbXBvbmVudCB1bnN1YnNjcmliZXMgZnJvbSB0aGlzIHN0cmVhbVxuICAgKiBzbyBubyBsb25nZXIgdGhlIHNlYXJjaCBpcyBwZXJmb3JtZWQgb24gcm91dGUgY2hhbmdlLlxuICAgKi9cbiAgcmVhZG9ubHkgbW9kZWwkOiBPYnNlcnZhYmxlPFByb2R1Y3RTZWFyY2hQYWdlPiA9IHVzaW5nKFxuICAgICgpID0+IHRoaXMuc2VhcmNoQnlSb3V0aW5nJC5zdWJzY3JpYmUoKSxcbiAgICAoKSA9PiB0aGlzLnNlYXJjaFJlc3VsdHMkXG4gICkucGlwZShzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pKTtcblxuICAvKipcbiAgICogRXhwb3NlIHRoZSBgU2VhcmNoQ3JpdGVyaWFgLiBUaGUgc2VhcmNoIGNyaXRlcmlhIGFyZSBkcml2ZW4gYnkgdGhlIHJvdXRlIHBhcmFtZXRlcnMuXG4gICAqXG4gICAqIFRoaXMgc2VhcmNoIHJvdXRlIGNvbmZpZ3VyYXRpb24gaXMgbm90IHlldCBjb25maWd1cmFibGVcbiAgICogKHNlZSBodHRwczovL2dpdGh1Yi5jb20vU0FQL3NwYXJ0YWN1cy9pc3N1ZXMvNzE5MSkuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0Q3JpdGVyaWFGcm9tUm91dGUoXG4gICAgcm91dGVQYXJhbXM6IFByb2R1Y3RMaXN0Um91dGVQYXJhbXMsXG4gICAgcXVlcnlQYXJhbXM6IFNlYXJjaENyaXRlcmlhXG4gICk6IFNlYXJjaENyaXRlcmlhIHtcbiAgICByZXR1cm4ge1xuICAgICAgcXVlcnk6IHF1ZXJ5UGFyYW1zLnF1ZXJ5IHx8IHRoaXMuZ2V0UXVlcnlGcm9tUm91dGVQYXJhbXMocm91dGVQYXJhbXMpLFxuICAgICAgcGFnZVNpemU6IHF1ZXJ5UGFyYW1zLnBhZ2VTaXplIHx8IHRoaXMuZGVmYXVsdFBhZ2VTaXplLFxuICAgICAgY3VycmVudFBhZ2U6IHF1ZXJ5UGFyYW1zLmN1cnJlbnRQYWdlLFxuICAgICAgc29ydENvZGU6IHF1ZXJ5UGFyYW1zLnNvcnRDb2RlLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZXMgdGhlIHNlYXJjaCBxdWVyeSBmcm9tIHRoZSBnaXZlbiBgUHJvZHVjdExpc3RSb3V0ZVBhcmFtc2AuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0UXVlcnlGcm9tUm91dGVQYXJhbXMoe1xuICAgIHF1ZXJ5LFxuICAgIGNhdGVnb3J5Q29kZSxcbiAgICBicmFuZENvZGUsXG4gIH06IFByb2R1Y3RMaXN0Um91dGVQYXJhbXMpIHtcbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIHJldHVybiBxdWVyeTtcbiAgICB9XG4gICAgaWYgKGNhdGVnb3J5Q29kZSkge1xuICAgICAgcmV0dXJuIHRoaXMuUkVMRVZBTkNFX0FMTENBVEVHT1JJRVMgKyBjYXRlZ29yeUNvZGU7XG4gICAgfVxuXG4gICAgLy8gVE9ETzogZHJvcCBzdXBwb3J0IGZvciBicmFuZHMgYXMgdGhleSBzaG91bGQgYmUgdHJlYXRlZFxuICAgIC8vIHNpbWlsYXJseSBhcyBhbnkgY2F0ZWdvcnkuXG4gICAgaWYgKGJyYW5kQ29kZSkge1xuICAgICAgcmV0dXJuIHRoaXMuUkVMRVZBTkNFX0FMTENBVEVHT1JJRVMgKyBicmFuZENvZGU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgc2VhcmNoIGJhc2VkIG9uIHRoZSBnaXZlbiBzZWFyY2ggY3JpdGVyaWEuXG4gICAqXG4gICAqIFRoZSBzZWFyY2ggaXMgZGVsZWdhdGVkIHRvIHRoZSBgUHJvZHVjdFNlYXJjaFNlcnZpY2VgLlxuICAgKi9cbiAgcHJvdGVjdGVkIHNlYXJjaChjcml0ZXJpYTogU2VhcmNoQ3JpdGVyaWEpOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50UGFnZSA9IGNyaXRlcmlhLmN1cnJlbnRQYWdlO1xuICAgIGNvbnN0IHBhZ2VTaXplID0gY3JpdGVyaWEucGFnZVNpemU7XG4gICAgY29uc3Qgc29ydCA9IGNyaXRlcmlhLnNvcnRDb2RlO1xuXG4gICAgdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZS5zZWFyY2goXG4gICAgICBjcml0ZXJpYS5xdWVyeSxcbiAgICAgIC8vIFRPRE86IGNvbnNpZGVyIGRyb3BwaW5nIHRoaXMgY29tcGxleCBwYXNzaW5nIG9mIGNsZWFuZWQgb2JqZWN0XG4gICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICB7fSxcbiAgICAgICAgY3VycmVudFBhZ2UgJiYgeyBjdXJyZW50UGFnZSB9LFxuICAgICAgICBwYWdlU2l6ZSAmJiB7IHBhZ2VTaXplIH0sXG4gICAgICAgIHNvcnQgJiYgeyBzb3J0IH1cbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBpdGVtcyBmcm9tIGEgZ2l2ZW4gcGFnZSB3aXRob3V0IHVzaW5nIG5hdmlnYXRpb25cbiAgICovXG4gIGdldFBhZ2VJdGVtcyhwYWdlTnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRpbmdcbiAgICAgIC5nZXRSb3V0ZXJTdGF0ZSgpXG4gICAgICAuc3Vic2NyaWJlKChyb3V0ZSkgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZUNyaXRlcmlhID0gdGhpcy5nZXRDcml0ZXJpYUZyb21Sb3V0ZShcbiAgICAgICAgICByb3V0ZS5zdGF0ZS5wYXJhbXMsXG4gICAgICAgICAgcm91dGUuc3RhdGUucXVlcnlQYXJhbXNcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgY3JpdGVyaWEgPSB7XG4gICAgICAgICAgLi4ucm91dGVDcml0ZXJpYSxcbiAgICAgICAgICBjdXJyZW50UGFnZTogcGFnZU51bWJlcixcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZWFyY2goY3JpdGVyaWEpO1xuICAgICAgfSlcbiAgICAgIC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNvcnQgdGhlIHNlYXJjaCByZXN1bHRzIGJ5IHRoZSBnaXZlbiBzb3J0IGNvZGUuXG4gICAqL1xuICBzb3J0KHNvcnRDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlKHsgc29ydENvZGUgfSk7XG4gIH1cblxuICAvKipcbiAgICogUm91dGVzIHRvIHRoZSBuZXh0IHByb2R1Y3QgbGlzdGluZyBwYWdlLCB1c2luZyB0aGUgZ2l2ZW4gYHF1ZXJ5UGFyYW1zYC4gVGhlXG4gICAqIGBxdWVyeVBhcmFtc2Agc3VwcG9ydCBzb3J0aW5nLCBwYWdpbmF0aW9uIGFuZCBxdWVyeWluZy5cbiAgICpcbiAgICogVGhlIGBxdWVyeVBhcmFtc2AgYXJlIGRlbGVnYXRlZCB0byB0aGUgQW5ndWxhciByb3V0ZXIgYE5hdmlnYXRpb25FeHRyYXNgLlxuICAgKi9cbiAgcHJvdGVjdGVkIHJvdXRlKHF1ZXJ5UGFyYW1zOiBTZWFyY2hDcml0ZXJpYSk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtdLCB7XG4gICAgICBxdWVyeVBhcmFtcyxcbiAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsXG4gICAgICByZWxhdGl2ZVRvOiB0aGlzLmFjdGl2YXRlZFJvdXRlLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBzaXRlIGNvbnRleHQgaXMgdXNlZCB0byB1cGRhdGUgdGhlIHNlYXJjaCBxdWVyeSBpbiBjYXNlIG9mIGFcbiAgICogY2hhbmdpbmcgY29udGV4dC4gVGhlIGNvbnRleHQgd2lsbCB0eXBpY2FsbHkgaW5mbHVlbmNlIHRoZSBzZWFyY2ggZGF0YS5cbiAgICpcbiAgICogV2Uga2VlcCB0aGlzIHByaXZhdGUgZm9yIG5vdywgYXMgd2UncmUgbGlrZWx5IHJlZmFjdG9yaW5nIHRoaXMgaW4gdGhlIG5leHRcbiAgICogbWFqb3IgdmVyc2lvbi5cbiAgICovXG4gIHByaXZhdGUgZ2V0IHNpdGVDb250ZXh0KCk6IE9ic2VydmFibGU8c3RyaW5nPltdIHtcbiAgICAvLyBUT0RPOiB3ZSBzaG91bGQgcmVmYWN0b3IgdGhpcyBzbyB0aGF0IGN1c3RvbSBjb250ZXh0IHdpbGwgYmUgdGFrZW5cbiAgICAvLyBpbnRvIGFjY291bnQgYXV0b21hdGljYWxseS4gSWRlYWxseSwgd2UgZHJvcCB0aGUgc3BlY2lmaWMgY29udGV4dFxuICAgIC8vIGZyb20gdGhlIGNvbnN0cnVjdG9yLCBhbmQgcXVlcnkgYSBDb250ZXh0U2VydmljZSBmb3IgYWxsIGNvbnRleHRzLlxuXG4gICAgcmV0dXJuIFt0aGlzLmxhbmd1YWdlU2VydmljZS5nZXRBY3RpdmUoKSwgdGhpcy5jdXJyZW5jeVNlcnZpY2UuZ2V0QWN0aXZlKCldO1xuICB9XG59XG4iXX0=