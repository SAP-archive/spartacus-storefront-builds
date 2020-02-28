import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivatedRouterStateSnapshot, CurrencyService, LanguageService, ProductSearchPage, ProductSearchService, RoutingService, SearchConfig, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { distinctUntilChanged, filter, pluck, shareReplay, tap, } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "@angular/router";
let ProductListComponentService = class ProductListComponentService {
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
        this.searchResults$ = this.productSearchService
            .getResults()
            .pipe(filter(searchResult => Object.keys(searchResult).length > 0));
        this.searchByRouting$ = combineLatest([
            this.routing.getRouterState().pipe(distinctUntilChanged((x, y) => {
                // router emits new value also when the anticipated `nextState` changes
                // but we want to perform search only when current url changes
                return x.state.url === y.state.url;
            })),
            // also trigger search on site context changes
            this.languageService.getActive(),
            this.currencyService.getActive(),
        ]).pipe(pluck(0, 'state'), tap((state) => {
            const criteria = this.getCriteriaFromRoute(state.params, state.queryParams);
            this.search(criteria);
        }));
        /**
         * This stream should be used only on the Product Listing Page.
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
    clearSearchResults() {
        this.productSearchService.clearResults();
    }
    getCriteriaFromRoute(routeParams, queryParams) {
        return {
            query: queryParams.query || this.getQueryFromRouteParams(routeParams),
            pageSize: queryParams.pageSize || this.defaultPageSize,
            currentPage: queryParams.currentPage,
            sortCode: queryParams.sortCode,
        };
    }
    getQueryFromRouteParams({ brandCode, categoryCode, query, }) {
        if (query) {
            return query;
        }
        if (categoryCode) {
            return this.RELEVANCE_ALLCATEGORIES + categoryCode;
        }
        if (brandCode) {
            return this.RELEVANCE_ALLCATEGORIES + brandCode;
        }
    }
    search(criteria) {
        const query = criteria.query;
        const searchConfig = this.getSearchConfig(criteria);
        this.productSearchService.search(query, searchConfig);
    }
    getSearchConfig(criteria) {
        const result = {
            currentPage: criteria.currentPage,
            pageSize: criteria.pageSize,
            sortCode: criteria.sortCode,
        };
        // drop empty keys
        Object.keys(result).forEach(key => !result[key] && delete result[key]);
        return result;
    }
    setQuery(query) {
        this.setQueryParams({ query, currentPage: undefined });
    }
    viewPage(pageNumber) {
        this.setQueryParams({ currentPage: pageNumber });
    }
    /**
     * Get items from a given page without using navigation
     */
    getPageItems(pageNumber) {
        this.routing
            .getRouterState()
            .subscribe(route => {
            const routeCriteria = this.getCriteriaFromRoute(route.state.params, route.state.queryParams);
            const criteria = Object.assign(Object.assign({}, routeCriteria), { currentPage: pageNumber });
            this.search(criteria);
        })
            .unsubscribe();
    }
    sort(sortCode) {
        this.setQueryParams({ sortCode });
    }
    setQueryParams(queryParams) {
        this.router.navigate([], {
            queryParams,
            queryParamsHandling: 'merge',
            relativeTo: this.activatedRoute,
        });
    }
};
ProductListComponentService.ctorParameters = () => [
    { type: ProductSearchService },
    { type: RoutingService },
    { type: ActivatedRoute },
    { type: CurrencyService },
    { type: LanguageService },
    { type: Router }
];
ProductListComponentService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductListComponentService_Factory() { return new ProductListComponentService(i0.ɵɵinject(i1.ProductSearchService), i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.ActivatedRoute), i0.ɵɵinject(i1.CurrencyService), i0.ɵɵinject(i1.LanguageService), i0.ɵɵinject(i2.Router)); }, token: ProductListComponentService, providedIn: "root" });
ProductListComponentService = __decorate([
    Injectable({ providedIn: 'root' })
], ProductListComponentService);
export { ProductListComponentService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWxpc3QvY29udGFpbmVyL3Byb2R1Y3QtbGlzdC1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFDTCw0QkFBNEIsRUFDNUIsZUFBZSxFQUNmLGVBQWUsRUFDZixpQkFBaUIsRUFDakIsb0JBQW9CLEVBQ3BCLGNBQWMsRUFDZCxZQUFZLEdBQ2IsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLE1BQU0sRUFDTixLQUFLLEVBQ0wsV0FBVyxFQUNYLEdBQUcsR0FDSixNQUFNLGdCQUFnQixDQUFDOzs7O0FBZ0J4QixJQUFhLDJCQUEyQixHQUF4QyxNQUFhLDJCQUEyQjtJQVF0QyxZQUNZLG9CQUEwQyxFQUMxQyxPQUF1QixFQUN2QixjQUE4QixFQUM5QixlQUFnQyxFQUNoQyxlQUFnQyxFQUNoQyxNQUFjO1FBTGQseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBYjFCLDZCQUE2QjtRQUNuQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUlaLDRCQUF1QixHQUFHLDJCQUEyQixD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aEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFO1lBQ3ZCLFdBQVc7WUFDWCxtQkFBbUIsRUFBRSxPQUFPO1lBQzVCLFVBQVUsRUFBRSxJQUFJLENBQUMsY0FBYztTQUNoQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTs7WUEvSW1DLG9CQUFvQjtZQUNqQyxjQUFjO1lBQ1AsY0FBYztZQUNiLGVBQWU7WUFDZixlQUFlO1lBQ3hCLE1BQU07OztBQWRmLDJCQUEyQjtJQUR2QyxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7R0FDdEIsMkJBQTJCLENBd0p2QztTQXhKWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7XG4gIEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3QsXG4gIEN1cnJlbmN5U2VydmljZSxcbiAgTGFuZ3VhZ2VTZXJ2aWNlLFxuICBQcm9kdWN0U2VhcmNoUGFnZSxcbiAgUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gIFJvdXRpbmdTZXJ2aWNlLFxuICBTZWFyY2hDb25maWcsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBmaWx0ZXIsXG4gIHBsdWNrLFxuICBzaGFyZVJlcGxheSxcbiAgdGFwLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmludGVyZmFjZSBQcm9kdWN0TGlzdFJvdXRlUGFyYW1zIHtcbiAgYnJhbmRDb2RlPzogc3RyaW5nO1xuICBjYXRlZ29yeUNvZGU/OiBzdHJpbmc7XG4gIHF1ZXJ5Pzogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgU2VhcmNoQ3JpdGVyaWEge1xuICBjdXJyZW50UGFnZT86IG51bWJlcjtcbiAgcGFnZVNpemU/OiBudW1iZXI7XG4gIHNvcnRDb2RlPzogc3RyaW5nO1xuICBxdWVyeT86IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBQcm9kdWN0TGlzdENvbXBvbmVudFNlcnZpY2Uge1xuICAvLyBUT0RPOiBtYWtlIGl0IGNvbmZpZ3VyYWJsZVxuICBwcm90ZWN0ZWQgZGVmYXVsdFBhZ2VTaXplID0gMTA7XG5cbiAgcHJvdGVjdGVkIHN1YjogU3Vic2NyaXB0aW9uO1xuXG4gIHByb3RlY3RlZCByZWFkb25seSBSRUxFVkFOQ0VfQUxMQ0FURUdPUklFUyA9ICc6cmVsZXZhbmNlOmFsbENhdGVnb3JpZXM6JztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlYXJjaFNlcnZpY2U6IFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByb3RlY3RlZCBjdXJyZW5jeVNlcnZpY2U6IEN1cnJlbmN5U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRlcjogUm91dGVyXG4gICkge31cblxuICBwcml2YXRlIHNlYXJjaFJlc3VsdHMkOiBPYnNlcnZhYmxlPFxuICAgIFByb2R1Y3RTZWFyY2hQYWdlXG4gID4gPSB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlXG4gICAgLmdldFJlc3VsdHMoKVxuICAgIC5waXBlKGZpbHRlcihzZWFyY2hSZXN1bHQgPT4gT2JqZWN0LmtleXMoc2VhcmNoUmVzdWx0KS5sZW5ndGggPiAwKSk7XG5cbiAgcHJpdmF0ZSBzZWFyY2hCeVJvdXRpbmckOiBPYnNlcnZhYmxlPFxuICAgIEFjdGl2YXRlZFJvdXRlclN0YXRlU25hcHNob3RcbiAgPiA9IGNvbWJpbmVMYXRlc3QoW1xuICAgIHRoaXMucm91dGluZy5nZXRSb3V0ZXJTdGF0ZSgpLnBpcGUoXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgoeCwgeSkgPT4ge1xuICAgICAgICAvLyByb3V0ZXIgZW1pdHMgbmV3IHZhbHVlIGFsc28gd2hlbiB0aGUgYW50aWNpcGF0ZWQgYG5leHRTdGF0ZWAgY2hhbmdlc1xuICAgICAgICAvLyBidXQgd2Ugd2FudCB0byBwZXJmb3JtIHNlYXJjaCBvbmx5IHdoZW4gY3VycmVudCB1cmwgY2hhbmdlc1xuICAgICAgICByZXR1cm4geC5zdGF0ZS51cmwgPT09IHkuc3RhdGUudXJsO1xuICAgICAgfSlcbiAgICApLFxuICAgIC8vIGFsc28gdHJpZ2dlciBzZWFyY2ggb24gc2l0ZSBjb250ZXh0IGNoYW5nZXNcbiAgICB0aGlzLmxhbmd1YWdlU2VydmljZS5nZXRBY3RpdmUoKSxcbiAgICB0aGlzLmN1cnJlbmN5U2VydmljZS5nZXRBY3RpdmUoKSxcbiAgXSkucGlwZShcbiAgICBwbHVjaygwLCAnc3RhdGUnKSxcbiAgICB0YXAoKHN0YXRlOiBBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90KSA9PiB7XG4gICAgICBjb25zdCBjcml0ZXJpYSA9IHRoaXMuZ2V0Q3JpdGVyaWFGcm9tUm91dGUoXG4gICAgICAgIHN0YXRlLnBhcmFtcyxcbiAgICAgICAgc3RhdGUucXVlcnlQYXJhbXNcbiAgICAgICk7XG4gICAgICB0aGlzLnNlYXJjaChjcml0ZXJpYSk7XG4gICAgfSlcbiAgKTtcblxuICAvKipcbiAgICogVGhpcyBzdHJlYW0gc2hvdWxkIGJlIHVzZWQgb25seSBvbiB0aGUgUHJvZHVjdCBMaXN0aW5nIFBhZ2UuXG4gICAqXG4gICAqIEl0IG5vdCBvbmx5IGVtaXRzIHNlYXJjaCByZXN1bHRzLCBidXQgYWxzbyBwZXJmb3JtcyBhIHNlYXJjaCBvbiBldmVyeSBjaGFuZ2VcbiAgICogb2YgdGhlIHJvdXRlIChpLmUuIHJvdXRlIHBhcmFtcyBvciBxdWVyeSBwYXJhbXMpLlxuICAgKlxuICAgKiBXaGVuIGEgdXNlciBsZWF2ZXMgdGhlIFBMUCByb3V0ZSwgdGhlIFBMUCBjb21wb25lbnQgdW5zdWJzY3JpYmVzIGZyb20gdGhpcyBzdHJlYW1cbiAgICogc28gbm8gbG9uZ2VyIHRoZSBzZWFyY2ggaXMgcGVyZm9ybWVkIG9uIHJvdXRlIGNoYW5nZS5cbiAgICovXG4gIHJlYWRvbmx5IG1vZGVsJDogT2JzZXJ2YWJsZTxQcm9kdWN0U2VhcmNoUGFnZT4gPSBjb21iaW5lTGF0ZXN0KFtcbiAgICB0aGlzLnNlYXJjaFJlc3VsdHMkLFxuICAgIHRoaXMuc2VhcmNoQnlSb3V0aW5nJCxcbiAgXSkucGlwZShwbHVjaygwKSwgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KSk7XG5cbiAgY2xlYXJTZWFyY2hSZXN1bHRzKCk6IHZvaWQge1xuICAgIHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2UuY2xlYXJSZXN1bHRzKCk7XG4gIH1cblxuICBwcml2YXRlIGdldENyaXRlcmlhRnJvbVJvdXRlKFxuICAgIHJvdXRlUGFyYW1zOiBQcm9kdWN0TGlzdFJvdXRlUGFyYW1zLFxuICAgIHF1ZXJ5UGFyYW1zOiBTZWFyY2hDcml0ZXJpYVxuICApOiBTZWFyY2hDcml0ZXJpYSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHF1ZXJ5OiBxdWVyeVBhcmFtcy5xdWVyeSB8fCB0aGlzLmdldFF1ZXJ5RnJvbVJvdXRlUGFyYW1zKHJvdXRlUGFyYW1zKSxcbiAgICAgIHBhZ2VTaXplOiBxdWVyeVBhcmFtcy5wYWdlU2l6ZSB8fCB0aGlzLmRlZmF1bHRQYWdlU2l6ZSxcbiAgICAgIGN1cnJlbnRQYWdlOiBxdWVyeVBhcmFtcy5jdXJyZW50UGFnZSxcbiAgICAgIHNvcnRDb2RlOiBxdWVyeVBhcmFtcy5zb3J0Q29kZSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRRdWVyeUZyb21Sb3V0ZVBhcmFtcyh7XG4gICAgYnJhbmRDb2RlLFxuICAgIGNhdGVnb3J5Q29kZSxcbiAgICBxdWVyeSxcbiAgfTogUHJvZHVjdExpc3RSb3V0ZVBhcmFtcykge1xuICAgIGlmIChxdWVyeSkge1xuICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH1cbiAgICBpZiAoY2F0ZWdvcnlDb2RlKSB7XG4gICAgICByZXR1cm4gdGhpcy5SRUxFVkFOQ0VfQUxMQ0FURUdPUklFUyArIGNhdGVnb3J5Q29kZTtcbiAgICB9XG4gICAgaWYgKGJyYW5kQ29kZSkge1xuICAgICAgcmV0dXJuIHRoaXMuUkVMRVZBTkNFX0FMTENBVEVHT1JJRVMgKyBicmFuZENvZGU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZWFyY2goY3JpdGVyaWE6IFNlYXJjaENyaXRlcmlhKTogdm9pZCB7XG4gICAgY29uc3QgcXVlcnkgPSBjcml0ZXJpYS5xdWVyeTtcbiAgICBjb25zdCBzZWFyY2hDb25maWcgPSB0aGlzLmdldFNlYXJjaENvbmZpZyhjcml0ZXJpYSk7XG5cbiAgICB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlLnNlYXJjaChxdWVyeSwgc2VhcmNoQ29uZmlnKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U2VhcmNoQ29uZmlnKGNyaXRlcmlhOiBTZWFyY2hDcml0ZXJpYSk6IFNlYXJjaENvbmZpZyB7XG4gICAgY29uc3QgcmVzdWx0OiBTZWFyY2hDb25maWcgPSB7XG4gICAgICBjdXJyZW50UGFnZTogY3JpdGVyaWEuY3VycmVudFBhZ2UsXG4gICAgICBwYWdlU2l6ZTogY3JpdGVyaWEucGFnZVNpemUsXG4gICAgICBzb3J0Q29kZTogY3JpdGVyaWEuc29ydENvZGUsXG4gICAgfTtcblxuICAgIC8vIGRyb3AgZW1wdHkga2V5c1xuICAgIE9iamVjdC5rZXlzKHJlc3VsdCkuZm9yRWFjaChrZXkgPT4gIXJlc3VsdFtrZXldICYmIGRlbGV0ZSByZXN1bHRba2V5XSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc2V0UXVlcnkocXVlcnk6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2V0UXVlcnlQYXJhbXMoeyBxdWVyeSwgY3VycmVudFBhZ2U6IHVuZGVmaW5lZCB9KTtcbiAgfVxuXG4gIHZpZXdQYWdlKHBhZ2VOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuc2V0UXVlcnlQYXJhbXMoeyBjdXJyZW50UGFnZTogcGFnZU51bWJlciB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaXRlbXMgZnJvbSBhIGdpdmVuIHBhZ2Ugd2l0aG91dCB1c2luZyBuYXZpZ2F0aW9uXG4gICAqL1xuICBnZXRQYWdlSXRlbXMocGFnZU51bWJlcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5yb3V0aW5nXG4gICAgICAuZ2V0Um91dGVyU3RhdGUoKVxuICAgICAgLnN1YnNjcmliZShyb3V0ZSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdXRlQ3JpdGVyaWEgPSB0aGlzLmdldENyaXRlcmlhRnJvbVJvdXRlKFxuICAgICAgICAgIHJvdXRlLnN0YXRlLnBhcmFtcyxcbiAgICAgICAgICByb3V0ZS5zdGF0ZS5xdWVyeVBhcmFtc1xuICAgICAgICApO1xuICAgICAgICBjb25zdCBjcml0ZXJpYSA9IHtcbiAgICAgICAgICAuLi5yb3V0ZUNyaXRlcmlhLFxuICAgICAgICAgIGN1cnJlbnRQYWdlOiBwYWdlTnVtYmVyLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNlYXJjaChjcml0ZXJpYSk7XG4gICAgICB9KVxuICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBzb3J0KHNvcnRDb2RlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNldFF1ZXJ5UGFyYW1zKHsgc29ydENvZGUgfSk7XG4gIH1cblxuICBwcml2YXRlIHNldFF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zOiBTZWFyY2hDcml0ZXJpYSk6IHZvaWQge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtdLCB7XG4gICAgICBxdWVyeVBhcmFtcyxcbiAgICAgIHF1ZXJ5UGFyYW1zSGFuZGxpbmc6ICdtZXJnZScsXG4gICAgICByZWxhdGl2ZVRvOiB0aGlzLmFjdGl2YXRlZFJvdXRlLFxuICAgIH0pO1xuICB9XG59XG4iXX0=