import { __assign, __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivatedRouterStateSnapshot, CurrencyService, LanguageService, ProductSearchPage, ProductSearchService, RoutingService, SearchConfig, } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { distinctUntilChanged, filter, pluck, shareReplay, tap, } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
import * as i2 from "@angular/router";
var ProductListComponentService = /** @class */ (function () {
    function ProductListComponentService(productSearchService, routing, activatedRoute, currencyService, languageService, router) {
        var _this = this;
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
            .pipe(filter(function (searchResult) { return Object.keys(searchResult).length > 0; }));
        this.searchByRouting$ = combineLatest([
            this.routing.getRouterState().pipe(distinctUntilChanged(function (x, y) {
                // router emits new value also when the anticipated `nextState` changes
                // but we want to perform search only when current url changes
                return x.state.url === y.state.url;
            })),
            // also trigger search on site context changes
            this.languageService.getActive(),
            this.currencyService.getActive(),
        ]).pipe(pluck(0, 'state'), tap(function (state) {
            var criteria = _this.getCriteriaFromRoute(state.params, state.queryParams);
            _this.search(criteria);
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
    ProductListComponentService.prototype.clearSearchResults = function () {
        this.productSearchService.clearResults();
    };
    ProductListComponentService.prototype.getCriteriaFromRoute = function (routeParams, queryParams) {
        return {
            query: queryParams.query || this.getQueryFromRouteParams(routeParams),
            pageSize: queryParams.pageSize || this.defaultPageSize,
            currentPage: queryParams.currentPage,
            sortCode: queryParams.sortCode,
        };
    };
    ProductListComponentService.prototype.getQueryFromRouteParams = function (_a) {
        var brandCode = _a.brandCode, categoryCode = _a.categoryCode, query = _a.query;
        if (query) {
            return query;
        }
        if (categoryCode) {
            return this.RELEVANCE_ALLCATEGORIES + categoryCode;
        }
        if (brandCode) {
            return this.RELEVANCE_ALLCATEGORIES + brandCode;
        }
    };
    ProductListComponentService.prototype.search = function (criteria) {
        var query = criteria.query;
        var searchConfig = this.getSearchConfig(criteria);
        this.productSearchService.search(query, searchConfig);
    };
    ProductListComponentService.prototype.getSearchConfig = function (criteria) {
        var result = {
            currentPage: criteria.currentPage,
            pageSize: criteria.pageSize,
            sortCode: criteria.sortCode,
        };
        // drop empty keys
        Object.keys(result).forEach(function (key) { return !result[key] && delete result[key]; });
        return result;
    };
    ProductListComponentService.prototype.setQuery = function (query) {
        this.setQueryParams({ query: query, currentPage: undefined });
    };
    ProductListComponentService.prototype.viewPage = function (pageNumber) {
        this.setQueryParams({ currentPage: pageNumber });
    };
    /**
     * Get items from a given page without using navigation
     */
    ProductListComponentService.prototype.getPageItems = function (pageNumber) {
        var _this = this;
        this.routing
            .getRouterState()
            .subscribe(function (route) {
            var routeCriteria = _this.getCriteriaFromRoute(route.state.params, route.state.queryParams);
            var criteria = __assign(__assign({}, routeCriteria), { currentPage: pageNumber });
            _this.search(criteria);
        })
            .unsubscribe();
    };
    ProductListComponentService.prototype.sort = function (sortCode) {
        this.setQueryParams({ sortCode: sortCode });
    };
    ProductListComponentService.prototype.setQueryParams = function (queryParams) {
        this.router.navigate([], {
            queryParams: queryParams,
            queryParamsHandling: 'merge',
            relativeTo: this.activatedRoute,
        });
    };
    ProductListComponentService.ctorParameters = function () { return [
        { type: ProductSearchService },
        { type: RoutingService },
        { type: ActivatedRoute },
        { type: CurrencyService },
        { type: LanguageService },
        { type: Router }
    ]; };
    ProductListComponentService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductListComponentService_Factory() { return new ProductListComponentService(i0.ɵɵinject(i1.ProductSearchService), i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.ActivatedRoute), i0.ɵɵinject(i1.CurrencyService), i0.ɵɵinject(i1.LanguageService), i0.ɵɵinject(i2.Router)); }, token: ProductListComponentService, providedIn: "root" });
    ProductListComponentService = __decorate([
        Injectable({ providedIn: 'root' })
    ], ProductListComponentService);
    return ProductListComponentService;
}());
export { ProductListComponentService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1saXN0LWNvbXBvbmVudC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWxpc3QvY29udGFpbmVyL3Byb2R1Y3QtbGlzdC1jb21wb25lbnQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFDTCw0QkFBNEIsRUFDNUIsZUFBZSxFQUNmLGVBQWUsRUFDZixpQkFBaUIsRUFDakIsb0JBQW9CLEVBQ3BCLGNBQWMsRUFDZCxZQUFZLEdBQ2IsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsYUFBYSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUMvRCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLE1BQU0sRUFDTixLQUFLLEVBQ0wsV0FBVyxFQUNYLEdBQUcsR0FDSixNQUFNLGdCQUFnQixDQUFDOzs7O0FBZ0J4QjtJQVFFLHFDQUNZLG9CQUEwQyxFQUMxQyxPQUF1QixFQUN2QixjQUE4QixFQUM5QixlQUFnQyxFQUNoQyxlQUFnQyxFQUNoQyxNQUFjO1FBTjFCLGlCQU9JO1FBTlEseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUN2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBYjFCLDZCQUE2QjtRQUNuQixvQkFBZSxHQUFHLEVBQUUsQ0FBQztRQUlaLDRCQUF1QixHQUFHLDJCQUEyQixDQUFDO1FBV2pFLG1CQUFjLEdB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USxVQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFTyxvREFBYyxHQUF0QixVQUF1QixXQUEyQjtRQUNoRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUU7WUFDdkIsV0FBVyxhQUFBO1lBQ1gsbUJBQW1CLEVBQUUsT0FBTztZQUM1QixVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWM7U0FDaEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBakppQyxvQkFBb0I7Z0JBQ2pDLGNBQWM7Z0JBQ1AsY0FBYztnQkFDYixlQUFlO2dCQUNmLGVBQWU7Z0JBQ3hCLE1BQU07OztJQWRmLDJCQUEyQjtRQUR2QyxVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7T0FDdEIsMkJBQTJCLENBMkp2QztzQ0E3TEQ7Q0E2TEMsQUEzSkQsSUEySkM7U0EzSlksMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1xuICBBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90LFxuICBDdXJyZW5jeVNlcnZpY2UsXG4gIExhbmd1YWdlU2VydmljZSxcbiAgUHJvZHVjdFNlYXJjaFBhZ2UsXG4gIFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICBSb3V0aW5nU2VydmljZSxcbiAgU2VhcmNoQ29uZmlnLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkaXN0aW5jdFVudGlsQ2hhbmdlZCxcbiAgZmlsdGVyLFxuICBwbHVjayxcbiAgc2hhcmVSZXBsYXksXG4gIHRhcCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbnRlcmZhY2UgUHJvZHVjdExpc3RSb3V0ZVBhcmFtcyB7XG4gIGJyYW5kQ29kZT86IHN0cmluZztcbiAgY2F0ZWdvcnlDb2RlPzogc3RyaW5nO1xuICBxdWVyeT86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFNlYXJjaENyaXRlcmlhIHtcbiAgY3VycmVudFBhZ2U/OiBudW1iZXI7XG4gIHBhZ2VTaXplPzogbnVtYmVyO1xuICBzb3J0Q29kZT86IHN0cmluZztcbiAgcXVlcnk/OiBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgUHJvZHVjdExpc3RDb21wb25lbnRTZXJ2aWNlIHtcbiAgLy8gVE9ETzogbWFrZSBpdCBjb25maWd1cmFibGVcbiAgcHJvdGVjdGVkIGRlZmF1bHRQYWdlU2l6ZSA9IDEwO1xuXG4gIHByb3RlY3RlZCBzdWI6IFN1YnNjcmlwdGlvbjtcblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgUkVMRVZBTkNFX0FMTENBVEVHT1JJRVMgPSAnOnJlbGV2YW5jZTphbGxDYXRlZ29yaWVzOic7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZzogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcm90ZWN0ZWQgY3VycmVuY3lTZXJ2aWNlOiBDdXJyZW5jeVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlclxuICApIHt9XG5cbiAgcHJpdmF0ZSBzZWFyY2hSZXN1bHRzJDogT2JzZXJ2YWJsZTxcbiAgICBQcm9kdWN0U2VhcmNoUGFnZVxuICA+ID0gdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZVxuICAgIC5nZXRSZXN1bHRzKClcbiAgICAucGlwZShmaWx0ZXIoc2VhcmNoUmVzdWx0ID0+IE9iamVjdC5rZXlzKHNlYXJjaFJlc3VsdCkubGVuZ3RoID4gMCkpO1xuXG4gIHByaXZhdGUgc2VhcmNoQnlSb3V0aW5nJDogT2JzZXJ2YWJsZTxcbiAgICBBY3RpdmF0ZWRSb3V0ZXJTdGF0ZVNuYXBzaG90XG4gID4gPSBjb21iaW5lTGF0ZXN0KFtcbiAgICB0aGlzLnJvdXRpbmcuZ2V0Um91dGVyU3RhdGUoKS5waXBlKFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKHgsIHkpID0+IHtcbiAgICAgICAgLy8gcm91dGVyIGVtaXRzIG5ldyB2YWx1ZSBhbHNvIHdoZW4gdGhlIGFudGljaXBhdGVkIGBuZXh0U3RhdGVgIGNoYW5nZXNcbiAgICAgICAgLy8gYnV0IHdlIHdhbnQgdG8gcGVyZm9ybSBzZWFyY2ggb25seSB3aGVuIGN1cnJlbnQgdXJsIGNoYW5nZXNcbiAgICAgICAgcmV0dXJuIHguc3RhdGUudXJsID09PSB5LnN0YXRlLnVybDtcbiAgICAgIH0pXG4gICAgKSxcbiAgICAvLyBhbHNvIHRyaWdnZXIgc2VhcmNoIG9uIHNpdGUgY29udGV4dCBjaGFuZ2VzXG4gICAgdGhpcy5sYW5ndWFnZVNlcnZpY2UuZ2V0QWN0aXZlKCksXG4gICAgdGhpcy5jdXJyZW5jeVNlcnZpY2UuZ2V0QWN0aXZlKCksXG4gIF0pLnBpcGUoXG4gICAgcGx1Y2soMCwgJ3N0YXRlJyksXG4gICAgdGFwKChzdGF0ZTogQWN0aXZhdGVkUm91dGVyU3RhdGVTbmFwc2hvdCkgPT4ge1xuICAgICAgY29uc3QgY3JpdGVyaWEgPSB0aGlzLmdldENyaXRlcmlhRnJvbVJvdXRlKFxuICAgICAgICBzdGF0ZS5wYXJhbXMsXG4gICAgICAgIHN0YXRlLnF1ZXJ5UGFyYW1zXG4gICAgICApO1xuICAgICAgdGhpcy5zZWFyY2goY3JpdGVyaWEpO1xuICAgIH0pXG4gICk7XG5cbiAgLyoqXG4gICAqIFRoaXMgc3RyZWFtIHNob3VsZCBiZSB1c2VkIG9ubHkgb24gdGhlIFByb2R1Y3QgTGlzdGluZyBQYWdlLlxuICAgKlxuICAgKiBJdCBub3Qgb25seSBlbWl0cyBzZWFyY2ggcmVzdWx0cywgYnV0IGFsc28gcGVyZm9ybXMgYSBzZWFyY2ggb24gZXZlcnkgY2hhbmdlXG4gICAqIG9mIHRoZSByb3V0ZSAoaS5lLiByb3V0ZSBwYXJhbXMgb3IgcXVlcnkgcGFyYW1zKS5cbiAgICpcbiAgICogV2hlbiBhIHVzZXIgbGVhdmVzIHRoZSBQTFAgcm91dGUsIHRoZSBQTFAgY29tcG9uZW50IHVuc3Vic2NyaWJlcyBmcm9tIHRoaXMgc3RyZWFtXG4gICAqIHNvIG5vIGxvbmdlciB0aGUgc2VhcmNoIGlzIHBlcmZvcm1lZCBvbiByb3V0ZSBjaGFuZ2UuXG4gICAqL1xuICByZWFkb25seSBtb2RlbCQ6IE9ic2VydmFibGU8UHJvZHVjdFNlYXJjaFBhZ2U+ID0gY29tYmluZUxhdGVzdChbXG4gICAgdGhpcy5zZWFyY2hSZXN1bHRzJCxcbiAgICB0aGlzLnNlYXJjaEJ5Um91dGluZyQsXG4gIF0pLnBpcGUoXG4gICAgcGx1Y2soMCksXG4gICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICApO1xuXG4gIGNsZWFyU2VhcmNoUmVzdWx0cygpOiB2b2lkIHtcbiAgICB0aGlzLnByb2R1Y3RTZWFyY2hTZXJ2aWNlLmNsZWFyUmVzdWx0cygpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDcml0ZXJpYUZyb21Sb3V0ZShcbiAgICByb3V0ZVBhcmFtczogUHJvZHVjdExpc3RSb3V0ZVBhcmFtcyxcbiAgICBxdWVyeVBhcmFtczogU2VhcmNoQ3JpdGVyaWFcbiAgKTogU2VhcmNoQ3JpdGVyaWEge1xuICAgIHJldHVybiB7XG4gICAgICBxdWVyeTogcXVlcnlQYXJhbXMucXVlcnkgfHwgdGhpcy5nZXRRdWVyeUZyb21Sb3V0ZVBhcmFtcyhyb3V0ZVBhcmFtcyksXG4gICAgICBwYWdlU2l6ZTogcXVlcnlQYXJhbXMucGFnZVNpemUgfHwgdGhpcy5kZWZhdWx0UGFnZVNpemUsXG4gICAgICBjdXJyZW50UGFnZTogcXVlcnlQYXJhbXMuY3VycmVudFBhZ2UsXG4gICAgICBzb3J0Q29kZTogcXVlcnlQYXJhbXMuc29ydENvZGUsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UXVlcnlGcm9tUm91dGVQYXJhbXMoe1xuICAgIGJyYW5kQ29kZSxcbiAgICBjYXRlZ29yeUNvZGUsXG4gICAgcXVlcnksXG4gIH06IFByb2R1Y3RMaXN0Um91dGVQYXJhbXMpIHtcbiAgICBpZiAocXVlcnkpIHtcbiAgICAgIHJldHVybiBxdWVyeTtcbiAgICB9XG4gICAgaWYgKGNhdGVnb3J5Q29kZSkge1xuICAgICAgcmV0dXJuIHRoaXMuUkVMRVZBTkNFX0FMTENBVEVHT1JJRVMgKyBjYXRlZ29yeUNvZGU7XG4gICAgfVxuICAgIGlmIChicmFuZENvZGUpIHtcbiAgICAgIHJldHVybiB0aGlzLlJFTEVWQU5DRV9BTExDQVRFR09SSUVTICsgYnJhbmRDb2RlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2VhcmNoKGNyaXRlcmlhOiBTZWFyY2hDcml0ZXJpYSk6IHZvaWQge1xuICAgIGNvbnN0IHF1ZXJ5ID0gY3JpdGVyaWEucXVlcnk7XG4gICAgY29uc3Qgc2VhcmNoQ29uZmlnID0gdGhpcy5nZXRTZWFyY2hDb25maWcoY3JpdGVyaWEpO1xuXG4gICAgdGhpcy5wcm9kdWN0U2VhcmNoU2VydmljZS5zZWFyY2gocXVlcnksIHNlYXJjaENvbmZpZyk7XG4gIH1cblxuICBwcml2YXRlIGdldFNlYXJjaENvbmZpZyhjcml0ZXJpYTogU2VhcmNoQ3JpdGVyaWEpOiBTZWFyY2hDb25maWcge1xuICAgIGNvbnN0IHJlc3VsdDogU2VhcmNoQ29uZmlnID0ge1xuICAgICAgY3VycmVudFBhZ2U6IGNyaXRlcmlhLmN1cnJlbnRQYWdlLFxuICAgICAgcGFnZVNpemU6IGNyaXRlcmlhLnBhZ2VTaXplLFxuICAgICAgc29ydENvZGU6IGNyaXRlcmlhLnNvcnRDb2RlLFxuICAgIH07XG5cbiAgICAvLyBkcm9wIGVtcHR5IGtleXNcbiAgICBPYmplY3Qua2V5cyhyZXN1bHQpLmZvckVhY2goa2V5ID0+ICFyZXN1bHRba2V5XSAmJiBkZWxldGUgcmVzdWx0W2tleV0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHNldFF1ZXJ5KHF1ZXJ5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNldFF1ZXJ5UGFyYW1zKHsgcXVlcnksIGN1cnJlbnRQYWdlOiB1bmRlZmluZWQgfSk7XG4gIH1cblxuICB2aWV3UGFnZShwYWdlTnVtYmVyOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNldFF1ZXJ5UGFyYW1zKHsgY3VycmVudFBhZ2U6IHBhZ2VOdW1iZXIgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGl0ZW1zIGZyb20gYSBnaXZlbiBwYWdlIHdpdGhvdXQgdXNpbmcgbmF2aWdhdGlvblxuICAgKi9cbiAgZ2V0UGFnZUl0ZW1zKHBhZ2VOdW1iZXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucm91dGluZ1xuICAgICAgLmdldFJvdXRlclN0YXRlKClcbiAgICAgIC5zdWJzY3JpYmUocm91dGUgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZUNyaXRlcmlhID0gdGhpcy5nZXRDcml0ZXJpYUZyb21Sb3V0ZShcbiAgICAgICAgICByb3V0ZS5zdGF0ZS5wYXJhbXMsXG4gICAgICAgICAgcm91dGUuc3RhdGUucXVlcnlQYXJhbXNcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgY3JpdGVyaWEgPSB7XG4gICAgICAgICAgLi4ucm91dGVDcml0ZXJpYSxcbiAgICAgICAgICBjdXJyZW50UGFnZTogcGFnZU51bWJlcixcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZWFyY2goY3JpdGVyaWEpO1xuICAgICAgfSlcbiAgICAgIC51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgc29ydChzb3J0Q29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zZXRRdWVyeVBhcmFtcyh7IHNvcnRDb2RlIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRRdWVyeVBhcmFtcyhxdWVyeVBhcmFtczogU2VhcmNoQ3JpdGVyaWEpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXSwge1xuICAgICAgcXVlcnlQYXJhbXMsXG4gICAgICBxdWVyeVBhcmFtc0hhbmRsaW5nOiAnbWVyZ2UnLFxuICAgICAgcmVsYXRpdmVUbzogdGhpcy5hY3RpdmF0ZWRSb3V0ZSxcbiAgICB9KTtcbiAgfVxufVxuIl19